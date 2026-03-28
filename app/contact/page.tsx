import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Gabriel G. Belen",
  description:
    "Contact Gabriel G. Belen via the form or GitHub for professional inquiries.",
};

const linkClass =
  "text-sm font-medium text-foreground underline decoration-border underline-offset-[5px] transition-colors duration-200 hover:decoration-muted-foreground";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Get in touch
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
            For recruiting or collaboration, please use the form below or connect
            with me on GitHub.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-12 lg:mx-auto lg:max-w-5xl lg:grid-cols-2 lg:items-start lg:gap-14">
          <ContactForm />

          <aside className="mx-auto w-full max-w-md rounded-2xl border border-border bg-muted/25 p-8 text-center shadow-sm dark:bg-muted/15 lg:mx-0 lg:max-w-none lg:p-9 lg:text-left">
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
                Name
              </span>
              <span className="mt-1.5 block text-base font-medium text-foreground">
                Gabriel Belen
              </span>
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
