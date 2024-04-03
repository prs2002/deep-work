/*
    This file is used to fetch funny lines local storage and randomly select a line to display to the user.
*/

import { NO_FUNNY_LINES } from "../CONSTANTS/texts";

interface FunnyLine {
  lines: string[];
  URL: string;
}

export async function fetchFunnyLines(url: string): Promise<string> {
  const funnyLines: FunnyLine[] =
    (await chrome.storage.local.get("funnyLines"))?.funnyLines || [];

  const obj = funnyLines.find((obj) => {
    return obj["URL"] === url;
  });

  if (obj) {
    const randomLine: string =
      obj.lines[Math.floor(Math.random() * obj.lines.length)];
    return randomLine;
  }
  return NO_FUNNY_LINES;
}
