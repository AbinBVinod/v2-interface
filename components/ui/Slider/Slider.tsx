"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "../../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {

  const max = 100;
  const minimum = 0;
  const steps = 25;

  // Calculate marks based on minimum, max, and steps
  let marks = Array.from({ length: (max - minimum) / steps + 1 }, (_, i) => minimum + i * steps);
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-[500px] touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full">
        <SliderPrimitive.Range className="bg-primary absolute h-full" />
      </SliderPrimitive.Track>
      {/* {marks.map((mark, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${((mark - minimum) / (max - minimum)) * 100}%`,
            bottom: "-20px", 
            transform: "translateX(-50%)",
          }}
          className="text-primary flex cursor-pointer flex-col items-center justify-center space-y-1 text-xs font-medium"
        >
          <div style={{ height: "10px", width: "2px", backgroundColor: "black" }} />
          <p>{mark}%</p>
        </div>
      ))} */}
      <SliderPrimitive.Thumb className="border-primary/50 bg-background focus-visible:ring-ring block h-4 w-4 rounded-full border shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
