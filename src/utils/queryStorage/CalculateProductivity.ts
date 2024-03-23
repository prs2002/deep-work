/*
Function to summarize the productivity data
*/

import { SummaryItem } from "../../types/SummaryItem";
import { msToHM } from "../scripts/mmToHM";

interface TaggedURL {
  website: string;
  tag: number;
  id: string;
}

interface UsageData {
  url: string;
  time: number;
}

export async function calculateProductivity(
  type: string
): Promise<SummaryItem[] | undefined> {
  const data: UsageData[] | null = (await chrome.storage.local.get(type))?.[type];
  if (!data) {
    return;
  }

  // get website tag data
  const taggedData: TaggedURL[] | null = (
    await chrome.storage.local.get("taggedURLs")
  )?.taggedURLs;

  let total = data.reduce((acc: number, d: any) => acc + d.time, 0);
  // Calculate total time

  let productive = 0;

  // calculate productive and distracted time
  if (taggedData) {
    for (const d of data) {
      for (const tag of taggedData) {
        if (tag.website === d.url) {
          if (tag.tag === 1) {
            productive += d.time;
          }
        }
      }
    }
  }
  let distracted = total - productive;
  if (type === "weeklyTime") {
    const days =
      (await chrome.storage.local.get("numberOfDaysInWeek"))
        ?.numberOfDaysInWeek || 1;
    total /= days;
    productive /= days;
    distracted /= days;
  } else if (type === "monthlyTime") {
    const days =
      (await chrome.storage.local.get("numberOfDays"))
        ?.numberOfDays || 1;
    total /= days;
    productive /= days;
    distracted /= days;
  }

  return [
    {
      label: "Total time spent",
      value: msToHM(total),
    },
    {
      label: "Productive time spent",
      value: msToHM(productive),
    },
    {
      label: "Distracted time spent",
      value: msToHM(distracted),
    },
  ];
}
