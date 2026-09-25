"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

/** Horizontal, arrow-navigable row of cards (the "Upcoming events" row). */
function CardCarousel({ children, className }: CardCarouselProps) {
  return (
    <Carousel opts={{ align: "start" }} className={className}>
      <CarouselContent className="-ml-6">
        {children.map((child, index) => (
          <CarouselItem key={index} className="basis-[85%] pl-6 sm:basis-1/2 lg:basis-1/3">
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-end gap-2">
        <CarouselPrevious variant="outline" className="static translate-y-0" />
        <CarouselNext variant="outline" className="static translate-y-0" />
      </div>
    </Carousel>
  );
}

export { CardCarousel };
