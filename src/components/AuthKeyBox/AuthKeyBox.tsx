import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./AuthKeyBox.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { verifyAPIKey } from "../../utils/chatGPT/VerifyApiKey";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

export default function AuthKeyBox() {
  const [authKey, setAuthKey] = useState<string>("");
  const [showAuthKey, setShowAuthKey] = useState<boolean>(false);

  const handleAddAuthKey = async () => {
    await chrome.storage.local.remove("authKey");
    const res = await verifyAPIKey(authKey);
    if (res === 0) {
      alert("API Key saved successfully");
    } else {
      alert("Invalid API Key");
    }
  };

  useEffect(() => {
    async function checkStatus() {
      setAuthKey((await chrome.storage.local.get())["authKey"] as string);
    }
    checkStatus();
  }, []);

  const handleShowAuthKey = () => {
    setShowAuthKey((prev) => !prev);
  };

  return (
    <div className="auth_key_box">
      <div className="auth_key_box__header">
        GPT API Key{" "}
        <CiCircleInfo
          data-tooltip-id="auth-tooltip"
          data-tooltip-content="For users who own GPT keys, 
          you can run Recenter
          with your own key."
          data-tooltip-place="bottom"
          className="info-icon"
        />
        <Tooltip id="auth-tooltip" className="tooltip"></Tooltip>
      </div>
      <div className="auth_key_box__outline">
        <div className="auth_key_box__content">
          <div className="auth_key_box__content__input">
            <Input
              input={authKey}
              placeholder="Enter Your Chatgpt API Key"
              setInput={setAuthKey}
              type={showAuthKey ? "text" : "password"}
              label="ChatGPT API Key"
            ></Input>
          </div>
          <div className="auth_key_box__content__show">
            <div
              className="auth_key_box__content__show__eye"
              onClick={handleShowAuthKey}
            >
              {showAuthKey ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
          </div>
        </div>
        <div className="auth_key_box__button">
          <Button text={"Authenticate"} onClick={handleAddAuthKey}></Button>
        </div>
      </div>
    </div>
  );
}
