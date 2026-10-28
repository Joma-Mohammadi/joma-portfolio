import { Download } from "lucide-react";

const classes =
  "flex h-11 w-full items-center justify-center gap-2.5 rounded-md border border-electric/70 bg-electric/5 font-mono text-xs uppercase tracking-[0.18em] text-fg transition-colors";

/** Active only when the CV file exists in /public (see siteConfig.cv.path). */
export function CvButton({ href }: { href: string | null }) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        title="Add your CV file to public/cv to enable this button"
        className={`${classes} cursor-not-allowed opacity-50`}
      >
        <Download className="h-4 w-4" aria-hidden />
        Download CV
      </button>
    );
  }
  return (
    <a href={href} download className={`${classes} hover:bg-electric/15`}>
      <Download className="h-4 w-4 text-electric" aria-hidden />
      Download CV
    </a>
  );
}
