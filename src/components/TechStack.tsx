import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', proficiency: 90, icon: '⚛️' },
  { name: 'Angular', proficiency: 85, icon: '🅰️' },
  { name: 'TypeScript', proficiency: 88, icon: '📘' },
  { name: 'JavaScript', proficiency: 90, icon: '📜' },
  { name: 'Spring Boot', proficiency: 85, icon: '🌱' },
  { name: 'Python', proficiency: 80, icon: '🐍' },
  { name: 'GCP', proficiency: 75, icon: '☁️' },
  { name: 'Docker', proficiency: 80, icon: '🐳' },
  { name: 'Kubernetes', proficiency: 70, icon: '⚓' },
  { name: 'Node.js', proficiency: 85, icon: '🟢' },
  { name: 'Next.js', proficiency: 80, icon: '⏭️' },
  { name: 'Firebase', proficiency: 85, icon: '🔥' },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="h-1 w-12 bg-neon-purple mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{tech.icon}</span>
                <h3 className="text-xl font-bold text-gradient">{tech.name}</h3>
              </div>
              <div className="w-full bg-background/50 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.proficiency}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue"
                ></motion.div>
              </div>
              <p className="text-right text-sm text-foreground/70 mt-2">
                {tech.proficiency}% proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 