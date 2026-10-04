"use client";

import { useMotionValue, useReducedMotion, useSpring, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  FileText,
  Layers3,
  Mail,
  MousePointer2,
} from "lucide-react";
import { siteConfig } from "@/app/config/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const portraitX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const portraitY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const tiltX = useSpring(rawTiltX, { stiffness: 120, damping: 24 });
  const tiltY = useSpring(rawTiltY, { stiffness: 120, damping: 24 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
    rawTiltX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -3);
    rawTiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 3);
  }

  function resetPortraitPosition() {
    pointerX.set(0);
    pointerY.set(0);
    rawTiltX.set(0);
    rawTiltY.set(0);
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPortraitPosition}
      className="hero-shell container-page grid min-h-[min(760px,100svh)] items-center gap-12 overflow-hidden pb-16 pt-32 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pt-28"
    >
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow mb-5">
          <span className="h-2 w-2 rounded-full bg-state-success" />
          UI ENGINEERING · INTERACTION · FULL-STACK
        </p>
        <h1 className="font-display text-[clamp(4.4rem,10vw,8.5rem)] uppercase leading-[0.76] tracking-[-0.035em] text-text-primary">
          <span className="block">Mohsina</span>
          <span className="block text-accent-primary">Alima</span>
        </h1>
        <p className="mt-6 border-l-4 border-accent-primary pl-3 text-lg font-bold uppercase tracking-wide text-text-primary sm:text-xl">
          UI Developer <span className="text-text-disabled">/</span> Full-Stack Engineer
        </p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
          I build interfaces where purposeful motion, visual clarity, and robust
          engineering work together.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#selected-work" className="button-primary">
            Explore my work <ArrowDown size={15} />
          </a>
          <a href={siteConfig.resumeHref} target="_blank" rel="noopener noreferrer" className="button-secondary">
            Resume <FileText size={15} />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted">
          <a className="text-link" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a className="text-link" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a className="text-link" href={`mailto:${siteConfig.email}`}>
            Email <Mail size={14} />
          </a>
        </div>
        <p className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-text-muted">
          <span className="h-2 w-2 rounded-full bg-state-success" aria-hidden="true" />
          {siteConfig.availability}
        </p>
      </motion.div>

      <motion.div
        className="hero-visual relative z-10 mx-auto w-full max-w-[360px] md:justify-self-end"
        style={{
          x: reduceMotion ? 0 : portraitX,
          y: reduceMotion ? 0 : portraitY,
          rotateX: reduceMotion ? 0 : tiltX,
          rotateY: reduceMotion ? 0 : tiltY,
          transformPerspective: 900,
        }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08 }}
        whileHover={reduceMotion ? undefined : { scale: 1.012 }}
      >
        <div className="float-panel float-panel-code" aria-hidden="true">
          <span className="float-panel-icon"><Braces size={15} /></span>
          <span><strong>interface.tsx</strong><small>crafted with intent</small></span>
        </div>
        <div className="absolute -inset-2 border-2 border-border-hairline bg-[#d6c5bf]" aria-hidden="true" />
        <div className="group relative aspect-[4/5] overflow-hidden border-2 border-border-hairline bg-bg-surface">
          <Image
            src="/profile.png"
            alt="Portrait of Mohsina Alima"
            fill
            priority
            sizes="(max-width: 767px) 80vw, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        </div>
        <div className="float-panel float-panel-motion" aria-hidden="true">
          <span className="float-panel-icon"><Layers3 size={15} /></span>
          <span><strong>Motion system</strong><small>transitions · states · feel</small></span>
        </div>
        <div className="float-panel float-panel-cursor" aria-hidden="true">
          <MousePointer2 size={15} /> UI / interaction
        </div>
      </motion.div>
    </section>
  );
}
