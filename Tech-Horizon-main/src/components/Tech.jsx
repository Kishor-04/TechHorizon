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
        <h2 className="relative font-bold text-[60px] tracking-wide text-left">
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
        invaluable support in making TechHorizon 2024 a grand success. Their
        contribution empowers innovation and growth within our community.
      </motion.p>

      {/* Sponsors Section */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            key={technology.name}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="w-28 h-28 mb-4">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-lg font-medium text-white">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Sponsors, "sponsors");
