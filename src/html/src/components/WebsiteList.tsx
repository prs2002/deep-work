import { useEffect, useState, useRef } from "react";
import "./WebsiteList.scss";

export default function WebsiteList() {
  const [websites, setWebsites] = useState<string[]>([]);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchWebsites() {
      const websites: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const icon = await import(`../../../images/logos/${i}.png`);
        websites.push(icon.default);
      }
      setWebsites(websites);
    }
    fetchWebsites();
  }, []);

  return (
    <div className="website_list">
      <div className="website_list__title">
        Works with all your favorite websites
      </div>
      <div className="website_list__items" ref={itemsContainerRef}>
        {websites.map((website, index) => (
          <div className="website_list__items__item" key={index}>
            <img src={website} alt={`website ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
