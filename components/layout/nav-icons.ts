import { Briefcase, Code, Home, Mail, User, type LucideIcon } from "lucide-react";
import type { NavIcon } from "@/data/site-config";

export const navIcons: Record<NavIcon, LucideIcon> = {
  home: Home,
  about: User,
  work: Briefcase,
  skills: Code,
  contact: Mail,
};

export function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
