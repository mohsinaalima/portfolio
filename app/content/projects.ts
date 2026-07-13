export const projects = [
  {
    slug: "insaafsetu",
    name: "InsaafSetu",
    tagline: "Legal-tech platform architecture",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 100, y: 100, label: "Client" },
        { id: "2", x: 300, y: 100, label: "Server" },
      ],
      edges: [{ id: "e1", path: "M 130 100 L 270 100" }],
    },
  },
  {
    slug: "kids-portal",
    name: "KidsPortal",
    tagline: "Secure canvas & auth flow",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 100, y: 50, label: "Canvas" },
        { id: "2", x: 100, y: 150, label: "OAuth" },
        { id: "3", x: 300, y: 100, label: "FastAPI" },
      ],
      edges: [
        { id: "e1", path: "M 140 50 L 260 90" },
        { id: "e2", path: "M 140 150 L 260 110" },
      ],
    },
  },
  {
    slug: "crop-chain",
    name: "CropChain",
    tagline: "Supply chain transparency",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 100, y: 100, label: "Blockchain" },
        { id: "2", x: 300, y: 100, label: "API" },
      ],
      edges: [{ id: "e1", path: "M 140 100 L 260 100" }],
    },
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    tagline: "Browser-only LLM pipeline",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 80, y: 100, label: "Upload" },
        { id: "2", x: 200, y: 100, label: "Parser" },
        { id: "3", x: 320, y: 100, label: "LLM" },
      ],
      edges: [
        { id: "e1", path: "M 110 100 L 170 100" },
        { id: "e2", path: "M 230 100 L 290 100" },
      ],
    },
  },
  {
    slug: "picscale",
    name: "PicScale",
    tagline: "Distributed image pipeline",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 80, y: 100, label: "Browser" },
        { id: "2", x: 200, y: 100, label: "Gateway" },
        { id: "3", x: 320, y: 60, label: "Worker" },
        { id: "4", x: 320, y: 140, label: "CDN" },
      ],
      edges: [
        { id: "e1", path: "M 110 100 L 170 100" },
        { id: "e2", path: "M 230 100 L 290 70" },
        { id: "e3", path: "M 230 100 L 290 130" },
      ],
    },
  },
  {
    slug: "zaika-zone",
    name: "Zaika Zone",
    tagline: "MERN Stack Restaurant App",
    diagram: {
      viewBox: "0 0 400 200",
      nodes: [
        { id: "1", x: 80, y: 100, label: "Client" },
        { id: "2", x: 200, y: 100, label: "Server" },
        { id: "3", x: 320, y: 100, label: "Database" },
      ],
      edges: [
        { id: "e1", path: "M 110 100 L 170 100" },
        { id: "e2", path: "M 230 100 L 290 100" },
      ],
    },
  },
];
