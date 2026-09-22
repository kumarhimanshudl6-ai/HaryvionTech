import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Code2,
    Smartphone,
    Globe,
    Building2,
    CheckCircle2,
    ChevronDown,
    MessageCircle,
    Rocket,
    ShieldCheck,
    Cpu,
    Layers,
    ShoppingBag,
    Plane,
    HeartPulse,
    Car,
    Home,
    GraduationCap,
    Star,
    Users,
    Wrench,
    Lock,
    RefreshCw,
    Headphones,
    Infinity as InfinityIcon,
    BarChart3,
    Send,
    Cog,
    Sparkles,
    Database,
    Cloud,
} from "lucide-react";

const CustomSoftware = () => {
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

    const whatWeBuild = [
        {
            icon: Cog,
            title: "Custom Application Development",
            description:
                "We build custom applications that automate your workflows, connect your teams, and solve problems off-the-shelf software simply can't handle.",
            bgIcon: "bg-blue-600",
        },
        {
            icon: Smartphone,
            title: "Custom Mobile Application Development",
            description:
                "From concept to launch, our custom mobile application development services help you reach your customers on Android and iOS with fast, secure, and intuitive apps.",
            bgIcon: "bg-blue-600",
        },
        {
            icon: Globe,
            title: "Custom Websites",
            description:
                "We build custom websites that go beyond templates — engineered for performance, SEO, and conversions, and designed to represent your brand the way it deserves.",
            bgIcon: "bg-blue-600",
        },
        {
            icon: Building2,
            title: "Enterprise & Business Software",
            description:
                "Purpose-built systems for internal operations, reporting, CRM, inventory, and more — engineered around your exact processes, not a generic workflow.",
            bgIcon: "bg-blue-600",
        },
    ];

    const industries = [
        {
            icon: Layers,
            title: "Fintech (B2B, B2C & Reseller)",
            description:
                "We build secure fintech software for B2B, B2C, and reseller businesses, including digital payment solutions, wallets, lending platforms, AEPS, BBPS, DMT, UPI integration, and white-label reseller portals.",
        },
        {
            icon: ShoppingBag,
            title: "E-Commerce & Retail",
            description:
                "We develop custom e-commerce platforms, online stores, multi-vendor marketplaces, inventory management systems, and retail software that help businesses manage sales and enhance customer experiences.",
        },
        {
            icon: Plane,
            title: "Travel",
            description:
                "Our travel software includes booking engines, itinerary management, travel portals, and reservation systems designed to simplify travel planning and improve operational efficiency.",
        },
        {
            icon: HeartPulse,
            title: "Healthcare",
            description:
                "We create healthcare solutions such as patient management systems, telehealth platforms, appointment scheduling, and hospital management software to streamline healthcare services.",
        },
        {
            icon: Building2,
            title: "Commercial & Enterprise",
            description:
                "We deliver enterprise software for business automation, workflow management, CRM, ERP, HRMS, and operational management to improve productivity and business performance.",
        },
        {
            icon: Car,
            title: "Cab Booking & Transportation",
            description:
                "We build ride-hailing apps, fleet management systems, logistics platforms, driver management software, and real-time tracking solutions for transportation businesses.",
        },
        {
            icon: Home,
            title: "Real Estate",
            description:
                "Our real estate solutions include property listing portals, CRM software, lead management systems, and property management platforms that help agencies manage buyers, sellers, and properties efficiently.",
        },
        {
            icon: GraduationCap,
            title: "Education",
            description:
                "We develop learning management systems (LMS), e-learning platforms, student management software, and online education solutions that support modern digital learning.",
        },
    ];

    const processSteps = [
        {
            step: "1",
            title: "Discovery & Requirement Analysis",
            description:
                "We start by understanding your business, your users, and your goals.",
        },
        {
            step: "2",
            title: "Planning & Architecture",
            description:
                "We map out a technical roadmap and system architecture suited to your specific needs.",
        },
        {
            step: "3",
            title: "Design & Development",
            description:
                "Our team builds your custom software using modern, secure, and scalable technologies.",
        },
        {
            step: "4",
            title: "Testing & Quality Assurance",
            description:
                "Every solution is rigorously tested for performance, security, and reliability.",
        },
        {
            step: "5",
            title: "Deployment & Support",
            description:
                "We launch your software and stay on to support it as your business grows.",
        },
    ];

    const whyChooseUs = [
        {
            icon: Users,
            title: "Experienced Development Team",
            description:
                "Skilled professionals delivering innovative and scalable software solutions.",
        },
        {
            icon: Wrench,
            title: "Tailor-Made Solutions",
            description:
                "Custom software designed to match your unique business requirements.",
        },
        {
            icon: Cpu,
            title: "Latest Technologies",
            description:
                "Expertise in modern frameworks, cloud platforms, AI, and secure development practices.",
        },
        {
            icon: ShieldCheck,
            title: "Scalable & Secure",
            description:
                "Applications built for high performance, data security, and future business growth.",
        },
        {
            icon: RefreshCw,
            title: "Agile Development Process",
            description:
                "Faster delivery with transparent communication and regular project updates.",
        },
        {
            icon: BarChart3,
            title: "Industry Expertise",
            description:
                "Proven experience across fintech, healthcare, e-commerce, education, travel, real estate, and enterprise solutions.",
        },
        {
            icon: InfinityIcon,
            title: "End-To-End Services",
            description:
                "From consultation and UI/UX design to development, testing, deployment, and ongoing support.",
        },
        {
            icon: Headphones,
            title: "Dedicated Support & Maintenance",
            description:
                "Continuous updates, performance monitoring, and technical assistance after launch.",
        },
    ];

    const technologies = [
        { name: "Java Spring Boot", icon: "☕" },
        { name: "Node.js", icon: "🟢" },
        { name: "React Native", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "Python Django", icon: "🐍" },
        { name: "Flutter", icon: "🦋" },
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🤖" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS Cloud", icon: "☁️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Firebase", icon: "🔥" },
        { name: "REST API", icon: "⚡" },
        { name: "Git", icon: "📦" },
    ];

    const faqs = [
        {
            q: "What is custom software development?",
            a: "Custom software development is the process of designing, building, and deploying software created specifically for your business, as opposed to off-the-shelf products built for a general audience. It's tailored to your exact workflows, users, and goals.",
        },
        {
            q: "How is custom software different from ready-made software?",
            a: "Ready-made software offers pre-built features meant for everyone, often requiring you to adapt your processes to fit the software. Custom software is engineered specifically around your business rules, scales as you grow, has no recurring per-user licensing fees, and integrates directly with your existing infrastructure.",
        },
        {
            q: "How long does it take to build custom software?",
            a: "Timelines depend on the project scope and complexity. A small custom web or mobile module can take 4–8 weeks, while an enterprise-grade ERP, CRM, or fintech platform can take 3–6 months. We follow agile sprints so you see tangible progress every two weeks.",
        },
        {
            q: "Do you provide support after the software is launched?",
            a: "Yes! We offer comprehensive post-launch support and maintenance plans, including bug fixes, security updates, server monitoring, database optimization, and continuous feature enhancements.",
        },
        {
            q: "Is my data secure with a custom-built solution?",
            a: "Security is built into our development lifecycle from day one. We implement enterprise-grade encryption (AES-256), secure authentication, role-based access controls, OWASP compliance, and regular security audits to keep your data safe.",
        },
        {
            q: "What technologies do you use for custom software development?",
            a: "We work with a modern, future-ready tech stack including Java Spring Boot, Node.js, Python Django, React, Angular, React Native, Flutter, Swift, Kotlin, AWS, Docker, MongoDB, PostgreSQL, and RESTful microservices.",
        },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .build-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .build-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
        }
        .build-card:hover .card-icon {
          transform: scale(1.1);
        }
        .card-icon {
          transition: transform 0.35s ease;
        }
        .ind-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ind-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12);
        }
        .ind-card:hover .ind-icon {
          transform: scale(1.1);
        }
        .ind-icon {
          transition: transform 0.3s ease;
        }
        .why-card {
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -6px rgba(37, 99, 235, 0.12);
        }
        .tech-tile {
          transition: all 0.3s ease;
        }
        .tech-tile:hover {
          transform: translateY(-6px) scale(1.05);
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
        .code-window {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
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
                <div className="absolute top-28 left-[40%] w-3 h-3 rounded-full bg-purple-400/70" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <Code2 size={14} />
                                Custom Software Development
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Transforming{" "}
                                <span className="text-cyan-300 relative">
                                    Fintech
                                    <span className="absolute -right-3 top-1 w-[3px] h-[85%] bg-cyan-300 rounded-full" />
                                </span>
                            </h1>

                            <div className="flex items-center gap-3 mb-6 opacity-0 fade-in-element">
                                <span className="text-cyan-300 font-mono text-xl">&lt;/&gt;</span>
                                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                                    Haryvion Technology
                                </h2>
                            </div>

                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-lg opacity-0 fade-in-element">
                                At Haryvion Technology, we don't believe in one-size-fits-all software. As a
                                trusted{" "}
                                <span className="font-semibold text-white">
                                    custom software development company in India
                                </span>
                                , we design and build tailored software around how your business actually runs —
                                not the other way around. Whether you need a single custom application or a
                                complete digital ecosystem, our team delivers custom solutions built to scale with
                                you.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2.5 mb-10 opacity-0 fade-in-element">
                                {[
                                    { label: "Mobile Apps", icon: Smartphone },
                                    { label: "Web Platforms", icon: Globe },
                                    { label: "Enterprise Systems", icon: Building2 },
                                ].map((t) => (
                                    <span
                                        key={t.label}
                                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm"
                                    >
                                        <t.icon size={14} className="text-cyan-300" />
                                        {t.label}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 opacity-0 fade-in-element">
                                <Link
                                    to="/contact"
                                    className="btn-primary inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-full shadow-lg"
                                >
                                    <Send size={16} />
                                    Start Your Project
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                                >
                                    <Headphones size={16} />
                                    Talk to Our Experts
                                </Link>
                            </div>
                        </div>

                        {/* Right — Code Window Graphic */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[420px]">
                            {/* Floating Badge Top Left */}
                            <div className="absolute top-4 left-2 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Secure by Design</div>
                                    <div className="text-gray-500 text-xs">Built for Every Industry</div>
                                </div>
                            </div>

                            {/* Code IDE Window */}
                            <div className="code-window relative w-[420px] bg-slate-900 rounded-2xl border border-slate-700 p-6 z-10 text-left font-mono">
                                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                                    <span className="text-xs text-slate-500 ml-2">solution.ts</span>
                                </div>

                                <div className="text-xs leading-relaxed space-y-1">
                                    <p className="text-slate-500">// built around your business</p>
                                    <p>
                                        <span className="text-purple-400">const</span>{" "}
                                        <span className="text-blue-300">solution</span> = {"{"}
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-slate-300">industry:</span>{" "}
                                        <span className="text-emerald-300">'fintech'</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-slate-300">platform:</span>{" "}
                                        <span className="text-emerald-300">'web + mobile'</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-slate-300">scalable:</span>{" "}
                                        <span className="text-cyan-300">true</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-slate-300">secure:</span>{" "}
                                        <span className="text-cyan-300">true</span>
                                    </p>
                                    <p>{"}"};</p>
                                    <p className="mt-2">
                                        <span className="text-yellow-300">deploy</span>(solution);
                                    </p>
                                </div>
                            </div>

                            {/* Floating Badge Bottom Right */}
                            <div className="absolute -bottom-4 right-2 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">500+ Projects</div>
                                    <div className="text-gray-500 text-xs">Delivered On Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHAT WE BUILD ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Layers size={12} />
                            What We Build
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Custom Software Development{" "}
                            <span className="text-blue-600">Services We Offer</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whatWeBuild.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="build-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default"
                                >
                                    <div
                                        className={`card-icon w-14 h-14 ${item.bgIcon} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 text-white`}
                                    >
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ INDUSTRIES WE BUILD FOR ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Building2 size={12} />
                            Industries We Build For
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Software Built Around{" "}
                            <span className="text-blue-600">Every Industry</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
                            As a{" "}
                            <span className="font-semibold text-gray-700 underline decoration-blue-500 decoration-2 underline-offset-4">
                                Custom Application Development Company
                            </span>
                            , we've delivered software across a wide range of industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {industries.map((ind, i) => {
                            const Icon = ind.icon;
                            return (
                                <div
                                    key={i}
                                    className="ind-card bg-slate-50 border border-gray-100 rounded-2xl p-6 opacity-0 fade-in-element cursor-default"
                                >
                                    <div className="ind-icon w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-md shadow-blue-200">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base mb-2">{ind.title}</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {ind.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-center text-gray-400 text-xs sm:text-sm font-medium opacity-0 fade-in-element">
                        Whatever your industry, we bring the same commitment to quality, security, and
                        scalability to every custom solution we build.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PROCESS ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <RefreshCw size={12} />
                            How We Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Our Custom Software <span className="text-blue-600">Development Process</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 relative opacity-0 fade-in-element cursor-default hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-4 shadow-md shadow-blue-200">
                                    {step.step}
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Star size={12} />
                            Why Haryvion Technology
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Why Choose Haryvion Technology For{" "}
                            <span className="text-blue-600">Custom Software Development</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whyChooseUs.map((w, i) => {
                            const Icon = w.icon;
                            return (
                                <div
                                    key={i}
                                    className="why-card bg-slate-50/70 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 opacity-0 fade-in-element cursor-default"
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-200">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">{w.title}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                            {w.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ TECH STACK ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 opacity-0 fade-in-element">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                            Technologies We Use
                        </h2>
                        <p className="text-gray-500 text-sm">We build with a modern, future-ready technology stack.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-20">
                        {technologies.map((t, i) => (
                            <div
                                key={i}
                                className="tech-tile bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 opacity-0 fade-in-element cursor-default shadow-sm"
                            >
                                <span className="text-2xl">{t.icon}</span>
                                <span className="text-xs font-semibold text-gray-800 text-center">{t.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Banner */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden opacity-0 fade-in-element">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Let's Build Your Custom Software Solution
                            </h2>
                            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
                                Looking for a software development company in India that treats your business as
                                unique as it is? Whether you need a custom mobile application, a custom website,
                                or a custom application built from the ground up, Haryvion Technology is ready to
                                help.
                            </p>
                            <Link
                                to="/contact"
                                className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-full shadow-lg"
                            >
                                <Send size={18} />
                                Send Us a Message
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                            <MessageCircle size={12} /> FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Frequently Asked Questions
                        </h2>
                    </div>

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
                                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
                    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Rocket size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Ready to Build Software That Fits Your Business?
                    </h2>
                    <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                        Partner with Haryvion Technology for custom application development engineered around
                        your exact processes, security standards, and growth goals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-full shadow-xl"
                        >
                            Start Your Project
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
            </section>

            <Footer />
        </div>
    );
};

export default CustomSoftware;