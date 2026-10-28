import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { PortraitPlaceholder } from "./PortraitPlaceholder";

// Decorative ambient points (position in %, size in px).
const dots = [
  { top: "8%", left: "44%", size: 4, color: "blue" },
  { top: "22%", left: "93%", size: 3, color: "cyan" },
  { top: "64%", left: "56%", size: 4, color: "blue" },
  { top: "40%", left: "40%", size: 2, color: "violet" },
  { top: "86%", left: "70%", size: 3, color: "violet" },
  { top: "12%", left: "88%", size: 4, color: "blue" },
] as const;

/** Wraps each highlight phrase found in `text` in a pink <strong>. */
function HighlightedText({ text, phrases }: { text: string; phrases: string[] }) {
  if (phrases.length === 0) return <>{text}</>;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "i"));
  return (
    <>
      {parts.map((part, i) =>
        phrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className="font-semibold text-magenta">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function Hero() {
  const { availability } = siteConfig;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden lg:min-h-screen"
    >
      {dots.map((d, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            background: `rgb(var(--${d.color}))`,
            boxShadow: `0 0 10px rgb(var(--${d.color}))`,
          }}
        />
      ))}

      {availability.enabled ? (
        <p className="absolute right-4 top-4 flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted sm:right-8 sm:top-6">
          <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153)]" />
          {availability.label}
        </p>
      ) : null}

      <div className="grid w-full items-center gap-14 px-6 pb-28 pt-24 sm:px-10 lg:grid-cols-[55fr_45fr] lg:gap-8 lg:px-12 lg:pb-24 lg:pt-20 xl:px-16">
        <div>
          <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.35em] text-aqua sm:text-sm">
            <span aria-hidden className="h-px w-10 bg-aqua/60 sm:w-14" />
            {siteConfig.title}
            <span aria-hidden className="h-px w-10 bg-aqua/60 sm:w-14" />
          </p>

          <h1 id="hero-title" className="mt-6 font-display uppercase leading-[0.9] tracking-[0.01em]">
            <span className="sr-only">{siteConfig.name}</span>
            <span aria-hidden className="block text-[clamp(3.5rem,9.5vw,9.5rem)]">
              <span className="text-gradient name-line-1 block pb-1">{siteConfig.firstName}</span>
              <span className="text-gradient name-line-2 block pb-1">{siteConfig.lastName}.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted sm:text-[1.65rem] sm:leading-[1.5]">
            <HighlightedText text={siteConfig.description} phrases={siteConfig.descriptionHighlights} />
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">
              View work
              <ArrowRight className="h-4 w-4 text-electric" aria-hidden />
            </Button>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <PortraitPlaceholder />
      </div>

      {/* Decorative scroll cue. Home intentionally has no content below the hero. */}
      <div aria-hidden className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-start gap-4 sm:flex lg:left-[38%]">
        <div className="relative h-12 w-px scroll-line">
          <span className="scroll-dot absolute -left-[2px] -top-1 h-[5px] w-[5px] rounded-full bg-electric shadow-[0_0_8px_rgb(var(--blue))]" />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted">Scroll</span>
      </div>
    </section>
  );
}
