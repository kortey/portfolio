"use client";

import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Hero from "../components/hero";

export default function Home() {
  return (
    <main className=" bg-[#fbf1e7] text-gray-950">
      <div className="min-h-screen">
        <Header />
        <Hero />

      </div>
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
