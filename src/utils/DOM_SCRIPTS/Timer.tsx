import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { FaRegClock } from "react-icons/fa6";
import "./Timer.scss";
import { handleBlocking } from "../Blocking";
import BlockWarning from "./BlockWarning";

function Timer() {
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [maxTime, setMaxTime] = useState<number>(-1);
  const [isBlocking, setIsBlocking] = useState<boolean>(false);
  const [closed, setClosed] = useState<boolean>(false);
  const [color, setColor] = useState<string>("red");

  console.log(color);
  

  useEffect(() => {
    function handleTimer() {
      const timer = setInterval(async () => {
        const remainingTime = await handleBlocking(maxTime, isBlocking);
        setRemainingTime(remainingTime / 1000);

        const minutes: number = Math.floor(remainingTime / 60000);

        if (minutes % 2) {
          if (color !== "red-2") {
            setColor("red-2");
          }
        } else {
          if (color !== "red") {
            setColor("red");
          }
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
    if (maxTime !== -1) {
      return handleTimer();
    }
  }, [maxTime, isBlocking, color]);

  useEffect(() => {
    chrome.storage.local.get().then((data) => {
      const url = document.location.origin;
      if (!data.maxTimes || !data.maxTimes[url]) return;
      setIsBlocking(data.enableBlockDistractingSites);
      setMaxTime(parseInt(data.maxTimes[url]) * 60 * 1000);
    });
  }, []);

  function secondsToTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time % 60);
    const minutesStr: string = String(minutes).padStart(2, "0");
    const secondsStr: string = String(seconds).padStart(2, "0");
    return `${minutesStr} : ${secondsStr}`;
  }

  if (maxTime / 1000 - remainingTime <= 30 && isBlocking && !closed) {
    return (
      <BlockWarning
        handleClose={() => {
          setClosed(true);
        }}
        time={maxTime / 1000 - remainingTime}
      />
    );
  }

  return (
    <div id="recenter_timer" title="Recenter" className={"recenter_timer__" + color}>
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
