import { useEffect, useState } from "react";
import "./UsageSummary.css";
import { calculateProductivity } from "../utils/CalculateProductivity";

interface SummaryItem {
  label: string;
  value: string;
}

export default function UsageSummary({ type }: { type: string }) {
  const [summary, setSummary] = useState<SummaryItem[]>([
    {
      label: "Total time spent",
      value: "-",
    },
    {
      label: "Productive time spent",
      value: "-",
    },
    {
      label: "Distracted time spent",
      value: "-",
    },
  ]);

  useEffect(() => {
    // Fetch data from chrome storage
    calculateProductivity(type).then((data) => {
      if(data) {
        setSummary(data);
      }
    });
  }, [type]);

  return (
    <div className="usage-summary">
      <div className="usage-summary-header">Summary</div>
      <div className="usage-summary-body">
        {summary.map((item, index) => {
          return (
            <div className="usage-summary-body-row" key={index}>
              <div className="usage-summary-body-row-label">{item.label}</div>
              <div className="usage-summary-body-row-value">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
