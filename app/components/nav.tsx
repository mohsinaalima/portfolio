"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/app/config/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = ["top", ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-xl border px-4 py-3 transition-all duration-300 ease-out sm:px-5 ${
          scrolled
            ? "border-border-hairline bg-bg-base/95 shadow-lg shadow-black/10 backdrop-blur"
            : "border-transparent bg-bg-base/75 backdrop-blur"
        }`}
      >
        <a href="#top" className="shrink-0 text-sm font-semibold tracking-tight text-text-primary">
          MA<span className="text-accent-primary">.</span>
          <span className="sr-only">Mohsina Alima, home</span>
        </a>

        <ul className="order-3 flex w-full items-center gap-5 overflow-x-auto pb-0.5 text-xs sm:order-none sm:w-auto sm:gap-4 md:gap-5">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={`transition-colors hover:text-text-primary ${
                  activeHref === item.href ? "text-accent-primary" : "text-text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={siteConfig.resumeHref} target="_blank" rel="noopener noreferrer" className="button-secondary min-h-9 px-3 py-1.5 text-xs">
          Resume
        </a>
      </nav>
    </header>
  );
}
