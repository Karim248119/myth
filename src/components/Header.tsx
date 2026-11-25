import React from "react";
import { fonts } from "../../lib/fonts";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-primary ${fonts.f1.className} ${className}`}>
      {children}
    </div>
  );
}
