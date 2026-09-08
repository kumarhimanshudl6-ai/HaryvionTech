import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const ScrollRevealText = ({ text, className = "", as = "h2" }: ScrollRevealTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    const words = text.split(" ");
    setTotalWords(words.length);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start revealing when element enters viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        // Calculate scroll progress through the element
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        
        // Calculate how many words should be visible based on scroll progress
        const wordsToShow = Math.floor(scrollProgress * words.length);
        setVisibleWords(Math.min(wordsToShow, words.length));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial call
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [text]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  const Component = motion[as] as any;
  const words = text.split(" ");

  return (
    <Component 
      ref={containerRef}
      aria-label={text} 
      role="heading"
      className={className}
    >
      {words.map((word, wordIndex) => {
        const isVisible = wordIndex < visibleWords;
        
        return (
          <motion.span
            key={wordIndex}
            className="inline-block mr-1"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.02,
                  delayChildren: 0
                }
              }
            }}
          >
            {word.split("").map((character, charIndex) => (
              <motion.span
                key={charIndex}
                variants={characterAnimation}
                className="inline-block"
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </Component>
  );
};

export default ScrollRevealText; 