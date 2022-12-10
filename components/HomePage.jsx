import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Navbar from "./Navbar";
import Cube from "./Cube";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import MainSec from "./MainSec";
import Events from "./Events";

function HomePage() {
  return (
    <>
      <MainSec />
    </>
  );
}

export default HomePage;
