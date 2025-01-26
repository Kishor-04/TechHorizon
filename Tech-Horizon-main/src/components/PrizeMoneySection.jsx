// src/components/PrizeMoneySection.jsx
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const prizes = [
  {
    title: "₹ 50,000",
    icon: "🏆", // Trophy icon for 1st Prize
    size: "big", // Biggest card
    color: "gold", // Gold color for 1st prize
  },
  {
    title: "₹ 35,000",
    icon: "🏆", // Trophy icon for 2nd Prize
    size: "medium", // Slightly smaller
    color: "silver", // Silver color for 2nd prize
  },
  {
    title: "₹ 5,000",
    icon: "🏆", // Trophy icon for 3rd Prize
    size: "small", // Same size for 3rd, 4th, 5th
    color: "bronze", // Bronze color for 3rd prize
  },
  {
    title: "₹ 5,000",
    icon: "🏆", // Trophy icon for 4th Prize
    size: "small",
    color: "bronze", // Bronze color for 4th prize
  },
  {
    title: "₹ 5,000",
    icon: "🏆", // Trophy icon for 5th Prize
    size: "small",
    color: "bronze", // Bronze color for 5th prize
  },
];

const PrizeCard = ({ title, icon, size, color }) => {
  // Dynamic class for sizes
  const sizeClass =
    size === "big"
      ? "w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[425px] lg:h-[425px]"
      : size === "medium"
      ? "w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[325px] lg:h-[325px]"
      : "w-[175px] h-[175px] sm:w-[225px] sm:h-[225px] lg:w-[275px] lg:h-[275px]";

  // Dynamic class for color and border/shadow with less spread
  const colorClass =
    color === "gold"
      ? "hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-200 border-2 border-solid border-yellow-400 shadow-md shadow-yellow-200"
      : color === "silver"
      ? "hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 border-2 border-solid border-gray-500 shadow-md shadow-gray-300"
      : "hover:from-orange-300 hover:via-orange-400 hover:to-orange-500 border-2 border-solid border-orange-400 shadow-md shadow-orange-300"; // Lighter bronze

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)} // Changed animation direction
      className={`bg-transparent p-[2px] rounded-[20px] transition-all duration-300 ${colorClass} ${sizeClass}`}
    >
      <div className="bg-transparent rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-full">
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex justify-center items-center text-6xl sm:text-8xl">{icon}</div>
        <h3 className="text-white text-[16px] sm:text-[20px] font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const PrizeMoneySection = () => {
  return (
    <>
      {/* Title Section with Gradient Line */}
      <motion.div variants={textVariant()} className="mb-12 text-center">
        <p className={styles.sectionSubText}>What's at Stake?</p>
        <h2 className="relative font-bold text-[40px] sm:text-[60px] tracking-wide">
          Prize <span className="gradient-text-purple">Money</span>
        </h2>
        {/* Line under the title */}
        <div className="w-[120px] h-[4px] bg-gradient-to-r from-purple-500 to-indigo-700 mt-2 mx-auto"></div>
      </motion.div>

      {/* Description Section */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] leading-[24px] sm:leading-[30px] text-center mx-auto max-w-3xl"
      >
        Participants can win exciting prizes! Showcase your talent and grab one
        of these amazing rewards!
      </motion.p>

      {/* Layout */}
      <div className="mt-20 flex flex-col items-center gap-10">
        {/* First Row: First and Second Prizes */}
        <div className="flex flex-wrap justify-center gap-8">
          {prizes
            .filter((prize) => prize.size === "big" || prize.size === "medium")
            .map((prize) => (
              <PrizeCard key={prize.title} {...prize} />
            ))}
        </div>

        {/* Second Row: Third, Fourth, Fifth Prizes */}
        <div className="flex flex-wrap justify-center gap-8">
          {prizes
            .filter((prize) => prize.size === "small")
            .map((prize) => (
              <PrizeCard key={prize.title} {...prize} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(PrizeMoneySection, "prizes");
