import { useEffect, useState } from "react";
import Input from "../components/Input";
import "./PromptSettingPage.css";
import { getCurrentWebsite } from "../utils/chrome_api_utils/getCurrentWebsite";

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
    chrome.storage.local.get("promptParameters", async (data) => {
      const currentWebsite = await getCurrentWebsite();
      let promptParameters = data.promptParameters;
      if (!promptParameters) {
        await chrome.storage.local.set({ promptParameters: {} });
        promptParameters = {};
      }
      if (!promptParameters[currentWebsite]) {
        promptParameters[currentWebsite] = {
          promptInterval: 180,
          promptViolations: 5,
        };
        setPromptInterval("180");
        setPromptViolations("5");
        await chrome.storage.local.set({ promptParameters: promptParameters });
      } else {
        setPromptInterval(promptParameters[currentWebsite].promptInterval);
        setPromptViolations(promptParameters[currentWebsite].promptViolations);
      }
    });
  }, []);

  const saveViolations = (input: string) => {
    if (isNaN(Number(input)) || input === "" || parseInt(input) <= 0) {
      alert("Please enter a valid time");
      return;
    }
    setPromptViolations(parseInt(input).toString());
    chrome.storage.local.get("promptParameters", async (data) => {
      const currentWebsite = await getCurrentWebsite();
      const promptParameters = data.promptParameters;
      promptParameters[currentWebsite].promptViolations = parseInt(input);
      chrome.storage.local.set({ promptParameters: promptParameters });
    });
  };

  const saveInterval = (input: string) => {
    if (isNaN(Number(input)) || input === "" || parseInt(input) <= 0) {
      alert("Please enter a valid time");
      return;
    }
    setPromptInterval(parseInt(input).toString());
    chrome.storage.local.get("promptParameters", async (data) => {
      const currentWebsite = await getCurrentWebsite();
      const promptParameters = data.promptParameters;
      promptParameters[currentWebsite].promptInterval = parseInt(input);
      chrome.storage.local.set({ promptParameters: promptParameters });
    });
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
          label="Enter interval (in seconds) for this website"
          placeholder="Enter the interval between the prompts"
          handleInput={saveInterval}
          input={promptInterval}
          setInput={setPromptInterval}
        ></Input>
        <Input
          buttonText="Save"
          label="Enter number of violations for this website"
          placeholder="Enter number of violations after which the prompts will stop"
          handleInput={saveViolations}
          input={promptViolations}
          setInput={setPromptViolations}
        ></Input>
      </div>
    </div>
  );
}
