"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/app/config/site";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id='contact' className='section-y container-page'>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='font-mono-label text-xs text-accent-brass'>Contact</p>
        <h2 className='mt-4 text-5xl leading-[1.05] text-text-primary sm:text-6xl'>
          {siteConfig.availability.replace(".", "")}.
        </h2>
        <p className='mt-4 text-lg text-text-muted'>
          The fastest way to reach me is email — no form, no gatekeeping.
        </p>

        <div className='mt-10 flex justify-center'>
          <button
            type='button'
            onClick={handleCopyEmail}
            className='group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-bg-surface border border-border-hairline px-6 py-3 text-sm font-medium text-text-primary transition-all hover:border-accent-terracotta'
          >
            <AnimatePresence mode='wait'>
              {copied ? (
                <motion.span
                  key='check'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='flex items-center gap-2 text-accent-terracotta'
                >
                  <Check size={16} />
                  Copied to clipboard
                </motion.span>
              ) : (
                <motion.span
                  key='copy'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='flex items-center gap-2'
                >
                  <Copy size={16} />
                  {siteConfig.email}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </section>
  );
}
