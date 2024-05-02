import { useEffect, useState } from "react";
import "./UsageBox.scss";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

export default function UsageBox() {
  const [usage, setUsage] = useState([
    {
      label: "Monthly Usage",
      value: 0,
    },
    {
      label: "Weekly Usage",
      value: 0,
    },
    {
      label: "Daily Usage",
      value: 0,
    },
  ]);

  useEffect(() => {
    chrome.storage.local.get("usage", (data) => {
      if (!data?.usage) {
        chrome.storage.local.set({
          usage: {
            monthly: { month: "", usage: [] },
            weekly: { week: "", usage: [] },
            daily: { day: "", usage: [] },
          },
        });
        return;
      }
      const usageData = data.usage;
      const monthlyUsage = usageData.monthly.usage.reduce(
        (acc: number, item: { cost: number }) => acc + item.cost,
        0
      );
      const weeklyUsage = usageData.weekly.usage.reduce(
        (acc: number, item: { cost: number }) => acc + item.cost,
        0
      );
      const dailyUsage = usageData.daily.usage.reduce(
        (acc: number, item: { cost: number }) => acc + item.cost,
        0
      );
      setUsage((prev) => {
        prev[0].value = monthlyUsage;
        prev[1].value = weeklyUsage;
        prev[2].value = dailyUsage;
        return [...prev];
      });
    });
  }, []);

  const colors = ["blue", "red", "black"]

  return (
    <>
      <div className="usage_summary">
        <div className="usage_summary__title">
          <h3>Usage Summary</h3>
          <CiCircleInfo
            data-tooltip-id="usage_tooltip"
            data-tooltip-content="Daily, Weekly and Monthly API usage breakdown to keep you updated on how much you are spending."
            data-tooltip-place="bottom"
            className="info-icon"
          />
          <Tooltip id="usage_tooltip" className="tooltip"></Tooltip>
        </div>
        <div className="usage_summary__content">
          <div className="usage_summary__content__usage">
            {usage.map((time, index) => (
              <div className="usage_summary__content__usage__row" key={index}>
                <div className="usage_summary__content__usage__row__label">
                  <div
                    className="usage_summary__content__usage__row__label__color"
                    id={colors[index]}
                  ></div>
                  <div className="usage_summary__content__usage__row__label__name">
                    {time.label}
                  </div>
                </div>
                <div className="usage_summary__content__usage__row__value">
                  {time.value.toFixed(2)}$
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
