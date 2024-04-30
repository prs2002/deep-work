import { useEffect, useState } from "react";
import { DropdownOptions } from "../../types/DropdownOptions";
import { TaggedTimeURL } from "../../types/TaggedTimeUrl";
import "./VisitedWebsitesList.scss";
import { updateWebsitesInStorage } from "../../utils/queryStorage/UpdateWebsitesInStorage";
import DropdownWithConfirm from "../DropdownWithConfirm/DropdownWithConfirm";
import { preprocessURL } from "../../utils/scripts/PreprocessURL";
import SiteDetailsBox from "../SiteDetailsBox/SiteDetailsBox";
import useToggle from "../../hooks/useToggle";

interface VisitedWebsitesListProps {
  visitedWebsites: TaggedTimeURL[];
  setVisitedWebsites: React.Dispatch<React.SetStateAction<TaggedTimeURL[]>>;
}

const websiteColor = ["grey", "blue", "orange", "red"];

export default function VisitedWebsitesList({
  visitedWebsites,
  setVisitedWebsites,
}: VisitedWebsitesListProps) {
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

  const [activeOption, setActiveOption] = useState<DropdownOptions[]>([]);
  const [showSiteDetails, setShowSiteDetails] = useToggle(false);
  const [site, setSite] = useState<string>("");

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
    const activeOption: DropdownOptions[] = [];
    for (let i = 0; i < visitedWebsites.length; i++) {
      activeOption.push(dropdownOptions[visitedWebsites[i].tag]);
    }
    setActiveOption(activeOption);
  }, [visitedWebsites]);

  const handleCancel = (index: number) => {
    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] = dropdownOptions[visitedWebsites[index].tag];
      return newActiveOption;
    });
  };

  const handleTagChange = (index: number) => {
    updateWebsitesInStorage([
      {
        id: visitedWebsites[index].url,
        website: visitedWebsites[index].url,
        tag: parseInt(activeOption[index].id),
      },
    ]);

    setVisitedWebsites((prev) => {
      const newWebsites = [...prev];
      newWebsites[index].tag = parseInt(activeOption[index].id);
      return newWebsites;
    });
    setActiveOption((prev) => {
      const newActiveOption = [...prev];
      newActiveOption[index] =
        dropdownOptions[parseInt(activeOption[index].id)];
      return newActiveOption;
    });
  };

  const handleSiteDetails = (website: string) => {
    setShowSiteDetails();
    setSite(website);
  };

  const displayWebsite = () => {
    return visitedWebsites.map((site, index) => {
      const website = preprocessURL(site.url);
      return (
        <div className="visited_website_list__content__list__item" key={index}>
          <div
            className="visited_website_list__content__list__item__website"
            onClick={() => {
              handleSiteDetails(site.url);
            }}
          >
            <div
              className="visited_website_list__content__list__item__website__color"
              id={websiteColor[site.tag]}
            ></div>
            {website.slice(0, 20) + (website.length > 20 ? "..." : "")}
          </div>
          <div className="visited_website_list__content__list__item__tag">
            <DropdownWithConfirm
              dropdownOptions={dropdownOptions}
              activeOption={activeOption[index] || { id: "0", value: "-1" }}
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
    <div className="visited_website_list">
      {showSiteDetails && (
        <SiteDetailsBox
          setShowSiteDetails={setShowSiteDetails}
          website={site}
        ></SiteDetailsBox>
      )}
      <div className="visited_website_list__content">
        <div className="visited_website_list__content__title">
          <h3>Visited Websites</h3>
        </div>
        <div className="visited_website_list__content__outline">
          <div className="visited_website_list__content__list">
            {visitedWebsites.length ? displayWebsite() : "No websites visited"}
          </div>
        </div>
      </div>
    </div>
  );
}
