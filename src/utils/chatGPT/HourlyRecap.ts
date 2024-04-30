import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import { HOURLY_RECAP_PROMPT } from "../CONSTANTS/ChatGPT";
import {
  API_CALL_FAILED_SUMMARY,
  NO_API_KEY_SUMMARY,
  SUMMARY_TIME_TOO_SHORT,
} from "../CONSTANTS/texts";
import { organizeHistoryByBaseUrl } from "../scripts/processHistory";
import { apiCallWithTimeout } from "./API_CALL";

export async function hourlyRecap(
  hourlyTime: TaggedTimeURL[] | undefined,
  date: number
): Promise<boolean> {
  // var today = date + 60 * 60 * 1000;
  var today = new Date().getTime();
  var hourAgo = date;

  const authKey = (await chrome.storage.local.get("authKey"))?.authKey; // api key

  if (!hourlyTime) {
    if (!authKey) {
      await chrome.storage.local.set({
        prevHourSummary: [NO_API_KEY_SUMMARY, today, 0, 0],
      });
      return false;
    }
    await chrome.storage.local.set({
      prevHourSummary: [SUMMARY_TIME_TOO_SHORT, today, 0, 0],
    });
    return false;
  }

  await chrome.storage.local.set({
    lastHourlyTime: {
      hourlyTime: hourlyTime,
      hour: date,
    },
  });

  const timeSpent = hourlyTime.reduce((acc, website) => acc + website.time, 0);

  const productiveTime = hourlyTime.reduce((acc, website) => {
    if (website.tag === 1) {
      return acc + website.time;
    } else {
      return acc;
    }
  }, 0);

  const unfocusedTime = timeSpent - productiveTime;

  if (!authKey) {
    await chrome.storage.local.set({
      prevHourSummary: [
        NO_API_KEY_SUMMARY,
        today,
        productiveTime,
        unfocusedTime,
      ],
    });
    return false;
  }

  if (timeSpent <= 15 * 60 * 1000) {
    // if time spent less than 15 min
    await chrome.storage.local.set({
      prevHourSummary: [
        SUMMARY_TIME_TOO_SHORT,
        today,
        productiveTime,
        unfocusedTime,
      ],
    });
    return false;
  }

  const historyItems = await chrome.history.search({
    text: "",
    startTime: hourAgo,
    endTime: today,
    maxResults: 1000,
  });

  const organizedHistory = await organizeHistoryByBaseUrl(
    historyItems,
    hourlyTime
  );
  const lastCalled = (await chrome.storage.local.get("summaryLock"))
    .summaryLock;
  if (new Date().getTime() - lastCalled <= 30 * 1000) {
    return false;
  }
  await chrome.storage.local.set({ summaryLock: new Date().getTime() });

  const productivePercentage = (productiveTime / (timeSpent + 1)) * 100;

  const summary = await prevHourSummary(
    organizedHistory,
    authKey,
    today,
    productivePercentage
  );

  if (summary === "") {
    await chrome.storage.local.set({
      prevHourSummary: [
        API_CALL_FAILED_SUMMARY,
        today,
        productiveTime,
        unfocusedTime,
      ],
    });
    return false;
  }

  await chrome.storage.local.set({
    prevHourSummary: [summary, today, productiveTime, unfocusedTime],
  });
  return true;
}

async function prevHourSummary(
  history: string,
  authKey: any,
  date: number,
  productiveTime: number
): Promise<String> {
  return await apiCallWithTimeout(
    HOURLY_RECAP_PROMPT(history, productiveTime),
    30000,
    `hourlyRecap ${date}`,
    authKey
  );
}
