import useToggle from "../../hooks/useToggle";
import { DropdownOptions } from "../../types/DropdownOptions";
import "./Dropdown.scss";
import { FaAngleDown } from "react-icons/fa";

interface DropdownProps {
  dropdownOptions: DropdownOptions[];
  activeOption: DropdownOptions;
  setActiveOption: (option: DropdownOptions) => void;
  className?: string;
}

export default function Dropdown({
  dropdownOptions,
  activeOption,
  setActiveOption,
  className
}: DropdownProps) {
  const [isActive, setIsActive] = useToggle(false);

  const handleOptionSelect = (option: DropdownOptions) => {
    setActiveOption(option);
    setIsActive();
  };

  const handleDropdownClick = () => {
    setIsActive();
  }


  return (
    <div className={`dropdown ${className}`} id={isActive ? "active" : ""}>
      <div className="dropdown__active_option" onClick={handleDropdownClick}>
        {isActive ? "Select" : activeOption.value}
        <FaAngleDown></FaAngleDown>
      </div>
      <div className="dropdown__options" id={isActive ? "show" : ""}>
        {dropdownOptions.map((option, index) => {
          if (option.value === "Untagged") return null;
          return (
            <div
              className="dropdown__options__option"
              key={index}
              onClick={(e) => {
                handleOptionSelect(option);
              }}
            >
              {option.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
