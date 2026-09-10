"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/content/projects";

export function SelectedWork() {
  return (
    <section
      id='selected-work'
      className='section-y container-page overflow-visible'
    >
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass'>
          Selected work
        </p>

        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          Systems that solve real-world problems.
        </h2>
      </div>

      {/* Animated Blueprint Line & Projects */}
      <div className='relative mt-16 max-w-3xl pl-8'>
        {/* Animated Vertical Line */}
        <motion.div
          className='absolute left-0 top-0 w-px bg-border-hairline'
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        <div className='flex flex-col gap-16'>
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              className='relative'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline Dot */}
              <span className='absolute -left-8 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent-brass bg-bg-base' />

              {/* Project Card */}
              <div className='group rounded-[20px] border border-border-hairline bg-bg-surface p-8 transition-all duration-300 hover:border-accent-olive/30 hover:-translate-y-1'>
                <div className='flex items-start justify-between gap-6'>
                  <div>
                    <h3 className='text-2xl text-text-primary'>
                      {project.name}
                    </h3>

                    <p className='mt-2 text-text-muted'>{project.tagline}</p>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`View ${project.name} on GitHub`}
                    className='shrink-0 translate-x-2 text-xs font-mono text-accent-olive opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:text-accent-brass'
                  >
                    GitHub →
                  </a>
                </div>

                {/* Description */}
                <p className='mt-6 max-w-2xl text-sm leading-7 text-text-muted'>
                  {project.description}
                </p>

                {/* Architecture */}
                <div className='mt-6 flex items-center justify-between'>
                  <span className='text-xs font-mono text-accent-olive'>
                    View Architecture →
                  </span>

                  <span className='text-xs font-mono text-text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    Open source
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
