"use client";

import React, { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export interface AnimatedContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onAnimationStart"> {
  children?: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  blur?: number;
  wipe?: string;
  threshold?: number;
  delay?: number;
  stagger?: number;
  staggerFrom?: string;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 24,
  direction = "vertical",
  reverse = false,
  duration = 0.5,
  initialOpacity = 0,
  animateOpacity = true,
  threshold = 0.1,
  delay = 0,
  once = true,
  className = "",
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const sign = reverse ? -1 : 1;
  const isHorizontal = direction === "horizontal";
  const transformFrom = isHorizontal
    ? `translate3d(${distance * sign}px, 0, 0)`
    : `translate3d(0, ${distance * sign}px, 0)`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : animateOpacity ? initialOpacity : 1,
        transform: isVisible ? "translate3d(0, 0, 0)" : transformFrom,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
