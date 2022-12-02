import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Sponsors() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });

      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });

      animation3.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: "-20vw",
      });
      animation2.start({
        opacity: 0,
        y: "20vw",
      });
      animation3.start({
        opacity: 0,
        y: "-10vw",
        scale: 0.5,
      });
    }
  });
  return (
    <motion.Reactdiv
      id="sponsors"
      className="flex items-center justify-center md:h-[1000px] sm:h-[1500px] h-[2500px] w-screen bg-[#faf3ea]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#faf3ea] h-100"
        ref={ref}
      >
        <motion.h1
          className="text-[#001233] text-5xl text-center mb-10 bg-[#faf3ea]"
          animate={animation3}
        >
          Sponsors
        </motion.h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4">
          <motion.div
            className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            animate={animation}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            animate={animation2}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            animate={animation}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[300px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            animate={animation2}
          ></motion.div>
        </div>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Sponsors;
