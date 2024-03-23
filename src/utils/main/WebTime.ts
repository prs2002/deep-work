/*
    Monitor user activity and store the time spent on websites
*/

import { setBadgeText } from "../scripts/setBadgeText";

interface WebsiteTime {
  url: string;
  time: number;
}

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
  focusInterval: NodeJS.Timeout;
  constructor(
    dailyTime: WebsiteTime[],
    weeklyTime: WebsiteTime[],
    monthlyTime: WebsiteTime[]
  ) {
    this.focusInterval = setInterval(this.updateFocus.bind(this), 1000);
    this.saveInterval = setInterval(this.updateData.bind(this), 1000);
    this.dailyTime = dailyTime;
    this.weeklyTime = weeklyTime;
    this.monthlyTime = monthlyTime;
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
          !origin.startsWith("chrome://")
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
  }

  async addToUntagged(url : string) {
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
      await this.setNewDay();
    }
    await chrome.storage.local.set({ dailyTime: this.dailyTime });
    return;
  }

  async setNewDay() {
    const dateString = new Date().toDateString();
    let numberOfDays =
      (await chrome.storage.local.get("numberOfDays")).numberOfDays || 0;
    await chrome.storage.local.set({ numberOfDays: numberOfDays + 1 });
    await chrome.storage.local.set({ today: dateString });
    await chrome.storage.local.set({ dailyTime: [] });
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
}

export {};
