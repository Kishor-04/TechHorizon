import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const faqs = [ { question: "What is the mode of the Code Fest?", answer: "The Code Fest is conducted in both online and offline modes." }, 
  { question: "Who can participate?", answer: "Students from any college or university can participate." }, 
  { question: "Can a pass out student participate in the event?", answer: "No, only currently pursuing degree students can participate." }, 
  { question: "How much is the entry fee and the last date for registration?", answer: "The entry fee is ₹2000 and registration deadline is 7th of February." }, 
  { question: "Which payment methods are accepted?", answer: "We accept payments via credit card, debit card, and UPI, the selected teams after pre-evaluation has to pay." }, 
  { question: "Will a dataset be provided?", answer: "Yes, a dataset will be provided for the Code Fest." }, 
  { question: "What is the selection criteria?", answer: "Participants will be selected based on their project proposal and experience." }, 
  { question: "When and where will the final results be announced?", answer: "The final results will be announced on the last day of the event i.e. 28th of February during the awards and closing ceremony as well as on our website." }, 
  { question: "What is the cancellation policy like?", answer: "Participants can cancel their registration up to one week before the event for a full refund." }, 
  { question: "Having another question that is not answered in the FAQs?", answer: "Feel free to contact us at support@techhorizon.com." },];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`bg-tertiary p-5 rounded-lg mb-4 transition-all duration-300 ${isOpen ? "max-h-full" : "max-h-24 overflow-hidden"}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
        <h4 className="text-white font-semibold">{faq.question}</h4>
        {isOpen ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
      </div>
      <div className={`text-secondary mt-4 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 max-h-0"}`}>
        {isOpen && <p>{faq.answer}</p>}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="bg-primary py-10 px-5 rounded-lg shadow-lg">
      <motion.div variants={textVariant()} className="text-center mb-8">
        <p className={`${styles.sectionSubText}`}>Our FAQs</p>
        <h2 className="relative font-bold text-[60px] tracking-wide text-center">
        All You Need <span className="gradient-text-purple">To Know</span>
</h2>      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openFAQ === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(FAQ, "faq");
