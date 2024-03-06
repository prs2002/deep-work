import { useState } from "react";
import MenuOptions from "./MenuOptions";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.scss";

interface NavbarProps {
  text: string;
  isFocused: boolean;
}

export default function Navbar({ text, isFocused }: NavbarProps) {
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1 id={isFocused ? "good" : "bad"}>{text}</h1>
      </div>
      <div className="navbar__right">
        <div
          className="navbar__right__menu_expand"
          id={isMenuExpanded ? "show" : ""}
        >
          <MenuOptions isFocused={isFocused}></MenuOptions>
        </div>
        <div
          className="navbar__right__menu_button"
          id={isMenuExpanded ? "cross" : ""}
          onClick={() => {
            setIsMenuExpanded((prev) => !prev);
          }}
        >
          {isMenuExpanded ? <RxCross1></RxCross1> : "Menu"}
        </div>
      </div>
    </div>
  );
}
