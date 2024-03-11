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

function pushToArray(classification, taggedWebsites, website) {
    let tag = 0;
    if (classification === "productive") {
        tag = 1;
    }
    else if (classification === "unsure") {
        tag = 2;
    }
    else if (classification === "wasteful") {
        tag = 3;
    }
    taggedWebsites.push({ id: website, website, tag });
}
function apiCall(website, authKey) {
    var _a;
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
                    Authorization: `Bearer ${authKey}`,
                },
                body: JSON.stringify(requestBody),
            });
            const data = yield res.json();
            const usage = data.usage.total_tokens;
            const pricing = 0.5 / 1000000;
            const prevUsage = ((_a = (yield chrome.storage.local.get("usage"))) === null || _a === void 0 ? void 0 : _a.usage) || [];
            prevUsage.push({ cost: usage * pricing, website: website });
            yield chrome.storage.local.set({ usage: prevUsage });
            const classifiedWebsites = data.choices[0].message.content;
            const classifiedWebsitesObject = JSON.parse(classifiedWebsites);
            return classifiedWebsitesObject;
        }
        catch (err) {
            console.log(err);
            return { website: website, CLASSIFICATION: "untagged" };
        }
    });
}
function AITagging() {
    var _a, _b, _c, _d, _e;
    return AITagging_awaiter(this, void 0, void 0, function* () {
        try {
            const authKey = (_a = (yield chrome.storage.local.get("authKey"))) === null || _a === void 0 ? void 0 : _a.authKey;
            const websiteList = (_b = (yield chrome.storage.local.get("visitedURLs"))) === null || _b === void 0 ? void 0 : _b.visitedURLs;
            if (!websiteList || websiteList.length === 0) {
                return;
            }
            const preTaggedUrls = ((_c = (yield chrome.storage.local.get("preTaggedUrls"))) === null || _c === void 0 ? void 0 : _c.preTaggedUrls) || [];
            const taggedWebsites = [];
            for (let i = 0; i < websiteList.length; i++) {
                const website = websiteList[i];
                let classification = "unsure";
                const obj = preTaggedUrls.find((obj) => obj.URL === website);
                if (obj) {
                    classification = obj.CLASSIFICATION.toLowerCase();
                    pushToArray(classification, taggedWebsites, website);
                }
                else if (authKey) {
                    const lastApiCall = ((_d = (yield chrome.storage.local.get("lastApiCall"))) === null || _d === void 0 ? void 0 : _d.lastApiCall) ||
                        new Date(0).getTime();
                    const currentTime = new Date().getTime();
                    if (currentTime - lastApiCall < 30000) {
                        // if last api call was less than 2 minutes ago, skip to prevent rate limit
                        continue;
                    }
                    const tagged = yield apiCall(website, authKey);
                    yield chrome.storage.local.set({ lastApiCall: currentTime });
                    classification = (_e = tagged.CLASSIFICATION) === null || _e === void 0 ? void 0 : _e.toLowerCase();
                    pushToArray(classification, taggedWebsites, website);
                    yield new Promise((resolve) => {
                        setTimeout(resolve, 30000); // wait 30 seconds for rate limit
                    });
                }
            }
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


chrome.runtime.onMessage.addListener(function (request, sender) {
    chrome.tabs.update(sender.tab.id, { url: request.redirect });
});
var isExtensionDisabled = false;
var isExtensionDisabledOnWeekend = true;
var isWeekend = [0, 6].includes(new Date().getDay());
function checkDisable() {
    return isExtensionDisabled || isExtensionDisabledOnWeekend;
}
function handleExtensionEnable() {
    return background_awaiter(this, void 0, void 0, function* () {
        isExtensionDisabledOnWeekend =
            ((yield chrome.storage.local.get("isDisabledOnWeekend"))
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
        chrome.storage.onChanged.addListener((changes) => background_awaiter(this, void 0, void 0, function* () {
            if (changes["isDisabled"]) {
                isExtensionDisabled = changes["isDisabled"].newValue;
            }
            if (changes["blockedURLs"]) {
                const blockedURLs = changes["blockedURLs"].newValue;
                if (blockedURLs.length === 0) {
                    blockedURLs.push("not_a_real_website_example.com");
                }
                updateDynamicRules(blockedURLs);
            }
            if (changes["isDisabledOnWeekend"]) {
                isExtensionDisabledOnWeekend =
                    changes["isDisabledOnWeekend"].newValue && isWeekend;
            }
        }));
    });
}
function tagWebsite() {
    return background_awaiter(this, void 0, void 0, function* () {
        if (checkDisable()) {
            return;
        }
        yield AITagging();
    });
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
function checkAlarm() {
    return background_awaiter(this, void 0, void 0, function* () {
        const alarm = yield chrome.alarms.get("tagWebsite");
        if (alarm) {
            yield chrome.alarms.clear("tagWebsite");
        }
        chrome.alarms.create("tagWebsite", { periodInMinutes: 10 });
    });
}
chrome.alarms.onAlarm.addListener((alarm) => background_awaiter(void 0, void 0, void 0, function* () {
    if (alarm.name === "tagWebsite") {
        tagWebsite();
    }
}));
checkAlarm();
loadData();

/******/ })()
;