"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Node = { id: string; x: number; y: number; label: string };
type Edge = { from: string; to: string };

const nodes: Node[] = [
  { id: "a", x: 60, y: 200, label: "client" },
  { id: "b", x: 200, y: 90, label: "api" },
  { id: "c", x: 200, y: 310, label: "auth" },
  { id: "d", x: 340, y: 60, label: "worker" },
  { id: "e", x: 340, y: 200, label: "db" },
  { id: "f", x: 340, y: 340, label: "cdn" },
];

const edges: Edge[] = [
  { from: "a", to: "b" },
  { from: "a", to: "c" },
  { from: "b", to: "d" },
  { from: "b", to: "e" },
  { from: "c", to: "e" },
  { from: "e", to: "f" },
];

function findNode(id: string) {
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown node id: ${id}`);
  return node;
}

export function HeroGraphic({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering a static shell until mounted
  if (!mounted) return <svg viewBox='0 0 400 400' className={className} />;

  return (
    <svg
      viewBox='0 0 400 400'
      className={className}
      role='img'
      aria-label='Abstract diagram representing connected systems'
    >
      {edges.map((edge, i) => {
        const from = findNode(edge.from);
        const to = findNode(edge.to);
        return (
          <motion.line
            key={`${edge.from}-${edge.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke='var(--color-border-hairline)'
            strokeWidth={1}
            initial={
              prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }
            }
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        );
      })}

      {!prefersReducedMotion &&
        edges.map((edge, i) => {
          const from = findNode(edge.from);
          const to = findNode(edge.to);
          return (
            <motion.line
              key={`pulse-${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke='var(--color-accent-terracotta)'
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{
                duration: 1.6,
                delay: 2 + i * 0.6,
                repeat: Infinity,
                repeatDelay: edges.length * 0.6,
                ease: "easeInOut",
              }}
            />
          );
        })}

      {nodes.map((node, i) => (
        <g key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={5}
            fill='var(--color-bg-base)'
            stroke='var(--color-accent-brass)'
            strokeWidth={1.5}
            initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <motion.text
            x={node.x}
            y={node.y - 12}
            textAnchor='middle'
            fontFamily='var(--font-mono)'
            fontSize='9'
            letterSpacing='0.04em'
            fill='var(--color-text-muted)'
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
          >
            {node.label}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
