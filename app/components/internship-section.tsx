"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Sparkles,
  FileText,
  ExternalLink,
} from "lucide-react";

export function InternshipSection() {
  return (
    <section id='internship' className='section-y container-page'>
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass flex items-center gap-2'>
          <Sparkles size={14} /> Professional Exposure
        </p>
        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          Current Role & Internship.
        </h2>
        <p className='mt-5 text-sm leading-7 text-text-muted'>
          Building agentic AI systems and framework-based education
          architectures in a live enterprise environment.
        </p>
      </div>

      <div className='mt-14 max-w-3xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='rounded-[24px] border border-border-hairline bg-bg-surface p-8 md:p-10 transition-all hover:border-accent-olive/40 relative overflow-hidden'
        >
          {/* Subtle Accent Glow */}
          <div className='absolute top-0 right-0 h-40 w-40 rounded-full bg-accent-olive/5 blur-3xl pointer-events-none' />

          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-olive/10 text-accent-olive border border-accent-olive/20'>
                <Briefcase size={26} />
              </div>
              <div>
                <h3 className='text-2xl text-text-primary font-medium'>
                  B.Tech Student Intern
                </h3>
                <p className='text-sm font-mono text-accent-brass mt-1'>
                  ZaviaNexus Infoventures Pvt Ltd
                </p>
              </div>
            </div>
            <span className='inline-flex items-center gap-2 rounded-full border border-border-hairline bg-bg-surface-raised px-4 py-1.5 font-mono text-xs text-text-muted w-fit'>
              <Award size={14} className='text-accent-brass' /> Jan 2026 –
              Present
            </span>
          </div>

          <div className='mt-8 space-y-4 text-sm leading-7 text-text-muted'>
            <p>
              Contributing as a core engineering intern to{" "}
              <strong className='text-text-primary'>ZipMinds</strong>—an
              advanced, framework-based AI-enabled education portal designed for
              interactive kids learning.
            </p>
            <p>
              Working extensively with{" "}
              <span className='text-text-primary font-mono text-xs px-2 py-1 rounded bg-bg-surface-raised border border-border-hairline'>
                Python
              </span>
              ,{" "}
              <span className='text-text-primary font-mono text-xs px-2 py-1 rounded bg-bg-surface-raised border border-border-hairline'>
                LangChain
              </span>
              , and{" "}
              <span className='text-text-primary font-mono text-xs px-2 py-1 rounded bg-bg-surface-raised border border-border-hairline'>
                LangGraph
              </span>{" "}
              to develop multi-agent learning systems, structured pipelines, and
              guided study workflows.
            </p>
          </div>

          {/* PDF link with clean formatting */}
          <div className='mt-8 pt-6 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4'>
            <a
              href='/internship-letter.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-xl bg-accent-terracotta/10 border border-accent-terracotta/30 px-5 py-3 text-xs font-mono text-accent-terracotta transition-all hover:bg-accent-terracotta hover:text-white shadow-lg'
            >
              <FileText size={16} /> View Official Internship Confirmation
              Letter <ExternalLink size={14} />
            </a>
            <span className='text-xs font-mono text-text-muted'>
              Ghaziabad, UP
            </span>
          </div>

          <div className='mt-4 flex items-center gap-2'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-state-success opacity-75'></span>
              <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-state-success'></span>
            </span>
            <span className='text-xs font-mono text-state-success tracking-wide uppercase'>
              Active Internship
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
