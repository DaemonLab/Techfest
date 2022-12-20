import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";


const competitionsDetails = [
  {
    name: "Divide By Zero",
    content:
      "Pan-India level competitions and hackathons with international participation also and participation from all the top tech institutions in India. Last edition had over 20k participation cumulatively",
  },
  {
    name: "Code Golf",
    content:
    "Pan-India level competitions and hackathons with international participation also and participation from all the top tech institutions in India. Last edition had over 20k participation cumulatively",
  },
  {
    name: "Surprise Language",
    content:
    "Pan-India level competitions and hackathons with international participation also and participation from all the top tech institutions in India. Last edition had over 20k participation cumulatively",
  },
  {
    name: "Hackistica",
    content:
    "Pan-India level competitions and hackathons with international participation also and participation from all the top tech institutions in India. Last edition had over 20k participation cumulatively",
  },
  {
    name: "Byte Bandits CTF",
    content:
    "Pan-India level competitions and hackathons with international participation also and participation from all the top tech institutions in India. Last edition had over 20k participation cumulatively",
  },
  {
    name: "Enosium",
    content:
      "Énosium is a pan-India Hackathon which involves the domains of AI/ML as well as Web Development, and is meant to encourage the development of interdisciplinary skills and teamwork among people with different technical backgrounds to work on a common solution.",
  },
  {
    name: "Building Blochs",
    content:
      "Pan-India level competition. Domains include PQC, QML, Chemistry Simulations, Quantum Optimization and Quantum chip design.Event will connect people with all levels of experience in Quantum Computing. It is also expected to enhance their understanding about the principles and",
  },
  {
    name: "Redesign",
    content:
      "The event consists of Electronic Circuit Simulation & Design pertaining to a specific set of system.The domains would be Analog Design, Digital LogicImplementation, Micro - Controllers, Micro Processors, IOT",
  },
{
  name: "Nakshatra",
    content:
  "Nakshatra is the Flagship event of The Astronomy Club, IIT Indore. The event is an accumulation of Case Study Challenges, Workshops, Data Analysis, Talks and fun activities.",
  },
{
  name: "Concastle",
    content:
  "This event focuses on providing solution to the problem of design mix, which a very important factor in determining the project cost and safety of concrete and in the optimization of the same.",
  },
{
  name: "Top Gear",
    content:
  "Pan-India level competition. The domains involved are Automotive Design (CAD, Concept designing), Hardware (Controls and Electronic Subsystems) and Software (Algorithms and Simulation)",
  },
{
  name: "Fin Week",
    content:
  "Pan-India level competitions oncase study challenge, algo trading,paper trading and blockchain,covering all top B-Schools and techinstitutes in India. Last edition hadover 1k paricipation in teams.",
  },
{
  name: "MetaBizz",
    content:
  "MetaBizz is the flagship event of Metacryst Club, IIT Indore. MetaBizz encourages students to compete with best of the minds from across the country, getting hands-on experience in a time constrained competition with looking over their focus and knowledge level in the field of Material Science.",
  },
{
  name: "Overtinker",
    content:
  "This event will lead to testing as well as enhancing the knowledge of electronic components and sensors involved in the domain of robotics among participants. It will be a Pan-India level event.",
  },
];

function Competitions() {
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
      id="competitions"
      className="flex items-center justify-center md:h-[1000px] sm:h-[1500px] h-[2500px] w-screen mt-[100px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full"
        ref={ref}
      >
        <motion.h1
          className="text-5xl text-center mb-10 text-white md:font-[100px] sm:font-md"
          animate={animation3}
          style={{
            fontFamily: "valorax Regular",
            fontWeight: "normal",
            fontSize: "40px",
          }}
        >
          COMPETITIONS
        </motion.h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 flex items-center justify-center grid-flow-row gap-x-10 gap-y-10 h-100">
          {competitionsDetails.map((comp) => (
            <CardTwo details={comp}></CardTwo>
          ))}
        </div>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Competitions;
