import { ArrowUpRight, Briefcase, FileText } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

export function InternshipSection() {
  return (
    <section id="experience" className="editorial-panel">
      <div className="section-heading">
        <p className="eyebrow"><Briefcase size={14} /> Experience</p>
        <h2 className="section-title">Working on AI-enabled learning products.</h2>
      </div>

      <Reveal>
      <article className="mt-6 border-t-2 border-border-hairline pt-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-text-primary">
              B.Tech Student Intern
            </h3>
            <p className="mt-1 text-sm text-text-muted">ZaviaNexus Infoventures Pvt Ltd</p>
          </div>
          <p className="text-sm text-text-muted">Jan 2026 – Present</p>
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-6 text-text-muted">
          Contributing to ZipMinds, an AI-enabled education portal for interactive
          kids’ learning.
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-text-muted marker:text-accent-primary">
          <li>Develop multi-agent learning systems, structured pipelines, and guided study workflows.</li>
          <li>Work with Python, LangChain, and LangGraph.</li>
        </ul>

        <a
          href="/internship-letter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link mt-5 inline-flex text-sm"
        >
          <FileText size={14} /> Internship letter <ArrowUpRight size={14} />
        </a>
      </article>
      </Reveal>
    </section>
  );
}
