"use client";

import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div
      className={
        hydrated
          ? "flex flex-1 flex-col animate-page-enter"
          : "flex flex-1 flex-col"
      }
    >
      {children}
    </div>
  );
}
