import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import { TaggedURL } from "../../types/TaggedURL";
import { WebsiteTime } from "../../types/WebsiteTime";
import { msToHM } from "../scripts/mmToHM";

export async function getPrevHourTime() {
  const lastHourlyTime =
    (await chrome.storage.local.get("lastHourlyTime")).lastHourlyTime || {};
  const data: WebsiteTime[] | null = lastHourlyTime.hourlyTime;

  if(!data) {
    return [];
  }

  const taggedData: TaggedURL[] | null = (
    await chrome.storage.local.get("taggedURLs")
  )?.taggedURLs;

  const result: TaggedTimeURL[] = data!.map((d) => {
    return { url: d.url, time: d.time, tag: 0, value: msToHM(d.time) };
  });

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
