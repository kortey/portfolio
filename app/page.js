"use client";

import Header from "@/components/header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Hero from "@/components/hero";

export default function Home() {
 


  return (
    <main className=" bg-[#fbf1e7] text-gray-950">
      <div className="min-h-screen">
        <Header />
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fbf1e7] to-transparent z-1000"></div>
      </div>
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
