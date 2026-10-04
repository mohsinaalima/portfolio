import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/app/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border-hairline py-7">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-xs text-text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-5">
          <a className="text-link" href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-link" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="icon-link h-9 w-9" href="#top" aria-label="Back to top">
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
