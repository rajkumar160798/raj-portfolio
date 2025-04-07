import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import TechStack from "@/components/TechStack";
import AnimatedBackground from "@/components/AnimatedBackground";
import LineAnimation from "@/components/LineAnimation";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import { motion, AnimatePresence } from "framer-motion";

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
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />
      
      {/* Enhanced particles with better colors */}
      <Particles 
        count={35} 
        maxSize={15} 
        colors={['#9b87f5', '#D946EF', '#6E59F5']} 
      />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LineAnimation className="mb-24">
              <Hero />
            </LineAnimation>
            
            <LineAnimation className="mb-24">
              <About />
            </LineAnimation>
            
            <LineAnimation className="mb-24">
              <TechStack />
            </LineAnimation>
            
            <LineAnimation className="mb-24">
              <HorizontalScroll>
                <Work />
              </HorizontalScroll>
            </LineAnimation>
            
            <LineAnimation className="mb-24">
              <Blog />
            </LineAnimation>
            
            <LineAnimation>
              <Contact />
            </LineAnimation>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
