import Image from "next/image";
import { publicFileExists } from "@/lib/public-file";

/** Shows public/images/projects/<slug>.png when it exists, else a neutral empty box. */
export function ProjectImage({ slug, title, className = "aspect-[2.2/1]" }: { slug: string; title: string; className?: string }) {
  const src = `/images/projects/${slug}.png`;
  const exists = publicFileExists(src);

  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-line bg-bg/40 ${className}`}>
      {exists ? (
        <Image src={src} alt={`Screenshot of ${title}`} fill sizes="(min-width: 768px) 40rem, 100vw" className="object-contain object-center" />
      ) : (
        <div aria-hidden className="flex h-full w-full items-center justify-center border border-dashed border-line font-mono text-xs uppercase tracking-[0.2em] text-muted/60">
          Screenshot coming soon
        </div>
      )}
    </div>
  );
}
