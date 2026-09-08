import { useEffect, useRef, useState, type CSSProperties } from "react";

const WhyHaryvionTechnologyIndia = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

  const cardStyle: CSSProperties = {
    height: "62vh",
    maxHeight: "600px",
    borderRadius: "20px",
    transition:
      "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking.current = false;
          return;
        }

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalScrollDistance = viewportHeight * 2;

        let progress = 0;

        if (sectionRect.top <= 0) {
          progress = Math.min(
            1,
            Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance)
          );
        }

        if (progress >= 0.66) {
          setActiveCardIndex(2);
        } else if (progress >= 0.33) {
          setActiveCardIndex(1);
        } else {
          setActiveCardIndex(0);
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      <section
        className="sticky top-0 h-screen w-full overflow-hidden bg-white py-10 md:py-16"
        id="why-haryvion"
      >
        <div className="container mx-auto flex h-full flex-col px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-4">
            <div className="flex items-center gap-4 pb-2 pt-6 md:pt-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  ✦
                </span>
                Haryvion Technology India
              </div>
            </div>

            <h2 className="mb-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              <span className="font-playfair font-thin">Why choose</span>{" "}
              Haryvion Technology?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              We combine thoughtful design, dependable engineering, and clear
              communication to turn business requirements into digital products
              that are built to perform and scale.
            </p>
          </div>

          {/* Stacking Cards */}
          <div className="relative flex-1 [perspective:1000px]">
            {/* Card 1 */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? "animate-card-enter" : ""
                }`}
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? "90px" : "200px"
                  }) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.92 : 0,
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-slate-950"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(15,23,42,.88), rgba(30,64,175,.42)), url('/bg1.JPG')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "normal",
                }}
              />

              <div className="absolute right-4 top-4 z-20">
                <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                  <span className="text-sm font-medium">
                    Built Around Your Business
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex h-full items-center p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/90 text-xl text-white shadow-lg">
                    01
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    Technology that solves real business problems.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                    We understand your requirements first, then design and
                    develop practical digital solutions that support your
                    business objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? "animate-card-enter" : ""
                }`}
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible
                  ? activeCardIndex === 1
                    ? "55px"
                    : "45px"
                  : "200px"
                  }) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? "auto" : "none",
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-slate-950"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(15,23,42,.88), rgba(37,99,235,.38)), url('/bg2.JPG')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "normal",
                }}
              />

              <div className="absolute right-4 top-4 z-20">
                <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                  <span className="text-sm font-medium">
                    End-to-End Delivery
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex h-full items-center p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/90 text-xl text-white shadow-lg">
                    02
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    One team from idea to launch.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                    From UI/UX and frontend development to backend systems,
                    integrations, testing, and deployment, we keep the entire
                    process connected and efficient.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? "animate-card-enter" : ""
                }`}
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible
                  ? activeCardIndex === 2
                    ? "15px"
                    : "0"
                  : "200px"
                  }) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? "auto" : "none",
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-slate-950"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(15,23,42,.9), rgba(30,58,138,.4)), url('/bg3.JPG')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "normal",
                }}
              />

              <div className="absolute right-4 top-4 z-20">
                <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                  <span className="text-sm font-medium">
                    Built to Grow With You
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex h-full items-center p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/90 text-xl text-white shadow-lg">
                    03
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    We build for today and prepare your technology for
                    tomorrow.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                    Our focus is not only on launch. We build maintainable,
                    scalable solutions and provide ongoing support as your
                    business and technology needs evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyHaryvionTechnologyIndia;
