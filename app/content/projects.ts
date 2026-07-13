import type { Node, Edge } from "@/app/components/blueprint-diagram";

export type Project = {
  slug: string;
  title: string;
  name: string; // Shorter name for gallery
  tagline: string;
  description: string;
  tags?: string[];
  link?: string;
  inProgress?: boolean;
  diagram?: {
    nodes: Node[];
    edges: Edge[];
    viewBox: string;
  };
};

export const projects: Project[] = [
  {
    slug: "picscale",
    title: "PicScale — Distributed Image Pipeline",
    name: "PicScale",
    tagline: "Preventing blocked threads on heavy image processing.",
    description:
      "A distributed architecture splitting the frontend, API gateway, and processing workers into three distinct services. Resolved a critical Linux sandbox deployment block on Render by tracing binary-generation faults directly to the Node engine loader.",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    link: "https://github.com/yourusername/picscale", // Update with your actual link
    diagram: {
      viewBox: "0 0 400 160",
      nodes: [
        { id: "client", x: 50, y: 80, label: "Client", sublabel: "Browser" },
        { id: "api", x: 180, y: 80, label: "Gateway", sublabel: "Express" },
        { id: "worker", x: 320, y: 40, label: "Worker", sublabel: "Node.js" },
        { id: "storage", x: 320, y: 120, label: "CDN", sublabel: "Cloudinary" },
      ],
      edges: [
        { id: "c-a", path: "M 98 80 L 132 80" },
        { id: "a-w", path: "M 228 80 C 260 80, 260 40, 272 40" },
        { id: "a-s", path: "M 228 80 C 260 80, 260 120, 272 120" },
      ],
    },
  },
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    name: "Resume Analyzer",
    tagline: "Browser-only LLM pipeline with multi-format PDF parsing.",
    description:
      "Engineered an AI feature set without over-relying on heavy frameworks. Handled raw multi-format PDF parsing and built a streaming integration to evaluate candidate profiles against job descriptions efficiently.",
    tags: ["React", "LLM", "PDF.js", "Tailwind"],
    link: "https://github.com/yourusername/ai-resume-analyzer",
    diagram: {
      viewBox: "0 0 400 160",
      nodes: [
        { id: "upload", x: 60, y: 80, label: "Upload", sublabel: "PDF/Docx" },
        { id: "parse", x: 200, y: 80, label: "Parser", sublabel: "Worker" },
        { id: "llm", x: 340, y: 80, label: "LLM", sublabel: "Stream" },
      ],
      edges: [
        { id: "u-p", path: "M 108 80 L 152 80" },
        { id: "p-l", path: "M 248 80 L 292 80" },
      ],
    },
  },
  {
    slug: "kidsportal",
    title: "Kids Drawing Game & Portal",
    name: "KidsPortal",
    tagline: "Managing Canvas state and secure OAuth sessions.",
    description:
      "A full-stack application managing local drawing state via Canvas APIs alongside secure JWT and OAuth session flows for user authentication and gallery saving.",
    tags: ["Next.js", "OAuth", "Canvas API", "PostgreSQL"],
    link: "https://github.com/yourusername/kidsportal",
    diagram: {
      viewBox: "0 0 400 160",
      nodes: [
        { id: "canvas", x: 60, y: 40, label: "Canvas", sublabel: "State" },
        { id: "auth", x: 60, y: 120, label: "OAuth", sublabel: "Google" },
        { id: "server", x: 200, y: 80, label: "Server", sublabel: "FastAPI" },
        { id: "db", x: 340, y: 80, label: "Database", sublabel: "NeonDB" },
      ],
      edges: [
        { id: "c-s", path: "M 108 40 C 140 40, 140 80, 152 80" },
        { id: "a-s", path: "M 108 120 C 140 120, 140 80, 152 80" },
        { id: "s-d", path: "M 248 80 L 292 80" },
      ],
    },
  },
  {
    slug: "medlens-ai",
    title: "MedLens AI",
    name: "MedLens AI",
    tagline: "In progress — details coming soon.",
    description:
      "Currently architecting a system using RAG and vector search to parse and analyze unstructured medical reports. Full write-up coming once it's shipped.",
    inProgress: true,
  },
  {
    slug: "health-bridge",
    title: "Health-Bridge",
    name: "Health-Bridge",
    tagline: "In progress — details coming soon.",
    description:
      "A local systems project focusing on healthcare service accessibility. Write-up and architecture diagrams will be added upon completion.",
    inProgress: true,
  },
];
