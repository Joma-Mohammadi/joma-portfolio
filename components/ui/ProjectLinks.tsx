import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

const link =
  "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-fg";

export function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) {
    return <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted/60">Links not added yet</p>;
  }
  return (
    <div className="flex flex-wrap gap-5">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={link}>
          <ExternalLink className="h-4 w-4" aria-hidden />
          Live demo
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      {project.repoUrl ? (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={link}>
          <Github className="h-4 w-4" aria-hidden />
          GitHub
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}
