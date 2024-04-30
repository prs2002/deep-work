import { baseUrl, model } from "../CONSTANTS/ChatGPT";
import { estimatedCost } from "./EstimatedCost";

export async function apiCallWithTimeout(
  prompt: string,
  timeout: number = 30000,
  purpose: string,
  authKey: any
): Promise<string> {
  try {
    const requestBody = {
      model: model,
      messages: [
        {
          role: "user",
          content: prompt,
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
      }, timeout);
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
    await estimatedCost(inputTokens, outputTokens, purpose);
    const summary = data.choices[0].message.content;
    return summary;
  } catch (err) {
    return (err as Error).message;
  }
}
