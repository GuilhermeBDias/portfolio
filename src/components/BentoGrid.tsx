import type { BentoGridItemProps, BentoGridProps } from "../utils/Types";
import { cn } from "../utils/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
  viewport,
}: BentoGridProps) => {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-20 auto-rows-[20px] w-full max-w-[100rem] gap-6",
        className
      )}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport || { once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const BentoGridItem = ({
  className,
  divClass,
  title,
  subTitle,
  titleClass,
  background,
  children,
  viewport,
}: BentoGridItemProps) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl w-full border-2 border-[#272A3C] overflow-hidden",
        className
      )}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport || { once: true, amount: 0.5 }}
      whileHover={{
        borderColor: "#642075",
        transition: { duration: 0.3 },
        scale: 1.01,
      }}
      transition={{
        scale: {
          duration: 0.4, // tempo para o hover sair
          ease: "easeOut",
        }
      }}
    >
      {background && (
        <div
          className="flex absolute inset-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url(${background})`,
            backgroundColor: "transparent",
          }}
        >
          <div className="bg-[#000319]/60 h-full w-full"></div>
        </div>
      )}
      <div className={cn("relative z-10 flex w-full h-full", divClass)}>
        <div className={cn("flex flex-col h-full z-20", titleClass)}>
          {subTitle && (
            <p className="text-xs md:text-xl text-tertiary z-10 font-medium">
              {subTitle}
            </p>
          )}
          {title && <h3 className="font-bold">{title}</h3>}
        </div>
        {children}
      </div>
    </motion.div>
  );
};
