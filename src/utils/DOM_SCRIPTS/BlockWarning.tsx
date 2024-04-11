import "./BlockWarning.scss";

interface BlockWarningProps {
  handleClose: () => void;
  time: number;
}

export default function BlockWarning({ handleClose, time }: BlockWarningProps) {
  function handleGetToWork() {
    window.location.href = "https://www.google.com";
  }
  const logo = chrome.runtime.getURL("js/images/recenter_logo.png");
  return (
    <div id="greeting_popup">
      <div id="greeting_popup__title">
        <div id="greeting_popup__title__logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="greeting_popup__title__text">
          <h1>Recenter</h1>
        </div>
      </div>
      <div id="greeting_popup__header">
        <p id="greeting_popup__header__light">You’ve exceeded time limit.</p>
        <p id="greeting_popup__header__dark">This Site Will Be Blocked In</p>
      </div>
      <div id="greeting_popup__time">
        {time}
      </div>
      <div id="greeting_popup__buttons">
        <button
          id="greeting_popup__buttons__button"
          className="white"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          id="greeting_popup__buttons__button"
          className="blue"
          onClick={handleGetToWork}
        >
          Get to Work
        </button>
      </div>
    </div>
  );
}
