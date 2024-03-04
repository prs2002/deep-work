import { AITagging } from "./utils/AITagging";
import { updateDynamicRules } from "./utils/BlockURLs";
import { WebActivity } from "./utils/WebActivity";
import { WebTime } from "./utils/WebTime";

var isExtensionDisabled: boolean = false;
var isExtensionDisabledOnWeekend: boolean = true;
var isWeekend: boolean = [0, 6].includes(new Date().getDay());
var webActivityInstance: WebActivity | null = null;
var isWindowHidden: boolean = false;
var webTime: WebTime | null = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "visibility_changed") {
    isWindowHidden = request.hidden;
    if (webTime) {
      webTime.setWindowHidden(isWindowHidden);
    }
  }
  sendResponse({ message: "received" });
});

function checkDisable(): boolean {
  return isExtensionDisabled || isExtensionDisabledOnWeekend;
}

async function handleExtensionEnable() {
  isExtensionDisabledOnWeekend =
    ((await chrome.storage.local.get("isDisabledOnWeekend"))
      .isDisabledOnWeekend ||
      false) &&
    isWeekend;
  chrome.storage.local.get("isDisabled", (data) => {
    if (data === undefined) {
      chrome.storage.local.set({ isDisabled: false });
      isExtensionDisabled = false;
      return;
    }
    isExtensionDisabled = data.isDisabled;
    if (webActivityInstance) {
      webActivityInstance.setExtensionDisabled(checkDisable());
    } else {
      webActivityInstance = new WebActivity(checkDisable());
    }
    if (webTime) {
      webTime.setExtensionDisabled(checkDisable());
    } else {
      webTime = new WebTime(isWindowHidden, checkDisable());
    }
  });

  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
        if (webActivityInstance) {
          webActivityInstance.setExtensionDisabled(checkDisable());
        } else {
          webActivityInstance = new WebActivity(checkDisable());
        }
        if (webTime) {
          webTime.setExtensionDisabled(checkDisable());
        } else {
          webTime = new WebTime(isWindowHidden, checkDisable());
        }
      }
      if (changes["blockedURLs"]) {
        const blockedURLs: string[] = changes["blockedURLs"].newValue;
        if (blockedURLs.length === 0) {
          blockedURLs.push("not_a_real_website_example.com");
        }
        updateDynamicRules(blockedURLs);
      }
      if (changes["isDisabledOnWeekend"]) {
        isExtensionDisabledOnWeekend = changes["isDisabledOnWeekend"].newValue && isWeekend;
      }
    }
  );
}

async function tagWebsite() {
  if (checkDisable()) {
    return;
  }
  await AITagging();
}

handleExtensionEnable();
setInterval(tagWebsite, 300000); // 5 minutes

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
