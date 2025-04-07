
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains("light") ? "light" : "dark";
    }
    return "dark"; // Default theme
  });
  
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    
    // Add subtle transition effect to all elements
    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 relative hover:bg-neon-purple/10"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
        animate={{ 
          scale: theme === "dark" ? 1 : 0, 
          rotate: 0, 
          opacity: theme === "dark" ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-neon-purple" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.5, rotate: 30, opacity: 0 }}
        animate={{ 
          scale: theme === "light" ? 1 : 0, 
          rotate: 0, 
          opacity: theme === "light" ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-neon-purple" />
      </motion.div>
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
