// Code to verify the API key and store it in the local storage

import axios from "axios";

export async function verifyAPIKey(authKey: string) : Promise<number> {
  try {
    await chrome.storage.local.remove("authKey");
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Hi.",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authKey}`,
        },
      }
    );
    if (res.status !== 200) {
      throw new Error("Invalid API key");
    }
    await chrome.storage.local.set({ authKey });
    return 0;
  } catch (error) {
    return -1;
  }
}
