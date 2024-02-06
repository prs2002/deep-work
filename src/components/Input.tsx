import React, { ChangeEvent, useEffect, useState } from "react";
import "./Input.css";
import axios from "axios";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
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
    try {
      await chrome.storage.local.remove("authKey");
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Check api key.",
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authKey}`,
          },
        }
      );
      if (res.status !== 200) {
        throw new Error("Invalid API key");
      }
      await chrome.storage.local.set({ authKey });
      alert("API key saved successfully!");
    } catch (error) {
      alert("Invalid API key");
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
