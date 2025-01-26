import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Sponsors = () => {
  return (
    <>
      {/* Left-Aligned Title with Line */}
      <motion.div variants={textVariant()} className="mb-12">
        <p className={`${styles.sectionSubText} text-left`}>Our Valuable</p>
        <h2 className="relative font-bold text-[40px] tracking-wide text-left md:text-[60px]">
          Sponsors
          <span className="gradient-text-purple ml-2">2025</span>
        </h2>
        {/* Line under the title */}
        <div className="w-[120px] h-[4px] bg-gradient-to-r from-purple-500 to-indigo-700 mt-2"></div>
      </motion.div>

      {/* Description Section */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left"
      >
        We extend our heartfelt gratitude to our esteemed sponsors for their
        invaluable support in making TechHorizon 2025 a grand success. Their
        contribution empowers innovation and growth within our community.
      </motion.p>

      {/* Sponsors Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="w-28 h-28 mb-4">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-lg font-medium text-gray-800">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Sponsors, "sponsors");
