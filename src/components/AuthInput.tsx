import { ChangeEvent, useEffect, useState } from "react";
import "./AuthInput.css";
import { verifyAPIKey } from "../utils/VerifyApiKey";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => {
  const [authKey, setAuthKey] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthKey(event.target.value);
  };

  const handleShowKey = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    async function checkStatus() {
      setAuthKey((await chrome.storage.local.get())["authKey"] as string);
    }
    checkStatus();
  }, []);

  const handleSaveKey = async () => {
    await chrome.storage.local.remove("authKey");
    const res = await verifyAPIKey(authKey);
    if (res === 0) {
      alert("API Key saved successfully");
    } else {
      alert("Invalid API Key");
    }
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={authKey}
        onChange={handleChange}
      />
      <button className="save-button" onClick={handleSaveKey}>
        Save Key
      </button>
      <button className="hide-button" onClick={handleShowKey}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Input;
