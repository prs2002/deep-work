import { FaAngleRight } from "react-icons/fa";
import "./QuickLinks.scss";

export default function QuickLinks() {
  const quickLinks = [
    {
      name: "Getting Started",
      link: "/",
    },
    {
      name: "The Essentials",
      link: "/essentials",
    },
    {
      name: "Alerts & Information",
      link: "/alerts",
    },
    {
      name: "Frequency Asked",
      link: "/faq",
    },
  ];
  return (
    <div className="quick_links">
      {quickLinks.map((link, index) => {
        return (
          <div className="quick_links__link_box" key={index}>
            <div className="quick_links__link_box__left">
              <div className="quick_links__link_box__left__circle"></div>
            </div>
            <div className="quick_links__link_box__middle">{link.name}</div>
            <div className="quick_links__link_box__right">
              <FaAngleRight></FaAngleRight>
            </div>
          </div>
        );
      })}
    </div>
  );
}
