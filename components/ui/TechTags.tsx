export function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {tech.map((t) => (
        <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-aqua">
          {t}
        </li>
      ))}
    </ul>
  );
}
