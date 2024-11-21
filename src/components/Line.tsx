import React from "react";

export default function Line() {
  return (
    <div className="mb-20 w-full relative">
      <div className="h-[2px] w-full bg-primary" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 h-2 w-2 bg-primary z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[2100%] rotate-45 h-2 w-2 bg-primary" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[2200%] rotate-45 h-2 w-2 bg-primary " />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 h-6 w-6 border-2 bg-black border-primary z-0" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[20%] rotate-45 h-6 w-6 border-t-2 border-r-2 border-primary" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[120%] rotate-45 h-6 w-6  border-b-2 border-l-2 border-primary" />
    </div>
  );
}
