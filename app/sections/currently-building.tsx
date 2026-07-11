import { currentlyBuilding } from "@/app/content/currently-building";

export function CurrentlyBuilding() {
  return (
    <section id='currently-building' className='section-y container-page'>
      <div className='max-w-xl'>
        <p className='font-mono-label text-xs text-accent-brass'>
          Currently building
        </p>
        <h2 className='mt-3 text-4xl text-text-primary'>
          What I&apos;m learning right now, in public.
        </h2>
      </div>

      <div className='mt-12 grid gap-6 sm:grid-cols-3'>
        {currentlyBuilding.map((item) => (
          <div key={item.id} className='border-l border-accent-brass/40 pl-5'>
            <span className='font-mono-label text-sm text-text-primary'>
              {item.label}
            </span>
            <p className='mt-2 text-sm leading-relaxed text-text-muted'>
              {item.why}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
