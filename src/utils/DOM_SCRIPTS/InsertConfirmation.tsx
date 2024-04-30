import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./InsertConfirmation.scss";
import { RxCross1 } from "react-icons/rx";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

interface ConfirmationPopupProps {
  setShowPopup: () => void;
  text: string;
  handleConfirm: () => void;
  phrase: string;
}

function ConfirmationPopup({
  setShowPopup,
  text,
  handleConfirm,
  phrase,
}: ConfirmationPopupProps) {
  function handleSiteDetails() {
    setShowPopup();
  }

  const [input, setInput] = useState<string>("");

  const checkInput = () => {
    if (input === phrase) {
      setShowPopup();
      handleConfirm();
    } else {
      alert(`Please type ${phrase} to confirm`);
    }
  };

  return (
    <div className="confirmation_popup">
      <div className="confirmation_popup__details">
        <div className="confirmation_popup__details__header">
          <div className="confirmation_popup__details__header__title">
            Warning!
          </div>
          <div className="confirmation_popup__details__header__buttons">
            <div
              className="confirmation_popup__details__header__buttons__close"
              onClick={handleSiteDetails}
            >
              <RxCross1 className="confirmation_popup__details__header__buttons__close_cross" />
            </div>
          </div>
        </div>
        <div className="confirmation_popup__details__content">
          <div
            className="confirmation_popup__details__content__text"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div className="confirmation_popup__details__content__input">
            <div className="confirmation_popup__details__content__input__label">
              Type the phrase "{phrase}" to confirm
            </div>
            <div className="confirmation_popup__details__content__input__container">
              <Input
                input={input}
                placeholder=""
                setInput={(input) => {
                  setInput(input);
                }}
                type="text"
                disablePaste={true}
              ></Input>
            </div>
          </div>
        </div>
        <div className="confirmation_popup__details__button">
          <Button onClick={checkInput} text="Confirm"></Button>
        </div>
      </div>
    </div>
  );
}

export default function insertConfirmation(
  handleConfirm: () => void,
  phrase: string,
  text: string
) {
  if (document.getElementById("recenter_container") !== null) {
    return;
  }
  const root = document.createElement("div");
  root.id = "recenter_container";
  document.body.appendChild(root);
  const rootDiv = ReactDOM.createRoot(root);
  const handlePopupRemove = () => {
    rootDiv.unmount();
    document.body.removeChild(root);
  };
  rootDiv.render(
    <React.StrictMode>
      <ConfirmationPopup
        handleConfirm={handleConfirm}
        phrase={phrase}
        setShowPopup={handlePopupRemove}
        text={text}
      ></ConfirmationPopup>
    </React.StrictMode>
  );
}
