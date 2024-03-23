import { DropdownOptions } from "../../types/DropdownOptions";

export async function tagWebsite(
  website: string,
  activeOption: DropdownOptions,
  maxTime: string,
  setWebsite: (website: string) => void,
  setActiveOption: (activeOption: DropdownOptions) => void,
  setMaxTime: (maxTime: string) => void
) {
  if (website === "") {
    alert("Please enter a website");
    return;
  }
  if (activeOption.id === "3" && maxTime === "") {
    alert("Please enter a maximum time");
    return;
  }
  if (activeOption.id === "3" && isNaN(parseInt(maxTime))) {
    alert("Please enter a valid number for maximum time");
    return;
  }
  if (activeOption.id === "3" && parseInt(maxTime) <= 0) {
    alert("Please enter a valid number for maximum time");
    return;
  }
  if (activeOption.id === "0") {
    alert("Please select a tag");
    return;
  }
  try {
    const urlObject = new URL(website);
    const prevMaxTimes = (await chrome.storage.local.get("maxTimes")).maxTimes || {};
    prevMaxTimes[urlObject.origin] = parseInt(maxTime);
    await chrome.storage.local.set({ maxTimes: prevMaxTimes });
    const visitedData = await chrome.storage.local.get("visitedURLs");
    const visitedURLs = visitedData?.visitedURLs || [];
    if (visitedURLs.indexOf(urlObject.origin) !== -1) {
      visitedURLs.splice(visitedURLs.indexOf(urlObject.origin), 1);
      await chrome.storage.local.set({ visitedURLs: visitedURLs });
    }
    const taggedData =
      (await chrome.storage.local.get("taggedURLs"))?.taggedURLs || [];

    for (let i = 0; i < taggedData.length; i++) {
      if (taggedData[i].id === urlObject.origin) {
        taggedData[i].tag = parseInt(activeOption.id);
        await chrome.storage.local.set({ taggedURLs: taggedData });
        setWebsite("");
        setActiveOption({ id: "0", value: "Select" });
        setMaxTime("");
        return;
      }
    }

    taggedData.push({
      website: urlObject.origin,
      tag: parseInt(activeOption.id),
      id: urlObject.origin,
    });
    await chrome.storage.local.set({ taggedURLs: taggedData });
    setWebsite("");
    setActiveOption({ id: "0", value: "Select" });
    setMaxTime("");
  } catch {
    alert("Please enter a valid URL");
    return;
  }
}
