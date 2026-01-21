"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Footer from "@/Components/Footer";
import SocialBar from "@/Components/SocialBar";
import FooterGlow from "@/Components/FooterEnd";

export default function Home() {
  const { isDark } = useTheme();
   
  
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className={`
  fixed inset-0 -z-10 w-full mobile-viewport-fix
  ${isDark ? "bg-black" : "bg-white"}
`}
      />
      <div
        className={`relative flex-1 font-caprasimo p-4 md:p-8 max-w-4xl mx-auto w-full pb-24 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Footer />
        
        <SocialBar />
      </div>

      {/* <div className="mt-auto">
        <FooterGlow />
      </div> */}
    </div>
  );
}
