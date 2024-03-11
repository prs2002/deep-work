import { AITagging } from "./utils/AITagging";
import { updateDynamicRules } from "./utils/BlockURLs";

chrome.runtime.onMessage.addListener(function (request, sender) {
  chrome.tabs.update(sender.tab!.id!, { url: request.redirect });
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
  });

  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
      }
      if (changes["blockedURLs"]) {
        const blockedURLs: string[] = changes["blockedURLs"].newValue;
        if (blockedURLs.length === 0) {
          blockedURLs.push("not_a_real_website_example.com");
        }
        updateDynamicRules(blockedURLs);
      }
      if (changes["isDisabledOnWeekend"]) {
        isExtensionDisabledOnWeekend =
          changes["isDisabledOnWeekend"].newValue && isWeekend;
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
setInterval(tagWebsite, 300000);

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

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("landing.html") });
});

async function checkAlarm() {
  const alarm = await chrome.alarms.get("tagWebsite");
  if (alarm) {
    await chrome.alarms.clear("tagWebsite");
  }
  chrome.alarms.create("tagWebsite", { periodInMinutes: 10 });
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "tagWebsite") {
    tagWebsite();
  }
});

checkAlarm();

loadData();

export {};
