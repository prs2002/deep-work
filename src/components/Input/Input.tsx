import { ChangeEvent } from "react";
import "./Input.scss";

interface InputProps {
  type: string;
  placeholder: string;
  input: string;
  setInput: (input: string) => void;
  className?: string;
  disablePaste?: boolean;
  label?: string;
}

const Input = ({
  type,
  placeholder,
  input,
  setInput,
  className,
  disablePaste,
  label,
}: InputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  if (disablePaste) {
    return (
      <input
        className={`input_box ${className}`}
        type={type}
        placeholder={placeholder}
        value={input}
        onChange={handleChange}
        onPaste={(e) => e.preventDefault()}
      ></input>
    );
  }

  if (label) {
    return (
      <div className="input_label">
        <label>{label}</label>
        <input
          className={`input_box ${className}`}
          type={type}
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        ></input>
      </div>
    );
  }

  return (
    <input
      className={`input_box ${className}`}
      type={type}
      placeholder={placeholder}
      value={input}
      onChange={handleChange}
    ></input>
  );
};

export default Input;
