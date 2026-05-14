import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { MotionReveal } from "@/components/motion-reveal";

const sectionLinkClass =
  "group mt-6 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm ring-1 ring-black/[0.03] transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:border-muted-foreground/30 hover:shadow-md active:translate-y-0 active:scale-[0.98] active:shadow-sm dark:ring-white/[0.05]";

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />

      <MotionReveal>
        <section
          id="about"
          className="scroll-mt-20 border-t border-border/50 bg-muted/30 px-4 py-20 dark:bg-muted/15 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Background &amp; skills
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-muted-foreground sm:text-base">
              Education, certifications, and system development experience—including
              a hotel reservation system built with PHP and MySQL.
            </p>
            <Link href="/about" className={sectionLinkClass}>
              About me
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.06}>
        <section
          id="projects"
          className="scroll-mt-20 border-t border-border/50 px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Work
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Projects
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-muted-foreground sm:text-base">
              ALMS English Learning Mobile App — a focused language-learning
              experience for mobile.
            </p>
            <Link href="/projects" className={sectionLinkClass}>
              View projects
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.1}>
        <section
          id="contact"
          className="scroll-mt-20 border-t border-border/50 bg-muted/30 px-4 py-20 dark:bg-muted/15 sm:px-6 md:pb-28 md:pt-24"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Let&apos;s talk
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-muted-foreground sm:text-base">
              Find my links and reach me on GitHub or LinkedIn for professional inquiries.
            </p>
            <Link href="/contact" className={sectionLinkClass}>
              Get in touch
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </section>
      </MotionReveal>
    </main>
  );
}
