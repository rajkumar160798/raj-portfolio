
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

const Index = () => {
  useEffect(() => {
    // Set default theme when the page loads
    const root = document.documentElement;
    if (!root.classList.contains("dark") && !root.classList.contains("light")) {
      root.classList.add("dark");
    }
    
    // Smooth scroll setup
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* Enhanced particles with better colors */}
      <Particles 
        count={35} 
        maxSize={15} 
        colors={['#9b87f5', '#D946EF', '#6E59F5']} 
      />
      
      <main>
        <Hero />
        <About />
        <Work />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
