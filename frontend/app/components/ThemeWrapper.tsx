"use client";

import { ThemeToggle } from "./ThemeToggle";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}
