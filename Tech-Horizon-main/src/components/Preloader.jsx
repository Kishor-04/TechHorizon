import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full"
      />
      <span className="ml-4 text-white text-lg">Loading...</span>
    </div>
  );
};

export default Preloader;