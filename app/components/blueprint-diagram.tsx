"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sublabel?: string;
};
type Edge = { id: string; path: string };

type BlueprintDiagramProps = {
  nodes: Node[];
  edges: Edge[];
  viewBox: string;
};

export function BlueprintDiagram({
  nodes,
  edges,
  viewBox,
}: BlueprintDiagramProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className='relative w-full overflow-visible'>
      <svg viewBox={viewBox} className='h-auto w-full overflow-visible'>
        {/* Static Base (The Blueprint Lines) */}
        <g className='stroke-border-hairline'>
          {edges.map((edge) => (
            <path
              key={edge.id}
              d={edge.path}
              fill='none'
              strokeWidth='1'
              strokeDasharray='4 4'
            />
          ))}
        </g>

        {/* Animated Flow (The "Active" Lines) */}
        <g className='stroke-accent-terracotta'>
          {edges.map((edge) => (
            <motion.path
              key={`flow-${edge.id}`}
              d={edge.path}
              fill='none'
              strokeWidth='1.5'
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              x='-40'
              y='-15'
              width='80'
              height='30'
              rx='4'
              className='fill-bg-surface stroke-border-hairline'
              strokeWidth='1'
            />
            <text
              textAnchor='middle'
              y={node.sublabel ? "-2" : "3"}
              dominantBaseline='middle'
              className='fill-text-primary text-[10px] uppercase font-mono tracking-wider'
            >
              {node.label}
            </text>
            {node.sublabel && (
              <text
                textAnchor='middle'
                y='10'
                dominantBaseline='middle'
                className='fill-text-muted text-[8px] font-mono'
              >
                {node.sublabel}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
