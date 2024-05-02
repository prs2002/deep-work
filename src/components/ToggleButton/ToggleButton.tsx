import { useEffect, useState } from "react";
import "./ToggleButton.scss";
import { Tooltip } from "react-tooltip";
import { CiCircleInfo } from "react-icons/ci";

interface ToggleButtonProps {
  text: string;
  storeKey: string;
  toolTipText:string;
}

export default function ToggleButton({ text, storeKey,toolTipText }: ToggleButtonProps) {
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
      <div className="toggle_button__enable">
        {text}{" "}
        <CiCircleInfo
          data-tooltip-id={`${text}-list-tooltip`}
          data-tooltip-content={toolTipText}
          data-tooltip-place="bottom"
          className="info-icon"
        />
        <Tooltip id={`${text}-list-tooltip`} className="tooltip"></Tooltip>
      </div>
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
