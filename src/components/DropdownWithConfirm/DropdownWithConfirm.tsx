import { RxCross1 } from "react-icons/rx";
import useToggle from "../../hooks/useToggle";
import { DropdownOptions } from "../../types/DropdownOptions";
import "./DropdownWithConfirm.scss";
import { FaAngleDown, FaCheck } from "react-icons/fa";

interface DropdownProps {
  dropdownOptions: DropdownOptions[];
  activeOption: DropdownOptions;
  setActiveOption: (option: DropdownOptions) => void;
  handleCancel: () => void;
  handleTagChange: () => void;
}

export default function DropdownWithConfirm({
  dropdownOptions,
  activeOption,
  setActiveOption,
  handleCancel,
  handleTagChange
}: DropdownProps) {
  const [isActive, setIsActive] = useToggle(false);
  const [isActivated, setIsActivated] = useToggle(false);
  const handleOptionSelect = (option: DropdownOptions) => {
    setActiveOption(option);
    setIsActive();
  };

  const handleDropdownClick = () => {
    setIsActive();
    !isActivated && setIsActivated();
  }

  const onCancel = () => {
    isActive && setIsActive();
    setIsActivated();
    handleCancel();
  }

  const onConfirm = () => {
    isActive && setIsActive();
    setIsActivated();
    handleTagChange();
  }


  return (
    <div className="dropdown_with_confirm__container">
    <div className="dropdown_with_confirm" id={isActive ? "active" : ""}>
      <div className="dropdown_with_confirm__active_option" onClick={handleDropdownClick}>
        {isActive ? "Select" : activeOption.value}
        <FaAngleDown></FaAngleDown>
      </div>
      <div className="dropdown_with_confirm__options" id={isActive ? "show" : ""}>
        {dropdownOptions.map((option, index) => {
          if (option.value === "Untagged") return null;
          return (
            <div
              className="dropdown_with_confirm__options__option"
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
    {isActivated && (
        <>
          <div
            className="dropdown_with_confirm__confirm"
            onClick={onConfirm}
          >
            <FaCheck className="dropdown_with_confirm__confirm__icon"></FaCheck>
          </div>
          <div
            className="dropdown_with_confirm__cancel"
            onClick={onCancel}
          >
            <RxCross1></RxCross1>
          </div>
        </>
      )}
      </div>
  );
}
