import "./JourneyCard.scss";

interface JourneyCardProps {
  image: string;
  title: string;
  description: JSX.Element;
}

export default function JourneyCard({
  image,
  title,
  description,
}: JourneyCardProps) {
  return (
    <div className="journey_card">
      <div className="journey_card__image">
        <img src={image} alt={title} />
      </div>
      <div className="journey_card__content">
        <div className="journey_card__content__title">{title}</div>
        <div className="journey_card__content__description">{description}</div>
      </div>
    </div>
  );
}
