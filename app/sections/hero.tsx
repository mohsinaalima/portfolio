"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type Variants,
  type Easing,
} from "framer-motion";
import { PortraitFrame } from "@/app/components/portrait-frame";
import { Sparkles, ArrowRight } from "lucide-react";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const parallaxX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20 });

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
    rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 16);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <section
      id='top'
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className='relative container-page grid min-h-[90vh] grid-cols-1 items-center gap-14 pt-32 lg:grid-cols-[58%_42%] lg:gap-10 lg:pt-20 overflow-hidden'
    >
      {/* Background Neon Glow Effects (Oryzo Style) */}
      <div className='absolute top-1/4 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none' />

      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='flex flex-col gap-7 z-10'
      >
        <motion.div variants={item} className='w-fit'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-cyan-400 backdrop-blur-md'>
            <Sparkles size={13} className='text-rose-400' /> Available for
            Full-Stack & AI Roles
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className='text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-tight text-white'
        >
          Full-stack engineer <br />
          building systems that <br />
          <span className='bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>
            hold up under load.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className='text-slate-400 text-base max-w-xl leading-relaxed'
        >
          Specialized in distributed architectures, scalable backends, and
          agentic AI workflows. Turning complex bottlenecks into
          production-grade performance.
        </motion.p>

        <motion.div variants={item} className='flex items-center gap-4 pt-2'>
          <a
            href='#selected-work'
            className='inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-6 py-3 text-sm font-medium transition-all hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
          >
            Explore Systems <ArrowRight size={16} />
          </a>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20'
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='block z-10'
      >
        <PortraitFrame
          src='/profile.png'
          alt='Mohsina Alima'
          parallaxX={parallaxX}
          parallaxY={parallaxY}
        />
      </motion.div>
    </section>
  );
}
