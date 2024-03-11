function redirect() {
  chrome.runtime.sendMessage({ redirect: "blocked.html" });
}

async function isTimeExceeded(url: string): Promise<boolean> {
  const time = (await chrome.storage.local.get("maxTimes"))?.maxTimes || {};
  if (time?.[url] === undefined) {
    return false;
  }
  const maxTime = time?.[url] * 60 * 1000; // convert to milliseconds
  const currentTime =
    (await chrome.storage.local.get("dailyTime"))?.dailyTime || {};
  const obj = currentTime.find((obj: any) => obj.url === url);
  if (obj === undefined) {
    return false;
  }
  const timeElapsed = obj.time;
  const timeExceeded = timeElapsed > maxTime;
  return timeExceeded;
}

export function handleBlocking() {
  const url = window.location.origin;
  isTimeExceeded(url).then((timeExceeded) => {
    if (timeExceeded) {
      redirect();
    }
  });
}
