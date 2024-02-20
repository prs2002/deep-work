import { AITagging } from "./utils/AITagging";
import { updateDynamicRules } from "./utils/BlockURLs";
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
      if (changes["blockedURLs"]) {
        const blockedURLs : string[] = changes["blockedURLs"].newValue;
        if(blockedURLs.length === 0) {
          blockedURLs.push("not_a_real_website_example.com");
        }
        updateDynamicRules(blockedURLs);
      }
    }
  );
}

async function tagWebsite() {
  if (isExtensionDisabled) {
    return;
  }
  console.log("TAg");

  await AITagging();
}

handleExtensionEnable();
setInterval(tagWebsite, 3600000);

function loadData() {
  fetch("../data/funny_lines.json").then((response) => {
    response.json().then((data) => {
      chrome.storage.local.set({ funnyLines: data });
    });
  });
  fetch("../data/tagged_urls.json").then((response) => {
    response.json().then((data) => {
      chrome.storage.local.set({ preTaggedUrls: data });
    });
  });
}

loadData();

export {};
