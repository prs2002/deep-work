interface Website {
  id: string;
  website: string;
  tag: number;
}

export async function updateWebsitesInStorage(websites: Website[]) {
  const oldTaggedWebsites =
    (await chrome.storage.local.get("taggedURLs")).taggedURLs || [];
  const oldVisitedWebsites =
    (await chrome.storage.local.get("visitedURLs")).visitedURLs || [];

  for (let i = 0; i < websites.length; i++) {
    for (let j = 0; j < oldTaggedWebsites.length; j++) {
      if (oldTaggedWebsites[j].website === websites[i].website) {
        oldTaggedWebsites.splice(j, 1);
      }
    }
    if (oldVisitedWebsites.includes(websites[i].website)) {
      oldVisitedWebsites.splice(
        oldVisitedWebsites.indexOf(websites[i].website),
        1
      );
    }
    if (websites[i].tag !== 0) {
      oldTaggedWebsites.push(websites[i]);
    } else {
      oldVisitedWebsites.push(websites[i].website);
    }
  }

  await chrome.storage.local.set({
    taggedURLs: oldTaggedWebsites,
  });
  await chrome.storage.local.set({
    visitedURLs: oldVisitedWebsites,
  });
}
