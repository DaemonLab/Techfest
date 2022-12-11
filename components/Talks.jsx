import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Workshops() {
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
        y: "-20vw",
      });
      animation2.start({
        opacity: 0,
        y: "20vw",
      });
      animation3.start({
        opacity: 0,
        y: "-10vw",
        scale: 0.5,
      });
    }
  });
  return (
    <motion.Reactdiv
      id="Workshops"
      className="flex items-center justify-center md:h-[1000px] sm:h-[1500px] h-[2500px] w-screen bg-[#faf3ea]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#faf3ea] h-full"
        ref={ref}
      >
        <motion.h1
          className="text-[#FFFFFF] text-5xl text-center mb-10"
          animate={animation3}
        >
          Workshops
        </motion.h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-x-5 gap-y-8 h-100">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-30%"
            whileHover={{ scale: 1.05, boxShadow:"0px 0px 15px 0px #FFFFFF" }}
            animate={animation}
          >
            <img className="object-fill" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>
            <div className="absolute bottom-0 left-0 px-6 py-4 bg-slate-500/50">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            <button className='four'>Click here to <b>Register</b></button>
            </div>
          </motion.div>
          
          
        </div>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Workshops;