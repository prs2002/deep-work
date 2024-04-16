/*
    Monitor user activity and store the time spent on websites
*/

import { WebsiteTime } from "../../types/WebsiteTime";
import { hourlyRecap } from "../chatGPT/HourlyRecap";
import { getTaggedTime } from "../queryStorage/GetTaggedTime";
import { setBadgeText } from "../scripts/setBadgeText";

interface Website {
  id: string;
  website: string;
  tag: number;
}

export class WebTime {
  saveInterval: NodeJS.Timeout;
  focusedTab: chrome.tabs.Tab | undefined;
  idleTime: number = 30;
  isInFocus: boolean = true;
  dailyTime: WebsiteTime[] = [];
  weeklyTime: WebsiteTime[] = [];
  monthlyTime: WebsiteTime[] = [];
  hourlyTime: WebsiteTime[] = [];
  focusInterval: NodeJS.Timeout;
  isDisabled: boolean;
  constructor(
    dailyTime: WebsiteTime[],
    weeklyTime: WebsiteTime[],
    monthlyTime: WebsiteTime[],
    hourlyTime: WebsiteTime[],
    isDisabled: boolean
  ) {
    this.isDisabled = isDisabled;
    this.focusInterval = setInterval(this.updateFocus.bind(this), 1000);
    this.saveInterval = setInterval(this.updateData.bind(this), 1000);
    this.dailyTime = dailyTime;
    this.weeklyTime = weeklyTime;
    this.monthlyTime = monthlyTime;
    this.hourlyTime = hourlyTime;
  }

  updateFocus() {
    chrome.windows.getLastFocused({ populate: true }, (windows) => {
      this.isInFocus = windows.focused;
    });
  }

  updateData() {
    chrome.windows.getLastFocused({ populate: true }, (windows) => {
      if (!windows || !windows.tabs) {
        return;
      }
      for (let tab of windows.tabs) {
        if (tab.active) {
          this.focusedTab = tab;
          break;
        }
      }
      if (this.focusedTab === undefined) {
        return;
      }
      chrome.idle.queryState(this.idleTime, (state) => {
        const url = this.focusedTab!.url;
        if (!url) {
          return;
        }
        const origin = new URL(url).origin;
        if (
          state === "active" &&
          origin !== "" &&
          !origin.startsWith("chrome://") &&
          !origin.startsWith("chrome-extension://") &&
          !this.isDisabled
        ) {
          this.isInFocus && this.updateDataHelper(origin, this.focusedTab!.id!);
          this.isInFocus && this.saveData();
          this.isInFocus && this.addToUntagged(origin);
        }
      });
    });
  }
  updateDataHelper(origin: string, tabId: number) {
    let found = false;
    for (let i = 0; i < this.hourlyTime.length; i++) {
      if (this.hourlyTime[i].url === origin) {
        this.hourlyTime[i].time += 1000;
        found = true;
        break;
      }
    }
    if (!found) {
      this.hourlyTime.push({ url: origin, time: 1000 });
      found = false;
    }
    for (let i = 0; i < this.dailyTime.length; i++) {
      if (this.dailyTime[i].url === origin) {
        this.dailyTime[i].time += 1000;
        setBadgeText(this.dailyTime[i].time / 1000, tabId);
        found = true;
        break;
      }
    }
    if (!found) {
      this.dailyTime.push({ url: origin, time: 1000 });
      found = false;
    }
    for (let i = 0; i < this.weeklyTime.length; i++) {
      if (this.weeklyTime[i].url === origin) {
        this.weeklyTime[i].time += 1000;
        found = true;
        break;
      }
    }
    if (!found) {
      this.weeklyTime.push({ url: origin, time: 1000 });
      found = false;
    }
    for (let i = 0; i < this.monthlyTime.length; i++) {
      if (this.monthlyTime[i].url === origin) {
        this.monthlyTime[i].time += 1000;
        found = true;
        break;
      }
    }
    if (!found) {
      this.monthlyTime.push({ url: origin, time: 1000 });
      found = false;
    }
  }
  saveData() {
    this.storeDailyTime();
    this.storeWeeklyTime();
    this.storeMonthlyTime();
    this.storeHourlyTime();
  }

  async addToUntagged(url: string) {
    const visited = await this.checkIfURLVisited(url);
    if (!visited) {
      chrome.storage.local.get(["visitedURLs"], (data) => {
        const visitedURLs = data.visitedURLs || [];
        visitedURLs.push(url);
        chrome.storage.local.set({ visitedURLs: visitedURLs });
      });
    }
  }

  async storeWeeklyTime() {
    const day: number = new Date().getDay();
    const lastDay: number =
      (await chrome.storage.local.get("dayToday")).dayToday || 0;
    if (day === 1 && day !== lastDay) {
      // Monday
      await this.setNewWeek();
    } else if (day !== lastDay) {
      // Same week but new day
      await chrome.storage.local.set({ dayToday: day });
      const numberOfDaysInWeek =
        (await chrome.storage.local.get("numberOfDaysInWeek"))
          .numberOfDaysInWeek || 0;
      await chrome.storage.local.set({
        numberOfDaysInWeek: numberOfDaysInWeek + 1,
      });
    }
    await chrome.storage.local.set({ weeklyTime: this.weeklyTime });
    return;
  }

  async storeMonthlyTime() {
    const month: number = new Date().getMonth();
    const lastMonth: number =
      (await chrome.storage.local.get("monthToday")).monthToday || 0;
    if (month !== lastMonth) {
      await this.setNewMonth();
    }
    await chrome.storage.local.set({ monthlyTime: this.monthlyTime });
    return;
  }

  async storeDailyTime() {
    // Store the time spent on the website for the day
    const dateString = new Date().toDateString(); // Get the current date
    const oldDate = (await chrome.storage.local.get("today"))?.today || ""; // Get the last date the user was active
    if (oldDate !== dateString) {
      const month: number = new Date().getMonth();
      const lastMonth: number =
        (await chrome.storage.local.get("monthToday")).monthToday || 0;
      if (month !== lastMonth) {
        await this.setNewDay(false);
      } else {
        await this.setNewDay(true);
      }
    }
    await chrome.storage.local.set({ dailyTime: this.dailyTime });
    return;
  }
  async storeHourlyTime() {
    // Store the time spent on the website for the hour
    const dateString = new Date().getTime(); // Get the current time
    const oldDate =
      (await chrome.storage.local.get("hourBegin"))?.hourBegin || 0; // Get the last hour beginning
    if (dateString - oldDate > 60 * 60 * 1000) {
      await this.setNewHour(oldDate);
    }
    await chrome.storage.local.set({ hourlyTime: this.hourlyTime });
    return;
  }

  async setNewDay(isNewMonth: boolean) {
    const dateString = new Date().toDateString();
    if (!isNewMonth) {
      let numberOfDays =
        (await chrome.storage.local.get("numberOfDays")).numberOfDays || 0;
      await chrome.storage.local.set({ numberOfDays: numberOfDays + 1 });
    }
    await chrome.storage.local.set({ today: dateString });
    await chrome.storage.local.set({ dailyTime: [] });
    await chrome.storage.local.set({ yesterdayTime: this.dailyTime });
    this.dailyTime = [];
  }

  async setNewWeek() {
    const day: number = new Date().getDay();
    await chrome.storage.local.set({ numberOfDaysInWeek: 1 });
    await chrome.storage.local.set({ dayToday: day });

    await chrome.storage.local.set({ weeklyTime: [] });
    this.weeklyTime = [];
  }
  async setNewMonth() {
    const month: number = new Date().getMonth();
    await chrome.storage.local.set({ numberOfDays: 1 });
    await chrome.storage.local.set({ monthToday: month });
    await chrome.storage.local.set({ monthlyTime: [] });
    this.monthlyTime = [];
  }

  async setNewHour(oldDate: number) {
    const time: number = new Date().getTime();
    await chrome.storage.local.set({ hourBegin: time });
    hourlyRecap(await getTaggedTime("hourlyTime"), oldDate);
    await chrome.storage.local.set({ hourlyTime: [] });
    this.hourlyTime = [];
  }

  checkIfURLVisited(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      chrome.storage.local.get(["visitedURLs", "taggedURLs"], (data) => {
        const visitedURLs = data.visitedURLs || [];
        const taggedURLs = data.taggedURLs || [];
        resolve(
          visitedURLs.includes(url) ||
            taggedURLs.some((website: Website) => website.website === url)
        );
      });
    });
  }

  setDisable(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}

export {};
