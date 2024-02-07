import { useEffect, useState } from "react";
import "./DisableButton.css";

const DisableButton: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = async () => {
    await chrome.storage.local.set({ isDisabled: isOn });
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    async function checkStatus() {
      setIsOn((await chrome.storage.local.get())["isDisabled"] as boolean);
    }
    checkStatus();
  }, []);

  return (
    <div
      className={`switch-container ${isOn ? "on" : "off"}`}
      onClick={toggleSwitch}
    >
      <div className="switch">
        <div className={`circle ${isOn ? "on" : "off"}`}></div>
      </div>
    </div>
  );
};

export default DisableButton;
