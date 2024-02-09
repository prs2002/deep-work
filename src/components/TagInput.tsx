import { ChangeEvent, useState } from "react";
import "./TagInput.css";

interface InputProps {
  label: string;
  placeholder: string;
  setPage: (page: number) => void;
}

const Input = ({ label, placeholder, setPage }: InputProps) => {
  const [website, setWebsite] = useState<string>("");
  const [tag, setTag] = useState<number>(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };

  const handleTag = async () => {
    try {
      const urlObject = new URL(website);
      const visitedData = await chrome.storage.local.get("visitedURLs");
      const visitedURLs = visitedData?.visitedURLs || [];
      if (visitedURLs.indexOf(urlObject.origin) !== -1) {
        visitedURLs.splice(visitedURLs.indexOf(urlObject.origin), 1);
        await chrome.storage.local.set({ visitedURLs: visitedURLs });
      }
      const taggedData =
        (await chrome.storage.local.get("taggedURLs"))?.taggedURLs || [];

      for (let i = 0; i < taggedData.length; i++) {
        if (taggedData[i].id === urlObject.origin) {
          taggedData[i].tag = tag;
          await chrome.storage.local.set({ taggedURLs: taggedData });
          return;
        }
      }

      taggedData.push({
        website: urlObject.origin,
        tag: tag,
        id: urlObject.origin,
      });
      await chrome.storage.local.set({ taggedURLs: taggedData });
      setWebsite("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePage = () => {
    setPage(1);
  };

  const handleTagChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTag(parseInt(event.target.value));
  };

  return (
    <div className="tag-input-container">
      <label className="tag-input-label">{label}</label>
      <div className="tag-input-container-inputs">
        <input
          className="tag-input-container-field"
          type={"text"}
          placeholder={placeholder}
          value={website}
          onChange={handleChange}
        />
        <select
          className="tag-input-container-select"
          onChange={handleTagChange}
          defaultValue="1"
        >
          <option value="1">Good</option>
          <option value="2">Bad</option>
          <option value="3">Dangerous</option>
        </select>
      </div>
      <button className="tag-button" onClick={handleTag}>
        Tag the website
      </button>
      <button className="show-button" onClick={handleChangePage}>
        Show all websites
      </button>
    </div>
  );
};

export default Input;
