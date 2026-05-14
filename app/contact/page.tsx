import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = {
  title: "Contact — Gabriel G. Belen",
  description:
    "Connect with Gabriel G. Belen on GitHub, LinkedIn, and other channels.",
};

const linkClass =
  "text-sm font-medium text-foreground underline decoration-border underline-offset-[5px] transition-colors duration-200 hover:decoration-muted-foreground";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <MotionReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Get in touch
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
            For recruiting or collaboration, reach out on GitHub or LinkedIn.
          </p>
        </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
        <aside className="mx-auto mt-14 w-full max-w-md rounded-3xl border border-border/80 bg-card/80 p-8 text-center shadow-[0_2px_24px_rgb(0,0,0,0.05)] ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/50 dark:shadow-[0_2px_40px_rgb(0,0,0,0.35)] dark:ring-white/[0.05] sm:p-9">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Online presence
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground/90">
              GitHub
            </span>
            <Link
              href="https://github.com/ggbelen"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} mt-1.5 inline-block text-base`}
            >
              github.com/ggbelen
            </Link>
          </p>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground/90">
              LinkedIn
            </span>
            <Link
              href="https://www.linkedin.com/in/gabriel-belen-6247862a3"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} mt-1.5 inline-block text-base`}
            >
              linkedin.com/in/gabriel-belen-6247862a3
            </Link>
          </p>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground/90">
              Name
            </span>
            <span className="mt-1.5 block text-base font-medium text-foreground">
              Gabriel Belen
            </span>
          </p>
        </aside>
        </MotionReveal>
      </div>
    </main>
  );
}
