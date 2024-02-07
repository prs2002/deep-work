import { useEffect, useState } from "react";
import "./WebsiteList.css";

interface Website {
  id: string;
  website: string;
  tag: number;
}

export default function WebsiteList({ searchValue }: { searchValue: string }) {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [filteredWebsites, setFilteredWebsites] = useState<Website[]>([]);
  useEffect(() => {
    setFilteredWebsites(
      websites.filter((website) =>
        website.website.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [websites, searchValue]);
  useEffect(() => {
    async function fetchWebsites() {
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
        return;
      }
      setWebsites(data);
    }

    if (websites.length === 0) {
      fetchWebsites();
    }
  }, [websites]);

  useEffect(() => {
    async function updateWebsites() {
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
      console.log(oldTaggedWebsites);
      console.log(oldVisitedWebsites);

      await chrome.storage.local.set({
        taggedURLs: oldTaggedWebsites,
      });
      await chrome.storage.local.set({
        visitedURLs: oldVisitedWebsites,
      });
    }
    updateWebsites();
  }, [websites]);

  function handleTagChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.parentElement?.parentElement?.id;
    console.log(id);
    console.log(websites);
    const newWebsites = websites.map((website) => {
      if (website.id === id) {
        website.tag = parseInt(e.target.value);
      }
      return website;
    });
    console.log(newWebsites);

    setWebsites(newWebsites);
  }

  return (
    <>
      <div className="website-list">
        {filteredWebsites.map((website) => {
          return (
            <div className="website-list__row" key={website.id} id={website.id}>
              <div className="website-list__row__col">
                <a href={website.website} target="_blank" rel="noreferrer">
                  {website.website}
                </a>
              </div>
              <div className="website-list__row__col">
                <select
                  className="website-list__select"
                  defaultValue={website.tag}
                  onChange={handleTagChange}
                >
                  <option value="0">Untagged</option>
                  <option value="1">Good</option>
                  <option value="2">Bad</option>
                  <option value="3">Dangerous</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
