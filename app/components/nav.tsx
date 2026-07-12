"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navItems, siteConfig } from "@/app/config/site";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    lastY.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const scrollingDown = y > lastY.current;
      const pastThreshold = y > 80;

      setHidden(scrollingDown && pastThreshold);
      lastY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className='flex items-center gap-8 rounded-full border border-border-hairline bg-bg-surface/70 px-6 py-3 backdrop-blur-md'>
          <a href='#top' className='font-mono-label text-xs text-text-primary'>
            MA
          </a>

          <ul className='hidden items-center gap-6 md:flex'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='text-sm text-text-muted transition-colors hover:text-text-primary'
                >
                  {item.label}
                </a>
              </li>
            ))}
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
