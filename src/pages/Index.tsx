
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
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Particles background */}
      <Particles count={20} maxSize={40} />
      
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
