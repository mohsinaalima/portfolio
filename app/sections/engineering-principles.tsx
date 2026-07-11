import {
  Boxes,
  Wrench,
  Layers,
  FileSearch,
  ShieldCheck,
  Database,
} from "lucide-react";
import { principles } from "@/app/content/principles";
import type { ComponentType } from "react";

const icons = {
  "independently-deployable": Boxes,
  "fix-the-deployment": Wrench,
  "state-lives-in-one-place": Layers,
  "parse-for-reality": FileSearch,
  "auth-is-not-an-afterthought": ShieldCheck,
  "schemas-earn-complexity": Database,
} as const;

type IconKeys = keyof typeof icons;

export function EngineeringPrinciples() {
  return (
    <section id='engineering-principles' className='section-y container-page'>
      <div className='max-w-xl'>
        <p className='font-mono-label text-xs text-accent-brass'>
          Engineering principles
        </p>
        <h2 className='mt-3 text-4xl text-text-primary'>
          Not a skills list. How I actually decide things.
        </h2>
      </div>

      <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {principles.map((principle) => {
          // Use type-safe lookup; fallback to Boxes if id is missing or mismatched
          const Icon = icons[principle.id as IconKeys] ?? Boxes;

          return (
            <div
              key={principle.id}
              className='rounded-[20px] border border-border-hairline bg-bg-surface p-7 transition-colors hover:border-accent-olive/50'
            >
              <Icon size={20} strokeWidth={1.5} className='text-accent-olive' />
              <h3 className='mt-5 text-lg text-text-primary'>
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
