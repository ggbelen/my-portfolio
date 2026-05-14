"use client";

import { useEffect, useState } from "react";

export function SiteFooter() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getUTCFullYear()));
  }, []);

  return (
    <footer className="mt-auto border-t border-border/50 bg-muted/25 supports-[backdrop-filter]:backdrop-blur-sm dark:bg-muted/10">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm leading-relaxed text-muted-foreground">
          © {year}
          {year ? " " : ""}
          Gabriel G. Belen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
