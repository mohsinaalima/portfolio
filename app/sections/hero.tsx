"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";
import { MagneticLink } from "@/app/components/magnetic-link";
import { siteConfig } from "@/app/config/site";
import { HeroGraphic } from "@/app/components/hero-graphic";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="container-page grid min-h-[92vh] grid-cols-1 items-center gap-12 pt-32 lg:grid-cols-[60%_40%] lg:gap-8 lg:pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-brass opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-brass" />
          </span>
          <span className="font-mono-label text-xs text-text-muted">
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-[clamp(3rem,7vw,5.75rem)] font-normal leading-[1.02] tracking-tight text-text-primary"
        >
          Full-stack engineer
          <br />
          building systems that
          <br />
          hold up under load.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-lg text-xl leading-relaxed text-text-muted"
        >
          I design the boring parts well — schemas, service boundaries,
          deploy pipelines — so the product parts can move fast.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
          <MagneticLink
            href="#selected-work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-terracotta px-7 py-3.5 text-sm font-medium text-text-primary shadow-[0_0_0_0_var(--color-accent-terracotta)] transition-all hover:bg-accent-terracotta-hover hover:shadow-[0_0_24px_-4px_var(--color-accent-terracotta)]"
          >
            View Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticLink>
          <MagneticLink
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-hairline px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-olive hover:text-accent-olive"
          >
            Get in touch
          </MagneticLink>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center gap-5 pt-4 text-text-muted"
        >
          
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-text-primary"
          >
            <GithubIcon size={18} />
          </a>
          
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-text-primary"
          >
            <LinkedinIcon size={18} />
          </a>
          
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="transition-colors hover:text-text-primary"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden lg:block"
      >
        <HeroGraphic className="mx-auto w-full max-w-md" />
      </motion.div>
    </section>
  );
}
