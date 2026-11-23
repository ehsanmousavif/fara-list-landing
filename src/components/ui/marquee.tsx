import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  duration = "35s",
  gap = "1.75rem",
}) => {
  return (
    <div
      dir="ltr"
      className={cn(
        "group flex overflow-hidden p-2 select-none",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={
        {
          "--duration": duration,
          "--gap": gap,
          gap: "var(--gap)",
        } as React.CSSProperties
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around",
              vertical
                ? "flex-col animate-marquee-vertical"
                : "flex-row animate-marquee",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
            style={{
              gap: "var(--gap)",
              animationDirection: reverse ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;