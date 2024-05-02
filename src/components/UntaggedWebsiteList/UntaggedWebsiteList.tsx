import { useEffect, useState } from "react";
import { DropdownOptions } from "../../types/DropdownOptions";
import "./UntaggedWebsiteList.scss";
import { updateWebsitesInStorage } from "../../utils/queryStorage/UpdateWebsitesInStorage";
import DropdownWithConfirm from "../DropdownWithConfirm/DropdownWithConfirm";
import { preprocessURL } from "../../utils/scripts/PreprocessURL";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

export default function UntaggedWebsiteList() {
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

  const [untaggedWebsites, setUntaggedWebsites] = useState<string[]>([]);

  const [activeOption, setActiveOption] = useState<DropdownOptions[]>([]);

  const handleOptionSelect = (option: DropdownOptions, index: number) => {
    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] = option;
      return newActiveOption;
    });
  };

  useEffect(() => {
    chrome.storage.local.get("visitedURLs").then((result) => {
      if (!result?.visitedURLs) return;
      const visitedURLs: string[] = result.visitedURLs;
      const activeOption: DropdownOptions[] = [];
      for (let i = 0; i < visitedURLs.length; i++) {
        activeOption.push({
          id: "0",
          value: "Add tag",
        });
      }
      setUntaggedWebsites(visitedURLs);
      setActiveOption(activeOption);
    });
  }, []);

  const handleCancel = (index: number) => {
    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] = {
        id: "0",
        value: "Add tag",
      };
      return newActiveOption;
    });
  };

  const handleTagChange = (index: number) => {
    updateWebsitesInStorage([
      {
        id: untaggedWebsites[index],
        website: untaggedWebsites[index],
        tag: parseInt(activeOption[index].id),
      },
    ]);

    setUntaggedWebsites((prev) => {
      const newWebsites = [...prev];
      newWebsites.splice(index, 1);
      return newWebsites;
    });

    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption.splice(index, 1);
      return newActiveOption;
    });
  };

  const displayWebsites = () => {
    return untaggedWebsites.map((website, index) => {
      return (
        <div className="untagged_website_list__content__row" key={index}>
          <div className="untagged_website_list__content__row__website">
            {preprocessURL(website)}
          </div>
          <div className="untagged_website_list__content__row__dropdown">
            <DropdownWithConfirm
              dropdownOptions={dropdownOptions}
              activeOption={activeOption[index]}
              setActiveOption={(option: DropdownOptions) => {
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
    <div className="untagged_website_list">
      <div className="untagged_website_list__header">
        Untagged Sites{" "}
        <CiCircleInfo
          data-tooltip-id="untagged-list-tooltip"
          data-tooltip-content="Untagged websites are not
          yet untagged by GPT, users can 
          tag them manually."
          data-tooltip-place="bottom"
          className="info-icon"
        />
        <Tooltip id="untagged-list-tooltip" className="tooltip"></Tooltip>
      </div>
      <div className="untagged_website_list__outline">
        <div className="untagged_website_list__content">
          {untaggedWebsites.length ? displayWebsites() : "No untagged websites"}
        </div>
      </div>
    </div>
  );
}
