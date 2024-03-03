import { updateWebsitesInStorage } from "./UpdateWebsitesInStorage";

interface Website {
  id: string;
  website: string;
  tag: number;
}

interface TaggedWebsite {
  URL: string;
  CLASSIFICATION: string;
}

async function apiCall(website: string, authKey: any) {
  try {
    const requestBody = {
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: `Imagine you're a digital detective tasked with classifying websites as either 'wasteful,' 'productive,' or 'unsure.' You're given a website URL, and you must determine its classification based on whether it helps with work, is used to kill time, or is ambiguous in its purpose. For the purpose of this task, 'work' is defined as any activity that contributes to one's professional or educational goals, such as research, learning, collaboration, or productivity tools. Your output should be a JSON object containing the classification, the URL. For example, if the website is Netflix.com and the description is your response might be: {'CLASSIFICATION': 'Wasteful', 'URL': 'netflix.com'}. Now, classify ${website}
      `,
        },
      ],
    };
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authKey.authKey}`,
      },
      body: JSON.stringify(requestBody),
    });
    const data = await res.json();
    const classifiedWebsites = data.choices[0].message.content;
    const classifiedWebsitesObject = JSON.parse(classifiedWebsites);
    return classifiedWebsitesObject;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function AITagging() {
  
  try {
    const authKey = await chrome.storage.local.get("authKey");
    if (!authKey.authKey) {
      throw new Error("No API Key found");
    }
    const websites = await chrome.storage.local.get("visitedURLs");
    if (!websites.visitedURLs) {
      throw new Error("No URLs found");
    }
    const websiteList : string[] = websites.visitedURLs;
    if (websiteList.length === 0) {
      return;
    }

    
    const preTaggedUrls : TaggedWebsite[] = (await chrome.storage.local.get("preTaggedUrls"))?.preTaggedUrls || [];
    const taggedWebsites: Website[] = [];

    for (let i = 0; i < websiteList.length; i++) {
      const website : string = websiteList[i];
      let classification = "unsure";
      const obj : TaggedWebsite | undefined= preTaggedUrls.find((obj) => obj.URL === website);
      
      if(obj) {
        classification = obj.CLASSIFICATION.toLowerCase();
      }
      else {
        const tagged: TaggedWebsite = await apiCall(website, authKey);
        classification = tagged.CLASSIFICATION?.toLowerCase();
        // await new Promise((resolve) => {
        //   setTimeout(resolve, 60000) // wait 30 seconds for rate limit
        // })
      }
      let tag = 0;
      if (classification === "productive") {
        tag = 1;
      } else if (classification === "unsure") {
        tag = 2;
      } else {
        tag = 3;
      }
      taggedWebsites.push({ id: website, website, tag });
    }
    
    updateWebsitesInStorage(taggedWebsites);
  } catch (e) {
    console.error(e);
  }
}
