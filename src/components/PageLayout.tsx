"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  borderAnimation,
  h3Animation,
  pAnimation,
  slideIn,
  slideOut2,
} from "@/components/Animations";
import { GiGreekTemple } from "react-icons/gi";
import Line from "@/components/Line";
import Nav from "./Nav";
import border from "../../public/assets/imgs/greek2.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Chapter } from "../../types";

export default function PageLayout({
  children,
  chapter,
}: {
  children: React.ReactNode;
  chapter: Chapter;
}) {
  const searchParams = useSearchParams();
  return (
    <div className="overflow-hidden">
      <Nav isLink={true} />
      <div className="bg-black md:h-[60vh] h-[50vh] flex flex-col  md:flex-row md:justify-between gap-10 justify-center items-center md:px-32 px-5 ">
        <motion.div
          {...borderAnimation}
          className="border-r-2 border-primary px-5 overflow-x-hidden overflow-y-clip"
        >
          <motion.h1
            {...h3Animation}
            className="md:text-9xl text-4xl md:h-40 h-12 font-bold  "
          >
            {chapter.name}
          </motion.h1>
        </motion.div>
        <motion.p
          {...pAnimation}
          className="md:w-[30vw] font-bold md:text-base text-xs"
        >
          {chapter.description}
        </motion.p>
      </div>
      <div className="h-[80vh] w-full relative overflow-hidden">
        <motion.img
          src={chapter.img}
          alt={chapter.name}
          className="w-full h-full left-0 object-cover  -z-10"
          {...slideIn}
        />
        <div className=" absolute bottom-5 left-5 flex flex-row-reverse justify-center items-center gap-1">
          <GiGreekTemple />
          <div className="bg-primary/50 h-[1px] w-10" />
          <p className="font-light text-xs text-white/60">{chapter.type}</p>
        </div>
        <motion.div
          {...slideOut2}
          className="bg-primary w-[120vw] h-full absolute left-0 top-0"
        />
      </div>
      <motion.div
        className="flex py-0"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10,
        }}
      >
        <Image src={border} alt="Sliding Image" />
        <Image src={border} alt="Sliding Image" />
      </motion.div>
      <div className="bg-black">{children}</div>
    </div>
  );
}
