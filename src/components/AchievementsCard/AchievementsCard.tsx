import "./AchievementsCard.scss";
import { Achievements } from "../../types/Achievements";

interface AchievementsCardProps {
  achievementsType: Achievements;
}

export default function AchievementsCard({
  achievementsType,
}: AchievementsCardProps) {
    
  return (
    <div className="achievements_card" id={achievementsType.color}>
      <div className="achievements_card__details">
        <h2>PRODUCTIVITY</h2>
        <h1>{achievementsType.name}</h1>
        <p>
        You have been productive for <span>{achievementsType.time}hrs</span> this week.
        </p>
      </div>
      <div className="achievements_card__image">
        <img src={achievementsType.trophy} alt="trophy"></img>
      </div>
    </div>
  );
}
