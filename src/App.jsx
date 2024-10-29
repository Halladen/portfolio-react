import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection.jsx";
function App() {
  return (
    <BrowserRouter>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
