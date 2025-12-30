"use client";

import { Navbar } from "./Navbar";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
