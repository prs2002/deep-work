import { useState } from "react";
import TimeChart from "../components/TimeChart";
import "./SummaryPage.css";
import UsageSummary from "../components/UsageSummary";
import WebsiteUsageList from "../components/WebsiteUsageList";

export default function SummaryPage({ setPage }: { setPage: any }) {
  const [type, setType] = useState<string>("dailyTime");
  const [activeNavItem, setActiveNavItem] = useState<string>("Today");

  const handleType = (e: any) => {
    const selectedType = e.target.innerText;
    setActiveNavItem(selectedType);
    if (selectedType === "Today")
      setType("dailyTime");
    else if(selectedType === "Daily") {
      setType("dailyAverage");
    }
    else setType("webTime");
  };

  const handlePage = () => {
    setPage(0);
  };

  return (
    <div className="summary-page-container">
      <div className="summary-page-header">
        <button className="back-button" onClick={handlePage}>
          Back
        </button>
      </div>
      <div className="summary-page-body">
        <div className="summary-page-body-nav">
          <div
            className={`summary-page-body-nav-item ${
              activeNavItem === "Today" ? "active" : ""
            }`}
            onClick={handleType}
          >
            Today
          </div>
          <div
            className={`summary-page-body-nav-item ${
              activeNavItem === "Daily" ? "active" : ""
            }`}
            onClick={handleType}
          >
            Daily
          </div>
          <div
            className={`summary-page-body-nav-item ${
              activeNavItem === "Total Time" ? "active" : ""
            }`}
            onClick={handleType}
          >
            Total Time
          </div>
        </div>
        <div className="summary-page-body-chart">
          <TimeChart type={type}></TimeChart>
        </div>
        <div className="summary-page-body-summary">
          <UsageSummary type={type}></UsageSummary>
          <WebsiteUsageList type={type}></WebsiteUsageList>
        </div>
      </div>
    </div>
  );
}
