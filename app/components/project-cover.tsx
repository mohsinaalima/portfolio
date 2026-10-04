import Image from "next/image";
import type { Project } from "@/app/content/projects";

export function ProjectCover({ project }: { project: Project }) {
  return (
    <div className="project-cover group/cover">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/cover:scale-[1.04]"
        />
      ) : (
        <div className="project-cover-fallback">
          <div className="cover-window" aria-hidden="true">
            <div className="cover-window-bar">
              <i /><i /><i />
              <span>PROJECT / {project.slug.toUpperCase()}</span>
            </div>
            <div className="cover-window-content">
              <div className="cover-window-rail" />
              <div className="cover-window-main">
                <span className="cover-window-block" />
                <span className="cover-window-line" />
                <span className="cover-window-line short" />
              </div>
            </div>
          </div>
          <span className="project-cover-mark" aria-hidden="true">
            {project.name.slice(0, 2)}
          </span>
        </div>
      )}
      {project.image && (
        <span className="project-cover-label">{project.name} / PROJECT PREVIEW</span>
      )}
    </div>
  );
}
