import { useEffect, useState } from "react";
import "./AchievementsPage.css";
import {
  getDailyProductivity,
  getTotalProductivity,
} from "../utils/Achievements";

interface AchievementsPageProps {
  setPage: (page: number) => void;
}

interface AchievementCompleted {
  [index: number]: number;
  isComplete: boolean;
}

export default function AchievementsPage({ setPage }: AchievementsPageProps) {
  const achievements = [
    "Being productive for more than 3 hours in a day!",
    "Being productive for more than 6 hours!",
    "Being productive for more than 8 hours!",
  ];

  const [achievementsCompleted, setAchievementsCompleted] =
    useState<AchievementCompleted>({} as AchievementCompleted);

  useEffect(() => {
    getDailyProductivity().then((data) => {
      if (data > 3 * 60 * 60) {
        setAchievementsCompleted((prev) => ({
          ...prev,
          0: 1,
          isComplete: true,
        }));
      }
    });
    getTotalProductivity().then((data) => {
      if (data > 6 * 60 * 60) {
        setAchievementsCompleted((prev) => ({
          ...prev,
          1: 1,
          isComplete: true,
        }));
      }
      if (data > 8 * 60 * 60) {
        setAchievementsCompleted((prev) => ({
          ...prev,
          2: 1,
          isComplete: true,
        }));
      }
    });
  }, []);

  const handlePage = () => {
    setPage(1);
  };

  return (
    <div className="achievements-page">
      <div className="achievements-page-header">
        <button className="achievements-page-back-button" onClick={handlePage}>
          Back
        </button>
      </div>
      <div className="achievements-page-content">
        <div className="achievements-page-content-website-list">
          {achievements.map((achievement, index) => {
            return (
              <div className="row" key={index}>
                <div className="icon">🏆</div>
                <div className="achievement">{achievement}</div>
                <div className="is-complete?">
                  {achievementsCompleted[index] ? "✅" : "❌"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
