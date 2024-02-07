import "./SearchBar.css";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function SearchBar({searchValue, setSearchValue} : SearchBarProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a website"
        className="search-bar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}
