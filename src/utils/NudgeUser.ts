/*
Function to nudge a user by  prompt on a distracting website
 */

import { fetchFunnyLines } from "./FetchFunnyLines";
import { nonBlockingPopUp } from "./DOM_SCRIPTS/NonBlockingPopUp";
import { insertFinalAlert } from "./DOM_SCRIPTS/FinalAlert";

export class NudgeUser {
  violations: number;
  website: string;
  interval: NodeJS.Timer | undefined;
  isExtensionDisabled: boolean;
  violationsLimit: number = -1;
  promptINTERVAL: number = -1;
  grayScalePercentage: number = 20;
  constructor(isExtensionDisabled: boolean) {
    this.violations = 0;
    this.website = window.location.origin;
    this.isExtensionDisabled = isExtensionDisabled;
    chrome.storage.local.get("promptParameters", async (result) => {
      if (result.promptParameters) {
        const promptParameters = result.promptParameters;
        if (promptParameters[this.website]) {
          this.promptINTERVAL = promptParameters[this.website].promptInterval;
          this.violationsLimit =
            promptParameters[this.website].promptViolations;
        }
        this.grayScalePercentage = 100 / this.violationsLimit;
        this.interval = setInterval(() => {
          this.nudgeUser();
        }, this.promptINTERVAL * 1000);
      }
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
