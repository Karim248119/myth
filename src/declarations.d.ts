// src/declarations.d.ts

declare module "@splidejs/react-splide" {
  import * as React from "react";
  import { Options } from "@splidejs/splide";

  export interface SplideProps {
    options?: Options;
    extensions?: Record<string>;
    className?: string;
    children?: React.ReactNode;
  }

  export const Splide: React.FC<SplideProps>;

  export interface SplideSlideProps {
    className?: string;
    children?: React.ReactNode;
  }

  export const SplideSlide: React.FC<SplideSlideProps>;
}
