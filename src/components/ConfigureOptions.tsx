import "./ConfigureOptions.scss";

interface ConfigureOptionsProps {
  isFocused: boolean;
  selectedOption: number;
  setSelectedOption: (index: number) => void;
  options : string[];
}

export default function ConfigureOptions({
  isFocused,
  selectedOption,
  setSelectedOption,
  options
}: ConfigureOptionsProps) {

  return (
    <div className="configure_options" id={isFocused ? "good" : "bad"}>
      {options.map((option, index) => {
        if (selectedOption === index) {
          return (
            <div
              key={index}
              className="configure_options__option selected"
              id={isFocused ? "good" : "bad"}
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
            id={isFocused ? "good" : "bad"}
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
