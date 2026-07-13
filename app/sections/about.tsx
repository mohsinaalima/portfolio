export function About() {
  return (
    <section
      id='about'
      className='section-y container-page flex flex-col items-center overflow-visible'
    >
      <div className='w-full max-w-2xl text-center'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass'>
          About
        </p>

        <div className='mt-8 flex flex-col gap-8 text-lg leading-relaxed text-text-muted'>
          <p>
            I got into engineering through the parts most people skip — the
            schema design, the deploy script that keeps failing at 2am. Those
            are the problems I still enjoy most.
          </p>
          <p>
            Most of what I&apos;ve built started as a small, specific annoyance:
            a resume tool that shouldn&apos;t need a backend server, an image
            pipeline that shouldn&apos;t block on a single slow job.
          </p>
          <p>
            Right now that curiosity is pointed at AI systems that have to deal
            with messy, real-world input — medical reports, resumes in a dozen
            inconsistent formats.
          </p>
        </div>
      </div>
    </section>
  );
}
