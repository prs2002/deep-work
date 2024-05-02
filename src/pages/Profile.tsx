import { useEffect, useState } from "react";
import AchievementsCard from "../components/AchievementsCard/AchievementsCard";
import Navbar from "../components/Navbar/Navbar";
import { Achievements } from "../types/Achievements";
import "./Profile.scss";
import { weeklyProductivity } from "../utils/Achievements";
import UsageBox from "../components/UsageBox/UsageBox";

interface ProfileProps {
  isFocused: boolean;
}

export default function Profile({ isFocused }: ProfileProps) {
  const [achievements, setAchievements] = useState<Achievements[]>([
    {
      name: "",
      time: 0,
      trophy: "",
      color: "",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    async function loadData() {
      setAchievements([
        {
          name: "GATEPASS",
          time: 5,
          trophy: (await import("../images/t1.png")).default,
          color: "blue",
          isCompleted: await weeklyProductivity(5),
        },
        {
          name: "MAESTRO",
          time: 10,
          trophy: (await import("../images/t2.png")).default,
          color: "green",
          isCompleted: await weeklyProductivity(10),
        },
        {
          name: "SENSEI",
          time: 20,
          trophy: (await import("../images/t3.png")).default,
          color: "yellow",
          isCompleted: await weeklyProductivity(20),
        },
        {
          name: "RENSHI",
          time: 40,
          trophy: (await import("../images/t4.png")).default,
          color: "purple",
          isCompleted: await weeklyProductivity(40),
        },
      ]);
    }
    loadData();
  }, []);

  return (
    <div className="profile_page">
      <Navbar text="Profile" isFocused={isFocused}></Navbar>
      <div className="profile_page__content">
        <div className="profile_page__content__header">Achievements</div>
        {achievements.map((achievement, index) => {
          if (!achievement.isCompleted) {
            return null;
          }
          return (
            <AchievementsCard
              achievementsType={achievements[index]}
            ></AchievementsCard>
          );
        })}
        <UsageBox></UsageBox>
      </div>
    </div>
  );
}
