import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/app/config/site";
import { Reveal } from "@/app/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="section-y container-page">
      <Reveal className="border-t border-border-hairline pt-10 sm:pt-14">
        <p className="eyebrow">Contact</p>
        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-2xl font-display text-5xl uppercase leading-[0.9] tracking-tight text-text-primary sm:text-6xl">
              Let’s talk about what you’re building.
            </h2>
            <p className="mt-4 text-base text-text-muted">
              I’m open to software engineering and full-stack opportunities.
            </p>
          </div>
          <a className="button-primary w-fit" href={`mailto:${siteConfig.email}`}>
            <Mail size={16} /> {siteConfig.email} <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
