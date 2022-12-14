import React from "react";
import HomePage from "../components/HomePage";
import Sponsors from "../components/Sponsors";
import Events from "../components/Events";
import About from "../components/About";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Particle from "../components/Particle";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Progress from "../components/Progress";

function home() {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 2 }}
      >
        <Particle></Particle>
        <Navbar></Navbar>
        <HomePage></HomePage>
        <Events></Events>
        {/* <Parallax></Parallax> */}
        <About></About>
        <Sponsors></Sponsors>
        <Footer></Footer>
      </motion.div>
    </div>

  );
}

export default home;
