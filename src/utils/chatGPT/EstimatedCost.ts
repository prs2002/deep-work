export async function estimatedCost(inputToken : number, outputToken: number, purpose : string) {
    const prevUsage = (await chrome.storage.local.get("usage"))?.usage || [];
    const inputCost = 0.0005 / 1000;
    const outputCost = 0.0015 / 1000;
    let usage = 0;
    usage += inputCost * inputToken;
    usage += outputCost * outputToken;
    prevUsage.push({cost : usage, purpose : purpose});
    await chrome.storage.local.set({usage : prevUsage});
}