import { AITagging } from "./utils/AITagging";
import { WebActivity } from "./utils/WebActivity";

var isExtensionDisabled: boolean = true;
var webActivityInstance: WebActivity | null = null;
var isWindowHidden: boolean = false;

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
  chrome.storage.sync.get("isDisabled", (data) => {
    if (data.isDisabled === undefined) {
      chrome.storage.sync.set({ isDisabled: false });
      isExtensionDisabled = false;
      return;
    }
    isExtensionDisabled = data.isDisabled;
    if (webActivityInstance) {
      webActivityInstance.setExtensionDisabled(isExtensionDisabled);
    }
    else {
      webActivityInstance = new WebActivity(isExtensionDisabled);
    }
  });

  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
        if (webActivityInstance) {
          webActivityInstance.setExtensionDisabled(isExtensionDisabled);
        }
        else {
          webActivityInstance = new WebActivity(isExtensionDisabled);
        }
      }
    }
  );
}


async function tagWebsite() {
  if(isExtensionDisabled) {
    return;
  }
  await AITagging();
};


handleExtensionEnable();
setInterval(tagWebsite, 30000);



export {};
