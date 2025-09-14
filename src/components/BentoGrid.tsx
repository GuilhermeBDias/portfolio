import type { BentoGridItemProps, BentoGridProps } from "../utils/Types";
import { cn } from "../utils/utils";

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-20 auto-rows-[20px] w-full max-w-[100rem] gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  divClass,
  title,
  subTitle,
  titleClass,
  background,
  children,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl w-full border-2 border-[#272A3C] overflow-hidden",
        className
      )}
    >
      {background && (
        <div
          className="flex absolute inset-0 w-full h-full bg-cover"
          style={{ backgroundImage: `url(${background})`, backgroundColor: "transparent" }}
        >
          <div className="bg-[#000319]/50 h-full w-full"></div>
        </div>
      )}
      <div className={cn("relative z-10 flex w-full h-full", divClass)}>
        <div className={cn("flex flex-col absolute h-full z-20", titleClass)}>
          {title && <h3 className="font-bold">{title}</h3>}
          {subTitle && <p className="text-lg text-tertiary z-10">{subTitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
};
