import React from 'react';
import { motion } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalScroll = ({ children, className = '' }: HorizontalScrollProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-8 py-8 px-4">
          {React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              className="snap-center flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {React.Children.map(children, (_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-foreground/20"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll; 