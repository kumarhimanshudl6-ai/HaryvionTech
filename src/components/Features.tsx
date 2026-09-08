import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  index: number;
}

const BentoCard = ({ className, children, index }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "opacity-0 rounded-2xl bg-gradient-to-br from-pulse-600 to-pulse-400 border border-pulse-400/20 p-6 transition-all duration-300 hover:border-pulse-300/40 hover:shadow-xl hover:shadow-pulse-500/20 text-white",
        className
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
              <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
            </span>
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Ship MVPs at <br className="hidden sm:block" />Lightning Speed
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            From concept to deployment in weeks, not months. Built for founders who move fast.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          
          {/* Rapid Prototyping - Large card */}
          <BentoCard className="md:col-span-2 lg:row-span-2" index={0}>
            <div className="h-full flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Rapid Prototyping</h3>
                <p className="text-white text-lg leading-relaxed">
                  Transform your idea into a working MVP in just 2-4 weeks. Our streamlined process eliminates the typical 3-6 month development cycle.
                </p>
              </div>
              
              {/* Code snippet visual */}
              <div className="flex-1 bg-black/50 rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-white/80 text-sm ml-2">mvpier</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-white/90">
                    <span className="text-white">initiate</span> create-mvp my-startup
                  </div>
                  <div className="text-white/80">✓ Discovery Call...</div>
                  <div className="text-white/80">✓ MVP Design...</div>
                  <div className="text-white/80">✓ Development...</div>
                  <div className="text-white/70">// Ready to ship in days, not months</div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Full-Stack Development */}
          <BentoCard className="lg:col-span-1" index={1}>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Full-Stack</h3>
            <p className="text-white/80 text-sm">Complete end-to-end development from UI to database deployment.</p>
          </BentoCard>

          {/* User Testing */}
          <BentoCard className="lg:col-span-1" index={2}>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">User Testing</h3>
            <p className="text-white/80 text-sm">Built-in analytics and feedback loops to validate your assumptions.</p>
          </BentoCard>

          {/* Market Validation */}
          <BentoCard className="md:col-span-2 lg:col-span-2" index={3}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Market Validation</h3>
                <p className="text-white/90 mb-4">
                  Launch, measure, learn. Get real user feedback before investing in full development.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">2-4</div>
                    <div className="text-xs text-white/70">weeks to launch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">90%</div>
                    <div className="text-xs text-white/70">faster iteration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">5x</div>
                    <div className="text-xs text-white/70">cost efficient</div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Scalable Architecture */}
          <BentoCard className="lg:col-span-1" index={4}>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
            <p className="text-white/80 text-sm">Architecture that grows with your success from MVP to unicorn.</p>
          </BentoCard>

          {/* Expert Team */}
          <BentoCard className="lg:col-span-1" index={5}>
            <div className="text-center">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4 mx-auto">
               <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-white/80 text-sm">Dedicated founders who've been there, built that.</p>
            </div>
          </BentoCard>

          {/* Technology Stack */}
          <BentoCard className="md:col-span-2 lg:col-span-2" index={6}>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Modern Tech Stack</h3>
              <p className="text-white/90 mb-4">
                Built with the latest technologies for performance, scalability, and maintainability.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-lg font-semibold text-white">React</div>
                  <div className="text-xs text-white/70">Frontend</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-lg font-semibold text-white">Node.js</div>
                  <div className="text-xs text-white/70">Backend</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-lg font-semibold text-white">AWS</div>
                  <div className="text-xs text-white/70">Cloud</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-lg font-semibold text-white">AI/ML</div>
                  <div className="text-xs text-white/70">Intelligence</div>
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default Features;
