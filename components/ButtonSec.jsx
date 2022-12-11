import React from "react";
import { motion } from "framer-motion";

function ButtonSec(props) {
  return (
    <motion.button
      className="bg-[#FF595A] py-4 px-8 text-white opacity-[0.8] font-bold"
      style={{
        background: "rgb(11,11,15)",
        background:
          "linear-gradient(90deg, rgba(11,11,15,1) 0%, rgba(37,36,64,1) 50%, rgba(65,85,89,1) 100%)",
        fontFamily: ["JetBrains Mono", "monospace"],
        fontSize: "20px",
        lineHeight: "1.5",
        clipPath:
          "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
      }}
      whileHover={{
        scale: 1.2,
        backgroundColor: "white",
        color: "black",
        transition: { duration: 0.2 },
      }}
    >
      {props.value}
    </motion.button>
  );
}

export default ButtonSec;
