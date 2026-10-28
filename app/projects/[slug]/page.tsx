import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { PageContainer } from "@/components/ui/PageContainer";
import { TechTags } from "@/components/ui/TechTags";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { ProjectImage } from "@/components/ui/ProjectImage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <PageContainer>
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All projects
      </Link>

      <header className="mb-10">
        <h1 className="text-gradient name-line-2 pb-2 font-display text-[clamp(3rem,7vw,5.5rem)] uppercase leading-[0.95]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
      </header>

      <div className="neon-card space-y-8 p-6 sm:p-8">
        <ProjectImage slug={project.slug} title={project.title} className="aspect-[16/9]" />
        <section>
          <h2 className="mb-3 font-display text-2xl uppercase tracking-wide">Overview</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{project.description}</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-2xl uppercase tracking-wide">Technologies</h2>
          <TechTags tech={project.tech} />
        </section>
        <section className="border-t border-line pt-6">
          <h2 className="sr-only">Links</h2>
          <ProjectLinks project={project} />
        </section>
      </div>
    </PageContainer>
  );
}
