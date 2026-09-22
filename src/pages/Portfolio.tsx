import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Star,
  Smartphone,
  Globe,
  Layers,
  Megaphone,
  Code2,
  Palette,
  Rocket,
  Mail,
  CheckCircle2,
  Trophy,
  Users,
  Smile,
  Award,
  Briefcase,
} from "lucide-react";

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<
    "all" | "web" | "mobile" | "uiux" | "fintech"
  >("all");

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

    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el, index) => {
      setTimeout(() => observer.observe(el), index * 50);
    });

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [activeTab]);

  const heroStats = [
    { value: "500+", label: "Projects Done" },
    { value: "200+", label: "Happy Clients" },
    { value: "15+", label: "Industries" },
  ];

  const projects = [
    {
      id: 1,
      title: "B2B Payment Gateway",
      category: "Web App",
      tab: "web" as const,
      description:
        "Enterprise-level payment processing platform with advanced security features and real-time analytics.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-emerald-50 to-green-100",
      badgeColor: "bg-emerald-100 text-emerald-700",
      illustration: "💳",
    },
    {
      id: 2,
      title: "E-Commerce App",
      category: "Mobile App",
      tab: "mobile" as const,
      description:
        "Feature-rich shopping experience with seamless checkout, AR product preview.",
      tech: ["Flutter", "Firebase", "Stripe"],
      gradient: "from-violet-50 to-purple-100",
      badgeColor: "bg-violet-100 text-violet-700",
      illustration: "🛒",
    },
    {
      id: 3,
      title: "SaaS Dashboard Design",
      category: "UI/UX Design",
      tab: "uiux" as const,
      description:
        "Modern analytics dashboard with intuitive data visualization and seamless user experience for B2B.",
      tech: ["Figma", "Adobe XD", "Sketch"],
      gradient: "from-blue-50 to-sky-100",
      badgeColor: "bg-blue-100 text-blue-700",
      illustration: "📊",
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      category: "Website",
      tab: "web" as const,
      description:
        "Complete brand refresh with modern animations, interactive elements.",
      tech: ["WordPress", "PHP", "MySQL"],
      gradient: "from-amber-50 to-yellow-100",
      badgeColor: "bg-pink-100 text-pink-700",
      illustration: "💡",
    },
    {
      id: 5,
      title: "Digital Wallet Application",
      category: "Fintech",
      tab: "fintech" as const,
      description:
        "Secure digital wallet with instant transfers, bill payments, and investment tracking capabilities.",
      tech: ["React Native", "AWS", "Blockchain"],
      gradient: "from-orange-50 to-amber-100",
      badgeColor: "bg-orange-100 text-orange-700",
      illustration: "💰",
    },
    {
      id: 6,
      title: "Marketing Landing Page",
      category: "Web Design",
      tab: "web" as const,
      description:
        "High-converting marketing landing page optimized for SEO and user engagement metrics.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-slate-50 to-gray-100",
      badgeColor: "bg-cyan-100 text-cyan-700",
      illustration: "📈",
    },
    {
      id: 7,
      title: "Healthcare Patient App",
      category: "Mobile App",
      tab: "mobile" as const,
      description:
        "Telemedicine app with appointment booking, video consults, and secure medical records.",
      tech: ["Flutter", "Firebase", "WebRTC"],
      gradient: "from-rose-50 to-red-100",
      badgeColor: "bg-rose-100 text-rose-700",
      illustration: "🏥",
    },
    {
      id: 8,
      title: "Fintech Reseller Portal",
      category: "Fintech",
      tab: "fintech" as const,
      description:
        "Multi-level B2B reseller platform with AEPS, BBPS, DMT, commission engine, and role-based dashboards.",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-indigo-50 to-blue-100",
      badgeColor: "bg-indigo-100 text-indigo-700",
      illustration: "🏦",
    },
    {
      id: 9,
      title: "EdTech Learning Platform",
      category: "UI/UX Design",
      tab: "uiux" as const,
      description:
        "Complete LMS UI/UX design system with student dashboards, live class screens, and progress analytics.",
      tech: ["Figma", "Prototype", "Design System"],
      gradient: "from-teal-50 to-cyan-100",
      badgeColor: "bg-teal-100 text-teal-700",
      illustration: "📚",
    },
  ];

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.tab === activeTab);

  const bottomStats = [
    { icon: CheckCircle2, color: "from-violet-500 to-purple-600", value: "52+", label: "Projects Completed" },
    { icon: Smile, color: "from-pink-400 to-rose-500", value: "98%", label: "Client Satisfaction" },
    { icon: Award, color: "from-cyan-400 to-blue-500", value: "25+", label: "Awards Won" },
    { icon: Users, color: "from-amber-300 to-orange-400", value: "80+", label: "Happy Clients" },
  ];

  const tabs = [
    { key: "all" as const, label: "All Projects" },
    { key: "web" as const, label: "Web Development" },
    { key: "mobile" as const, label: "Mobile Apps" },
    { key: "uiux" as const, label: "UI/UX Design" },
    { key: "fintech" as const, label: "Fintech Solutions" },
  ];

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      <style>{`
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.18);
        }
        .project-card:hover .card-illus {
          transform: scale(1.05);
        }
        .card-illus {
          transition: transform 0.4s ease;
        }
        .stat-pill {
          transition: all 0.3s ease;
        }
        .stat-pill:hover {
          transform: translateY(-4px) scale(1.03);
          background: rgba(255,255,255,0.2);
        }
        .btn-primary {
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -4px rgba(37, 99, 235, 0.4);
        }
        .btn-outline {
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          transform: translateY(-2px);
        }
        .bottom-stat {
          transition: all 0.3s ease;
        }
        .bottom-stat:hover {
          transform: translateY(-6px);
        }
        .orbit-icon {
          animation: orbit-pulse 3s ease-in-out infinite;
        }
        @keyframes orbit-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>

      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Briefcase size={14} />
                Our Portfolio
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-1 opacity-0 fade-in-element">
                500+{" "}
                <span className="text-cyan-300">Projects</span>
              </h1>
              <h1 className="text-5xl sm:text-6xl font-bold text-cyan-300 leading-tight mb-4 opacity-0 fade-in-element relative w-fit">
                Delivered
                <span className="absolute -right-3 top-1 w-[3px] h-[85%] bg-cyan-300 rounded-full" />
              </h1>

              <div className="flex items-center gap-2 mb-6 opacity-0 fade-in-element">
                <Layers className="text-violet-300" size={22} />
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Haryvion Technology
                </h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-6 opacity-0 fade-in-element">
                {[
                  { label: "Mobile Apps", icon: Smartphone, color: "text-blue-300" },
                  { label: "Web Projects", icon: Globe, color: "text-emerald-300" },
                  { label: "UI/UX Design", icon: Palette, color: "text-pink-300" },
                  { label: "Marketing", icon: Megaphone, color: "text-amber-300" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                  >
                    <t.icon size={12} className={t.color} />
                    {t.label}
                  </span>
                ))}
              </div>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-lg opacity-0 fade-in-element">
                Explore our showcase of{" "}
                <span className="font-semibold text-white">500+ successful projects</span> — from
                cutting-edge mobile apps and enterprise web platforms to bold UI/UX designs and
                high-impact digital marketing campaigns, all built for clients worldwide.
              </p>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-3 mb-10 opacity-0 fade-in-element">
                {heroStats.map((s) => (
                  <div
                    key={s.label}
                    className="stat-pill bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-center min-w-[100px] cursor-default"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                    <div className="text-blue-200 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 opacity-0 fade-in-element">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-full shadow-lg"
                >
                  <Rocket size={18} />
                  Start Your Project
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                >
                  <Mail size={18} />
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right — illustration area */}
            <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[440px]">
              {/* Top Rated badge */}
              <div className="absolute top-4 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Star size={18} className="text-violet-600 fill-violet-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Top Rated Work</div>
                  <div className="text-gray-500 text-xs">4.9 / 5 Client Rating</div>
                </div>
              </div>

              {/* Orbiting service icons */}
              <div className="absolute top-16 right-16 orbit-icon z-20">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center gap-0.5">
                  <Smartphone size={20} className="text-orange-500" />
                  <span className="text-[8px] font-bold text-gray-600 leading-tight text-center">
                    App<br />Development
                  </span>
                </div>
              </div>

              <div className="absolute top-40 left-2 orbit-icon z-20" style={{ animationDelay: "0.5s" }}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center gap-0.5">
                  <Code2 size={20} className="text-blue-500" />
                  <span className="text-[8px] font-bold text-gray-600 leading-tight text-center">
                    Web<br />Development
                  </span>
                </div>
              </div>

              <div className="absolute bottom-28 right-4 orbit-icon z-20" style={{ animationDelay: "1s" }}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center gap-0.5">
                  <Megaphone size={20} className="text-violet-500" />
                  <span className="text-[8px] font-bold text-gray-600 leading-tight text-center">
                    Digital<br />Marketing
                  </span>
                </div>
              </div>

              {/* Center character + laptop placeholder */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Laptop */}
                <div className="w-48 h-32 bg-slate-800 rounded-t-xl border-4 border-slate-700 shadow-2xl relative mb-0">
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg opacity-80" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-56 h-3 bg-slate-700 rounded-b-lg" />
                </div>
                {/* Person silhouette */}
                <div className="flex flex-col items-center -mt-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 relative z-10 border-4 border-white shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">👩‍💻</div>
                  </div>
                  <div className="w-28 h-36 bg-gradient-to-b from-slate-400 to-slate-600 rounded-t-3xl -mt-4 shadow-xl" />
                </div>
              </div>

              {/* Award badge */}
              <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Trophy size={18} className="text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Award Winning</div>
                  <div className="text-gray-500 text-xs">Globally Recognised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FILTER BAR ═══════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-white/30" />
        <div className="absolute bottom-10 left-1/3 w-4 h-4 rounded-full bg-white/20" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3 opacity-0 fade-in-element">
            Our Portfolio
          </h2>
          <p className="text-purple-100 mb-10 opacity-0 fade-in-element">
            Discover our latest projects and creative solutions that drive business success
          </p>

          <div className="flex flex-wrap justify-center gap-3 opacity-0 fade-in-element">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.key
                  ? "bg-white text-purple-700 shadow-lg"
                  : "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECT GRID ═══════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="project-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default flex flex-col"
              >
                {/* Illustration area */}
                <div
                  className={`card-illus relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-7xl opacity-80 select-none">{project.illustration}</span>
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ BOTTOM STATS ═══════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-8 left-16 w-3 h-3 rounded-full bg-violet-500/60" />
        <div className="absolute top-12 left-28 w-2 h-2 rounded-full bg-purple-400/40" />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bottom-stat text-center opacity-0 fade-in-element cursor-default"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="absolute top-10 left-16 w-4 h-4 rounded-full bg-white/20" />
        <div className="absolute bottom-16 right-20 w-3 h-3 rounded-full bg-white/15" />

        <div className="max-w-3xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready To Start Your Project?
          </h2>
          <p className="text-purple-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life. Our team is ready to create
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-full shadow-xl"
            >
              Get Started Now
              <ArrowRight size={18} />
            </Link>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("all");
                window.scrollTo({ top: 600, behavior: "smooth" });
              }}
              className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10"
            >
              Portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;