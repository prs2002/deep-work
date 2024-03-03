import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
}
