/*
Function to get the time of the user on a website along with tag
*/

interface TaggedTimeURL {
  label: string;
  value: string;
  time: number;
  tag: number;
}

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
  const data: UsageData[] | null = (await chrome.storage.local.get(type))?.[
    type
  ];
  if (!data) {
    return;
  }

  // get website tag data
  const taggedData: TaggedURL[] | null = (
    await chrome.storage.local.get("taggedURLs")
  )?.taggedURLs;

  const result: TaggedTimeURL[] = data.map((d) => {
    return { label: d.url, time: d.time, tag: 0, value: msToHMS(d.time) };
  });

  if (taggedData) {
    for (const d of result) {
      for (const tag of taggedData) {
        if (tag.website === d.label) {
          d.tag = tag.tag;
        }
      }
    }
  }
  return result;
}
