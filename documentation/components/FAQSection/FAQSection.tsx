import FAQItem from "../FAQItem/FAQItem";
import "./FAQSection.scss";

export default function FAQSection() {
  const faqItems = [
    {
      question: "Why do my websites keep getting blocked?",
      answer: (
        <>
          This happens when you have <strong>Block Distracting Sites</strong>{" "}
          enabled in your settings. This setting automatically blocks websites
          to get to focus after some iterative alerts.,
        </>
      ),
    },
    {
      question: "Why do my websites keep getting blocked?",
      answer: (
        <>
          This happens when you have <strong>Block Distracting Sites</strong>{" "}
          enabled in your settings. This setting automatically blocks websites
          to get to focus after some iterative alerts.,
        </>
      ),
    },
    {
      question: "Why do my websites keep getting blocked?",
      answer: (
        <>
          This happens when you have <strong>Block Distracting Sites</strong>{" "}
          enabled in your settings. This setting automatically blocks websites
          to get to focus after some iterative alerts.,
        </>
      ),
    },
  ];

  return (
    <div className="faq_section">
      <div className="faq_section__title">
        <div className="faq_section__title__blue">Frequently Asked</div>
        <div className="faq_section__title__black">Questions</div>
      </div>
      <div className="faq_section__items">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item}></FAQItem>
        ))}
      </div>
    </div>
  );
}
