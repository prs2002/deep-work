import { useState } from "react";
import "./FAQItem.scss";
import { FaAngleDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="faq_item">
      <div className="faq_item__question" onClick={toggleOpen}>
        {question} <FaAngleDown></FaAngleDown>
      </div>
      <div className={"faq_item__answer " + (isOpen ? "open" : "")}>
        {answer}
      </div>
    </div>
  );
}
