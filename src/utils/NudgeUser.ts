/*
Function to nudge a user by non blocking prompt on a distracting website
 */

import { blockingPopUp } from "./DOM_SCRIPTS/BlockingPopUp";
import { fetchFunnyLines } from "./FetchFunnyLines";
import { nonBlockingPopUp } from "./DOM_SCRIPTS/NonBlockingPopUp";

interface TaggedURL {
  id: string;
  website: string;
  tag: number;
}

export class NudgeUser {
  violations: number;
  website: string;
  tag: number = -1;
  interval: NodeJS.Timer | undefined;
  isExtensionDisabled: boolean;
  violationsLimit: number = 3;
  promptINTERVAL: number = 10;
  constructor(isExtensionDisabled: boolean) {
    this.violations = 0;
    this.website = window.location.origin;
    this.isExtensionDisabled = isExtensionDisabled;
    chrome.storage.local.get("taggedURLs", (result) => {
      if (result.taggedURLs) {
        const taggedList: TaggedURL[] = result.taggedURLs;
        const element: TaggedURL | undefined = taggedList.find(
          (taggedURL: TaggedURL) => taggedURL.website === this.website
        );
        if (element) {
          this.tag = element.tag;
        } else {
          this.tag = 0;
        }
      }
    });
    chrome.storage.local.get("promptInterval", (result) => {
      if (result.promptInterval) {
        this.promptINTERVAL = result.promptInterval;
      } else {
        chrome.storage.local.set({ promptInterval: this.promptINTERVAL });
      }
      this.interval = setInterval(() => {
        this.nudgeUser();
      }, this.promptINTERVAL * 1000);
    });
    chrome.storage.local.get("promptViolations", (result) => {
      if (result.promptViolations) {
        this.violationsLimit = result.promptViolations;
      } else {
        chrome.storage.local.set({ promptViolations: this.violationsLimit });
      }
    });
  }
  async nudgeUser() {
    if (this.tag === -1 || this.tag === 1 || this.isExtensionDisabled) {
      return;
    }
    if (this.violations >= this.violationsLimit) {
      const line : string = await fetchFunnyLines(this.website);
      blockingPopUp(line);
      clearInterval(this.interval);
      return;
    }
    this.violations += await nonBlockingPopUp();
  }

  setIsDisabled(disabled: boolean) {
    this.isExtensionDisabled = disabled;
  }

  setPromptInterval(interval: number) {
    this.promptINTERVAL = interval;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.nudgeUser();
    }, this.promptINTERVAL * 1000);
  }
  setPromptViolations(violations: number) {
    this.violationsLimit = violations;
  }
}
