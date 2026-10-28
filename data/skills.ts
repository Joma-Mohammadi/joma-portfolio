export interface SkillCategory {
  title: string;
  icon: "layout" | "boxes" | "palette" | "wrench";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { title: "Frontend Development", icon: "layout", skills: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { title: "Frameworks and Libraries", icon: "boxes", skills: ["React", "Next.js"] },
  { title: "Styling", icon: "palette", skills: ["Tailwind CSS", "CSS"] },
  { title: "Tools and Workflow", icon: "wrench", skills: ["Git", "GitHub"] },
];
