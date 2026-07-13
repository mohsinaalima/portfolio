"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { navItems, siteConfig } from "@/app/config/site";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#top");
  const lastY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      setScrolled(y > 24);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...navItems.map((item) => item.href.replace("#", ""))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='fixed inset-x-0 top-0 z-50 flex justify-center pt-6'
    >
      <nav
        aria-label='Primary'
        className={`flex items-center gap-7 rounded-full border border-border-hairline px-6 py-2.5 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-bg-surface/85 shadow-lg" : "bg-bg-surface/50"
        }`}
      >
        <a
          href='#top'
          className='px-2 font-mono-label text-xs text-text-primary hover:text-accent-terracotta transition-colors'
        >
          MA
        </a>

        {/* Separator - Subtle visual division */}
        <div className='h-4 w-px bg-border-hairline/60 mx-1' />

        <ul className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href} className='relative'>
                <a
                  href={item.href}
                  className={`relative px-2 py-1 text-sm transition-colors ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </a>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId='nav-active-indicator'
                      className='absolute -bottom-1 left-0 right-0 h-px bg-accent-terracotta'
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Resume Button - Polished alignment */}
        <a
          href={siteConfig.resumeHref}
          className='ml-2 rounded-full border border-border-hairline bg-bg-base/20 px-4 py-1.5 text-sm text-text-primary transition-all hover:border-accent-terracotta hover:text-accent-terracotta hover:bg-accent-terracotta/10'
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
