import React from "react";
import HomePage from "../components/HomePage";
import Sponsors from "../components/Sponsors";
import Events from "../components/Events";
import About from "../components/About";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Particle from "../components/Particle";
import Navbar from "../components/Navbar";

function competitions() {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 2 }}
    >
      <Particle></Particle>
      <Navbar></Navbar>
      <Competitions></Competitions>
      <Footer></Footer>
    </motion.div>
  );
}

export default competitions;