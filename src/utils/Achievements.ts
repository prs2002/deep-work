/**
 * Function to store maximum daily productivity
 *
 */

import { TaggedTimeURL } from "../types/TaggedTimeUrl";
import { getTaggedTime } from "./GetTaggedTime";

export async function weeklyProductivity(minTime: number): Promise<boolean> {
  const taggedTime: TaggedTimeURL[] | undefined = await getTaggedTime(
    "weeklyTime"
  );

  if (taggedTime === undefined) {
    return false;
  }

  const productivityTime = taggedTime.reduce((acc, curr) => {
    if (curr.tag === 1) {
      return acc + curr.time;
    }
    return acc;
  }, 0);


  // convert to hours

  const productivityHours = productivityTime / 3600000; // 1000 * 60 * 60

  if (productivityHours >= minTime) {
    return true;
  }

  return false;
}
