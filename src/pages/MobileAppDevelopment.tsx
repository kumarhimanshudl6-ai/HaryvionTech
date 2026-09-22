import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Smartphone,
    Layers,
    ShoppingBag,
    MessageSquare,
    Building2,
    Lightbulb,
    PenTool,
    Code2,
    Rocket,
    Users,
    Clock,
    Shield,
    Headphones,
    IndianRupee,
    RefreshCw,
    Star,
    ChevronDown,
    ArrowRight,
    CheckCircle2,
    Zap,
    Globe,
    Apple,
    MessageCircle,
    Check,
    Bell,
    MapPin,
    Wifi
} from "lucide-react";

const MobileAppDevelopment = () => {
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
        { value: "200+", label: "Apps Built" },
        { value: "4.9/5", label: "App Rating" },
        { value: "98%", label: "Success Rate" },
    ];

    const appTypes = [
        {
            icon: Apple,
            iconBg: "bg-blue-600",
            title: "iOS App Development",
            description: "Native iOS applications built with Swift and SwiftUI, optimized for iPhone, iPad, and Apple Watch.",
            points: ["Swift & SwiftUI", "App Store Optimization", "Apple Guidelines Compliance"],
        },
        {
            icon: Smartphone,
            iconBg: "bg-cyan-500",
            title: "Android App Development",
            description: "High-performance Android apps using Kotlin and Jetpack Compose for all Android devices.",
            points: ["Kotlin & Java", "Material Design 3", "Play Store Ready"],
        },
        {
            icon: Layers,
            iconBg: "bg-indigo-500",
            title: "Cross-Platform Apps",
            description: "Build once, deploy everywhere with React Native and Flutter for iOS and Android.",
            points: ["React Native & Flutter", "Cost-Effective Solution", "Faster Time to Market"],
        },
        {
            icon: ShoppingBag,
            iconBg: "bg-sky-500",
            title: "E-Commerce Apps",
            description: "Feature-rich shopping apps with payment gateways, inventory management, and analytics.",
            points: ["Payment Integration", "Order Management", "Push Notifications"],
        },
        {
            icon: MessageSquare,
            iconBg: "bg-blue-400",
            title: "Social Media Apps",
            description: "Engaging social platforms with real-time chat, media sharing, and user interactions.",
            points: ["Real-time Messaging", "Media Upload/Share", "Social Features"],
        },
        {
            icon: Building2,
            iconBg: "bg-blue-300",
            title: "Enterprise Apps",
            description: "Scalable business applications with advanced security, workflow automation, and integrations.",
            points: ["CRM Integration", "Advanced Security", "Custom Workflows"],
        },
    ];

    const features = [
        {
            icon: Smartphone,
            title: "Native iOS & Android",
            description: "Platform-specific apps built with Swift/SwiftUI and Kotlin/Jetpack Compose for maximum performance.",
            points: ["Swift & SwiftUI", "Kotlin & Jetpack", "App Store guidelines", "Native performance"],
        },
        {
            icon: Layers,
            title: "Cross-Platform Apps",
            description: "Single codebase for iOS and Android using React Native or Flutter — faster delivery, lower cost.",
            points: ["React Native", "Flutter / Dart", "Shared business logic", "Near-native performance"],
        },
        {
            icon: Bell,
            title: "Push Notifications",
            description: "Engage users with targeted push notifications, in-app messaging, and real-time alerts.",
            points: ["FCM & APNs", "Segmented campaigns", "Rich media notifications", "Analytics tracking"],
        },
        {
            icon: MapPin,
            title: "Location & Maps",
            description: "GPS tracking, geofencing, route optimization, and map integrations for location-based services.",
            points: ["Google Maps / Mapbox", "Real-time tracking", "Geofencing", "Offline maps"],
        },
        {
            icon: Shield,
            title: "Secure Authentication",
            description: "Biometric login, OTP verification, social auth, and encrypted session management.",
            points: ["Fingerprint / Face ID", "OTP & social login", "JWT tokens", "Encrypted storage"],
        },
        {
            icon: Wifi,
            title: "Offline-First Design",
            description: "Apps that work without internet — local storage, background sync, and conflict resolution.",
            points: ["Local database (SQLite)", "Background sync", "Conflict resolution", "Cached content"],
        },
    ];

    const workflow = [
        {
            step: "1",
            icon: Lightbulb,
            title: "Requirement Analysis",
            description: "We understand your business goals, user needs, and technical requirements to plan the best solution.",
        },
        {
            step: "2",
            icon: PenTool,
            title: "UI/UX Design",
            description: "Clean layouts, intuitive flows, and engaging visuals are designed to enhance user experience.",
        },
        {
            step: "3",
            icon: Code2,
            title: "Development Phase",
            description: "Our developers build secure, high-performance applications with continuous testing and reviews.",
        },
        {
            step: "4",
            icon: Rocket,
            title: "Deployment & Growth",
            description: "We launch your app smoothly and provide ongoing support, updates, and performance improvements.",
        },
    ];

    const techStack = [
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🤖" },
        { name: "React Native", icon: "⚛️" },
        { name: "Flutter", icon: "🦋" },
        { name: "Node.js", icon: "🟢" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "Firebase", icon: "🔥" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "REST API", icon: "⚡" },
        { name: "Git", icon: "📦" },
    ];

    const differentiators = [
        {
            icon: Users,
            title: "Expert Team",
            description: "Our experienced developers and designers bring years of expertise in mobile app development across various industries.",
        },
        {
            icon: Clock,
            title: "On-Time Delivery",
            description: "We follow agile methodologies to ensure your project is delivered on time without compromising quality.",
        },
        {
            icon: Shield,
            title: "Built with Security",
            description: "Built with security best practices and scalable architecture to grow with your business needs.",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Round-the-clock technical support and maintenance to keep your app running smoothly.",
        },
        {
            icon: IndianRupee,
            title: "Cost-Effective",
            description: "Competitive pricing with transparent costs and no hidden charges for quality app development.",
        },
        {
            icon: RefreshCw,
            title: "Agile Approach",
            description: "Agile development and rigorous testing for quality assurance and continuous improvement.",
        },
    ];

    const plans = [
        {
            name: "Basic App",
            price: "₹80,000",
            period: "+ GST",
            subtitle: "Perfect for startups",
            description: "Basic app to validate your business idea.",
            specs: ["Single Platform (iOS or Android)", "5 Screens/Pages", "Basic UI/UX Design", "API Integration", "3 Months Support"],
            popular: false,
            btnText: "Get Started"
        },
        {
            name: "Professional",
            price: "₹1,20,000",
            period: "+ GST",
            subtitle: "Most popular choice",
            description: "React Native or Flutter for both platforms.",
            specs: ["Cross-Platform (iOS & Android)", "15 Screens/Pages", "Premium UI/UX Design", "Advanced Features", "6 Months Support"],
            popular: true,
            btnText: "Get Started"
        },
        {
            name: "Enterprise",
            price: "₹1,50,000",
            period: "+ GST",
            subtitle: "For large businesses",
            description: "Large-scale app for established businesses.",
            specs: ["Cross-Platform + Web", "Unlimited Screens", "Custom Design System", "All Advanced Features", "12 Months Support"],
            popular: false,
            btnText: "Contact Us"
        },
    ];

    const faqs = [
        {
            q: "How much does it cost to build a mobile app?",
            a: "The cost of mobile app development depends on your app's features, complexity, design, platform, and third-party integrations. A simple app typically costs less than a feature-rich application with custom functionality, payment gateways, APIs, real-time features, or advanced security. We provide a free consultation and a customized quotation based on your business requirements and project scope.",
        },
        {
            q: "How long does app development typically take?",
            a: "App development timelines vary based on scope. A basic app can take 4–6 weeks, while a complex cross-platform or native application with backend integrations usually takes 8–16 weeks. We work with agile sprints to ensure steady progress and regular milestone demos.",
        },
        {
            q: "Do you build for both Android and iOS?",
            a: "Yes! We build native apps for Android (Kotlin/Java) and iOS (Swift/SwiftUI), as well as cross-platform mobile apps using React Native and Flutter that work seamlessly on both operating systems from a single codebase.",
        },
        {
            q: "Should I choose native or cross-platform development?",
            a: "Native development is ideal for maximum performance, hardware-specific features, or complex graphics. Cross-platform development (React Native/Flutter) is perfect for faster time-to-market, lower budgets, and maintaining a single codebase across iOS and Android with near-native performance.",
        },
        {
            q: "Will I own the app's source code after development?",
            a: "Yes, 100%. Upon completion and final payment, we hand over full IP rights, source code repositories, design files, and documentation directly to you.",
        },
        {
            q: "Do you publish the app on the Play Store/App Store for me?",
            a: "Yes! We manage the entire submission and publishing process on Google Play Store and Apple App Store, ensuring your application strictly complies with all guidelines and policies.",
        },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
                .app-card { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
                .app-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15); }
                .app-card:hover .app-icon { transform: scale(1.1); }
                .app-icon { transition: transform 0.35s ease; }
                
                .diff-card { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
                .diff-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12); }
                .diff-card:hover .diff-icon { transform: scale(1.1); }
                .diff-icon { transition: transform 0.3s ease; }
                
                .tech-tile { transition: all 0.3s ease; }
                .tech-tile:hover { transform: translateY(-6px) scale(1.05); box-shadow: 0 12px 28px -8px rgba(37, 99, 235, 0.2); border-color: #93c5fd; }
                
                .plan-card { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
                .plan-card:hover { transform: translateY(-8px); }
                
                .btn-primary { transition: all 0.3s ease; }
                .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px -4px rgba(37, 99, 235, 0.45); }
                
                .btn-outline { transition: all 0.3s ease; }
                .btn-outline:hover { transform: translateY(-2px); }
                
                .hero-stat { transition: all 0.3s ease; }
                .hero-stat:hover { background: rgba(255,255,255,0.2); transform: translateY(-4px); }
                
                .float-phone { animation: floatPhone 6s ease-in-out infinite; }
                @keyframes floatPhone {
                    0%, 100% { transform: translateY(0px) rotate(-6deg); }
                    50% { transform: translateY(-12px) rotate(-4deg); }
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
                <div className="absolute top-28 right-[40%] w-3 h-3 rounded-full bg-purple-400/70" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <Smartphone size={14} />
                                App Development Services
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Custom Mobile App
                            </h1>
                            <h1 className="text-5xl sm:text-6xl font-bold text-cyan-300 leading-tight mb-4 opacity-0 fade-in-element relative">
                                Solutions
                                <span className="absolute -right-3 top-1 w-[3px] h-[85%] bg-cyan-300 rounded-full" />
                            </h1>

                            <div className="flex items-center gap-2 mb-6 opacity-0 fade-in-element">
                                <Smartphone className="text-cyan-300" size={20} />
                                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                    Haryvion Technology
                                </h2>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2.5 mb-6 opacity-0 fade-in-element">
                                {["iOS", "Android", "Cross-Platform"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-lg opacity-0 fade-in-element">
                                <span className="font-semibold text-white">Haryvion Technology</span> is a
                                leading custom software and app development company in India, delivering
                                scalable, secure, and high-performance mobile solutions for startups,
                                enterprises, and growing businesses worldwide.
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
                                    Start Your Project
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="btn-outline inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/20"
                                >
                                    <Globe size={18} />
                                    View Portfolio
                                </Link>
                            </div>
                        </div>

                        {/* Right — mockups */}
                        <div className="relative hidden lg:flex items-center justify-center opacity-0 fade-in-element min-h-[440px]">
                            {/* iOS & Android badge */}
                            <div className="absolute top-6 left-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Smartphone size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">iOS &amp; Android</div>
                                    <div className="text-gray-500 text-xs">Native &amp; Cross Platform</div>
                                </div>
                            </div>

                            {/* Floating sphere graphic */}
                            <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 opacity-40 blur-lg" />
                            <div className="absolute bottom-16 right-6 w-20 h-20 rounded-full bg-pink-500/80 shadow-xl" />

                            {/* Back Phone */}
                            <div className="absolute right-12 top-10 w-52 h-[380px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-700 shadow-2xl overflow-hidden rotate-[12deg] z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10" />
                                <div className="h-full bg-gradient-to-b from-indigo-50 to-blue-100 p-4 pt-8">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-xs font-bold text-gray-800">Hi Jack</div>
                                        <div className="w-6 h-6 rounded-full bg-blue-600" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                                        {["Work", "Meeting", "Study"].map((t) => (
                                            <div key={t} className="bg-white rounded-lg p-1.5 text-center text-[8px] font-bold text-gray-700 shadow-sm">
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-white rounded-xl p-2 shadow-sm flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-blue-100" />
                                                <div className="flex-1">
                                                    <div className="h-1.5 bg-slate-200 rounded w-16 mb-1" />
                                                    <div className="h-1 bg-slate-100 rounded w-10" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Front Phone */}
                            <div className="float-phone relative w-56 h-[400px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-700 shadow-2xl overflow-hidden z-20">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10" />
                                <div className="h-full bg-white p-4 pt-8 flex flex-col justify-between">
                                    <div>
                                        <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-3 flex flex-col justify-between mb-4 border border-blue-100">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                                <Smartphone size={16} className="text-white" />
                                            </div>
                                            <div className="text-xs font-bold text-gray-800">Work on Task</div>
                                        </div>
                                        <div className="text-xs font-semibold text-gray-700 mb-1">Make Progress</div>
                                        <div className="text-[10px] text-gray-400">Use a to-do list to make the most of your time.</div>
                                    </div>
                                    <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md">
                                        Get Started
                                    </button>
                                </div>
                            </div>

                            {/* Secure Badge */}
                            <div className="absolute bottom-6 right-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <Shield size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Secure &amp; Scalable</div>
                                    <div className="text-gray-500 text-xs">Enterprise Ready</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ APP TYPES WE BUILD ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Smartphone size={12} />
                            App Types We Build
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Secure &amp; Scalable{" "}
                            <span className="text-blue-600">Mobile App Development</span>
                        </h2>
                        <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                            At <span className="font-semibold text-gray-700">Haryvion Technology</span>, we are a{" "}
                            <span className="font-semibold text-gray-700">custom software &amp; app development company in India</span>{" "}
                            delivering secure, scalable, and performance-driven mobile solutions. Our expertise spans{" "}
                            <span className="font-semibold text-gray-700">Android and iOS app development services</span>, tailored to meet
                            diverse business models and industry needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {appTypes.map((app, i) => {
                            const Icon = app.icon;
                            return (
                                <div
                                    key={i}
                                    className="app-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default"
                                >
                                    <div
                                        className={`app-icon w-14 h-14 ${app.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-200`}
                                    >
                                        <Icon size={26} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{app.description}</p>
                                    <ul className="space-y-2">
                                        {app.points.map((p) => (
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

            {/* ═══════════════ APP FEATURES (Replaces Services in previous prompt) ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <Star size={12} />
                            Key Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            App Development <span className="text-blue-600">Features</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="app-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element">
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="text-blue-600" size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-5 text-sm">{feature.description}</p>
                                    <div className="space-y-2.5">
                                        {feature.points.map((point, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-2.5">
                                                <Check className="text-blue-500 flex-shrink-0" size={14} />
                                                <span className="text-gray-700 text-sm">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/* ═══════════════ WORKFLOW / JOURNEY ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <RefreshCw size={12} />
                            Our Workflow
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Our App Development <span className="text-blue-600">Journey</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                            We follow a transparent, structured, and result-driven process to deliver
                            scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {workflow.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 relative opacity-0 fade-in-element cursor-default hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-4 shadow-md shadow-blue-200">
                                        {step.step}
                                    </div>
                                    <Icon size={28} className="text-blue-600 mb-3" />
                                    <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ TECH STACK & DIFFERENTIATORS ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* Tech Stack */}
                    <div className="text-center mb-12 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Layers size={12} />
                            Technology Stack
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Technologies <span className="text-blue-600">We Use</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-24">
                        {techStack.map((t, i) => (
                            <div
                                key={i}
                                className="tech-tile bg-slate-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-2.5 opacity-0 fade-in-element cursor-default shadow-sm"
                            >
                                <span className="text-2xl">{t.icon}</span>
                                <span className="text-xs font-semibold text-gray-800 text-center">{t.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* What Makes Us Different */}
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <Star size={12} />
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            What Makes Us <span className="text-blue-600">Different</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                            We deliver exceptional mobile app solutions with a focus on innovation and quality
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {differentiators.map((d, i) => {
                            const Icon = d.icon;
                            return (
                                <div
                                    key={i}
                                    className="diff-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default text-center"
                                >
                                    <div className="diff-icon w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-200">
                                        <Icon size={26} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{d.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{d.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRICING ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md shadow-blue-200">
                            <IndianRupee size={12} />
                            Pricing Plans
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Flexible <span className="text-blue-600">Pricing Options</span>
                        </h2>
                        <p className="text-gray-500">
                            Choose the perfect plan for your mobile app development needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`plan-card relative bg-white rounded-2xl p-8 border-2 opacity-0 fade-in-element cursor-default ${plan.popular
                                    ? "border-blue-500 shadow-xl shadow-blue-100 scale-[1.02]"
                                    : "border-gray-100 shadow-sm"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
                                        Popular
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                                    <p className="text-gray-400 text-xs mb-4">{plan.description}</p>
                                    <div className="text-3xl font-black text-blue-600">
                                        {plan.price}
                                        <span className="text-base font-semibold text-gray-500"> {plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.specs.map((f) => (
                                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                                            <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
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
                                    {plan.btnText}
                                </Link>
                            </div>
                        ))}
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
                                className="bg-slate-50 border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
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
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden opacity-0 fade-in-element">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Smartphone size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Turn Your Idea into a Mobile App?
                            </h2>
                            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                                Partner with Haryvion Technology to build custom, high-performance iOS and
                                Android mobile applications tailored for your growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-full"
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
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MobileAppDevelopment;