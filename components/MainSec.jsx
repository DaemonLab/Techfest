import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Carousel from "./Carousel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useInView } from "react-intersection-observer";
import ThreeCanvas from "./ThreeCanvas";

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

function MainSec() {
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
        x: "-10vw",
      });
      animation3.start({
        opacity: 0,
        y: "-5vw",
        scale: 0.5,
      });
    }
  });

  return (
    <motion.div
      className="grid mt-[1%] mb-[10%] w-screen overflow-hidden snap-mandatory bg-[#001233] z-50 h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="home"
      ref={ref}
    >
      <div className="text-[#FF595A] flex items-center justify-center ml-8 z-0">
        {/* <ThreeCanvas></ThreeCanvas> */}
        {/* <div
          class="tenor-gif-embed"
          data-postid="14681886"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
          <a href="https://tenor.com/view/fire-fireball-8bit-gif-14681886">
            Fire Fireball Sticker
          </a>
          from{" "}
          <a href="https://tenor.com/search/fire-stickers">Fire Stickers</a>
        </div>{" "}
        <p>
          <a href="https://giphy.com/gifs/gYWeVOiMmbg3kzCTq5">via GIPHY</a>
        </p> */}
        <div className="absolute z-50">
          <motion.div animate={animation}>
            <h1
              className="main-logo textfont-bold z-50 text-white"
              style={{
                fontFamily: "valorax Regular",
                fontWeight: "normal",
                // fontSize: "200px"
              }}
            >
              INGENIUM
            </h1>
            {/* <h1
              className="sec-logo text-9xl font-bold z-50 text-white text-center"
              style={{
                fontFamily: "valorax Regular",
                fontWeight: "normal",
              }}
            >
              2022-23
            </h1> */}
            <motion.div className="h-[50%] p-10 mt-10">
              <motion.h1
                className="tagline text-white flex items-center justify-center text-center flux3 h-full"
                animate={animation}
              >
                TECH IT or LEAVE IT!
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* <motion.h1 className="text-5xl mb-10 z-50">2022-23</motion.h1>
          <motion.p
            className="text-white"
            style={{ zIndex: 999 }}
            animate={animation2}
          >
            Sed semper nulla a pellentesque sollicitudin. Proin ac felis at
            lectus condimentum venenatis. Vivamus condimentum a mi a dignissim.
            Suspendisse purus eros, dapibus sed condimentum non, ultricies eu
            risus. Mauris facilisis lectus nec neque tincidunt auctor. Nulla in
            nibh magna. Cras eu dui id lorem porta condimentum. Vestibulum
            ornare metus ac odio efficitur, egestas viverra velit venenatis. Sed
            non ips
          </motion.p> */}
          <div className="mt-8">
            <Button value="Register" ml="0"></Button>
          </div>
        </div>
      </div>
      {/* <div className="w-100 h-200">
          <Cube></Cube>
        </div> */}
    </motion.div>
  );
}

export default MainSec;
