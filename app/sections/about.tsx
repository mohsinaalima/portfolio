export function About() {
  return (
    <section id='about' className='section-y container-page'>
      <div className='mx-auto max-w-2xl'>
        <p className='font-mono-label text-xs text-accent-brass'>About</p>

        <div className='mt-6 flex flex-col gap-5 text-lg leading-relaxed text-text-muted'>
          <p>
            I got into engineering through the parts most people skip — the
            schema design, the deploy script that keeps failing at 2am. Those
            are the problems I still enjoy most.
          </p>
          <p>
            Most of what I&apos;ve built started as a small, specific annoyance:
            a resume tool that shouldn&apos;t need a backend server, an image
            pipeline that shouldn&apos;t block on a single slow job. Working
            backward from that annoyance to a system that actually holds up is
            the part that keeps me interested.
          </p>
          <p>
            Right now that curiosity is pointed at AI systems that have to deal
            with messy, real-world input — medical reports, resumes in a dozen
            inconsistent formats — where the interesting problem isn&apos;t the
            model, it&apos;s everything around it.
          </p>
        </div>
      </div>
    </section>
  );
}
