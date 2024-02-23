/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/UpdateWebsitesInStorage.ts
/*
Function to update websites in storage
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
function updateWebsitesInStorage(websites) {
    return __awaiter(this, void 0, void 0, function* () {
        const oldTaggedWebsites = (yield chrome.storage.local.get("taggedURLs")).taggedURLs || [];
        const oldVisitedWebsites = (yield chrome.storage.local.get("visitedURLs")).visitedURLs || [];
        for (let i = 0; i < websites.length; i++) {
            for (let j = 0; j < oldTaggedWebsites.length; j++) {
                if (oldTaggedWebsites[j].website === websites[i].website) { // if the website was already tagged, remove it
                    oldTaggedWebsites.splice(j, 1);
                }
            }
            if (oldVisitedWebsites.includes(websites[i].website)) { // if the website was already in un-tagged list, remove it
                oldVisitedWebsites.splice(oldVisitedWebsites.indexOf(websites[i].website), 1);
            }
            if (websites[i].tag !== 0) { // if the website is tagged, add it to tagged list
                oldTaggedWebsites.push(websites[i]);
            }
            else { // if the website is not tagged, add it to un-tagged list
                oldVisitedWebsites.push(websites[i].website);
            }
        }
        yield chrome.storage.local.set({
            taggedURLs: oldTaggedWebsites,
        });
        yield chrome.storage.local.set({
            visitedURLs: oldVisitedWebsites,
        });
    });
}

;// CONCATENATED MODULE: ./src/utils/AITagging.ts
var AITagging_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function apiCall(website, authKey) {
    return AITagging_awaiter(this, void 0, void 0, function* () {
        try {
            const requestBody = {
                model: "gpt-3.5-turbo-0125",
                response_format: { type: "json_object" },
                messages: [
                    {
                        role: "user",
                        content: `Imagine you're a digital detective tasked with classifying websites as either 'wasteful,' 'productive,' or 'unsure.' You're given a website URL, and you must determine its classification based on whether it helps with work, is used to kill time, or is ambiguous in its purpose. For the purpose of this task, 'work' is defined as any activity that contributes to one's professional or educational goals, such as research, learning, collaboration, or productivity tools. Your output should be a JSON object containing the classification, the URL. For example, if the website is Netflix.com and the description is your response might be: {'CLASSIFICATION': 'Wasteful', 'URL': 'netflix.com'}. Now, classify ${website}
      `,
                    },
                ],
            };
            const res = yield fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authKey.authKey}`,
                },
                body: JSON.stringify(requestBody),
            });
            const data = yield res.json();
            const classifiedWebsites = data.choices[0].message.content;
            const classifiedWebsitesObject = JSON.parse(classifiedWebsites);
            return classifiedWebsitesObject;
        }
        catch (err) {
            console.log(err);
            return {};
        }
    });
}
function AITagging() {
    var _a, _b;
    return AITagging_awaiter(this, void 0, void 0, function* () {
        console.log("AI");
        try {
            const authKey = yield chrome.storage.local.get("authKey");
            if (!authKey.authKey) {
                throw new Error("No API Key found");
            }
            const websites = yield chrome.storage.local.get("visitedURLs");
            if (!websites.visitedURLs) {
                throw new Error("No URLs found");
            }
            const websiteList = websites.visitedURLs;
            if (websiteList.length === 0) {
                return;
            }
            const preTaggedUrls = ((_a = (yield chrome.storage.local.get("preTaggedUrls"))) === null || _a === void 0 ? void 0 : _a.preTaggedUrls) || [];
            const taggedWebsites = [];
            for (let i = 0; i < websiteList.length; i++) {
                const website = websiteList[i];
                let classification = "unsure";
                const obj = preTaggedUrls.find((obj) => obj.URL === website);
                console.log(obj);
                if (obj) {
                    classification = obj.CLASSIFICATION.toLowerCase();
                }
                else {
                    const tagged = yield apiCall(website, authKey);
                    classification = (_b = tagged.CLASSIFICATION) === null || _b === void 0 ? void 0 : _b.toLowerCase();
                    // await new Promise((resolve) => {
                    //   setTimeout(resolve, 60000) // wait 30 seconds for rate limit
                    // })
                }
                let tag = 0;
                if (classification === "productive") {
                    tag = 1;
                }
                else if (classification === "unsure") {
                    tag = 2;
                }
                else {
                    tag = 3;
                }
                taggedWebsites.push({ id: website, website, tag });
            }
            console.log(taggedWebsites);
            updateWebsitesInStorage(taggedWebsites);
        }
        catch (e) {
            console.error(e);
        }
    });
}

;// CONCATENATED MODULE: ./src/utils/BlockURLs.ts
function updateDynamicRules(blockedURLs) {
    chrome.declarativeNetRequest.getDynamicRules((previousRules) => {
        const previousRuleIds = previousRules.map((rule) => rule.id);
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: previousRuleIds,
            addRules: [
                {
                    action: {
                        type: chrome.declarativeNetRequest.RuleActionType.BLOCK,
                    },
                    condition: {
                        isUrlFilterCaseSensitive: true,
                        regexFilter: blockedURLs.join("|"),
                        resourceTypes: [
                            chrome.declarativeNetRequest.ResourceType.MAIN_FRAME,
                            chrome.declarativeNetRequest.ResourceType.SUB_FRAME,
                        ],
                    },
                    id: 1,
                    priority: 2,
                },
            ],
        });
    });
}

;// CONCATENATED MODULE: ./src/utils/WebActivity.ts
/*
Class to store the web activity of the user
*/
var WebActivity_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class WebActivity {
    constructor(isDisabled) {
        this.isExtensionDisabled = true;
        this.interval = setInterval(this.keepTrack.bind(this), 10000);
        this.isExtensionDisabled = isDisabled;
    }
    setExtensionDisabled(isDisabled) {
        this.isExtensionDisabled = isDisabled;
    }
    keepTrack() {
        if (this.isExtensionDisabled) {
            return;
        }
        chrome.storage.local.get(["webTime"], (data) => WebActivity_awaiter(this, void 0, void 0, function* () {
            if (data.webTime === undefined) {
                return;
            }
            const webTime = data.webTime;
            for (let i = 0; i < webTime.length; i++) {
                const timeSpent = webTime[i].time;
                if (timeSpent > 30000) {
                    const url = webTime[i].url;
                    const visited = yield WebActivity.checkIfURLVisited(url);
                    if (!visited) {
                        chrome.storage.local.get(["visitedURLs"], (data) => {
                            const visitedURLs = data.visitedURLs || [];
                            visitedURLs.push(url);
                            chrome.storage.local.set({ visitedURLs: visitedURLs });
                        });
                    }
                }
            }
        }));
    }
    clear() {
        clearInterval(this.interval);
    }
    static checkIfURLVisited(url) {
        return new Promise((resolve) => {
            chrome.storage.local.get(["visitedURLs", "taggedURLs"], (data) => {
                const visitedURLs = data.visitedURLs || [];
                const taggedURLs = data.taggedURLs || [];
                resolve(visitedURLs.includes(url) ||
                    taggedURLs.some((website) => website.website === url));
            });
        });
    }
}

;// CONCATENATED MODULE: ./src/utils/WebTime.ts
/*

Class to store the web time of the user

*/
var WebTime_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class WebTime {
    constructor(isHidden, isDisabled) {
        this.baseUrl = "";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs[0] && tabs[0].url) {
                if (!tabs[0].url || tabs[0].url === "chrome://newtab/") {
                    return;
                }
                const currentUrl = new URL(tabs[0].url).origin;
                if (currentUrl !== "") {
                    this.baseUrl = currentUrl;
                }
            }
        });
        this.startTime = Date.now();
        this.interval = setInterval(this.measureTime.bind(this), 1000);
        this.isHidden = isHidden;
        this.isDisabled = isDisabled;
    }
    setWindowHidden(isHidden) {
        this.isHidden = isHidden;
    }
    setExtensionDisabled(isDisabled) {
        this.isDisabled = isDisabled;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    getTimeSpent() {
        return Date.now() - this.startTime;
    }
    storeTime() {
        var _a;
        return WebTime_awaiter(this, void 0, void 0, function* () {
            // Store the time spent on the website
            let oldTime = ((_a = (yield chrome.storage.local.get("webTime"))) === null || _a === void 0 ? void 0 : _a.webTime) || [];
            for (let i = 0; i < oldTime.length; i++) {
                if (oldTime[i].url === this.baseUrl) {
                    oldTime[i].time += this.getTimeSpent();
                    yield chrome.storage.local.set({ webTime: oldTime });
                    return;
                }
            }
            oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
            yield chrome.storage.local.set({ webTime: oldTime });
            return;
        });
    }
    storeDailyTime() {
        var _a, _b;
        return WebTime_awaiter(this, void 0, void 0, function* () {
            // Store the time spent on the website for the day
            let oldTime = ((_a = (yield chrome.storage.local.get("dailyTime"))) === null || _a === void 0 ? void 0 : _a.dailyTime) || [];
            const date = new Date();
            const dateString = date.toDateString(); // Get the current date
            const oldDate = ((_b = (yield chrome.storage.local.get("today"))) === null || _b === void 0 ? void 0 : _b.today) || ""; // Get the last date the user was active
            if (oldDate !== dateString) {
                oldTime = [];
                yield this.setNewDay();
            }
            for (let i = 0; i < oldTime.length; i++) {
                if (oldTime[i].url === this.baseUrl) {
                    oldTime[i].time += this.getTimeSpent();
                    yield chrome.storage.local.set({ dailyTime: oldTime });
                    return;
                }
            }
            oldTime.push({ url: this.baseUrl, time: this.getTimeSpent() });
            yield chrome.storage.local.set({ dailyTime: oldTime });
            return;
        });
    }
    measureTime() {
        if (this.isDisabled || this.baseUrl === "") {
            return;
        }
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs[0] && tabs[0].url) {
                if (!tabs[0].url || tabs[0].url === "chrome://newtab/") {
                    return;
                }
                const currentUrl = new URL(tabs[0].url).origin;
                if (currentUrl !== this.baseUrl && currentUrl !== "") {
                    this.storeDailyTime().then(() => {
                        this.storeTime().then(() => {
                            this.baseUrl = currentUrl;
                            this.startTime = Date.now();
                        });
                    });
                }
                else if (this.isHidden) {
                    this.storeDailyTime().then(() => {
                        this.storeTime().then(() => {
                            this.startTime = Date.now();
                        });
                    });
                }
                else if (this.getTimeSpent() > 30000) {
                    // If the user has been on the website for more than 30 seconds
                    this.storeDailyTime().then(() => {
                        this.storeTime().then(() => {
                            this.startTime = Date.now();
                        });
                    });
                }
            }
        });
    }
    setNewDay() {
        var _a, _b;
        return WebTime_awaiter(this, void 0, void 0, function* () {
            const dateString = new Date().toDateString();
            let newAverage = ((_a = (yield chrome.storage.local.get("dailyAverage"))) === null || _a === void 0 ? void 0 : _a.dailyAverage) || [];
            let numberOfDays = ((_b = (yield chrome.storage.local.get("numberOfDays"))) === null || _b === void 0 ? void 0 : _b.numberOfDays) || 0;
            yield chrome.storage.local.set({ numberOfDays: numberOfDays + 1 });
            yield chrome.storage.local.set({ today: dateString });
            yield chrome.storage.local.set({ prevDailyAverage: newAverage });
        });
    }
}

;// CONCATENATED MODULE: ./src/background.ts
var background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




var isExtensionDisabled = true;
var webActivityInstance = null;
var isWindowHidden = false;
var webTime = null;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "visibility_changed") {
        isWindowHidden = request.hidden;
        if (webTime) {
            webTime.setWindowHidden(isWindowHidden);
        }
    }
    sendResponse({ message: "received" });
});
function handleExtensionEnable() {
    return background_awaiter(this, void 0, void 0, function* () {
        chrome.storage.local.get("isDisabled", (data) => {
            if (data === undefined) {
                chrome.storage.local.set({ isDisabled: true });
                isExtensionDisabled = true;
                return;
            }
            isExtensionDisabled = data.isDisabled;
            if (webActivityInstance) {
                webActivityInstance.setExtensionDisabled(isExtensionDisabled);
            }
            else {
                webActivityInstance = new WebActivity(isExtensionDisabled);
            }
            if (webTime) {
                webTime.setExtensionDisabled(isExtensionDisabled);
            }
            else {
                webTime = new WebTime(isWindowHidden, isExtensionDisabled);
            }
        });
        chrome.storage.onChanged.addListener((changes) => background_awaiter(this, void 0, void 0, function* () {
            if (changes["isDisabled"]) {
                isExtensionDisabled = changes["isDisabled"].newValue;
                if (webActivityInstance) {
                    webActivityInstance.setExtensionDisabled(isExtensionDisabled);
                }
                else {
                    webActivityInstance = new WebActivity(isExtensionDisabled);
                }
                if (webTime) {
                    webTime.setExtensionDisabled(isExtensionDisabled);
                }
                else {
                    webTime = new WebTime(isWindowHidden, isExtensionDisabled);
                }
            }
            if (changes["blockedURLs"]) {
                const blockedURLs = changes["blockedURLs"].newValue;
                if (blockedURLs.length === 0) {
                    blockedURLs.push("not_a_real_website_example.com");
                }
                updateDynamicRules(blockedURLs);
            }
        }));
    });
}
function tagWebsite() {
    return background_awaiter(this, void 0, void 0, function* () {
        if (isExtensionDisabled) {
            return;
        }
        yield AITagging();
    });
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

/******/ })()
;