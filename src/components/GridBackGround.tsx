import type { GridBackgroundProps } from "../utils/Types";
import { cn } from "../utils/utils";

export const GridBackgroundDemo = ({GradientClassName, SquareClassName, children}: GridBackgroundProps ) => {
  return (
    <div className="absolute justify-center flex w-full h-full items-center inset-0 -z-10">
      <div
        className={cn(
          "absolute inset-0 bg-center",
          "[background-size:100px_100px] md:[background-size:120px_120px]",
          "[background-image:linear-gradient(to_right,#161A31_1px,transparent_1px),linear-gradient(to_bottom,#161A31_1px,transparent_1px)]", SquareClassName
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className={cn("absolute bottom-0 left-0 w-full h-full bg-gradient-to-b to-[#000319] from-transparent", GradientClassName)} />
      {children}
    </div>
  );
}
