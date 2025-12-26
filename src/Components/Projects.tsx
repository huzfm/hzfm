"use client";
import { projects } from "@/Data/project";
import ProjectCard from "@/Components/ProjectCard";
import { useTheme } from "@/contexts/ThemeContext";

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section className="mb-12">
      <h2
        className={`text-xl mb-6 font-dotz ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            live={project.live}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </section>
  );
}