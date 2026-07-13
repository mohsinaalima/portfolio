"use client";

import { motion, useReducedMotion, type MotionValue } from "framer-motion";

type PortraitFrameProps = {
  src?: string;
  alt?: string;
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
      <div
        aria-hidden
        className='absolute -inset-8 -z-10 rounded-[40px] opacity-70 blur-2xl'
        style={{
          background:
            "radial-gradient(circle at 35% 25%, color-mix(in oklab, var(--color-accent-terracotta) 22%, transparent), transparent 60%), radial-gradient(circle at 70% 75%, color-mix(in oklab, var(--color-accent-olive) 18%, transparent), transparent 60%)",
        }}
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [-1, 1, -1] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className='relative w-full aspect-[4/5] overflow-hidden rounded-[28px] border border-border-hairline bg-bg-surface/60 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm'
      >
        {src ? (
          /* Bypassing Next.js optimizer for native browser rendering */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? ""}
            className='h-full w-full object-cover'
          />
        ) : (
          <div className='flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center'>
            <div className='h-16 w-16 rounded-full border border-dashed border-accent-brass/50' />
            <p className='font-mono-label text-xs text-text-disabled'>
              portrait — drop image at /public/portrait.jpg
            </p>
          </div>
        )}

        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5'
        />
      </motion.div>

      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <span
          key={corner}
          aria-hidden
          className={`absolute h-4 w-4 border-accent-brass/40 ${
            corner === "tl" ? "-left-2 -top-2 border-l border-t" : ""
          }${corner === "tr" ? "-right-2 -top-2 border-r border-t" : ""}${
            corner === "bl" ? "-bottom-2 -left-2 border-b border-l" : ""
          }${corner === "br" ? "-bottom-2 -right-2 border-b border-r" : ""}`}
        />
      ))}
    </motion.div>
  );
}
