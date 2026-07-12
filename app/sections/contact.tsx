"use client";

import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";
import { siteConfig } from "@/app/config/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable
    }
  }

  return (
    <section id='contact' className='section-y container-page'>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='font-mono-label text-xs text-accent-brass'>Contact</p>
        <h2 className='mt-3 text-4xl text-text-primary sm:text-5xl'>
          {siteConfig.availability}.
        </h2>
        <p className='mt-4 text-lg text-text-muted'>
          The fastest way to reach me is email — no form, no gatekeeping.
        </p>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          <button
            type='button'
            onClick={handleCopyEmail}
            className='inline-flex items-center gap-2 rounded-full bg-accent-terracotta px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-accent-terracotta-hover'
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied
              </>
            ) : (
              <>
                <Copy size={16} />
                {siteConfig.email}
              </>
            )}
          </button>

          <a
            href={siteConfig.resumeHref}
            className='inline-flex items-center gap-2 rounded-full border border-border-hairline px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent-olive hover:text-accent-olive'
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className='mt-10 flex items-center justify-center gap-6 text-text-muted'>
          <a
            href={siteConfig.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='transition-colors hover:text-text-primary'
          >
            <GithubIcon size={20} />
          </a>

          <a
            href={siteConfig.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='transition-colors hover:text-text-primary'
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
