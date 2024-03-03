import "./SiteDetailsBox.scss";
import { GoPencil } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { SiteDetails } from "../types/SiteDetails";
import { useEffect, useState } from "react";
import { siteTags } from "../utils/CONSTANTS/constants";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { DropdownOptions } from "../types/DropdownOptions";
import Input from "./Input";
import { updateWebsitesInStorage } from "../utils/UpdateWebsitesInStorage";

interface SiteDetailsProps {
  setShowSiteDetails: () => void;
  website: string;
}

interface Website {
  id: string;
  website: string;
  tag: number;
}

interface PromptParameters {
  promptInterval: number;
  promptViolations: number;
}
const dropdownOptions: DropdownOptions[] = [
  {
    id: "0",
    value: "Untagged",
  },
  {
    id: "1",
    value: "Productive",
  },
  {
    id: "2",
    value: "Unsure",
  },
  {
    id: "3",
    value: "Wasteful",
  },
];

export default function SiteDetailsBox({
  setShowSiteDetails,
  website,
}: SiteDetailsProps) {
  function handleSiteDetails() {
    setShowSiteDetails();
  }

  const [siteDetails, setSiteDetails] = useState<SiteDetails[]>([]);
  const [time, setTime] = useState<string>("");
  const [violations, setViolations] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<DropdownOptions>(
    dropdownOptions[0]
  );

  const showElements = () => {
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
  };

  const showEditableElements = () => {
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
  };

  async function updateAlertParameters() {
    chrome.storage.local.get("promptParameters").then(async (prev) => {
      const prevData = prev?.promptParameters || {};
      prevData[website] = {
        promptInterval: parseInt(time),
        promptViolations: parseInt(violations),
      };
      await chrome.storage.local.set({ promptParameters: prevData });
      alert("Alert parameters saved successfully");
      setTime("");
      setViolations("");
    });
  }

  const handleSave = async () => {
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
    await updateAlertParameters();
    await updateWebsitesInStorage([
      {
        id: website,
        tag: parseInt(activeOption.id),
        website: website,
      },
    ]);
    setIsEditing(false);
  };

  useEffect(() => {
    chrome.storage.local.get().then((res) => {
      let tag: number = 0;
      const site: Website[] | null = res.taggedURLs?.filter(
        (e: Website) => e.website === website
      );
      if (site?.length) {
        tag = site[0].tag;
        setActiveOption(dropdownOptions[tag]);
      }
      const promptParameters: PromptParameters | null =
        res.promptParameters?.[website];

      setTime(
        (promptParameters?.promptInterval || "Not Set (Default)") as string
      );
      setViolations(
        (promptParameters?.promptViolations || "Not Set (Default)") as string
      );
      setSiteDetails([
        {
          label: "Name of the website",
          value: new URL(website).hostname.split(".")[1],
        },
        {
          label: "Site Address",
          value: website,
        },
        {
          label: "Site Type",
          value: siteTags[tag],
        },
        {
          label: "Alert Duration",
          value: (promptParameters?.promptInterval ||
            "Not Set (Default)") as string,
        },
        {
          label: "Max Alert Violation",
          value: (promptParameters?.promptViolations ||
            "Not Set (Default)") as string,
        },
      ]);
    });
  }, [website, isEditing]);

  const handleDetailEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="site_details">
      <div className="site_details__details">
        <div className="site_details__details__header">
          <div className="site_details__details__header__title">
            Site Details
          </div>
          <div className="site_details__details__header__buttons">
            {!isEditing && (
              <div
                className="site_details__details__header__buttons__edit"
                onClick={handleDetailEdit}
              >
                <GoPencil className="site_details__details__header__buttons__edit__pencil" />
              </div>
            )}
            <div
              className="site_details__details__header__buttons__close"
              onClick={handleSiteDetails}
            >
              <RxCross1 className="site_details__details__header__buttons__close__cross" />
            </div>
          </div>
        </div>
        <div className="site_details__details__content">
          {isEditing ? showEditableElements() : showElements()}
        </div>
        <div className="site_details__details__button">
          <Button onClick={handleSave} text="Save"></Button>
        </div>
      </div>
    </div>
  );
}
