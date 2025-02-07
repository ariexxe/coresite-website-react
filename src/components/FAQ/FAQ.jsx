import { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";
import FAQItem from "./FAQItem";
import faqImage from "../../assets/faq-image.jpg";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      question: "What makes CoreSite Different?",
      answer: "Your answer here",
    },
    {
      question: "How long does a typical project take?",
      answer: "Your answer here",
    },
    {
      question: "Do you offer custom service?",
      answer: "Your answer here",
    },
  ];

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-container">
      <motion.div
        className="faq-content"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>FAQs</h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Have questions? Here you'll find answers that address common concerns to build trust and save time.
        </motion.p>

        <motion.div
          className="search-bar"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Search CoreSite help"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </motion.div>

        <motion.div
          className="faq-items"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="faq-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src={faqImage} alt="FAQ illustration" />
      </motion.div>
    </div>
  );
};

export default FAQ;
