"use client";
import Image from "next/image";
import { skillsData } from "../Data/skills";
import { useTheme } from "@/contexts/ThemeContext";

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section className="mb-12">
      <h2
        className={`text-xl mb-4 font-dotz ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded text-sm border transition-transform duration-300 hover:scale-110 ${
              isDark
                ? "bg-gray-800 text-gray-300 border-gray-700"
                : "bg-gray-100 text-gray-900 border-gray-300"
            }`}
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              className="h-4 w-4"
              width={4}
              height={4}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}