import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Star,
    Trophy,
    PartyPopper,
    Users,
    Heart,
    Calendar,
    Eye,
    Rocket,
    Lightbulb,
    BarChart3,
    ClipboardList,
    Filter,
} from "lucide-react";

const Achievements = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState("All");

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
    }, [activeFilter]);

    const heroStats = [
        { value: "50+", label: "Celebrations", icon: PartyPopper, accent: "from-emerald-400 to-green-500" },
        { value: "200+", label: "Team Members", icon: Users, accent: "from-blue-400 to-blue-600" },
        { value: "500+", label: "Happy Moments", icon: Heart, accent: "from-pink-400 to-rose-500" },
        { value: "15+", label: "Years Together", icon: Calendar, accent: "from-amber-400 to-orange-500" },
    ];

    const filters = [
        "All",
        "Fintech",
        "Digital Marketing",
        "Web Development",
        "App Development",
        "Software Development",
        "B2B, B2C, and Reseller",
    ];

    const insights = [
        {
            title: "Global Fintech Fest 2026 and the Future of Banking Technology in India",
            category: "Fintech",
            gradient: "from-blue-900 via-blue-800 to-indigo-900",
            tag: "Event",
            description: "Exploring the next wave of banking innovation, digital payments, and regulatory tech across India.",
        },
        {
            title: "Open Banking and Account Aggregation in India: Opportunities for Fintechs and Banks",
            category: "Fintech",
            gradient: "from-sky-50 to-blue-100",
            tag: "Insight",
            description: "How account aggregators and open banking APIs are unlocking new product opportunities.",
            dark: false,
        },
        {
            title: "KYC Automation Stack — eKYC, Aadhaar, PAN, Video KYC, and Risk Scoring",
            category: "Fintech",
            gradient: "from-slate-50 to-blue-50",
            tag: "Guide",
            description: "A complete breakdown of modern KYC pipelines for compliant onboarding at scale.",
            dark: false,
        },
        {
            title: "Why Startups Prefer Jaipur Software Companies like Haryvion Technology",
            category: "Software Development",
            gradient: "from-orange-50 to-amber-100",
            tag: "Company",
            description: "Talent, cost efficiency, and delivery quality — why Jaipur is a rising tech hub for startups.",
            dark: false,
        },
        {
            title: "What Is Android App Development Software? A Complete Guide for Businesses in 2026",
            category: "App Development",
            gradient: "from-blue-900 to-slate-900",
            tag: "Guide",
            description: "From Kotlin to Flutter — choosing the right stack for your next Android product.",
        },
        {
            title: "Why Jaipur Is Emerging as a Technology Hub",
            category: "Software Development",
            gradient: "from-amber-900 via-orange-800 to-rose-900",
            tag: "Insight",
            description: "Infrastructure, talent pipeline, and startup ecosystem driving Rajasthan's tech growth.",
        },
        {
            title: "B2B vs B2C vs Reseller Platforms — Which Model Fits Your Fintech Business?",
            category: "B2B, B2C, and Reseller",
            gradient: "from-violet-50 to-purple-100",
            tag: "Guide",
            description: "A practical framework to choose the right multi-level distribution model.",
            dark: false,
        },
        {
            title: "Digital Marketing Strategies That Drive Fintech User Acquisition",
            category: "Digital Marketing",
            gradient: "from-pink-50 to-rose-100",
            tag: "Marketing",
            description: "SEO, paid ads, and content playbooks tailored for financial products.",
            dark: false,
        },
        {
            title: "Building High-Performance Web Platforms for Enterprise Clients",
            category: "Web Development",
            gradient: "from-cyan-50 to-sky-100",
            tag: "Engineering",
            description: "Architecture patterns, security, and scalability best practices for modern web apps.",
            dark: false,
        },
    ];

    const filtered =
        activeFilter === "All"
            ? insights
            : insights.filter((item) => item.category === activeFilter);

    const timeline = [
        {
            date: "January 2025",
            description: "New Year celebration with team building activities and future planning sessions.",
        },
        {
            date: "October 2024",
            description: "Diwali festivities bringing light, joy, and prosperity to our workplace.",
        },
        {
            date: "August 2024",
            description: "Independence Day celebrations honoring our nation's freedom and unity.",
        },
        {
            date: "December 2023",
            description: "Christmas celebration spreading festive cheer and warmth throughout the company.",
        },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .insight-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .insight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.2);
        }
        .stat-box {
          transition: all 0.3s ease;
        }
        .stat-box:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.18);
        }
        .timeline-item {
          transition: all 0.3s ease;
        }
        .timeline-item:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.12);
        }
        .btn-primary {
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -4px rgba(37, 99, 235, 0.45);
        }
        .btn-outline {
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          transform: translateY(-2px);
        }
        .filter-btn {
          transition: all 0.25s ease;
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
                                <Star size={14} />
                                Our Achievements
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Our
                                <span className="text-cyan-300 relative ml-1">
                                    |
                                    <span className="absolute -right-1 top-0 w-[3px] h-full bg-cyan-300 rounded-full opacity-0" />
                                </span>
                            </h1>

                            <div className="flex items-center gap-3 mb-6 opacity-0 fade-in-element">
                                <Trophy className="text-yellow-400" size={28} />
                                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                                    Haryvion Technology
                                </h2>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2.5 mb-6 opacity-0 fade-in-element">
                                {[
                                    { label: "Celebrations", icon: PartyPopper },
                                    { label: "Team Members", icon: Users },
                                    { label: "Happy Moments", icon: Heart },
                                ].map((t) => (
                                    <span
                                        key={t.label}
                                        className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                                    >
                                        <t.icon size={12} className="text-cyan-300" />
                                        {t.label}
                                    </span>
                                ))}
                            </div>

                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-lg opacity-0 fade-in-element">
                                Every number tells a story of{" "}
                                <span className="font-semibold text-white">dedication, teamwork, and celebration</span>.
                                These milestones reflect our culture of growth, the bonds we've built, and the happy
                                moments we've shared together over the years.
                            </p>

                            {/* 2x2 stats */}
                            <div className="grid grid-cols-2 gap-3 mb-10 max-w-md opacity-0 fade-in-element">
                                {heroStats.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <div
                                            key={s.label}
                                            className="stat-box bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 cursor-default"
                                        >
                                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.accent} flex items-center justify-center mb-2`}>
                                                <Icon size={16} className="text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-white">{s.value}</div>
                                            <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 opacity-0 fade-in-element">
                                <Link
                                    to="/careers"
                                    className="btn-primary inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-full shadow-lg"
                                >
                                    <Users size={18} />
                                    Join Our Team
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                                >
                                    <Eye size={18} />
                                    View Our Work
                                </Link>
                            </div>
                        </div>

                        {/* Right — illustration */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[440px]">
                            {/* Floating badges */}
                            <div className="absolute top-6 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                                    <Trophy size={18} className="text-amber-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">15+ Years Strong</div>
                                    <div className="text-gray-500 text-xs">Growing Every Day</div>
                                </div>
                            </div>

                            {/* Decorative icons */}
                            <div className="absolute top-8 right-20 w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg z-20 rotate-12">
                                <Lightbulb size={24} className="text-white" />
                            </div>
                            <div className="absolute top-24 right-8 w-12 h-12 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg z-20 -rotate-6">
                                <BarChart3 size={22} className="text-white" />
                            </div>
                            <div className="absolute top-40 left-8 w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center shadow-lg z-20 rotate-6">
                                <ClipboardList size={22} className="text-white" />
                            </div>

                            {/* Person + laptop placeholder */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 border-4 border-white/30 shadow-2xl flex items-center justify-center text-7xl mb-2 overflow-hidden">
                                    👩‍💻
                                </div>
                                <div className="w-40 h-24 bg-slate-700 rounded-t-xl border-2 border-slate-600 shadow-xl relative -mt-4">
                                    <div className="absolute inset-2 bg-gradient-to-br from-blue-300 to-cyan-200 rounded-lg opacity-90" />
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-2.5 bg-slate-600 rounded-b-lg" />
                                </div>
                            </div>

                            {/* Team badge */}
                            <div className="absolute bottom-10 right-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <Users size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">200+ Team Members</div>
                                    <div className="text-gray-500 text-xs">United &amp; Thriving</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FILTER TABS ═══════════════ */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-md bg-white/95">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`filter-btn px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${activeFilter === f
                                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                                        : "bg-white text-blue-600 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ INSIGHTS / CONTENT GRID ═══════════════ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((item, i) => (
                            <div
                                key={i}
                                className="insight-card rounded-2xl overflow-hidden shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default flex flex-col bg-white"
                            >
                                {/* Card header / visual */}
                                <div
                                    className={`relative h-48 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between overflow-hidden`}
                                >
                                    {/* Decorative shapes */}
                                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                                    <div className="absolute bottom-0 left-0 w-32 h-16 bg-white/5 rounded-tr-full" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <span className="text-white font-black text-xs">H</span>
                                            </div>
                                            <span className={`text-[10px] font-bold tracking-wider uppercase ${item.dark === false ? "text-blue-700" : "text-white/80"}`}>
                                                Haryvion Technology
                                            </span>
                                        </div>
                                        <h3
                                            className={`text-base sm:text-lg font-bold leading-snug ${item.dark === false ? "text-gray-900" : "text-white"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="relative z-10">
                                        <span
                                            className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${item.dark === false
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-white/20 text-white backdrop-blur-sm"
                                                }`}
                                        >
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                                            {item.category}
                                        </span>
                                        <button className="text-xs font-semibold text-gray-400 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                                            Read more <ArrowRight size={12} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            No insights found in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* ═══════════════ CELEBRATION TIMELINE ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-14 opacity-0 fade-in-element">
                        Celebration Timeline
                    </h2>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-blue-200" />

                        <div className="space-y-5">
                            {timeline.map((item, i) => (
                                <div
                                    key={i}
                                    className="timeline-item relative flex gap-5 opacity-0 fade-in-element cursor-default"
                                >
                                    {/* Dot */}
                                    <div className="relative z-10 flex-shrink-0 mt-5">
                                        <div className="w-6 h-6 rounded-full border-[3px] border-blue-500 bg-white shadow-sm" />
                                    </div>

                                    {/* Card */}
                                    <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:border-blue-100">
                                        <h3 className="font-bold text-blue-600 text-base mb-1">{item.date}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
                <div className="absolute top-10 left-16 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl" />

                <div className="max-w-3xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
                    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Trophy size={32} className="text-yellow-300" />
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Be Part of Our Next Milestone
                    </h2>
                    <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                        Whether you want to join the team or partner with us on your next project —
                        let's create more achievements together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/careers"
                            className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-full shadow-xl"
                        >
                            <Users size={18} />
                            Join Our Team
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10"
                        >
                            <Rocket size={18} />
                            Start a Project
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Achievements;