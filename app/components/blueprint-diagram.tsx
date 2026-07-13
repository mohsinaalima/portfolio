"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sublabel?: string;
};

export type Edge = {
  id: string;
  path: string; // SVG path data (e.g., "M 10 20 L 50 20")
};

type BlueprintDiagramProps = {
  nodes: Node[];
  edges: Edge[];
  viewBox?: string;
  className?: string;
};

export function BlueprintDiagram({
  nodes,
  edges,
  viewBox = "0 0 400 160",
  className,
}: BlueprintDiagramProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={cn("relative group cursor-crosshair", className)}
    >
      <svg
        viewBox={viewBox}
        className="h-auto w-full overflow-visible"
        aria-hidden="true"
      >
        {/* Layer 1: Static Blueprint Base */}
        <g className="text-border-hairline">
          {edges.map((edge) => (
            <path
              key={`base-${edge.id}`}
              d={edge.path}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4" // Gives it that technical schematic feel
            />
          ))}
        </g>

        {/* Layer 2: Animated Request Flow */}
        <g className="text-accent-terracotta">
          {edges.map((edge) => (
            <motion.path
              key={`flow-${edge.id}`}
              d={edge.path}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              variants={{
                rest: { pathLength: 0, opacity: 0 },
                hover: { pathLength: 1, opacity: 1 },
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </g>

        {/* Layer 3: Nodes */}
        {nodes.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            {/* Node Surface */}
            <rect
              x="-48"
              y="-18"
              width="96"
              height="36"
              rx="6"
              className="fill-bg-surface stroke-border-hairline transition-colors duration-300 group-hover:stroke-accent-olive/50"
              strokeWidth="1"
            />
            {/* Node Label */}
            <text
              textAnchor="middle"
              y={node.sublabel ? "-2" : "1"}
              dominantBaseline="middle"
              className="fill-text-primary font-mono-label text-[10px] uppercase tracking-wider"
            >
              {node.label}
            </text>
            {/* Optional Sublabel (e.g., "Next.js" or "FastAPI") */}
            {node.sublabel && (
              <text
                textAnchor="middle"
                y="10"
                dominantBaseline="middle"
                className="fill-text-muted font-mono-label text-[8px]"
              >
                {node.sublabel}
              </text>
            )}
          </g>
        ))}
      </svg>
    </motion.div>
  );
}