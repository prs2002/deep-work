import { useEffect, useState } from "react";
import { DropdownOptions } from "../../types/DropdownOptions";
import "./AlertTimerBox.scss";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import { fetchWebsitesFromStorage } from "../../utils/queryStorage/FetchWebsitesFromStorage";
import { preprocessURL } from "../../utils/scripts/PreprocessURL";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

export const AlertTimerBox = () => {
  const [time, setTime] = useState<string>("");
  const [violations, setViolations] = useState<string>("");
  const dropdownOptions: DropdownOptions[] = [
    {
      id: "1",
      value: "Apply All",
    },
    {
      id: "2",
      value: "Productive",
    },
    {
      id: "3",
      value: "Unsure",
    },
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
      setWebsites(websites.map((website) => website.website));
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

  async function saveAlertParametersToStorage(websites: string[]) {
    chrome.storage.local.get("promptParameters").then(async (prev) => {
      const prevData = prev?.promptParameters || {};
      for (let i = 0; i < websites.length; i++) {
        prevData[websites[i]] = {
          promptInterval: parseInt(time),
          promptViolations: parseInt(violations),
        };
      }
      await chrome.storage.local.set({ promptParameters: prevData });
      alert("Alert parameters saved successfully");
      setTime("");
      setViolations("");
      setSelectedWebsites([]);
      setActiveOption({ id: "0", value: "Select" });
    });
  }

  function handleSaveTime() {
    if(activeOption.id === "0") {
      alert("Please select an option");
      return;
    }
    if (
      isNaN(Number(violations)) ||
      violations === "" ||
      parseInt(violations) < 0
    ) {
      alert("Please enter valid violations");
      return;
    }
    if (isNaN(Number(time)) || time === "" || parseInt(time) < 0) {
      alert("Please enter valid time");
      return;
    }
    if (activeOption.id === "1") {
      saveAlertParametersToStorage(websites);
    } else if (activeOption.id === "2") {
      fetchWebsitesFromStorage().then((res) => {
        const temp = res.filter((e) => {
          return e.tag === 1;
        });
        saveAlertParametersToStorage(temp.map((e) => e.website));
      });
    } else if (activeOption.id === "3") {
      fetchWebsitesFromStorage().then((res) => {
        const temp = res.filter((e) => {
          return e.tag === 2;
        });
        saveAlertParametersToStorage(temp.map((e) => e.website));
      });
    } else if (activeOption.id === "4") {
      fetchWebsitesFromStorage().then((res) => {
        const temp = res.filter((e) => {
          return e.tag === 3;
        });
        saveAlertParametersToStorage(temp.map((e) => e.website));
      });
    } else {
      saveAlertParametersToStorage(selectedWebsites);
    }
  }

  return (
    <div className="alert_timer_box">
      <div className="alert_timer_box__header">Alert Settings

      <CiCircleInfo
          data-tooltip-id="alert-list-tooltip"
          data-tooltip-content="Customize how and when Recenter should alert you by adjusting the intervals between each alert and respective tolerance limit"
          data-tooltip-place="bottom"
          className="info-icon"
        />
        <Tooltip
          id="alert-list-tooltip"
          className="tooltip"
        ></Tooltip>
      </div>
      <div className="alert_timer_box__outline">
        <div className="alert_timer_box__max_time">
          <div className="alert_timer_box__max_time__input">
            <Input
              label="Alert Intervals"
              input={time}
              placeholder="Enter Duration (in seconds)"
              setInput={(time) => {
                setTime(time);
              }}
              type="text"
            ></Input>
          </div>
        </div>
        <div className="alert_timer_box__content">
          <div className="alert_timer_box__content__input">
            <Input
              label="Alert Tolerance Limit"
              input={violations}
              placeholder="Enter number of violations"
              setInput={(violations) => {
                setViolations(violations);
              }}
              type="text"
            ></Input>
          </div>
          <div className="alert_timer_box__content__dropdown">
            <Dropdown
              dropdownOptions={dropdownOptions}
              activeOption={activeOption}
              setActiveOption={handleActiveOption}
            ></Dropdown>
          </div>
        </div>
        {activeOption.id === "5" && (
          <div className="alert_timer_box__select_website">
            <div className="alert_timer_box__select_website__header">
              Select Websites
            </div>
            <div className="alert_timer_box__select_website__websites">
              <div className="alert_timer_box__select_website__websites__list">
                {websites.map((site, index) => {
                  const website = preprocessURL(site);
                  return (
                    <div
                      key={index}
                      className="alert_timer_box__select_website__websites__list__item"
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
            <div className="alert_timer_box__select_website__count">
              {selectedWebsites.length} websites added
            </div>
          </div>
        )}
        <div className="alert_timer_box__button">
          <Button text={"Save"} onClick={handleSaveTime}></Button>
        </div>
      </div>
    </div>
  );
};
