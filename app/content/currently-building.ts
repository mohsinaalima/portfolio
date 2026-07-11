import type { CurrentlyBuildingItem } from "@/app/types";
export const currentlyBuilding = [
  {
    id: "rag-vector-search",
    label: "RAG & vector search",
    why: "Extending the resume analyzer beyond keyword matching, toward MedLens AI's document-understanding direction.",
  },
  {
    id: "system-design",
    label: "System design fundamentals",
    why: "Formalizing the instincts PicScale's monorepo split was already reaching for.",
  },
  {
    id: "docker-production",
    label: "Docker in production contexts",
    why: "Moving past local dev containers into deploy pipelines that actually ship.",
  },
] as const satisfies CurrentlyBuildingItem[];