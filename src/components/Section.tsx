"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  borderAnimation,
  h2Animation,
  imgAnimation,
  p2Animation,
} from "./Animations";
import ImgBorder from "./ImgBorder";
import { useInView } from "@/hooks/useInView";

interface Section {
  h: string;
  p: string;
  img?: string;
  reverse?: boolean;
}
const Section: React.FC<Section> = ({ h, p, img, reverse = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.3);
  return (
    <motion.div
      ref={sectionRef}
      className={`md:px-20 px-3 flex flex-wrap mb-10 pt-5 md:pt-0 ${
        reverse ? "flex-row-reverse" : ""
      }`}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`flex flex-col md:gap-10 gap-2 md:py-20 md:px-20 mb-5 md:mb-0 ${
          img ? "md:w-1/2 w-full" : "w-full"
        }`}
      >
        <motion.div
          {...borderAnimation}
          animate={isInView && borderAnimation.animate}
          className="border-r-2 border-primary md:p-2 px-2 overflow-x-hidden"
        >
          <motion.h2
            {...h2Animation}
            animate={isInView && h2Animation.animate}
            viewport={{ once: true, amount: 0.8 }}
            className="md:text-3xl text-xl font-bold "
          >
            {h}
          </motion.h2>
        </motion.div>
        <motion.p
          {...p2Animation}
          animate={isInView && p2Animation.animate}
          whileInView="visible"
          className="md:text-base text-xs"
        >
          {p}
        </motion.p>
      </div>
      {/* Image */}
      <div
        className={`md:w-1/2 w-full flex md:py-10 md:px-20 items-center  ${
          !reverse && "md:justify-end"
        } ${!img && "hidden"}`}
      >
        <div className="relative md:h-72 h-[75%] m-auto md:-m-0 aspect-square">
          <ImgBorder isInView={isInView} />
          <motion.img
            {...imgAnimation}
            animate={isInView && imgAnimation.animate}
            className="w-full h-full object-cover"
            src={img}
            alt="img"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
