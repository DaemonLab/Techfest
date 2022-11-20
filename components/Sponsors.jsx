import React from "react";
import { motion } from "framer-motion";

function Sponsors() {
  return (
    <motion.Reactdiv
    id="sponsors"
      className="flex items-center justify-center h-screen w-screen snap-mandatory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-white text-5xl text-center mb-10">Our Sponsors</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4">
          <motion.div className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white" whileHover={{scale: 1.05}}>
          </motion.div>
          <motion.div className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white" whileHover={{scale: 1.05}}>
          </motion.div>
          <motion.div className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white" whileHover={{scale: 1.05}}>
          </motion.div>
          <motion.div className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white" whileHover={{scale: 1.05}}>
          </motion.div>
          <motion.div className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white" whileHover={{scale: 1.05}}>
          </motion.div>
        </div>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Sponsors;
