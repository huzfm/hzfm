"use client";
import Image from "next/image";
import { personalData } from "@/Data/personalInfo";
import { contactData } from "@/Data/Contact";
import { projects } from "@/Data/project";
import { skillsData } from "../Data/skills";
import ProjectCard from "@/Components/ProjectCard";
import { Mail, Github, Twitter } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/Components/ThemeToggle";
import { Heart } from "lucide-react";
import GithubGraph from "@/Components/Github-Graph";
import CodeTimeBadge from "@/Components/Code-Time";
import OnlineStatus from "@/Components/Animating-Text";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
      <Analytics />
      {/* Fixed Background */}
      <div
        className={`
  fixed inset-0 -z-10 w-full mobile-viewport-fix
  ${isDark ? "bg-black" : "bg-white"}
`}
      />
      {/* Scrollable Content */}
      <div
        className={`relative min-h-screen font-caprasimo p-4 md:p-8 max-w-4xl mx-auto pb-24 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {/* Header */}
        <header className="mb-12 font-caprasimo pt-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Image
                src={personalData.ProfilePicture}
                alt={personalData.Name}
                width={300}
                height={300}
                className={` w-15 h-15 rounded-full border-2 ${
                  isDark ? "border-gray-700" : "border-gray-300"
                }`}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm sm:text-xl md:text-lg font-bold">
                    {personalData.Name}
                  </h1>

                  <div
                    className={`inline-flex items-center gap-x-2 px-3 py-1 border border-gray-600 rounded-full text-sm font-medium ${
                      isDark ? "text-white" : "text-black"
                    }
                    ${isDark ? "bg-black " : "bg-white "}
                    `}
                  >
                    <OnlineStatus />
                    <span className="inline-block h-1 w-1 rounded-full bg-green-500 animate-ping"></span>
                  </div>
                </div>
                <p
                  className={`text-sm  isDark ? "text-gray-400" : "text-gray-600"`}
                >
                  @{personalData.Alias.toLowerCase()}
                </p>
              </div>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2
            className={`text-2xl  mb-4 font-mono ${
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
            {/* [ break → understand → build ] */}
          </div>
          <div
            className={`space-y-4 leading-relaxed ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <p>{personalData.aboutMe}</p>
          </div>
          <div className="pt-10">
            <GithubGraph />
          </div>
          <div className="pt-10">
            <CodeTimeBadge />
          </div>
        </section>

        {/* Skills Section */}
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
                    ? "bg-gray-800 text-gray-300 border-gray-700 "
                    : "bg-gray-100 text-gray-900 border-gray-300 "
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

        {/* Projects Section */}
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
            <footer className="text-center pt-5 pb-5 flex justify-center items-center gap-2 text-sm/snug">
              Made with{" "}
              <Heart
                className="w-5 h-5 text-red-500 inline"
                fill="currentColor"
              />{" "}
              by huzfm
            </footer>
          </div>
        </section>
      </div>
      {/* Sticky Contact Dock - Always at bottom */}
      <div className="fixed bottom-6  left-1/2 transform -translate-x-1/2 z-50">
        <div
          className={`flex items-center gap-2 backdrop-blur-lg border rounded-2xl px-4 py-3 shadow-2xl ${
            isDark
              ? "bg-gray-900/25 border-gray-700/50"
              : "bg-white/25 border-gray-300/50"
          }`}
        >
          <a
            href={`mailto:${contactData.email}`}
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Email"
          >
            <Mail
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="GitHub"
          >
            <Github
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>

          <a
            href={contactData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Twitter"
          >
            <Twitter
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>

          <a
            href={contactData.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="LinkedIn"
          >
            <FaLinkedin
              size={18}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>
        </div>
      </div>
    </>
  );
}
