import { Dispatch, SetStateAction } from "react";
import { hourlyRecap } from "./chatGPT/HourlyRecap";
import { getPrevHourTime } from "./queryStorage/GetPrevHourTime";

export async function getSummary(
  setTimeframe: Dispatch<SetStateAction<string>>,
  setProductive: Dispatch<SetStateAction<number>>,
  setUnfocused: Dispatch<SetStateAction<number>>,
  setSummary?: Dispatch<SetStateAction<string>>
) {
  let prevHourSummary =
    (await chrome.storage.local.get("prevHourSummary")).prevHourSummary || [];
  const hour: number | undefined =
    ((await chrome.storage.local.get("lastHourlyTime")).lastHourlyTime || {})
      .hour || undefined;
  if (prevHourSummary.length === 0) {
    await hourlyRecap(
      await getPrevHourTime(),
      hour || new Date().getTime() - 60 * 60 * 1000
    );
    prevHourSummary =
      (await chrome.storage.local.get("prevHourSummary")).prevHourSummary || [];
  }
  if (hour) {
    const timeFrameStart = new Date(hour).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    const timeFrameEnd = new Date(prevHourSummary[1]).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "numeric",
      }
    );
    setTimeframe(` (${timeFrameStart} to ${timeFrameEnd})`);
  }
  setSummary && setSummary(prevHourSummary[0]);
  setProductive(prevHourSummary[2] / 60000);
  setUnfocused(prevHourSummary[3] / 60000);
}
