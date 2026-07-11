export const siteConfig = {
  name: "Mohsina Alima",
  title: "Mohsina Alima — Full-Stack Engineer",
  description:
    "Full-stack engineer building systems that hold up under load. Selected work, architecture, and engineering principles.",
  url: "https://mohsinaalima.dev", // placeholder — update on deploy
  email: "mohsinaalima2006@gmail.com",
  github: "https://github.com/mohsinaalima",
  linkedin: "https://linkedin.com/in/mohsina-alima",
  resumeHref: "/resume.pdf", // drop the real resume PDF into /public
  availability: "Available for Summer 2027 internships",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#selected-work" },
  { label: "Principles", href: "#engineering-principles" },
  { label: "Architecture", href: "#architecture-gallery" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
