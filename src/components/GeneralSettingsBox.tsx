import { useEffect, useState } from "react";
import "./GeneralSettingsBox.scss";
import ConfirmationPopup from "./ConfirmationPopup";

export default function GeneralSettingsBox() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isWeekendOn, setIsWeekendOn] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  
  const setShowPopup = () => {
    setShowWarning((prev) => !prev);
  }

  const toggleSwitch = async () => {
    await chrome.storage.local.set({ isDisabled: isOn });
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    chrome.storage.local
      .get(["isDisabled", "isDisabledOnWeekend"])
      .then(async (res) => {
        if (typeof res.isDisabled === "boolean") {
          setIsOn(!res.isDisabled);
        } else {
          await chrome.storage.local.set({ isDisabled: false });
          setIsOn(true);
        }
        if (typeof res.isDisabledOnWeekend === "boolean") {
          setIsWeekendOn(!res.isDisabledOnWeekend);
        } else {
          await chrome.storage.local.set({ isDisabledOnWeekend: true });
          setIsWeekendOn(false);
        }
      });
  }, []);

  const toggleSwitch_weekend = async () => {
    await chrome.storage.local.set({ isDisabledOnWeekend: isWeekendOn });
    setIsWeekendOn((prev) => !prev);
  };

  return (
    <div className="general_settings">
      <div className="general_settings__header">Tag WebsiteC</div>
      <div className="general_settings__content">
        <div className="general_settings__content__row">
          <div className="general_settings__content__row__enable">
            Enable Extension
          </div>
          <div className="general_settings__content__row__enable_button">
            <div
              className={`general_settings__content__row__enable_button__container ${
                isOn ? "on" : "off"
              }`}
              onClick={setShowPopup}
            >
              <div className="general_settings__content__row__enable_button__container__switch">
                <div
                  className={`general_settings__content__row__enable_button__container__switch__circle ${
                    isOn ? "on" : "off"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="general_settings__content__row">
          <div className="general_settings__content__row__enable">
            Enable Extension on weekends
          </div>
          <div className="general_settings__content__row__enable_button">
            <div
              className={`general_settings__content__row__enable_button__container ${
                isWeekendOn ? "on" : "off"
              }`}
              onClick={toggleSwitch_weekend}
            >
              <div className="general_settings__content__row__enable_button__container__switch">
                <div
                  className={`general_settings__content__row__enable_button__container__switch__circle ${
                    isWeekendOn ? "on" : "off"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showWarning && <ConfirmationPopup setShowPopup={setShowPopup} text="Warning!" handleConfirm={toggleSwitch}></ConfirmationPopup>}
    </div>
  );
}
