import { motion } from "framer-motion";

const skillsData = {
  "Frontend Development": [
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML/CSS", level: "Advanced" },
  ],
  "Backend Development": [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "RESTful APIs", level: "Advanced" },
  ],
  "Tools & Others": [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Responsive Design", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
  ],
};

const SkillCard = ({ name, level }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-effect p-4 rounded-lg hover-lift"
  >
    <div className="flex justify-between items-center">
      <span className="font-medium text-white">{name}</span>
      <span className="text-sm text-white/70">{level}</span>
    </div>
    <div className="mt-2 h-1.5 bg-primary/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: level === "Advanced" ? "85%" : "65%" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="gradient-border p-1 rounded-xl">
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {skills.map((skill, skillIndex) => (
                        <SkillCard key={skillIndex} {...skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
