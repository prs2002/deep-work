function redirect() {
  chrome.runtime.sendMessage({ redirect: "html/blocked.html" });
}

async function isTimeExceeded(url: string): Promise<number> {
  const currentTime =
    (await chrome.storage.local.get("dailyTime"))?.dailyTime || [];
  const obj = currentTime.find((obj: any) => obj.url === url);

  if (obj === undefined) {
    return 0;
  }
  const timeElapsed = obj.time;
  return timeElapsed;
}

export async function handleBlocking(
  maxTime: number,
  isBlocking: boolean
): Promise<number> {
  const url = document.location.origin;
  const timeElapsed = await isTimeExceeded(url);
  if (timeElapsed >= maxTime) {
    isBlocking && redirect();
    return timeElapsed;
  }
  return timeElapsed;
}
