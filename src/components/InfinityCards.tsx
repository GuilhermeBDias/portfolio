import type { InfiniteCardsProps } from "../utils/Types";
import { cn } from "../utils/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "top",
  className,
}: InfiniteCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "top") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll-vertical"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full flex justify-center rounded-2xl px-8 py-6 md:w-[150px] bg-[#10132E]"
            key={item.title}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
