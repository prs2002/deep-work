import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className="app_container">
      <div className="app_container__blue_line"></div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}
