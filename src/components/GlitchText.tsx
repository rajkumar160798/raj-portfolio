import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.span
        className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.1, duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {text}
      </motion.span>
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 1s linear infinite;
        }

        @keyframes glitch {
          2%, 64% {
            transform: translate(2px, 0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px, 0) skew(0deg);
          }
          62% {
            transform: translate(0, 0) skew(5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default GlitchText; 