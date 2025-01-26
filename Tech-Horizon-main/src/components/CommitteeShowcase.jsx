// src/components/CommitteeShowcase.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const committeeMembers = [
  {
    name: "KRISHNA PATEL",
    role: "Organizing Head",
    description: "Leading the entire event with a focus on smooth execution.",
    icon: "🚀", // Changed icon
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "ISHWARI SANGLE",
    role: "Organizing Co-Head",
    description: "Supports with operations and manages sub-teams for smooth event execution.",
    icon: "🤝",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "RUSHIKESH PARKHE",
    role: "Technical Head",
    description: "Overseeing and leading all technical aspects for smooth execution.",
    icon: "💻",
    linkedin: "https://www.linkedin.com/in/alicejohnson",
  },
  {
    name: "VAIBHAV SHINDE",
    role: "Treasurer",
    description: "Managing the financial aspects of the event.",
    icon: "💰",
    linkedin: "https://www.linkedin.com/in/bobbrown",
  },
  {
    name: "JAY KOTKAR",
    role: "Social Media and Marketing Head",
    description: "Handling the social media and marketing strategies.",
    icon: "📢",
    linkedin: "https://www.linkedin.com/in/carolwhite",
  },
  {
    name: "ADITYA SONWANE",
    role: "Food and Logistics Head",
    description: "Ensuring the catering and logistics are in place.",
    icon: "🍽️",
    linkedin: "https://www.linkedin.com/in/evablue",
  },
  {
    name: "SWARA SATHE",
    role: "Event Management Head",
    description: "Responsible for the event decorations and aesthetics.",
    icon: "🎨",
    linkedin: "https://www.linkedin.com/in/davegreen",
  },
];


const CommitteeCard = ({ name, role, description, icon, linkedin }) => (
  <motion.div className='bg-[] p-8 rounded-3xl w-[450px] flex-shrink-0 mx-4 border-2 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg hover:shadow-indigo-500 transition-all duration-300'>
    <div className='flex justify-center items-center text-4xl mb-4'>{icon}</div>
    <div className='text-center'>
      <h3 className='text-white font-semibold text-[26px]'>{name}</h3>
      <p className='text-secondary text-[18px]'>{role}</p>
      <p className='mt-2 text-white text-[16px]'>{description}</p>
      <div className='flex justify-center mt-4 space-x-4'>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-blue-500'>
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  </motion.div>
);

const CommitteeShowcase = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -3200],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 120,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full py-10">
        <motion.div variants={textVariant()} className="text-center mb-8">
          <p className={styles.sectionSubText}>Meet the Team</p>
          <h2 className='relative font-bold text-[50px] tracking-wide text-center'>Meet Our <span className="gradient-text-purple">Committee</span></h2>
        </motion.div>
      </div>
      <div className="w-full py-14 flex items-center">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {committeeMembers.map((member, index) => (
            <CommitteeCard key={index} {...member} />
          ))}
          {committeeMembers.map((member, index) => (
            <CommitteeCard key={index} {...member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(CommitteeShowcase, "committee");
