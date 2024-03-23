import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { FaRegClock } from "react-icons/fa6";
import "./Timer.scss";
import { handleBlocking } from "../Blocking";

function Timer() {
  const [remainingTime, setRemainingTime] = useState<number>(1200);

  useEffect(() => {
    const timer = setInterval(async () => {
      const remainingTime = await handleBlocking();
      if (remainingTime !== undefined) setRemainingTime(remainingTime / 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function secondsToTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time % 60);
    const minutesStr: string = String(minutes).padStart(2, "0");
    const secondsStr: string = String(seconds).padStart(2, "0");
    return `${minutesStr} : ${secondsStr}`;
  }

  return (
    <div id="recenter_timer">
      <div id="recenter_timer__logo">
        <FaRegClock />
      </div>
      <div id="recenter_timer__time">{secondsToTime(remainingTime)}</div>
    </div>
  );
}

export function insertTimer() {
  if (document.getElementById("recenter_container__timer") !== null) {
    return;
  }
  const root = document.createElement("div");
  root.id = "recenter_container__timer";
  document.body.appendChild(root);
  const rootDiv = ReactDOM.createRoot(root);
  rootDiv.render(
    <React.StrictMode>
      <Timer />
    </React.StrictMode>
  );
}

export function removeTimer() {
  const root = document.getElementById("recenter_container__timer");
  if (root) {
    root.remove();
  }
}
