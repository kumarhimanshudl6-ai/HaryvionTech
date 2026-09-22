import { ArrowRight, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1D4ED8] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Decor Circles */}
      <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight mb-6">
              Best Recharge API Service Provider Haryvion Technology Pvt. Ltd
            </h1>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> 24/7 Support
              </div>
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium">
                <ShieldCheck className="w-4 h-4" /> Secure & Scalable
              </div>
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium">
                <Award className="w-4 h-4" /> Industry Experts
              </div>
            </div>

            <p className="text-blue-100 text-base sm:text-lg mb-4 leading-relaxed">
              Haryvion Technology is a reliable software development company that offers secure and high-performance software development services, web solutions, and mobile applications to growing businesses around the world.
            </p>

            <p className="text-white font-medium mb-10">
              Transform your business with scalable and secure digital solutions from Haryvion Technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#A855F7] hover:bg-[#9333EA] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
              >
                Become a Partner <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Content / Graphics */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Main graphic container - You can replace this with your actual image */}
            <div className="relative w-full aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 overflow-hidden flex items-center justify-center">
              <img
                src="/hero-image.webp"
                alt="Software Services"
                className="w-full h-full object-contain object-center scale-110 drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800';
                }}
              />

              {/* 100% Secure floating card */}
              <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3 shadow-2xl">
                <ShieldCheck className="w-10 h-10 text-white" />
                <div>
                  <div className="text-white font-bold">100% Secure</div>
                  <div className="text-blue-100 text-xs">Bank-Grade Security</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;