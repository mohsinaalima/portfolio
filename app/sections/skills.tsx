import { Reveal } from "@/app/components/reveal";

const skillGroups = [
  {
    name: "UI & motion",
    skills: ["Interaction design", "CSS transitions", "Framer Motion", "Responsive interfaces"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Fastify", "Python", "FastAPI"],
  },
  {
    name: "Data & infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "Docker"],
  },
  {
    name: "AI",
    skills: ["RAG", "LangChain", "LangGraph", "OpenAI", "Vector search"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="editorial-panel">
      <div className="section-heading">
        <p className="eyebrow">Technical skills</p>
        <h2 className="section-title">Tools I’ve used to build the work above.</h2>
      </div>

      <Reveal className="mt-5 divide-y divide-border-hairline border-y border-border-hairline">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-2 py-3 sm:grid-cols-[130px_1fr] sm:gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wide text-text-primary">{group.name}</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-text-muted">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

