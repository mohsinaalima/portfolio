import type { Principle } from "@/app/types";

export const principles = [
  {
    id: "independently-deployable",
    title: "Independently deployable, always.",
    body: "I split PicScale into three distinct services so no single failure—like a heavy worker thread—takes down the entire system or the API gateway.",
  },
  {
    id: "fix-the-deployment",
    title: "Fix the deployment, not around it.",
    body: "When Render's Linux sandbox blocked binary generation, I didn't patch over it. I traced the fault to the Node engine loader and fixed the infrastructure constraint.",
  },
  {
    id: "state-lives-in-one-place",
    title: "State lives in one place.",
    body: "If a component tree gets too deep, I pull the state out. Managing local drawing state alongside secure JWT OAuth flows taught me exactly where boundaries belong.",
  },
];

