import "./Banner.scss";
import clock from "../../../src/images/documentation/icons/clock.svg";
import bgImage from "../../../src/images/documentation/main_section.png";

interface BannerProps {
  title: string;
  text: string;
  icon: string;
  lastUpdated: string;
  duration: string;
  banner: string;
}

export default function Banner({
  title,
  text,
  icon,
  lastUpdated,
  duration,
  banner,
}: BannerProps) {
  
  return (
    <div
      className="banner"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__content">
        <div className="banner__content__items">
          <img src={icon} alt="essentials"></img>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="banner__content__items__times">
            <span>
              <img src={clock} alt="clock"></img>Last Updated: {lastUpdated}
            </span>
            <span>
              <img src={clock} alt="clock"></img>Duration: {duration}
            </span>
          </div>
        </div>
        <img src={banner} alt="banner"></img>
      </div>
    </div>
  );
}
