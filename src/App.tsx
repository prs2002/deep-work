import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import TagWebsitePage from "./pages/TagWebsitePage";

function App() {
  const [page, setPage] = useState<number>(0);
  return (
    <div className="app">
      {page === 0 ? <MainPage setPage={setPage}></MainPage> : <TagWebsitePage></TagWebsitePage>}
    </div>
  );
}

export default App;
