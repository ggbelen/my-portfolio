"use client";

import { useReducedMotion } from "framer-motion";

// Option A — Dual spinning dashed rings (my recommendation for black & white)
export function AnimatedAvatarFrame() {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <style>{`
        @keyframes spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        .ring-cw  { transform-origin: 64px 64px; animation: spin-cw  4s linear infinite; }
        .ring-ccw { transform-origin: 64px 64px; animation: spin-ccw 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ring-cw, .ring-ccw { animation: none; }
        }
      `}</style>

      {/* Outer spinning dashed ring */}
      <g className={reduce ? undefined : "ring-cw"}>
        <circle
          cx="64" cy="64" r="58"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>

      {/* Inner counter-spinning ring */}
      <g className={reduce ? undefined : "ring-ccw"}>
        <circle
          cx="64" cy="64" r="50"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 10"
          strokeLinecap="round"
          opacity="0.35"
        />
      </g>

      {/* Static inner guide ring */}
      <circle cx="64" cy="64" r="44" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}