import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="gradient-border p-1 rounded-2xl">
              <div className="glass-effect rounded-2xl overflow-hidden">
                <Image
                  src="/Richardkortey.png"
                  alt="Richard Kortey"
                  width={400}
                  height={400}
                  className="w-full hover-lift"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Hello! I'm Richard, a passionate Full Stack Developer based in Ghana. 
                I love creating beautiful and functional web applications that solve 
                real-world problems.
              </p>

              <p className="text-lg text-muted-foreground">
                With expertise in modern web technologies and a keen eye for design, 
                I strive to build applications that not only work flawlessly but 
                also provide an exceptional user experience.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="glass-effect p-4 rounded-lg hover-lift">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, Tailwind CSS
                  </p>
                </div>
                <div className="glass-effect p-4 rounded-lg hover-lift">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Express, MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
