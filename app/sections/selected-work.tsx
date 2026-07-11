import { projects } from "@/app/content/projects";
import { ProjectCard } from "@/app/components/project-card";

export function SelectedWork() {
  return (
    <section id="selected-work" className="section-y container-page">
      <div className="max-w-xl">
        <p className="font-mono-label text-xs text-accent-brass">
          Selected work
        </p>
        <h2 className="mt-3 text-4xl text-text-primary">
          Three shipped systems, and what they actually taught me.
        </h2>
      </div>

      <div className="mt-14 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
