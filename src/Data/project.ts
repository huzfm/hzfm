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
    name: "The Estate",
    description:
      "This is a real estate management system that lets users manage properties built with vanilla JavaScript for core functionality and Firebase for secure login storage, and real-time database",
    live: "https://thestate.netlify.app/",
    sourceCode: "https://github.com/huzfm/The_estate",
  },
 
  {
    id: "2",
    name: "Skill Connect",
    description:
      "  Skill connect is a dynamic web platform designed to connect service providers and clients, SkillConnect streamlines the process of finding and offering services. The app focuses on providing a seamless and user-friendly experience.",
    live: "https://skillconnectnext.vercel.app",
    sourceCode: "https://github.com/huzfm/skill-connect",
  },

  {
    id: "3",
    name: "Devark",
    description:
      "Devark is a powerful CLI tool that helps you scaffold ready to use backend features instantly — like Oauth, OTP services, payments, file uploads, and more — without the boilerplate.",
    live: "https://devarkk.vercel.app/",
    sourceCode: "https://github.com/huzfm/devark",
  },
  {
    id: "4",
    name: "KeyBox",
    description:
      "A license key manager that generates, validates, and revokes access to your software",
    live: "https://keyboxx.vercel.app/",
    sourceCode: "https://github.com/huzfm/keybox",
  },
  {
    id: "5",
    name: "Donna AI",
    description:
      "You Personal AI Assistant. Upload documents, ask questions, manage emails all in one intelligent workspace. Donna understands your files and helps you work smarter.",
    live: "https://thedonna.vercel.app/",
    sourceCode: "https://github.com/huzfm/Donna",
  }


];
