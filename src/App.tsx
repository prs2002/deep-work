import { useState } from "react";
import "./App.css";
import Configure from "./pages/Configure";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
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
