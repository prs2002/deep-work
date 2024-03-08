import "./Navbar.scss";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">Recenter</div>
      <div className="navbar__right">
        <div className="navbar__right__items">
          <a href="#features" className="navbar__right__items__item" id="item">
            Features
          </a>
          <div className="navbar__right__items__item" id="item">
            Download
          </div>
          <div className="navbar__right__items__item" id="icon">
            <FaBars></FaBars>
          </div>
        </div>
      </div>
    </div>
  );
}
