export const projects = [
  {
    slug: "kids-portal",
    name: "KidsPortal",
    tagline: "Secure canvas & auth flow",
    description:
      "A secure web application focused on interactive canvas experiences and authentication flows.",
    github: "https://github.com/mohsinaalima/kids-portal",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 100, y: 50, label: "Canvas" },
        { id: "2", x: 100, y: 150, label: "OAuth" },
        { id: "3", x: 300, y: 100, label: "FastAPI" },
      ],
      edges: [
        { id: "e1", path: "M 140 50 L 260 90" },
        { id: "e2", path: "M 140 150 L 260 110" },
      ],
    },
  },

  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    tagline: "Browser-only LLM pipeline",
    description:
      "An AI-powered resume analysis application that processes resumes and uses an LLM pipeline to provide useful insights.",
    github: "https://github.com/mohsinaalima/ai-resume-analyzer",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 80, y: 100, label: "Upload" },
        { id: "2", x: 200, y: 100, label: "Parser" },
        { id: "3", x: 320, y: 100, label: "LLM" },
      ],
      edges: [
        { id: "e1", path: "M 110 100 L 170 100" },
        { id: "e2", path: "M 230 100 L 290 100" },
      ],
    },
  },

  {
    slug: "picscale",
    name: "PicScale",
    tagline: "Distributed image pipeline",
    description:
      "A distributed image processing pipeline designed around browser, gateway, worker, and CDN components.",
    github: "https://github.com/mohsinaalima/picscale",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 80, y: 100, label: "Browser" },
        { id: "2", x: 200, y: 100, label: "Gateway" },
        { id: "3", x: 320, y: 60, label: "Worker" },
        { id: "4", x: 320, y: 140, label: "CDN" },
      ],
      edges: [
        { id: "e1", path: "M 110 100 L 170 100" },
        { id: "e2", path: "M 230 100 L 290 70" },
        { id: "e3", path: "M 230 100 L 290 130" },
      ],
    },
  },

  {
    slug: "zaika-zone",
    name: "Zaika Zone",
    tagline: "MERN Stack Restaurant App",
    description:
      "A full-stack restaurant application built using the MERN stack with a client, server, and database architecture.",
    github: "https://github.com/mohsinaalima/zaika-zone",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 80, y: 100, label: "Client" },
        { id: "2", x: 200, y: 100, label: "Server" },
        { id: "3", x: 320, y: 100, label: "Database" },
      ],
      edges: [
        { id: "e1", path: "M 110 100 L 170 100" },
        { id: "e2", path: "M 230 100 L 290 100" },
      ],
    },
  },

  {
    slug: "aperture-fitness",
    name: "Aperture Fitness",
    tagline: "Offline-first fitness SaaS",
    description:
      "Aperture Fitness is an offline-first fitness SaaS designed to help users create custom workout plans, log workouts, track sets, reps, weights, personal records, and analyze their training progress. It is built as a scalable monorepo using Next.js, TypeScript, Fastify, PostgreSQL, Prisma, Redis, and BullMQ, with a future Python/FastAPI AI layer for intelligent workout insights and analysis.",
    github: "https://github.com/mohsinaalima/Aperture-Fitness.git",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 70, y: 100, label: "Next.js" },
        { id: "2", x: 200, y: 100, label: "Fastify" },
        { id: "3", x: 330, y: 60, label: "PostgreSQL" },
        { id: "4", x: 330, y: 140, label: "Redis" },
      ],
      edges: [
        { id: "e1", path: "M 105 100 L 165 100" },
        { id: "e2", path: "M 235 100 L 295 70" },
        { id: "e3", path: "M 235 100 L 295 130" },
      ],
    },
  },

  {
    slug: "cortex",
    name: "Cortex",
    tagline: "Containerized Second Brain RAG",
    description:
      "I built a containerized second brain RAG application that extracts, chunks, and embeds data from PDFs and URLs for semantic search. I developed the end-to-end architecture, including the FastAPI backend, Qdrant vector database integration, OpenAI context-aware answering pipeline, and React/Vite frontend. The stack includes Python, FastAPI, Qdrant, React, Vite, Docker, and OpenAI.",
    github: "https://github.com/mohsinaalima/Cortex.git",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 70, y: 100, label: "PDF / URL" },
        { id: "2", x: 190, y: 100, label: "FastAPI" },
        { id: "3", x: 320, y: 60, label: "Qdrant" },
        { id: "4", x: 320, y: 140, label: "OpenAI" },
      ],
      edges: [
        { id: "e1", path: "M 115 100 L 155 100" },
        { id: "e2", path: "M 225 100 L 285 70" },
        { id: "e3", path: "M 225 100 L 285 130" },
      ],
    },
  },

  {
    slug: "devplot-ai",
    name: "DevPlot AI",
    tagline: "AI-powered developer productivity platform",
    description:
      "DevPlot AI is an AI-powered developer productivity platform designed to help developers understand, analyze, and work with technical information more efficiently. It uses AI, Retrieval-Augmented Generation (RAG), embeddings, and semantic search to process developer resources and provide concise, context-aware explanations and answers. The project combines a React frontend with a Python/FastAPI backend, along with document processing, vector search, and LLM-based response generation.",
    github: "https://github.com/mohsinaalima/devpiolet_ai.git",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 70, y: 100, label: "Resources" },
        { id: "2", x: 190, y: 100, label: "RAG" },
        { id: "3", x: 320, y: 60, label: "Vector DB" },
        { id: "4", x: 320, y: 140, label: "LLM" },
      ],
      edges: [
        { id: "e1", path: "M 115 100 L 155 100" },
        { id: "e2", path: "M 225 100 L 285 70" },
        { id: "e3", path: "M 225 100 L 285 130" },
      ],
    },
  },
];
