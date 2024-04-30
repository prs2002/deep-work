import { useEffect, useState } from "react";
import "./UsageChart.scss";
import ReactEcharts from "echarts-for-react";
import { getTaggedTime } from "../../utils/queryStorage/GetTaggedTime";
import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import { msToHM } from "../../utils/scripts/mmToHM";

export default function UsageChart({
  type,
  focusRate,
}: {
  type: string;
  focusRate: number;
}) {
  const [data, setData] = useState<any[]>([]);
  const option = {
    title: {
      text: `${focusRate.toFixed(0)}%`,
      subtext: "Focus Rate",
      left: "center",
      top: "40%",
      textStyle: {
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight:700,
        color: "#000000"
      },
      subtextStyle: {
        fontSize: 16,
        fontFamily: "Inter",
        fontWeight:400,
        color: "#000000"
      },
    },
    series: [
      {
        name: "Chart",
        type: "pie",
        radius: ["50%", "90%"],
        label: {
          show: false,
        },
        data: data.map((d) => ({
          value: d.time,
          name: d.label,
          itemStyle: d.itemStyle,
        })),
        itemStyle: {
          borderWidth: 5,
          borderColor: "#FFFFFF"
        },
      },
    ],
    tooltip: {
      trigger: "item",
      formatter: (params: any) => `${params.name} : ${msToHM(params.value)})`,
    },
  };
  useEffect(() => {
    getTaggedTime(type).then((res: TaggedTimeURL[] | undefined) => {
      if (!res) {
        return;
      }
      const data = [
        {
          label: "Productive",
          time: 0,
          itemStyle: { color: "#2087FF" },
        },
        {
          label: "Wasteful",
          time: 0,
          itemStyle: { color: "#CC0000" },
        },  
        {
          label: "Unsure",
          time: 0,
          itemStyle: { color: "#FF7020" },
        },
      ];

      for (let i = 0; i < res.length; i++) {
        if (res[i].tag === 0 || res[i].tag === 2) {
          data[2].time += res[i].time;
        } else if (res[i].tag === 1) {
          data[0].time += res[i].time;
        } else {
          data[1].time += res[i].time;
        }
      }
      setData(data);
    });
  }, [type]);

  return (
    <>
      <ReactEcharts className="usage_chart" option={option} />
    </>
  );
}
