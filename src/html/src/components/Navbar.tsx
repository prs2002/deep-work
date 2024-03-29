import "./Navbar.scss";
import { FaBars } from "react-icons/fa6";
import logo from "../../../images/recenter_logo.png";
import { IoClose } from "react-icons/io5";
import useToggle from "../../../hooks/useToggle";

export default function Navbar() {
  const [menuExpanded, setMenuExpanded] = useToggle(false);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar__left__text">Recenter</div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__items">
          <a href="#features" className="navbar__right__items__item" id="item">
            Features
          </a>
          <div className="navbar__right__items__item" id="item">
            Download
          </div>
          <div className="navbar__right__items__item" id="icon">
            <FaBars onClick={setMenuExpanded}></FaBars>
          </div>
        </div>
      </div>
      <div className={"navbar__menu_expanded" + (menuExpanded ? " show" : "")}>
        <div className="navbar__menu_expanded__title">
          <div className="navbar__menu_expanded__title__left">Recenter</div>
          <div className="navbar__menu_expanded__title__right">
            <IoClose onClick={setMenuExpanded}></IoClose>
          </div>
        </div>
        <div className="navbar__menu_expanded__items">
          <a href="#home" className="navbar__menu_expanded__items__item">
            Home
          </a>
          <a href="#features" className="navbar__menu_expanded__items__item">
            Features
          </a>
          <a href="#home" className="navbar__menu_expanded__items__item">
            Download
          </a>
        </div>

        <div className="navbar__menu_expanded__line"></div>
      </div>
    </div>
  );
}
