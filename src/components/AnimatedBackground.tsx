import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020817]/30">
      {/* Primary gradient layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-pink-500/40"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(236, 72, 153, 0.4) 100%)',
            'linear-gradient(45deg, rgba(236, 72, 153, 0.4) 0%, rgba(168, 85, 247, 0.4) 50%, rgba(59, 130, 246, 0.4) 100%)',
            'linear-gradient(45deg, rgba(59, 130, 246, 0.4) 0%, rgba(236, 72, 153, 0.4) 50%, rgba(168, 85, 247, 0.4) 100%)',
          ],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${Math.random() * 700 + 500}px`,
            height: `${Math.random() * 700 + 500}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 
                ? 'rgba(168, 85, 247, 0.25)' 
                : 'rgba(236, 72, 153, 0.25)'
            } 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
            scale: [1, Math.random() * 0.4 + 0.8, 1],
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Radial gradient corners */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/30 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-pink-500/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/30 to-transparent" />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 