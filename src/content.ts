import { NudgeUser } from "./utils/NudgeUser";

let lastVisibilityState = document.hidden;
let isExtensionDisabled = false;
let nudgeUser: NudgeUser;

function sendMessageToBackground(hidden: boolean) {
  try {
    if (isExtensionDisabled) {
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

function setIsDisabled() {
  chrome.storage.local.get("isDisabled", (data) => {
    if (data === undefined) {
      chrome.storage.local.set({ isDisabled: true });
      isExtensionDisabled = true;
      return;
    }
    isExtensionDisabled = data.isDisabled;
    if (!nudgeUser) {
      nudgeUser = new NudgeUser(isExtensionDisabled);
    } else {
      nudgeUser.setIsDisabled(isExtensionDisabled);
    }
  });
  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionDisabled = changes["isDisabled"].newValue;
      }
      if (!nudgeUser) {
        nudgeUser = new NudgeUser(isExtensionDisabled);
      } else {
        nudgeUser.setIsDisabled(isExtensionDisabled);
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

nudgeUser = new NudgeUser(isExtensionDisabled);

export {};
