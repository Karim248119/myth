"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="w-screen h-screen z-40 top-0 left-0 pointer-events-none flex fixed">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
}
