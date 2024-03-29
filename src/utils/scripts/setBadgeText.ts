export function setBadgeText(time: number, tabId: number) {
  chrome.action.setBadgeText({ text: getTime(time), tabId: tabId });
}

function getTime(time: number) {
  const sec = time;
  const min = Number((time / 60).toFixed(0));
  const hours = Number((time / (60 * 60)).toFixed(1));

  if (sec < 60) return ``;
  else if (min < 60) return `${min}m`;
  else return `${hours}h`;
}
