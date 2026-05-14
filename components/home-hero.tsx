"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

const PROFILE_IMAGE_SRC =
  "/" + encodeURIComponent("BELEN, GABRIEL G..jpg");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AnimatedAvatarFrame() {
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

      <g className="ring-cw">
        <circle
          cx="64"
          cy="64"
          r="58"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>

      <g className="ring-ccw">
        <circle
          cx="64"
          cy="64"
          r="50"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 10"
          strokeLinecap="round"
          opacity="0.35"
        />
      </g>

      <circle
        cx="64"
        cy="64"
        r="44"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}

function BeamsBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!isDark) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={10}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
      />
    </div>
  );
}

export function HomeHero() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-28 md:py-32"
      >
        <BeamsBackground />

        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Portfolio
        </p>

        <div className="relative mt-8 h-32 w-32 shrink-0 sm:h-36 sm:w-36">
          <AnimatedAvatarFrame />
          <div className="absolute inset-[16px] overflow-hidden rounded-full border border-border/80 bg-muted shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/[0.04] dark:shadow-[0_8px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.06]">
            <Image
              src={PROFILE_IMAGE_SRC}
              alt="Gabriel G. Belen"
              width={256}
              height={256}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:mt-7 sm:text-5xl md:text-6xl md:leading-[1.08]">
          Gabriel G. Belen
        </h1>
        <p className="mt-6 max-w-xl text-lg font-medium leading-snug text-muted-foreground sm:text-xl">
          Graduating Student
        </p>
        <p className="mt-8 max-w-2xl text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
          I have a solid foundation in front-end development using HTML, CSS,
          JavaScript, React, and Tailwind CSS, along with back-end experience in
          Python, Java, and Node.js, and I focus on building clean, maintainable,
          and well-documented solutions while contributing effectively to
          development teams and continuously improving my skills.
        </p>
      </section>
    );
  }

  return (
    <motion.section
      id="home"
      className="relative mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-28 md:py-32"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <BeamsBackground />

      <motion.p
        variants={item}
        className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
      >
        Portfolio
      </motion.p>

      <motion.div
        variants={item}
        className="relative mt-8 h-32 w-32 shrink-0 sm:h-36 sm:w-36"
      >
        <AnimatedAvatarFrame />
        <div className="absolute inset-[16px] overflow-hidden rounded-full border border-border/80 bg-muted shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/[0.04] dark:shadow-[0_8px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.06]">
          <Image
            src={PROFILE_IMAGE_SRC}
            alt="Gabriel G. Belen"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.h1
        variants={item}
        className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:mt-7 sm:text-5xl md:text-6xl md:leading-[1.08]"
      >
        Gabriel G. Belen
      </motion.h1>
      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-lg font-medium leading-snug text-muted-foreground sm:text-xl"
      >
        Graduating Student
      </motion.p>
      <motion.p
        variants={item}
        className="mt-8 max-w-2xl text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]"
      >
        I have a solid foundation in front-end development using HTML, CSS,
        JavaScript, React, and Tailwind CSS, along with back-end experience in
        Python, Java, and Node.js, and I focus on building clean, maintainable,
        and well-documented solutions while contributing effectively to
        development teams and continuously improving my skills.
      </motion.p>
    </motion.section>
  );
}