import "./BlockWarning.scss";

interface BlockWarningProps {
  handleClose: () => void;
  time: number;
}

export default function BlockWarning({ handleClose, time }: BlockWarningProps) {
  function handleGetToWork() {
    window.location.href = "https://www.google.com";
  }
  const logo = chrome.runtime.getURL("images/recenter_logo.png");
  return (
    <div id="block_warning">
      <div id="block_warning__title">
        <div id="block_warning__title__logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="block_warning__title__text">
          <h1>Recenter</h1>
        </div>
      </div>
      <div id="block_warning__header">
        <p id="block_warning__header__light">You've exceeded time limit.</p>
        <p id="block_warning__header__dark">This Site Will Be Blocked In</p>
      </div>
      <div id="block_warning__time">
        {time}
      </div>
      <div id="block_warning__buttons">
        <button
          id="block_warning__buttons__button"
          className="white"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          id="block_warning__buttons__button"
          className="blue"
          onClick={handleGetToWork}
        >
          Get to Work
        </button>
      </div>
    </div>
  );
}
