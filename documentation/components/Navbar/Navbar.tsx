import "./Navbar.scss";
import logo from "../../../src/images/recenter_logo.png";

export default function Navbar() {
  const middleLinks = [
    {
      name: "Getting Started",
      href: "#getting-started",
    },
    {
      name: "Essentials",
      href: "#essentials",
    },
    {
      name: "Alerts",
      href: "#alerts",
    },
    {
      name: "FAQs",
      href: "#faqs",
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar__left__text">Recenter</div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle__items">
          {middleLinks.map((link) => {
            return (
              <a
                href={link.href}
                className="navbar__middle__items__item"
                key={link.name}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__items">
          <a
            href="https://github.com/CominiLearning/recenter"
            rel="noreferrer"
            target="_blank"
            className="navbar__right__items__item"
            id="item"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
