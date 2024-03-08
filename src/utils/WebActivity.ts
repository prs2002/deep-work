/*
Class to store the web activity of the user
*/

interface Website {
  id: string;
  website: string;
  tag: number;
}

export class WebActivity {
  interval: NodeJS.Timeout;
  constructor(isDisabled: boolean) {
    this.interval = setInterval(this.keepTrack.bind(this), 10000);
    if (isDisabled) {
      this.clear();
    }
  }

  setExtensionDisabled(isDisabled: boolean) {
    if(isDisabled) {
      this.clear();
    } else {
      this.clear();
      this.interval = setInterval(this.keepTrack.bind(this), 10000);
    }
  }

  keepTrack() {
    chrome.storage.local.get(["dailyTime"], async (data) => {
      if (data.dailyTime === undefined) {
        return;
      }
      const dailyTime = data.dailyTime;
      for (let i = 0; i < dailyTime.length; i++) {
        const timeSpent = dailyTime[i].time;

        if (timeSpent > 30000) {
          const url = dailyTime[i].url;
          const visited = await WebActivity.checkIfURLVisited(url);
          if (!visited) {
            chrome.storage.local.get(["visitedURLs"], (data) => {
              const visitedURLs = data.visitedURLs || [];
              visitedURLs.push(url);
              chrome.storage.local.set({ visitedURLs: visitedURLs });
            });
          }
        }
      }
    });
  }

  clear() {
    clearInterval(this.interval);
  }

  static checkIfURLVisited(url: string): Promise<boolean> {
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
