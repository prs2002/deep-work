/*
Function to nudge a user by  prompt on a distracting website
 */

import { fetchFunnyLines } from "../queryStorage/FetchFunnyLines";
import { nonBlockingPopUp } from "../DOM_SCRIPTS/NonBlockingPopUp";
import { insertFinalAlert } from "../DOM_SCRIPTS/FinalAlert";

interface TaggedURL {
  id: string;
  website: string;
  tag: number;
}

export class NudgeUser {
  violations: number;
  website: string;
  interval: NodeJS.Timer | undefined;
  isExtensionDisabled: boolean;
  violationsLimit: number = -1;
  promptINTERVAL: number = -1;
  grayScalePercentage: number = 20;
  tag: number = -1;
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
      chrome.storage.local.get("promptParameters", async (result) => {
        if (result.promptParameters) {
          const promptParameters = result.promptParameters;
          if (promptParameters[this.website]) {
            if(this.tag === 1) {
              delete promptParameters[this.website];
              await chrome.storage.local.set({
                promptParameters: promptParameters,
              });
              return;
            }
            this.promptINTERVAL = promptParameters[this.website].promptInterval;
            this.violationsLimit =
              promptParameters[this.website].promptViolations;
          } else if (this.tag > 1) {
            promptParameters[this.website] = {
              promptInterval: 180,
              promptViolations: 5,
            };
            await chrome.storage.local.set({
              promptParameters: promptParameters,
            });
            this.promptINTERVAL = 180;
            this.violationsLimit = 5;
          }
        } else if (this.tag > 1) {
          const promptParameters = {} as any;
          promptParameters[this.website] = {
            promptInterval: 180,
            promptViolations: 5,
          };
          await chrome.storage.local.set({
            promptParameters: promptParameters,
          });
          this.promptINTERVAL = 180;
          this.violationsLimit = 5;
        }
        this.grayScalePercentage = 100 / this.violationsLimit;
        this.interval = setInterval(() => {
          this.nudgeUser();
        }, this.promptINTERVAL * 1000);
      });
    });
  }
  async nudgeUser() {
    if (this.violationsLimit === -1 || this.isExtensionDisabled) {
      return;
    }
    if (this.violations >= this.violationsLimit) {
      const line: string = await fetchFunnyLines(this.website);
      insertFinalAlert(line);
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
    if (disabled === this.isExtensionDisabled) {
      return;
    }
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
