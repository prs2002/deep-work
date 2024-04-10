import { baseUrl, model } from "../CONSTANTS/ChatGPT";
import { updateWebsitesInStorage } from "../queryStorage/UpdateWebsitesInStorage";
import { estimatedCost } from "./EstimatedCost";

interface Website {
  id: string;
  website: string;
  tag: number;
}

interface TaggedWebsite {
  URL: string;
  CLASSIFICATION: string;
}

function pushToArray(
  classification: string,
  taggedWebsites: Website[],
  website: string
) {
  let tag = 0;
  if (classification === "productive") {
    tag = 1;
  } else if (classification === "unsure") {
    tag = 2;
  } else if (classification === "wasteful") {
    tag = 3;
  }
  taggedWebsites.push({ id: website, website, tag });
}

async function apiCall(website: string, authKey: any) {
  try {
    const requestBody = {
      model: model,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: `Tag the given site as wasteful, productive, or unsure depending on whether it is something that helps in work or is used to kill time. Your output should be a json object containing the classification, the URL. For example, if the website is Netflix.com and the description is your response might be: {'CLASSIFICATION': 'Wasteful', 'URL': 'netflix.com'}. Now, classify ${website}
      `,
        },
      ],
    };
    const timeoutPromise = new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        const timeoutError = new Error("API call timeout");
        const timeoutResponse = new Response(
          JSON.stringify({ error: timeoutError }),
          {
            status: 408,
            statusText: "Request Timeout",
            headers: { "Content-Type": "application/json" },
          }
        );
        reject(timeoutResponse);
      }, 30000);
    });
    const fetchPromise = fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authKey}`,
      },
      body: JSON.stringify(requestBody),
    });
    const res: Response = await Promise.race([fetchPromise, timeoutPromise]);
    if (!res.ok) {
      throw new Error("API request failed");
    }
    const data = await res.json();
    const inputTokens = data.usage.prompt_tokens;
    const outputTokens = data.usage.completion_tokens;
    await estimatedCost(inputTokens, outputTokens, "tagging");
    const classifiedWebsites = data.choices[0].message.content;
    const classifiedWebsitesObject = JSON.parse(classifiedWebsites);
    await chrome.storage.local.set({ lastApiCall: new Date().getTime() });
    return classifiedWebsitesObject;
  } catch (err) {
    console.log(err);
    await chrome.storage.local.set({ lastApiCall: new Date().getTime() }); // don't let any api call for next 2.5 min
    return { website: website, CLASSIFICATION: "untagged" };
  }
}

export async function AITagging() {
  try {
    const authKey = (await chrome.storage.local.get("authKey"))?.authKey; // api key
    const websiteList: string[] = (
      await chrome.storage.local.get("visitedURLs")
    )?.visitedURLs; // untagged urls
    if (!websiteList || websiteList.length === 0) {
      return;
    }

    const preTaggedUrls: TaggedWebsite[] =
      (await chrome.storage.local.get("preTaggedUrls"))?.preTaggedUrls || []; // list of pre tagged urls

    const taggedWebsites: Website[] = [];

    const website: string = websiteList[0]; // get the first untagged website

    let classification = "untagged";

    const obj: TaggedWebsite | undefined = preTaggedUrls.find(
      (obj) => obj.URL === website
    ); // find the current url in pre-tagged list

    if (obj) {
      // if found, push it to our list
      classification = obj.CLASSIFICATION.toLowerCase();
      pushToArray(classification, taggedWebsites, website);
    } else if (authKey) {
      // if api key is stored, try tagging it using chat gpt
      const lastApiCall =
        (await chrome.storage.local.get("lastApiCall"))?.lastApiCall ||
        new Date(0).getTime();
      const currentTime = new Date().getTime();
      if (currentTime - lastApiCall < 30000) {
        // if last api call was less than 2 minutes ago, skip to prevent rate limit
        return;
      }
      const tagged: TaggedWebsite = await apiCall(website, authKey); // tag the website
      classification = tagged.CLASSIFICATION?.toLowerCase();
      pushToArray(classification, taggedWebsites, website);
    }
    updateWebsitesInStorage(taggedWebsites); // update the website in storage
  } catch (e) {
    console.error(e);
  }
}
