import { addGreetingPopup } from "./utils/DOM_SCRIPTS/GreetingPopup";
import { hourlySummary } from "./utils/HourlySummary";
import { NudgeUser } from "./utils/NudgeUser";

let lastVisibilityState = document.hidden;
let isExtensionDisabled = false;
var isExtensionDisabledOnWeekend: boolean = true;
var isWeekend: boolean = [0, 6].includes(new Date().getDay());
let nudgeUser: NudgeUser;

function checkDisable(): boolean {
  return isExtensionDisabled || isExtensionDisabledOnWeekend;
}

function sendMessageToBackground(hidden: boolean) {
  try {
    if (checkDisable()) {
      return;
    }
    chrome.runtime.sendMessage(
      { message: "visibility_changed", hidden: hidden },
      (response) => {
        console.log(response.message);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function setIsDisabled() {
  isExtensionDisabledOnWeekend =
    ((await chrome.storage.local.get("isDisabledOnWeekend"))
      .isDisabledOnWeekend ||
      false) &&
    isWeekend;
  chrome.storage.local.get("isDisabled", (data) => {
    if (data === undefined) {
      chrome.storage.local.set({ isDisabled: true });
      isExtensionDisabled = true;
      return;
    }
    isExtensionDisabled = data.isDisabled;
    if (!nudgeUser) {
      nudgeUser = new NudgeUser(checkDisable());
    } else {
      nudgeUser.setIsDisabled(checkDisable());
    }
  });
  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
      }
      if (!nudgeUser) {
        nudgeUser = new NudgeUser(checkDisable());
      } else {
        nudgeUser.setIsDisabled(checkDisable());
        if (changes["promptParameters"]) {
          const currentURL = window.location.origin;
          const promptParameters = changes["promptParameters"].newValue;
          if (promptParameters[currentURL]) {
            nudgeUser.setPromptViolations(
              promptParameters[currentURL].promptViolations
            );
            nudgeUser.setPromptInterval(
              promptParameters[currentURL].promptInterval
            );
          }
        }
      }
      if (changes["isDisabledOnWeekend"]) {
        isExtensionDisabledOnWeekend =
          changes["isDisabledOnWeekend"].newValue && isWeekend;
      }
    }
  );
}

setIsDisabled();

setInterval(() => {
  if (document.hidden !== lastVisibilityState) {
    lastVisibilityState = document.hidden;
    sendMessageToBackground(lastVisibilityState);
  }
}, 1000);

sendMessageToBackground(lastVisibilityState);

nudgeUser = new NudgeUser(checkDisable());

chrome.storage.local.get("lastGreeted", (data) => {
  if (data.lastGreeted === undefined) {
    addGreetingPopup();
    chrome.storage.local.set({ lastGreeted: new Date().toDateString() });
  } else {
    const today = new Date().toDateString();
    if (data.lastGreeted !== today) {
      addGreetingPopup();
      chrome.storage.local.set({ lastGreeted: today });
    }
  }
});

setInterval(hourlySummary, 300000);

export {};
