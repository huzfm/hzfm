"use client";
import { personalData } from "@/Data/personalInfo";
import { useTheme } from "@/contexts/ThemeContext";
import GithubGraph from "@/Components/Github-Graph";
import CodeTimeBadge from "@/Components/Code-Time";

export default function About() {
  const { isDark } = useTheme();

 

  return (
    <section className="mb-12">
     
      <h2
        className={`text-2xl mb-4  ${
          isDark ? "text-white" : "text-black"
        }`}
      >
     About
      </h2>
      <div
        className={`mb-4 font-mono text-sm ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
      </div>
      <div
        className={`space-y-4 leading-relaxed ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <p className="text-justify">{personalData.aboutMe}</p>
      </div>
      <div className="pt-10">
        <GithubGraph />
      </div>
      <div className="pt-10">
        <CodeTimeBadge />
      </div>
    </section>
  );
}