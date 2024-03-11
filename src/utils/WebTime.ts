/*

Class to store the web time of the user

! This class is not used in the extension

*/

// interface WebsiteTime {
//   url: string;
//   time: number;
// }

// export class WebTime {
//   baseUrl: string = "";
//   startTime: number;
//   interval: NodeJS.Timeout | undefined;
//   isHidden: boolean;
//   isDisabled: boolean;
//   constructor(isHidden: boolean, isDisabled: boolean) {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       if (tabs && tabs[0] && tabs[0].url) {
//         if (!tabs[0].url || tabs[0].url === "chrome://newtab/") {
//           return;
//         }
//         const currentUrl = new URL(tabs[0].url).origin;
//         if (currentUrl !== "") {
//           this.baseUrl = currentUrl;
//         }
//       }
//     });
//     this.startTime = Date.now();
//     // this.interval = setInterval(this.measureTime.bind(this), 1000);
//     this.isHidden = isHidden;
//     this.isDisabled = isDisabled;
//   }

//   setWindowHidden(isHidden: boolean) {
//     this.isHidden = isHidden;
//     if (isHidden) {
//       this.storeAllTime();
//     }
//   }

//   setExtensionDisabled(isDisabled: boolean) {
//     this.isDisabled = isDisabled;
//   }

//   setStartTime(startTime: number) {
//     this.startTime = startTime;
//   }

//   getTimeSpent(): number {
//     return Date.now() - this.startTime;
//   }

//   async storeTime() {
//     // Store the time spent on the website
//     let oldTime: WebsiteTime[] = (
//       (await chrome.storage.local.get("webTime"))?.webTime || []
//     ).filter((e: WebsiteTime) => e.url !== "");
//     for (let i = 0; i < oldTime.length; i++) {
//       if (oldTime[i].url === this.baseUrl) {
//         oldTime[i].time += this.getTimeSpent();
//         await chrome.storage.local.set({ webTime: oldTime });
//         return;
//       }
//     }
//     oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
//     await chrome.storage.local.set({ webTime: oldTime });
//     return;
//   }

//   async storeWeeklyTime() {
//     const day: number = new Date().getDay();
//     const lastDay: number =
//       (await chrome.storage.local.get("dayToday")).dayToday || 0;
//     if (day === 1 && day !== lastDay) {
//       // Monday
//       await this.setNewWeek();
//     } else if (day !== lastDay) {
//       // Same week but new day
//       await chrome.storage.local.set({ dayToday: day });
//       const numberOfDaysInWeek =
//         (await chrome.storage.local.get("numberOfDaysInWeek"))
//           .numberOfDaysInWeek || 0;
//       await chrome.storage.local.set({
//         numberOfDaysInWeek: numberOfDaysInWeek + 1,
//       });
//     }
//     let oldTime: WebsiteTime[] = (
//       (await chrome.storage.local.get("weeklyTime"))?.weeklyTime || []
//     ).filter((e: WebsiteTime) => e.url !== "");
//     for (let i = 0; i < oldTime.length; i++) {
//       if (oldTime[i].url === this.baseUrl) {
//         oldTime[i].time += this.getTimeSpent();
//         await chrome.storage.local.set({ weeklyTime: oldTime });
//         return;
//       }
//     }
//     oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
//     await chrome.storage.local.set({ weeklyTime: oldTime });
//     return;
//   }

//   async storeMonthlyTime() {
//     const month: number = new Date().getMonth();
//     const lastMonth: number =
//       (await chrome.storage.local.get("monthToday")).monthToday || 0;
//     if (month !== lastMonth) {
//       await this.setNewMonth();
//     }
//     let oldTime: WebsiteTime[] = (
//       (await chrome.storage.local.get("monthlyTime"))?.monthlyTime || []
//     ).filter((e: WebsiteTime) => e.url !== "");
//     for (let i = 0; i < oldTime.length; i++) {
//       if (oldTime[i].url === this.baseUrl) {
//         oldTime[i].time += this.getTimeSpent();
//         await chrome.storage.local.set({ monthlyTime: oldTime });
//         return;
//       }
//     }
//     oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
//     await chrome.storage.local.set({ monthlyTime: oldTime });
//     return;
//   }

//   async storeDailyTime() {
//     // Store the time spent on the website for the day
//     let oldTime: WebsiteTime[] = (
//       (await chrome.storage.local.get("dailyTime"))?.dailyTime || []
//     ).filter((e: WebsiteTime) => e.url !== "");
//     const date = new Date();
//     const dateString = date.toDateString(); // Get the current date
//     const oldDate = (await chrome.storage.local.get("today"))?.today || ""; // Get the last date the user was active
//     if (oldDate !== dateString) {
//       oldTime = [];
//       await this.setNewDay();
//     }
//     for (let i = 0; i < oldTime.length; i++) {
//       if (oldTime[i].url === this.baseUrl) {
//         oldTime[i].time += this.getTimeSpent();
//         await chrome.storage.local.set({ dailyTime: oldTime });
//         return;
//       }
//     }
//     oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
//     await chrome.storage.local.set({ dailyTime: oldTime });
//     return;
//   }

//   measureTime() {
//     if (this.isDisabled || this.baseUrl === "" || this.isHidden) {
//       this.startTime = Date.now();
//       return;
//     }
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       if (tabs && tabs[0] && tabs[0].url) {
//         if (!tabs[0].url || tabs[0].url === "chrome://newtab/") {
//           return;
//         }
//         const currentUrl = new URL(tabs[0].url).origin;
//         if (currentUrl !== this.baseUrl && currentUrl !== "") {
//           this.storeAllTime(currentUrl);
//         } else if (this.isHidden) {
//         } else if (this.getTimeSpent() > 20000) {
//           // If the user has been on the website for more than 20 seconds
//           this.storeAllTime();
//         }
//       }
//     });
//   }

//   async setNewDay() {
//     const dateString = new Date().toDateString();
//     let numberOfDays: number =
//       (await chrome.storage.local.get("numberOfDays"))?.numberOfDays || 0;
//     await chrome.storage.local.set({ numberOfDays: numberOfDays + 1 });
//     await chrome.storage.local.set({ today: dateString });
//   }

//   async setNewWeek() {
//     const day: number = new Date().getDay();
//     await chrome.storage.local.set({ numberOfDaysInWeek: 1 });
//     await chrome.storage.local.set({ dayToday: day });

//     await chrome.storage.local.set({ weeklyTime: [] });
//   }
//   async setNewMonth() {
//     const month: number = new Date().getMonth();
//     await chrome.storage.local.set({ numberOfDays: 1 });
//     await chrome.storage.local.set({ monthToday: month });
//     await chrome.storage.local.set({ monthlyTime: [] });
//   }

//   async storeAllTime(currentURL?: string) {
//     const promises = [];
//     promises.push(this.storeDailyTime());
//     promises.push(this.storeTime());
//     promises.push(this.storeWeeklyTime());
//     promises.push(this.storeMonthlyTime());
//     Promise.all(promises).then(() => {
//       this.startTime = Date.now();
//       if (currentURL) {
//         this.baseUrl = currentURL;
//       }
//     });
//   }
// }

export {};