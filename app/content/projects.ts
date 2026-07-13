import type { Node, Edge } from "@/app/components/blueprint-diagram";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
  inProgress?: boolean;
  diagram?: {
    nodes: any[];
    edges: any[];
    viewBox: string;
  };
};

export const projects: Project[] = [
  {
    slug: "picscale",
    name: "PicScale",
    tagline: "Distributed Image Pipeline",
    description:
      "A distributed architecture splitting the frontend, API gateway, and processing workers into three distinct services. Resolved a critical Linux sandbox deployment block on Render by tracing binary-generation faults directly to the Node engine loader.",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    link: "https://github.com/mohsinaalima/picscale",
    diagram: {
      viewBox: "0 0 400 160",
      nodes: [
        { id: "client", x: 60, y: 80, label: "Client", sublabel: "Browser" },
        { id: "gateway", x: 200, y: 80, label: "Gateway", sublabel: "Express" },
        { id: "worker", x: 340, y: 40, label: "Worker", sublabel: "Node.js" },
        { id: "cdn", x: 340, y: 120, label: "CDN", sublabel: "Cloudinary" },
      ],
      edges: [
        { id: "e1", path: "M 108 80 L 152 80" },
        { id: "e2", path: "M 248 80 C 290 80 290 40 300 40" },
        { id: "e3", path: "M 248 80 C 290 80 290 120 300 120" },
      ],
    },
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    tagline: "Browser-only LLM Pipeline",
    description:
      "Engineered an AI feature set without over-relying on heavy frameworks. Handled raw multi-format PDF parsing and built a streaming integration to evaluate candidate profiles against job descriptions efficiently.",
    tags: ["React", "LLM", "PDF.js", "Tailwind"],
    link: "#",
    diagram: {
      viewBox: "0 0 400 160",
      nodes: [
        { id: "upload", x: 60, y: 80, label: "Upload", sublabel: "PDF/Docx" },
        { id: "parser", x: 200, y: 80, label: "Parser", sublabel: "Worker" },
        { id: "llm", x: 340, y: 80, label: "LLM", sublabel: "Stream" },
      ],
      edges: [
        { id: "e1", path: "M 108 80 L 152 80" },
        { id: "e2", path: "M 248 80 L 292 80" },
      ],
    },
  },
  {
    slug: "kids-portal",
    name: "Kids Drawing Game & Portal",
    tagline: "Managing Canvas state and secure OAuth",
    description:
      "A full-stack application managing local drawing state via Canvas APIs alongside secure JWT and OAuth session flows for user authentication and gallery saving.",
    tags: ["Next.js", "OAuth", "Canvas API", "PostgreSQL"],
    link: "#",
    diagram: {
      viewBox: "0 0 400 160",
      nodes: [
        { id: "canvas", x: 80, y: 40, label: "Canvas", sublabel: "State" },
        { id: "oauth", x: 80, y: 120, label: "OAuth", sublabel: "Google" },
        { id: "server", x: 250, y: 80, label: "Server", sublabel: "FastAPI" },
        { id: "db", x: 370, y: 80, label: "Database", sublabel: "NeonDB" },
      ],
      edges: [
        { id: "e1", path: "M 128 40 C 180 40 180 80 202 80" },
        { id: "e2", path: "M 128 120 C 180 120 180 80 202 80" },
        { id: "e3", path: "M 298 80 L 322 80" },
      ],
    },
  },
  {
    slug: "medlens-ai",
    name: "MedLens AI",
    tagline: "Unstructured Medical Report Analysis",
    description:
      "Currently architecting a system using RAG and vector search to parse and analyze unstructured medical reports. Full write-up coming once it's shipped.",
    tags: ["RAG", "Vector Search", "AI"],
    inProgress: true,
  },
  {
    slug: "health-bridge",
    name: "Health-Bridge",
    tagline: "Healthcare Service Accessibility",
    description:
      "A local systems project focusing on healthcare service accessibility. Write-up and architecture diagrams will be added upon completion.",
    tags: ["Systems", "Healthcare"],
    inProgress: true,
  },
];
