import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const AnimatedText = ({ text, className = "", as = "h2" }: AnimatedTextProps) => {
  const ctrls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctrls.start("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ctrls]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  const Component = motion[as] as any;
  
  return (
    <Component 
      ref={ref}
      aria-label={text} 
      role="heading"
      className={className}
    >
      {text.split(" ").map((word, wordIndex) => {
        return (
          <motion.span
            aria-hidden="true"
            key={wordIndex}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: wordIndex * 0.25,
              staggerChildren: 0.05,
            }}
            className="inline-block mr-1 whitespace-nowrap"
          >
            {word.split("").map((character, charIndex) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={charIndex}
                  variants={characterAnimation}
                  className="inline-block -mr-[0.05em]"
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </Component>
  );
};

export default AnimatedText; 