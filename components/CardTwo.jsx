import React from "react";
import { motion, useAnimation } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
};

function CardTwo(props) {
  const animation = useAnimation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <motion.div
      className="flux flex items-center justify-center relative overflow-hidden rounded-lg shadow-lg cursor-pointer x-100 md:w-[30vw] sm:w-[45vw] xsm:w-[90vw] m-10"
      whileHover={{ y: -4, boxShadow: "0px 0px 15px 0px #FFFFFF" }}
      initial={{ opacity: 0, y: "100px", rotate: -4 }}
      animate={{ opacity: 1, y: "0px", rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="object-fill w-100 h-[500px]"
        src="https://wallpaper.dog/large/10702676.jpg"
        // style={{ width: "100%", height: "400px" }}
        alt="Flower and sky"
      />
      {/* <div className="bg-red w-full h-49">hello</div> */}
      <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50 w-[100%] block">
        <h4
          className="mb-3 text-xl font-semibold tracking-tight text-white w-100 block uppercase"
          style={{
            fontFamily: ["JetBrains Mono", "monospace"],
            fontSize: "25px",
            lineHeight: "1.5",
          }}
        >
          {props.details.name}
        </h4>
        {/* <p className="leading-normal text-gray-100">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
          tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p> */}
        <div className="grid grid-cols-2 md:gap-8 sm:gap-2 xsm:gap-2 xxsm:gap-2">
          <button
            onClick={() => setOpen(true)}
            className="four text-black w-100"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "20px",
              lineHeight: "1.5",
              clipPath:
                "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
            }}
          >
            <b>Details</b>
          </button>
          <button
            className="one text-black w-100"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "20px",
              lineHeight: "1.5",
              clipPath:
                "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
            }}
          >
            <b>Register</b>
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1
            style={{
              fontFamily: "valorax Regular",
              fontWeight: "normal",
              fontSize: "40px",
            }}
            className="text-center"
          >
            {props.details.name}
          </h1>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 h-[90%] p-4 overflow-scroll">
            <div className="h-[100%] rounded-md">
              <img
                className="h-[100%] rounded-md object-cover"
                src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-is-competitive-programming-and-why-it-is-importantcontests/Images/Top-10-Programming-Languages-to-Watch-Out-in-2019.png"
              ></img>
            </div>
            <div
              className="p-6"
              style={{
                fontFamily: ["JetBrains Mono", "monospace"],
                fontSize: "22px",
                lineHeight: "1.5",
              }}
            >
              {props.details.content}
            </div>
          </div>
        </Box>
      </Modal>
    </motion.div>
  );
}

export default CardTwo;
