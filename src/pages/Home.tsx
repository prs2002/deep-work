import { useEffect, useState } from "react";
import FilterOptions from "../components/FilterOptions";
import FocusRateBox from "../components/FocusRateBox";
import MenuOptions from "../components/MenuOptions";
import QuickActionsBox from "../components/QuickActionsBox";
import SummaryBox from "../components/SummaryBox";
import UsageBreakdown from "../components/UsageBreakdown";
import UsageChart from "../components/UsageChart";
import VisitedWebsitesList from "../components/VisitedWebsitesList";
import "./Home.scss";
import { SummaryItem } from "../types/SummaryItem";
import { calculateProductivity } from "../utils/CalculateProductivity";
import { TaggedTimeURL } from "../types/TaggedTimeUrl";
import { getTaggedTime } from "../utils/GetTaggedTime";

interface HomeProps {
  isFocused: boolean;
  setIsFocused: (isFocused: boolean) => void;
}

export default function Home({ isFocused, setIsFocused }: HomeProps) {
  const [filter, setFilter] = useState("dailyTime");
  const [summary, setSummary] = useState<SummaryItem[]>([
    {
      label: "Total time spent",
      value: "-",
    },
    {
      label: "Productive time spent",
      value: "-",
    },
    {
      label: "Distracted time spent",
      value: "-",
    },
  ]);

  const [websites, setWebsites] = useState<TaggedTimeURL[]>([]);
  const totalTime = websites.reduce((acc, website) => acc + website.time, 0);
  const focusRate =
    totalTime &&
    (websites.reduce(
      (acc, website) => acc + (website.tag === 1 ? website.time : 0),
      0
    ) /
      totalTime) *
      100;
  useEffect(() => {
    const isFocused = focusRate >= 50;
    setIsFocused(isFocused);
  }, [totalTime, websites, setIsFocused, focusRate]);

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await calculateProductivity(filter);
      if (data) setSummary(data);
    };
    const fetchWebsites = async () => {
      const data = await getTaggedTime(filter);
      if (data) {
        data.sort((a, b) => b.time - a.time);
        setWebsites(data);
      }
    };
    fetchSummary();
    fetchWebsites();
  }, [filter]);

  return (
    <div className="home_page">
      <div className="home_page__menu">
        <MenuOptions isFocused={isFocused}></MenuOptions>
      </div>
      <div className="home_page__header">
        <h3>Welcome Back</h3>
        <h1>Great Day So Far.</h1>
        <h1>Let's Keep Going!</h1>
      </div>
      <div className="home_page__boxes">
        <FocusRateBox
          focusRate={focusRate}
          time={summary[1].value}
        ></FocusRateBox>
        <QuickActionsBox></QuickActionsBox>
      </div>
      <div className="home_page__usage">
        <FilterOptions setFilter={setFilter}></FilterOptions>
        <div className="home_page__usage__chart">
          <UsageChart type={filter}></UsageChart>
        </div>
        <VisitedWebsitesList
          visitedWebsites={websites}
          setVisitedWebsites={setWebsites}
        ></VisitedWebsitesList>
        <SummaryBox summary={summary}></SummaryBox>
        <UsageBreakdown
          websites={websites}
          totalTime={totalTime}
        ></UsageBreakdown>
      </div>
    </div>
  );
}
