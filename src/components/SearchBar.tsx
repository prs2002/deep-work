import "./SearchBar.css";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  setPage: (page: number) => void;
}

export default function SearchBar({searchValue, setSearchValue, setPage} : SearchBarProps) {

  const handleChangePage = () => {
    setPage(1);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a website"
        className="search-bar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="page-button" onClick={handleChangePage}>Go back</button>
    </div>
  );
}
