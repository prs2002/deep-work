interface WebsiteTime {
  url: string;
  time: number;
}

function isMusicPlaying() {
  // Check if any HTML5 audio or video elements are playing
  const mediaElements = document.querySelectorAll("audio, video");
  for (let i = 0; i < mediaElements.length; i++) {
    if (!(mediaElements[i] as HTMLMediaElement).paused) {
      return true;
    }
  }
  return false;
}

export class ContentWebTime {
  startTime: number;
  interval: NodeJS.Timeout;
  constructor(isDisabled: boolean) {
    this.startTime = Date.now();
    this.interval = setInterval(() => {
      this.measureTime();
    }, 1000);
    if (isDisabled) {
      clearInterval(this.interval);
    }
  }
  setExtensionDisabled(isDisabled: boolean) {
    if (isDisabled) {
      clearInterval(this.interval);
    } else {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.measureTime();
      }, 1000);
    }
  }

  setStartTime() {
    this.startTime = Date.now();
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
    let oldTime: WebsiteTime[] = (
      (await chrome.storage.local.get("weeklyTime"))?.weeklyTime || []
    ).filter((e: WebsiteTime) => e.url !== "");
    for (let i = 0; i < oldTime.length; i++) {
      if (oldTime[i].url === document.location.origin) {
        oldTime[i].time += this.getTimeSpent();
        await chrome.storage.local.set({ weeklyTime: oldTime });
        return;
      }
    }
    oldTime.push({ url: document.location.origin, time: this.getTimeSpent() });
    await chrome.storage.local.set({ weeklyTime: oldTime });
    return;
  }

  async storeMonthlyTime() {
    const month: number = new Date().getMonth();
    const lastMonth: number =
      (await chrome.storage.local.get("monthToday")).monthToday || 0;
    if (month !== lastMonth) {
      await this.setNewMonth();
    }
    let oldTime: WebsiteTime[] = (
      (await chrome.storage.local.get("monthlyTime"))?.monthlyTime || []
    ).filter((e: WebsiteTime) => e.url !== "");
    for (let i = 0; i < oldTime.length; i++) {
      if (oldTime[i].url === document.location.origin) {
        oldTime[i].time += this.getTimeSpent();
        await chrome.storage.local.set({ monthlyTime: oldTime });
        return;
      }
    }
    oldTime.push({ url: document.location.origin, time: this.getTimeSpent() });
    await chrome.storage.local.set({ monthlyTime: oldTime });
    return;
  }

  async storeDailyTime() {
    // Store the time spent on the website for the day
    let oldTime: WebsiteTime[] = (
      (await chrome.storage.local.get("dailyTime"))?.dailyTime || []
    ).filter((e: WebsiteTime) => e.url !== "");
    const dateString = new Date().toDateString(); // Get the current date
    const oldDate = (await chrome.storage.local.get("today"))?.today || ""; // Get the last date the user was active
    if (oldDate !== dateString) {
      oldTime = [];
      await this.setNewDay();
    }
    for (let i = 0; i < oldTime.length; i++) {
      if (oldTime[i].url === document.location.origin) {
        oldTime[i].time += this.getTimeSpent();
        await chrome.storage.local.set({ dailyTime: oldTime });
        return;
      }
    }
    oldTime.push({ url: document.location.origin, time: this.getTimeSpent() });
    await chrome.storage.local.set({ dailyTime: oldTime });
    return;
  }

  measureTime() {
    if (!document.hasFocus() && !isMusicPlaying()) {
      this.startTime = Date.now();
      return;
    } else if (
      !document.location.origin ||
      document.location.origin === "chrome://newtab/"
    ) {
      return;
    } else if (this.getTimeSpent() > 2000) {
      this.storeAllTime();
    }
  }

  async setNewDay() {
    const dateString = new Date().toDateString();
    let numberOfDays =
      (await chrome.storage.local.get("numberOfDays")).numberOfDays || 0;
    if (numberOfDays === 0) {
      numberOfDays = 1;
      await chrome.storage.local.set({ numberOfDays });
    }
    await chrome.storage.local.set({ today: dateString });
  }

  async setNewWeek() {
    const day: number = new Date().getDay();
    await chrome.storage.local.set({ numberOfDaysInWeek: 1 });
    await chrome.storage.local.set({ dayToday: day });

    await chrome.storage.local.set({ weeklyTime: [] });
  }
  async setNewMonth() {
    const month: number = new Date().getMonth();
    await chrome.storage.local.set({ numberOfDays: 1 });
    await chrome.storage.local.set({ monthToday: month });
    await chrome.storage.local.set({ monthlyTime: [] });
  }

  getTimeSpent() {
    return Date.now() - this.startTime;
  }
  async storeAllTime() {
    if (!document.location.origin) {
      alert();
    }
    const promises = [];
    promises.push(this.storeDailyTime());
    promises.push(this.storeWeeklyTime());
    promises.push(this.storeMonthlyTime());
    Promise.all(promises).then(() => {
      this.startTime = Date.now();
    });
  }
}
