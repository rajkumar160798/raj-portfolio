
import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  colors?: string[];
}

const Particles: React.FC<ParticleProps> = ({
  count = 30,
  minSize = 2,
  maxSize = 12,
  speed = 1,
  colors = ['#9b87f5', '#D946EF', '#6E59F5']
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particles: HTMLElement[] = [];
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = 'particle';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      const duration = (Math.random() * 25 + 15) / speed;
      const delay = Math.random() * 5;
      
      // Set custom particle style
      particle.style.background = `radial-gradient(circle at 30% 30%, ${color}, rgba(155, 135, 245, 0))`;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}40`;
      
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate, glow ${duration/2}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const depth = (index % 5 + 1) * 0.05;
        const moveX = (mouseX - 0.5) * depth * 100;
        const moveY = (mouseY - 0.5) * depth * 100;
        
        particle.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count, minSize, maxSize, speed, colors]);

  return <div ref={containerRef} className="particles-container" />;
};

export default Particles;
