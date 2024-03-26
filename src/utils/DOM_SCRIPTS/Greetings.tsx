import "./Greetings.scss"

interface GreetingsProps {
  logo: string;
  gif: string;
  focusRate: number;
  handleClose: () => void;
  setShowSummary: () => void
}

export default function Greetings({
  logo,
  gif,
  focusRate,
  handleClose,
  setShowSummary
}: GreetingsProps) {
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
        <img src={gif} alt="greeting"></img>
        <p id="greeting_popup__header__light">Good Morning!</p>
        <p id="greeting_popup__header__dark">Let's Begin the Day</p>
        <p id="greeting_popup__header__dark">With a Pinch of Focus</p>
      </div>
      <div id="greeting_popup__line"></div>
      <div id="greeting_popup__focus_rate">
        <div id="greeting_popup__focus_rate__title">
          Quick Recap From Yesterday
        </div>
        <div id="greeting_popup__focus_rate__row">
          <div id="greeting_popup__focus_rate__row__label">Focus Rate</div>
          <div id="greeting_popup__focus_rate__row__value">
            {focusRate.toFixed(0)}
          </div>
        </div>
        <div id="greeting_popup__focus_rate__bar">
          <div
            id="greeting_popup__focus_rate__bar__fill"
            style={{ width: `${focusRate}%` }}
          ></div>
        </div>
      </div>
      <div id="greeting_popup__buttons">
        <button
          id="greeting_popup__buttons__button"
          className="white"
          onClick={handleClose}
        >
          Get to work
        </button>
        <button id="greeting_popup__buttons__button" className="blue" onClick={setShowSummary}>
          Read More
        </button>
      </div>
    </div>
  );
}
