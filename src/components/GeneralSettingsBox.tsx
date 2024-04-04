import "./GeneralSettingsBox.scss";
import ToggleButtonWithConfirm from "./ToggleButtonWithConfirm";
import ToggleButton from "./ToggleButton";

export default function GeneralSettingsBox() {
  const textWarning = (
    <>
      Are you sure? once you turn off monitoring, <strong>Recenter</strong>{" "}
      won't be able to help you focus and improve your workflow.
    </>
  );

  const phrase = "Yes I understand";

  return (
    <div className="general_settings">
      <div className="general_settings__header">General Settings</div>
      <div className="general_settings__outline">
        <div className="general_settings__content">
          <ToggleButtonWithConfirm
            storeKey="isDisabled"
            text="Disable Extension"
            phrase={phrase}
            textWarning={textWarning}
          ></ToggleButtonWithConfirm>
          <ToggleButton
            storeKey="isDisabledOnWeekend"
            text="Disable Extension on Weekend"
          ></ToggleButton>
        </div>
      </div>
    </div>
  );
}
