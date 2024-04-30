import { SiteDetails } from "../../types/SiteDetails";

export function showElements(siteDetails: SiteDetails[]) {
  return siteDetails.map((item, index) => {
    if (index === 1) {
      return (
        <div className="site_details__details__content__item" key={index}>
          <div className="site_details__details__content__item__label">
            {item.label}
          </div>
          <a
            href={item.value}
            rel="noreferrer"
            target="_blank"
            className="site_details__details__content__item__value"
            id="link"
          >
            {item.value.slice(0, 20) + (item.value.length > 20 ? "..." : "")}
          </a>
        </div>
      );
    }

    if (siteDetails[2].value === "Productive" && index > 2) {
      return <></>;
    }
    return (
      <div className="site_details__details__content__item" key={index}>
        <div className="site_details__details__content__item__label">
          {item.label}
        </div>
        <div className="site_details__details__content__item__value">
          {item.value}
        </div>
      </div>
    );
  });
}
