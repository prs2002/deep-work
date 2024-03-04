import React from "react";
import ReactDOM from "react-dom/client";
import "./FinalAlert.scss";
function FinalAlert({ line }: { line: string }) {
  function onClose() {
    const root = document.getElementById("recenter_container");
    if (root) {
      root.remove();
    }
    window.location.href = "https://www.google.com";
  }

  return (
    <div id="final_alert_container">
      <div id="final_alert_container__title">Recenter</div>
      <div id="final_alert_container__line">{line}</div>
      <div id="final_alert_container__activity">
        Here is a quick activity to get you back to focus. Step away from the
        computer and try 5 pushups.
      </div>
      <button id="final_alert_container__button" onClick={onClose}>
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
