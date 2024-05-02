import { useEffect, useState } from "react";
import { DropdownOptions } from "../../types/DropdownOptions";
import "./MaxTimerBox.scss";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import { fetchWebsitesFromStorage } from "../../utils/queryStorage/FetchWebsitesFromStorage";
import { preprocessURL } from "../../utils/scripts/PreprocessURL";
import { updateMaxTime } from "../../utils/queryStorage/UpdateMaxTime";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

export const MaxTimerBox = () => {
  const [maxTime, setMaxTime] = useState<string>("");
  const dropdownOptions: DropdownOptions[] = [
    {
      id: "4",
      value: "Wasteful",
    },
    {
      id: "5",
      value: "Custom",
    },
  ];

  const [websites, setWebsites] = useState<string[]>([""]);
  const [selectedWebsites, setSelectedWebsites] = useState<string[]>([]);

  useEffect(() => {
    fetchWebsitesFromStorage().then((websites) => {
      setWebsites(
        websites
          .map((website) => {
            if (website.tag === 3) {
              return website.website;
            }
            return "";
          })
          .filter((website) => website !== "")
      );
    });
  }, []);

  const [activeOption, setActiveOption] = useState<DropdownOptions>({
    id: "0",
    value: "Select",
  });

  const handleActiveOption = (option: DropdownOptions) => {
    setActiveOption(option);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedWebsites([...selectedWebsites, event.target.value]);
    } else {
      setSelectedWebsites(
        selectedWebsites.filter((website) => website !== event.target.value)
      );
    }
  };

  const handleSaveTime = async () => {
    if (activeOption.id === "5" && selectedWebsites.length === 0) {
      alert("Please select at least one website");
      return;
    }
    if (maxTime === "") {
      alert("Please enter a time");
      return;
    }
    if (parseInt(maxTime) === 0 || isNaN(parseInt(maxTime))) {
      alert("Please enter a valid time");
      return;
    }
    if (activeOption.id === "0") {
      alert("Please select an option");
      return;
    }
    if (activeOption.id === "4") {
      for (let i = 0; i < websites.length; i++) {
        await updateMaxTime(websites[i], "" + parseInt(maxTime));
      }
      alert("Max time set for all websites");
      setActiveOption({ id: "0", value: "Select" });
      setMaxTime("");
    } else {
      for (let i = 0; i < selectedWebsites.length; i++) {
        await updateMaxTime(selectedWebsites[i], "" + parseInt(maxTime));
      }
      alert("Max time set for selected websites");
      setActiveOption({ id: "0", value: "Select" });
      setMaxTime("");
    }
  };

  return (
    <div className="max_timer_box">
      <div className="max_timer_box__header">
        Site Usage Limit{" "}
        <CiCircleInfo
          data-tooltip-id="max-time-list-tooltip"
          data-tooltip-content="For Websites tagged as 'Wasteful', 
          you can limit usage per day. 
          Default is 20mins per day"
          data-tooltip-place="bottom"
          className="info-icon"
        />
        <Tooltip id="max-time-list-tooltip" className="tooltip"></Tooltip>
      </div>
      <div className="max_timer_box__outline">
        <div className="max_timer_box__content">
          <div className="max_timer_box__content__input">
            <Input
              label="Usage per day (in minutes)"
              input={maxTime}
              placeholder="Enter max time (in minutes)"
              setInput={(time) => {
                setMaxTime(time);
              }}
              type="text"
            ></Input>
          </div>
          <div className="max_timer_box__content__dropdown">
            <Dropdown
              dropdownOptions={dropdownOptions}
              activeOption={activeOption}
              setActiveOption={handleActiveOption}
            ></Dropdown>
          </div>
        </div>
        {activeOption.id === "5" && (
          <div className="max_timer_box__select_website">
            <div className="max_timer_box__select_website__header">
              Select Websites
            </div>
            <div className="max_timer_box__select_website__websites">
              <div className="max_timer_box__select_website__websites__list">
                {websites.map((site, index) => {
                  const website = preprocessURL(site);
                  return (
                    <div
                      key={index}
                      className="max_timer_box__select_website__websites__list__item"
                    >
                      <input
                        type="checkbox"
                        id={site}
                        name={site}
                        value={site}
                        onChange={handleCheckboxChange}
                      ></input>
                      <label htmlFor={website}>
                        {website.slice(0, 20) +
                          (website.length > 20 ? "..." : "")}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="max_timer_box__select_website__count">
              {selectedWebsites.length} websites added
            </div>
          </div>
        )}
        <div className="max_timer_box__button">
          <Button text={"Save"} onClick={handleSaveTime}></Button>
        </div>
      </div>
    </div>
  );
};
