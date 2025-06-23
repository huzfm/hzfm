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
    description:
      "  Skill connect is a dynamic web platform designed to connect service providers and clients, SkillConnect streamlines the process of finding and offering services. The app focuses on providing a seamless and user-friendly experience.",
    live: "https://skillconnectnext.vercel.app",
    sourceCode: "https://github.com/huzfm/skill-connect",
  },

  {
    id: "2",
    name: "The Estate",
    description:
      "This is a real estate management system that lets users manage properties built with vanilla JavaScript for core functionality and Firebase for secure login storage, and real-time database",
    live: "https://thestate.netlify.app/",
    sourceCode: "https://github.com/huzfm/The_estate",
  },

  {
    id: "3",
    name: "Travel itenary",
    description:
      "This React app is an intuitive, user-friendly web platform showcases the famous picnic spots of Kashmir. Built with React, this website offers a seamless experience for users interested in discovering new destinations, and organizing their journeys. ",
    live: "https://travel-journey-react.netlify.app/",
    sourceCode: "https://github.com/huzfm/Travel-journey",
  },
];
