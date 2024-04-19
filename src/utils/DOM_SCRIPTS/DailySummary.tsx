import "./DailySummary.scss";

interface DailySummaryProps {
  focusRate: number;
  timeSummary: any[];
  summary: string;
  handleClose: () => void;
}

export default function DailySummary({
  focusRate,
  timeSummary,
  summary,
  handleClose,
}: DailySummaryProps) {
  const logo = chrome.runtime.getURL("images/recenter_logo.png");
  return (
    <div id="daily_summary">
      <div id="daily_summary__title">
        <div id="daily_summary__title__logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="daily_summary__title__text">
          <h3>Daily Recap</h3>
        </div>
      </div>
      <div id="daily_summary__content">
        <div id="daily_summary__content__header">
          <div id="daily_summary__content__header__focus_rate">
            {focusRate.toFixed(0)}%
          </div>
          <div id="daily_summary__content__header__title">
            Focus Rate Yesterday
          </div>
          <div id="daily_summary__content__header__bar">
            <div
              id="daily_summary__content__header__bar__fill"
              style={{ width: `${focusRate}%` }}
            ></div>
          </div>
        </div>
        <div id="daily_summary__content__time">
          {timeSummary.map((time, index) => (
            <div id="daily_summary__content__time__row" key={index}>
              <div id="daily_summary__content__time__row__label">
                <div
                  id="daily_summary__content__time__row__label__color"
                  className={time.color}
                ></div>
                <div id="daily_summary__content__time__row__label__name">
                  {time.label}
                </div>
              </div>
              <div id="daily_summary__content__time__row__value">
                {time.value}
              </div>
            </div>
          ))}
        </div>
        <div id="daily_summary__content__line"></div>
        <div
          id="daily_summary__content__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></div>
        <div id="daily_summary__content__button">
          <button
            id="daily_summary__content__button__btn"
            onClick={handleClose}
          >
            Go to Work
          </button>
        </div>
      </div>
    </div>
  );
}
