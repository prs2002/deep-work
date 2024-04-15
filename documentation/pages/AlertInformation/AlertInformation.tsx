import Banner from "../../components/Banner/Banner";
import ContentSection from "../../components/ContentSection/ContentSection";
import "./AlertInformation.scss";
import { content, banner } from "../../texts/alertInformation";

export default function AlertInformation() {
  return (
    <div className="alert_information_page">
      <Banner {...banner}></Banner>
      {content.map((section, index) => {
        return <ContentSection key={index} card={section}></ContentSection>;
      })}
    </div>
  );
}
