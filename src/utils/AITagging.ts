import { updateWebsitesInStorage } from "./UpdateWebsitesInStorage";

interface Website {
  id: string;
  website: string;
  tag: number;
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
    const websiteList = websites.visitedURLs;
    if (websiteList.length === 0) {
      return;
    }

    const requestBody = {
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: `I want you to act as a website classifier. You will be provided with a list of urls and your task is to classify them into three classes - "Good, "Bad" and "Dangerous". The classification must be based on how the website is for the productivity of a user. For example, generally social media websites are considered as "Dangerous" because they are addictive and can waste a lot of time. Similarly, educational websites are considered good because they help in learning. Now classify the following websites and return a json object with the classification. The json object should be in the following format: 
            {
                "Good": ["url1", "url2"],
                "Bad": ["url3", "url4"],
                "Dangerous": ["url5", "url6"]
            }
      Here are the websites:
      
      ${websiteList
        .map((url: string, i: number) => i + 1 + " " + url)
        .join("\n")}
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
    const taggedWebsites: Website[] = [];
    for (let i = 0; i < websiteList.length; i++) {
      const website = websiteList[i];
      let tag = 0;
      if (classifiedWebsitesObject.Good.includes(website)) {
        tag = 1;
      } else if (classifiedWebsitesObject.Bad.includes(website)) {
        tag = 2;
      } else if (classifiedWebsitesObject.Dangerous.includes(website)) {
        tag = 3;
      }
      taggedWebsites.push({ id: website, website, tag });
    }
    updateWebsitesInStorage(taggedWebsites);
  } catch (e) {
    console.error(e);
  }
}
