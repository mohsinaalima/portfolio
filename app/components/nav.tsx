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
    lastY.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const scrollingDown = y > lastY.current;
      const pastThreshold = y > 80;

      setHidden(scrollingDown && pastThreshold);
      setScrolled(y > 24);
      lastY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...navItems.map((item) => item.href.replace("#", ""))];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='fixed inset-x-0 top-0 z-50'
    >
      <nav
        aria-label='Primary'
        className='container-page flex items-center justify-between py-4'
      >
        <div
          className={`flex items-center gap-9 rounded-full border border-border-hairline px-7 py-3.5 backdrop-blur-md transition-colors duration-300 ${
            scrolled ? "bg-bg-surface/85" : "bg-bg-surface/50"
          }`}
        >
          <a href='#top' className='font-mono-label text-xs text-text-primary'>
            MA
          </a>

          <ul className='hidden items-center gap-7 md:flex'>
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href} className='relative'>
                  <a
                    href={item.href}
                    className={`relative text-sm transition-colors ${
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
                        className='absolute -bottom-1.5 left-0 right-0 h-px bg-accent-terracotta'
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
            className='rounded-full border border-border-hairline px-4 py-1.5 text-sm text-text-primary transition-colors hover:border-accent-terracotta hover:text-accent-terracotta'
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}