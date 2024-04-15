import "./Home.scss";
import MainSection from "../../components/MainSection/MainSection";
import JourneySection from "../../components/JourneySection/JourneySection";

export default function Home() {
  return (
    <div className="home_page">
      <MainSection></MainSection>
      <JourneySection></JourneySection>
    </div>
  );
}
