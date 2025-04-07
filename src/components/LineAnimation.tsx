import React from 'react';
import { motion } from 'framer-motion';

interface LineAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const LineAnimation = ({ children, className = '' }: LineAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LineAnimation; 