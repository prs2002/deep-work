import Banner from "../../components/Banner/Banner";
import ContentSection from "../../components/ContentSection/ContentSection";
import "./Essentials.scss";
import { content, banner } from "../../texts/essentials";

export default function Essentials() {
  return (
    <div className="essentials_page">
      <Banner {...banner}></Banner>
      {content.map((section, index) => {
        return <ContentSection key={index} card={section}></ContentSection>;
      })}
    </div>
  );
}
