import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const items = [
  { key: "github", label: "GitHub", Icon: Github },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
] as const;

/** Icons are always shown; a link activates only when its URL is set in data/site-config.ts. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {items.map(({ key, label, Icon }) => {
        const href = siteConfig.socials[key];
        return (
          <li key={key}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="text-muted transition-colors hover:text-fg"
              >
                <Icon className="h-6 w-6" aria-hidden />
              </a>
            ) : (
              <span
                aria-disabled="true"
                title={`Add your ${label} URL in data/site-config.ts`}
                className="inline-block cursor-not-allowed text-muted/40"
              >
                <Icon className="h-6 w-6" aria-hidden />
                <span className="sr-only">{label} link not set</span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
