"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";
import { MagneticLink } from "@/app/components/magnetic-link";
import { PortraitFrame } from "@/app/components/portrait-frame";
import { siteConfig } from "@/app/config/site";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(relX * 16);
    rawY.set(relY * 16);
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
        <motion.div variants={item} className='w-fit'>
          <span className='inline-flex items-center gap-2 rounded-full border border-border-hairline bg-bg-surface/50 py-1.5 pl-3 pr-4'>
            <span className='relative flex h-1.5 w-1.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-brass opacity-60' />
              <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-brass' />
            </span>
            <span className='font-mono-label text-xs text-text-muted'>
              {siteConfig.availability}
            </span>
          </span>
        </motion.div>

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

        <motion.p
          variants={item}
          className='max-w-lg text-xl leading-relaxed text-text-muted'
        >
          I design the boring parts well — schemas, service boundaries, deploy
          pipelines — so the product parts can move fast.
        </motion.p>

        <motion.div
          variants={item}
          className='flex flex-wrap items-center gap-4 pt-1'
        >
          <MagneticLink
            href='#selected-work'
            className='group inline-flex items-center gap-2 rounded-full bg-accent-terracotta px-7 py-3.5 text-sm font-medium text-text-primary transition-all hover:bg-accent-terracotta-hover hover:shadow-[0_0_28px_-4px_var(--color-accent-terracotta)]'
          >
            View Work
            <ArrowRight
              size={16}
              className='transition-transform duration-300 group-hover:translate-x-1'
            />
          </MagneticLink>
          <MagneticLink
            href='#contact'
            className='group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border-hairline px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-olive'
          >
            <span className='relative z-10 transition-colors group-hover:text-accent-olive'>
              Get in touch
            </span>
          </MagneticLink>
        </motion.div>

        <motion.div
          variants={item}
          className='flex items-center gap-5 pt-3 text-text-muted'
        >
          <a
            href={siteConfig.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='transition-colors hover:text-text-primary'
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={siteConfig.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='transition-colors hover:text-text-primary'
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            aria-label='Email'
            className='transition-colors hover:text-text-primary'
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className='hidden lg:block'
      >
        <PortraitFrame
          src='/portrait.jpg'
          alt='Mohsina Alima'
          parallaxX={parallaxX}
          parallaxY={parallaxY}
        />
      </motion.div>
    </section>
  );
}
