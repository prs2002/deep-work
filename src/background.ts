import { AITagging } from "./utils/chatGPT/AITagging";
import { dailyRecap } from "./utils/chatGPT/DailyRecap";
import { WebTime } from "./utils/main/WebTime";

let webTime: WebTime | undefined;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.redirect) {
    chrome.tabs.update(sender.tab!.id!, { url: request.redirect });
  } else if (request.summarize === "prevDay") {
    dailyRecap().then(function(result) {
      sendResponse({ success: true, result });
    }).catch(function(error) {
      sendResponse({ success: false, error: error.message });
    });
    return true; // Indicates that response will be sent asynchronously
  }
});

var isExtensionDisabled: boolean = false;
var isExtensionDisabledOnWeekend: boolean = true;
var isWeekend: boolean = [0, 6].includes(new Date().getDay());

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
    if (webTime) {
      webTime.setDisable(checkDisable());
    }
  });

  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
      }
      if (changes["isDisabledOnWeekend"]) {
        isExtensionDisabledOnWeekend =
          changes["isDisabledOnWeekend"].newValue && isWeekend;
      }
      if (webTime) {
        webTime.setDisable(checkDisable());
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

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason.reason === "install") {
    chrome.tabs.create({ url: chrome.runtime.getURL("landing.html") });
  }
});

async function checkAlarm() {
  const alarm = await chrome.alarms.get("tagWebsite");
  if (alarm) {
    await chrome.alarms.clear("tagWebsite");
  }
  chrome.alarms.create("tagWebsite", { periodInMinutes: 0.75 });
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "tagWebsite") {
    tagWebsite();
  }
});

checkAlarm();

chrome.storage.local.get((res) => {
  const dailyTime = res.dailyTime || [];
  const weeklyTime = res.weeklyTime || [];
  const monthlyTime = res.monthlyTime || [];
  webTime = new WebTime(dailyTime, weeklyTime, monthlyTime, checkDisable());
});

chrome.runtime.onStartup.addListener(() => {});

chrome.action.setBadgeBackgroundColor({ color: [0, 255, 0, 0] });

loadData();

export {};
