import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.Reactdiv
      id="sponsors"
      className="flex items-center justify-center md:h-[1000px] sm:h-[1500px] h-[2500px] w-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white h-100"
      >
        <h1 className="text-[#001233] text-5xl text-center mb-10 bg-white">
          About
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4">
          {/* <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
          ></motion.div> */}
        </div>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default About;
