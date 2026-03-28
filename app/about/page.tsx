import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Gabriel G. Belen",
  description:
    "Education, skills, certifications, and system development experience of Gabriel G. Belen.",
};

const skills = [
  "Problem-Solving and Debugging",
  "Front-End Development (HTML, CSS, PHP)",
  "Time Management and Task Prioritization",
  "Application Development",
  "SQL and Database Management",
  "Kotlin (basic exposure)",
] as const;

const certifications = [
  {
    title: "NoSQL and DBaaS 101",
    href: "https://courses.cognitiveclass.ai/certificates/5d7402a57b6a4b66a78df497136f7e37",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3234526BF416292BEE87B3AF8B96AE07BC760166ADAE974065534CBD51AFBE9A",
  },
  {
    title:
      "Oracle Cloud Data Management 2023 Certified Foundations Associate",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5A7DF565E1F489C054C27ED048F202F3AB5A6402CE218ED62341DEEF585556CC",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B8823B1EAAEEE58FA29F31A74137BE26B3C7D41B06DCD5D6A3DB4D64E326DF4B",
  },
  {
    title: "SQL and Relational Databases 101",
    href: "https://courses.cognitiveclass.ai/certificates/c53d8669059047fb9e956bb7053b0222",
  },
  {
    title: "Cisco Networking Academy",
    href: "https://www.credly.com/badges/729b8e27-9d33-4829-a9c1-6272e9d6335a/public_url",
  },
] as const;

const certLinkClass =
  "group block cursor-pointer rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground no-underline transition-[border-color,background-color,box-shadow,color] duration-200 dark:bg-muted/15 hover:border-muted-foreground/35 hover:bg-muted/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const systemHighlights = [
  "Applied object-oriented programming principles in modular applications.",
  "Created and maintained applications using structured programming.",
  "Produced system documentation including ERD, flowcharts, and sequence diagrams.",
  "Built and tested database-driven applications integrating MySQL and PHP.",
  "Developed responsive user interfaces with HTML and CSS.",
  "Performed testing, debugging, and troubleshooting to improve performance.",
  "Participated in team-based development contributing to coding, design, and documentation tasks.",
] as const;

const cardClass =
  "rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          About
        </p>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
          About Me
        </h1>

        <div className="mt-10 max-w-3xl space-y-5 text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
          <p>
            I am a graduating student seeking to contribute front-end and
            back-end development capability alongside SQL-based data management. My
            experience includes HTML, PHP, CSS, and Kotlin, with practical use of
            Visual Studio, Android Studio, and Eclipse IDE to support software
            development tasks in academic and project settings.
          </p>
          <p>
            I focus on clear structure, reliable database integration, and
            documentation that helps teams align on requirements and design.
          </p>
        </div>

        <section className="mt-14 md:mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Education
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            <li className={cardClass}>
              <p className="text-sm font-semibold text-foreground">
                Capitol Hills Christian School
              </p>
              <p className="mt-1 text-sm text-muted-foreground">High School</p>
              <p className="mt-2 text-sm text-muted-foreground">2016 — 2020</p>
            </li>
            <li className={cardClass}>
              <p className="text-sm font-semibold text-foreground">
                New Era University
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Senior High School through College
              </p>
              <p className="mt-2 text-sm text-muted-foreground">2020 — Present</p>
            </li>
          </ul>
        </section>

        <section className="mt-14 md:mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Skills / Expertise
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 md:mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Certifications
          </h2>
          <ul className="mt-5 space-y-3">
            {certifications.map((cert) => (
              <li key={cert.href}>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={certLinkClass}
                  aria-label={`${cert.title} (opens in a new tab)`}
                >
                  <span className="underline-offset-4 transition-colors group-hover:text-foreground group-hover:underline group-hover:decoration-muted-foreground/80">
                    {cert.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 md:mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            System Development Experience
          </h2>
          <div className={`mt-5 ${cardClass}`}>
            <h3 className="text-base font-semibold text-foreground">
              Hotel Reservation System
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Designed and developed a Hotel Reservation System using{" "}
              <strong className="font-medium text-foreground">PHP</strong>,{" "}
              <strong className="font-medium text-foreground">HTML</strong>,{" "}
              <strong className="font-medium text-foreground">CSS</strong>, and{" "}
              <strong className="font-medium text-foreground">XAMPP</strong>, with{" "}
              <strong className="font-medium text-foreground">MySQL</strong> and{" "}
              <strong className="font-medium text-foreground">PHP</strong> for
              database-driven functionality. The project applied OOP in modular
              code, responsive UI work in HTML and CSS, and documentation
              including ERD, flowcharts, and sequence diagrams.
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground">
              {systemHighlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
