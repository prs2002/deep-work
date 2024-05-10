import { useEffect, useState } from "react";
import "./HourlySummaryBox.scss";
import { SUMMARY_TIME_TOO_SHORT } from "../../utils/CONSTANTS/texts";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { getSummary } from "../../utils/getHourlySummary";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function HourlySummaryBox() {
  const [summary, setSummary] = useState<string>(SUMMARY_TIME_TOO_SHORT);
  const [productive, setProductive] = useState<number>(0);
  const [unfocused, setUnfocused] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<string>(" in the Past Hour");
  useEffect(() => {
    getSummary(setTimeframe, setProductive, setUnfocused, setSummary);
  }, []);
  return (
    <>
      <div className="hourly_summary">
        <div className="hourly_summary__title">
          <h3>Hourly Updates</h3>
          <CiCircleInfo
            data-tooltip-id="hourly-tooltip"
            data-tooltip-content="Premium Alerts to update you on how the last hour went with a narrative summary."
            data-tooltip-place="bottom"
            className="info-icon"
          />
          <Tooltip id="hourly-tooltip" className="tooltip"></Tooltip>
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
              <ProgressBar
                color="blue"
                fill={productive}
                total={productive + unfocused}
              ></ProgressBar>
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
