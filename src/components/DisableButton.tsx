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
      const storageResult = await chrome.storage.local.get();
      if (typeof storageResult["isDisabled"] !== "boolean") {
        await chrome.storage.local.set({
          isDisabled: true,
        });
        setIsOn(false);
        return;
      }
      const isDisabled: boolean = storageResult["isDisabled"] as boolean;
      setIsOn(!isDisabled);
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
