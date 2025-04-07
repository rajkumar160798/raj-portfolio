
import React from "react";
import TypedText from "./TypedText";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, ExternalLink, Sparkles, Cpu, HardDrive, Server, Layers, Command } from "lucide-react";
import { motion } from "framer-motion";


const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-background/10 to-background/20 opacity-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/5 text-neon-purple text-sm mb-6">
            <Sparkles size={20} className="animate-pulse" />
            <span>AI|ML Developer | Data Engineer | Full Stack Developer </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
            Hello! I'm{" "}
            <span className="text-neon-purple">Raj</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/90">
            I build{" "}
            <TypedText
              words={["innovative", "responsive", "modern", "interactive"]}
              typingSpeed={100}
              className="text-gradient font-bold"
            />
            {" "}Web Applications, Ai Solutions and ML Models
          </h2>
          <p className="text-lg text-foreground/70 mt-6 max-w-lg mx-auto lg:mx-0">
          I build intelligent digital solutions at the intersection of AI, cloud, and design — turning complex ideas into real-world impact.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <Button 
            onClick={() => scrollToSection("work")} 
            className="bg-neon-purple hover:bg-neon-purple/90 gap-2 text-white">
              View My Work <ChevronRight size={16} />
            </Button>
            <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 gap-2">
              Get in Touch <ExternalLink size={16} />
            </Button>
          </div>
        </div>

        {/* Animated tech icons */}
        {/* <div className="hidden md:flex absolute right-8 top-32 gap-4">
          {[].map((Icon, index) => (
            <motion.div 
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: index * 0.1, duration: 0.5 } 
              }}
              className="p-2 rounded-lg glass-card"
            >
              <Icon 
                className="text-neon-purple" 
                size={24}
              />
            </motion.div>
          ))}
        </div> */}

        {/* Creative Code Display */}
        <motion.div 
          className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="w-full h-full relative rounded-2xl border border-white/10 overflow-hidden glass-card">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/5"></div>
            
            {/* Animated tools icons in the background */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              {[
                { icon: Cpu, top: '10%', left: '10%', delay: 0 },
                { icon: HardDrive, top: '30%', left: '80%', delay: 0.8 },
                { icon: Server, top: '70%', left: '20%', delay: 1.6 },
                { icon: Layers, top: '60%', left: '70%', delay: 2.4 },
                { icon: Command, top: '20%', left: '50%', delay: 3.2 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="absolute"
                  style={{ top: item.top, left: item.left }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <item.icon size={40} />
                </motion.div>
              ))}
            </div>
            
            {/* Code Snippets with Glow Effect */}
            <div className="w-full h-full flex flex-col p-6 font-mono text-sm text-neon-purple/90 overflow-hidden relative z-10">
              <div className="flex items-center gap-2 mb-4 text-foreground/70">
                <Code size={16} />
                <span className="text-xs">portfolio.tsx</span>
              </div>
              
              <div className="space-y-2 animate-float">
                <pre className="text-foreground/50">{`const `}<span className="text-neon-pink">Developer</span>{` = () => {`}</pre>
                <pre className="pl-4 text-foreground/60">{`const skills = [`}</pre>
                <pre className="pl-8 text-neon-purple">{}</pre>
                <pre className="pl-8 text-neon-purple">{`"Angular", "React", "TypeScript", "JavaScript", "Spring Boot", "Java", "Python", "GCP", "BigQuery",
    "Airflow", "Firestore", "Docker", "Kubernetes", "REST APIs", "Microservices", "Firebase", "Tailwind CSS",
    "Data Engineering", "AI/ML", "FastAPI", "Node.js", "Next.js", "UI/UX Design", "Power BI"`}</pre>
                <pre className="pl-4 text-foreground/60">{`];`}</pre>
                <pre className="pl-4 text-foreground/90">
                  {`const `}<span className="text-neon-pink">passion</span>{` = 'Creating beautiful web experiences and Predecetive Analytics using AI/ML';`}
                </pre>
                <pre className="pl-4 text-foreground/90 mt-2">
                  {`return (`}
                </pre>
                <pre className="pl-8 text-foreground/70">
                  {`<Portfolio`}
                </pre>
                <pre className="pl-12 text-neon-purple">
                  {`name="Raj"`}
                </pre>
                <pre className="pl-12 text-neon-purple">
                  {`skills={skills}`}
                </pre>
                <pre className="pl-12 text-neon-purple">
                  {`passion={passion}`}
                </pre>
                <pre className="pl-8 text-foreground/70">
                  {`/>`}
                </pre>
                <pre className="pl-4 text-foreground/90">
                  {`);`}
                </pre>
                <pre className="text-foreground/50">{`};`}</pre>
                
                <pre className="mt-4 text-foreground/50">{`export default Developer;`}</pre>
              </div>
            </div>
            
            {/* Animated coding cursor */}
            <motion.div 
              className="absolute bottom-8 right-8 w-2 h-5 bg-neon-pink"
              animate={{
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity
              }}
            />
            
            {/* Animated glowing dots */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-purple/80 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-neon-pink/80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-neon-blue/80 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-neon-purple/20 blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-neon-pink/20 blur-2xl"></div>

          {/* Animated circuit lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M10,30 Q30,50 50,30 T90,30" 
              stroke="url(#gradient)" 
              strokeWidth="0.3" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path 
              d="M10,50 Q30,70 50,50 T90,50" 
              stroke="url(#gradient)" 
              strokeWidth="0.3" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.path 
              d="M10,70 Q30,90 50,70 T90,70" 
              stroke="url(#gradient)" 
              strokeWidth="0.3" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9b87f5" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      
      {/* Resume Button - fixed at bottom right */}
      <a 
        href="/resume.pdf" 
        target="_blank"
        className="fixed bottom-8 right-8 z-20 button-primary py-2 px-4 rounded-full shadow-lg flex items-center gap-2 hover:gap-3 transition-all"
      >
        Resume <ChevronRight size={16} />
      </a>
    </section>
  );
};

export default Hero;
