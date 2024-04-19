import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { msToHM } from "../scripts/mmToHM";
import { getTaggedTime } from "../queryStorage/GetTaggedTime";
import Greetings from "./Greetings";
import DailySummary from "./DailySummary";
import useToggle from "../../hooks/useToggle";
import { SUMMARY_NO_DATA } from "../CONSTANTS/texts";
import GreetingsFirst from "./GreetingsFirst";

interface DailyPopupProps {
  isFirst?: boolean;
}

function DailyPopup({ isFirst }: DailyPopupProps) {
  const logo = chrome.runtime.getURL("images/recenter_logo.png");
  const gif_number = Math.floor(Math.random() * 13 + 1);
  const gif = chrome.runtime.getURL(`images/gifs/${gif_number}.gif`);

  const [summary, setSummary] = useState<string>("");
  const [showSummary, setShowSummary] = useToggle(false);
  const [focusRate, setFocusRate] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    async function generateSummary() {
      let prevDaySummary: any[] = (
        await chrome.storage.local.get("prevDaySummary")
      ).prevDaySummary;

      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (!prevDaySummary || yesterday.toDateString() !== prevDaySummary[1]) {
        await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(
            { summarize: "prevDay" },
            function (response) {
              if (response.success) resolve(1);
              else reject(0);
            }
          );
        });
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
      setTotalTime(totalTime / 100);
    }
    getProductivity();
  }, []);
  const timeSummary = [
    {
      label: "Productive",
      value: msToHM(totalTime * focusRate),
      color: "blue",
    },
    {
      label: "Distracted",
      value: msToHM(totalTime * (100 - focusRate)),
      color: "red",
    },
    { label: "Total", value: msToHM(totalTime), color: "black" },
  ];

  const handleClose = () => {
    const root = document.getElementById("recenter_container");
    if (root) {
      root.remove();
    }
  };
  const handleSummary = () => {
    setShowSummary();
  };
  if (isFirst) {
    return (
      <GreetingsFirst
        gif={gif}
        handleClose={handleClose}
        logo={logo}
      ></GreetingsFirst>
    );
  }

  if (summary === "") {
    return <></>;
  }

  return (
    <>
      {!showSummary && (
        <Greetings
          focusRate={focusRate}
          gif={gif}
          logo={logo}
          handleClose={handleClose}
          setShowSummary={handleSummary}
        />
      )}
      {showSummary && (
        <DailySummary
          focusRate={focusRate}
          summary={summary}
          timeSummary={timeSummary}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export function insertGreetings(isFirst?: boolean) {
  if (document.getElementById("recenter_container") !== null) {
    return;
  }
  const root = document.createElement("div");
  root.id = "recenter_container";
  document.body.appendChild(root);
  const rootDiv = ReactDOM.createRoot(root);
  rootDiv.render(
    <React.StrictMode>
      <DailyPopup isFirst={isFirst} />
    </React.StrictMode>
  );
}
