import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import { WebsiteTime } from "../../types/WebsiteTime";
import { msToHM } from "./mmToHM";

interface OrganizedHistory {
  [key: string]: { Explored: string[]; time: string | number };
}

export async function organizeHistoryByBaseUrl(
  history: chrome.history.HistoryItem[],
  time?: TaggedTimeURL[]
): Promise<string> {
  const organizedHistory: OrganizedHistory = {};
  const times: WebsiteTime[] | TaggedTimeURL[] =
    time ||
    (await chrome.storage.local.get("yesterdayTime")).yesterdayTime ||
    [];
  history.forEach((entry) => {
    const url = entry.url;
    const baseUrl = cleanURL(new URL(url!).origin);

    if (!organizedHistory[baseUrl]) {
      const time = times.find((x: WebsiteTime) => x.url === baseUrl)?.time || 0;
      organizedHistory[baseUrl] = { Explored: [], time: time };
    }
    if (!organizedHistory[baseUrl]["Explored"].includes(entry.title!))
      organizedHistory[baseUrl]["Explored"].push(entry.title!);
  });

  Object.keys(organizedHistory).forEach((key) => {
    organizedHistory[key].Explored = removeRedundantTerms(
      organizedHistory[key].Explored
    );
  });
  return convertToString(removeLessSignificantTerms(organizedHistory));
}

function removeRedundantTerms(titles: string[]) {
  const termMap = new Map();

  // Loop through each title
  titles.forEach((title) => {
    // Split title into individual terms
    const terms = title.split(" - ");

    // Iterate over each term
    terms.forEach((term) => {
      // Remove leading and trailing whitespaces
      term = term.trim();

      // Add term to map with its count
      if (termMap.has(term)) {
        termMap.set(term, termMap.get(term) + 1);
      } else {
        termMap.set(term, 1);
      }
    });
  });

  // Filter out terms that occur more than once
  const uniqueTerms = Array.from(termMap.keys()).filter(
    (term) => termMap.get(term) === 1
  );

  // Reconstruct titles with unique terms
  const uniqueTitles = titles.map((title) => {
    const terms = title.split(" - ");
    const uniqueTermsInTitle = terms.filter((term) =>
      uniqueTerms.includes(term.trim())
    );
    return uniqueTermsInTitle.join(" - ");
  });

  return uniqueTitles;
}

function cleanURL(url: string) {
  // Remove protocol (e.g., https://)
  let cleanedURL = url.replace(/^(https?:\/\/)?/, "");

  // Remove www subdomain if present
  cleanedURL = cleanedURL.replace(/^www\./, "");

  // Remove top-level domain and any subdomains
  cleanedURL = cleanedURL.replace(/\.[a-z]{2,}$/, "");

  return cleanedURL;
}

function convertToString(organizedHistory: OrganizedHistory) {
  // Replace all double quotes with an empty string
  const str = JSON.stringify(organizedHistory);
  return str.replace(/"/g, "");
}

function removeLessSignificantTerms(organizedHistory: OrganizedHistory) {
  // removing sites with time less than 1 minute and less than 3 visits

  const keys = Object.keys(organizedHistory);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const site = organizedHistory[key];
    const time: number = site.time as number;
    if (time < 60 * 1000 && site.Explored.length < 3) {
      delete organizedHistory[key];
    } else {
      site.time = msToHM(time);
    }
  }

  return organizedHistory;
}
