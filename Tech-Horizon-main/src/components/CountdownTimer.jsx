import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ServiceCard = ({ title, number }) => (
  <motion.div 
    className='green-pink-gradient p-[1px] rounded-[40px] shadow-card'
    whileHover={{ scale: 1.1 }}
  >
    <div className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-center items-center flex-col h-[150px] w-[150px] sm:h-[190px] sm:w-[190px]'>
      <h3 className='text-white text-[30px] sm:text-[40px] font-bold text-center'>
        {number}
      </h3>
      <h3 className='text-white text-[16px] sm:text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-27T00:00:00Z").getTime(); // Target date for 27th February 2025
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  if (timeRemaining < 0) {
    return <h2 className='text-white'>The countdown is over!</h2>;
  }

  const timeUnits = [
    { title: "DAYS", number: days },
    { title: "HOURS", number: hours },
    { title: "MINUTES", number: minutes },
    { title: "SECONDS", number: seconds },
  ];

  return (
    <div className='mt-10 sm:mt-20 flex flex-wrap gap-5 sm:gap-10 justify-center'>
      {timeUnits.map((unit, index) => (
        <ServiceCard key={index} title={unit.title} number={unit.number} />
      ))}
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div className="text-center relative" variants={textVariant()}>
        {/* Subtitle */}
        <p className={`${styles.sectionSubText} theme-subtitle`}>
          Countdown to the start of the cosmic adventure
        </p>

        {/* Title */}
        <h2 className="relative font-bold text-[40px] sm:text-[60px] tracking-wide flex justify-center items-center">
          Time is{" "}
          <span className="gradient-text-purple ml-2">
            Ticking
          </span>
        </h2>

        {/* Animated Horizontal Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="mt-4 mx-auto h-[4px] bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900"
          style={{ maxWidth: "200px" }}
        />
      </motion.div>
      <CountdownTimer />
    </>
  );
};

export default SectionWrapper(About, "about");