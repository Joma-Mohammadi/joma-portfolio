"use client";

import { Moon, Sun } from "lucide-react";

/**
 * The initial theme class is set by an inline script in app/layout.tsx before paint.
 * Both icons are rendered and swapped with CSS, so there is no hydration mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextDark);
    root.classList.toggle("light", !nextDark);
    root.style.colorScheme = nextDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:text-fg ${className}`}
    >
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden />
      <Moon className="block h-5 w-5 dark:hidden" aria-hidden />
    </button>
  );
}
