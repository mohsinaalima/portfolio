"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiFastapi,
  SiTypescript,
} from "react-icons/si";

// Map your tags to Icons
const tagIcons: Record<string, React.ReactElement> = {
  "Node.js": <SiNodedotjs size={14} />,
  Express: <SiExpress size={14} />,
  MongoDB: <SiMongodb size={14} />,
  Cloudinary: <SiCloudinary size={14} />,
  React: <SiReact size={14} />,
  "Next.js": <SiNextdotjs size={14} />,
  Tailwind: <SiTailwindcss size={14} />,
  PostgreSQL: <SiPostgresql size={14} />,
  FastAPI: <SiFastapi size={14} />,
  TypeScript: <SiTypescript size={14} />,
};

type Project = {
  name: string; // Changed from title to name to match data
  description: string;
  tags?: string[];
  link?: string;
  inProgress?: boolean;
};

export function ProjectCard({ project }: { project: Project }) {
  if (project.inProgress) {
    return (
      <div className='group relative flex flex-col gap-4 rounded-[24px] border border-dashed border-border-hairline bg-bg-base/30 p-8'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-2xl font-medium tracking-tight text-text-disabled'>
            {project.name} {/* FIXED: Was project.title */}
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

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className='group relative flex flex-col gap-4 rounded-[24px] border border-border-hairline bg-bg-surface/50 p-8 shadow-sm hover:border-accent-terracotta/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all'
    >
      <div className='flex items-start justify-between gap-4'>
        <h3 className='text-2xl font-medium tracking-tight text-text-primary'>
          {project.name} {/* FIXED: Was project.title */}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target='_blank'
            rel='noreferrer'
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-hairline bg-bg-surface hover:border-accent-terracotta hover:text-accent-terracotta transition-all group-hover:-translate-y-1 group-hover:rotate-45'
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>

      <p className='flex-grow text-base leading-relaxed text-text-muted'>
        {project.description}
      </p>

      {/* Render Icons instead of text */}
      <div className='flex flex-wrap gap-3 pt-2'>
        {project.tags?.map((tag) => (
          <div
            key={tag}
            title={tag}
            className='flex items-center gap-2 rounded-full border border-border-hairline px-3 py-1.5 text-text-muted transition-colors group-hover:border-accent-terracotta/30 group-hover:text-accent-terracotta'
          >
            {tagIcons[tag] || (
              <span className='text-[10px] uppercase font-mono'>{tag}</span>
            )}
            <span className='font-mono-label text-[10px] uppercase tracking-wider hidden sm:block'>
              {tag}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
