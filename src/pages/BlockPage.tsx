import { MouseEvent, useEffect, useState } from "react";
import Input from "../components/Input";
import "./BlockPage.css";

interface BlockPageProps {
  setPage: any;
}

export default function BlockPage({ setPage }: BlockPageProps) {
  const [website, setWebsite] = useState<string>("");
  const [blockedURLs, setBlockedURLs] = useState<string[]>([]);

  useEffect(() => {
    chrome.storage.local.get("blockedURLs").then((res) => {
      if (res.blockedURLs) {
        setBlockedURLs(res.blockedURLs);
      }
    });
  }, []);

  function handlePage() {
    setPage(1);
  }

  async function saveInput(url: string) {
    try {
      const urlOrigin: string = new URL(website).origin;
      const blockedData = await chrome.storage.local.get("blockedURLs");
      const prevBlockedUrls: string[] = blockedData?.blockedURLs || [];
      if (prevBlockedUrls.find((ele) => ele === urlOrigin)) {
        return;
      }
      prevBlockedUrls.push(urlOrigin);
      await chrome.storage.local.set({ blockedURLs: prevBlockedUrls });
      setBlockedURLs(prevBlockedUrls);
      setWebsite("");
    } catch (error) {
      console.error(error);
    }
  }

  async function unblock(event: MouseEvent<HTMLButtonElement>) {
    const url: string = (event.target as HTMLButtonElement).id || "";
    const blockedData = await chrome.storage.local.get("blockedURLs");
    const prevBlockedUrls: string[] = blockedData?.blockedURLs || [];
    const index = prevBlockedUrls.findIndex((ele) => {
      return ele === url;
    });

    if (index !== -1) {
      prevBlockedUrls.splice(index, 1);
      await chrome.storage.local.set({ blockedURLs: prevBlockedUrls });
      setBlockedURLs(prevBlockedUrls);
    }
  }
  return (
    <div className="block-setting-page">
      <div className="block-setting-page-header">
        <button className="block-setting-page-back-button" onClick={handlePage}>
          Back
        </button>
      </div>
      <div className="block-setting-page-content">
        <Input
          buttonText="Block"
          label="Enter website to block"
          placeholder="Enter the website"
          handleInput={saveInput}
          input={website}
          setInput={setWebsite}
        ></Input>
        <div className="block-setting-page-content-website-list">
          {blockedURLs.map((url) => {
            return (
              <div className="row" key={url}>
                <a className="url" href={url} target="_blank" rel="noreferrer">{url}</a>
                <div className="btn">
                  <button id={url} onClick={unblock}>
                    Unblock
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
