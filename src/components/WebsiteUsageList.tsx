import { useEffect, useState } from "react";
import "./WebsiteUsageList.css";
import { getTaggedTime } from "../utils/GetTaggedTime";

interface TaggedTimeURL {
  label: string;
  value: string;
  time: number;
  tag: number;
}

export default function WebsiteUsageList({ type }: { type: string }) {
  const [websites, setWebsites] = useState<TaggedTimeURL[]>([]);
  const [filteredWebsites, setFilteredWebsites] = useState<TaggedTimeURL[]>([]);
  let totalTime = websites.reduce((acc, website) => acc + website.time, 0);

  useEffect(() => {
    getTaggedTime(type).then((data) => {
      if (data) {
        data.sort((a, b) => b.time - a.time);
        setWebsites(data);
        setFilteredWebsites(data);
      }
    });
  }, [type]);

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    console.log(value);
    if (value === "All") {
      setFilteredWebsites(websites);
      return;
    } else if (value === "Productive") {
      setFilteredWebsites(websites.filter((website) => website.tag === 1));
    } else if (value === "Distracted") {
      setFilteredWebsites(websites.filter((website) => website.tag !== 1));
    }
  }

  return (
    <div className="website-usage-list">
      <div className="website-usage-list-header">
        <div className="website-usage-list-header-title">Usage Breakdown</div>
        <div className="website-usage-list-header-filter">
          <select
            name="website-usage-list-header-filter-select"
            defaultValue="All"
            onChange={handleFilter}
          >
            <option value="All">All</option>
            <option value="Productive">Productive</option>
            <option value="Distracted">Distracted</option>
          </select>
        </div>
      </div>
      <div className="website-usage-list-body">
        {filteredWebsites.map((website, index) => {
          const style = {
            width: `${(100 * website.time) / totalTime}%`,
            backgroundColor: `var(${website.tag === 1 ? "--green" : "--red"})`,
          };
          return (
            <div className="website-usage-list-body-row" key={index}>
              <div className="website-usage-list-body-row-label">
                <div>{website.label}</div>
                <div>{`${((100 * website.time) / totalTime).toFixed(2)}%`}</div>
              </div>
              <div className="website-usage-list-body-row-value">
                <div
                  className="website-usage-list-body-row-value-bar"
                  style={style}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
