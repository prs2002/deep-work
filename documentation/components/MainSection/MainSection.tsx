import { FaAngleDown } from "react-icons/fa";
import NewFeature from "../NewFeature/NewFeature";
import QuickLinks from "../QuickLinks/QuickLinks";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "./MainSection.scss";

export default function MainSection() {
  const bgImage = chrome.runtime.getURL(
    "images/documentation/main_section.png"
  );
  return (
    <div
      className="main_section"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="main_section__content">
        <NewFeature></NewFeature>
        <WelcomeSection></WelcomeSection>
        <QuickLinks></QuickLinks>
        <div className="main_section__content__explore">
          <div className="main_section__content__explore__text">Explore</div>
          <div className="main_section__content__explore__icon">
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
}
