import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Clock } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 relative" id="get-access">
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6" ref={ctaRef}>
        {/* Main CTA Card */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="pulse-chip w-fit">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                  <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
                </span>
                <span>Limited Spots Available</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Ship Your 
                <span className="text-pulse-500 block">MVP in Weeks?</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Join 200+ founders who've already launched their ideas. We're accepting 10 new projects this month.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pulse-600">2-4</div>
                  <div className="text-sm text-gray-600">Weeks to Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pulse-600">200+</div>
                  <div className="text-sm text-gray-600">MVPs Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pulse-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="button-primary group flex items-center justify-center">
                  Start Your MVP Today
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="button-secondary flex items-center justify-center">
                  <Clock className="mr-2 w-4 h-4" />
                  Book Strategy Call
                </Link>
              </div>
            </div>
            
            {/* Right Content - Interactive Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                
                {/* Fast Development Card */}
                <div className="glass-card p-6 rounded-2xl border border-pulse-200/50 bg-gradient-to-br from-pulse-500 to-pulse-600 text-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-white/90">From idea to deployed MVP in record time</p>
                </div>
                
                {/* Proven Process Card */}
                <div className="glass-card p-6 rounded-2xl border border-gray-200 bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                  <div className="w-10 h-10 rounded-lg bg-pulse-100 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-pulse-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Proven Process</h3>
                  <p className="text-sm text-gray-600">Battle-tested methodology used by 200+ founders</p>
                </div>
                
                {/* Success Stories Card - Spans both columns */}
                <div className="col-span-2 glass-card p-6 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🚀</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">TechFlow</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">$2M Raised</span>
                      </div>
                      <p className="text-sm text-gray-600">"Launched our SaaS in 3 weeks and got our first paying customers within a month!"</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-pulse-100/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-100/40 rounded-full blur-lg"></div>
            </div>
            
          </div>
          
          {/* Bottom Section - What's Included */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What's Included in Your MVP Package</h3>
              <p className="text-gray-600">Everything you need to validate and launch your idea</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-lg bg-pulse-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Full-Stack Development</h4>
                <p className="text-sm text-gray-600">Frontend, backend, and database</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-lg bg-pulse-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Authentication & Security</h4>
                <p className="text-sm text-gray-600">User management and data protection</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-lg bg-pulse-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Analytics & Insights</h4>
                <p className="text-sm text-gray-600">Track user behavior and metrics</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-lg bg-pulse-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Cloud Deployment</h4>
                <p className="text-sm text-gray-600">Production-ready hosting setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
