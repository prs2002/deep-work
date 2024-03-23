interface Website {
  id: string;
  website: string;
  tag: number;
}

export async function fetchWebsitesFromStorage() : Promise<Website[]>{
  const websiteData =
    (await chrome.storage.local.get("visitedURLs"))?.visitedURLs || [];
  let data: Website[] = [];
  for (let i = 0; i < websiteData.length; i++) {
    const website: string = websiteData[i];
    data.push({ website, tag: 0, id: website });
  }
  const taggedData =
    (await chrome.storage.local.get("taggedURLs"))?.taggedURLs || [];
  for (let i = 0; i < taggedData.length; i++) {
    const website: string = taggedData[i].website;
    const tag: number = taggedData[i].tag;
    data.push({ website, tag, id: website });
  }
  if (data.length === 0) {
    return [];
  }
  return data;
}
