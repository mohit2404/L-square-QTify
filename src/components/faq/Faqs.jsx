import { useState } from "react";
import styles from "./Faq.module.css"; // Import your module.css

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Qtify free to use?",
      answer: "Yes! It is 100% free, and has 0% ads!",
    },
    {
      question: "Can I download and listen to songs offline?",
      answer:
        "Sorry, unfortunately we don't provide the service to download any songs.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>FAQs</h2>

      <div className={styles.faqSection}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqWrapper}>
            <button className={styles.button} onClick={() => toggleFaq(index)}>
              <h3 className={styles.heading3}>{faq.question}</h3>
              <span className={styles.span}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && <p className={styles.para}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
