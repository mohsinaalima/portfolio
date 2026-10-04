"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/app/content/projects";

const featuredSlugs = ["devplot-ai", "picscale", "cortex"];

export function ProjectsSection() {
  const otherProjects = projects.filter(
    (project) => !featuredSlugs.includes(project.slug),
  );

  return (
    <section id="projects" className="section-y container-page overflow-visible">
      <div className="max-w-xl">
        <p className="font-mono-label flex items-center gap-2 text-sm tracking-widest text-accent-brass">
          <Code2 size={14} /> More Projects
        </p>
        <h2 className="mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl">
          A few more things I’ve built.
        </h2>
        <p className="mt-4 text-sm text-slate-400">
          A broader collection of full-stack applications and experiments.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glow-card group flex flex-col justify-between rounded-[24px] p-6 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium text-white">{project.name}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} source code`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-rose-500 hover:bg-rose-500 hover:text-white"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <p className="mb-3 font-mono text-xs text-rose-400">
                {project.tagline}
              </p>
              <p className="text-xs leading-relaxed text-slate-400">
                {project.description}
              </p>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 self-start text-xs text-cyan-400 transition-colors hover:text-white"
              >
                Visit project <ArrowUpRight size={13} />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
