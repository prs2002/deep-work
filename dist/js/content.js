/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/CONSTANTS/constants.ts
const grayscaleExtensionOverlayId = "grayscale-extension-overlay";
const nonBlockingPopupId = "non-blocking-popup";
const blockingPopupId = "blocking-popup";

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/BlockingPopUp.ts
/*
    Function to create a blocking pop-up to nudge a user on a distracting website
*/

function blockingPopUp(line) {
    return new Promise((resolve) => {
        if (document.getElementById(blockingPopupId)) {
            resolve(0);
        }
        else {
            var styleElement = document.createElement("style");
            styleElement.id = `${blockingPopupId}-style`;
            styleElement.textContent = `
    #${blockingPopupId} {
      all: revert;
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        margin: auto !important;
        top: 50vh !important;
        transform: translateY(-50%) !important;
        background-color: #fff !important;
        padding: 20px !important;
        border-radius: 8px !important;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important; /* shadow effect */
        min-width: 400px !important;
        width: 100% !important;
        max-width: 800px !important;
        backdrop-filter: blur(100px) !important;
        z-index: 1000000 !important;
        color: black !important;
        font-size: 16px !important;
    }

    #${blockingPopupId} * {
      all: revert;
      color: black !important;
    }

    .${blockingPopupId}-content {
        text-align: center !important;
    }

    .${blockingPopupId}-content h2 {
        margin-top: 0 !important;
    }
    .${blockingPopupId}-content #close_button {
        border-radius:10px !important;
        border:none !important;
        padding:0.75em 1.5em !important;
        background-color:green !important;
        color: white !important;
        cursor:pointer !important;
      }
`;
            document.head.appendChild(styleElement);
            var popupDiv = document.createElement("div");
            popupDiv.id = blockingPopupId;
            popupDiv.innerHTML = `
    <div class="${blockingPopupId}-content">
        <h2>${line}</h2>
        <p>Here's an activity to help you regain focus:</p>
        <p>Step away from your desk and take a five-minute break.</p>
        <button id = "close_button">
            Close
          </button>
    </div>
`;
            document.body.appendChild(popupDiv);
            var closeButton = popupDiv.querySelector("button");
            if (!closeButton) {
                resolve(0);
                return;
            }
            closeButton.addEventListener("click", () => {
                document.body.removeChild(popupDiv);
                document.head.removeChild(styleElement);
                window.location.href = "https://www.google.com";
            });
        }
    });
}

;// CONCATENATED MODULE: ./src/utils/FetchFunnyLines.ts
/*
    This file is used to fetch funny lines local storage and randomly select a line to display to the user.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchFunnyLines(url) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const funnyLines = ((_a = (yield chrome.storage.local.get("funnyLines"))) === null || _a === void 0 ? void 0 : _a.funnyLines) || [];
        const obj = funnyLines.find((obj) => {
            return obj["URL"] === url;
        });
        if (obj) {
            const randomLine = obj.lines[Math.floor(Math.random() * obj.lines.length)];
            return randomLine;
        }
        return "Feeling Distracted?";
    });
}

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/NonBlockingPopUp.ts
/*
    Function to create a non-blocking pop-up to nudge a user on a distracting website
*/

function nonBlockingPopUp() {
    if (document.getElementById(nonBlockingPopupId)) {
        return new Promise((resolve) => {
            resolve(0);
        });
    }
    return new Promise((resolve) => {
        var _a, _b;
        var styleElement = document.createElement("style");
        styleElement.id = `${nonBlockingPopupId}-style`;
        styleElement.textContent = `
    #${nonBlockingPopupId} {
      all: revert;
      position: absolute !important;
      top: 20px !important;
      right: 20px !important;
      background-color: #fff !important;
      padding: 20px !important;
      border-radius: 10px !important;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important; /* shadow effect */
      z-index: 1000000 !important;
      color: black !important;
      width: 300px !important;
      text-align: center !important;
    }

    #${nonBlockingPopupId} * {
      all: revert;
      color: black !important;
    }

    #${nonBlockingPopupId} #agreeButton {
      background-color: #4CAF50 !important;
      text-align: center !important;
      color: white !important;
      border: none !important;
      padding: 15px 32px !important;
      border-radius: 10px !important;
      margin: 4px 2px !important;
      margin-top: 10px !important;
      cursor: pointer !important;
      font-size: 16px !important;
      text-decoration: none !important;
    }

    #${nonBlockingPopupId} #moreTimeButton {
      background-color: #f44336 !important;
      text-align: center !important;
      color: white !important;
      border: none !important;
      padding: 15px 32px !important;
      border-radius: 10px !important;
      margin: 4px 2px !important;
      margin-top: 10px !important;
      cursor: pointer !important;
      font-size: 16px !important;
      text-decoration: none !important;
    }
`;
        document.head.appendChild(styleElement);
        const body = document.querySelector("body");
        const div = document.createElement("div");
        div.id = nonBlockingPopupId;
        div.innerHTML = `
      <h2>Feeling Distracted?</h2>
      <p>Would you like to go back to work?</p>
      <div id="buttonContainer">
          <button id="agreeButton">Yes</button>
          <button id="moreTimeButton">Just a bit more time</button>
      </div>
      `;
        body === null || body === void 0 ? void 0 : body.appendChild(div);
        const agreeButton = document.getElementById("agreeButton");
        const moreTimeButton = document.getElementById("moreTimeButton");
        if (!agreeButton || !moreTimeButton) {
            return;
        }
        (_a = document
            .getElementById("agreeButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            window.location.href = "https://www.google.com";
            resolve(0);
        });
        (_b = document
            .getElementById("moreTimeButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            var _a;
            const nonBlockingPopUp = document.getElementById(nonBlockingPopupId);
            if (nonBlockingPopUp) {
                (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.removeChild(nonBlockingPopUp);
                document.head.removeChild(styleElement);
            }
            resolve(1);
        });
    });
}

;// CONCATENATED MODULE: ./src/utils/NudgeUser.ts
/*
Function to nudge a user by non blocking prompt on a distracting website
 */
var NudgeUser_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class NudgeUser {
    constructor(isExtensionDisabled) {
        this.tag = -1;
        this.violationsLimit = 3;
        this.promptINTERVAL = 10;
        this.violations = 0;
        this.website = window.location.origin;
        this.isExtensionDisabled = isExtensionDisabled;
        chrome.storage.local.get("taggedURLs", (result) => {
            if (result.taggedURLs) {
                const taggedList = result.taggedURLs;
                const element = taggedList.find((taggedURL) => taggedURL.website === this.website);
                if (element) {
                    this.tag = element.tag;
                }
                else {
                    this.tag = 0;
                }
            }
        });
        chrome.storage.local.get("promptInterval", (result) => {
            if (result.promptInterval) {
                this.promptINTERVAL = result.promptInterval;
            }
            else {
                chrome.storage.local.set({ promptInterval: this.promptINTERVAL });
            }
            this.interval = setInterval(() => {
                this.nudgeUser();
            }, this.promptINTERVAL * 1000);
        });
        chrome.storage.local.get("promptViolations", (result) => {
            if (result.promptViolations) {
                this.violationsLimit = result.promptViolations;
            }
            else {
                chrome.storage.local.set({ promptViolations: this.violationsLimit });
            }
        });
    }
    nudgeUser() {
        return NudgeUser_awaiter(this, void 0, void 0, function* () {
            if (this.tag === -1 || this.tag === 1 || this.isExtensionDisabled) {
                return;
            }
            if (this.violations >= this.violationsLimit) {
                const line = yield fetchFunnyLines(this.website);
                blockingPopUp(line);
                clearInterval(this.interval);
                return;
            }
            this.violations += yield nonBlockingPopUp();
        });
    }
    setIsDisabled(disabled) {
        this.isExtensionDisabled = disabled;
    }
    setPromptInterval(interval) {
        this.promptINTERVAL = interval;
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.nudgeUser();
        }, this.promptINTERVAL * 1000);
    }
    setPromptViolations(violations) {
        this.violationsLimit = violations;
    }
}

;// CONCATENATED MODULE: ./src/content.ts
var content_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let lastVisibilityState = document.hidden;
let isExtensionDisabled = false;
let nudgeUser;
function sendMessageToBackground(hidden) {
    try {
        if (isExtensionDisabled) {
            return;
        }
        chrome.runtime.sendMessage({ message: "visibility_changed", hidden: hidden }, (response) => {
            console.log(response.message);
        });
    }
    catch (error) {
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
        }
        else {
            nudgeUser.setIsDisabled(isExtensionDisabled);
        }
    });
    chrome.storage.onChanged.addListener((changes) => content_awaiter(this, void 0, void 0, function* () {
        if (changes["isDisabled"]) {
            isExtensionDisabled = changes["isDisabled"].newValue;
        }
        if (!nudgeUser) {
            nudgeUser = new NudgeUser(isExtensionDisabled);
        }
        else {
            nudgeUser.setIsDisabled(isExtensionDisabled);
            if (changes["promptInterval"]) {
                nudgeUser.setPromptInterval(changes["promptInterval"].newValue);
            }
            if (changes["promptViolations"]) {
                nudgeUser.setPromptViolations(changes["promptViolations"].newValue);
            }
        }
    }));
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

/******/ })()
;