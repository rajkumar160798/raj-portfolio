
import React from "react";
import TypedText from "./TypedText";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Hello! I'm{" "}
            <span className="neon-text animate-neon-flicker">Raj</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium mt-4 text-foreground/90">
            A Creative{" "}
            <TypedText
              words={["Developer", "Designer", "Thinker", "Problem Solver"]}
              typingSpeed={100}
              className="text-gradient font-bold"
            />
          </h2>
          <p className="text-lg text-foreground/70 mt-6 max-w-md">
            I build exceptional digital experiences that live at the intersection of design and technology.
          </p>
          <div className="flex gap-4 mt-10">
            <a href="#work" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-outlined">
              Let's Talk
            </a>
          </div>
        </div>

        {/* 3D Avatar Container */}
        <div className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center">
          <div className="w-full h-full relative overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent"></div>
            
            {/* Placeholder for 3D avatar - This would be replaced with actual Three.js */}
            <div className="w-full h-full flex items-center justify-center text-center">
              <div className="animate-float">
                <div className="text-4xl mb-4">👨‍💻</div>
                <p className="text-neon-purple">3D Character Here</p>
                <p className="text-sm text-foreground/50 mt-2">
                  (Three.js implementation)
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-neon-purple/20 blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-neon-pink/20 blur-2xl"></div>
        </div>
      </div>
      
      {/* Resume Button - fixed at bottom right */}
      <a 
        href="/resume.pdf" 
        target="_blank"
        className="fixed bottom-8 right-8 z-20 button-primary py-2 px-4 rounded-full shadow-lg"
      >
        Resume
      </a>
    </section>
  );
};

export default Hero;
