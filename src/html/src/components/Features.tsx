import "./Features.scss";

interface FeaturesProps {
  type: number;
  image: string;
  feature: string;
  title: JSX.Element | string;
  description: string;
}

export default function Features({
  type,
  image,
  feature,
  title,
  description,
}: FeaturesProps) {
  return (
    <div className="features_container" id={type === 0 ? "" : "rev"}>
      <div className="features_container__left">
        <div className="features_container__left__type">{feature}</div>
        <div className="features_container__left__title">
          <div>{title}</div>
        </div>
        <div className="features_container__left__description">
          {description}
        </div>
      </div>
      <div className="features_container__right">
        <div className="features_container__right__image">
          <img src={image} alt={feature} />
        </div>
      </div>
    </div>
  );
}
