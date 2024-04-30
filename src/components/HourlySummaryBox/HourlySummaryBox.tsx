import { useEffect, useState } from "react";
import "./HourlySummaryBox.scss";
import { SUMMARY_TIME_TOO_SHORT } from "../../utils/CONSTANTS/texts";
import { hourlyRecap } from "../../utils/chatGPT/HourlyRecap";
import { getPrevHourTime } from "../../utils/queryStorage/GetPrevHourTime";

export default function HourlySummaryBox() {
  const [summary, setSummary] = useState<string>(SUMMARY_TIME_TOO_SHORT);
  const [productive, setProductive] = useState<number>(0);
  const [unfocused, setUnfocused] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<string>(" in the Past Hour");
  useEffect(() => {
    async function getSummary() {
      let prevHourSummary =
        (await chrome.storage.local.get("prevHourSummary")).prevHourSummary ||
        [];
      const hour: number | undefined =
        (
          (await chrome.storage.local.get("lastHourlyTime")).lastHourlyTime ||
          {}
        ).hour || undefined;
      if (hour) {
        const timeFrameStart = new Date(hour).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        });
        const timeFrameEnd = new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        });
        setTimeframe(` (${timeFrameStart} to ${timeFrameEnd})`);
      }
      if (prevHourSummary.length === 0) {
        await hourlyRecap(
          await getPrevHourTime(),
          hour || new Date().getTime() - 60 * 60 * 1000
        );
        prevHourSummary =
          (await chrome.storage.local.get("prevHourSummary")).prevHourSummary ||
          [];
      }
      setSummary(prevHourSummary[0]);
      setProductive(prevHourSummary[2] / 60000);
      setUnfocused(prevHourSummary[3] / 60000);
    }
    getSummary();
  }, []);
  return (
    <>
      <div className="hourly_summary">
        <div className="hourly_summary__title">
          <h3>Hourly Updates</h3>
        </div>
        <div className="hourly_summary__content">
          <div className="hourly_summary__content__header">
            <div className="hourly_summary__content__header__focus_rate">
              {(
                (productive * 100) /
                Math.max(productive + unfocused, 1)
              ).toFixed(0)}
              %
            </div>
            <div className="hourly_summary__content__header__title">
              Focus Rate {timeframe}
            </div>
            <div className="hourly_summary__content__header__bar">
              <div
                className="hourly_summary__content__header__bar__fill"
                style={{
                  width: `${
                    (productive * 100) / Math.max(productive + unfocused, 1)
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="hourly_summary__content__time">
            <div className="hourly_summary__content__time__productive">
              <div className="hourly_summary__content__time__productive__label">
                <div className="hourly_summary__content__time__productive__label__color"></div>
                <div className="hourly_summary__content__time__productive__label__name">
                  Productive
                </div>
              </div>
              <div className="hourly_summary__content__time__productive__value">
                {productive.toFixed(0)}m
              </div>
            </div>
            <div className="hourly_summary__content__time__unfocused">
              <div className="hourly_summary__content__time__unfocused__label">
                <div className="hourly_summary__content__time__unfocused__label__color"></div>
                <div className="hourly_summary__content__time__unfocused__label__name">
                  Unfocused
                </div>
              </div>
              <div className="hourly_summary__content__time__unfocused__value">
                {unfocused.toFixed(0)}m
              </div>
            </div>
          </div>
          <div className="hourly_summary__content__line"></div>
          <div
            className="hourly_summary__content__summary"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        </div>
      </div>
    </>
  );
}
