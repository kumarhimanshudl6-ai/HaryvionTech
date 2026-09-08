const Slogan = () => {
  return (
    <section
      id="why-haryvion"
      className="w-full bg-white py-0"
    >
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="relative mt-6 w-full overflow-hidden rounded-2xl sm:mt-8 sm:rounded-3xl">
          <div
            className="relative flex min-h-[280px] flex-col justify-center bg-cover bg-center px-5 py-8 sm:min-h-[380px] sm:px-8 md:min-h-[430px] md:px-12"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.90), rgba(30, 64, 175, 0.72), rgba(37, 99, 235, 0.45)), url('/bg3.JPG')",
            }}
          >
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

            {/* Brand */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-lg backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                  H
                </span>
                <span className="text-sm font-semibold tracking-wide sm:text-base">
                  Haryvion Technology India
                </span>
              </div>
            </div>

            {/* Main Slogan */}
            <div className="relative z-10 mx-auto mt-10 max-w-5xl text-center sm:mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
                Technology • Design • Innovation
              </p>

              <h2 className="font-playfair text-4xl font-thin italic leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Turning Ideas Into
                <span className="block text-blue-200">
                  Digital Reality
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base md:text-lg">
                We build modern web, mobile, and custom software solutions
                that help businesses grow, improve, and succeed in the digital
                world.
              </p>
            </div>

            {/* Bottom service indicators */}
            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Custom Software",
                "IT Solutions",
              ].map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
