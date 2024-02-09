/*
Class to handle time spent on a web page
*/

interface Website {
  id: string;
  website: string;
  tag: number;
}

export class WebActivity {
  baseUrl: string = "";
  timeSpent: number;
  interval: NodeJS.Timeout;
  isExtensionDisabled: boolean = true;
  isURLVisited: boolean = false;
  isWindowHidden: boolean = false;
  constructor(isDisabled: boolean) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].url) {
        const currentUrl = new URL(tabs[0].url).origin;
        WebActivity.checkIfURLVisited(currentUrl).then((isVisited) => {
          this.isURLVisited = isVisited;
          this.baseUrl = currentUrl;
        });
      }
    });
    this.timeSpent = 1;
    this.interval = setInterval(this.keepTrack.bind(this), 1000);
    this.isExtensionDisabled = isDisabled;
  }

  setExtensionDisabled(isDisabled: boolean) {
    this.isExtensionDisabled = isDisabled;
  }

  setWindowHidden(isHidden: boolean) {
    this.isWindowHidden = isHidden;
  }

  keepTrack() {
    console.log(this.baseUrl, this.isURLVisited, this.timeSpent);

    if (this.isExtensionDisabled || this.isWindowHidden) {
      return;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].url) {
        const currentUrl = new URL(tabs[0].url).origin;
        if (this.baseUrl !== currentUrl) {
          WebActivity.checkIfURLVisited(currentUrl).then((isVisited) => {
            this.isURLVisited = isVisited;
            this.baseUrl = currentUrl;
            this.timeSpent = 1;
          });
        } else if (this.isURLVisited || !this.baseUrl) {
          return;
        } else if (this.timeSpent >= 30) {
          this.isURLVisited = true;
          WebActivity.checkIfURLVisited(this.baseUrl).then((isVisited) => {
            if (isVisited) {
              return;
            }
            chrome.storage.local.get("visitedURLs", (data) => {
              const visitedURLs = data.visitedURLs || [];
              visitedURLs.push(this.baseUrl);
              chrome.storage.local.set({ visitedURLs: visitedURLs });
            });
          });
          return;
        } else {
          this.timeSpent++;
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
