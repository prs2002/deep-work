/*
Function to update websites in storage
*/

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
      if (oldTaggedWebsites[j].website === websites[i].website) { // if the website was already tagged, remove it
        oldTaggedWebsites.splice(j, 1);
      }
    }
    if (oldVisitedWebsites.includes(websites[i].website)) { // if the website was already in un-tagged list, remove it
      oldVisitedWebsites.splice(
        oldVisitedWebsites.indexOf(websites[i].website),
        1
      );
    }
    if (websites[i].tag !== 0) { // if the website is tagged, add it to tagged list
      oldTaggedWebsites.push(websites[i]);
    } else { // if the website is not tagged, add it to un-tagged list
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
