import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex h-12 items-center justify-center gap-3 rounded-md border px-7 font-mono text-sm uppercase tracking-[0.2em] transition-colors sm:h-14 sm:px-9";

const variants: Record<Variant, string> = {
  primary:
    "border-electric bg-electric/10 text-fg shadow-[0_0_24px_rgb(var(--blue)/var(--glow))] hover:bg-electric/20",
  secondary: "border-line bg-surface/40 text-muted hover:border-electric/60 hover:text-fg",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({ href, variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
