import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimations = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${100 + i * 100}px`,
            height: `${100 + i * 100}px`,
            background: `radial-gradient(circle, rgba(${
              i % 2 === 0 ? '155, 135, 245' : '217, 70, 239'
            }, 0.1) 0%, transparent 70%)`,
            top: `${20 + i * 20}%`,
            left: `${20 + i * 10}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-4 h-4 rounded-full bg-neon-purple/20"
          style={{
            top: `${30 + i * 10}%`,
            left: `${70 + i * 5}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(155, 135, 245, 0.1) 50%, transparent 55%)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-neon-blue"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(155, 135, 245, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(155, 135, 245, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default HeroAnimations; 