
import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

const Particles: React.FC<ParticleProps> = ({
  count = 15,
  minSize = 5,
  maxSize = 30,
  speed = 1
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
      
      particle.className = 'particle animate-float';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      const duration = (Math.random() * 10 + 8) / speed;
      const delay = Math.random() * 5;
      
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate, glow ${duration/2}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Optional: Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const speed = (index % 4 + 1) * 0.02;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        particle.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count, minSize, maxSize, speed]);

  return <div ref={containerRef} className="particles-container" />;
};

export default Particles;
