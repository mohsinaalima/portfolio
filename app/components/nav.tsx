"use client";

import { useEffect, useState, useRef } from "react";
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
      className='fixed inset-x-0 top-0 z-50 flex justify-center pt-6 px-4'
    >
      <nav
        aria-label='Primary'
        className={`flex items-center justify-between gap-6 rounded-full border border-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0c10]/85 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-white/15"
            : "bg-[#0a0c10]/40"
        }`}
      >
        <a
          href='#top'
          className='font-mono text-xs font-bold tracking-wider text-white hover:text-rose-400 transition-colors'
        >
          MA<span className='text-rose-500'>.</span>
        </a>

        <div className='h-4 w-px bg-white/10 mx-1 hidden md:block' />

        <ul className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href} className='relative'>
                <a
                  href={item.href}
                  className={`relative px-2 py-1 text-xs font-medium transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId='nav-active-indicator'
                      className='absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-rose-500 to-cyan-400'
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

        <a
          href={siteConfig.resumeHref}
          className='rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white transition-all hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-400'
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
