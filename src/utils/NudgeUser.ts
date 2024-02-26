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
  violationsLimit: number = 5;
  promptINTERVAL: number = 180;
  grayScalePercentage: number = 20;
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
    chrome.storage.local.get("promptParameters", async (result) => {
      if (result.promptParameters) {
        const promptParameters = result.promptParameters;
        if (promptParameters[this.website]) {
          this.promptINTERVAL = promptParameters[this.website].promptInterval;
          this.violationsLimit =
            promptParameters[this.website].promptViolations;
        } else {
          promptParameters[this.website] = {
            promptInterval: 180,
            promptViolations: 5,
          };
          await chrome.storage.local.set({
            promptParameters: promptParameters,
          });
        }
        this.grayScalePercentage = 100 / this.violationsLimit;
        this.interval = setInterval(() => {
          this.nudgeUser();
        }, this.promptINTERVAL * 1000);
      }
    });
  }
  async nudgeUser() {
    console.log(this.interval, this.violationsLimit);

    if (this.tag === -1 || this.tag === 1 || this.isExtensionDisabled) {
      return;
    }
    if (this.violations >= this.violationsLimit) {
      const line: string = await fetchFunnyLines(this.website);
      blockingPopUp(line);
      clearInterval(this.interval);
      return;
    }
    const violated = await nonBlockingPopUp(this.grayScalePercentage);
    if (violated) {
      this.violations++;
      this.grayScalePercentage += 100 / this.violationsLimit;
    }
  }

  setIsDisabled(disabled: boolean) {
    this.isExtensionDisabled = disabled;
  }

  setPromptInterval(interval: number) {
    if (interval === this.promptINTERVAL) return;
    this.promptINTERVAL = interval;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.nudgeUser();
    }, this.promptINTERVAL * 1000);
  }
  setPromptViolations(violations: number) {
    if (violations === this.violationsLimit) return;
    this.violationsLimit = violations;
  }
}
