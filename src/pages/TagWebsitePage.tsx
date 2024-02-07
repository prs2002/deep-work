import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WebsiteList from "../components/WebsiteList";
import "./TagWebsitePage.css";

export default function TagWebsitePage() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="tag-website-page">
      <div className="tag-website-page__header">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></SearchBar>
      </div>
      <div className="tag-website-page__body">
        <WebsiteList searchValue={searchValue}></WebsiteList>
      </div>
    </div>
  );
}
