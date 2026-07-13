"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  inProgress?: boolean; // Added per V2 spec
};

export function ProjectCard({ project }: { project: Project }) {
  // If in progress, remove the hover lift and apply a disabled aesthetic
  if (project.inProgress) {
    return (
      <div className='group relative flex flex-col gap-4 rounded-[24px] border border-dashed border-border-hairline bg-bg-base/30 p-8'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-2xl font-medium tracking-tight text-text-disabled'>
            {project.title}
          </h3>
          <div className='flex items-center gap-2 rounded-full border border-border-hairline px-3 py-1 font-mono-label text-xs text-text-disabled'>
            <Clock size={12} />
            In Progress
          </div>
        </div>
        <p className='flex-grow text-base leading-relaxed text-text-disabled'>
          {project.description}
        </p>
      </div>
    );
  }

  // Finished projects (PicScale, AI-Resume-Analyzer, etc.)
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className='group relative flex flex-col gap-4 rounded-[24px] border border-border-hairline bg-bg-surface/50 p-8 transition-all duration-500 hover:border-accent-terracotta/30 shadow-sm'
    >
      <div className='flex items-start justify-between gap-4'>
        <h3 className='text-2xl font-medium tracking-tight text-text-primary'>
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target='_blank'
            rel='noreferrer'
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-hairline bg-bg-surface transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-45 hover:border-accent-terracotta hover:text-accent-terracotta'
          >
            <ArrowUpRight
              size={18}
              className='text-text-muted group-hover:text-accent-terracotta transition-colors'
            />
          </a>
        )}
      </div>

      <p className='flex-grow text-base leading-relaxed text-text-muted'>
        {project.description}
      </p>

      <div className='flex flex-wrap gap-2 pt-2'>
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className='rounded-full border border-border-hairline px-3 py-1 font-mono-label text-[10px] uppercase tracking-wider text-text-muted transition-colors group-hover:border-accent-terracotta/30 group-hover:text-accent-terracotta'
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
