"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/app/config/site";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-border-hairline bg-bg-base py-12">
      <div className="container-page flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="font-mono-label text-xs text-text-muted">
            © {new Date().getFullYear()} Mohsina Alima
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-state-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-state-success" />
            </span>
            <span className="font-mono-label text-[10px] uppercase tracking-wider text-text-disabled">
              All systems operational
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-sm text-text-muted transition-colors hover:text-text-primary">
            GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-sm text-text-muted transition-colors hover:text-text-primary">
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hairline bg-bg-surface transition-all hover:border-accent-olive hover:text-accent-olive"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}