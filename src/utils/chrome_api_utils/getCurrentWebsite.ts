export async function getCurrentWebsite() : Promise<string> {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
        return "";
    }
    try {
        const url = new URL(tab.url || "");
        return url.origin;
    }
    catch (e) {
        console.log(e);
        return "";
    }
}