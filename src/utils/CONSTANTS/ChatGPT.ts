// ChatGPT CONSTANTS
export const baseUrl = "https://api.openai.com/v1";
export const model = "gpt-3.5-turbo-0125";
export const costPer1000Token_INPUT = 0.0005;
export const costPer1000Token_OUTPUT = 0.0015;

// Prompts

export const HOURLY_RECAP_PROMPT = (
  history: string,
  productivePercentage: number
): string => {
  return `
    Productive for ${productivePercentage.toFixed(2)}%
    History:
      ${history}
      This is the browser history in a certain time period. Summarize this into a simple 4 or 5 sentence summary. The goal of this summary is to help the user realize what they have been browsing and if that is wasteful. This should encourage them to spend less time on wasteful non-productive sites. This is also a summary for one hour and can say so. It is implicit that this is the browser history so need not be mentioned. This can be funny. This should be in accessible english and speak directly to the user and refer to them as "you". Pay special attention to any interesting titles and use those in commenting on what the user might have been doing. Have an unusual introduction and a cold-open to the summary. Acknowledge how well the user spent time overall without referring to the percentage`;
};

export const DAILY_RECAP_PROMPT = (
  history: string,
  productivePercentage: number
): string => {
  return `
  Productive for ${productivePercentage.toFixed(2)}%
    History:
  ${history}
  This is the browser history in a certain time period. Summarize this into a simple 7-8 sentence summary. The goal of this summary is to help the user realize what they have been browsing and if that is wasteful. This should encourage them to spend less time on wasteful non-productive sites. This is also a summary for the previous day and can say so. It is implicit that this is the browser history so need not be mentioned. This can be funny. This should be in accessible english and speak directly to the user and refer to them as "you". Pay special attention to any interesting titles and use those in commenting on what the user might have been doing. Have an unusual introduction and a cold-open to the summary. Acknowledge how well the user spent time overall without referring to the percentage`;
};
