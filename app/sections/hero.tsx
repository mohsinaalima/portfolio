"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";
import { MagneticLink } from "@/app/components/magnetic-link";
import { PortraitFrame } from "@/app/components/portrait-frame";
import { siteConfig } from "@/app/config/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: any = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
      className='container-page grid min-h-[85vh] grid-cols-1 items-center gap-14 pt-28 lg:grid-cols-[58%_42%] lg:gap-10 lg:pt-20'
    >
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='flex flex-col gap-7'
      >
        <motion.h1
          variants={item}
          className='text-[clamp(3.25rem,7.5vw,6rem)] font-normal leading-[0.98] tracking-tight text-text-primary'
        >
          Full-stack engineer
          <br />
          building systems that
          <br />
          <span className='text-accent-terracotta'>hold up under load.</span>
        </motion.h1>
      </motion.div>

      {/* The Portrait Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        // Fix: Added 'as any' to handle TypeScript build restrictions
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1] as any,
        }}
        className='block'
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
