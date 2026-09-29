"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/content/projects";
import { ArrowUpRight, Code2 } from "lucide-react";

export function SelectedWork() {
  // Yahan hum DevPilot AI aur PicScale jaise top impact projects ko select kar rahe hain
  const topSlugs = ["devplot-ai", "picscale", "cortex"];
  const topProjects = projects.filter((p) => topSlugs.includes(p.slug));

  return (
    <section
      id='selected-work'
      className='section-y container-page overflow-visible'
    >
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass flex items-center gap-2'>
          <Code2 size={14} /> Selected Work
        </p>

        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          Systems that solve real-world problems.
        </h2>
        <p className='mt-4 text-slate-400 text-sm'>
          Curated production-grade full-stack and AI multi-agent systems built
          for scale.
        </p>
      </div>

      {/* Grid Layout for Top Impact Projects - Zero heavy scrolling */}
      <div className='mt-14 grid gap-6 md:grid-cols-3'>
        {topProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='group flex flex-col justify-between glow-card rounded-[24px] p-6 transition-all hover:-translate-y-1'
          >
            <div>
              <div className='flex items-start justify-between gap-4 mb-4'>
                <h3 className='text-xl text-white font-medium'>
                  {project.name}
                </h3>
                {project.liveUrl || project.github ? (
                  <a
                    href={project.liveUrl || project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-rose-500 hover:border-rose-500 hover:text-white'
                  >
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>

              <p className='text-xs font-mono text-rose-400 mb-3'>
                {project.tagline}
              </p>
              <p className='text-xs leading-relaxed text-slate-400 line-clamp-3'>
                {project.description}
              </p>
            </div>

            <div className='mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400'>
              <span className='text-cyan-400'>Production Ready</span>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
