// Code to verify the API key and store it in the local storage

import { baseUrl, model } from "../CONSTANTS/ChatGPT";

export async function verifyAPIKey(authKey: string): Promise<number> {
  try {
    await chrome.storage.local.remove("authKey");
    const requestBody = {
      model: model,
      messages: [
        {
          role: "user",
          content: `Hi`,
        },
      ],
    };
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authKey}`,
      },
      body: JSON.stringify(requestBody),
    });
    if (res.status !== 200) {
      throw new Error("Invalid API key");
    }
    await chrome.storage.local.set({ authKey });
    return 0;
  } catch (error) {
    return -1;
  }
}
