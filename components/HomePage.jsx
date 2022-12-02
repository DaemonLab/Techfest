import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <motion.div
        className="grid h-screen w-screen md:grid-cols-2 overflow-hidden snap-mandatory bg-[#001233]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="home"
      >
        <div className="text-[#FF595A] flex items-center justify-center ml-8">
          <div>
            <h1 className="text-6xl font-bold">Techfest, IIT Indore</h1>
            <h1 className="text-5xl mb-10">2022-23</h1>
            <p className="text-white">
              Sed semper nulla a pellentesque sollicitudin. Proin ac felis at
              lectus condimentum venenatis. Vivamus condimentum a mi a
              dignissim. Suspendisse purus eros, dapibus sed condimentum non,
              ultricies eu risus. Mauris facilisis lectus nec neque tincidunt
              auctor. Nulla in nibh magna. Cras eu dui id lorem porta
              condimentum. Vestibulum ornare metus ac odio efficitur, egestas
              viverra velit venenatis. Sed non ips
            </p>
            <div className="mt-8">
              <Button value="Register" ml="0"></Button>
            </div>
          </div>
        </div>
        <div></div>
      </motion.div>
    </>
  );
}

export default HomePage;
