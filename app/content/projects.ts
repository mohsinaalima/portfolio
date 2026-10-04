export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  sourceUrl: string;
  liveUrl: string;
  tech: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "kids-portal",
    name: "KidsPortal",
    image: "/projects/kids.png",
    tagline: "Secure canvas and authentication flows",
    description:
      "A web application focused on interactive canvas experiences and secure authentication flows.",
    sourceUrl: "https://gitlab.com/zavianexus/kidsportal.git",
    liveUrl: "",
    tech: ["React", "FastAPI", "OAuth"],
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    image: "/projects/airesume.png",
    tagline: "Browser-based LLM pipeline",
    description:
      "An AI-powered resume analysis application that processes resumes and uses an LLM pipeline to provide insights.",
    sourceUrl: "https://github.com/mohsinaalima/ai-resume-analyzer",
    liveUrl: "https://ai-resume-analyzer-six-tawny.vercel.app/",
    tech: ["React", "LLM", "Document parsing"],
  },
  {
    slug: "picscale",
    name: "PicScale",
    image: "/projects/picscale.png",
    tagline: "Distributed image pipeline",
    description:
      "A distributed image processing pipeline designed around browser, gateway, worker, and CDN components.",
    sourceUrl: "https://github.com/mohsinaalima/picscale",
    liveUrl: "https://picscale-2.onrender.com/",
    tech: ["Node.js", "Workers", "CDN"],
  },
  {
    slug: "zaika-zone",
    name: "Zaika Zone",
    tagline: "MERN stack restaurant application",
    description:
      "A full-stack restaurant application built using the MERN stack with a client, server, and database architecture.",
    sourceUrl: "https://github.com/mohsinaalima/zaika-zone",
    liveUrl: "",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    slug: "aperture-fitness",
    name: "Aperture Fitness",
    image: "/projects/aperture.png",
    tagline: "Offline-first fitness SaaS",
    description:
      "An offline-first fitness application for creating workout plans, logging workouts, tracking personal records, and reviewing training progress.",
    sourceUrl: "https://github.com/mohsinaalima/Aperture-Fitness.git",
    liveUrl: "",
    tech: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Redis"],
  },
  {
    slug: "cortex",
    name: "Cortex",
    image: "/projects/cortex.png",
    tagline: "Containerized second-brain RAG application",
    description:
      "A containerized RAG application that extracts, chunks, and embeds data from PDFs and URLs for semantic search.",
    sourceUrl: "https://github.com/mohsinaalima/Cortex.git",
    liveUrl: "",
    tech: ["FastAPI", "Qdrant", "OpenAI", "Docker"],
  },
  {
    slug: "devplot-ai",
    name: "DevPlot AI",
    tagline: "AI-powered developer productivity platform",
    description:
      "An AI-powered developer productivity platform for understanding and working with technical information.",
    sourceUrl: "https://github.com/mohsinaalima/devpiolet_ai",
    liveUrl: "",
    tech: ["React", "FastAPI", "RAG", "Vector search"],
  },
];
