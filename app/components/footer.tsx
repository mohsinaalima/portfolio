"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/app/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className='mt-24 border-t border-border-hairline bg-bg-base py-8'>
      <div className='container-page flex flex-col items-center justify-between gap-6 sm:flex-row'>
        <div className='flex flex-col items-center gap-2 sm:items-start'>
          <p className='font-mono-label text-xs text-text-muted'>
            © {currentYear} Mohsina Alima
          </p>
          <div className='flex items-center gap-2'>
            <span className='relative flex h-1.5 w-1.5'>
              <span className='absolute inline-flex h-full w-full rounded-full bg-state-success opacity-75' />
            </span>
            <span className='font-mono-label text-[10px] text-text-disabled uppercase tracking-wider'>
              All systems operational
            </span>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <a
            href={siteConfig.github}
            target='_blank'
            rel='noreferrer'
            className='text-sm text-text-muted transition-colors hover:text-text-primary'
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target='_blank'
            rel='noreferrer'
            className='text-sm text-text-muted transition-colors hover:text-text-primary'
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className='group flex h-10 w-10 items-center justify-center rounded-full border border-border-hairline bg-bg-surface transition-all hover:border-accent-olive hover:text-accent-olive'
            aria-label='Scroll to top'
          >
            <ArrowUp
              size={16}
              className='text-text-muted transition-transform group-hover:-translate-y-1 group-hover:text-accent-olive'
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
