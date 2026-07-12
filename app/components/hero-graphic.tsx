"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = { id: string; x: number; y: number; label: string };
type Edge = { from: string; to: string };

type HeroGraphicProps = {
  className?: string;
};

const nodes: Node[] = [
  { id: "a", x: 60, y: 200, label: "client" },
  { id: "b", x: 200, y: 90, label: "api" },
  { id: "c", x: 200, y: 310, label: "auth" },
];

const edges: Edge[] = [
  { from: "a", to: "b" },
  { from: "a", to: "c" },
];

function findNode(id: string) {
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown node id: ${id}`);
  return node;
}

export function HeroGraphic({ className }: HeroGraphicProps) {
  const prefersReducedMotion = useReducedMotion();

  const dur = (base: number) => (prefersReducedMotion ? 0.01 : base);
  const delay = (base: number) => (prefersReducedMotion ? 0 : base);

  return (
    <svg
      viewBox="0 0 300 400"
      className={className}
      role="img"
      aria-label="Hero architecture graphic"
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
            stroke="var(--color-border-hairline)"
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: dur(0.8),
              delay: delay(0.2 * i),
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
            r={30}
            fill="var(--color-bg-surface)"
            stroke="var(--color-accent-brass)"
            strokeWidth={1.5}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: dur(0.5),
              delay: delay(0.4 + i * 0.1),
            }}
          />
          <motion.text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--color-text-primary)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: dur(0.4),
              delay: delay(0.6 + i * 0.1),
            }}
          >
            {node.label}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
