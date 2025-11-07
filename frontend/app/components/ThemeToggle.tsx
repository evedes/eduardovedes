"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    toggleTheme();
  };

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 p-3 rounded-full bg-zinc-200 dark:bg-zinc-700 transition-colors duration-300 ease-in-out shadow-lg opacity-0 pointer-events-none"
        aria-label="Toggle theme"
      >
        <FaMoon className="size-5 text-zinc-800 dark:text-zinc-200" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="fixed top-6 right-6 p-3 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors duration-300 ease-in-out shadow-lg z-50 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="size-5 text-zinc-800 dark:text-zinc-200" />
      ) : (
        <FaSun className="size-5 text-zinc-200" />
      )}
    </button>
  );
}
