import {
    GREETING_TEXT__DARK,
    GREETING_TEXT__DARK_2,
    GREETING_TEXT__LIGHT,
  } from "../CONSTANTS/texts";
  import "./GreetingsFirst.scss";
  
  interface GreetingsProps {
    logo: string;
    gif: string;
    handleClose: () => void;
  }
  
  export default function GreetingsFirst({
    logo,
    gif,
    handleClose,
  }: GreetingsProps) {
    return (
      <div id="greeting_first_popup">
        <div id="greeting_first_popup__title">
          <div id="greeting_first_popup__title__logo">
            <img src={logo} alt="logo" />
          </div>
          <div id="greeting_first_popup__title__text">
            <h1>Recenter</h1>
          </div>
        </div>
        <div id="greeting_first_popup__header">
          <img src={gif} alt="greeting"></img>
          <p id="greeting_first_popup__header__light">{GREETING_TEXT__LIGHT}</p>
          <p id="greeting_first_popup__header__dark">{GREETING_TEXT__DARK}</p>
          <p id="greeting_first_popup__header__dark">{GREETING_TEXT__DARK_2}</p>
        </div>
        <div id="greeting_first_popup__buttons">
          <button
            id="greeting_first_popup__buttons__button"
            className="white"
            onClick={handleClose}
          >
            Get to work
          </button>
        </div>
      </div>
    );
  }
  