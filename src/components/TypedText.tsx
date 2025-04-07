import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypedTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isPaused) {
      if (isDeleting) {
        // Delete text
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 500);
          }
        }, deletingSpeed);
      } else {
        // Type text
        timeout = setTimeout(() => {
          const currentWord = texts[currentIndex];
          setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
          if (currentText === currentWord) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, delay);
          }
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-0.5"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypedText;
