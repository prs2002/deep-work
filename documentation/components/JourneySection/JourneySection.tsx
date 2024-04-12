import JourneyCard from "../JourneyCard/JourneyCard";
import "./JourneySection.scss";

export default function JourneySection() {
  const journeyCards = [
    {
      image: chrome.runtime.getURL("/images/documentation/journey/install.png"),
      title: "1. Installation",
      description: (
        <>
          This is the step you would take, Adding <strong>Recenter</strong> to
          your Browser
        </>
      ),
    },
    {
      image: chrome.runtime.getURL("/images/documentation/journey/help.png"),
      title: "2. Help & Documentation",
      description: <>Everything about Recenter</>,
    },
    {
      image: chrome.runtime.getURL("/images/documentation/journey/alert.png"),
      title: "3. Your First Alert",
      description: (
        <>
          This Greeting alert quickly introduces <strong>Recenter</strong> to
          you
        </>
      ),
    },
    {
      image: chrome.runtime.getURL("/images/documentation/journey/profile.png"),
      title: "6. Profile Page",
      description: <>Your Badges, Token usage on your premium plan.</>,
    },
    {
      image: chrome.runtime.getURL(
        "/images/documentation/journey/configure.png"
      ),
      title: "5. Configure Page",
      description: (
        <>
          This is where you would configure <strong>Recenter</strong> to your
          needs.
        </>
      ),
    },
    {
      image: chrome.runtime.getURL("/images/documentation/journey/home.png"),
      title: "4. Home Page",
      description: (
        <>Upfront information to keep you updated with your usage flow.</>
      ),
    },
    {
      image: chrome.runtime.getURL("/images/documentation/journey/regular.png"),
      title: "7. Regular Alerts",
      description: (
        <>These are general alerts, that help steer you away from Distraction</>
      ),
    },
    {
      image: chrome.runtime.getURL(
        "/images/documentation/journey/freemium.png"
      ),
      title: "8. Freemium Alerts",
      description: (
        <>
          These alerts are given as Hourly & Daily updates, part of the premium
          plan.
        </>
      ),
    },
    {
      image: chrome.runtime.getURL(
        "/images/documentation/journey/superfocus.png"
      ),
      title: "9. Super Focus Mode",
      description: (
        <>Enables proactive focus guidance by blocking distracting sites.</>
      ),
    },
  ];

  const bgImage = chrome.runtime.getURL("/images/documentation/journey.png");

  return (
    <div className="journey_section">
      <div className="journey_section__title">
        <div className="journey_section__title__blue">Making the best of</div>
        <div className="journey_section__title__black">
          Your Recenter Journey
        </div>
      </div>
      <div
        className="journey_section__cards"
        style={{
          background: `url(${bgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "50% 35%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {journeyCards.map((card, index) => (
          <JourneyCard {...card} key={index}></JourneyCard>
        ))}
      </div>
    </div>
  );
}
