import React from "react";

export default function Button({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={` h-10 border-2  border-white/40 rounded-full relative group overflow-hidden duration-300 ${className}`}
    >
      <span className="h-full w-full rounded-full absolute bg-primary -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 -left-1/2 group-hover:left-1/2 duration-300 ease-in-out" />
      <span className="h-full w-full rounded-full absolute bg-black/20 -z-20 top-0 left-0 " />
      <span className="group-hover:text-black duration-300 font-thin font-serif">
        {title}
      </span>
    </button>
  );
}
