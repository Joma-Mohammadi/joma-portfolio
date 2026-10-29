import type { CSSProperties } from "react";

/**
 * Decorative tech icons that travel around the portrait frame, evenly spaced.
 * Uses CSS offset-path (see .orbit in globals.css); hidden where unsupported.
 * Edit the list below to change, add or remove icons.
 */
const icons = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="none" stroke="rgb(var(--fg))" strokeWidth="1.6" />
        <path d="M9 16V8l7 9.5M15.5 8v4" fill="none" stroke="rgb(var(--fg))" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <g fill="none" stroke="#38bdf8" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
        <circle cx="12" cy="12" r="1.8" fill="#38bdf8" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="#22d3ee"
          d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.665 17.818 9.026 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6 12z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6" />
        <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">
          TS
        </text>
      </svg>
    ),
  },
];

export function TechOrbit() {
  return (
    <div aria-hidden className="orbit">
      {icons.map((icon, i) => (
        <span
          key={icon.name}
          title={icon.name}
          className="orbit-icon"
          style={{ "--o": `${(i * 100) / icons.length}%`, "--d": `${-(i * 28) / icons.length}s` } as CSSProperties}
        >
          {icon.svg}
        </span>
      ))}
    </div>
  );
}
