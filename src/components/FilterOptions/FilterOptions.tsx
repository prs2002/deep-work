import { useState } from "react";
import "./FilterOptions.scss";
import Dropdown from "../Dropdown/Dropdown";
import { DropdownOptions } from "../../types/DropdownOptions";

interface FilterOptionsProps {
  setFilter: (filter: string) => void;
}

export default function FilterOptions({ setFilter }: FilterOptionsProps) {
  const filterOptions = ["dailyTime", "weeklyTime", "monthlyTime"];
  const dropdownOptions: DropdownOptions[] = [{ id: "0", value: "Today" }, {id:"1", value: "Weekly"}, {id: "2", value: "Monthly"}];
  const [activeOption, setActiveOption] = useState<DropdownOptions>(dropdownOptions[0]);

  function handleFilter(option : DropdownOptions) {
    setActiveOption(option);
    setFilter(filterOptions[parseInt(option.id)])
  }
  
  return (
    <div className="filter_options">
      <div className="filter_options__left">Daily Analysis</div>
      <div className="filter_options__right">
        <Dropdown
          activeOption={activeOption}
          dropdownOptions={dropdownOptions}
          setActiveOption={handleFilter}
        ></Dropdown>
      </div>
    </div>
  );
}
