export const containerVariants = {
  hidden: {},
  visible: (customDelay = 0) => ({
    transition: {
      staggerChildren: 0.3,
      delayChildren: customDelay
    },
  }),
};

export const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0 },
  },
};

export const textSlide = {
  enterRight: { opacity: 0, x: 60 },
  enterLeft: { opacity: 0, x: -60 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.1 }
  },
  exitRight: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.45 }
  },
  exitLeft: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.45 }
  }
};

export const carouselVariants = {
  enter: (direction : number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    position: "absolute",
  }),
  center: {
    opacity: 1,
    x: 0,
    position: "static",
    transition: { duration: 0.45 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    position: "absolute",
    transition: { duration: 0.45 },
  }),
};