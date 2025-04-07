
import React, { useState, useEffect, useRef } from 'react';

interface TypedTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 1500,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // useRef to store timeout IDs for cleanup
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // If we're waiting between words, do nothing until wait time is over
    if (isWaiting) {
      timeoutRef.current = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return;
    }

    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Completed typing the word, wait before deleting
        setIsWaiting(true);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, wordIndex, isDeleting, isWaiting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default TypedText;
