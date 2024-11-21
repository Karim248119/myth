import React from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
export default function Stairs() {
  const reverseIndex = (index: any) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };
  const animation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className=" h-full w-full relative bg-primary"
          />
        );
      })}
    </>
  );
}
