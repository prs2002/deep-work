import { ReactNode, useEffect, useState } from "react";
import "./ToggleButtonWithConfirm.scss";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";

interface ToggleButtonWithConfirmProps {
  text: string;
  storeKey: string;
  phrase: string;
  textWarning: ReactNode;
  opposite?: boolean;
  callback?: (type: string) => Promise<void>;
}

export default function ToggleButtonWithConfirm({
  text,
  storeKey,
  phrase,
  textWarning,
  opposite,
  callback,
}: ToggleButtonWithConfirmProps) {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const setShowPopup = () => {
    if (opposite) {
      if (isOn) {
        setShowWarning((prev) => !prev);
      } else {
        handleToggle();
      }
    } else {
      if (!isOn) {
        setShowWarning((prev) => !prev);
      } else {
        handleToggle();
      }
    }
  };

  const handleToggle = async () => {
    if (callback) await callback(isOn ? "disable" : "enable"); // callback is optional, used to set / clear alarms
    setIsOn((prev) => !prev);
    chrome.storage.local.set({ [storeKey]: !isOn });
  };

  useEffect(() => {
    chrome.storage.local.get(storeKey, (res) => {
      setIsOn(res[storeKey]);
    });
  }, [storeKey]);

  return (
    <div className="toggle_button">
      <div className="toggle_button__enable">{text}</div>
      <div className="toggle_button__enable_button">
        <div
          className={`toggle_button__enable_button__container ${
            isOn ? "on" : "off"
          }`}
          onClick={() => setShowPopup()}
        >
          <div className="toggle_button__enable_button__container__switch">
            <div
              className={`toggle_button__enable_button__container__switch__circle ${
                isOn ? "on" : "off"
              }`}
            ></div>
          </div>
        </div>
      </div>
      {showWarning && (
        <ConfirmationPopup
          setShowPopup={setShowPopup}
          text={textWarning}
          handleConfirm={handleToggle}
          phrase={phrase}
        ></ConfirmationPopup>
      )}
    </div>
  );
}
