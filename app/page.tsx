import Image from "next/image";
import Link from "next/link";

const PROFILE_IMAGE_SRC =
  "/" + encodeURIComponent("BELEN, GABRIEL G..jpg");

const sectionLinkClass =
  "group mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:border-muted-foreground/25 hover:shadow-md active:translate-y-0 active:scale-[0.98] active:shadow-sm";

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-28 md:py-32"
      >
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Portfolio
        </p>
        <div className="relative mt-8 h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted shadow-md ring-4 ring-background sm:h-32 sm:w-32">
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
        I have a solid foundation in front-end development using HTML, CSS, JavaScript, React, and Tailwind CSS, along with back-end experience in Python, Java, and Node.js, and I focus on building clean, maintainable, and well-documented solutions while contributing effectively to development teams and continuously improving my skills.
        </p>
      </section>

      <section
        id="about"
        className="scroll-mt-20 border-t border-border/60 bg-muted/25 px-4 py-20 dark:bg-muted/20 sm:px-6 md:py-28"
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

      <section
        id="projects"
        className="scroll-mt-20 border-t border-border/60 px-4 py-20 sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Work
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-muted-foreground sm:text-base">
            Mobile applications: Acardemics App and ALMS English Learning Mobile
            App.
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

      <section
        id="contact"
        className="scroll-mt-20 border-t border-border/60 bg-muted/25 px-4 py-20 dark:bg-muted/20 sm:px-6 md:pb-28 md:pt-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Let&apos;s talk
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-muted-foreground sm:text-base">
            Use the contact form or reach me on GitHub for professional inquiries.
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
    </main>
  );
}
