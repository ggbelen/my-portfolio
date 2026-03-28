"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

function isActive(pathname: string | null, href: string) {
  if (pathname == null) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function desktopLinkClass(active: boolean) {
  const base =
    "rounded-lg px-3 py-2 text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-200 ease-out";
  if (active) {
    return `${base} bg-muted text-foreground shadow-sm`;
  }
  return `${base} text-muted-foreground hover:bg-muted/70 hover:text-foreground active:scale-[0.98]`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navMounted, setNavMounted] = useState(false);

  useEffect(() => {
    setNavMounted(true);
  }, []);

  const pathForActive = navMounted ? pathname : null;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-sm shadow-black/[0.03] backdrop-blur-md dark:shadow-black/20">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 sm:text-[0.9375rem]"
        >
          Gabriel G. Belen
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(({ label, href }) => {
            const active = isActive(pathForActive, href);
            return (
              <Link
                key={href}
                href={href}
                className={desktopLinkClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-foreground transition-colors hover:border-border hover:bg-muted/60 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border/80 bg-background/95 backdrop-blur-md md:hidden ${
          menuOpen ? "block shadow-inner" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-5xl flex-col gap-0.5 px-4 py-3 sm:px-6"
          aria-label="Primary mobile"
        >
          {nav.map(({ label, href }) => {
            const active = isActive(pathForActive, href);
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "rounded-xl px-3 py-3 text-sm font-medium text-foreground bg-muted shadow-sm"
                    : "rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-[color,background-color] duration-200 ease-out hover:bg-muted/70 hover:text-foreground active:opacity-80"
                }
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
