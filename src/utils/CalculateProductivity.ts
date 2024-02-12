/*
Function to summarize the productivity data
*/

interface SummaryItem {
  label: string;
  value: string;
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

export async function calculateProductivity(
  type: string
): Promise<SummaryItem[] | undefined> {
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

  const total = data.reduce((acc: number, d: any) => acc + d.time, 0);
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

  return [
    {
      label: "Total time spent",
      value: msToHMS(total),
    },
    {
      label: "Productive time spent",
      value: msToHMS(productive),
    },
    {
      label: "Distracted time spent",
      value: msToHMS(distracted),
    },
  ];
}
