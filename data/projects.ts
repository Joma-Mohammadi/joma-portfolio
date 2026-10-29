export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  /** Only add real URLs. Links are hidden when empty. */
  liveUrl?: string;
  repoUrl?: string;
  /** Remove this flag once the entry describes a real project. */
  placeholder?: boolean;
}

/**
 * Screenshots: save an image as  public/images/projects/<slug>.png  (16:9 works best).
 * It is picked up automatically; until it exists a neutral box is shown.
 */
export const projects: Project[] = [
  {
    slug: "shopping-community",
    title: "Shopping Community",
    summary: "A shopping community web app built with React and Tailwind CSS.",
    description:
      "A web app built with React and styled with Tailwind CSS, deployed on Vercel. Add a few lines here about what users can do in it and what you built.",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://shopping-community.vercel.app/",
  },
  {
    slug: "portfolio-website",
    title: "Developer Portfolio",
    summary: "This website: a multi-page, responsive portfolio with light and dark themes.",
    description:
      "A multi-page portfolio built with the Next.js App Router, TypeScript and Tailwind CSS. It has a shared sidebar layout, a light and dark theme that remembers your choice, a responsive mobile menu, and a contact form with validation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
  {
    slug: "ziayamin-dev",
    title: "Zia Yamin Portfolio",
    summary: "A personal portfolio website for a full stack developer.",
    description:
      "Describe what you built here: your role, what the site includes, and the result.",
    tech: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS", "HTML"],
    liveUrl: "https://ziayamin.dev",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
