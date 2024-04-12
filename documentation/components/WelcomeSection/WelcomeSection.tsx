import "./WelcomeSection.scss";

export default function WelcomeSection() {
  return (
    <div className="welcome_section">
      <div className="welcome_section__main_text">
        <div className="welcome_section__main_text__blue">
          Welcome to Recenter,
        </div>
        <div className="welcome_section__main_text__black">
          What Happens Next?
        </div>
      </div>
      <div className="welcome_section__sub_text">
        The only extension that reshapes your browsing habits.
      </div>
    </div>
  );
}
