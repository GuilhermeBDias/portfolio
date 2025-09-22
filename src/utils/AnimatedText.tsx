import { motion } from "framer-motion";
import type { AnimatedElementProps } from "./Types";

const defaultVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const defaultTag = "span";

// AnimatedSpan component for animating text spans
export function Animated({
  children,
  delay = 0.2,
  duration = 0.8,
  className = "",
  as: Tag = defaultTag,
  href,
  viewport,
}: AnimatedElementProps) {
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      className={className}
      variants={defaultVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration }}
      href={href}
      viewport={viewport || { once: true, amount: 0.8 }}
    >
      {children}
    </MotionTag>
  );
}

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0 },
  },
};
