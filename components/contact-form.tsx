"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-[border-color,box-shadow,background-color] duration-200 ease-out placeholder:text-muted-foreground hover:border-muted-foreground/25 focus-visible:border-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35";

const labelClass = "text-sm font-medium text-foreground";

const submitClass =
  "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:shadow-md hover:brightness-[1.05] active:translate-y-0 active:scale-[0.98] active:shadow-sm dark:hover:brightness-110 sm:w-auto sm:min-w-[10.5rem]";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-[box-shadow,border-color] duration-300 ease-out focus-within:border-muted-foreground/20 focus-within:shadow-md sm:p-8"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Write your message…"
            className={`${fieldClass} min-h-[8.5rem] resize-y`}
          />
        </div>
      </div>

      <button type="submit" className={submitClass}>
        Send message
      </button>

      {submitted && (
        <p
          className="mt-4 animate-fade-in-soft text-sm leading-relaxed text-muted-foreground"
          role="status"
        >
          Thanks—this is a demo form with no backend yet.
        </p>
      )}
    </form>
  );
}
