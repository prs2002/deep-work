import { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  label: string;
  placeholder: string;
  buttonText: string;
  handleInput: (input: string) => void;
  input: string;
  setInput: (input: string) => void;
}

const Input = ({
  label,
  placeholder,
  buttonText,
  handleInput,
  input,
  setInput,
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    handleInput(input);
  };

  return (
    <div className="normal-input-container">
      <label className="normal-input-label">{label}</label>
      <div className="normal-input-container-inputs">
        <input
          className="normal-input-container-field"
          type={"text"}
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        />
        <button
          className="normal-input-container-button"
          onClick={handleButtonClick}
          defaultValue="1"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Input;
