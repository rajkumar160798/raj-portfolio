
import React from "react";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Three.js", "GSAP",
    "Tailwind CSS", "UI/UX Design", "Figma", "Web Animation", "CSS/SCSS"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-12 bg-neon-purple mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Hi there! I'm Raj, a passionate creative developer with over 5 years of experience crafting digital experiences that merge technology with artistry.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              My journey began with frontend development, but my passion for creating immersive experiences led me to explore the realm of interactive 3D graphics and animations.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I specialize in building unique, performant websites with modern technologies like React, Three.js, and GSAP, always pushing the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you can find me experimenting with new design trends, contributing to open-source projects, or exploring the latest in creative technology.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-gradient">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full neon-border text-foreground/80 bg-background hover:bg-neon-purple/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-gradient">Experience</h3>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h4 className="font-bold">Senior Frontend Developer</h4>
                  <p className="text-neon-purple">Creative Tech Agency • 2021-Present</p>
                  <p className="text-foreground/70 mt-2">Leading development of interactive web experiences and 3D visualizations</p>
                </div>
                <div className="glass-card p-6">
                  <h4 className="font-bold">UI/UX Developer</h4>
                  <p className="text-neon-purple">Digital Solutions Inc • 2019-2021</p>
                  <p className="text-foreground/70 mt-2">Designed and developed responsive web applications with focus on user experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
