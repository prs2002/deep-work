import { AITagging } from "./utils/AITagging";
import { WebActivity } from "./utils/WebActivity";
import { WebTime } from "./utils/WebTime";

var isExtensionDisabled: boolean = true;
var webActivityInstance: WebActivity | null = null;
var isWindowHidden: boolean = false;
var webTime: WebTime | null = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "visibility_changed") {
    isWindowHidden = request.hidden;
    if (webActivityInstance) {
      webActivityInstance.setWindowHidden(isWindowHidden);
    }
  }
  sendResponse({ message: "received" });
});

async function handleExtensionEnable() {
  chrome.storage.local.get("isDisabled", (data) => {
    if (data === undefined) {
      chrome.storage.local.set({ isDisabled: true });
      isExtensionDisabled = true;
      return;
    }
    isExtensionDisabled = data.isDisabled;
    if (webActivityInstance) {
      webActivityInstance.setExtensionDisabled(isExtensionDisabled);
    } else {
      webActivityInstance = new WebActivity(isExtensionDisabled);
    }
    if (webTime) {
      webTime.setExtensionDisabled(isExtensionDisabled);
    } else {
      webTime = new WebTime(isWindowHidden, isExtensionDisabled);
    }
  });

  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
        if (webActivityInstance) {
          webActivityInstance.setExtensionDisabled(isExtensionDisabled);
        } else {
          webActivityInstance = new WebActivity(isExtensionDisabled);
        }
        if (webTime) {
          webTime.setExtensionDisabled(isExtensionDisabled);
        } else {
          webTime = new WebTime(isWindowHidden, isExtensionDisabled);
        }
      }
    }
  );
}

async function tagWebsite() {
  if (isExtensionDisabled) {
    return;
  }
  await AITagging();
}

handleExtensionEnable();
setInterval(tagWebsite, 300000);

export {};
