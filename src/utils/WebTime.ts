/*

Class to store the web time of the user

*/

export class WebTime {
  baseUrl: string = "";
  startTime: number;
  interval: NodeJS.Timeout;
  isHidden: boolean;
  isDisabled: boolean;
  constructor(isHidden: boolean, isDisabled: boolean) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].url) {
        const currentUrl = new URL(tabs[0].url).origin;
        this.baseUrl = currentUrl;
      }
    });
    this.startTime = Date.now();
    this.interval = setInterval(this.measureTime.bind(this), 1000);
    this.isHidden = isHidden;
    this.isDisabled = isDisabled;
  }

  setWindowHidden(isHidden: boolean) {
    this.isHidden = isHidden;
  }

  setExtensionDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  setStartTime(startTime: number) {
    this.startTime = startTime;
  }

  getTimeSpent(): number {
    return Date.now() - this.startTime;
  }

  async storeTime() {
    let oldTime = (await chrome.storage.local.get("webTime"))?.webTime || [];
    for (let i = 0; i < oldTime.length; i++) {
      if (oldTime[i].url === this.baseUrl) {
        oldTime[i].time += this.getTimeSpent();
        await chrome.storage.local.set({ webTime: oldTime });
        return;
      }
    }
    oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
    await chrome.storage.local.set({ webTime: oldTime });
    return;
  }

  async storeDailyTime() {
    let oldTime =
      (await chrome.storage.local.get("dailyTime"))?.dailyTime || [];
    const date = new Date();
    const dateString = date.toDateString();
    const oldDate =
      (await chrome.storage.local.get("today"))?.today || "";
    if (oldDate !== dateString) {
      oldTime = [];
      await chrome.storage.local.set({ today: dateString });
    }
    for (let i = 0; i < oldTime.length; i++) {
      if (oldTime[i].url === this.baseUrl) {
        oldTime[i].time += this.getTimeSpent();
        await chrome.storage.local.set({ dailyTime: oldTime });
        return;
      }
    }
    oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
    await chrome.storage.local.set({ dailyTime: oldTime });
    return;
  }

  measureTime() {
    if (this.isDisabled) {
      return;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].url) {
        const currentUrl = new URL(tabs[0].url).origin;
        if (currentUrl !== this.baseUrl) {
          this.storeDailyTime().then(() => {
            this.storeTime().then(() => {
              this.baseUrl = currentUrl;
              this.startTime = Date.now();
            });
          });
        } else if (this.isHidden) {
          this.storeDailyTime().then(() => {
            this.storeTime().then(() => {
              this.startTime = Date.now();
            });
          });
        } else if (this.getTimeSpent() > 30000) {
          this.storeDailyTime().then(() => {
            this.storeTime().then(() => {
              this.startTime = Date.now();
            });
          });
        }
      }
    });
  }
}
