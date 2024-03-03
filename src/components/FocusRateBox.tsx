import "./FocusRateBox.scss";

interface FocusRateBoxProps {
  focusRate: number;
  time: string;
}

export default function FocusRateBox({ focusRate, time }: FocusRateBoxProps) {
  return (
    <>
      <div className="focus_rate_box">
        <div className="focus_rate_box__content">
          <div className="focus_rate_box__content__percent">{focusRate.toFixed(2)}%</div>
          <div className="focus_rate_box__content__text">Focus Rate</div>
          <div className="focus_rate_box__content__time">{time}</div>
        </div>
      </div>
    </>
  );
}
