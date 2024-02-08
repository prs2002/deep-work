import { useEffect, useState } from "react";
import "./WebsiteList.css";
import { updateWebsitesInStorage } from "../utils/UpdateWebsitesInStorage";
import { fetchWebsitesFromStorage } from "../utils/FetchWebsitesFromStorage";

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
      const data = await fetchWebsitesFromStorage();
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
    
    updateWebsitesInStorage(websites);
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
