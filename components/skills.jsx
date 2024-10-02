

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TailwindCSS",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
  ];

  return (
    <section className="min-h-screen flex  flex-col items-center gap-10 lg:flex-row lg:gap-20 justify-center">
      <h3 className="text-[50px]  lg:text-[100px] text-slate-200 font-bold mb-5">
        SKILLS
      </h3>
      <div className="flex  flex-row flex-wrap  mx-10 gap-5  filter-blur">
        {skills.map((skill) => (
          <div
            key={skill}
            className=" text-white text-3xl font-bold py-5 px-10 rounded bg-gradient-to-tr from-black via-[blue] to-purple-800 "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
