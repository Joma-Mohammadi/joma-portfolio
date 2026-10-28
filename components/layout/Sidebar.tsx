"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { CvButton } from "@/components/ui/CvButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { isActive, navIcons } from "./nav-icons";

export function Sidebar({ cvHref }: { cvHref: string | null }) {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[205px] flex-col border-r border-line bg-bg/80 backdrop-blur-md lg:flex">
      <Link
        href="/"
        aria-label={`${siteConfig.name} - home`}
        className="logo-gradient text-gradient w-fit px-8 pt-6 font-display text-5xl leading-none"
      >
        {siteConfig.logo}
      </Link>

      <nav aria-label="Main" className="flex flex-1 flex-col justify-center">
        <ul className="flex flex-col gap-6">
          {siteConfig.nav.map((item) => {
            const Icon = navIcons[item.icon];
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group flex items-center gap-4 px-6 py-1"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                      active ? "neon-ring text-electric" : "border-transparent text-muted group-hover:text-fg"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.18em] ${
                      active ? "text-fg" : "text-muted group-hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
                {active ? (
                  <span
                    aria-hidden
                    className="absolute -right-[3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-electric shadow-[0_0_10px_rgb(var(--blue))]"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-6 px-5 pb-7">
        <CvButton href={cvHref} />
        <div className="flex items-center justify-between px-1">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
