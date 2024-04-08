import { useEffect, useState } from "react";
import ConfigureOptions from "../components/ConfigureOptions";
import Navbar from "../components/Navbar";
import TagWebsite from "../components/TagWebsite";
import UntaggedWebsiteList from "../components/UntaggedWebsiteList";
import WebsiteList from "../components/WebsiteList";
import "./Configure.scss";
import GeneralSettingsBox from "../components/GeneralSettingsBox";
import AuthKeyBox from "../components/AuthKeyBox";
import { AlertTimerBox } from "../components/AlertTimerBox";
import { useLocation } from "react-router-dom";
import ProactiveOptionsBox from "../components/ProactiveOptionsBox";
import { MaxTimerBox } from "../components/MaxTimerBox";

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
