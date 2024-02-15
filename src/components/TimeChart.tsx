import { useEffect, useState } from "react";
import "./TimeChart.css";
import ReactEcharts from "echarts-for-react";

export default function TimeChart({ type }: { type: string }) {
  const [data, setData] = useState<any[]>([]);
  function hhmmss(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const ss = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${ss}s`;
  }
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
        data: data.map((d) => ({ value: d.time, name: d.url })),
      },
    ],
    legend: {
      left: "50%",
      type: "scroll",
      orient: "vertical",
      data: data.map((d) => d.url),
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) =>
        `${hhmmss(params.value)} (${params.percent}%)`,
    },
  };

  useEffect(() => {
    if (type === "dailyAverage") {
      chrome.storage.local.get("webTime", async (result) => {
        const data = result?.webTime;
        if (!data) {
          setData([]);
          return;
        }
        const numberOfDays : number =
          (await chrome.storage.local.get("numberOfDays")).numberOfDays || 1;
        const average = data.map((d: any) => ({
          ...d,
          time: d.time / numberOfDays,
        }));
        setData(average);
      });
    } else {
      chrome.storage.local.get(type, (result) => {
        const data = result?.[type];
        if (!data) {
          setData([]);
          return;
        }

        setData(data);
      });
    }
  }, [type]);

  return (
    <>
      <ReactEcharts className="time-chart" option={option} />
    </>
  );
}
