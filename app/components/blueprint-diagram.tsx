"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import type { DiagramNode, DiagramEdge } from "@/app/types";

type Props = {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  viewBox?: string;
  className?: string;
};

function findNode(nodes: DiagramNode[], id: string) {
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown diagram node id: ${id}`);
  return node;
}

export function BlueprintDiagram({
  nodes,
  edges,
  viewBox = "0 0 640 140",
  className,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const pathPoints = edges.reduce<{ x: number; y: number }[]>(
    (acc, edge, i) => {
      const from = findNode(nodes, edge.from);
      const to = findNode(nodes, edge.to);
      if (i === 0) acc.push({ x: from.x, y: from.y });
      acc.push({ x: to.x, y: to.y });
      return acc;
    },
    [],
  );
  const firstPoint = pathPoints[0];

  const dur = (base: number) => (prefersReducedMotion ? 0.01 : base);
  const delay = (base: number) => (prefersReducedMotion ? 0 : base);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={className}
      role="img"
      aria-label="Request flow diagram"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {edges.map((edge, i) => {
        const from = findNode(nodes, edge.from);
        const to = findNode(nodes, edge.to);
        return (
          <motion.line
            key={`${edge.from}-${edge.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--color-border-hairline)"
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{
              duration: dur(0.7),
              delay: delay(0.15 * i),
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        );
      })}

      {nodes.map((node, i) => (
        <g key={node.id}>
          <motion.rect
            x={node.x - 36}
            y={node.y - 14}
            width={72}
            height={28}
            rx={8}
            fill="var(--color-bg-surface)"
            stroke="var(--color-accent-brass)"
            strokeWidth={1.2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
              duration: dur(0.4),
              delay: delay(0.1 + i * 0.12),
            }}
          />
          <motion.text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="0.03em"
            fill="var(--color-text-primary)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: dur(0.4),
              delay: delay(0.2 + i * 0.12),
            }}
          >
            {node.label}
          </motion.text>
        </g>
      ))}

      {firstPoint && (
        <AnimatePresence>
          {hovered && (
            <motion.circle
              key="pulse"
              r={4}
              fill="var(--color-accent-terracotta)"
              initial={{ opacity: 0, cx: firstPoint.x, cy: firstPoint.y }}
              animate={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: [0, 1, 1, 0],
                      cx: pathPoints.map((p) => p.x),
                      cy: pathPoints.map((p) => p.y),
                    }
              }
              exit={{ opacity: 0 }}
              transition={{
                duration: Math.max(pathPoints.length * 0.5, 1.2),
                repeat: Infinity,
                ease: "linear",
                times: pathPoints.map((_, i) =>
                  pathPoints.length > 1 ? i / (pathPoints.length - 1) : 0,
                ),
              }}
            />
          )}
        </AnimatePresence>
      )}
    </svg>
  );
}
