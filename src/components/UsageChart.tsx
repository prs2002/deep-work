import { useEffect, useState } from "react";
import "./UsageChart.scss";
import ReactEcharts from "echarts-for-react";
import { getTaggedTime } from "../utils/GetTaggedTime";
import { TaggedTimeURL } from "../types/TaggedTimeUrl";
import { msToHM } from "../utils/scripts/mmToHM";

export default function UsageChart({ type }: { type: string }) {
  const [data, setData] = useState<any[]>([]);
  const option = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["60%", "90%"],
        label: {
          show: false,
        },
        data: data.map((d) => ({ value: d.time, name: d.label, itemStyle : d.itemStyle })),
      },
    ],
    tooltip: {
      trigger: "item",
    formatter: (params: any) => `${params.name} : ${msToHM(params.value)})`,
    },
  };
  useEffect(() => {
    getTaggedTime(type).then((res : TaggedTimeURL[] | undefined) => {
      if(!res) {
        return;
      }
      const data = [
        {
          label : "Productive",
          time : 0,
          itemStyle: { color: '#FF7020' }
        },
        {
          label : "Wasteful",
          time: 0,
          itemStyle: { color: '#CC0000' }
        },
        {
          label : "Unsure",
          time: 0,
          itemStyle: { color: '#2087FF' }
        }
      ];

      for(let i = 0; i < res.length; i ++) {
        if(res[i].tag === 0 || res[i].tag === 2) {
          data[2].time += res[i].time;
        }
        else if(res[i].tag === 1) {
          data[0].time += res[i].time;
        }
        else {
          data[1].time += res[i].time;
        }
      }
      setData(data);
    })
  }, [type]);

  return (
    <>
      <ReactEcharts className="usage_chart" option={option} />
    </>
  );
}
