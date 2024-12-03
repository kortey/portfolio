import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "youtube clone",
    description: "a youtube clone with React and material-UI",
    image: "/youtubesearch.png",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    liveLink: "https://clone-e5403.web.app/",
   
  },
  {
    title: "fitness langing page",
    description: "A beautiful and responssive landing page for a fitness company",
    image: "/fitnessApp.png",
    tags: ["React", "Material-UI"],
    liveLink: "https://workout-landingpage.web.app/",
  },
  {
    title: "weight loss Landing page.",
    description: "A beautiful and responssive landing page for a weightloss company company.",
    image: "/fitness.png",
    tags: ["Next.js", "tailwind"],
    liveLink: "https://fitness-app-7860d.web.app/",
   
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="gradient-border p-1 rounded-xl">
                  <div className="glass-effect rounded-xl overflow-hidden">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          Live Demo →
                        </a>
                      
                      </div>
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

export default Projects;
