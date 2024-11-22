"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInOut,
  h1Animation,
  pAnimation,
  buttonAnimation,
  slideOut,
} from "./Animations";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Nav from "./Nav";
import { getAllMythologies } from "../../api/mythologies";
import { Mythology } from "../../types";
import { RiOmega } from "react-icons/ri";

const GodsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [myth, setMyth] = useState<Mythology[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMyth = async () => {
      try {
        const res = await getAllMythologies();
        setMyth(res);
      } catch (error) {
        console.log("Error fetching mythologies:", error);
      }
    };

    fetchMyth();
  }, []);

  const GreekData = myth?.find((item: Mythology) => item.name === "Greek");
  const chapters = GreekData?.chapters || [];

  const handleNav = () => {
    if (chapters.length > 0) {
      setFadeOut(true);
      setTimeout(() => {
        if (chapters.length > 0) {
          router.push(`/greek/${chapters[current]?.name}?current=${current}`);
        }
      }, 500);
    }
  };

  const nextSlide = () => {
    if (chapters.length > 0) {
      setCurrent((prev) => (prev + 1) % chapters.length);
    }
  };

  // const prevSlide = () => {
  //   if (chapters.length > 0) {
  //     setCurrent((prev) => (prev - 1 + chapters.length) % chapters.length);
  //   }
  // };

  if (chapters.length === 0) {
    return (
      <div className="text-white flex items-center justify-center h-screen"></div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden md:flex items-center justify-center bg-black">
      <Nav current={current} setCurrent={setCurrent} />

      {/* Image Slider */}
      <div className="md:w-1/2 w-full md:h-full h-full absolute overflow-hidden top-0 left-0 z-10">
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                chapters[current]?.img || "https://via.placeholder.com/600"
              })`,
            }}
            {...slideInOut}
          />
        </AnimatePresence>
        <motion.div
          className="absolute z-50 md:w-[50vw] h-full bg-primary"
          {...slideOut}
          animate={fadeOut ? slideInOut.animate : {}}
        />
      </div>

      {/* Text Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-1/2 w-full text-center flex flex-col justify-center items-center px-4"
        >
          <motion.h1
            className="text-6xl uppercase mb-10 text-sec"
            {...h1Animation}
          >
            {chapters[current]?.name || "Unknown"}
          </motion.h1>
          <motion.p className="text-white md:mb-6 mb-16" {...pAnimation}>
            {chapters[current]?.description || "No description available."}
          </motion.p>
          <motion.div {...buttonAnimation} className="flex gap-3">
            <Button onClick={nextSlide} title="→" className="w-10 md:hidden" />
            <Button onClick={handleNav} title="اقرأ المزيد" className="w-52" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute right-0 h-full w-1/2 md:flex hidden flex-col justify-center items-end p-10 md:z-0 z-30 ">
        <div className="flex flex-col gap-4 group">
          <div className="w-32 h-40 overflow-hidden absolute right-0 md:top-1/2 bottom-0 -translate-y-1/2">
            <AnimatePresence>
              <motion.button
                key={current + 1}
                onClick={nextSlide}
                className="absolute w-full h-full group bg-cover bg-center"
                {...slideInOut}
                animate={{ x: 0, opacity: fadeOut ? 0 : 1 }}
                style={{
                  backgroundImage: `url(${
                    chapters[(current + 1) % chapters.length]?.img ||
                    "https://via.placeholder.com/600"
                  })`,
                }}
              >
                <div className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300" />
                <div className="opacity-0  group-hover:opacity-100 duration-300 absolute top-[5%] left-[5%] z-20 w-[90%] h-[90%]  m-auto text-xs text-sec flex items-center justify-center p-2 font-bold font-serif">
                  {chapters[(current + 1) % chapters.length]?.name || ""}
                </div>
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {!fadeOut && (
        <div className="absolute md:bottom-14 md:left-14 left-2 bottom-4 z-30 flex flex-col-reverse gap-2 justify-center items-center">
          <RiOmega />
          <div className="bg-primary/50 h-10 w-[1px]" />
          <p className="font-light text-xs text-white/60 rotate-90 text-nowrap w-2">
            {chapters[current].type}
          </p>
        </div>
      )}
    </div>
  );
};

export default GodsSlider;
