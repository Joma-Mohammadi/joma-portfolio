import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { publicFileExists } from "@/lib/public-file";

/**
 * PORTRAIT: add your own photo at  public/images/joma-portrait.png
 * (path configurable in data/site-config.ts -> portrait.src).
 * Until that file exists the frame stays completely empty. Once it exists it is
 * rendered with next/image inside this same frame, so no redesign is needed.
 * Recommended: a 4:5 portrait, at least 900 x 1125 px.
 */
export function PortraitPlaceholder() {
  const hasImage = publicFileExists(siteConfig.portrait.src);

  return (
    <div className="relative mx-auto w-full max-w-[24rem] lg:max-w-[28rem]">
      {/* restrained ambient glow behind the frame */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgb(var(--violet)/0.28),transparent_75%)] blur-2xl"
      />

      <div className="portrait-frame aspect-[4/5] w-full rounded-[2px]">
        <div className="portrait-inner">
          {hasImage ? (
            <Image
              src={siteConfig.portrait.src}
              alt={siteConfig.portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </div>

      {/* small glowing points on the frame edges */}
      <span aria-hidden className="absolute right-0 top-[55%] h-2.5 w-2.5 translate-x-1/2 rounded-full bg-magenta shadow-[0_0_14px_rgb(var(--magenta))]" />
      <span aria-hidden className="absolute left-0 top-[78%] h-2 w-2 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_12px_rgb(var(--blue))]" />
    </div>
  );
}
