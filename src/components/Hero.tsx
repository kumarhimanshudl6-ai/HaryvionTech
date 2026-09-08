import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  Layers3,
  Palette,
  Smartphone,
  Users,
  Trophy,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Modern, responsive websites",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "iOS & Android solutions",
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Custom Software Solutions",
    icon: Layers3,
    description: "Scalable business applications",
    iconClass: "bg-orange-50 text-orange-600",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Deploy, scale & maintain",
    iconClass: "bg-violet-50 text-violet-600",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Clean, intuitive experiences",
    iconClass: "bg-pink-50 text-pink-600",
  },
];

const stats = [
  { value: "100+", label: "Happy Clients", icon: Users },
  { value: "250+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "5+", label: "Years Experience", icon: Trophy },
  { value: "99%", label: "Client Satisfaction", icon: CheckCircle2 },
];

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !imageRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    imageRef.current.style.transform = `
      perspective(1200px)
      rotateY(${x * 4}deg)
      rotateX(${-y * 4}deg)
      scale3d(1.025, 1.025, 1.025)
    `;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    imageRef.current.style.transform =
      "perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36"
    >
      {/* Soft blue background */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-[35%] -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[28%] h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">

          {/* Left */}
          <div className="max-w-2xl">


            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                ✦
              </span>
              Your Trusted IT Partner in India
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[68px]">
              We Build Digital
              <span className="block text-blue-600">Solutions</span>
              That Make an Impact.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              At Haryvion Technology India, we design, develop, and deliver
              innovative web, mobile, and software solutions that help
              businesses grow in the digital world.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-white px-7 py-4 font-semibold text-blue-600 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-slate-200 pt-7 sm:grid-cols-4 sm:gap-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-3 sm:flex-col sm:items-start ${index > 0 ? "sm:border-l sm:border-slate-200 sm:pl-5" : ""
                      }`}
                  >
                    <Icon className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-slate-950">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-slate-500 sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div
            className="relative mx-auto w-full max-w-2xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -left-8 top-8 hidden h-28 w-28 opacity-60 lg:block">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(#60a5fa 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />
            </div>

            <div className="absolute right-8 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative flex items-center gap-4 lg:gap-5">
              <div className="relative min-w-0 flex-1">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-indigo-100/20 blur-xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white bg-slate-900 shadow-2xl shadow-blue-900/15">
                  <img
                    ref={imageRef}
                    src="/hero_image.webp"
                    alt="Haryvion Technology India software development team"
                    className="h-[430px] w-full object-cover transition-transform duration-300 ease-out sm:h-[540px] lg:h-[600px]"
                    style={{ transformStyle: "preserve-3d" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-blue-500/10" />

                  <div className="absolute right-5 top-7 max-w-[150px] rotate-[-4deg] font-serif text-2xl italic leading-tight text-white drop-shadow-lg sm:right-8 sm:top-9">
                    Turning
                    <br />
                    Ideas into
                    <br />
                    Reality
                    <span className="mt-1 block text-3xl">↗</span>
                  </div>
                </div>

                <div className="absolute -bottom-7 left-5 right-5 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-12 sm:right-12 sm:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                    <Trophy className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="text-lg font-bold text-slate-950">
                      5+ Years
                    </div>
                    <div className="text-sm leading-5 text-slate-500">
                      Building Digital Success
                      <br />
                      in India
                    </div>
                  </div>

                  <ArrowRight className="ml-auto hidden h-6 w-6 text-blue-500 sm:block" />
                </div>
              </div>

              <div className="hidden w-[190px] shrink-0 space-y-3 sm:block">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      to="/services"
                      className="group block rounded-2xl border border-white/80 bg-white/90 p-3 shadow-lg shadow-slate-900/5 backdrop-blur transition-all duration-300 hover:-translate-x-1 hover:shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${service.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <div className="text-sm font-bold leading-5 text-slate-900">
                            {service.title}
                          </div>
                          <div className="mt-0.5 text-[11px] leading-4 text-slate-500">
                            {service.description}
                          </div>
                        </div>

                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-blue-500 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </div>
                    </Link>
                  );
                })}

                <div className="pt-2 text-center font-serif text-lg italic text-blue-600">
                  Let&apos;s build something amazing →
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:hidden">
              {services.slice(0, 4).map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    to="/services"
                    className="rounded-xl border border-blue-100 bg-white p-3 shadow-sm"
                  >
                    <div
                      className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${service.iconClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-xs font-bold leading-4 text-slate-900">
                      {service.title}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 hidden justify-end gap-5 text-sm font-medium text-slate-600 lg:flex">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Innovative Solutions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                On-Time Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Long-Term Partnership
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
