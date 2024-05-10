import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import SiteDetailsBox from "../SiteDetailsBox/SiteDetailsBox";
import "./UsageBreakdown.scss";
import { preprocessURL } from "../../utils/scripts/PreprocessURL";
import { SlOptionsVertical } from "react-icons/sl";
import { msToHM } from "../../utils/scripts/mmToHM";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import ProgressBar from "../ProgressBar/ProgressBar";

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
    setSite(item.url);
  };

  const displayWebsites = () => {
    return websites.map((item, index) => {
      if ((100 * item.time) / totalTime < 1) {
        // less than 1 percent of total time
        return null;
      }
      const website = preprocessURL(item.url);
      return (
        <div className="usage_breakdown__content__list__item">
          <div
            className="usage_breakdown__content__list__item__details"
            key={index}
          >
            <div className="usage_breakdown__content__list__item__details__website">
              <div
                className="usage_breakdown__content__list__item__details__website__color"
                id={websiteColor[item.tag]}
              ></div>
              {website.slice(0, 20) + (website.length > 20 ? "..." : "")}
            </div>
            <div
              className="usage_breakdown__content__list__item__details__usage"
              title={
                ((100 * item.time) / totalTime).toFixed(2) +
                "% " +
                msToHM(item.time)
              }
            >
              {`${((100 * item.time) / totalTime).toFixed(0)}%`}
              <SlOptionsVertical
                onClick={() => {
                  handleSiteDetails(item);
                }}
              />
            </div>
          </div>
          <div className="usage_breakdown__content__list__item__bar">
            <ProgressBar
              fill={item.time}
              total={totalTime}
              color={websiteColor[item.tag]}
            ></ProgressBar>
          </div>
        </div>
      );
    });
  };
  const websiteColor = ["grey", "blue", "orange", "red"];
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
          <CiCircleInfo
            data-tooltip-id="usage-breakdown-tooltip"
            data-tooltip-content="Visual breakdown of websites you visited today and their contribution to today's analysis.            "
            data-tooltip-place="bottom"
            className="info-icon"
          />
          <Tooltip id="usage-breakdown-tooltip" className="tooltip"></Tooltip>
        </div>
        <div className="usage_breakdown__content__outline">
          <div className="usage_breakdown__content__list">
            {websites.length ? displayWebsites() : "No websites visited"}
          </div>
        </div>
      </div>
    </div>
  );
}
