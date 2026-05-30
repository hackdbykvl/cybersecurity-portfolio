import { useEffect } from "react";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import SecurityTape from "./components/SecurityTape";
import SectionDivider from "./components/SectionDivider";
import ThreatTicker from "./components/ThreatTicker";
import ScrollProgress from "./components/ScrollProgress";
import CyberTerminal from "./components/Terminal";


import Services from "./sections/Services";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";
import About from "./sections/About";
import CaseStudies from "./sections/CaseStudies";

import CursorGlow from "./effects/CursorGlow";


export default function App() {
  // Detect mobile (safe SSR + runtime check)
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  // Optional: keep scroll smooth behavior once globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* LOADING */}
      <LoadingScreen />

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* CURSOR GLOW (DESKTOP ONLY) */}
      {!isMobile && <CursorGlow />}

      {/* MAIN APP */}
      <main className="relative z-10 min-h-screen bg-black text-white">

        
        {/* NAVBAR */}
        <Navbar />

        {/* LIVE THREAT FEED */}
        <ThreatTicker />

        {/* HERO */}
        <Hero />
        <CyberTerminal />
        <SectionDivider />
        <About />

        <div className="py-6 md:py-10">
          <SecurityTape />
        </div>

        <SectionDivider />
        <Skills />

        <SectionDivider />
        <Certifications />

        <SectionDivider />
        <Projects />
        <SectionDivider />
        <CaseStudies/>
        <SectionDivider />
        <Services />
        <Contact />
        
        <Footer />
        
      </main>
    </>
  );
}