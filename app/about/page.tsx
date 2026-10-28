import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "About" };

// Edit this copy so it reflects your real background.
const sections = [
  {
    title: "Introduction",
    body: [
      "I'm Joma Mohammadi, a frontend developer who builds modern, responsive interfaces with Next.js, TypeScript and Tailwind CSS.",
      "I care about the whole path from design to browser: clear structure, readable code, and interfaces that feel considered at every screen size.",
    ],
  },
  {
    title: "Development interests",
    list: [
      "Component-driven interfaces with React and Next.js",
      "Type-safe code with TypeScript",
      "Design systems and styling with Tailwind CSS",
      "Accessible, responsive layouts that work on every device",
    ],
  },
  {
    title: "Coding philosophy",
    body: [
      "Write code the next person can read, including future me. Keep components small and reusable, name things plainly, and add a dependency only when it earns its place.",
      "Good design and clean code support each other: a tidy structure makes interfaces easier to refine, test and maintain.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Who I am" title="About me">
        A frontend developer focused on thoughtful design and clean code.
      </PageHeader>

      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="neon-card grid gap-4 p-6 sm:p-8 md:grid-cols-[14rem_1fr] md:gap-10">
            <h2 className="font-display text-3xl uppercase tracking-wide text-fg">{s.title}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              {"body" in s ? s.body.map((p) => <p key={p}>{p}</p>) : null}
              {"list" in s ? (
                <ul className="space-y-3">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-electric shadow-[0_0_8px_rgb(var(--blue))]" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/projects">View work</Button>
        <Button href="/contact" variant="secondary">
          Get in touch
        </Button>
      </div>
    </PageContainer>
  );
}
