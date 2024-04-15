import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Essentials from "./pages/Essentials/Essentials";
import FAQSection from "./components/FAQSection/FAQSection";
import AlertInformation from "./pages/AlertInformation/AlertInformation";

export default function App() {
  return (
    <div className="app_container">
      <div className="app_container__blue_line"></div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/essentials" element={<Essentials></Essentials>}></Route>
        <Route path="/alerts" element={<AlertInformation></AlertInformation>}></Route>
      </Routes>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </div>
  );
}
