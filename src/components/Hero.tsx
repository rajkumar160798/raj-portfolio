
import React from "react";
import TypedText from "./TypedText";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, ExternalLink, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/5 text-neon-purple text-sm mb-6">
              <Sparkles size={14} className="animate-pulse" />
              <span>Creative Developer</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
              Hello! I'm{" "}
              <span className="neon-text animate-neon-flicker">Raj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/90">
              I build{" "}
              <TypedText
                words={["innovative", "responsive", "modern", "interactive"]}
                typingSpeed={100}
                className="text-gradient font-bold"
              />
              {" "}experiences
            </h2>
            <p className="text-lg text-foreground/70 mt-6 max-w-md">
              I craft exceptional digital experiences that live at the intersection 
              of design and technology.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <Button className="bg-neon-purple hover:bg-neon-purple/90 gap-2 text-white">
                View My Work <ChevronRight size={16} />
              </Button>
              <Button variant="outline" className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 gap-2">
                Get in Touch <ExternalLink size={16} />
              </Button>
            </div>
          </div>

          {/* Creative Code Display */}
          <div className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center order-first lg:order-last">
            <div className="w-full h-full relative rounded-2xl border border-white/10 overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/5"></div>
              
              {/* Code Snippets with Glow Effect */}
              <div className="w-full h-full flex flex-col p-6 font-mono text-sm text-neon-purple/90 overflow-hidden">
                <div className="flex items-center gap-2 mb-4 text-foreground/70">
                  <Code size={16} />
                  <span className="text-xs">portfolio.tsx</span>
                </div>
                
                <div className="space-y-2 animate-float">
                  <pre className="text-foreground/50">{`const `}<span className="text-neon-pink">Developer</span>{` = () => {`}</pre>
                  <pre className="pl-4 text-foreground/60">{`const skills = [`}</pre>
                  <pre className="pl-8 text-neon-purple">{`'React', 'TypeScript', 'UI/UX Design',`}</pre>
                  <pre className="pl-8 text-neon-purple">{`'Animation', 'Creative Coding', 'Web Design'`}</pre>
                  <pre className="pl-4 text-foreground/60">{`];`}</pre>
                  <pre className="pl-4 text-foreground/90">
                    {`const `}<span className="text-neon-pink">passion</span>{` = 'Creating beautiful web experiences';`}
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
              
              {/* Animated glowing dots */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-purple/80 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-neon-pink/80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-neon-blue/80 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-neon-purple/20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-neon-pink/20 blur-2xl"></div>
          </div>
        </div>
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
