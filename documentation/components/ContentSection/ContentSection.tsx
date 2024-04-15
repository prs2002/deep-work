import { Fragment } from "react";
import { Content } from "../../types/Content";
import "./ContentSection.scss";
import ImageSection from "./ImageSection/ImageSection";
import TextSection from "./TextSection/TextSection";

interface ContentSectionProps {
  card: Content;
}

export default function ContentSection({ card }: ContentSectionProps) {
  return (
    <div className="content_section">
      <div className="content_section__title">{card.title}</div>
      {card.texts.map((text, index) => {
        const images = card.cards.filter((card) => card.level === index);
        if (images.length > 0) {
          return (
            <Fragment key={index}>
              <TextSection text={text}></TextSection>
              <ImageSection cards={images}></ImageSection>
            </Fragment>
          );
        }
        return <TextSection key={index} text={text}></TextSection>;
      })}
    </div>
  );
}
