import "./FocusRateBox.scss";

interface FocusRateBoxProps {
  focusRate: number;
  time: string;
  isFocused: boolean;
}

export default function FocusRateBox({ focusRate, time, isFocused }: FocusRateBoxProps) {
  return (
    <>
      <div className="focus_rate_box" id={isFocused ? "good" : "bad"}>
        <div className="focus_rate_box__content">
          <div className="focus_rate_box__content__percent">{focusRate.toFixed(0)}%</div>
          <div className="focus_rate_box__content__text">Focus Rate</div>
          <div className="focus_rate_box__content__time">{time}</div>
        </div>
      </div>
    </>
  );
}
