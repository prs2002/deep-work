import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Alert.scss";
function Alert({ updateViolations }: { updateViolations: any }) {
  const [isMore, setIsMore] = useState(false);

  function onClose() {
    const root = document.getElementById("recenter_container");
    if (root) {
      root.remove();
    }
    updateViolations(0);
    window.location.href = "https://www.google.com";
  }

  function onMore() {
    setIsMore(true);
  }

  function handleViolation() {
    const input = document.getElementById("non_blocking_alert__more_input") as HTMLInputElement;
    if (!input || input.value.toLowerCase() !== "maybe later") {
      return; 
    }
    const root = document.getElementById("recenter_container");
    if (root) {
      root.remove();
    }
    updateViolations(1);
  }

  return (
    <div id="non_blocking_alert" className={isMore ? "more" : ""}>
      <h1 id="non_blocking_alert__title">Recenter</h1>
      <div id="non_blocking_alert__content">
        <p>Feeling Distracted?</p>
        <p>Let's Get Back to Work.</p>
        <p>You got this!</p>
      </div>
      {!isMore ? (
        <div id="non_blocking_alert__button_container">
          <button id="non_blocking_alert__button_container__quit" onClick={onClose}>
            Let's Go!
          </button>
          <button id="non_blocking_alert__button_container__more" onClick={onMore}>
            Maybe Later
          </button>{" "}
        </div>
      ) : (
        <div>
          <div id="non_blocking_alert__more_phrase">
            Type the phrase “Maybe Later” to confirm
          </div>
          <input id="non_blocking_alert__more_input" onChange={handleViolation}></input>
          <div id="non_blocking_alert__more_line"></div>
          <div id="non_blocking_alert__more_go_back">
            You can still get Back to Work
          </div>
          <button id="non_blocking_alert__more_go_back_btn" onClick={onClose}>
            Let's Go!
          </button>
        </div>
      )}
    </div>
  );
}

export function insertAlert(updateViolations: any) {
  if (document.getElementById("recenter_container") !== null) {
    updateViolations(0);
    return;
  }
  const root = document.createElement("div");
  root.id = "recenter_container";
  document.body.appendChild(root);
  const rootDiv = ReactDOM.createRoot(root);
  rootDiv.render(
    <React.StrictMode>
      <Alert updateViolations={updateViolations} />
    </React.StrictMode>
  );
}
