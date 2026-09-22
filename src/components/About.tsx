import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" /> About Our Company
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-600 text-purple-700 text-sm font-semibold">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E40AF] leading-tight mb-6">
              Your Reliable Software<br />Development Partner
            </h2>

            <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed mb-10 relative">
              {/* Small decorative dot */}
              <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-purple-500" />

              <p>
                Haryvion Technology Pvt. Ltd. is a full-cycle software development company focused on delivering custom digital solutions to startups, SMEs, and large enterprises. Being one of the top software development companies, we assist organizations in developing secure, scalable, and future-ready software solutions.
              </p>
              <p>
                We are a dedicated organization specializing in providing top-notch <span className="text-blue-600 font-semibold">web development services</span>, mobile app development, and other solutions tailored to promote growth and efficiency through digital transformation.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
                <div className="text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
                <div className="text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">52+</div>
                  <div className="text-sm text-gray-500">Projects Delivered</div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#A855F7] hover:bg-[#9333EA] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column / Image */}
          <div className="relative animate-on-scroll lg:pl-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/40 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;