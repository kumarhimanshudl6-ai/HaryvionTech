import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Network,
    CheckCircle2,
    Cloud,
    Shield,
    BarChart3,
    Code2,
    Smartphone,
    Headphones,
    Fingerprint,
    FileText,
    Wallet,
    Phone,
    IdCard,
    Landmark,
    Receipt,
    Plane,
    CreditCard,
    PanelsTopLeft,
    IndianRupee,
    MessageCircle,
    Building2,
    Users,
    Handshake,
    ChevronDown,
    Star,
    Zap,
    LayoutGrid,
} from "lucide-react";

const FintechDevelopment = () => {
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
        { value: "52+", label: "Projects Delivered" },
        { value: "250+", label: "B2B Clients" },
        { value: "99%", label: "Satisfaction" },
    ];

    const businessModels = [
        {
            icon: LayoutGrid,
            color: "from-blue-500 to-blue-700",
            iconBg: "bg-blue-600",
            title: "B2B Solutions",
            description:
                "As a trusted B2B software development company, we build scalable and secure enterprise-grade platforms tailored to complex business workflows. Our best B2B software solutions help organizations streamline operations, improve efficiency, and drive long-term growth.",
            points: [
                "Custom B2B software development",
                "Workflow automation & integrations",
                "Secure, scalable enterprise systems",
                "Designed for growth-focused businesses",
            ],
        },
        {
            icon: Smartphone,
            color: "from-violet-500 to-purple-600",
            iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
            title: "B2C Software",
            description:
                "We are a reliable B2C mobile app development company delivering user-centric digital experiences that drive engagement and retention. Our solutions include advanced B2C fintech software solutions built for performance, security, and scalability.",
            points: [
                "B2C web & mobile app development",
                "FinTech apps with secure payment systems",
                "High-performance, user-friendly design",
                "Built for modern digital consumers",
            ],
        },
        {
            icon: Handshake,
            color: "from-fuchsia-500 to-pink-500",
            iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
            title: "Reseller Program",
            description:
                "As the Best B2B B2C Reseller Portal Development Company, we create powerful reseller platforms that enable businesses to expand faster through multi-level distribution networks.",
            points: [
                "Advanced B2B & B2C reseller portal development",
                "Role-based dashboards & commission management",
                "Highly customizable & scalable architecture",
                "Built to maximize revenue and partner growth",
            ],
        },
    ];

    const features = [
        {
            icon: Cloud,
            color: "from-blue-500 to-blue-600",
            title: "Cloud Infrastructure",
            description:
                "Scalable cloud-based solutions with 99.9% uptime guarantee and automatic backups.",
        },
        {
            icon: Shield,
            color: "from-violet-500 to-purple-600",
            title: "Advanced Security",
            description:
                "Enterprise-grade security with SSL encryption, 2FA, and compliance certifications.",
        },
        {
            icon: BarChart3,
            color: "from-fuchsia-500 to-pink-500",
            title: "Real-Time Analytics",
            description:
                "Comprehensive dashboards with real-time data insights and custom reports.",
        },
        {
            icon: Code2,
            color: "from-orange-400 to-amber-500",
            title: "API Integration",
            description:
                "RESTful APIs with comprehensive documentation for seamless integrations.",
        },
        {
            icon: Smartphone,
            color: "from-cyan-500 to-blue-600",
            title: "Mobile Optimized",
            description:
                "Responsive design that works perfectly on all devices and screen sizes.",
        },
        {
            icon: Headphones,
            color: "from-teal-400 to-cyan-500",
            title: "24/7 Support",
            description:
                "Round-the-clock customer support via chat, email, and phone channels.",
        },
    ];

    const fintechServices = [
        {
            icon: Fingerprint,
            color: "from-blue-500 to-blue-700",
            title: "AEPS",
            description:
                "Aadhaar Enabled Payment System for cash withdrawal, balance inquiry and mini statement services.",
        },
        {
            icon: FileText,
            color: "from-violet-500 to-purple-600",
            title: "BBPS",
            description:
                "Bharat Bill Payment System for electricity, gas, water, broadband and utility bill payments.",
        },
        {
            icon: Wallet,
            color: "from-fuchsia-500 to-pink-500",
            title: "DMT",
            description:
                "Instant Domestic Money Transfer service with secure and fast bank-to-bank transactions.",
        },
        {
            icon: Phone,
            color: "from-orange-400 to-amber-500",
            title: "Recharge Services",
            description:
                "Mobile, DTH and data card recharge services with instant processing and cashback offers.",
        },
        {
            icon: IdCard,
            color: "from-cyan-500 to-blue-600",
            title: "Aadhaar Verification",
            description:
                "Quick Aadhaar verification services for identity authentication and KYC verification.",
        },
        {
            icon: Landmark,
            color: "from-teal-400 to-emerald-500",
            title: "Account Opening",
            description:
                "Easy digital bank account opening services with paperless KYC and instant onboarding.",
        },
        {
            icon: Receipt,
            color: "from-rose-400 to-pink-500",
            title: "GST Verification",
            description:
                "Verify GST numbers instantly for businesses and ensure accurate taxpayer details.",
        },
        {
            icon: Plane,
            color: "from-sky-400 to-cyan-500",
            title: "Travel Booking",
            description:
                "Book bus, train and flight tickets with fast confirmations and affordable pricing.",
        },
        {
            icon: CreditCard,
            color: "from-emerald-400 to-green-500",
            title: "AEPS Payout",
            description:
                "Secure AEPS payout solutions for merchants and retailers with instant settlements.",
        },
        {
            icon: IdCard,
            color: "from-amber-400 to-orange-500",
            title: "PAN Card Services",
            description:
                "Apply for new PAN cards, corrections, updates and reprint services quickly online.",
        },
        {
            icon: IndianRupee,
            color: "from-blue-400 to-indigo-500",
            title: "UPI Payout",
            description:
                "Fast UPI payout services with secure transactions and real-time payment processing.",
        },
        {
            icon: PanelsTopLeft,
            color: "from-violet-400 to-purple-500",
            title: "CMS Services",
            description:
                "Cash Management Services for retailers and businesses with smooth transaction handling.",
        },
    ];

    const plans = [
        {
            name: "Starter",
            subtitle: "Perfect for small businesses",
            price: "₹70,000",
            popular: false,
            features: [
                "Up to 100 transactions",
                "Basic analytics",
                "Email support",
                "Standard API access",
                "Mobile app access",
            ],
        },
        {
            name: "Professional",
            subtitle: "Best for growing businesses",
            price: "₹90,000",
            popular: true,
            features: [
                "Unlimited transactions",
                "Advanced analytics",
                "Priority support 24/7",
                "Full API access",
                "White-label options",
            ],
        },
        {
            name: "Enterprise",
            subtitle: "For large organizations",
            price: "₹1,20,000+",
            popular: false,
            features: [
                "Everything in Professional",
                "Dedicated account manager",
                "Custom SLA agreements",
                "On-premise deployment",
                "Training & consulting",
            ],
        },
    ];

    const faqs = [
        {
            q: "How much does B2B, B2C, and Reseller software development cost?",
            a: "The cost depends on your business model, required features, integrations, user roles, and level of customization. A basic platform costs less, while an enterprise-grade solution with advanced features, APIs, analytics, and automation requires a higher investment. We provide a customized quotation after understanding your business requirements and goals.",
        },
        {
            q: "What is a B2B, B2C, and Reseller platform, and do I need one for my business?",
            a: "A B2B platform connects businesses with other businesses, B2C serves end consumers directly, and a Reseller platform lets you distribute products/services through a multi-level partner network with commissions. If you want to scale distribution, manage agents/retailers, or offer digital financial services, you need one.",
        },
        {
            q: "Can the platform support multiple user roles (Admin, Distributor, Retailer, Customer)?",
            a: "Yes. Our platforms are built with role-based access control (RBAC). You can configure Admin, Distributor, Retailer, Merchant, and Customer roles — each with their own dashboard, permissions, and commission structures.",
        },
        {
            q: "Can each reseller/distributor have their own dashboard?",
            a: "Absolutely. Every reseller and distributor gets a dedicated white-label or branded dashboard to manage downline, view commissions, run services (AEPS, BBPS, DMT, etc.), and track performance in real time.",
        },
        {
            q: "Can I set different commission rates for different products/services or user levels?",
            a: "Yes. Our commission engine supports multi-level, service-wise, slab-based, and user-level commission configurations. You can set different rates for AEPS, BBPS, DMT, recharge, and more — and change them anytime from the admin panel.",
        },
        {
            q: "Can I change commission structures later without rebuilding the platform?",
            a: "Yes. Commission rules are fully configurable from the admin panel. You can update rates, slabs, and hierarchies without any code changes or platform rebuild.",
        },
        {
            q: "Is it built as a ready-made solution or fully custom from scratch?",
            a: "We offer both. You can start with our battle-tested ready-made B2B/B2C/Reseller fintech platform and customize modules, or we can build a fully custom solution from scratch based on your exact workflows.",
        },
        {
            q: "Can I add new modules or services later?",
            a: "Yes. The architecture is modular. You can add new services (e.g. travel, insurance, CMS, new payout rails) later without disrupting existing operations.",
        },
        {
            q: "What all AEPS/fintech services do you offer?",
            a: "We offer AEPS (cash withdrawal, balance inquiry, mini statement), BBPS, DMT, Recharge, Aadhaar & GST verification, Account Opening, PAN services, Travel Booking, AEPS/UPI Payout, CMS, and more — all under one unified platform.",
        },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .model-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .model-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
        }
        .model-card:hover .model-icon {
          transform: scale(1.1);
        }
        .model-icon {
          transition: transform 0.35s ease;
        }
        .feat-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12);
        }
        .feat-card:hover .feat-icon {
          transform: scale(1.1);
        }
        .feat-icon {
          transition: transform 0.3s ease;
        }
        .svc-tile {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .svc-tile:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12);
        }
        .svc-tile:hover .svc-icon {
          transform: scale(1.1);
        }
        .svc-icon {
          transition: transform 0.3s ease;
        }
        .plan-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .plan-card:hover {
          transform: translateY(-8px);
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
      `}</style>

            <Navbar />

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div className="absolute top-24 left-8 w-3 h-3 rounded-full bg-purple-400/70" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <Network size={14} />
                                B2B, B2C &amp; Reseller Platforms
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-1 opacity-0 fade-in-element">
                                Fintech
                            </h1>
                            <h1 className="text-5xl sm:text-6xl font-bold text-cyan-300 leading-tight mb-3 opacity-0 fade-in-element">
                                Development
                            </h1>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5 opacity-0 fade-in-element">
                                Haryvion Technology
                            </h2>

                            {/* micro tags */}
                            <div className="flex flex-wrap gap-3 mb-6 opacity-0 fade-in-element">
                                {[
                                    { label: "Scalable Platforms", color: "bg-emerald-400" },
                                    { label: "Secure & Fast", color: "bg-blue-300" },
                                    { label: "24/7 Support", color: "bg-purple-300" },
                                ].map((t) => (
                                    <span key={t.label} className="inline-flex items-center gap-1.5 text-white/90 text-xs font-medium">
                                        <span className={`w-1.5 h-1.5 rounded-full ${t.color}`} />
                                        {t.label}
                                    </span>
                                ))}
                            </div>

                            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-lg opacity-0 fade-in-element">
                                Haryvion Technology delivers secure, scalable B2B &amp; B2C digital
                                platforms — from enterprise portals and reseller management to
                                fintech applications — built to accelerate growth and maximize
                                revenue for businesses worldwide.
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
                                <a
                                    href="#business-models"
                                    className="btn-primary inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-full shadow-lg"
                                >
                                    Explore Solutions
                                    <ArrowRight size={18} />
                                </a>
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

                        {/* Right — illustration */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[420px]">
                            {/* Multi-level access badge */}
                            <div className="absolute top-8 left-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
                                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                                    <Users size={18} className="text-violet-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Multi-Level Access</div>
                                    <div className="text-gray-500 text-xs">B2B / B2C / Reseller</div>
                                </div>
                            </div>

                            {/* Floating icons */}
                            <div className="absolute top-16 right-16 w-11 h-11 rounded-full bg-orange-400 flex items-center justify-center shadow-lg z-20">
                                <Smartphone size={18} className="text-white" />
                            </div>
                            <div className="absolute top-8 right-4 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-20 text-white font-bold text-sm">
                                B
                            </div>
                            <div className="absolute top-28 right-0 w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center shadow-lg z-20">
                                <Building2 size={18} className="text-white" />
                            </div>
                            <div className="absolute top-40 left-8 w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center shadow-lg z-20">
                                <Users size={16} className="text-white" />
                            </div>

                            {/* Phone mockup */}
                            <div className="relative w-52 h-[400px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-700 shadow-2xl overflow-hidden z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10" />
                                <div className="h-full bg-white flex flex-col items-center justify-center p-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-lg">
                                        <Fingerprint size={40} className="text-white" />
                                    </div>
                                    <div className="text-2xl font-black text-blue-700 tracking-tight mb-1">
                                        AEPS
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                                        Aadhaar Enabled Payment
                                    </div>
                                    <div className="mt-6 w-full space-y-2">
                                        {["Cash Withdrawal", "Balance Inquiry", "Mini Statement"].map((t) => (
                                            <div
                                                key={t}
                                                className="bg-blue-50 rounded-xl py-2.5 px-3 text-center text-xs font-semibold text-blue-700"
                                            >
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Instant Setup badge */}
                            <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
                                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                                    <Zap size={18} className="text-pink-500" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Instant Setup</div>
                                    <div className="text-gray-500 text-xs">Go Live in 24hrs</div>
                                </div>
                            </div>

                            {/* Person illustration placeholder */}
                            <div className="absolute bottom-0 left-4 w-36 flex flex-col items-center z-0">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 mb-0" />
                                <div className="w-24 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BUSINESS MODELS ═══════════════ */}
            <section id="business-models" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <Building2 size={12} />
                            Business Models
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Choose Your{" "}
                            <span className="text-blue-600">Business Model</span>
                        </h2>
                        <p className="text-gray-500">
                            Flexible solutions designed for every business type
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {businessModels.map((m, i) => {
                            const Icon = m.icon;
                            return (
                                <div
                                    key={i}
                                    className="model-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default text-center"
                                >
                                    <div
                                        className={`model-icon w-16 h-16 ${m.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                    >
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{m.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 text-left">
                                        {m.description}
                                    </p>
                                    <ul className="space-y-2.5 text-left">
                                        {m.points.map((p) => (
                                            <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
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

            {/* ═══════════════ FEATURES ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <Star size={12} />
                            Key Features
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Powerful Features For{" "}
                            <span className="text-blue-600">Every Business</span>
                        </h2>
                        <p className="text-gray-500">
                            Everything you need to scale your business operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className="feat-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default"
                                >
                                    <div
                                        className={`feat-icon w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-md`}
                                    >
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINTECH SERVICES ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <Star size={12} />
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Powerful FinTech Services For{" "}
                            <span className="text-blue-600">Every Business</span>
                        </h2>
                        <p className="text-gray-500">
                            Fast, secure and reliable digital solutions for retailers, distributors and businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {fintechServices.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={i}
                                    className="svc-tile bg-white rounded-2xl p-6 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default"
                                >
                                    <div
                                        className={`svc-icon w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-md`}
                                    >
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRICING ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <IndianRupee size={12} />
                            Pricing Plans
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Choose The Perfect{" "}
                            <span className="text-blue-600">Plan</span>
                        </h2>
                        <p className="text-gray-500">
                            Flexible pricing options for businesses of all sizes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`plan-card relative bg-white rounded-2xl p-8 border-2 opacity-0 fade-in-element cursor-default ${plan.popular
                                        ? "border-blue-500 shadow-xl shadow-blue-100 scale-[1.02]"
                                        : "border-blue-100 shadow-sm"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-[10px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                                    <p className="text-gray-400 text-xs mb-4">{plan.subtitle}</p>
                                    <div className="text-3xl font-black text-blue-600">
                                        {plan.price}
                                        <span className="text-base font-semibold text-gray-500"> + GST</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                                            <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className={`w-full inline-flex items-center justify-center py-3 rounded-full font-semibold text-sm transition-all ${plan.popular
                                            ? "btn-primary bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                                            : "btn-outline border-2 border-blue-500 text-blue-600 hover:bg-blue-50"
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
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
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                                <Network size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Launch Your Platform?
                            </h2>
                            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                                Build your B2B, B2C, or Reseller fintech platform with Haryvion Technology —
                                secure, scalable, and built for growth.
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

export default FintechDevelopment;