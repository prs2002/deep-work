export async function updateMaxTime(website : string, time : string) : Promise<void> {
    const prevData = (await chrome.storage.local.get("maxTimes")).maxTimes || {};
    prevData[website] = time;
    await chrome.storage.local.set({maxTimes: prevData});
    console.log(prevData);
}