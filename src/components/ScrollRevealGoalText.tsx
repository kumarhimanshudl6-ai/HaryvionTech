import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ScrollRevealGoalText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);

  // Haryvion Technology India — IT services focused content
  const textSegments = [
    {
      text: "Haryvion Technology India",
      className: "text-blue-700 font-playfair font-thin",
    },
    {
      text: " helps businesses transform ideas into reliable digital solutions. We combine modern technology, thoughtful design, and scalable development to build web applications, mobile apps, and custom software that drive growth ",
      className: "",
    },
    {
      text: "&",
      className: "font-playfair font-thin text-blue-600",
    },
    {
      text: " create lasting digital impact.",
      className: "",
    },
  ];

  // Flatten all words while preserving their styling.
  const allWords = textSegments
    .flatMap((segment, segmentIndex) =>
      segment.text.split(" ").map((word, wordIndex) => ({
        word: word.trim(),
        className: segment.className,
        segmentIndex,
        wordIndex,
      }))
  )
    .filter((item) => item.word.length > 0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Only animate while the section is visible.
      if (
        elementTop < windowHeight &&
        elementTop + elementHeight > 0
      ) {
        const viewportProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - elementTop) /
            (windowHeight + elementHeight)
          )
        );

        // Slightly extended reveal for a smoother reading experience.
        const scrollProgress = Math.max(
          0,
          Math.min(1, viewportProgress * 1.5)
        );

        const wordsToShow = Math.floor(
          scrollProgress * allWords.length
        );

        setVisibleWords(
          Math.min(wordsToShow, allWords.length)
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll, {
              passive: true,
            });

            handleScroll();
          } else {
            window.removeEventListener(
              "scroll",
              handleScroll
            );
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [allWords.length]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  const ariaLabel =
    "Haryvion Technology India helps businesses transform ideas into reliable digital solutions. We combine modern technology, thoughtful design, and scalable development to build web applications, mobile apps, and custom software that drive growth and create lasting digital impact.";

  return (
    <motion.h2
      ref={containerRef}
      aria-label={ariaLabel}
      role="heading"
      className="font-display leading-tight text-slate-900"
    >
      {allWords.map((wordInfo, globalIndex) => {
        const isVisible = globalIndex < visibleWords;
        const isLastWord =
          globalIndex === allWords.length - 1;

        return (
          <span
            key={globalIndex}
            className="inline-block"
          >
            <motion.span
              className={`inline-block ${wordInfo.className}`}
              initial="hidden"
              animate={
                isVisible ? "visible" : "hidden"
              }
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.03,
                    delayChildren: 0,
                  },
                },
              }}
            >
              {wordInfo.word
                .split("")
                .map((character, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={characterAnimation}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                ))}
            </motion.span>

            {!isLastWord && (
              <span className="inline-block w-[0.25em]">
                &nbsp;
              </span>
            )}
          </span>
        );
      })}
    </motion.h2>
  );
};

export default ScrollRevealGoalText;