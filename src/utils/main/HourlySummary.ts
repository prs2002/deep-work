/*
    Function to show hourly summary to the user of the time spent on the current day.
*/

import { hourlySummaryPopUp } from "../DOM_SCRIPTS/HourlySummaryPopup";

interface WebTime {
  url: string;
  time: number;
}

export async function hourlySummary() {
  const lastTimestamp =
    (await chrome.storage.local.get("lastTimestamp"))?.lastTimestamp || 0;

  const currentTime = Date.now();
  const timeDifference = currentTime - lastTimestamp;
  const timeDifferenceInHours = timeDifference / (1000 * 60 * 60);

  if (timeDifferenceInHours >= 1) {
    const oldData: WebTime[] =
      (await chrome.storage.local.get("oldWebTime"))?.oldWebTime || [];
    const currentData: WebTime[] =
      (await chrome.storage.local.get("webTime"))?.webTime || [];

    const differenceData: WebTime[] = [];
    for (let i = 0; i < currentData.length; i++) {
      let found = false;
      for (let j = 0; j < oldData.length; j++) {
        if (currentData[i].url === oldData[j].url) {
          differenceData.push({
            url: currentData[i].url,
            time: currentData[i].time - oldData[j].time,
          });
          found = true;
          break;
        }
      }
      if (!found) {
        differenceData.push({
          url: currentData[i].url,
          time: currentData[i].time,
        });
      }
    }
    await chrome.storage.local.set({ lastTimestamp: currentTime });
    await chrome.storage.local.set({ oldWebTime: currentData });
    const timeSpent = await calculateTimeSpent(differenceData);
    hourlySummaryPopUp(
      timeSpent.productiveTime,
      timeSpent.untaggedTime,
      timeSpent.wastedTime
    );
  }
}

async function calculateTimeSpent(differenceData: WebTime[]) {
  let productiveTime: number = 0;
  let untaggedTime: number = 0;
  let wastedTime: number = 0;

  const taggedURLs =
    (await chrome.storage.local.get("taggedURLs"))?.taggedURLs || [];

  for (let i = 0; i < differenceData.length; i++) {
    let found = false;
    for (let j = 0; j < taggedURLs.length; j++) {
      if (differenceData[i].url === taggedURLs[j].website) {
        if (taggedURLs[j].tag === 1) {
          productiveTime += differenceData[i].time;
        } else {
          wastedTime += differenceData[i].time;
        }
        found = true;
        break;
      }
    }
    if (!found) {
      untaggedTime += differenceData[i].time;
    }
  }
  return { productiveTime, untaggedTime, wastedTime };
}
