import { useEffect, useState } from "react";
import { DropdownOptions } from "../../types/DropdownOptions";
import "./WebsiteList.scss";
import { updateWebsitesInStorage } from "../../utils/queryStorage/UpdateWebsitesInStorage";
import DropdownWithConfirm from "../DropdownWithConfirm/DropdownWithConfirm";
import { preprocessURL } from "../../utils/scripts/PreprocessURL";
import useToggle from "../../hooks/useToggle";
import SiteDetailsBox from "../SiteDetailsBox/SiteDetailsBox";
import { CiCircleInfo } from "react-icons/ci";
import { Website } from "../../types/Website";
import { Tooltip } from "react-tooltip";

export default function WebsiteList() {
  const dropdownOptions: DropdownOptions[] = [
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

  const [websites, setWebsites] = useState<Website[]>([]);
  const [activeOption, setActiveOption] = useState<DropdownOptions[]>([]);

  const [showSiteDetails, setShowSiteDetails] = useToggle(false);
  const [site, setSite] = useState<string>("");

  const handleSiteDetails = (item: string) => {
    setShowSiteDetails();
    setSite(item);
  };

  const handleOptionSelect = (option: DropdownOptions, index: number) => {
    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] = option;
      return newActiveOption;
    });
  };

  useEffect(() => {
    const dropdownOptions: DropdownOptions[] = [
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
    chrome.storage.local.get("taggedURLs").then((result) => {
      if (!result?.taggedURLs) return;
      const visitedURLs: Website[] = result.taggedURLs;
      setWebsites(visitedURLs);
      setActiveOption(
        visitedURLs.map((website) => dropdownOptions[website.tag - 1])
      );
    });
  }, []);

  const handleCancel = (index: number) => {
    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] = dropdownOptions[websites[index].tag - 1];
      return newActiveOption;
    });
  };

  const handleTagChange = (index: number) => {
    updateWebsitesInStorage([
      {
        id: websites[index].id,
        website: websites[index].website,
        tag: parseInt(activeOption[index].id),
      },
    ]);

    setWebsites((prev) => {
      const newWebsites = [...prev];
      newWebsites[index].tag = parseInt(activeOption[index].id);
      return newWebsites;
    });

    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] =
        dropdownOptions[parseInt(activeOption[index].id) - 1];
      return newActiveOption;
    });
  };

  const displayWebsites = () => {
    return websites.map((site, index) => {
      const website = preprocessURL(site.website);
      return (
        <div className="website_list__content__row" key={index}>
          <div
            className="website_list__content__row__website"
            onClick={() => {
              handleSiteDetails(site.website);
            }}
          >
            {website.slice(0, 20) + (website.length > 20 ? "..." : "")}
          </div>
          <div className="website_list__content__row__dropdown">
            <DropdownWithConfirm
              dropdownOptions={dropdownOptions}
              activeOption={activeOption[index]}
              setActiveOption={(option) => {
                handleOptionSelect(option, index);
              }}
              handleCancel={() => {
                handleCancel(index);
              }}
              handleTagChange={() => {
                handleTagChange(index);
              }}
            ></DropdownWithConfirm>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="website_list">
      {showSiteDetails && (
        <SiteDetailsBox
          setShowSiteDetails={setShowSiteDetails}
          website={site}
        />
      )}
      <div className="website_list__header">
        Website List{" "}
        <CiCircleInfo
          data-tooltip-id="website-list-tooltip"
          data-tooltip-content="List of all the websites you have visited so far along with tags."
          data-tooltip-place="bottom"
          className="info-icon"
        />
        <Tooltip
          id="website-list-tooltip"
          className="tooltip"
        ></Tooltip>
      </div>
      <div className="website_list__outline">
        <div className="website_list__content">
          {websites.length ? displayWebsites() : "No websites to display"}
        </div>
      </div>
    </div>
  );
}
