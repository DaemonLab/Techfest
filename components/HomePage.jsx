import React, { useEffect,useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Navbar from "./Navbar";
import Cube from "./Cube";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function HomePage() {
  const head1 = useRef(null)
  const inView = useInView({root:head1});
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log("inview")
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 10,
          bounce: 0.1,
        },
      });
      animation2.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.4,
        },
      });
    }
    if (!inView) {
      console.log("outview")
      animation.start({
        y: "-10vw",
        opacity: 0,
      });
      animation2.start({
        opacity: 0,
      });
    }
  });
  return (
    <>
      <Navbar></Navbar>
      <motion.div
        className="grid h-screen w-screen overflow-hidden snap-mandatory bg-[#001233]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="home"
      >
        {/* <div
          className="text-[#FF595A] flex items-center justify-center ml-8"
          ref={ref}
        >
          <div>
            <motion.h1 className="text-6xl font-bold" animate={animation}>
              Techfest, IIT Indore
            </motion.h1>
            <h1 className="text-5xl mb-10">2022-23</h1>
            <motion.p className="text-white" animate={animation2}>
              Sed semper nulla a pellentesque sollicitudin. Proin ac felis at
              lectus condimentum venenatis. Vivamus condimentum a mi a
              dignissim. Suspendisse purus eros, dapibus sed condimentum non,
              ultricies eu risus. Mauris facilisis lectus nec neque tincidunt
              auctor. Nulla in nibh magna. Cras eu dui id lorem porta
              condimentum. Vestibulum ornare metus ac odio efficitur, egestas
              viverra velit venenatis. Sed non ips
            </motion.p>
            <div className="mt-8">
              <Button value="Register" ml="0"></Button>
            </div>
          </div>
        </div> */}
        <div className="w-100 h-200">
          <Cube></Cube>
        </div>
        <header id="head" class="wrapper wrapper--1050" style={
          {width:"90%",margin:"0 auto",position:"absolute",left:"5%",top:"60%",zIndex:"2",textAlign:"center",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 0 200vh 0",minHeight:"800px",fontSize:"10px",color:"red"}}>
            {/* <h1><strong>GRAPHIC</strong><strong>DESIGNER</strong></h1>
            <a class="link" href="#obsah">FIND OUT MORE<span class="link__line link__line--incube"></span></a> */}
            <div ref={head1}>
            <motion.h1 className="text-6xl font-bold" animate={animation}>
              Techfest, IIT Indore
            </motion.h1>
            <h1 className="text-5xl mb-10">2022-23</h1>
            <motion.p className="text-white" animate={animation2}>
              Sed semper nulla a pellentesque sollicitudin. Proin ac felis at
              lectus condimentum venenatis. Vivamus condimentum a mi a
              dignissim. Suspendisse purus eros, dapibus sed condimentum non,
              ultricies eu risus. Mauris facilisis lectus nec neque tincidunt
              auctor. Nulla in nibh magna. Cras eu dui id lorem porta
              condimentum. Vestibulum ornare metus ac odio efficitur, egestas
              viverra velit venenatis. Sed non ips
            </motion.p>
            <div className="mt-8">
              <Button value="Register" ml="0"></Button>
            </div>
          </div>
        </header>
      </motion.div>
    </>
  );
}

export default HomePage;
