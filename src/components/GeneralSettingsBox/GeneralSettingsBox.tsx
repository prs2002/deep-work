import "./GeneralSettingsBox.scss";
import ToggleButtonWithConfirm from "../ToggleButtonWithConfirm/ToggleButtonWithConfirm";
import ToggleButton from "../ToggleButton/ToggleButton";

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
            toolTipText="Disabling Extension would prevent Recenter from tracking or providing insights about your progress"
          ></ToggleButtonWithConfirm>
          <ToggleButton
            storeKey="isDisabledOnWeekend"
            text="Disable Extension on Weekend"
            toolTipText="Recenter works 24/7 to keep you productive but you can change this anytime."
          ></ToggleButton>
        </div>
      </div>
    </div>
  );
}
