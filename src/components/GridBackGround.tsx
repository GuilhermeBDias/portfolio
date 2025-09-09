import { cn } from "../utils/utils";

export function GridBackgroundDemo() {
  return (
    <div className="absolute justify-center flex w-full h-full items-center -z-10">
      <div
        className={cn(
          "absolute inset-0 bg-center",
          "[background-size:120px_120px]",
          "[background-image:linear-gradient(to_right,#161A31_1px,transparent_1px),linear-gradient(to_bottom,#161A31_1px,transparent_1px)]",
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
    </div>
  );
}
