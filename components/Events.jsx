import React from "react";
import { motion } from "framer-motion";

function Events() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen snap-mandatory"
    >
      events
    </motion.div>
  );
}

export default Events;
