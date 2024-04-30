import { DropdownOptions } from "../../types/DropdownOptions";
import { SiteDetails } from "../../types/SiteDetails";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";

export function showEditableElements(
  siteDetails: SiteDetails[],
  time: string,
  setTime: (time: string) => void,
  violations: string,
  setViolations: (violations: string) => void,
  maxTime: string,
  setMaxTime: (maxTime: string) => void,
  activeOption: any,
  setActiveOption: (activeOption: any) => void,
  dropdownOptions: DropdownOptions[]
) {
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
    if (index === 2) {
      return (
        <div className="site_details__details__content__item" key={index}>
          <div className="site_details__details__content__item__label">
            {item.label}
          </div>
          <div className="site_details__details__content__item__value">
            <div className="site_details__details__content__item__value__dropdown">
              <Dropdown
                activeOption={activeOption}
                dropdownOptions={dropdownOptions}
                setActiveOption={setActiveOption}
                className="sd"
              ></Dropdown>
            </div>
          </div>
        </div>
      );
    }
    if (activeOption.id === "1" && index > 2) {
      return <></>;
    }
    if (index === 3) {
      return (
        <div className="site_details__details__content__item" key={index}>
          <div className="site_details__details__content__item__label">
            {item.label}
          </div>
          <div className="site_details__details__content__item__value">
            <div className="site_details__details__content__item__value__input">
              <Input
                input={time}
                placeholder=""
                setInput={(input) => {
                  setTime(input);
                }}
                type="text"
                className="input"
              ></Input>
            </div>
          </div>
        </div>
      );
    }
    if (index === 4) {
      return (
        <div className="site_details__details__content__item" key={index}>
          <div className="site_details__details__content__item__label">
            {item.label}
          </div>
          <div className="site_details__details__content__item__value">
            <div className="site_details__details__content__item__value__input">
              <Input
                input={violations}
                placeholder=""
                setInput={(input) => {
                  setViolations(input);
                }}
                type="text"
                className="input"
              ></Input>
            </div>
          </div>
        </div>
      );
    }
    if (activeOption.id === "3" && index === 5) {
      return (
        <div className="site_details__details__content__item" key={index}>
          <div className="site_details__details__content__item__label">
            {item.label}
          </div>
          <div className="site_details__details__content__item__value">
            <div className="site_details__details__content__item__value__input">
              <Input
                input={maxTime}
                placeholder=""
                setInput={(input) => {
                  setMaxTime(input);
                }}
                type="text"
                className="input"
              ></Input>
            </div>
          </div>
        </div>
      );
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
