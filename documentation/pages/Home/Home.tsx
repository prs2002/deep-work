import "./Home.scss";
import MainSection from "../../components/MainSection/MainSection";
import JourneySection from "../../components/JourneySection/JourneySection";
import FAQSection from "../../components/FAQSection/FAQSection";

export default function Home() {
  return (
    <div className="home_page">
      <MainSection></MainSection>
      <JourneySection></JourneySection>
      <FAQSection></FAQSection>
    </div>
  );
}
