import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Code2,
    Brain,
    Palette,
    Rocket,
    Smartphone,
    Cloud,
    Shield,
    Zap,
    Lock,
    Headphones,
    CheckCircle2,
    Users,
    FolderKanban,
    Globe,
    Trophy,
    ChevronDown,
    Phone,
    Calendar,
    Star,
    Activity,
} from "lucide-react";

const SoftwareDevelopment = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    }, []);

    const heroStats = [
        { value: "52+", label: "Projects Done" },
        { value: "20K+", label: "Happy Clients" },
        { value: "24/7", label: "Support" },
    ];

    const services = [
        {
            icon: Brain,
            title: "AI-Powered Analytics",
            description:
                "Leverage artificial intelligence to unlock deep insights from your data and drive informed business decisions.",
            metric: "95% Client Satisfaction",
            progress: 95,
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description:
                "Create stunning, intuitive interfaces that captivate users and deliver exceptional experiences across all devices.",
            metric: "97% User Approval",
            progress: 97,
        },
        {
            icon: Rocket,
            title: "Digital Marketing",
            description:
                "Amplify your brand reach with data-driven marketing strategies that deliver measurable growth and ROI.",
            metric: "94% ROI Increase",
            progress: 94,
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            description:
                "Build powerful native mobile applications that engage users and provide seamless experiences on iOS and Android.",
            metric: "92% Success Rate",
            progress: 92,
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description:
                "Scale your infrastructure with enterprise-grade cloud solutions that ensure reliability, security, and performance.",
            metric: "98% Uptime",
            progress: 98,
        },
        {
            icon: Shield,
            title: "Cybersecurity",
            description:
                "Protect your digital assets with enterprise-grade security measures and real-time threat monitoring systems.",
            metric: "99% Protection",
            progress: 99,
        },
    ];

    const performanceCards = [
        { icon: Zap, color: "text-blue-500", title: "Lightning Fast", sub: "0.5s Load Time" },
        { icon: Lock, color: "text-emerald-500", title: "Ultra Secure", sub: "256-bit Encryption" },
        { icon: Activity, color: "text-violet-500", title: "Auto Scaling", sub: "Unlimited Resources" },
        { icon: Headphones, color: "text-rose-500", title: "24/7 Support", sub: "Always Available" },
    ];

    const performancePoints = [
        {
            title: "Advanced Caching System",
            desc: "Redis and CDN integration ensures blazing-fast content delivery worldwide",
        },
        {
            title: "Real-Time Monitoring",
            desc: "Comprehensive analytics dashboard with live performance tracking",
        },
        {
            title: "Automated Backups",
            desc: "Hourly backups with instant one-click restore functionality",
        },
    ];

    const bigStats = [
        { icon: Users, color: "text-blue-500", value: "500", label: "Happy Clients" },
        { icon: FolderKanban, color: "text-emerald-500", value: "52", label: "Projects Completed" },
        { icon: Globe, color: "text-sky-500", value: "25", label: "Countries Served" },
        { icon: Trophy, color: "text-amber-500", value: "16", label: "Awards Won" },
    ];

    const faqs = [
        {
            q: "How much does a website cost, and what factors affect pricing?",
            a: (
                <>
                    <p className="mb-3">
                        The cost of a website depends on your business requirements, design preferences,
                        functionality, and the level of customization needed. A simple business website
                        typically costs less than a custom website with advanced features or an e-commerce platform.
                    </p>
                    <p className="font-semibold text-gray-700 mb-2">Key factors that affect website pricing include:</p>
                    <ul className="list-disc list-inside space-y-1 mb-3 text-gray-500">
                        <li>Number of pages</li>
                        <li>Custom design or template-based design</li>
                        <li>E-commerce functionality</li>
                        <li>Custom features and integrations</li>
                        <li>Content management system (CMS)</li>
                        <li>SEO requirements</li>
                        <li>Third-party API integrations</li>
                        <li>Hosting and domain setup</li>
                        <li>Maintenance and support services</li>
                    </ul>
                    <p>
                        We provide a free consultation and a customized quotation based on your specific
                        business goals, ensuring transparent pricing with no hidden charges.
                    </p>
                </>
            ),
        },
        {
            q: "How long does it take to build a website?",
            a: "A basic business website typically takes 2–4 weeks. A custom website with advanced features takes 4–8 weeks, while complex platforms (e-commerce, portals, SaaS) can take 8–16 weeks. We share a clear timeline after the discovery call.",
        },
        {
            q: "Will the website be custom-designed or template-based?",
            a: "We offer both. For unique brands we design fully custom UI/UX from scratch. For faster launches we can start from premium templates and heavily customize them to match your brand — you choose what fits your budget and timeline.",
        },
        {
            q: "Is SEO included in your website development service?",
            a: "Yes. Every website includes on-page SEO foundations: clean semantic HTML, meta tags, sitemap, robots.txt, mobile responsiveness, fast loading, and basic keyword mapping. Advanced SEO retainers are available separately.",
        },
        {
            q: "Will I own the website, domain, and code after it's built?",
            a: "100% yes. You own the domain, hosting account, source code, designs, and all assets. We transfer everything to your accounts on final delivery with full documentation.",
        },
        {
            q: "Do you provide ongoing maintenance and support after launch?",
            a: "Yes. We offer flexible maintenance plans covering updates, security patches, backups, uptime monitoring, content changes, and priority support — so your site stays fast, secure, and up to date.",
        },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .svc-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .svc-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
        }
        .svc-card:hover .svc-icon {
          transform: scale(1.1);
        }
        .svc-icon {
          transition: transform 0.35s ease;
        }
        .perf-mini {
          transition: all 0.3s ease;
        }
        .perf-mini:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
        }
        .stat-card {
          transition: all 0.35s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12);
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
        .hero-stat {
          transition: all 0.3s ease;
        }
        .hero-stat:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-4px);
        }
        .progress-bar {
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
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
                <div className="absolute top-28 left-[42%] w-3 h-3 rounded-full bg-purple-400/70" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                                Next-Gen Digital Solutions
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Software That
                            </h1>
                            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4 opacity-0 fade-in-element">
                                <span className="text-cyan-300">Drives Growth</span>
                            </h1>

                            <div className="flex items-center gap-2 mb-6 opacity-0 fade-in-element">
                                <span className="text-cyan-300 font-mono text-lg">&lt;/&gt;</span>
                                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                    Haryvion Technology
                                </h2>
                            </div>

                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-lg opacity-0 fade-in-element">
                                A powerful website is the foundation of every successful digital
                                presence. We deliver expert development services tailored to your
                                business — so you stand out, scale faster, and reach your goals online.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-3 mb-10 opacity-0 fade-in-element">
                                {heroStats.map((s) => (
                                    <div
                                        key={s.label}
                                        className="hero-stat bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-center min-w-[100px] cursor-default"
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
                                    Get Started Free
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                                >
                                    <Phone size={18} />
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Right — illustration area */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[420px]">
                            {/* Glass frame */}
                            <div className="relative w-[380px] h-[340px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 shadow-2xl">
                                {/* Browser windows stack */}
                                <div className="absolute top-6 left-6 w-48 h-36 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 rotate-[-6deg] z-10">
                                    <div className="h-5 bg-slate-100 flex items-center gap-1 px-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    </div>
                                    <div className="p-2 space-y-1.5">
                                        <div className="h-8 bg-gradient-to-r from-blue-100 to-cyan-50 rounded-lg" />
                                        <div className="grid grid-cols-3 gap-1">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="h-10 bg-slate-50 rounded" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-10 right-4 w-44 h-40 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 rotate-[4deg] z-20">
                                    <div className="h-5 bg-slate-100 flex items-center gap-1 px-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    </div>
                                    <div className="p-2">
                                        <div className="text-[8px] font-bold text-gray-400 mb-1">NEW SEASON ARRIVALS</div>
                                        <div className="grid grid-cols-2 gap-1">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Character */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 mb-0 relative">
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-lg">😄</div>
                                    </div>
                                    <div className="w-20 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-2xl relative">
                                        <div className="absolute -left-3 top-2 w-3 h-8 bg-amber-100 rounded-full rotate-[-20deg]" />
                                        <div className="absolute -right-3 top-2 w-3 h-8 bg-amber-100 rounded-full rotate-[20deg]" />
                                    </div>
                                    <div className="w-24 h-10 bg-orange-400 rounded-full -mt-1 shadow-lg" />
                                </div>
                            </div>

                            {/* Custom Development badge */}
                            <div className="absolute top-0 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-40">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Code2 size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Custom Development</div>
                                    <div className="text-gray-500 text-xs">Built for Your Business</div>
                                </div>
                            </div>

                            {/* Uptime badge */}
                            <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-40">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <Activity size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">99.9% Uptime</div>
                                    <div className="text-gray-500 text-xs">Always Online</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SERVICES ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Star size={12} />
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Innovative Software Solutions For{" "}
                            <span className="text-blue-600">Modern Businesses</span>
                        </h2>
                        <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
                            As a top software development company in India,{" "}
                            <span className="font-semibold text-gray-700">Haryvion Technology</span> delivers
                            end-to-end digital solutions designed to help businesses scale faster, operate
                            smarter, and stay competitive. We are a trusted{" "}
                            <span className="font-semibold text-gray-700">software design and development company</span>{" "}
                            offering custom-built solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={i}
                                    className="svc-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default"
                                >
                                    <div className="svc-icon w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
                                        <Icon size={26} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>

                                    {/* Progress */}
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <span className="text-xs text-gray-400">{s.metric}</span>
                                    </div>
                                    <div className="h-1.5 bg-blue-50 rounded-full overflow-hidden">
                                        <div
                                            className="progress-bar h-full bg-blue-500 rounded-full"
                                            style={{ width: `${s.progress}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-12 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md shadow-blue-200 w-fit">
                            <Star size={12} />
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Built For Excellence &amp;{" "}
                            <span className="text-blue-600">Performance</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left — 2x2 mini cards */}
                        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 opacity-0 fade-in-element">
                            <div className="grid grid-cols-2 gap-4">
                                {performanceCards.map((c, i) => {
                                    const Icon = c.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="perf-mini bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center cursor-default"
                                        >
                                            <Icon size={28} className={`${c.color} mx-auto mb-3`} />
                                            <div className="font-bold text-gray-900 text-sm mb-0.5">{c.title}</div>
                                            <div className="text-gray-400 text-xs">{c.sub}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right — text */}
                        <div className="opacity-0 fade-in-element">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                Engineered For Peak Performance
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Our platform combines cutting-edge technology with intelligent
                                automation to deliver unmatched performance and reliability.
                            </p>

                            <ul className="space-y-5 mb-8">
                                {performancePoints.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle2 size={14} className="text-white" />
                                        </span>
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</div>
                                            <div className="text-gray-500 text-sm">{p.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className="btn-primary inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full"
                            >
                                Learn More
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BIG STATS ═══════════════ */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {bigStats.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={i}
                                    className="stat-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center opacity-0 fade-in-element cursor-default"
                                >
                                    <Icon size={32} className={`${s.color} mx-auto mb-3`} />
                                    <div className="text-3xl font-black text-gray-900 mb-1">{s.value}</div>
                                    <div className="text-gray-500 text-sm">{s.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10 opacity-0 fade-in-element">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-3 opacity-0 fade-in-element">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                                        {i + 1}. {faq.q}
                                    </span>
                                    <ChevronDown
                                        size={18}
                                        className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-white/30" />
                <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-white/20" />

                <div className="max-w-3xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
                    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Rocket size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Ready To Transform Your Business?
                    </h2>
                    <p className="text-purple-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of companies experiencing unprecedented growth. Start
                        your journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-full shadow-xl"
                        >
                            <Rocket size={18} />
                            Start Free Trial
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10"
                        >
                            <Calendar size={18} />
                            Schedule Demo
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-purple-200 text-xs">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> No credit card required
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> Cancel anytime
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> 24/7 support
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SoftwareDevelopment;