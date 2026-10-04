import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/app/content/projects";
import { Reveal } from "@/app/components/reveal";
import { ProjectCover } from "@/app/components/project-cover";

const featuredSlugs = ["picscale", "cortex", "devplot-ai"];

export function SelectedWork() {
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <section id="selected-work" className="section-y container-page">
      <Reveal className="section-heading">
        <p className="eyebrow"><Code2 size={14} /> Selected work</p>
        <h2 className="section-title">Projects built around real engineering problems.</h2>
        <p className="section-intro">
          A few projects that show how I approach distributed systems, applied
          AI, and product development.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} className="h-full" delay={index * 0.06}>
          <article className="project-card h-full flex flex-col">
            <ProjectCover project={project} />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="project-index">0{index + 1} / Featured project</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
                  {project.name}
                </h3>
              </div>
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code`}
                  className="icon-link"
                >
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>

            <p className="mt-4 text-sm font-medium text-accent-primary">{project.tagline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
              {project.tech.map((technology) => (
                <li key={technology} className="tech-chip">{technology}</li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-5 pt-7 text-sm">
              {project.liveUrl && (
                <a className="text-link text-text-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live demo <ArrowUpRight size={14} />
                </a>
              )}
              {project.sourceUrl && (
                <a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Source code <ArrowUpRight size={14} />
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
