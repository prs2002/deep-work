import React from "react";
import ReactDOM from "react-dom/client";
import "./FinalAlert.scss";
import { ALERT_ACTIVITY } from "../CONSTANTS/texts";
function FinalAlert({ line }: { line: string }) {
  function onClose() {
    const root = document.getElementById("recenter_container");
    if (root) {
      root.remove();
    }
    window.location.href = "https://www.google.com";
  }

  const logo = chrome.runtime.getURL("images/recenter_logo.png");

  return (
    <div id="final_alert">
      <div id="final_alert__title">
        <div id="final_alert__title__logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="final_alert__title__text">
          <h1>Recenter</h1>
        </div>
      </div>
      <div id="final_alert__line">{line}</div>
      <div id="final_alert__activity">
        {ALERT_ACTIVITY}
      </div>
      <button id="final_alert__button" onClick={onClose}>
        Let's Go!
      </button>
    </div>
  );
}

export function insertFinalAlert(line: string) {
  if (document.getElementById("recenter_container") !== null) {
    return;
  }
  const root = document.createElement("div");
  root.id = "recenter_container";
  document.body.appendChild(root);
  const rootDiv = ReactDOM.createRoot(root);
  rootDiv.render(
    <React.StrictMode>
      <FinalAlert line={line} />
    </React.StrictMode>
  );
}
