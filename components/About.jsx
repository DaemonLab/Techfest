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
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });

      animation2.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
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
        x: "-10vw",
      });
      animation2.start({
        opacity: 0,
        x: "10vw",
      });
      animation3.start({
        opacity: 0,
        x: "-5vw",
        // scale: 0.5,
      });
    }
  });

  return (
    <motion.Reactdiv
      id="about"
      ref={ref}
      className="h-screen w-screen bg-[#faf3ea] mr-10 pr-10"
    >
      <motion.div className="bg-[#faf3ea] h-screen m-6 text-right pr-10 pt-[100px]">
        <motion.h1
          className="text-white text-9xl mb-10 ml-10"
          animate={animation}
          style={{
            fontFamily: "valorax Regular",
            fontWeight: "normal",
            fontSize: "100px",
          }}
        >
          ABOUT
        </motion.h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 sm:h-auto xsm:h-auto">
          <div></div>
          <motion.h1
            className="text-white text-9xl mb-10 ml-10"
            animate={animation}
            style={{
              // fontFamily: "valorax Regular",
              // fontWeight: "normal",
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "20px",
              lineHeight: "1.5",
            }}
          >
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
      <motion.div
        className="flux bg-[#111b53] w-100 h-[10px] shadow-2xl text-white rounded-lg border-[3px] p-0 mx-20"
        whileHover={{ y: "-10px" }}
        animate={animation2}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.4 }}
      ></motion.div>
    </motion.Reactdiv>
  );
}

export default About;
