import { Reveal } from "@/app/components/reveal";

export function About() {
  return (
    <section id="about" className="section-y container-page">
      <Reveal className="editorial-panel grid gap-5 md:grid-cols-12 md:gap-10">
        <p className="eyebrow md:col-span-3">Who I am</p>
        <div className="max-w-3xl md:col-span-9">
          <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            I’m a final-year Computer Science student focused on building useful,
            dependable software.
          </h2>
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-base">
            My projects span full-stack applications, distributed image
            processing, and AI workflows. I’m especially interested in the
            engineering decisions behind a product: how data moves through a
            system, how failures are handled, and how the interface helps people
            get useful work done.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
