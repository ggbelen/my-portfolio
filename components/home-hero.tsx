"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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

export function HomeHero() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-28 md:py-32"
      >
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Portfolio
        </p>
        <div className="relative mt-8 h-28 w-28 shrink-0 overflow-hidden rounded-full border border-border/80 bg-muted shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/[0.04] dark:shadow-[0_8px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.06] sm:h-32 sm:w-32">
          <Image
            src={PROFILE_IMAGE_SRC}
            alt="Gabriel G. Belen"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
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
      className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-28 md:py-32"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.p
        variants={item}
        className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
      >
        Portfolio
      </motion.p>
      <motion.div
        variants={item}
        className="relative mt-8 h-28 w-28 shrink-0 overflow-hidden rounded-full border border-border/80 bg-muted shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/[0.04] dark:shadow-[0_8px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.06] sm:h-32 sm:w-32"
      >
        <Image
          src={PROFILE_IMAGE_SRC}
          alt="Gabriel G. Belen"
          width={256}
          height={256}
          className="h-full w-full object-cover"
          priority
        />
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
