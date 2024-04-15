import "./TextSection.scss";

interface TextSectionProps {
  text: JSX.Element;
}

export default function TextSection({text} : TextSectionProps) {
  return (
    <div className="text_section">
      {text}
    </div>
  );
}
