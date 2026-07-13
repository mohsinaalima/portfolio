"use client";
import {
  Boxes,
  Wrench,
  Layers,
  FileSearch,
  ShieldCheck,
  Database,
} from "lucide-react";
import { principles } from "@/app/content/principles";

const icons = {
  "independently-deployable": Boxes,
  "fix-the-deployment": Wrench,
  "state-lives-in-one-place": Layers,
  "parse-for-reality": FileSearch,
  "auth-is-not-an-afterthought": ShieldCheck,
  "schemas-earn-complexity": Database,
} as const;

export function EngineeringPrinciples() {
  return (
    <section id='engineering-principles' className='section-y container-page'>
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass'>
          Engineering principles
        </p>
        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          Not a skills list. How I actually decide things.
        </h2>
      </div>

      <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {principles.map((principle) => {
          const Icon = icons[principle.id as keyof typeof icons] ?? Boxes;
          return (
            <div
              key={principle.id}
              className='rounded-[20px] border border-border-hairline bg-bg-surface p-9 transition-all hover:border-accent-olive/50'
            >
              <Icon size={20} className='text-accent-olive' />
              <h3 className='mt-6 text-xl text-text-primary'>
                {principle.title}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-text-muted'>
                {principle.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
