import ReactDOM from "react-dom/client";
import "./HourlySummary.scss";
import React, { useEffect, useState } from "react";
import { msToHM } from "../scripts/mmToHM";
import { getSummary } from "../getHourlySummary";

const handleClose = () => {
  const root = document.getElementById("recenter_container");
  if (root) {
    root.remove();
  }
};

function HourlySummary() {
  const logo = chrome.runtime.getURL("images/recenter_logo.png");
  const [unfocused, setUnfocused] = useState<number>(0);
  const [productive, setProductive] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<string>(" in the Past Hour");
  const focusRate = (productive / Math.max(productive + unfocused, 1)) * 100;

  const timeSummary = [
    {
      label: "Productive",
      value: msToHM(productive),
      color: "blue",
    },
    {
      label: "Distracted",
      value: msToHM(unfocused),
      color: "red",
    },
    { label: "Total", value: msToHM(productive + unfocused), color: "black" },
  ];

  useEffect(() => {
    getSummary(setTimeframe, setProductive, setUnfocused);
  }, []);

  if (productive + unfocused <= 60 * 10 * 1000) {
    // if user spent less than 10 min in last hour, don't alert
    return <></>;
  }

  return (
    <div id="hourly_summary">
      <div id="hourly_summary__title">
        <div id="hourly_summary__title__logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="hourly_summary__title__text">
          <h3>Hourly Recap</h3>
        </div>
      </div>
      <div id="hourly_summary__content">
        <div id="hourly_summary__content__header">
          <div id="hourly_summary__content__header__focus_rate">
            {focusRate.toFixed(0)}%
          </div>
          <div id="hourly_summary__content__header__title">
            Focus Rate {timeframe}
          </div>
          <div id="hourly_summary__content__header__bar">
            <div
              id="hourly_summary__content__header__bar__fill"
              style={{ width: `${focusRate}%` }}
            ></div>
          </div>
        </div>
        <div id="hourly_summary__content__time">
          {timeSummary.map((time, index) => (
            <div id="hourly_summary__content__time__row" key={index}>
              <div id="hourly_summary__content__time__row__label">
                <div
                  id="hourly_summary__content__time__row__label__color"
                  className={time.color}
                ></div>
                <div id="hourly_summary__content__time__row__label__name">
                  {time.label}
                </div>
              </div>
              <div id="hourly_summary__content__time__row__value">
                {time.value}
              </div>
            </div>
          ))}
        </div>
        {/* <div id="hourly_summary__content__line"></div>
        <div id="hourly_summary__content__summary">{summary}</div> */}
        <div id="hourly_summary__content__button">
          <button
            id="hourly_summary__content__button__btn"
            onClick={handleClose}
          >
            Go to Work
          </button>
        </div>
      </div>
    </div>
  );
}

export function insertHourlySummary() {
  if (document.getElementById("recenter_container") !== null) {
    return;
  }
  setTimeout(handleClose, 10000);
  const root = document.createElement("div");
  root.id = "recenter_container";
  document.body.appendChild(root);
  const rootDiv = ReactDOM.createRoot(root);
  rootDiv.render(
    <React.StrictMode>
      <HourlySummary />
    </React.StrictMode>
  );
}
