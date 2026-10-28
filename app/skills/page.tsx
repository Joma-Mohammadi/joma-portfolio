import type { Metadata } from "next";
import { Boxes, LayoutTemplate, Palette, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { PageContainer } from "@/components/ui/PageContainer";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Skills" };

const icons: Record<SkillCategory["icon"], LucideIcon> = {
  layout: LayoutTemplate,
  boxes: Boxes,
  palette: Palette,
  wrench: Wrench,
};

export default function SkillsPage() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Technical skills" title="Skills">
        The languages, frameworks and tools I build with.
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat) => {
          const Icon = icons[cat.icon];
          return (
            <section key={cat.title} className="neon-card p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="neon-ring flex h-11 w-11 items-center justify-center rounded-lg text-electric">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="font-display text-3xl uppercase tracking-wide">{cat.title}</h2>
              </div>
              <ul className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="rounded-md border border-line bg-bg/40 px-4 py-2 font-mono text-sm text-fg">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
}
