import { useId } from "react";

export default function Noise() {
  const filterId = useId().replace(/:/g, "");

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* <div className="absolute inset-0 bg-black/10" /> */}
      <svg
        viewBox="0 0 4000 2000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-70 invert"
      >
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
    </div>
  );
}
