"use client";

import { motion, useReducedMotion, type MotionValue } from "framer-motion";

type PortraitFrameProps = {
  src: string;
  alt: string;
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
};

export function PortraitFrame({
  src,
  alt,
  parallaxX,
  parallaxY,
}: PortraitFrameProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      style={{
        x: prefersReducedMotion ? 0 : parallaxX,
        y: prefersReducedMotion ? 0 : parallaxY,
      }}
      className='relative mx-auto w-full max-w-sm'
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className='absolute -inset-8 -z-10 rounded-[40px] opacity-70 blur-2xl'
        style={{
          background:
            "radial-gradient(circle at 35% 25%, color-mix(in oklab, var(--color-accent-terracotta) 22%, transparent), transparent 60%), radial-gradient(circle at 70% 75%, color-mix(in oklab, var(--color-accent-olive) 18%, transparent), transparent 60%)",
        }}
      />

      {/* Frame Container */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [-1, 1, -1] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className='relative w-full aspect-[4/5] overflow-hidden rounded-[28px] border border-border-hairline bg-bg-surface/60 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm'
      >
        <img 
            src={src} 
            alt={alt} 
            className='h-full w-full object-cover' 
            onError={(e) => console.error("Image failed to load:", e)}
        />

        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5'
        />
      </motion.div>
    </motion.div>
  );
}