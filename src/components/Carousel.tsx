"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // base styles
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import border from "../../public/assets/imgs/greek2.png";

export default function SplideCarousel({
  dir = "ltr",
  showText,
}: {
  dir?: "rtl" | "ltr";
  showText?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full  py-20">
      <Splide
        options={{
          direction: dir,
          type: "loop", // infinite loop
          drag: "free", // grab-to-drag enabled
          focus: "center",
          arrows: false,
          pagination: false,
          perPage: isMobile ? 1 : 3,
          autoScroll: {
            speed: 1, // control scroll speed
            pauseOnHover: true, // stops when hovering
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
        className="w-full"
      >
        <SplideSlide className=" ">
          <Image
            width={1000}
            height={1000}
            src={border}
            alt="h-20 w-auto"
            className="h-20 w-auto"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
