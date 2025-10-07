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

  const [start, setStart] = useState(false);

  const getDirection = React.useCallback(() => {
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
  }, [direction]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      if (scrollerRef.current.children.length === items.length){
        
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);           
          scrollerRef.current?.appendChild(duplicatedItem);
          
        });
      }

      getDirection();
      setStart(true);
    }
  }, [ getDirection]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-lg", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-w-full gap-4 ",
          start && "animate-scroll-vertical"
        )}
      >
        {items.map((item) => (
          <li
            className="text-sm md:text-base w-[90px] max-w-full flex justify-center rounded-2xl px-8 py-4 md:w-[130px] bg-[#10132E] border-2 border-[#272A3C]"
            key={item.title}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
