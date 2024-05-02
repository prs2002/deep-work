import "./ProactiveOptionsBox.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

const settingsKey = [
  "enableHourlyUpdates",
  "enableDailyUpdates",
  "enableBlockDistractingSites",
  "enableDistractingSiteTimer",
];
const settings = [
  "Hourly Updates",
  "Daily Updates",
  "Block distracting sites",
  "Distracting site timer",
];
const tooltipTexts = [
  "Quick overview of your progress in the past hour.",
  "Start your day with a recap of yesterday's progress.",
  "Automatically block distracting sites once alerts are exhausted.",
  "Indicates the time until which you can use a site tagged as 'Wasteful'",
];
export default function ProactiveOptionsBox() {
  return (
    <div className="proactive_setting">
      <div className="proactive_setting__header">Proactive Features</div>
      <div className="proactive_setting__outline">
        <div className="proactive_setting__content">
          {settings.map((setting, index) => {
            return (
              <ToggleButton
                text={setting}
                storeKey={settingsKey[index]}
                toolTipText={tooltipTexts[index]}
                key={index}
              ></ToggleButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
