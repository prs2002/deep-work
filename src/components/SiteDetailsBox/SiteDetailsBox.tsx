import "./SiteDetailsBox.scss";
import { GoPencil } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { SiteDetails } from "../../types/SiteDetails";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { DropdownOptions } from "../../types/DropdownOptions";
import { saveSiteDetails } from "./saveSiteDetails";
import { fetchSiteDetails } from "./fetchSiteDetails";
import { showEditableElements } from "./showEditableElements";
import { showElements } from "./showElements";

interface SiteDetailsProps {
  setShowSiteDetails: () => void;
  website: string;
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

  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // close when clicked outside the box
    function handleClickOutside(event: any) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowSiteDetails();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [detailsRef, setShowSiteDetails]);

  const [siteDetails, setSiteDetails] = useState<SiteDetails[]>([]);
  const [maxTime, setMaxTime] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [violations, setViolations] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<DropdownOptions>(
    dropdownOptions[0]
  );

  const handleSave = async () => {
    await saveSiteDetails(activeOption.id, violations, time, maxTime, website);
    setTime("");
    setViolations("");
    setIsEditing(false);
  };

  useEffect(() => {
    fetchSiteDetails(
      website,
      setSiteDetails,
      setTime,
      setViolations,
      setMaxTime,
      setActiveOption
    );
  }, [website, isEditing]);

  useEffect(() => {
    async function handleMaxTime() {
      // Handle whenever the dropdown option is changed to "Wasteful"
      if (activeOption.id === "3") {
        const maxTimes =
          (await chrome.storage.local.get("maxTimes"))?.maxTimes || {};
        setMaxTime((maxTimes?.[website] || "20") as string);

        setSiteDetails((prev) => {
          prev = prev.filter((item) => item.label !== "Usage Per Day (in min)");
          return [
            ...prev,
            {
              label: "Usage Per Day (in min)",
              value: (maxTimes?.[website] || "20") as string,
            },
          ];
        });
        // Handle whenever the dropdown option is changed to anything other than "Wasteful"
      } else {
        setMaxTime("");
        setSiteDetails((prev) => {
          prev = prev.filter((item) => item.label !== "Usage Per Day (in min)");
          return prev;
        });
      }
    }
    handleMaxTime();
  }, [website, activeOption]);

  const handleDetailEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="site_details">
      <div className="site_details__details" ref={detailsRef}>
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
          {isEditing
            ? showEditableElements(
                siteDetails,
                time,
                setTime,
                violations,
                setViolations,
                maxTime,
                setMaxTime,
                activeOption,
                setActiveOption,
                dropdownOptions
              )
            : showElements(siteDetails)}
        </div>
        <div className="site_details__details__button">
          {isEditing && <Button onClick={handleSave} text="Save"></Button>}
        </div>
      </div>
    </div>
  );
}
