import { siteConfig } from "@/app/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: siteConfig.github, external: true },
    { label: "LinkedIn", href: siteConfig.linkedin, external: true },
    { label: "Email", href: `mailto:${siteConfig.email}`, external: false },
  ];

  return (
    <footer className='container-page border-t border-border-hairline py-10'>
      <div className='flex flex-col items-start justify-between gap-4 text-sm text-text-muted md:flex-row md:items-center'>
        <p className='font-mono-label text-xs' suppressHydrationWarning>
          © {currentYear} {siteConfig.name}
        </p>
        <div className='flex gap-6'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='hover:text-text-primary'
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
