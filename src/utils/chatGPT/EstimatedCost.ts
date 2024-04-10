import { costPer1000Token_INPUT, costPer1000Token_OUTPUT } from "../CONSTANTS/ChatGPT";

export async function estimatedCost(
  inputToken: number,
  outputToken: number,
  purpose: string
) {
  let prevUsage = (await chrome.storage.local.get("usage"))?.usage || {
    monthly: { month: "", usage: [] },
    weekly: { week: "", usage: [] },
    daily: { day: "", usage: [] },
  };

  if (
    prevUsage.monthly === undefined ||
    prevUsage.weekly === undefined ||
    prevUsage.daily === undefined
  ) {
    prevUsage = {
      monthly: { month: "", usage: [] },
      weekly: { week: "", usage: [] },
      daily: { day: "", usage: [] },
    };
  }

  const inputCost = costPer1000Token_INPUT / 1000;
  const outputCost = costPer1000Token_OUTPUT / 1000;
  let usage = 0;
  usage += inputCost * inputToken;
  usage += outputCost * outputToken;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentWeek = currentDate.getDay();
  const currentDay = currentDate.toDateString();

  // Update current month, week, and day if necessary
  if (prevUsage.monthly.month !== currentMonth) {
    // new month
    prevUsage.monthly.month = currentMonth;
    prevUsage.monthly.usage = [];
  }

  if (prevUsage.weekly.week !== currentWeek && currentWeek === 1) {
    // monday
    prevUsage.weekly.week = currentWeek;
    prevUsage.weekly.usage = [];
  }

  if (prevUsage.daily.day !== currentDay) {
    // new day
    prevUsage.daily.day = currentDay;
    prevUsage.daily.usage = [];
  }
  // Store usage in the corresponding arrays
  prevUsage.monthly.usage.push({ cost: usage, purpose: purpose });
  prevUsage.weekly.usage.push({ cost: usage, purpose: purpose });
  prevUsage.daily.usage.push({ cost: usage, purpose: purpose });

  await chrome.storage.local.set({ usage: prevUsage });
}
