import { useEffect, useState } from "react";
import AchievementsCard from "../components/AchievementsCard";
import Navbar from "../components/Navbar";
import { Achievements } from "../types/Achievements";
import "./Profile.scss";

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
    },
  ]);

  useEffect(() => {
    async function loadData() {
      setAchievements([
        {
          name: "GATEPASS",
          time: 5,
          trophy: (await import("../images/trophy1.svg")).default,
          color: "blue",
        },
        {
          name: "MAESTRO",
          time: 10,
          trophy: (await import("../images/trophy2.svg")).default,
          color: "green",
        },
        {
          name: "SENSEI",
          time: 20,
          trophy: (await import("../images/trophy3.svg")).default,
          color: "yellow",
        },
        {
          name: "RENSHI",
          time: 40,
          trophy: (await import("../images/trophy4.svg")).default,
          color: "purple",
        },
      ]);
    }
    loadData();
  }, []);

  return (
    <div className="profile_page">
      <Navbar text="Profile" isFocused={isFocused}></Navbar>
      <div className="profile_page__content">
        <AchievementsCard achievementsType={achievements[0]}></AchievementsCard>
      </div>
    </div>
  );
}
