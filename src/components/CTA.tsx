import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Award, ShieldCheck } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-[#1D4ED8] py-20 relative overflow-hidden">
      {/* Background Decor Circles */}
      <div className="absolute -right-20 top-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-purple-500 rounded-full shadow-lg pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-on-scroll">

        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm font-semibold mb-6 backdrop-blur-sm">
              🚀 Ready to Get Started?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Let's Build Something Amazing Together
            </h2>

            <p className="text-blue-100 text-lg mb-4">
              Transform your business with a trusted software development company delivering high-performance web development, mobile app development, and fintech software solutions.
            </p>
            <p className="text-blue-100 text-lg">
              At Haryvion Technology, we help startups, enterprises, B2B, B2C, and resellers achieve digital growth with innovative, future-ready technology. From custom software development services to finance software development, our expert team is ready to turn your ideas into powerful digital products.
            </p>
          </div>

          <div className="shrink-0 lg:mb-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1D4ED8] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-blue-50 shadow-xl"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold mb-1">99</div>
            <div className="text-blue-100 text-xs tracking-wider uppercase">% Client Satisfaction</div>
          </div>

          {/* Card 2 */}
          <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-blue-100 text-xs tracking-wider uppercase">Support Available</div>
          </div>

          {/* Card 3 */}
          <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold mb-1">50</div>
            <div className="text-blue-100 text-xs tracking-wider uppercase">+ Industry Awards</div>
          </div>

          {/* Card 4 */}
          <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-blue-100 text-xs tracking-wider uppercase">Secure & Compliant</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;