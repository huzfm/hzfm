"use client";
import { contactData } from "@/Data/Contact";
import { Mail, Github, Twitter } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/Components/ThemeToggle";

export default function SocialBar() {
  const { isDark } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center justify-between gap-3 backdrop-blur-lg border rounded-2xl px-3 py-2 shadow-2xl ${
          isDark
            ? "bg-gray-900/25 border-gray-700/50"
            : "bg-white/25 border-gray-300/50"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${contactData.email}`}
            className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Email"
          >
            <Mail
              size={16}
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
            className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="GitHub"
          >
            <Github
              size={16}
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
            className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="Twitter"
          >
            <Twitter
              size={16}
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
            className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200/50"
            }`}
            title="LinkedIn"
          >
            <FaLinkedin
              size={16}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            />
          </a>
        </div>
        <a className="relative top-[12px]">
          <ThemeToggle />
        </a>
      </div>
    </div>
  );
}