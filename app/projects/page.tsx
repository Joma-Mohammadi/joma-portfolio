import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { PageContainer } from "@/components/ui/PageContainer";
import { PageHeader } from "@/components/ui/PageHeader";
import { TechTags } from "@/components/ui/TechTags";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { ProjectImage } from "@/components/ui/ProjectImage";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Selected work" title="Projects">
        A gallery of projects, each with its technologies and links.
      </PageHeader>

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <article className="neon-card neon-card-hover flex h-full flex-col gap-5 p-6 sm:p-7">
              <ProjectImage slug={project.slug} title={project.title} />
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-3xl uppercase tracking-wide">{project.title}</h2>
                {project.placeholder ? (
                  <span className="shrink-0 rounded-full border border-magenta/50 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-magenta">
                    Placeholder
                  </span>
                ) : null}
              </div>
              <p className="leading-relaxed text-muted">{project.summary}</p>
              <TechTags tech={project.tech} />
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <ProjectLinks project={project} />
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg"
                >
                  Details
                  <ArrowRight className="h-4 w-4 text-electric" aria-hidden />
                  <span className="sr-only">for {project.title}</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
