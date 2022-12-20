import React from "react";
import { motion } from "framer-motion";

function CardThree() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px 0px #FFFFFF" }}
    >
      <img
        className="object-fill w-full h-49"
        src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
        alt="Flower and sky"
      />
      <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
          This is the title
        </h4>
        <p className="leading-normal text-gray-100">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
          tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p>
        <button className="three">
          <a href="https://www.codepen.io/jcoulterdesign" target="_blank">
            <b>.</b>
          </a>
        </button>
      </div>
    </motion.div>
  );
}

export default CardThree;
