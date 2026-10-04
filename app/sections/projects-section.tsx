import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/content/projects";
import { Reveal } from "@/app/components/reveal";
import { ProjectCover } from "@/app/components/project-cover";

const featuredSlugs = ["picscale", "cortex", "devplot-ai"];

export function ProjectsSection() {
  const otherProjects = projects.filter(
    (project) => !featuredSlugs.includes(project.slug),
  );

  return (
    <section id="projects" className="section-y container-page pt-0">
      <Reveal className="section-heading">
        <p className="eyebrow">More projects</p>
        <h2 className="section-title">Other things I’ve built.</h2>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {otherProjects.map((project, index) => (
          <Reveal key={project.slug} className="h-full" delay={index * 0.05}>
          <article className="project-card h-full flex flex-col">
            <ProjectCover project={project} />
            <h3 className="text-lg font-semibold tracking-tight text-text-primary">{project.name}</h3>
            <p className="mt-2 text-xs font-medium text-accent-primary">{project.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
              {project.tech.map((technology) => (
                <li key={technology} className="tech-chip">{technology}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-4 text-xs">
              {project.sourceUrl && (
                <a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Source <ArrowUpRight size={13} />
                </a>
              )}
              {project.liveUrl && (
                <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live demo <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
