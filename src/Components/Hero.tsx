"use client";
import Image from "next/image";
import { personalData } from "@/Data/personalInfo";
import { useTheme } from "@/contexts/ThemeContext";
import OnlineStatus from "@/Components/Animating-Text";

export default function Hero() {
  const { isDark } = useTheme();


  return (
    <header className="mb-12 font-caprasimo pt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Image
            src={personalData.ProfilePicture}
            alt={personalData.Name}
            width={300}
            height={300}
            className={`w-[150px] h-[150px] rounded-full border-2 ${
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
                } ${isDark ? "bg-black" : "bg-white"}`}
              >
                <OnlineStatus />
                <span className="inline-block h-1 w-1 rounded-full bg-green-500 animate-ping"></span>
              </div>
            </div>
            <p
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              @{personalData.Alias.toLowerCase()}
            </p>
      
                  
          </div>
        </div>
      </div>
        
    </header>
  );
}
