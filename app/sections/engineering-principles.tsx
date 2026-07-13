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
        <h2 className='mt-4 text-5xl leading-[1.05] text-text-primary sm:text-6xl'>
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
              className='rounded-[20px] border border-border-hairline bg-bg-surface p-9 transition-all duration-300 hover:-translate-y-1 hover:border-accent-olive/50 hover:shadow-[0_16px_40px_-16px_var(--color-accent-olive)]'
            >
              <Icon size={20} strokeWidth={1.5} className='text-accent-olive' />
              <h3 className='mt-6 text-2xl leading-tight text-text-primary'>
                {principle.title}
              </h3>
              <p className='mt-3 text-base leading-relaxed text-text-muted/90'>
                {principle.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
