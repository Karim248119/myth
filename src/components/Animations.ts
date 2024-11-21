const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

export const slideInOut = {
  initial: { x: "100%" },
  animate: { x: "0" },
  exit: { x: "-50%", scale: 1.5 },
  transition: {
    duration: 1,
    delay: 0.1,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const slideOut = {
  initial: { x: "100%" },
  animate: { x: "-100%" },
  exit: { x: "100%" },
  transition: {
    duration: 0.5,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const slideOut2 = {
  initial: { x: "-20%" },
  animate: { x: "100%" },
  exit: { x: "0%" },
  transition: {
    duration: 1.5,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const slideIn = {
  initial: { x: "-20%" },
  animate: { x: "0%" },
  exit: { x: "100%" },
  transition: {
    duration: 1.5,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const scaleX = {
  initial: { scaleX: 1 },
  animate: { scaleX: 0 },
  exit: { scaleX: 1 },
  transition: {
    duration: 1,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};

export const h1Animation = {
  initial: { y: "10%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-10%", opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const pAnimation = {
  initial: { y: "-10%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "10%", opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};
export const p2Animation = {
  initial: { y: "-10%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "10%", opacity: 0 },
  transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
};

export const buttonAnimation = {
  initial: { y: "-10%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "10%", opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

export const h2Animation = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
  transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
};
export const h3Animation = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
  transition: { duration: 1, delay: 0.8, ease: "easeInOut" },
};

export const borderAnimation = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};
export const imgAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { duration: 1, ease: "easeInOut" },
};
export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1, ease: "easeInOut" },
};
