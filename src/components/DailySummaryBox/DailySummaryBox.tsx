import { useEffect, useState } from "react";
import "./DailySummaryBox.scss";
import { dailyRecap } from "../../utils/chatGPT/DailyRecap";
import { getTaggedTime } from "../../utils/queryStorage/GetTaggedTime";
import { msToHM } from "../../utils/scripts/mmToHM";
import {
  SUMMARY_NO_DATA,
  SUMMARY_TIME_TOO_SHORT,
  API_CALL_FAILED_SUMMARY,
  NO_API_KEY_SUMMARY,
} from "../../utils/CONSTANTS/texts";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function DailySummaryBox() {
  const [summary, setSummary] = useState<string>("Processing");
  const [focusRate, setFocusRate] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    async function generateSummary() {
      let prevDaySummary: any[] = (
        await chrome.storage.local.get("prevDaySummary")
      ).prevDaySummary;

      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (
        !prevDaySummary ||
        yesterday.toDateString() !== prevDaySummary[1] ||
        prevDaySummary[0].length < 70 ||
        [
          SUMMARY_NO_DATA,
          SUMMARY_TIME_TOO_SHORT,
          API_CALL_FAILED_SUMMARY,
          NO_API_KEY_SUMMARY,
        ].includes(prevDaySummary[0]) // error message
      ) {
        await dailyRecap();
      }

      prevDaySummary = (await chrome.storage.local.get("prevDaySummary"))
        .prevDaySummary;

      setSummary(prevDaySummary[0]);
    }
    async function getProductivity() {
      const yesterdayTime = await getTaggedTime("yesterdayTime");
      if (!yesterdayTime) {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        await chrome.storage.local.set({
          prevDaySummary: [SUMMARY_NO_DATA, yesterday.toDateString()],
        });
        setSummary(SUMMARY_NO_DATA);
        return;
      }
      generateSummary();
      const totalTime = yesterdayTime.reduce(
        (acc, website) => acc + website.time,
        0
      );
      const focusRate =
        totalTime &&
        (yesterdayTime.reduce(
          (acc, website) => acc + (website.tag === 1 ? website.time : 0),
          0
        ) /
          totalTime) *
          100;
      setFocusRate(focusRate);
      setTotalTime(totalTime);
    }
    getProductivity();
  }, []);
  const timeSummary = [
    {
      label: "Productive",
      value: msToHM((totalTime * focusRate) / 100),
      color: "blue",
    },
    {
      label: "Distracted",
      value: msToHM((totalTime * (100 - focusRate)) / 100),
      color: "red",
    },
    { label: "Total", value: msToHM(totalTime), color: "black" },
  ];
  return (
    <>
      <div className="daily_summary">
        <div className="daily_summary__title">
          <h3>Daily Recap</h3>
          <CiCircleInfo
            data-tooltip-id="daily-tooltip"
            data-tooltip-content="Premium Alerts to give you a recap on how the previous day went with a narrative summary."
            data-tooltip-place="bottom"
            className="info-icon"
          />
          <Tooltip id="daily-tooltip" className="tooltip"></Tooltip>
        </div>
        <div className="daily_summary__content">
          <div className="daily_summary__content__header">
            <div className="daily_summary__content__header__focus_rate">
              {focusRate.toFixed(0)}%
            </div>
            <div className="daily_summary__content__header__title">
              Focus Rate Yesterday
            </div>
            <div className="daily_summary__content__header__bar">
              <ProgressBar
                color="blue"
                fill={focusRate}
                total={100}
              ></ProgressBar>
            </div>
          </div>
          <div className="daily_summary__content__time">
            {timeSummary.map((time, index) => (
              <div className="daily_summary__content__time__row" key={index}>
                <div className="daily_summary__content__time__row__label">
                  <div
                    className="daily_summary__content__time__row__label__color"
                    id={time.color}
                  ></div>
                  <div className="daily_summary__content__time__row__label__name">
                    {time.label}
                  </div>
                </div>
                <div className="daily_summary__content__time__row__value">
                  {time.value}
                </div>
              </div>
            ))}
          </div>
          <div className="daily_summary__content__line"></div>
          <div
            className="daily_summary__content__summary"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        </div>
      </div>
    </>
  );
}
