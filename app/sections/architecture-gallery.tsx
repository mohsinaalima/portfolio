"use client";

import { projects } from "@/app/content/projects";
import { BlueprintDiagram } from "@/app/components/blueprint-diagram";

export function ArchitectureGallery() {
  // Filters projects that have diagram data
  const diagrammedProjects = projects.filter((p) => p.diagram);

  return (
    <section
      id='architecture-gallery'
      className='section-y container-page overflow-visible'
    >
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass'>
          Architecture gallery
        </p>
        {/* Updated Heading: No longer constrained to "Three" */}
        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          Systems, drawn the way I actually built them.
        </h2>
        <p className='mt-5 text-lg leading-relaxed text-text-muted'>
          Hover a diagram to trace the request flow. These aren't just
          decoration — they're the real shape of each system.
        </p>
      </div>

      {/* Grid Layout: Responsive for 1, 2, or 3+ projects */}
      <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {diagrammedProjects.map((project) => (
          <div
            key={project.slug}
            className='group rounded-[20px] border border-border-hairline bg-bg-surface p-6 transition-all hover:border-accent-olive/30'
          >
            <h3 className='text-lg text-text-primary'>{project.name}</h3>
            <p className='mt-1 text-sm text-text-muted'>{project.tagline}</p>

            {/* The Blueprint Engine */}
            <div className='mt-8'>
              <BlueprintDiagram
                nodes={project.diagram!.nodes}
                edges={project.diagram!.edges}
                viewBox={project.diagram!.viewBox}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
