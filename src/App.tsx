import { useState } from "react";
import "./App.css";
import Configure from "./pages/Configure";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  // const [page, setPage] = useState<number>(0);
  // const pageOptions = [
  //   <Home></Home>,
  //   <SummaryPage setPage={setPage}></SummaryPage>,
  //   <MainPage setPage={setPage}></MainPage>,
  //   <TagWebsitePage setPage={setPage}></TagWebsitePage>,
  //   <PromptSettingPage setPage={setPage}></PromptSettingPage>,
  //   <BlockPage setPage={setPage}></BlockPage>,
  //   <AchievementsPage setPage={setPage}></AchievementsPage>,
  // ];
  const [isFocused, setIsFocused] = useState<boolean>(true);
  return (
    <div className="app" id={isFocused ? "good" : "bad"}>
      <div className="app__top_bar" id={isFocused ? "good" : "bad"}></div>
      <Routes>
        <Route
          path="/"
          element={
            <Home isFocused={isFocused} setIsFocused={setIsFocused}></Home>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <Home isFocused={isFocused} setIsFocused={setIsFocused}></Home>
          }
        ></Route>
        <Route
          path="/configure"
          element={<Configure isFocused={isFocused}></Configure>}
        ></Route>
        <Route
          path="/profile"
          element={<Profile isFocused={isFocused}></Profile>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
