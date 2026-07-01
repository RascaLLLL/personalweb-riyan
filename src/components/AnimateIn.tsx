"use client";

import { useEffect, useRef, useState } from "react";

type Variant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "pop"
  | "flip-y"
  | "fade";

interface AnimateInProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  threshold?: number;
}

const initial: Record<Variant, string> = {
  "fade-up":    "opacity-0 translate-y-12",
  "fade-left":  "opacity-0 -translate-x-12",
  "fade-right": "opacity-0 translate-x-12",
  "pop":        "opacity-0 scale-75",
  "flip-y":     "opacity-0 rotateX-90",
  "fade":       "opacity-0",
};

const visible: Record<Variant, string> = {
  "fade-up":    "opacity-100 translate-y-0",
  "fade-left":  "opacity-100 translate-x-0",
  "fade-right": "opacity-100 translate-x-0",
  "pop":        "opacity-100 scale-100",
  "flip-y":     "opacity-100 rotateX-0",
  "fade":       "opacity-100",
};

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all ${inView ? visible[variant] : initial[variant]} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
        transitionTimingFunction: variant === "pop"
          ? "cubic-bezier(0.34, 1.56, 0.64, 1)"  // spring overshoot for pop
          : "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // ease-out-quad
      }}
    >
      {children}
    </div>
  );
}
