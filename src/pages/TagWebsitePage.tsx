import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WebsiteList from "../components/WebsiteList";
import "./TagWebsitePage.css";

interface TagWebsitePageProps {
  setPage: (page: number) => void;
}

export default function TagWebsitePage({setPage}: TagWebsitePageProps) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="tag-website-page">
      <div className="tag-website-page__header">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setPage={setPage}
        ></SearchBar>
      </div>
      <div className="tag-website-page__body">
        <WebsiteList searchValue={searchValue}></WebsiteList>
      </div>
    </div>
  );
}
