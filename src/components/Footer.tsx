
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="text-2xl font-bold neon-text">Raj</a>
            <p className="text-foreground/60 mt-2">
              Creative Developer & Designer
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-foreground/60">
              © {currentYear} Raj. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex gap-6 mb-4 md:mb-0">
            <a href="#about" className="text-foreground/70 hover:text-neon-purple transition-colors">
              About
            </a>
            <a href="#work" className="text-foreground/70 hover:text-neon-purple transition-colors">
              Work
            </a>
            <a href="#blog" className="text-foreground/70 hover:text-neon-purple transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-neon-purple transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="text-foreground/50 text-sm">
            Designed and built with 💜 by Raj
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
