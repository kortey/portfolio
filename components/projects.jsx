"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".firstText", {
        y: 200,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".firstText",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
      tl.from(".projects", {
        y: 200,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: ".firstText",
          start: "top center",
          end: "bottom bottom",
          stagger: 1,
          scrub: true,
        },
      });
    },
    { scope: projectRef }
  );

  const projects = [
    {
      id: 1,
      title: "A fitness Landing page",
      description:
        "this landing page design is inspired by an already existing design i found on dribbble. I is created with reactjs and tailwindcss",
      image: "/fitness1.png",
      url: "https://fitness-app-7860d.web.app/",
    },
    {
      id: 2,
      title: "A youtube alternativ",
      description:
        "this web app is an app built with reactjs. this integrares the youtube v3 api from rapid api.all infomation on this is is realtime",
      image: "/youtubesearch.png",
      url: "https://clone-e5403.web.app/",
    },
    {
      id: 3,
      title: "Workout Landing Page",
      description:
        "this landing page is one with beautiful design. It is buit with rectjs and follow best reactjs prctices.",
      image: "/fitnessapp.png",
      url: "https://workout-landingpage.web.app/",
    },
  ];

  return (
    <section
      ref={projectRef}
      className="min-h-screen flex py-20 items-center flex-col"
    >
      <h3 className="firstText text-[80px] md:text-[150px] lg:text-[200px] text-slate-900 font-bold">
        MY WORK
      </h3>
      <div className="container w-full md:w-[80%] bg-white rounded-lg border-white border-2 p-10 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="projects mt-10 p-5 border border-blue-500 bg-gradient-to-r from-black via-blue-800 to-purple-600 rounded-lg flex flex-col  items-center md:flex-row "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className="px-10 py-10 flex flex-col gap-8">
                <h5 className="font-bold text-3xl mb-5 text-slate-200">
                  {project.title}
                </h5>
                <p className="text-slate-300">{project.description} </p>

                <Link href={project.url}>
                  <button className="mt-4 px-5 py-3 bg-blue-400 rounded-lg hover:bg-blue-300 transition-all transition-0.1">
                    View Site
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
