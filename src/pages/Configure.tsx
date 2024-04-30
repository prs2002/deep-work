import { useEffect, useState } from "react";
import ConfigureOptions from "../components/ConfigureOptions/ConfigureOptions";
import Navbar from "../components/Navbar/Navbar";
import TagWebsite from "../components/TagWebsite/TagWebsite";
import UntaggedWebsiteList from "../components/UntaggedWebsiteList/UntaggedWebsiteList";
import WebsiteList from "../components/WebsiteList/WebsiteList";
import "./Configure.scss";
import GeneralSettingsBox from "../components/GeneralSettingsBox/GeneralSettingsBox";
import AuthKeyBox from "../components/AuthKeyBox/AuthKeyBox";
import { AlertTimerBox } from "../components/AlertTimerBox/AlertTimerBox";
import { useLocation } from "react-router-dom";
import ProactiveOptionsBox from "../components/ProactiveOptionsBox/ProactiveOptionsBox";
import { MaxTimerBox } from "../components/MaxTimerBox/MaxTimerBox";

interface ConfigureProps {
  isFocused: boolean;
}

export default function Configure({ isFocused }: ConfigureProps) {
  const options = ["Websites", "Settings"];
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const {search} = useLocation();
  
  
  useEffect(() => {
    const params = new URLSearchParams(search);
    if(params.get("type") === "settings") {
      setSelectedOption(1);
    }
    else {
      setSelectedOption(0);
    }
  }, [search])

  return (
    <div className="configure_page">
      <Navbar text="Configure" isFocused={isFocused}></Navbar>
      <div className="configure_page__header">
        <ConfigureOptions
          isFocused={isFocused}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        ></ConfigureOptions>
      </div>
      <div className="configure_page__content">
        {selectedOption === 0 ? (
          <>
            <TagWebsite></TagWebsite>
            <UntaggedWebsiteList></UntaggedWebsiteList>
            <WebsiteList></WebsiteList>
          </>
        ) : (
          <>
            <GeneralSettingsBox></GeneralSettingsBox>
            <ProactiveOptionsBox></ProactiveOptionsBox>
            <AuthKeyBox></AuthKeyBox>
            <AlertTimerBox></AlertTimerBox>
            <MaxTimerBox></MaxTimerBox>
          </>
        )}
      </div>
    </div>
  );
}
