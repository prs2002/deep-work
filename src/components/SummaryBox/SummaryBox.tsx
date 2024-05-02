import { useEffect, useState } from "react";
import "./SummaryBox.scss";
import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import { getTaggedTime } from "../../utils/queryStorage/GetTaggedTime";
import { SummaryItem } from "../../types/SummaryItem";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

interface SummaryBoxProps {
  filter: string;
}

const toolTips = [
  {
    text: "Collective Data of sites tagged as “Productive”",
    props: {
      className: "tooltip",
      clickable: false,
    },
  },
  {
    text: 'Collective Data of sites tagged as "Wasteful"',
    props: {
      className: "tooltip",
      clickable: false,
    },
  },
  {
    text: (
      <>
        Collective data of "Untagged Sites". To add a tag, move to{" "}
        <Link to={"/configure"}>Configure Page</Link>
      </>
    ),

    props: {
      className: "tooltip",
      clickable: true,
    },
  },
];

export default function SummaryBox({ filter }: SummaryBoxProps) {
  const summaryColor = ["red", "blue", "orange"];
  const [summary, setSummary] = useState<SummaryItem[]>([
    {
      label: "Distracted",
      value: "0",
    },
    {
      label: "Productive",
      value: "0",
    },
    {
      label: "Unsure",
      value: "0",
    },
  ]);
  const [totalTime, setTotalTime] = useState<number>(0);
  useEffect(() => {
    getTaggedTime(filter).then((res: TaggedTimeURL[] | undefined) => {
      if (!res) {
        return;
      }
      const data: SummaryItem[] = [
        {
          label: "Distracted",
          value: "0",
        },
        {
          label: "Productive",
          value: "0",
        },
        {
          label: "Unsure",
          value: "0",
        },
      ];
      let productive_time = 0,
        wasteful_time = 0,
        unsure_time = 0;
      for (let i = 0; i < res.length; i++) {
        if (res[i].tag === 0 || res[i].tag === 2) {
          unsure_time += res[i].time;
        } else if (res[i].tag === 1) {
          productive_time += res[i].time;
        } else {
          wasteful_time += res[i].time;
        }
      }
      setTotalTime(unsure_time + wasteful_time + productive_time);
      data[0].value = (wasteful_time / 3600000).toFixed(1);
      data[1].value = (productive_time / 3600000).toFixed(1);
      data[2].value = (unsure_time / 3600000).toFixed(1);
      setSummary(data);
    });
  }, [filter]);

  return (
    <div className="summary_box">
      <div className="summary_box__content">
        <div className="summary_box__content__list">
          {summary.map((summary_item, index) => {
            return (
              <div
                className="summary_box__content__list__item"
                key={index}
                data-tooltip-id={`${index}-summary-tooltip`}
                data-tooltip-place="bottom"
              >
                <div className="summary_box__content__list__item__time">
                  <div className="summary_box__content__list__item__time__spent">
                    {summary_item.value}
                  </div>
                  <div className="summary_box__content__list__item__time__total">
                    {" / " + (totalTime / 3600000).toFixed(1) + "hrs"}
                  </div>
                </div>
                <div className="summary_box__content__list__item__type">
                  <div
                    className="summary_box__content__list__item__type__color"
                    id={summaryColor[index]}
                  ></div>
                  <div className="summary_box__content__list__item__type__type">
                    {summary_item.label}
                  </div>
                </div>
                <Tooltip
                  id={`${index}-summary-tooltip`}
                  {...toolTips[index].props}
                >
                  {toolTips[index].text}
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
