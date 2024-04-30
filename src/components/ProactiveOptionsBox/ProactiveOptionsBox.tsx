import "./ProactiveOptionsBox.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

const settingsKey = [
  "enableHourlyUpdates",
  "enableBlockDistractingSites",
  "enableDistractingSiteTimer",
];
export default function ProactiveOptionsBox() {
  const settings = [
    "Hourly Updates",
    "Block distracting sites",
    "Distracting site timer",
  ];

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
                key={index}
              ></ToggleButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
