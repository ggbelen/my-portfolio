"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tech Stack", href: "/stack" },
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
    "rounded-full px-3.5 py-2 text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-200 ease-out";
  if (active) {
    return `${base} bg-muted/90 text-foreground shadow-sm ring-1 ring-black/[0.04] dark:bg-muted dark:ring-white/[0.06]`;
  }
  return `${base} text-muted-foreground hover:bg-muted/60 hover:text-foreground active:scale-[0.98]`;
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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/72 supports-[backdrop-filter]:bg-background/55 supports-[backdrop-filter]:backdrop-blur-xl supports-[backdrop-filter]:backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-75 sm:text-[0.9375rem]"
        >
          Gabriel G. Belen
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
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

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground shadow-sm transition-[border-color,background-color,transform,box-shadow] duration-200 ease-out hover:border-muted-foreground/35 hover:bg-muted/50 hover:shadow-md active:scale-[0.96] md:hidden"
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
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border/60 bg-background/90 supports-[backdrop-filter]:backdrop-blur-xl md:hidden ${
          menuOpen ? "block shadow-inner" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:px-6"
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
                    ? "rounded-2xl px-3 py-3 text-sm font-medium text-foreground bg-muted/90 shadow-sm ring-1 ring-black/[0.04] dark:ring-white/[0.06]"
                    : "rounded-2xl px-3 py-3 text-sm font-medium text-muted-foreground transition-[color,background-color] duration-200 ease-out hover:bg-muted/60 hover:text-foreground active:opacity-80"
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
