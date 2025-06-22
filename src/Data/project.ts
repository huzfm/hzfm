export interface Project {
  id: string;
  name: string;
  description: string;
  live: string;
  sourceCode: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Skill Connect",
    description: "-----------------------------------------",
    live: "-----------------------------------------",
    sourceCode: "-----------------------------------------",
  },

  {
    id: "2",
    name: "The Estate",
    description: "-----------------------------------------",
    live: "-----------------------------------------",
    sourceCode: "-----------------------------------------",
  },

  {
    id: "3",
    name: "Travel itenary",
    description: "-----------------------------------------",
    live: "https://github.com/krey-yon/100xRPC",
    sourceCode: "https://github.com/krey-yon/100xRPC",
  },
];
