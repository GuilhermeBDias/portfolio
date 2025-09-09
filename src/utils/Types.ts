import type { ElementType, ReactNode } from "react";

export interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  href?: string;
}