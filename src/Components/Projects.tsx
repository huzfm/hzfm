"use client";
import { projects } from "@/Data/project";
import ProjectCard from "@/Components/ProjectCard";
import { useTheme } from "@/contexts/ThemeContext";

export default function Projects() {
  const { isDark } = useTheme();

  const personal = [...projects]
    .reverse()
    .filter((project) => project.tag === "personal");
  const freelance = [...projects]
    .reverse()
    .filter((project) => project.tag === "freelance");

  const columns = [
    { title: "Personal", items: personal },
    { title: "Freelance", items: freelance },
  ];

  return (
    <section className="mb-12">
      <h2
        className={`text-xl mb-6 font-dotz text-center ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Projects
      </h2>
      <div
        className={`grid md:grid-cols-2 md:divide-x ${
          isDark ? "divide-gray-800" : "divide-gray-300"
        }`}
      >
        {columns.map((column) => (
          <div key={column.title} className="md:px-6 first:md:pl-0 last:md:pr-0">
            <h3
              className={`text-base mb-6 font-dotz ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {column.title}
            </h3>
            <div className="grid gap-6 mb-10 md:mb-0">
              {column.items.map((project) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}
