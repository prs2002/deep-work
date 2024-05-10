import "./HomePageHeader.scss";
import { focusMessage } from "../../utils/CONSTANTS/texts";
import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

interface HomePageHeaderProps {
  focusRate: number;
}

export default function HomePageHeader({ focusRate }: HomePageHeaderProps) {
  const [isTagged, setIsTagged] = useState<boolean>(true);

  useEffect(() => {
    chrome.storage.local.get("taggedURLs").then((res) => {
      if (res?.taggedURLs?.length) {
        setIsTagged(true);
      } else {
        setIsTagged(false);
      }
    });
  }, []);

  if (!isTagged) {
    return (
      <div className="home_page_header">
        <h3>Welcome to Recenter!</h3>
        <div className="home_page_header__cover">
          <h1>Please Tag Websites</h1>
          <h1>To Track Your Progress</h1>
          <div className="home_page_header__cover__bell">
            <FaBell />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home_page_header">
      <h3>Welcome Back</h3>
      <h1>{focusMessage[Math.floor(Math.min(focusRate, 99) / 10)].line1}</h1>
      <h1>{focusMessage[Math.floor(Math.min(focusRate, 99) / 10)].line2}</h1>
    </div>
  );
}
