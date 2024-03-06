import { useEffect, useState } from "react";
import { DropdownOptions } from "../types/DropdownOptions";
import "./WebsiteList.scss";
import { updateWebsitesInStorage } from "../utils/UpdateWebsitesInStorage";
import DropdownWithConfirm from "./DropdownWithConfirm";
import { preprocessURL } from "../utils/PreprocessURL";

interface Website {
  id: string;
  website: string;
  tag: number;
}

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
          <div className="website_list__content__row__website">
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
      <div className="website_list__header">Website List</div>
      <div className="website_list__content">
        {websites.length ? displayWebsites() : "No websites to display"}
      </div>
    </div>
  );
}
