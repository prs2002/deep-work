/*
Function to get the time of the user on a website along with tag
*/

import { TaggedTimeURL } from "../../types/TaggedTimeUrl";


interface TaggedURL {
  website: string;
  tag: number;
  id: string;
}

interface UsageData {
  url: string;
  time: number;
}

function msToHMS(ms: number): string {
  // 1- Convert to seconds:
  let seconds = Math.floor(ms / 1000);
  // 2- Extract hours:
  const hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
  // 4- Keep only seconds not extracted to minutes:
  seconds = seconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
}

export async function getTaggedTime(
  type: string
): Promise<TaggedTimeURL[] | undefined> {
  const data: UsageData[] | null = (await chrome.storage.local.get(type))?.[type];
  
  if (!data) {
    return;
  }

  // get website tag data
  const taggedData: TaggedURL[] | null = (
    await chrome.storage.local.get("taggedURLs")
  )?.taggedURLs;

  const result: TaggedTimeURL[] = data.map((d) => {
    return { url: d.url, time: d.time, tag: 0, value: msToHMS(d.time) };
  });

  if (type === "weeklyTime") {
    const numberOfDays: number =
      (await chrome.storage.local.get("numberOfDaysInWeek"))
        ?.numberOfDaysInWeek || 1;
    result.forEach((d) => {
      d.time = d.time / numberOfDays;
      d.value = msToHMS(d.time);
    });
  }

  if (type === "monthlyTime") {
    const numberOfDays: number =
      (await chrome.storage.local.get("numberOfDays"))
        ?.numberOfDays || 1;
    result.forEach((d) => {
      d.time = d.time / numberOfDays;
      d.value = msToHMS(d.time);
    });
  }

  if (taggedData) {
    for (const d of result) {
      for (const tag of taggedData) {
        if (tag.website === d.url) {
          d.tag = tag.tag;
        }
      }
    }
  }
  return result;
}
