import "./MainSection.scss";
import main_image from "../../../images/main_section_image.png"


export default function MainSection() {
  return (
    <div className="main_section">
      <div className="main_section__header">
        <div className="main_section__header__title">
          <p>Mindful Browsing Begins Here,</p>
          <p id="orange">Introducing Recenter.</p>
        </div>
        <div className="main_section__header__subtitle">
          <p>The browser extension that reshapes your browsing habits.</p>
        </div>
        <div className="main_section__header__button">
          <div className="main_section__header__button__container">
            <button>Get it from Chrome WebStore</button>
          </div>
        </div>
      </div>
      <div className="main_section__image_container">
        <img src={main_image} alt=""></img>
      </div>
    </div>
  );
}
