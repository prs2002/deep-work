import "./ProactiveOptionsBox.scss";
import ToggleButton from "./ToggleButton";
import ToggleButtonWithConfirm from "./ToggleButtonWithConfirm";

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

  const callback = async (type: string) => {
    const oldAlarm = await chrome.alarms.get("updateFocusMode");
    if (oldAlarm) {
      await chrome.storage.local.remove("focusModeEndTime");
      await chrome.alarms.clear("updateFocusMode");
    }
    if (type === "enable") {
      const scheduledTime = new Date().getTime() + 50 * 60 * 1000;
      await chrome.alarms.create("updateFocusMode", {
        delayInMinutes: 50,
      });
      await chrome.storage.local.set({focusModeEndTime: scheduledTime});
    }
  };

  return (
    <div className="proactive_setting">
      <div className="proactive_setting__header">Proactive Settings</div>
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
          <ToggleButtonWithConfirm
            phrase="Yes, End focus mode"
            storeKey="enableSuperFocusMode"
            text="Enable Super Focus Mode"
            textWarning={
              <>
                Are you sure? once you turn off super focus mode,{" "}
                <strong>Recenter</strong> will not block the distracting
                websites.
              </>
            }
            opposite={true}
            callback={callback}
          ></ToggleButtonWithConfirm>
        </div>
      </div>
    </div>
  );
}
