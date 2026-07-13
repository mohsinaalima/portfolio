"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Define props by extending Motion's anchor props
type MagneticLinkProps = HTMLMotionProps<"a"> & {
  strength?: number;
};

export function MagneticLink({
  children,
  className,
  strength = 0.3,
  ...props // This captures aria-label and other HTML attributes
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const maxPull = 8;
    setOffset({
      x: Math.max(-maxPull, Math.min(maxPull, relX * strength)),
      y: Math.max(-maxPull, Math.min(maxPull, relY * strength)),
    });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={cn("inline-block", className)}
      style={{ display: "inline-block" }}
      {...props} // This now correctly passes aria-label, href, target, etc.
    >
      {children}
    </motion.a>
  );
}
