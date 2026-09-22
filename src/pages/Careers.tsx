import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Users,
    Code2,
    Palette,
    Megaphone,
    Rocket,
    HeartHandshake,
    TrendingUp,
    Scale,
    IndianRupee,
    Heart,
    MapPin,
    Clock,
    Briefcase,
    Search,
    Mail,
    Phone,
    Linkedin,
    Upload,
    CheckCircle2,
    ChevronDown,
    Send,
    HelpCircle,
    Sparkles,
    Building2,
    Headphones,
} from "lucide-react";

const Careers = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        linkedin: "",
        coverLetter: "",
        source: "",
        notRobot: false,
    });
    const [fileName, setFileName] = useState("");
    const [submitted, setSubmitted] = useState(false);

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
        { value: "500+", label: "Team Members" },
        { value: "85+", label: "Countries" },
        { value: "4.9/5", label: "Work Rating" },
    ];

    const benefits = [
        {
            icon: Code2,
            title: "Cutting-Edge Technology",
            description:
                "Work with the latest tools and technologies. We invest in the best equipment and software for our team.",
        },
        {
            icon: HeartHandshake,
            title: "Collaborative Culture",
            description:
                "Join a diverse team of experts who support each other. Collaboration is at the heart of what we do.",
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            description:
                "Clear career paths with regular reviews and promotions. We're committed to your professional development.",
        },
        {
            icon: Scale,
            title: "Work-Life Balance",
            description:
                "Flexible hours, unlimited PTO, and remote work options. Your wellbeing is our priority.",
        },
        {
            icon: IndianRupee,
            title: "Competitive Salary",
            description:
                "Industry-leading compensation packages with equity options. We recognize and reward great work.",
        },
        {
            icon: Heart,
            title: "Health & Wellness",
            description:
                "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
        },
    ];

    const openPositions = [
        {
            title: "Sales Executive",
            tags: [
                { label: "On-site", icon: MapPin },
                { label: "Full-time", icon: Clock },
                { label: "Sales", icon: Briefcase },
            ],
            description:
                "A Sales Executive is responsible for generating new business opportunities and increasing company sales by promoting products and services to potential clients.",
            salary: "₹12,000–18,000",
            icon: Headphones,
        },
        {
            title: "React Developer",
            tags: [
                { label: "Remote", icon: MapPin },
                { label: "Full-time", icon: Clock },
                { label: "Engineering", icon: Code2 },
            ],
            description:
                "Build modern, high-performance web applications using React, TypeScript, and Next.js. Work on fintech and enterprise products used by thousands of users.",
            salary: "₹40,000–70,000",
            icon: Code2,
        },
        {
            title: "UI/UX Designer",
            tags: [
                { label: "Hybrid", icon: MapPin },
                { label: "Full-time", icon: Clock },
                { label: "Design", icon: Palette },
            ],
            description:
                "Design beautiful, intuitive interfaces for web and mobile products. Collaborate with product and engineering to ship delightful user experiences.",
            salary: "₹35,000–55,000",
            icon: Palette,
        },
        {
            title: "Digital Marketing Executive",
            tags: [
                { label: "On-site", icon: MapPin },
                { label: "Full-time", icon: Clock },
                { label: "Marketing", icon: Megaphone },
            ],
            description:
                "Plan and execute SEO, PPC, and social media campaigns. Analyze performance data and optimize for ROI across Google, Meta, and LinkedIn.",
            salary: "₹25,000–45,000",
            icon: Megaphone,
        },
    ];

    const hiringSteps = [
        {
            step: "1",
            title: "Application Review",
            description:
                "Submit your application online. Our team reviews every application within 5 business days.",
        },
        {
            step: "2",
            title: "Initial Screening",
            description:
                "30-minute phone call with our recruiter to discuss your background, experience, and career goals.",
        },
        {
            step: "3",
            title: "Technical Assessment",
            description:
                "Role-specific assessment or project to showcase your skills. Take-home assignment or live coding session.",
        },
        {
            step: "4",
            title: "Team Interviews",
            description:
                "Meet your potential team members and managers. 2–3 interviews focused on culture fit and collaboration.",
        },
        {
            step: "5",
            title: "Offer & Onboarding",
            description:
                "Receive your offer and join our team! Comprehensive onboarding program to set you up for success.",
        },
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.notRobot) {
            alert("Please confirm you are not a robot.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .benefit-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
        }
        .benefit-card:hover .benefit-icon {
          transform: scale(1.1);
        }
        .benefit-icon {
          transition: transform 0.35s ease;
        }
        .job-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .job-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
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
        .hero-stat {
          transition: all 0.3s ease;
        }
        .hero-stat:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-4px);
        }
        .step-item {
          transition: all 0.3s ease;
        }
        .step-item:hover {
          transform: translateX(4px);
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
                <div className="absolute bottom-20 right-[30%] w-3 h-3 rounded-full bg-purple-400/70" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <Users size={14} />
                                Join Our Team
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Grow With Our
                            </h1>
                            <h1 className="text-5xl sm:text-6xl font-bold text-cyan-300 leading-tight mb-4 opacity-0 fade-in-element relative w-fit">
                                Team
                                <span className="absolute -right-3 top-1 w-[3px] h-[85%] bg-cyan-300 rounded-full" />
                            </h1>

                            <div className="flex items-center gap-2 mb-6 opacity-0 fade-in-element">
                                <Users className="text-emerald-300" size={22} />
                                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                    Haryvion Technology
                                </h2>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2.5 mb-6 opacity-0 fade-in-element">
                                {[
                                    { label: "Tech Roles", icon: Code2 },
                                    { label: "Design Roles", icon: Palette },
                                    { label: "Marketing Roles", icon: Megaphone },
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
                                Join a team of{" "}
                                <span className="font-semibold text-white">passionate innovators</span> shaping
                                the future of technology. We're looking for talented individuals ready to make an
                                impact — grow your career with purpose, flexibility, and real opportunity.
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
                                    href="#positions"
                                    className="btn-primary inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-full shadow-lg"
                                >
                                    <Search size={18} />
                                    View Open Positions
                                </a>
                                <a
                                    href="#culture"
                                    className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                                >
                                    <Sparkles size={18} />
                                    Our Culture
                                </a>
                            </div>
                        </div>

                        {/* Right — photo area */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[440px]">
                            {/* Open Positions badge */}
                            <div className="absolute top-6 left-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Briefcase size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Open Positions</div>
                                    <div className="text-gray-500 text-xs">Full Time &amp; Remote</div>
                                </div>
                            </div>

                            {/* Glass frame + person */}
                            <div className="relative w-[320px] h-[400px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex items-end justify-center">
                                {/* Decorative shapes */}
                                <div className="absolute top-8 right-6 w-16 h-16 rounded-full bg-yellow-400/30 blur-xl" />
                                <div className="absolute bottom-20 left-4 w-12 h-12 rounded-full bg-pink-400/40 blur-lg" />
                                <div className="absolute top-1/3 left-6 w-8 h-8 rounded-full border-2 border-cyan-300/40" />

                                {/* Person placeholder */}
                                <div className="relative z-10 flex flex-col items-center pb-6">
                                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 mb-2 overflow-hidden border-4 border-white/30 shadow-xl flex items-center justify-center text-6xl">
                                        👩‍💻
                                    </div>
                                    {/* Laptop */}
                                    <div className="w-36 h-20 bg-slate-700 rounded-t-lg border-2 border-slate-600 shadow-lg relative">
                                        <div className="absolute inset-1.5 bg-gradient-to-br from-blue-300 to-cyan-200 rounded opacity-80" />
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-2 bg-slate-600 rounded-b" />
                                    </div>
                                </div>
                            </div>

                            {/* Grow Fast badge */}
                            <div className="absolute bottom-10 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <Rocket size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Grow Fast</div>
                                    <div className="text-gray-500 text-xs">Learn &amp; Lead</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY JOIN US ═══════════════ */}
            <section id="culture" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Sparkles size={12} />
                            Why Join Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            More Than Just{" "}
                            <span className="text-blue-600">A Job</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            We believe in creating an environment where innovation thrives and people grow
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <div
                                    key={i}
                                    className="benefit-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default text-center"
                                >
                                    <div className="benefit-icon w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-200">
                                        <Icon size={26} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{b.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ OPEN POSITIONS ═══════════════ */}
            <section id="positions" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Briefcase size={12} />
                            Open Positions
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Join Our Growing{" "}
                            <span className="text-blue-600">Team</span>
                        </h2>
                        <p className="text-gray-500">
                            Find your next opportunity and make an impact from day one
                        </p>
                    </div>

                    <div className="space-y-5 mb-12">
                        {openPositions.map((job, i) => {
                            const Icon = job.icon;
                            return (
                                <div
                                    key={i}
                                    className="job-card bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                                                    <Icon size={18} className="text-blue-600" />
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {job.tags.map((tag) => (
                                                    <span
                                                        key={tag.label}
                                                        className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                                                    >
                                                        <tag.icon size={12} />
                                                        {tag.label}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-gray-500 text-sm leading-relaxed mb-3">
                                                {job.description}
                                            </p>
                                            <div className="text-sm font-semibold text-gray-700">{job.salary}</div>
                                        </div>

                                        <a
                                            href="#apply"
                                            className="btn-primary inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-sm flex-shrink-0 self-start"
                                        >
                                            Apply Now
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Don't see the right position */}
                    <div className="text-center opacity-0 fade-in-element">
                        <p className="text-gray-500 mb-5">Don't see the right position?</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="mailto:haryviontechnologyindia@gmail.com"
                                className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full text-sm"
                            >
                                <Mail size={16} />
                                Send Us Your Resume
                            </a>
                            <a
                                href="#hiring-process"
                                className="btn-primary inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-sm"
                            >
                                <Users size={16} />
                                Hiring Process
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ HIRING PROCESS ═══════════════ */}
            <section id="hiring-process" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Your Journey{" "}
                            <span className="text-blue-600">With Us</span>
                        </h2>
                        <p className="text-gray-500">
                            A transparent and efficient hiring process designed to get to know you
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block" />

                        <div className="space-y-6">
                            {hiringSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className="step-item relative flex gap-5 opacity-0 fade-in-element cursor-default"
                                >
                                    {/* Dot on line */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-blue-200">
                                            {step.step}
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <h3 className="font-bold text-gray-900 text-base mb-1.5">{step.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ APPLICATION FORM ═══════════════ */}
            <section id="apply" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Send size={12} />
                            Apply Now
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Start Your Journey{" "}
                            <span className="text-blue-600">Today</span>
                        </h2>
                        <p className="text-gray-500">
                            Fill out the form below and we'll be in touch shortly
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center opacity-0 fade-in-element">
                            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5">
                                <CheckCircle2 size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                            <p className="text-gray-500 mb-6">
                                Thank you for applying to Haryvion Technology. Our team will review your
                                application and get back to you within 5 business days.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-blue-600 font-semibold text-sm hover:underline"
                            >
                                Submit another application
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10 opacity-0 fade-in-element space-y-5"
                        >
                            {/* Name row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Position */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Position <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="position"
                                    required
                                    value={formData.position}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-gray-700"
                                >
                                    <option value="">Select a position</option>
                                    {openPositions.map((j) => (
                                        <option key={j.title} value={j.title}>
                                            {j.title}
                                        </option>
                                    ))}
                                    <option value="Other">Other / General Application</option>
                                </select>
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    LinkedIn Profile
                                </label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                            </div>

                            {/* Resume */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Resume/CV <span className="text-red-500">*</span>
                                </label>
                                <label className="flex items-center gap-3 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm cursor-pointer hover:border-blue-400 transition-colors">
                                    <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-medium px-3 py-1.5 rounded-lg text-xs">
                                        <Upload size={14} />
                                        Choose File
                                    </span>
                                    <span className="text-gray-400 text-xs">
                                        {fileName || "No file chosen"}
                                    </span>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        required
                                        onChange={handleFile}
                                        className="hidden"
                                    />
                                </label>
                                <p className="text-[11px] text-gray-400 mt-1.5">
                                    Upload your resume (PDF, DOC, DOCX · Max 5MB)
                                </p>
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Cover Letter
                                </label>
                                <textarea
                                    name="coverLetter"
                                    rows={4}
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    placeholder="Tell us why you'd be a great fit for this role..."
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                                />
                            </div>

                            {/* Source */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    How did you hear about us?
                                </label>
                                <select
                                    name="source"
                                    value={formData.source}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-gray-700"
                                >
                                    <option value="">Select an option</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Website">Company Website</option>
                                    <option value="Referral">Employee Referral</option>
                                    <option value="Job Portal">Job Portal (Naukri, Indeed, etc.)</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Captcha */}
                            <label className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:border-blue-300 transition-colors">
                                <input
                                    type="checkbox"
                                    name="notRobot"
                                    checked={formData.notRobot}
                                    onChange={handleChange}
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-600">I am not a robot</span>
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200 flex items-center justify-center gap-2"
                            >
                                <Send size={16} />
                                Submit Application
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* ═══════════════ CONTACT CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 relative overflow-hidden">
                <div className="absolute top-10 left-16 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-white/30" />

                <div className="max-w-3xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
                    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <HeartHandshake size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Questions About Working Here?
                    </h2>
                    <p className="text-purple-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                        Our recruitment team is here to help. Reach out and we'll answer any questions
                        about roles, culture, or the application process.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a
                            href="mailto:haryviontechnologyindia@gmail.com"
                            className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-full shadow-xl"
                        >
                            <Mail size={18} />
                            haryviontechnologyindia@gmail.com
                        </a>
                        <a
                            href="#positions"
                            className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10"
                        >
                            <HelpCircle size={18} />
                            View FAQs
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-purple-200 text-xs">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> Equal opportunity employer
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> Diverse &amp; inclusive
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> Remote-friendly
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;