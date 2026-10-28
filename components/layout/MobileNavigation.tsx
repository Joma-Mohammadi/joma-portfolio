"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { CvButton } from "@/components/ui/CvButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { isActive, navIcons } from "./nav-icons";

export function MobileNavigation({ cvHref }: { cvHref: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md lg:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <Link href="/" aria-label={`${siteConfig.name} - home`} className="logo-gradient text-gradient font-display text-4xl leading-none">
          {siteConfig.logo}
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-6 pt-4">
          <nav aria-label="Main">
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => {
                const Icon = navIcons[item.icon];
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="flex items-center gap-4 rounded-md px-2 py-2.5"
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                          active ? "neon-ring text-electric" : "border-transparent text-muted"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className={`font-mono text-sm uppercase tracking-[0.18em] ${active ? "text-fg" : "text-muted"}`}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-5 space-y-5">
            <CvButton href={cvHref} />
            <SocialLinks />
          </div>
        </div>
      ) : null}
    </header>
  );
}
