import { DAILY_RECAP_PROMPT } from "../CONSTANTS/ChatGPT";
import {
  API_CALL_FAILED_SUMMARY,
  NO_API_KEY_SUMMARY,
  SUMMARY_NO_DATA,
} from "../CONSTANTS/texts";
import { getTaggedTime } from "../queryStorage/GetTaggedTime";
import { organizeHistoryByBaseUrl } from "../scripts/processHistory";
import { apiCallWithTimeout } from "./API_CALL";

export async function dailyRecap(): Promise<boolean> {
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var startTime = yesterday.setHours(0, 0, 0, 0);
  var endTime = yesterday.setHours(23, 59, 59, 999);

  const historyItems = await chrome.history.search({
    text: "",
    startTime: startTime,
    endTime: endTime,
    maxResults: 1000,
  });

  const organizedHistory = await organizeHistoryByBaseUrl(historyItems);

  const authKey = (await chrome.storage.local.get("authKey"))?.authKey; // api key
  if (!authKey) {
    await chrome.storage.local.set({
      prevDaySummary: [NO_API_KEY_SUMMARY, yesterday.toDateString()],
    });
    return false;
  }
  const lastCalled = (await chrome.storage.local.get("summaryLock"))
    .summaryLock;
  if (new Date().getTime() - lastCalled <= 30 * 1000) {
    return false;
  }
  await chrome.storage.local.set({ summaryLock: new Date().getTime() });

  const yesterdayTime = await getTaggedTime("yesterdayTime");

  if (!yesterdayTime) {
    await chrome.storage.local.set({
      prevDaySummary: [SUMMARY_NO_DATA, yesterday.toDateString()],
    });
    return false;
  }

  const totalTime = yesterdayTime.reduce(
    (acc, website) => acc + website.time,
    0
  );
  const focusRate =
    totalTime &&
    (yesterdayTime.reduce(
      (acc, website) => acc + (website.tag === 1 ? website.time : 0),
      0
    ) /
      totalTime) *
      100;

  const summary = await prevDaySummary(
    organizedHistory,
    authKey,
    yesterday,
    focusRate
  );

  if (summary === "") {
    await chrome.storage.local.set({
      prevDaySummary: [API_CALL_FAILED_SUMMARY, yesterday.toDateString()],
    });
    return false;
  }

  await chrome.storage.local.set({
    prevDaySummary: [summary, yesterday.toDateString()],
  });
  return true;
}

async function prevDaySummary(
  history: string,
  authKey: any,
  date: Date,
  focusRate: number
): Promise<String> {
  return await apiCallWithTimeout(
    DAILY_RECAP_PROMPT(history, focusRate),
    30000,
    `dailyRecap ${date.toDateString()}`,
    authKey
  );
}
