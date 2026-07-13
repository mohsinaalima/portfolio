"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/app/content/timeline";

export function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section
      id='journey'
      ref={sectionRef}
      className='section-y container-page overflow-visible'
    >
      <div className='max-w-xl'>
        <p className='font-mono-label text-sm tracking-widest text-accent-brass'>
          Journey
        </p>
        <h2 className='mt-4 text-4xl leading-[1.1] text-text-primary sm:text-5xl'>
          Still a student. Already shipping.
        </h2>
      </div>

      <div className='relative mt-14 max-w-2xl pl-8'>
        <div className='absolute left-0 top-1 bottom-1 w-px bg-border-hairline' />
        <motion.div
          className='absolute left-0 top-1 w-px origin-top bg-accent-terracotta'
          style={{ scaleY: fill, height: "calc(100% - 0.25rem)" }}
        />

        <ol className='flex flex-col gap-12'>
          {timeline.map((entry) => (
            <motion.li
              key={entry.id}
              className='relative'
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className='absolute -left-8 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent-brass bg-bg-base' />
              <p className='font-mono-label text-xs text-accent-brass'>
                {entry.date}
              </p>
              <h3 className='mt-2 text-xl text-text-primary'>{entry.title}</h3>
              <p className='mt-2 max-w-lg text-sm leading-relaxed text-text-muted'>
                {entry.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
