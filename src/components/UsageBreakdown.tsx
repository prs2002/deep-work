import { useState } from "react";
import useToggle from "../hooks/useToggle";
import { TaggedTimeURL } from "../types/TaggedTimeUrl";
import SiteDetailsBox from "./SiteDetailsBox";
import "./UsageBreakdown.scss";
import { preprocessURL } from "../utils/PreprocessURL";
import { msToHM } from "../utils/scripts/mmToHM";

interface UsageBreakdownProps {
  totalTime: number;
  websites: TaggedTimeURL[];
}

export default function UsageBreakdown({
  totalTime,
  websites,
}: UsageBreakdownProps) {
  const [showSiteDetails, setShowSiteDetails] = useToggle(false);
  const [site, setSite] = useState<string>("");

  const handleSiteDetails = (item: TaggedTimeURL) => {
    setShowSiteDetails();
    setSite(item.label);
  };

  const displayWebsites = () => {
    return websites.map((item, index) => {
      if ((100 * item.time) / totalTime < 3) { // less than 3 percent of total time
        return null;
      }
      const website = preprocessURL(item.label);
      return (
        <div className="usage_breakdown__content__list__item">
          <div
            className="usage_breakdown__content__list__item__details"
            key={index}
          >
            <div
              className="usage_breakdown__content__list__item__details__website"
              onClick={() => {
                handleSiteDetails(item);
              }}
            >
              <div
                className="usage_breakdown__content__list__item__details__website__color"
                id={websiteColor[item.tag]}
              ></div>
              {website.slice(0, 20) + (website.length > 20 ? "..." : "")}
            </div>
            <div className="usage_breakdown__content__list__item__details__usage">
              {`${msToHM(item.time)}`}
            </div>
          </div>
          <div className="usage_breakdown__content__list__item__bar">
            <div
              className="usage_breakdown__content__list__item__bar__fill"
              style={{ width: `${(100 * item.time) / totalTime}%` }}
              id={websiteColor[item.tag]}
            ></div>
          </div>
        </div>
      );
    });
  };

  const websiteColor = ["grey", "orange", "blue", "red"];
  return (
    <div className="usage_breakdown">
      {showSiteDetails && (
        <SiteDetailsBox
          setShowSiteDetails={setShowSiteDetails}
          website={site}
        />
      )}
      <div className="usage_breakdown__content">
        <div className="usage_breakdown__content__title">
          <h3>Usage Breakdown</h3>
        </div>
        <div className="usage_breakdown__content__list">
          {websites.length ? displayWebsites() : "No websites visited"}
        </div>
      </div>
    </div>
  );
}
