import "./DailySummaryBox.scss";

interface HourlySummaryBoxProps {
  focusRate: number;
  totalTime: number;
}

export default function DailySummaryBox({ focusRate, totalTime }: HourlySummaryBoxProps) {
  const time = totalTime / 6000000;
  return (
    <>
      <div className="daily_summary">
        <div className="daily_summary__title">
          <h3>Daily Recap</h3>
        </div>
        <div className="daily_summary__content">
          <div className="daily_summary__content__header">
            <div className="daily_summary__content__header__focus_rate">
              {focusRate.toFixed(0)}%
            </div>
            <div className="daily_summary__content__header__title">
              Focus Rate Yesterday
            </div>
            <div className="daily_summary__content__header__bar">
              <div
                className="daily_summary__content__header__bar__fill"
                style={{ width: `${focusRate}%` }}
              ></div>
            </div>
          </div>
          <div className="daily_summary__content__time">
            <div className="daily_summary__content__time__productive">
              <div className="daily_summary__content__time__productive__label">
                <div className="daily_summary__content__time__productive__label__color"></div>
                <div className="daily_summary__content__time__productive__label__name">
                  Productive
                </div>
              </div>
              <div className="daily_summary__content__time__productive__value">
                {(time * focusRate).toFixed(1)}m
              </div>
            </div>
            <div className="daily_summary__content__time__unfocused">
              <div className="daily_summary__content__time__unfocused__label">
                <div className="daily_summary__content__time__unfocused__label__color"></div>
                <div className="daily_summary__content__time__unfocused__label__name">
                  Unfocused
                </div>
              </div>
              <div className="daily_summary__content__time__unfocused__value">
                {(time * (100 - focusRate)).toFixed(1)}m
              </div>
            </div>
          </div>
          <div className="daily_summary__content__line"></div>
          <div className="daily_summary__content__summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iste
            enim, in tempore at magnam, eos nostrum labore magni cumque eius
            similique rerum ullam sed amet. Velit, ipsam, ipsa dolore quaerat
            aspernatur deleniti tempora reprehenderit optio, eos dignissimos
            enim ad dolor? Repellendus ipsum commodi quaerat voluptates, ducimus
            aliquam quidem earum.
          </div>
        </div>
      </div>
    </>
  );
}
