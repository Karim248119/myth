import { Poppins, Quicksand } from "next/font/google";

import localFont from "next/font/local";
const f1 = localFont({ src: "./fonts/greek.ttf" });
const f2 = localFont({ src: "./fonts/CinzelDecorative-Regular.ttf" });

const base = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

export const fonts = {
  f1,
  f2,
  base,
};
