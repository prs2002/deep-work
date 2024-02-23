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
  isExtensionDisabled: boolean = true;
  constructor(isDisabled: boolean) {
    this.interval = setInterval(this.keepTrack.bind(this), 10000);
    this.isExtensionDisabled = isDisabled;
  }

  setExtensionDisabled(isDisabled: boolean) {
    this.isExtensionDisabled = isDisabled;
  }

  keepTrack() {
    if (this.isExtensionDisabled) {
      return;
    }

    chrome.storage.local.get(["webTime"], async (data) => {
      if (data.webTime === undefined) {
        return;
      }
      const webTime = data.webTime;
      for (let i = 0; i < webTime.length; i++) {
        const timeSpent = webTime[i].time;

        if (timeSpent > 30000) {
          const url = webTime[i].url;
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
