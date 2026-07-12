import type { TimelineEntry } from "@/app/types";

// Dates are approximate/ordered, not exact — adjust to what's actually
// true before shipping. The B.Tech start/expected-graduation dates are
// the only hard dates confirmed on the resume (2023 – 2027).

export const timeline: TimelineEntry[] = [
  {
    id: "started-btech",
    date: "2023",
    title: "Started B.Tech, Computer Science & Engineering",
    description:
      "Jamia Hamdard University, New Delhi. Coursework: DSA (C++), OOP, DBMS, Operating Systems, Computer Networks, System Design.",
  },
  {
    id: "first-mern",
    date: "Early builds",
    title: "First MERN applications",
    description:
      "Learning the stack end-to-end — not just React, but what happens on the other side of the API call.",
  },
  {
    id: "kidsportal",
    date: "kidsportal",
    title: "Real authentication, for the first time",
    description:
      "FastAPI + JWT + Google OAuth, session management and protected routes done properly instead of a login form bolted on top.",
  },
  {
    id: "picscale",
    date: "PicScale",
    title: "First distributed system, first production deploy problem",
    description:
      "A three-service monorepo, and a Render sandbox issue that had to be debugged, not worked around.",
  },
  {
    id: "ai-resume-analyzer",
    date: "AI-Resume-Analyzer",
    title: "Browser-only AI pipeline",
    description:
      "No backend server — parsing, LLM calls, and streaming feedback entirely client-side.",
  },
  {
    id: "now",
    date: "Now",
    title: "Building MedLens AI, seeking Summer 2027 internships",
    description:
      "Extending toward OCR + RAG + vector search, and looking for a team to learn from.",
  },
];
