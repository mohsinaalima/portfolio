import type { Project } from "@/app/types";

// Real project data, sourced directly from the resume — no invented specifics.
// MedLens AI / HealthBridge are "in-progress" placeholders per
// docs/mohsina-portfolio-design-strategy-v2.md §0 until real details exist.

export const projects: Project[] = [
  {
    slug: "picscale",
    name: "PicScale",
    status: "shipped",
    tagline: "Distributed image platform & monorepo",
    problem:
      "Image processing at any real volume can't run inline with the request — it needs to be async, and the services around it need to scale and deploy independently of each other.",
    solution:
      "A three-service monorepo: a Next.js client, a Node/Express API gateway, and an isolated background worker for image jobs — each independently deployable, so a slow image job never blocks the API from responding.",
    challenge:
      "Render's Linux sandbox silently blocked binary generation during deploy. Instead of working around it, traced the failure to the Node engine loader, triggered binary generation explicitly, and routed dummy HTTP endpoints for worker health checks — unblocking deployment without changing the core architecture.",
    outcome:
      "A working three-service system in production: Cloudinary CDN pipeline with runtime transform parameters serving optimally-sized images on demand, backed by relational schemas in Neon PostgreSQL via Prisma.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Prisma",
      "Cloudinary",
      "Render",
    ],
    links: {
      github: "https://github.com/mohsinaalima",
    },
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI-Resume-Analyzer",
    status: "shipped",
    tagline: "Browser-only AI feedback engine, no backend server",
    problem:
      "Resume feedback tools usually mean standing up a backend just to proxy a file to an LLM — extra infra for what's fundamentally a client-side task.",
    solution:
      "React 19 + Puter.js reads an uploaded PDF resume directly in the browser, sends the parsed content to an LLM, and streams structured feedback back in real time — zero backend server required.",
    challenge:
      "Resume PDFs vary wildly in format and encoding. Built a multi-layer text extraction pipeline with pdfjs-dist to keep parsing consistent across that variation, rather than assuming a single clean format.",
    outcome:
      "A working drag-and-drop tool with global UI state managed through Zustand instead of prop drilling — keeps interactions responsive even on large documents, entirely client-side.",
    tech: [
      "React 19",
      "TypeScript",
      "Puter.js",
      "pdfjs-dist",
      "Zustand",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/mohsinaalima",
    },
  },
  {
    slug: "kidsportal",
    name: "kidsportal",
    status: "shipped",
    tagline: "Interactive learning platform with real auth",
    problem:
      "A learning platform for kids needs real session security — protected routes, token refresh, OAuth — not just a login form bolted onto the frontend.",
    solution:
      "End-to-end authentication with FastAPI on the backend and JWT + Google OAuth on the React frontend, covering session management, token refresh, and protected route guards properly.",
    challenge:
      "Structuring a MySQL schema that serves personalized learning feeds — user profiles, auth state, dynamic video content — without redundant joins slowing down every page load.",
    outcome:
      "A 'Cognitive Game Engine' and Watch History dashboard built with useState/useEffect, maintaining real-time game state and media progress across sessions without page reloads.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MySQL",
      "JWT",
      "Google OAuth",
    ],
    links: {},
  },
  {
    slug: "medlens-ai",
    name: "MedLens AI",
    status: "in-progress",
    tagline: "AI-powered medical report understanding — OCR + RAG",
    tech: ["OCR", "RAG", "Vector Search", "Gemini API"],
  },
  {
    slug: "healthbridge",
    name: "HealthBridge",
    status: "in-progress",
    tagline: "Healthcare appointment platform",
    tech: [],
  },
];
