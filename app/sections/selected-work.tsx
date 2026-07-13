"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/content/projects";

export function SelectedWork() {
  return (
    <section id="selected-work" className="section-y container-page overflow-visible">
      <div className="max-w-xl">
        <p className="font-mono-label text-sm tracking-widest text-accent-brass">
          Selected work
        </p>
        <h2 className="mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl">
          Systems that solve real-world problems.
        </h2>
      </div>

      {/* The Animated Blueprint Line & Projects */}
      <div className="relative mt-16 max-w-3xl pl-8">
        {/* Animated Vertical Line */}
        <motion.div
          className="absolute left-0 top-0 w-px bg-border-hairline"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="flex flex-col gap-16">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Dot marker */}
              <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent-brass bg-bg-base" />
              
              <div className="rounded-[20px] border border-border-hairline bg-bg-surface p-8 hover:border-accent-olive/30 transition-all">
                <h3 className="text-2xl text-text-primary">{project.name}</h3>
                <p className="mt-2 text-text-muted">{project.tagline}</p>
                <div className="mt-6 flex gap-3">
                    {/* Placeholder for project links or tags */}
                    <span className="text-xs font-mono text-accent-olive">View Architecture →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}