import { useEffect, useState } from "react";
import "./UsageBox.scss";

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

  const usageColor = ["grey", "orange", "red"];
  return (
    <div className="usage_box">
      <div className="usage_box__content">
        <div className="usage_box__content__title">
          <h3>Summary</h3>
        </div>
        <div className="usage_box__content__list">
          {usage.map((item, index) => {
            return (
              <div className="usage_box__content__list__item" key={index}>
                <div className="usage_box__content__list__item__summary">
                  <div
                    className="usage_box__content__list__item__summary__color"
                    id={usageColor[index]}
                  ></div>
                  {item.label}
                </div>
                <div className="usage_box__content__list__item__time">
                  {item.value.toFixed(6)}$
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
