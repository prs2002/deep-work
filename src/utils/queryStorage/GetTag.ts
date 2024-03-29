import { TaggedURL } from "../../types/TaggedURL";

export async function getTag(website: string) {
  const taggedURLs: TaggedURL[] =
    (await chrome.storage.local.get("taggedURLs")).taggedURLs || [];
  for (let i = 0; i < taggedURLs.length; i++) {
    if (website === taggedURLs[i].id) {
      return taggedURLs[i].tag;
    }
  }
  return 0;
}
