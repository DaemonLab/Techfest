import React from "react";
import { motion } from "framer-motion";

function Button(props) {
  return (
    <motion.button
      className="bg-[#FF595A] py-4 px-8 text-[#001233] opacity-[0.8] font-bold"
      whileHover={{
        scale: 1.2,
        backgroundColor: "white",
        transition: { duration: 0.2 },

      }}
    >
      {props.value}
    </motion.button>
  );
}

export default Button;
