import type { Transition } from "motion";
import type { MotionProps } from "motion/react";
import type { ElementType, ReactNode } from "react";

export interface AnimatedElementProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  href?: string;
  viewport?: { once: boolean;  amount: number}
}

export interface GridBackgroundProps {
  GradientClassName?: string;
  SquareClassName?: string;
  children?: ReactNode;
}

export interface BentoGridProps {
  className?: string;
  children?: ReactNode;
  viewport?: { once: boolean;  amount: number}

}

export interface BentoGridItemProps {
  className?: string;
  divClass?: string;
  title?: string | ReactNode;
  subTitle?: string;
  titleClass?: string;
  background?: ReactNode;
  children?: ReactNode;
  viewport?: { once: boolean;  amount: number}
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

export interface Tech {
  id: number;
  image: string;
}

export interface CardProps {
  id?: number;
  title?: string;
  description?: string;
  completeDescription?: string;
  imageSrc?: string;
  techs?: Tech[];
  image?: string;
  imageSize?: string;
  onOpenModal: () => void;
}


export interface BorderBeamProps {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  transition?: Transition
  className?: string
  style?: React.CSSProperties
  reverse?: boolean
  initialOffset?: number
  borderWidth?: number
}

export interface TextAnimationProps extends MotionProps {
  children?: string
  words?: string[]
  className?: string
  duration?: number
  typeSpeed?: number
  deleteSpeed?: number
  delay?: number
  pauseDelay?: number
  loop?: boolean
  as?: React.ElementType
  startOnView?: boolean
  showCursor?: boolean
  blinkCursor?: boolean
  cursorStyle?: "line" | "block" | "underscore"
}

export interface ModalProjectsProps {
  isOpen: boolean;
  onClose: () => void;
  project?: {
    title?: string;
    description?: string;
    completeDescription?: string
    myContribution?: string;
    image?: string;
    image_2?: string;
    imageSize?: string;
    imageSizeModal?: string;
    techs?: { id: number; image: string }[];
    fullThecs?: { id: number; image: string }[]
  }
}