"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
          className="w-screen h-screen bg-black  absolute overflow-x-hidden"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
