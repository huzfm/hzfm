"use client";
import Image from "next/image";
import { personalData } from "@/Data/personalInfo";
import { useTheme } from "@/contexts/ThemeContext";
import OnlineStatus from "@/Components/Animating-Text";


export default function Hero() {
  const { isDark } = useTheme();

  return (
    <header className="mb-8 sm:mb-12 font-caprasimo pt-6 sm:pt-8">

      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-5">

          <div className="relative flex-shrink-0">
            <div
              className={`absolute inset-0 rounded-full blur-md opacity-40 ${
                isDark ? "bg-violet-500" : "bg-violet-400"
              }`}
            />
            <Image
              src={personalData.ProfilePicture}
              alt={personalData.Name}
              width={300}
              height={300}
              className={`relative w-[52px] h-[52px] sm:w-[65px] sm:h-[65px] rounded-full border-2 object-cover ${
                isDark ? "border-black" : "border-black"
              }`}
            />
          </div>

          {/* Name + alias + status */}
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              <h1 className="text-base sm:text-xl font-bold tracking-tight font-dotz">
                {personalData.Name}
              </h1>
              <div
                className={`inline-flex items-center gap-x-1.5 px-2 sm:px-3 py-0.5 sm:py-1 border rounded-full text-[10px] sm:text-xs font-medium ${
                  isDark
                    ? "text-white border-gray-700 bg-gray-900/60"
                    : "text-black border-gray-300 bg-white/60"
                }`}
              >
                <OnlineStatus />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm font-mono whitespace-nowrap ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              @{personalData.Alias.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
