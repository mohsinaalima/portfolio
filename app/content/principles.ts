import type { Principle } from "@/app/types";

export const principles = [
  {
    id: "independently-deployable",
    title: "Independently deployable, always.",
    body: "Split PicScale into three services — client, API gateway, worker — so a slow image job never takes down the API, and each piece ships on its own schedule.",
  },
  {
    id: "fix-the-deployment",
    title: "Fix the deployment, not around it.",
    body: "When Render's sandbox silently blocked binary generation, traced it to the Node engine loader instead of patching over the symptom.",
  },
  {
    id: "state-lives-in-one-place",
    title: "State lives in one place.",
    body: "Chose Zustand over prop drilling once component depth made local state unmanageable — one source of truth, not five components guessing at each other.",
  },
  {
    id: "parse-for-reality",
    title: "Parse for reality, not the ideal case.",
    body: "Resume PDFs vary wildly in format and encoding. Built a multi-layer extraction pipeline instead of assuming every file looks the same.",
  },
  {
    id: "auth-is-not-an-afterthought",
    title: "Auth is not an afterthought.",
    body: "Session management, token refresh, and protected routes were part of kidsportal's design from the start — not bolted on after the UI was done.",
  },
  {
    id: "schemas-earn-complexity",
    title: "Schemas earn their complexity.",
    body: "Structured kidsportal's MySQL tables to serve personalized feeds without redundant joins — every relation has a reason to exist.",
  },
] as const satisfies Principle[];
