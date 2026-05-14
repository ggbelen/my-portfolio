"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  viewUrl?: string;
};

const btnPrimary =
  "inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:shadow-md hover:brightness-[1.05] active:translate-y-0 active:scale-[0.98] active:shadow-sm dark:hover:brightness-110";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, viewUrl } = project;
  const reduce = useReducedMotion();

  const inner = (
    <>
      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {title}
      </h2>

      <p className="mt-3 flex-1 text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem]">
        {description}
      </p>

      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-border/80 bg-muted/35 px-2.5 py-1 text-xs font-medium text-foreground transition-all duration-200 ease-out group-hover:border-muted-foreground/25 group-hover:bg-muted/50">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        {viewUrl && (
          <Link
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            View
          </Link>
        )}
      </div>
    </>
  );

  if (reduce) {
    return (
      <article className="group flex h-full flex-col rounded-3xl border border-border/80 bg-card/90 p-6 shadow-[0_2px_24px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.03] dark:bg-card/80 dark:shadow-[0_2px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.05] sm:p-8">
        {inner}
      </article>
    );
  }

  return (
    <motion.article
      className="group flex h-full flex-col rounded-3xl border border-border/80 bg-card/90 p-6 shadow-[0_2px_24px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.03] dark:bg-card/80 dark:shadow-[0_2px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.05] sm:p-8"
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 28 } }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
    >
      {inner}
    </motion.article>
  );
}
