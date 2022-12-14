import React from "react";
import { motion, useAnimation } from "framer-motion";

function CardTwo(props) {
  const animation = useAnimation();
  return (
    <motion.div
      className="flux relative overflow-hidden rounded-lg shadow-lg cursor-pointer md:w-[30vw] sm:w-[45vw] xsm:w-[90vw]"
      whileHover={{ y: -4, boxShadow: "0px 0px 15px 0px #FFFFFF" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        className="object-fill w-full h-[500px]"
        src="https://wallpaper.dog/large/10702676.jpg"
        // style={{ width: "100%", height: "400px" }}
        alt="Flower and sky"
      />
      {/* <div className="bg-red w-full h-49">hello</div> */}
      <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50 w-[100%] block">
        <h4
          className="mb-3 text-xl font-semibold tracking-tight text-white w-100 block uppercase"
          style={{
            fontFamily: ["JetBrains Mono", "monospace"],
            fontSize: "25px",
            lineHeight: "1.5",
          }}
        >
          {props.details.name}
        </h4>
        {/* <p className="leading-normal text-gray-100">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
          tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p> */}
        <div className="grid grid-cols-2 gap-8">
          <button
            className="four text-black w-100"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "20px",
              lineHeight: "1.5",
              clipPath:
                "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
            }}
          >
            <b>Details</b>
          </button>
          <button
            className="one text-black w-100"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "20px",
              lineHeight: "1.5",
              clipPath:
                "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
            }}
          >
            <b>Register</b>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CardTwo;
