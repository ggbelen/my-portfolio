import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Gabriel G. Belen",
  description:
    "Portfolio projects by Gabriel G. Belen: Acardemics App and ALMS English Learning Mobile App.",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Acardemics App",
    description:
      "A mobile application focused on academic workflows and student-facing features, built in an Android environment with emphasis on structured screens and maintainable app logic.",
    tags: ["Kotlin", "Android Studio", "Android SDK"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/ggbelen",
  },
  {
    title: "ALMS English Learning Mobile App",
    description:
      "An English language learning app for mobile devices, designed to support study and practice flows with a clear, approachable UI suitable for learners.",
    tags: ["Kotlin", "Android Studio", "Mobile UI"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/ggbelen",
  },
];

const btnPrimary =
  "inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:shadow-md hover:brightness-[1.05] active:translate-y-0 active:scale-[0.98] active:shadow-sm dark:hover:brightness-110";

const btnSecondary =
  "inline-flex h-9 items-center justify-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:border-muted-foreground/30 hover:bg-muted/50 hover:shadow-md active:translate-y-0 active:scale-[0.98] active:shadow-sm";

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, demoUrl, repoUrl } = project;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out will-change-transform sm:p-7 hover:-translate-y-1 hover:border-muted-foreground/25 hover:shadow-md">
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
              <span className="inline-flex rounded-md border border-border bg-muted/40 px-2 py-1 text-xs font-medium text-foreground transition-all duration-200 ease-out group-hover:border-muted-foreground/20 group-hover:bg-muted/55">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            Live demo
          </Link>
        )}
        {repoUrl && (
          <Link
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondary}
          >
            GitHub
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Work
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Projects
          </h1>
          <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
            Selected mobile applications from my portfolio. Demo and repository
            links are provided where applicable; demo URLs are placeholders until
            a public build is hosted.
          </p>
        </header>

        <ul className="mx-auto mt-14 grid max-w-4xl list-none grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className="animate-card-enter"
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
