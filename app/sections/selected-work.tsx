"use client";
import { projects } from "@/app/content/projects";
import { ProjectCard } from "@/app/components/project-card";

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
          Three shipped systems, and what they actually taught me.
        </h2>
      </div>

      <div className='mt-14 grid gap-8'>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
