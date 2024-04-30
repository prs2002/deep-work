import { updateWebsitesInStorage } from "../../utils/queryStorage/UpdateWebsitesInStorage";

export async function saveSiteDetails(
  id: string,
  violations: string,
  time: string,
  maxTime: string,
  website: string
) {
  if (
    id !== "1" &&
    (isNaN(Number(violations)) || violations === "" || parseInt(violations) < 0)
  ) {
    alert("Please enter valid violations");
    return;
  }
  if (
    id !== "1" &&
    (isNaN(Number(time)) || time === "" || parseInt(time) < 0)
  ) {
    alert("Please enter valid time");
    return;
  }
  if (
    id === "3" &&
    (isNaN(Number(maxTime)) || maxTime === "" || parseInt(maxTime) < 0)
  ) {
    alert("Please enter valid max time");
    return;
  }
  if (id !== "1") await updateAlertParameters(website, time, violations);
  if (id === "3") {
    const prevMaxTimes =
      (await chrome.storage.local.get("maxTimes")).maxTimes || {};
    prevMaxTimes[website] = parseInt(maxTime);
    await chrome.storage.local.set({ maxTimes: prevMaxTimes });
  }
  await updateWebsitesInStorage([
    {
      id: website,
      tag: parseInt(id),
      website: website,
    },
  ]);
}

async function updateAlertParameters(
  website: string,
  time: string,
  violations: string
) {
  chrome.storage.local.get("promptParameters").then(async (prev) => {
    const prevData = prev?.promptParameters || {};
    prevData[website] = {
      promptInterval: parseInt(time),
      promptViolations: parseInt(violations),
    };
    await chrome.storage.local.set({ promptParameters: prevData });
    alert("Alert parameters saved successfully");
  });
}
