import "./Footer.scss";
import logo from "../../../src/images/recenter_logo.png";

export default function Footer() {
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
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="footer__left__text">Recenter</div>
      </div>
      <div className="footer__middle">
        <div className="footer__middle__items">
          {middleLinks.map((link) => {
            return (
              <a
                href={link.href}
                className="footer__middle__items__item"
                key={link.name}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right__items">
          <a
            href="https://github.com/CominiLearning/recenter"
            rel="noreferrer"
            target="_blank"
            className="footer__right__items__item"
            id="item"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
