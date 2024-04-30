import { useState } from "react";
import "./SuperFocusMode.scss";
import ToggleButtonWithConfirm from "../ToggleButtonWithConfirm/ToggleButtonWithConfirm";
import useToggle from "../../hooks/useToggle";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface DurationInputProps {
  setShowDurationInput: () => void;
}

function DurationInput({ setShowDurationInput }: DurationInputProps) {
  const [duration, setDuration] = useState<string>("50");

  const handleConfirm = async () => {
    if (duration === "") {
      alert("Please enter a duration");
      return;
    }
    const durationInt = parseInt(duration);
    if (isNaN(durationInt)) {
      alert("Please enter a valid number");
      return;
    }
    await chrome.storage.local.set({ focusModeDuration: durationInt });
    await chrome.storage.local.set({
      focusModeEndTime: Date.now() + durationInt * 60 * 1000,
    });
    await chrome.alarms.create("updateFocusMode", {
      when: Date.now() + durationInt * 60 * 1000,
    });
    setShowDurationInput();
    window.dispatchEvent(new Event("focusDurationUpdated"));
  };

  return (
    <div className="super_focus_mode__duration_popup">
      <div className="super_focus_mode__duration_popup__details">
        <div className="super_focus_mode__duration_popup__details__header">
          Set Super Focus Mode Duration
        </div>
        <div className="super_focus_mode__duration_popup__details__content">
          <div className="super_focus_mode__duration_popup__details__content__text">
            Please enter the duration in minutes for the Super Focus Mode
          </div>
          <div className="super_focus_mode__duration_popup__details__content__input">
            <div className="super_focus_mode__duration_popup__details__content__input__container">
              <Input
                input={duration}
                placeholder="Enter duration in minutes"
                setInput={(input) => {
                  setDuration(input);
                }}
                type="text"
                disablePaste={true}
              ></Input>
            </div>
          </div>
        </div>
        <div className="super_focus_mode__duration_popup__details__button">
          <Button onClick={handleConfirm} text="Confirm"></Button>
        </div>
      </div>
    </div>
  );
}

export default function SuperFocusMode() {
  const [showDurationInput, setShowDurationInput] = useToggle(false);

  const callback = async (type: string) => {
    const oldAlarm = await chrome.alarms.get("updateFocusMode");
    if (oldAlarm) {
      await chrome.storage.local.remove("focusModeEndTime");
      await chrome.alarms.clear("updateFocusMode");
    }
    if (type === "enable") {
      setShowDurationInput();
      await new Promise((resolve) => {
        const listener = () => {
          resolve(true);
          window.removeEventListener("focusDurationUpdated", listener);
        };
        window.addEventListener("focusDurationUpdated", listener);
      });
    }
  };

  return (
    <div className="super_focus_mode">
      <div className="super_focus_mode__content">
        <ToggleButtonWithConfirm
          phrase="Yes, End Focus Mode"
          storeKey="enableSuperFocusMode"
          text="Super Focus Mode"
          textWarning={
            <>
              Are you sure? Once you turn off Super Focus Mode,{" "}
              <strong>Recenter</strong> will not block the distracting websites.
            </>
          }
          opposite={true}
          callback={callback}
        ></ToggleButtonWithConfirm>
      </div>
      {showDurationInput && (
        <DurationInput setShowDurationInput={setShowDurationInput} />
      )}
    </div>
  );
}
