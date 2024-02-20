import { useEffect, useState } from "react";
import Input from "../components/Input";
import "./PromptSettingPage.css";

interface TagWebsitePageProps {
  setPage: (page: number) => void;
}

export default function PromptSettingPage({ setPage }: TagWebsitePageProps) {
  const [promptInterval, setPromptInterval] = useState("");
  const [promptViolations, setPromptViolations] = useState("");
  const handlePage = () => {
    setPage(1);
  };

  useEffect(() => {
    chrome.storage.local.get("promptInterval", (data) => {
      setPromptInterval(data.promptInterval);
    });
    chrome.storage.local.get("promptViolations", (data) => {
      setPromptViolations(data.promptViolations);
    });
  }, []);

  const saveViolations = (input: string) => {
    if (isNaN(Number(input)) || input === "" || parseInt(input) <= 0) {
      alert("Please enter a valid time");
      return;
    }
    setPromptViolations(parseInt(input).toString());
    chrome.storage.local.set({ promptViolations: parseInt(input) });
  };

  const saveInterval = (input: string) => {
    if (isNaN(Number(input)) || input === "" || parseInt(input) <= 0) {
      alert("Please enter a valid time");
      return;
    }
    setPromptInterval(parseInt(input).toString());
    chrome.storage.local.set({ promptInterval: parseInt(input) });
  };

  return (
    <div className="prompt-setting-page">
      <div className="prompt-setting-page-header">
        <button
          className="prompt-setting-page-back-button"
          onClick={handlePage}
        >
          Back
        </button>
      </div>
      <div className="prompt-setting-page-content">
        <Input
          buttonText="Save"
          label="Enter interval (in seconds)"
          placeholder="Enter the interval between the prompts"
          handleInput={saveInterval}
          input={promptInterval}
          setInput={setPromptInterval}
        ></Input>
        <Input
          buttonText="Save"
          label="Enter number of violations"
          placeholder="Enter number of violations after which the prompts will stop"
          handleInput={saveViolations}
          input={promptViolations}
          setInput={setPromptViolations}
        ></Input>
      </div>
    </div>
  );
}
