import { projects } from "@/app/content/projects";
import { BlueprintDiagram } from "@/app/components/blueprint-diagram";

export function ArchitectureGallery() {
  const diagrammed = projects.filter((p) => p.diagram);

  return (
    <section id='architecture-gallery' className='section-y container-page'>
      <div className='max-w-xl'>
        <p className='font-mono-label text-xs text-accent-brass'>
          Architecture gallery
        </p>
        <h2 className='mt-4 text-5xl leading-[1.05] text-text-primary sm:text-6xl'>
          Three systems, drawn the way I actually built them.
        </h2>
        <p className='mt-5 text-lg leading-relaxed text-text-muted'>
          Hover a diagram to trace the request flow. These aren&apos;t
          decoration — they&apos;re the real shape of each system.
        </p>
      </div>

      <div className='mt-14 grid gap-8 lg:grid-cols-3'>
        {diagrammed.map((project) => (
          <div
            key={project.slug}
            className='rounded-[20px] border border-border-hairline bg-bg-surface p-6'
          >
            <h3 className='text-lg text-text-primary'>{project.name}</h3>
            <p className='mt-1 text-sm text-text-muted'>{project.tagline}</p>
            <BlueprintDiagram
              nodes={project.diagram!.nodes}
              edges={project.diagram!.edges}
              viewBox={project.diagram!.viewBox}
              className='mt-6 w-full'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
