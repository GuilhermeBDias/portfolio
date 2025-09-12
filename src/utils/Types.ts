import type { ElementType, ReactNode } from "react";

export interface AnimatedElementProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  href?: string;
}

export interface GridBackgroundProps {
  GradientClassName?: string;
  SquareClassName?: string;
  children?: ReactNode;
}

export interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export interface BentoGridItemProps {
  className?: string;
  divClass?: string;
  title?: string | ReactNode;
  subTitle?: string;
  titleClass?: string;
  background?: ReactNode;
  children?: ReactNode;
}

export interface InfiniteCardsProps {
  items: {
    title: string;
  }[];
  direction?: "top" | "bottom";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}