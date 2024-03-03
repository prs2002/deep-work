import { SummaryItem } from "../types/SummaryItem";
import "./SummaryBox.scss";

interface SummaryBoxProps {
  summary: SummaryItem[];
}

export default function SummaryBox({ summary }: SummaryBoxProps) {
  const summaryColor = ["grey", "orange", "red"];
  return (
    <div className="summary_box">
      <div className="summary_box__content">
        <div className="summary_box__content__title">
          <h3>Summary</h3>
        </div>
        <div className="summary_box__content__list">
          {summary.map((item, index) => {
            return (
              <div className="summary_box__content__list__item" key={index}>
                <div className="summary_box__content__list__item__summary">
                  <div
                    className="summary_box__content__list__item__summary__color"
                    id={summaryColor[index]}
                  ></div>
                  {item.label}
                </div>
                <div className="summary_box__content__list__item__time">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
