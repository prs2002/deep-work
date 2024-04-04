import "./ConfirmationPopup.scss";
import { RxCross1 } from "react-icons/rx";
import { ReactNode, useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface ConfirmationPopupProps {
  setShowPopup: () => void;
  text: ReactNode;
  handleConfirm: () => void;
  phrase: string;
}

export default function ConfirmationPopup({
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
          <div className="confirmation_popup__details__content__text">
            Are you sure? once you turn off monitoring,{" "}
            <strong>Recenter</strong> won't be able to help you focus and
            improve your workflow.
          </div>
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
