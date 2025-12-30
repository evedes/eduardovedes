"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-foreground hover:text-primary-500 transition-colors"
        >
          eduardovedes.com
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              isActive("/")
                ? "text-foreground underline underline-offset-4"
                : "text-zinc-600 dark:text-zinc-400 hover:text-foreground dark:hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-sm transition-colors ${
              isActive("/blog")
                ? "text-foreground underline underline-offset-4"
                : "text-zinc-600 dark:text-zinc-400 hover:text-foreground dark:hover:text-foreground"
            }`}
          >
            Blog
          </Link>

          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <FaMoon className="size-4 text-zinc-800 dark:text-zinc-200" />
            ) : theme === "light" ? (
              <FaMoon className="size-4 text-zinc-800" />
            ) : (
              <FaSun className="size-4 text-zinc-200" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
