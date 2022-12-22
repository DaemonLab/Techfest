import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { GradientTexture, Polyhedron } from "@react-three/drei";
import { yellow } from "@mui/material/colors";
import { PolyhedronGeometry } from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <motion.div
      className="flux z-auto grid bg-[#111b53] sm:h-auto xsm:h-auto w-full md:grid-cols-4 sm:grid-cols-1 xsm:grid-cols-1 overflow-hidden snap-mandatory before:rounded-t-[80px solid white] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="home1"
      style={{
        fontFamily: ["JetBrains Mono", "monospace"],
        fontWeight: "lighter",
        lineHeight: "1.5",
      }}
    >
      <div className="flux w-full bg-[#111b53] z-50 pb-10">
        <div className="text-[#111111] text-4xl rounded-full bg-slate-600 w-[150px] h-[150px] leading-[150px] text-center mx-auto mt-[50px]">
          <h1>L</h1>
        </div>

        <div className="h-[30px] mt-[30px] ">
          <div className="h-[30px] text-xl mx-auto text-center">
          {/* <FontAwesomeIcon
            icon={faPhone}
            className="text-3xl mr-[50px]"
          ></FontAwesomeIcon> */}
          9898989898
          </div>
         
        </div>
        <div className="h-[30px] mt-[20px]">
        <div className="h-[30px] text-xl text-center">
          {/* <FontAwesomeIcon
            icon={faAddressBook}
            className="text-3xl mr-[50px]"
          ></FontAwesomeIcon> */}
          IIT INDORE
          </div>
         
        </div>
      </div>
      <div className="bg-[#111b53] w-full z-50 pb-10">
        <h1 className="text-4xl ml-[45px] mt-[40px] font-bold">MORE</h1>
        <a
          href="https://www.google.com"
          className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block m-[4px] font-bold w-full"
        >
          {/* <FontAwesomeIcon
            icon={faTwitter}
            className="text-3xl text-black"
          ></FontAwesomeIcon> */}
          Home
        </a>

        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon icon={faFacebook} className="text-3xl">
            {" "}
          </FontAwesomeIcon> */}
          About Us
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Events
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Sponsors
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Fluxus Tech Exihibits
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          SnT @IITI
        </a>
      </div>
      <div className="bg-[#111b53] w-full z-50 pb-10">
        <h1 className="text-4xl ml-[45px] mt-[40px] font-bold">FOLLOW</h1>
        <a
          href="https://www.google.com"
          className="text-xl  hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          {/* <FontAwesomeIcon
            icon={faTwitter}
            className="text-2xl mr-[10px] align-middle rounded-full p-[5px]  hover:bg-[#55ACEE] hover:text-white"
          ></FontAwesomeIcon> */}
          Twitter
        </a>

        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
        {/* <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl mr-[10px] align-middle rounded-full p-[5px]  hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] hover:text-white"
          >
          </FontAwesomeIcon> */}
          Instagram
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
        {/* <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl mr-[10px] align-middle rounded-full p-[6px]  hover:bg-[#007bb5] hover:text-white"
          ></FontAwesomeIcon> */}
          LinkedIn
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
        {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-2xl mr-[10px] align-middle rounded-full p-[5px] hover:bg-[#7289d9] hover:text-white "
          ></FontAwesomeIcon> */}
          Discord
        </a>
        <a className="text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
        {/* <FontAwesomeIcon
            icon={faFacebook}
            className="text-2xl mr-[10px] align-middle rounded-full p-[4px] hover:bg-white hover:text-[#3B5998] "
          ></FontAwesomeIcon> */}
          Facebook
        </a>
      </div>
      <div className="bg-[#111b53] w-full z-50 h-auto pb-10 font-bold">
        <h1 className="text-4xl ml-[45px] mt-[40px]">LEGAL</h1>
        <a className="ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] font-bold">
          Privacy
        </a>
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
        <a className="ml-[45px] hover:rounded-sm p-[4px] block text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] font-bold">
          Terms
        </a>{" "}
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
        <a className="ml-[45px] hover:rounded-sm p-[4px] block text-xl hover:border-l-2 hover:border-[#466ef2] hover:text-[#466ef2] font-bold">
          Brand guidelines
        </a>{" "}
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
      </div>
    </motion.div>
  );
}

export default Footer;
