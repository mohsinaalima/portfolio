import type { TimelineEntry } from "@/app/types";

// Dates are approximate/ordered, not exact — adjust to what's actually
// true before shipping. The B.Tech start/expected-graduation dates are
// the only hard dates confirmed on the resume (2023 – 2027).

export const timeline = [
  {
    id: "clinch",
    date: "2024 — Present",
    title: "Full-Stack Developer Intern · Clinch Metrics Bridge",
    description:
      "Building production-grade web applications, managing database schemas, and optimizing frontend-backend data flows.",
  },
  {
    id: "ai-resume",
    date: "Late 2024",
    title: "Shipped AI Resume Analyzer",
    description:
      "Engineered a browser-only LLM pipeline with multi-format PDF parsing, bypassing the need for a heavy backend server.",
  },
  {
    id: "picscale",
    date: "Mid 2024",
    title: "Architected PicScale",
    description:
      "Designed a distributed image pipeline. Navigated complex infrastructure debugging with Linux sandboxes and Node engine loaders.",
  },
  {
    id: "btech",
    date: "2023",
    title: "B.Tech Computer Science · Jamia Hamdard",
    description:
      "Started formal engineering education. Focused heavily on Data Structures, Algorithms, and core computer science fundamentals.",
  },
];
