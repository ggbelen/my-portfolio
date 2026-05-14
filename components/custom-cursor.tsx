"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const RING = 36;
const DOT = 6;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.45 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.45 });
  const dotX = useSpring(x, { stiffness: 520, damping: 38, mass: 0.18 });
  const dotY = useSpring(y, { stiffness: 520, damping: 38, mass: 0.18 });

  const ringLeft = useTransform(ringX, (v) => v - RING / 2);
  const ringTop = useTransform(ringY, (v) => v - RING / 2);
  const dotLeft = useTransform(dotX, (v) => v - DOT / 2);
  const dotTop = useTransform(dotY, (v) => v - DOT / 2);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-9 w-9 rounded-full border border-foreground/18 bg-foreground/[0.03] shadow-[0_2px_12px_rgb(0,0,0,0.06)] backdrop-blur-[1px] dark:border-foreground/25 dark:bg-white/[0.04] dark:shadow-[0_2px_20px_rgb(0,0,0,0.45)]"
        style={{ left: ringLeft, top: ringTop }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-1.5 w-1.5 rounded-full bg-foreground/85 dark:bg-foreground/90"
        style={{ left: dotLeft, top: dotTop }}
        aria-hidden
      />
    </>
  );
}
