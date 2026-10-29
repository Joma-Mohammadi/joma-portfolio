export type NavIcon = "home" | "about" | "work" | "skills" | "contact";

export interface NavItem {
  label: string;
  href: string;
  icon: NavIcon;
}

export interface SiteConfig {
  name: string;
  firstName: string;
  lastName: string;
  logo: string;
  title: string;
  /** Hero text under the name. */
  description: string;
  /** Phrases inside `description` to highlight in pink. Must match the text exactly. */
  descriptionHighlights: string[];
  /** Set `enabled: false` to hide the badge on the Home page. */
  availability: { enabled: boolean; label: string };
  /** Drop your photo at public{src}. It appears inside the existing frame. */
  portrait: { src: string; alt: string };
  /** Put your CV at public{path}. The button activates once the file exists. */
  cv: { path: string };
  contact: {
    /** Your real email address. */
    email: string;
    /** Phone number as displayed, and the same number in international format for tel: links. */
    phone: string;
    phoneHref: string;
    /** Optional form endpoint (e.g. Formspree). Leave null if you have none. */
    formEndpoint: string | null;
  };
  /** Full profile URLs. Leave empty until you add them. */
  socials: { github: string; linkedin: string };
  nav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Joma Mohammadi",
  firstName: "Joma",
  lastName: "Mohammadi",
  logo: "JM.",
  title: "Frontend Developer",
  description:
    "I build modern, responsive websites with thoughtful design and clean code.",
  descriptionHighlights: ["responsive websites", "clean code"],
  availability: { enabled: true, label: "Available for work" },
  portrait: {
    src: "/images/joma-portrait.png",
    alt: "Portrait of Joma Mohammadi",
  },
  cv: { path: "/cv/joma-mohammadi-cv.pdf" },
  contact: {
    email: "jmfrotan@gmail.com",
    phone: "0789325708",
    phoneHref: "tel:+93789325708",
    formEndpoint: null,
  },
  socials: { github: "https://github.com/Joma-Mohammadi", linkedin: "https://www.linkedin.com/in/joma-mohammadi-668233401" },
  nav: [
    { label: "Home", href: "/", icon: "home" },
    { label: "About", href: "/about", icon: "about" },
    { label: "Projects", href: "/projects", icon: "work" },
    { label: "Skills", href: "/skills", icon: "skills" },
    { label: "Contact", href: "/contact", icon: "contact" },
  ],
};
