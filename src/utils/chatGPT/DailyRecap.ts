import { baseUrl, model } from "../CONSTANTS/ChatGPT";
import {
  API_CALL_FAILED_SUMMARY,
  NO_API_KEY_SUMMARY,
} from "../CONSTANTS/texts";
import { organizeHistoryByBaseUrl } from "../scripts/processHistory";
import { estimatedCost } from "./EstimatedCost";


export async function dailyRecap(): Promise<boolean> {
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var startTime = yesterday.setHours(0, 0, 0, 0);
  var endTime = yesterday.setHours(23, 59, 59, 999);

  const historyItems = await chrome.history.search({
    text: "",
    startTime: startTime,
    endTime: endTime,
    maxResults: 1000,
  });
  
  const organizedHistory = await organizeHistoryByBaseUrl(historyItems);
  

  const authKey = (await chrome.storage.local.get("authKey"))?.authKey; // api key
  if (!authKey) {
    await chrome.storage.local.set({
      prevDaySummary: [NO_API_KEY_SUMMARY, yesterday.toDateString()],
    });
    return false;
  }
  const lastCalled = (await chrome.storage.local.get("summaryLock"))
    .summaryLock;
  if (new Date().getTime() - lastCalled <= 30 * 1000) {
    return false;
  }
  await chrome.storage.local.set({ summaryLock: new Date().getTime() });

  const summary = await prevDaySummary(organizedHistory, authKey, yesterday);


  if (summary === "") {
    await chrome.storage.local.set({
      prevDaySummary: [API_CALL_FAILED_SUMMARY, yesterday.toDateString()],
    });
    return false;
  }

  await chrome.storage.local.set({
    prevDaySummary: [summary, yesterday.toDateString()],
  });
  return true;
}

async function prevDaySummary(
  history: string,
  authKey: any,
  date: Date
): Promise<String> {
  try {
    const requestBody = {
      model: model,
      messages: [
        {
          role: "user",
          content: `
          ${history}
          This is the browser history in a certain time period. Summarize this into a simple 7-8 sentence summary. The goal of this summary is to help the user realize what they have been browsing and if that is wasteful. This should encourage them to spend less time on wasteful non-productive sites. This is also a summary for the previous day and can say so. It is implicit that this is the browser history so need not be mentioned. This can be funny. This should be in accessible english and speak directly to the user and refer to them as "you"
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
      console.log(res);
      throw new Error("API request failed");
    }
    const data = await res.json();
    const inputTokens = data.usage.prompt_tokens;
    const outputTokens = data.usage.completion_tokens;
    await estimatedCost(
      inputTokens,
      outputTokens,
      `dailyRecap ${date.toDateString()}`
    );
    const summary = data.choices[0].message.content;
    return summary;
  } catch (err) {
    return (err as Error).message;
  }
}
