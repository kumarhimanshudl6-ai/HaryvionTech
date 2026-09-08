const Process = () => {
  return (
    <section
      className="w-full pt-0 pb-8 sm:pb-12 bg-gradient-to-b from-white to-pulse-50"
      id="showcase"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
            <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
          </span>
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            From Idea to{" "}
            <span className="text-pulse-500 font-playfair">Live Product</span>
            <br className="hidden sm:inline" />
            in Record Time
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We don't just build MVPs - we accelerate your entire journey from
            concept to market validation. Here's how we turn your vision into
            reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-on-scroll">
            <div className="relative">
              <img
                src="/mission.webp"
                alt="mvpier rapid development process"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pulse-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Live Development Session
                    </span>
                  </div>
                  <div className="text-xs text-white/80">
                    Building features in real-time with founder feedback
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 animate-on-scroll">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center">
                  <span className="text-pulse-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Discovery & Strategy
                  </h3>
                  <p className="text-gray-600">
                    We dive deep into your vision, market, and user needs to
                    define the core features that matter most for validation.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center">
                  <span className="text-pulse-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Rapid Development
                  </h3>
                  <p className="text-gray-600">
                    Our experienced team builds your MVP using proven frameworks
                    and best practices, delivering working features weekly.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center">
                  <span className="text-pulse-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Launch & Iterate
                  </h3>
                  <p className="text-gray-600">
                    Get your product live, gather real user feedback, and
                    rapidly iterate based on actual market data.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="bg-gradient-to-r from-pulse-50 to-pulse-100 rounded-xl p-6 border border-pulse-200">
              <h4 className="font-semibold text-pulse-900 mb-4">
                Why Founders Choose Us ?
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pulse-600">2-8</div>
                  <div className="text-sm text-pulse-700">weeks to launch</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pulse-600">50+</div>
                  <div className="text-sm text-pulse-700">MVPs launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
