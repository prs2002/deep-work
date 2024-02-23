/**
 * Function to store maximum daily productivity
 *
 */

import { getTaggedTime } from "./GetTaggedTime";

export async function dailyProductivity() {
  const data = await getTaggedTime("dailyTime");
  if (data) {
    let productiveTime = 0;
    data.forEach((d) => {
      if (d.tag === 1) {
        productiveTime += d.time;
      }
    });

    productiveTime = Math.floor(productiveTime / 1000); // converting to seconds
    const previousMaxTime =
      (await chrome.storage.local.get("maxProductivityTime"))
        ?.maxProductivityTime || 0;
    if (productiveTime > previousMaxTime) {
      chrome.storage.local.set({ maxProductivityTime: productiveTime });
    }
  }
}

export async function getDailyProductivity(): Promise<number> {
  const data =
    (await chrome.storage.local.get("maxProductivityTime"))
      ?.maxProductivityTime || 0;
  return data;
}

export async function getTotalProductivity(): Promise<number> {
  const data = await getTaggedTime("webTime");
  if (data) {
    let productiveTime = 0;
    data.forEach((d) => {
      if (d.tag === 1) {
        productiveTime += d.time;
      }
    });
    return productiveTime;
  }
  return 0;
}
