"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ImgBorder({ isInView }: { isInView: boolean }) {
  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView && { scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-[70%] h-[80%] absolute border-r border-t border-primary -top-8 -right-4"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView && { scaleY: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-[80%] h-[70%] absolute border-r border-t border-primary -top-4 -right-8"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView && { scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-[70%] h-[80%] absolute border-l border-b border-primary -bottom-8 -left-4"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView && { scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-[80%] h-[70%] absolute border-l border-b border-primary -bottom-4 -left-8"
      />
    </>
  );
}
