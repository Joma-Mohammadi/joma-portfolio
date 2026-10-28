import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-12 lg:mb-16">
      <p className="flex items-center gap-4 font-mono text-sm uppercase tracking-[0.35em] text-aqua">
        <span aria-hidden className="h-px w-12 bg-aqua/60" />
        {eyebrow}
        <span aria-hidden className="hidden h-px w-12 bg-aqua/60 sm:block" />
      </p>
      <h1 className="text-gradient name-line-2 mt-5 pb-2 font-display text-[clamp(3.25rem,8vw,6.5rem)] uppercase leading-[0.92]">
        {title}
      </h1>
      {children ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{children}</p> : null}
    </header>
  );
}
