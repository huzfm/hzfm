export type ProjectTag = "personal" | "freelance";

export interface Project {
  id: string;
  name: string;
  description: string;
  live: string;
  sourceCode: string;
  tag: ProjectTag;
}

export const projects: Project[] = [

  {
    id: "2",
    name: "Skill Connect",
    description:
      "  Skill connect is a dynamic web platform designed to connect service providers and clients, SkillConnect streamlines the process of finding and offering services. The app focuses on providing a seamless and user-friendly experience.",
    live: "https://skillconnectnext.vercel.app",
    sourceCode: "https://github.com/huzfm/skill-connect",
    tag: "personal",
  },

  {
    id: "3",
    name: "Devark",
    description:
      "Devark is a powerful CLI tool that helps you scaffold ready to use backend features instantly like Oauth, OTP services, payments, file uploads, and more without the boilerplate.",
    live: "https://devarkk.vercel.app/",
    sourceCode: "https://github.com/huzfm/devark",
    tag: "personal",
  },
  {
    id: "4",
    name: "KeyBox",
    description:
      "A license key manager that generates, validates, and revokes access to your software",
    live: "https://keyboxx.vercel.app/",
    sourceCode: "https://github.com/huzfm/keybox",
    tag: "personal",
  },
  {
    id: "5",
    name: "Donna AI",
    description:
      "You Personal AI Assistant. Upload documents, ask questions, manage emails all in one intelligent workspace. Donna understands your files and helps you work smarter.",
    live: "https://thedonna.vercel.app/",
    sourceCode: "https://github.com/huzfm/Donna",
    tag: "personal",
  },
  {
    id: "6",
    name: "Azees Travel CRM",
    description:
      "Azees Travel CRM is a comprehensive Customer Relationship Management system designed specifically for the travel industry. It streamlines, Lead managment,bookings and  and itinearay generation and much more",
    live: "https://flow.azeestravels.com",
    sourceCode: "https://github.com/huzfm",
    tag: "freelance",
  },
   {
    id: "7",
    name: "Land Aim Reality",
    description:
      "Real estate listings platform with full auth and property management, deployed on a self-managed VPS using Docker, Traefik, and MinIO for object storage",
    live: "https://landaimreality.in",
    sourceCode: "https://github.com/huzfm",
    tag: "freelance",
  },

  {
    id: "8",
    name: "Pro Warm",
    description:
      "Full marketing site for an underfloor heating brand, with SSR product pages and custom scroll animations",
    live: "https://prowarm.vercel.app",
    sourceCode: "https://github.com/huzfm",
    tag: "freelance",
  },


];


