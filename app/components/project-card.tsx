"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "@/app/components/icons";
import type { Project } from "@/app/types";

const detailRows: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "challenge", label: "Challenge" },
  { key: "outcome", label: "Outcome" },
];

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  if (project.status === "in-progress") {
    return (
      <div className='rounded-[20px] border border-dashed border-border-hairline bg-bg-surface/40 p-8'>
        <div className='flex items-baseline justify-between gap-4'>
          <h3 className='text-2xl text-text-primary'>{project.name}</h3>
          <span className='font-mono-label whitespace-nowrap text-xs text-accent-brass'>
            in progress
          </span>
        </div>
        <p className='mt-2 text-text-muted'>{project.tagline}</p>
        <p className='mt-6 text-sm text-text-disabled'>
          Full write-up coming once it&apos;s shipped.
        </p>
      </div>
    );
  }

  return (
    <div className='rounded-[20px] border border-border-hairline bg-bg-surface p-8 transition-colors hover:border-accent-terracotta/40'>
      <div className='flex flex-wrap items-start justify-between gap-4'>
        <div>
          <h3 className='text-2xl text-text-primary'>{project.name}</h3>
          <p className='mt-1 text-text-muted'>{project.tagline}</p>
        </div>

        {project.links?.github && (
          <a
            href={project.links.github}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 rounded-full border border-border-hairline px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent-terracotta hover:text-accent-terracotta'
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        )}
      </div>

      <div className='mt-5 flex flex-wrap gap-2'>
        {project.tech.map((t) => (
          <span
            key={t}
            className='font-mono-label rounded-full border border-border-hairline px-3 py-1 text-xs text-text-muted'
          >
            {t}
          </span>
        ))}
      </div>

      <button
        type='button'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className='mt-6 flex items-center gap-2 text-sm text-accent-olive transition-colors hover:text-accent-terracotta'
      >
        {open ? "Hide the details" : "Problem, architecture, tradeoffs"}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className='overflow-hidden'
          >
            <div className='grid gap-5 border-t border-border-hairline pt-5 mt-5 sm:grid-cols-2'>
              {detailRows.map(({ key, label }) => {
                const value = project[key as keyof Project];
                if (!value || typeof value !== "string") return null;
                return (
                  <div key={key}>
                    <p className='font-mono-label text-xs text-accent-brass'>
                      {label}
                    </p>
                    <p className='mt-2 text-sm leading-relaxed text-text-muted'>
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
