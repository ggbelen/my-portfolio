"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground shadow-sm backdrop-blur-sm transition-[border-color,box-shadow,transform,background-color] duration-200 ease-out hover:border-muted-foreground/30 hover:bg-muted/50 hover:shadow-md active:scale-[0.96] md:h-10 md:w-10"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-busy={!mounted}
    >
      <span className="sr-only">Toggle color theme</span>
      {!mounted ? (
        <span className="h-4 w-4 rounded-full bg-muted-foreground/20" aria-hidden />
      ) : (
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 26 }}
          className="flex h-5 w-5 items-center justify-center"
          aria-hidden
        >
          {isDark ? (
            <svg
              className="h-[1.125rem] w-[1.125rem]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              className="h-[1.125rem] w-[1.125rem]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </motion.span>
      )}
    </button>
  );
}
