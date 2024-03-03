import "./ConfigureOptions.scss";

interface ConfigureOptionsProps {
  isFocused: boolean;
  selectedOption: number;
  setSelectedOption: (index: number) => void;
}

export default function ConfigureOptions({ isFocused, selectedOption, setSelectedOption }: ConfigureOptionsProps) {
  const options = ["Websites", "Settings"];


  return (
    <div className="configure_options" id={isFocused ? "good" : "bad"}>
      {options.map((option, index) => {
        if (selectedOption === index) {
          return (
            <div
              key={index}
              className="configure_options__option selected"
              onClick={() => {
                setSelectedOption(index);
              }}
            >
              {option}
            </div>
          );
        }
        return (
          <div
            key={index}
            className="configure_options__option"
            onClick={() => {
              setSelectedOption(index);
            }}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}
