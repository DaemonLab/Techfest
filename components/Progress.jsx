// import "./styles.css";
// import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar flux2"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
