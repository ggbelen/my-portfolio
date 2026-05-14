import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects — Gabriel G. Belen",
  description:
    "Portfolio projects by Gabriel G. Belen: ALMS English Learning Mobile App.",
};

const projects = [
  {
    title: "ALMS English Learning Mobile App",
    description:
      "An English language learning app for mobile devices, designed to support study and practice flows with a clear, approachable UI suitable for learners.",
    tags: ["React Native", "Mobile UI"],
    viewUrl:
      "https://expo.dev/accounts/alms1/projects/wave/builds/f8795ec9-ff9c-44ac-8224-d139e161377c",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <MotionReveal>
          <header className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Work
            </p>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
              Projects
            </h1>

            <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
              Featured application from my portfolio. Open the build link to see
              the project on Expo.
            </p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.06} className="mx-auto mt-14 max-w-xl sm:mt-16">
          <ProjectCard project={projects[0]} />
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-muted-foreground">
            More work samples available on{" "}
            <Link
              href="https://github.com/ggbelen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-muted-foreground"
            >
              GitHub
            </Link>
            .
          </p>
        </MotionReveal>
      </div>
    </main>
  );
}
