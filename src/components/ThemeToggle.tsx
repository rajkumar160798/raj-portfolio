
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 hover:bg-neon-purple/10"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-neon-purple transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-neon-purple transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
