import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Center-Aligned Title with Line */}
      <motion.div variants={textVariant()} className="mb-12">
        <p className={`${styles.sectionSubText} text-center mb-4`}>
          Tech-Horizon. Code the Stars!
        </p>
        <h2 className="relative font-bold text-[50px] tracking-wide text-center md:text-[40px] sm:text-[30px]">
          About{" "}
          <span className="gradient-text-purple">TechHorizon</span>
        </h2>
        {/* Line under the title */}
        <div className="w-[120px] h-[4px] bg-gradient-to-r from-purple-500 to-indigo-700 mt-2 mx-auto"></div>
      </motion.div>

      {/* Description Section */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
      >
        Welcome to the TechHorizon Codefest at K. K. Wagh Institute of Engineering Education & Research, a dynamic 2-day event designed to inspire innovation and collaboration among students. Participants will tackle real-world challenges while enhancing their programming, problem-solving, and critical thinking skills.

        All details about registration, schedule, and prizes are available on this site. Stay tuned for updates!
      </motion.p>

      {/* Service Cards Section */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
