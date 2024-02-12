import { useEffect, useState } from "react";
import "./TimeChart.css";
import ReactEcharts from "echarts-for-react";

export default function TimeChart({type} : {type: string}) {
  const [data, setData] = useState<any[]>([]);
  const option = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        left: "-50%",
        data: data.map((d) => ({ value: d.time, name: d.url }))
      },
    ],
    legend: {
      left: "50%",
      type: "scroll",
      orient: "vertical",
      data: data.map((d) => d.url),
    },
  };

  useEffect(() => {
    chrome.storage.local.get(type, (result) => {
      const data = result?.[type];
      if (!data) {
        setData([]);
        return;
      }
      
      setData(data);
    });
  }, [type]);

  return (
    <>
      <ReactEcharts className="time-chart" option={option} />
    </>
  );
}
