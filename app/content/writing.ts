import type { WritingTopic } from "@/app/types";

// No posts exist yet — these are planned topics, presented honestly as
// such in sections/writing.tsx. Do NOT dress these up as published
// articles with fake dates/excerpts; that would misrepresent what
// actually exists. Wire real MDX posts here once they're written.

export const writingTopics: WritingTopic[] = [
  {

    id: "render-deploy",
    title: "Debugging a deploy that failed silently",
    description:
      "What actually happened when Render's sandbox blocked binary generation, and why patching around it would have been the wrong fix.",
  },
  {
    id: "browser-only-ai",
    title: "Building an AI feature with no backend",
    description:
      "What changes about state management and error handling when the LLM call happens entirely client-side.",
  },
  {
    id: "schema-first",
    title: "Designing a schema before writing a single query",
    description:
      "Notes on structuring kidsportal's tables to avoid redundant joins before the feature list even stabilized.",
  },
];
