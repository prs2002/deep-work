import "./ImageSection.scss";

interface Card {
  img: string;
  title: string;
  text: string;
}

interface ImageSectionProps {
  cards: Card[];
}

export default function ImageSection({ cards }: ImageSectionProps) {
  return (
    <div className="image_section">
      {[...cards].map((card, index) => {
        return (
          <div className="image_section__card" key={index}>
            <div className="image_section__card__image">
              <img src={card.img} alt="home_1" />
            </div>
            <div className="image_section__card__caption">
              <div className="image_section__card__caption__title">
                {card.title}
              </div>
              <div className="image_section__card__caption__text">
                {card.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
