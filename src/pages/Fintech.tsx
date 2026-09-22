import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Building2,
    Smartphone,
    CreditCard,
    Shield,
    TrendingUp,
    Bot,
    Landmark,
    RefreshCw,
    Headphones,
    Globe,
    BarChart3,
    Cloud,
    CheckCircle2,
    ShieldCheck,
    Activity,
    ChevronDown,
    MessageCircle,
    Star,
    Lock,
    Code2,
} from "lucide-react";

const Fintech = () => {
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
        { value: "52+", label: "Banking Projects" },
        { value: "99.9%", label: "Uptime" },
        { value: "100%", label: "Secure" },
    ];

    const services = [
        {
            icon: Smartphone,
            title: "Digital Banking Platforms",
            description:
                "Modern, user-friendly mobile and web banking solutions with seamless user experience and real-time account management.",
            points: ["Mobile Banking Apps", "Internet Banking", "Account Aggregation"],
        },
        {
            icon: CreditCard,
            title: "Payment Gateway Integration",
            description:
                "Secure payment processing solutions supporting multiple payment methods and currencies with PCI-DSS compliance.",
            points: ["UPI Integration", "Card Processing", "Wallet Solutions"],
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description:
                "Bank-grade security infrastructure with advanced fraud detection, encryption, and regulatory compliance.",
            points: ["AES-256 Encryption", "Two-Factor Auth", "KYC Automation"],
        },
        {
            icon: TrendingUp,
            title: "Wealth Management Systems",
            description:
                "Comprehensive portfolio management and investment tracking solutions with real-time analytics and reporting.",
            points: ["Portfolio Tracking", "Risk Analysis", "Trading Platforms"],
        },
        {
            icon: Bot,
            title: "AI-Powered Analytics",
            description:
                "Machine learning algorithms for predictive analytics, credit scoring, and personalized financial insights.",
            points: ["Fraud Detection", "Credit Scoring", "Predictive Models"],
        },
        {
            icon: Landmark,
            title: "Core Banking Solutions",
            description:
                "Complete core banking systems with account management, loan processing, and integrated banking operations.",
            points: ["Account Management", "Loan Processing", "Branch Operations"],
        },
    ];

    const features = [
        {
            icon: RefreshCw,
            title: "Seamless Integration",
            description:
                "Easy integration with existing banking systems and third-party services through robust APIs.",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description:
                "Round-the-clock technical support and dedicated account managers for enterprise clients.",
        },
        {
            icon: Globe,
            title: "Multi-Currency",
            description:
                "Support for 150+ currencies with real-time exchange rates and international transactions.",
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description:
                "Comprehensive dashboards with detailed reporting and business intelligence tools.",
        },
        {
            icon: Cloud,
            title: "Cloud Infrastructure",
            description:
                "Scalable cloud-based architecture ensuring high availability and disaster recovery.",
        },
        {
            icon: CheckCircle2,
            title: "Regulatory Compliance",
            description:
                "Full compliance with global banking regulations including GDPR, PCI-DSS, and SOC 2.",
        },
        {
            icon: ShieldCheck,
            title: "Bank-Grade Protection",
            description:
                "Multi-layer security with encryption and AI-powered fraud prevention for complete data safety.",
        },
        {
            icon: Activity,
            title: "Real-Time Analytics",
            description:
                "Monitor transactions, user behavior, and financial insights with live dashboards.",
        },
    ];

    const technologies = [
        { name: "Java Spring Boot", icon: "☕" },
        { name: "Node.js", icon: "🟢" },
        { name: "React Native", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "Python Django", icon: "🐍" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS Cloud", icon: "☁️" },
        { name: "MongoDB", icon: "🍃" },
    ];

    const process = [
        {
            step: "1",
            title: "Discovery & Analysis",
            description:
                "Understanding your requirements, existing infrastructure, and business objectives.",
        },
        {
            step: "2",
            title: "Solution Design",
            description:
                "Creating customized architecture and technical specifications tailored to your needs.",
        },
        {
            step: "3",
            title: "Development & Testing",
            description:
                "Agile development with continuous integration and rigorous security testing.",
        },
        {
            step: "4",
            title: "Deployment & Support",
            description:
                "Smooth go-live with comprehensive training and ongoing technical support.",
        },
    ];

    const faqs = [
        {
            q: "How much does fintech software development cost?",
            a: "The cost of fintech software development depends on your project requirements, features, integrations, security standards, and overall complexity. A basic fintech solution typically costs less than a feature-rich platform with APIs, payment gateways, AI, analytics, and compliance requirements. We provide a free consultation and customized quotation based on your business needs and budget.",
        },
        {
            q: "How long does it take to build a fintech software solution?",
            a: "Timelines vary based on scope. A simple MVP can take 8–12 weeks, while a full-scale digital banking or core banking platform may take 4–9 months. We follow agile sprints and share clear milestones so you always know where the project stands.",
        },
        {
            q: "How do you handle software maintenance and support?",
            a: "We offer flexible AMC and managed support plans covering bug fixes, security patches, performance monitoring, feature enhancements, and 24/7 incident response. Dedicated account managers ensure your systems stay secure, compliant, and up to date.",
        },
        {
            q: "What are the charges for services like APIs and other integrations?",
            a: "API and third-party integration costs depend on the number of systems, complexity of data flows, and compliance requirements (e.g. UPI, card networks, KYC providers). We quote integration work transparently as part of the overall project estimate.",
        },
        {
            q: "What are the commission and charges on services?",
            a: "Haryvion Technology is a software development partner — we do not take transaction commissions on your payments or banking flows. Our commercial model is project-based, retainer-based, or revenue-share only when mutually agreed for specific products.",
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
        .feat-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feat-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .tech-tile {
          transition: all 0.3s ease;
        }
        .tech-tile:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 12px 28px -8px rgba(37, 99, 235, 0.2);
          border-color: #93c5fd;
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
        .faq-item {
          transition: all 0.3s ease;
        }
        .hero-stat {
          transition: all 0.3s ease;
        }
        .hero-stat:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }
      `}</style>

            <Navbar />

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                {/* dots */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div className="absolute top-32 left-[45%] w-2 h-2 rounded-full bg-purple-400/70" />
                <div className="absolute bottom-40 right-[35%] w-3 h-3 rounded-full bg-violet-400/50" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <Building2 size={14} />
                                Banking &amp; Finance Solutions
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Fintech{" "}
                                <span className="text-cyan-300 relative">
                                    Solutions
                                    <span className="absolute -right-3 top-1 w-[3px] h-[85%] bg-cyan-300 rounded-full" />
                                </span>
                            </h1>

                            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 opacity-0 fade-in-element">
                                Haryvion Technology
                            </h2>

                            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-lg opacity-0 fade-in-element">
                                Haryvion Technology delivers next-generation finance and fintech
                                software development services that help banks, NBFCs, fintech
                                startups, and financial institutions scale securely and efficiently.
                            </p>

                            {/* Mini stats */}
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
                                    Get Started
                                    <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="https://wa.me/91XXXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                                >
                                    <MessageCircle size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                        {/* Right — illustration area */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element">
                            {/* Floating badges */}
                            <div className="absolute top-8 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Lock size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Bank-Grade Security</div>
                                    <div className="text-gray-500 text-xs">256-bit Encryption</div>
                                </div>
                            </div>

                            <div className="absolute top-4 right-12 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg z-20">
                                <span className="text-white font-bold text-sm">₹</span>
                            </div>

                            <div className="absolute top-16 right-4 w-10 h-10 rounded-xl bg-blue-400/80 flex items-center justify-center shadow-lg z-10">
                                <Shield size={20} className="text-white" />
                            </div>

                            {/* Phone mockup */}
                            <div className="relative w-56 h-[420px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-700 shadow-2xl overflow-hidden">
                                {/* notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-10" />
                                {/* screen */}
                                <div className="h-full bg-gradient-to-b from-blue-50 to-white pt-10 px-4 pb-4">
                                    <div className="text-center mb-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                                            <Building2 size={22} className="text-white" />
                                        </div>
                                        <div className="text-xs font-bold text-gray-800">Haryvion Bank</div>
                                        <div className="text-[10px] text-gray-400">Digital Banking</div>
                                    </div>
                                    <div className="bg-blue-600 rounded-2xl p-3 text-white mb-3">
                                        <div className="text-[10px] opacity-80">Total Balance</div>
                                        <div className="text-lg font-bold">₹ 4,85,230</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mb-3">
                                        {["Send", "Receive", "Scan"].map((t) => (
                                            <div key={t} className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-100">
                                                <div className="w-6 h-6 bg-blue-100 rounded-lg mx-auto mb-1" />
                                                <div className="text-[8px] font-medium text-gray-600">{t}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-white rounded-xl p-2 flex items-center gap-2 shadow-sm border border-gray-100">
                                                <div className="w-7 h-7 bg-slate-100 rounded-full" />
                                                <div className="flex-1">
                                                    <div className="h-2 bg-slate-100 rounded w-16 mb-1" />
                                                    <div className="h-1.5 bg-slate-50 rounded w-10" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Businessman silhouette placeholder */}
                            <div className="absolute -right-2 bottom-0 w-40 h-64 flex flex-col items-center justify-end">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 mb-1" />
                                <div className="w-28 h-36 bg-gradient-to-b from-blue-800 to-blue-950 rounded-t-3xl" />
                            </div>

                            {/* RBI badge */}
                            <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <CheckCircle2 size={20} className="text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">RBI Compliant</div>
                                    <div className="text-gray-500 text-xs">Fully Certified</div>
                                </div>
                            </div>

                            {/* Bank building icon */}
                            <div className="absolute bottom-16 left-8 w-12 h-12 bg-blue-500/30 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                                <Landmark size={22} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SERVICES ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <Star size={12} />
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Comprehensive{" "}
                            <span className="text-blue-600">Financial Technology</span> Solutions
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            At Haryvion Technology, we provide end-to-end finance and fintech software
                            development services designed to help banks, NBFCs, fintech startups, and
                            enterprises build secure, scalable, and future-ready digital financial products.
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
                                    <div className="svc-icon w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
                                        <Icon size={26} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                                    <ul className="space-y-2">
                                        {s.points.map((p) => (
                                            <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
                <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                            <Star size={12} />
                            Key Features
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Why Financial Institutions Choose Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className="feat-card bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center opacity-0 fade-in-element cursor-default"
                                >
                                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                                    <p className="text-blue-100/80 text-xs leading-relaxed">{f.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ TECH STACK ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <Code2 size={12} />
                            Technology Stack
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Built With{" "}
                            <span className="text-blue-600">Cutting-Edge Technologies</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
                            At Haryvion Technology, we build finance and fintech software solutions using a
                            modern, future-ready technology stack that ensures scalability, performance,
                            and enterprise-grade security.
                            <br className="hidden sm:block" />
                            As a trusted fintech software development company in India, Haryvion Technology
                            helps financial institutions innovate faster with secure, scalable digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                        {technologies.map((t, i) => (
                            <div
                                key={i}
                                className="tech-tile bg-slate-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 opacity-0 fade-in-element cursor-default"
                            >
                                <span className="text-3xl">{t.icon}</span>
                                <span className="text-sm font-semibold text-gray-800 text-center">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PROCESS ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Streamlined Implementation Process
                        </h2>
                        <p className="text-gray-500">
                            From consultation to deployment, we ensure a smooth transition
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {process.map((p, i) => (
                            <div key={i} className="text-center opacity-0 fade-in-element">
                                <div
                                    className={`w-16 h-16 mx-auto mb-5 rounded-[1.5rem] flex items-center justify-center text-white text-2xl font-bold shadow-lg ${i === 0
                                            ? "bg-blue-700"
                                            : i === 1
                                                ? "bg-blue-600"
                                                : i === 2
                                                    ? "bg-blue-500"
                                                    : "bg-blue-400"
                                        }`}
                                    style={{ borderRadius: i % 2 === 0 ? "40% 60% 50% 50%" : "50% 40% 60% 50%" }}
                                >
                                    {p.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── FAQ ── */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10 opacity-0 fade-in-element">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-3 opacity-0 fade-in-element">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="faq-item bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
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
                                        className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden opacity-0 fade-in-element">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Building2 size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Build Your Fintech Product?
                            </h2>
                            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                                Partner with Haryvion Technology to design, develop, and scale secure,
                                compliant, and high-performance financial software solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-full"
                                >
                                    Get Started
                                    <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="https://wa.me/91XXXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10"
                                >
                                    <MessageCircle size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Fintech;