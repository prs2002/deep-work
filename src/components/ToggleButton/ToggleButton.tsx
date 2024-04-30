import { useEffect, useState } from "react";
import "./ToggleButton.scss";

interface ToggleButtonProps {
  text: string;
  storeKey: string;
}

export default function ToggleButton({ text, storeKey }: ToggleButtonProps) {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
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
          onClick={() => handleToggle()}
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
    </div>
  );
}
