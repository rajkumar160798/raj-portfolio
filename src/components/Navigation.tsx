
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold tracking-tight neon-text"
          >
            Raj
          </a>
          
          {/* Social Icons - Desktop Only */}
          <div className="hidden md:flex items-center gap-3 ml-6">
            <a 
              href="https://github.com/rajkumar160798" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-neon-purple transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/raj-kumar-myakala-927860264/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-neon-purple transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:raj@example.com" 
              className="text-foreground/60 hover:text-neon-purple transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-foreground/70 hover:text-neon-purple transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("work")} 
              className="text-foreground/70 hover:text-neon-purple transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-foreground/70 hover:text-neon-purple transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground/70 hover:text-neon-purple transition-colors"
            >
              Contact
            </button>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMobileMenu} 
            className="rounded-full"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="absolute top-5 right-4"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <nav className="flex flex-col items-center gap-6 text-lg">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground/70 hover:text-neon-purple transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("work")}
              className="text-foreground/70 hover:text-neon-purple transition-colors py-2"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-foreground/70 hover:text-neon-purple transition-colors py-2"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground/70 hover:text-neon-purple transition-colors py-2"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-6 mt-10">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-neon-purple transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-neon-purple transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:raj@example.com" 
              className="text-foreground/60 hover:text-neon-purple transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
