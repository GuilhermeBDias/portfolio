import { motion } from "framer-motion";
import type { AnimatedElementProps } from "./Types";

const defaultVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const defaultTag = "span";

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
      transition={{ delay, duration }}
      href={href}
      whileInView="visible"
      viewport={viewport || { once: true, amount: 0.8 }}
    >
      {children}
    </MotionTag>
  );
}

