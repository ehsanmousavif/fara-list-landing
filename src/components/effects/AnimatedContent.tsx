"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  /** پذیرفته می‌شه ولی اعمال نمی‌شه — از CSS transition استفاده کن */
  blur?: number;
  /** پذیرفته می‌شه ولی اعمال نمی‌شه */
  wipe?: string;
  threshold?: number;
  delay?: number;
  stagger?: number;
  staggerFrom?: string;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}

const AnimatedContent = ({
  children,
  distance = 32,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  ease = "power2.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.15,
  delay = 0,
  stagger = 0,
  once = true,
  // ignored props kept for api compatibility
  blur: _blur,
  wipe: _wipe,
  staggerFrom: _staggerFrom,
  className = "",
  style,
  ...props
}: AnimatedContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (reduced) {
      el.style.visibility = "visible";
      return;
    }

    const targets =
      stagger > 0 && el.children.length ? Array.from(el.children) : [el];
    const axis = direction === "horizontal" ? "x" : "y";
    const sign = reverse ? -1 : 1;

    gsap.set(el, { visibility: "visible" });

    const from: gsap.TweenVars = {
      [axis]: distance * sign,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    };

    const to: gsap.TweenVars = {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      clearProps: "transform,opacity",
      ...(stagger > 0 ? { stagger: { each: stagger } } : {}),
    };

    const tl = gsap.timeline({ paused: true, delay: Math.max(delay, 0) });
    tl.fromTo(targets, from, to);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: `top ${(1 - threshold) * 100}%`,
      once,
      onEnter: () => tl.play(),
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
    // dependencies ثابتن، effect فقط یک بار mount باید اجرا بشه
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={["invisible", className].filter(Boolean).join(" ")}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
