import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="container-page border-t border-border-hairline py-10">
      <div className="flex flex-col items-start justify-between gap-4 text-sm text-text-muted md:flex-row md:items-center">
        <p className="font-mono-label text-xs">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-6">
          
            href={siteConfig.github}
            className="hover:text-text-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          
            href={siteConfig.linkedin}
            className="hover:text-text-primary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
