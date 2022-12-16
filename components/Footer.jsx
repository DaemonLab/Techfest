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

        {/* <div className="ml-[150px] mt-[25px] ">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-3xl"
          ></FontAwesomeIcon>
          <div className="inline ml-[40px] text-xl pb-[10px]">9898989898</div>
        </div>
        <div className="ml-[150px] mt-[25px] ">
          <FontAwesomeIcon
            icon={faAddressBook}
            className="text-3xl"
          ></FontAwesomeIcon>
          <div className="inline ml-[40px] text-xl pb-[10px]">IIT INDORE</div>
        </div> */}
      </div>
      <div className="bg-[#111b53] w-full z-50 pb-10">
        <h1 className="text-4xl ml-[45px] mt-[40px] font-bold">MORE</h1>
        <a
          href="https://www.google.com"
          className="text-xl ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block m-[4px] font-bold w-full"
        >
          {/* <FontAwesomeIcon
            icon={faTwitter}
            className="text-3xl text-black"
          ></FontAwesomeIcon> */}
          Home
        </a>

        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon icon={faFacebook} className="text-3xl">
            {" "}
          </FontAwesomeIcon> */}
          About Us
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Events
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Sponsors
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Fluxus Tech Exihibits
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
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
          className="text-xl ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block m-[4px] font-bold"
        >
          {/* <FontAwesomeIcon
            icon={faTwitter}
            className="text-3xl text-black"
          ></FontAwesomeIcon> */}
          Twitter
        </a>

        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon icon={faFacebook} className="text-3xl">
            {" "}
          </FontAwesomeIcon> */}
          Instagram
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          LinkedIn
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Discord
        </a>
        <a className="text-xl ml-[45px] hover:rounded-sm p-[4px] block m-[4px] font-bold">
          {/* <FontAwesomeIcon
            icon={faDiscord}
            className="text-3xl"
          ></FontAwesomeIcon> */}
          Facebook
        </a>
      </div>
      <div className="bg-[#111b53] w-full z-50 h-auto pb-10 font-bold">
        <h1 className="text-4xl ml-[45px] mt-[40px]">ADDRESS</h1>
        <a className="ml-[45px] mt-[10px] hover:rounded-sm p-[4px] block text-xl font-bold">
          Privacy
        </a>
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
        <a className="ml-[45px] hover:rounded-sm p-[4px] block text-xl font-bold">
          Terms
        </a>{" "}
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
        <a className="ml-[45px] hover:rounded-sm p-[4px] block text-xl font-bold">
          Brand guidelines
        </a>{" "}
        {/* <hr className="ml-[45px]  w-[350px]" /> */}
      </div>
    </motion.div>
  );
}

export default Footer;
