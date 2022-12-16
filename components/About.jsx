import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Carousel from "./Carousel";
import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useInView } from "react-intersection-observer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const events = [
  {
    eventName: "Byte Bandits CTF",
  },
  { eventName: "Hackistica" },
  { eventName: "Divide By Zero" },
  { eventName: "Code Golf" },
  { eventName: "Surprise Language" },
];

function About() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [event, setEvent] = React.useState({ eventName: "" });
  const handleOpen = (idx) => {
    setEvent(events[idx]);
    console.log(events);
    setOpen(true);
  };
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.3,
          bounce: 0.1,
        },
      });

      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
          delay: 0.6,
        },
      });
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: "10vh",
      });
      animation2.start({
        opacity: 0,
        y: "10vh",
      });
      animation3.start({
        opacity: 0,
        x: "0",
        // scale: 0.5,
      });
    }
  });

  return (
    <div
      id="about"
      className="h-auto md:w-screen sm:w-full xsm:w-full xxsm:w-full bg-[#faf3ea] x-50"
    >
      <motion.div className="z-50 h-auto md:m-6 pr-10 pt-[100px]">
        <div className="grid md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 sm:h-auto xsm:h-auto mb-[50px]">
          <motion.h1
            className="text-white text-9xl mb-10 ml-10 text-center"
            animate={animation}
            style={{
              fontFamily: "valorax Regular",
              fontWeight: "normal",
              fontSize: "60px",
            }}
          >
            About
          </motion.h1>
        </div>
        <div
          className="grid md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 sm:h-auto xsm:h-auto"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.div
            className="flex items-center justify-center w-[100%] h-[100%]"
            animate={animation}
          >
            <img
              className="z-50 h-[100%] w-[100%]"
              src="/wordcropped.png"
              alt="An SVG of an eye"
            />
          </motion.div>
          <motion.h1
            className="text-white md:text-9xl mb-10 ml-10"
            animate={animation2}
            style={{
              // fontFamily: "valorax Regular",
              // fontWeight: "normal",
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "20px",
              lineHeight: "1.5",
            }}
          >
            <div ref={ref}></div>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8"></div>
      </motion.div>
    </div>
  );
}

export default About;
