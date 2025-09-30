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