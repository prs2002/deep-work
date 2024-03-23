import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Alert.scss";

function Alert({ updateViolations }: { updateViolations: any }) {
  const [isMore, setIsMore] = useState(false);
  const logo = chrome.runtime.getURL("js/images/recenter_logo.png");
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
    const input = document.getElementById(
      "non_blocking_alert__more_content__phrase__input"
    ) as HTMLInputElement;
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
      <div id="non_blocking_alert__title">
        <div id="non_blocking_alert__title__logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="non_blocking_alert__title__text">
          <h1>Recenter</h1>
        </div>
      </div>
      <div id="non_blocking_alert__header">
        <p id="non_blocking_alert__header__light">Feeling Distracted?</p>
        <p id="non_blocking_alert__header__dark">Let's Get Back to Work.</p>
        <p id="non_blocking_alert__header__dark">You got this!</p>
      </div>
      {!isMore && (
        <div id="non_blocking_alert__buttons">
          <button
            id="non_blocking_alert__buttons__button"
            className="white"
            onClick={onClose}
          >
            Let's Go
          </button>
          <button
            id="non_blocking_alert__buttons__button"
            className="blue"
            onClick={onMore}
          >
            Maybe Later
          </button>
        </div>
      )}
      {isMore && (
        <div id="non_blocking_alert__more_content">
          <div id="non_blocking_alert__more_content__phrase">
            <div id="non_blocking_alert__more_content__phrase__label">
              Type the phrase “Maybe Later” to confirm
            </div>
            <input
              id="non_blocking_alert__more_content__phrase__input"
              type="text"
              onChange={handleViolation}
            />
          </div>
          <div id="non_blocking_alert__more_content__line"></div>
          <div id="non_blocking_alert__more_content__go_back">
            <div id="non_blocking_alert__more_content__go_back__label">
              You can still get Back to Work
            </div>
            <button
              id="non_blocking_alert__more_content__go_back__button"
              onClick={onClose}
            >
              Let's Go
            </button>
          </div>
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
