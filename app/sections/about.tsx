"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id='about'
      className='section-y container-page flex flex-col items-center overflow-visible'
    >
      <div className='w-full max-w-3xl text-center'>
        <p className='font-mono text-xs tracking-widest text-cyan-400 uppercase'>
          About Me
        </p>

        <h2 className='mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl'>
          Engineering systems that hold up when complexity scales.
        </h2>

        <div className='mt-8 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-slate-400'>
          <p>
            I got into engineering through the parts most people skip—the
            complex database schema design, or the production deploy script
            failing at 2 AM. Those deep infrastructure problems are what still
            drive my curiosity.
          </p>
          <p>
            Most of what I build stems from solving specific engineering
            friction points: an AI tool that processes workflows client-side
            without heavy servers, or a distributed image pipeline that never
            blocks on slow jobs.
          </p>
          <p>
            Currently, my focus is locked on{" "}
            <span className='text-white font-medium'>
              agentic AI systems and autonomous workflows
            </span>{" "}
            (like LangChain and LangGraph integration) designed to tame messy,
            real-world unstructured inputs at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
