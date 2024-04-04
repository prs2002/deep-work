function redirect() {
  chrome.runtime.sendMessage({ redirect: "blocked.html" });
}

async function isTimeExceeded(url: string): Promise<number[] | undefined> {
  const time = (await chrome.storage.local.get("maxTimes"))?.maxTimes || {};
  if (time[url] === undefined) {
    return undefined;
  }
  const maxTime = parseInt(time[url]) * 60 * 1000; // convert to milliseconds
  const currentTime =
    (await chrome.storage.local.get("dailyTime"))?.dailyTime || [];
  const obj = currentTime.find((obj: any) => obj.url === url);

  if (obj === undefined) {
    return undefined;
  }
  const timeElapsed = obj.time;
  return [maxTime - timeElapsed, timeElapsed];
}

export async function handleBlocking(): Promise<number | undefined> {
  const url = document.location.origin;
  const remainingTime = await isTimeExceeded(url);
  if (remainingTime !== undefined && remainingTime[0] <= 0) {
    const isBlocking =
      (await chrome.storage.local.get("enableBlockDistractingSites"))
        .enableBlockDistractingSites || true;
    isBlocking && redirect();
    return 0;
  }
  return remainingTime ? remainingTime[1] : undefined;
}
