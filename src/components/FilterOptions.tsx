import { useState } from "react";
import "./FilterOptions.scss";


interface FilterOptionsProps {
  setFilter: (filter: string) => void;
}


export default function FilterOptions({setFilter} : FilterOptionsProps) {
  const options = ["Today", "This Week", "This Month"];
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const filterOptions = ["dailyTime", "dailyAverage", "webTime"];

  return (
    <div className="filter_options">
      {options.map((option, index) => {
        if (selectedOption === index) {
          return (
            <div
              key={index}
              className="filter_options__option selected"
              onClick={() => {
                setSelectedOption(index);
                setFilter(filterOptions[index]);
              }}
            >
              {option}
            </div>
          );
        }
        return (
          <div
            key={index}
            className="filter_options__option"
            onClick={() => {
              setSelectedOption(index);
              setFilter(filterOptions[index]);
            }}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}
