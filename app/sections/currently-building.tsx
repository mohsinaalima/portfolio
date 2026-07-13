"use client";

import { currentlyBuilding } from "@/app/content/currently-building";

export function CurrentlyBuilding() {
  return (
    <section
      id='currently-building'
      className='section-y container-page overflow-visible'
    >
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass'>
          Currently building
        </p>
        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          What I&apos;m learning right now, in public.
        </h2>
      </div>

      <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {currentlyBuilding.map((item) => (
          <div
            key={item.id}
            className='group flex flex-col gap-3 rounded-[20px] border border-border-hairline bg-bg-surface p-8 transition-all hover:border-accent-olive/30'
          >
            <span className='font-mono-label text-xs uppercase tracking-wider text-accent-olive'>
              {item.label}
            </span>
            <p className='text-sm leading-relaxed text-text-muted'>
              {item.why}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
