export type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
};

export type DiagramEdge = {
  from: string;
  to: string;
};

export type ProjectStatus = "shipped" | "in-progress";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  tagline: string;
  problem?: string;
  solution?: string;
  challenge?: string;
  outcome?: string;
  tech: string[];
  links?: {
    github?: string;
    live?: string;
  };
  diagram?: {
    nodes: DiagramNode[];
    edges: DiagramEdge[];
  };
};

export type Principle = {
  id: string;
  title: string;
  body: string;
};

export type TimelineEntry = {
  id: string;
  date: string;
  title: string;
  description: string;
};

export type CurrentlyBuildingItem = {
  id: string;
  label: string;
  why: string;
};
