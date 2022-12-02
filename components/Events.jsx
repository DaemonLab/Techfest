import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Carousel from "./Carousel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

function Events() {
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
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: "-100vw",
      });
      animation2.start({
        opacity: 0,
        x: "100vw",
      });
      animation3.start({
        opacity: 0,
        y: "-5vw",
        scale: 0.5,
      });
    }
  });

  return (
    <motion.Reactdiv
      id="sponsors"
      ref={ref}
      className="flex items-center justify-center md:h-[1000px] sm:h-[1500px] h-[2500px] w-screen bg-[#faf3ea]"
    >
      <motion.div className="bg-[#faf3ea] h-100">
        <motion.h1
          className="text-[#001233] text-5xl text-center mb-10 bg-[#faf3ea]"
          animate={animation3}
        >
          Events
        </motion.h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4">
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(0)}
            animate={animation}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.4 }}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(1)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            // animate={animation}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(2)}
            animate={animation2}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(3)}
            animate={animation}
          ></motion.div>
          <motion.div
            className="bg-[#111b53] w-[300px] h-[400px] shadow-2xl text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(4)}
            animate={animation}
          ></motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <h1 className="text-black">{event.eventName}</h1>
            </Box>
          </motion.div>
        </Modal>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Events;
