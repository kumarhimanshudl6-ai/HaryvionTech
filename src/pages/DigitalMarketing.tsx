import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Megaphone,
    ArrowRight,
    Search,
    MousePointerClick,
    Share2,
    PenTool,
    Mail,
    BarChart,
    LineChart,
    Users,
    Rocket,
    Star,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    MessageCircle,
    Hash,
    Quote,
    Clock,
    Shield,
    RefreshCw,
    ShoppingCart,
    Code2,
    HeartPulse,
    Landmark,
    Home,
    GraduationCap,
    Utensils,
    Dumbbell,
    ChevronDown,
    CheckCircle2,
    Target,
    PlaySquare,
    Briefcase,
    Headphones,
    Eye,
    Trophy,
    Building2,
} from "lucide-react";

const DigitalMarketing = () => {
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
        { value: "250%", label: "ROI Increase" },
        { value: "500+", label: "Reach" },
        { value: "150+", label: "Campaigns" },
    ];

    const services = [
        {
            icon: Search,
            title: "SEO Optimization",
            description:
                "Dominate search rankings with our proven SEO strategies. Increase organic traffic and visibility across all major search engines.",
            features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
        },
        {
            icon: MousePointerClick,
            title: "PPC Advertising",
            description:
                "Maximize ROI with targeted pay-per-click campaigns. Reach the right audience at the right time with precision targeting.",
            features: ["Google Ads", "Facebook Ads", "Display Advertising", "Remarketing"],
        },
        {
            icon: Share2,
            title: "Social Media Marketing",
            description:
                "Build engaged communities and drive conversions through strategic social media campaigns across all platforms.",
            features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Advertising"],
        },
        {
            icon: PenTool,
            title: "Content Marketing",
            description:
                "Engage your audience with compelling content that educates, entertains, and converts visitors into customers.",
            features: ["Blog Writing", "Video Production", "Infographics", "Content Strategy"],
        },
        {
            icon: Mail,
            title: "Email Marketing",
            description:
                "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
            features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"],
        },
        {
            icon: BarChart,
            title: "Analytics & Reporting",
            description:
                "Make data-driven decisions with comprehensive analytics and detailed reporting on campaign performance.",
            features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Competitor Analysis"],
        },
    ];

    const approach = [
        {
            step: "1",
            title: "Research & Analysis",
            description:
                "We dive deep into your industry, competitors, and target audience to uncover opportunities and insights that drive strategy.",
            tags: ["Market Research", "Competitor Analysis"],
        },
        {
            step: "2",
            title: "Strategy Development",
            description:
                "Based on research, we create a comprehensive marketing strategy tailored to your business goals and budget.",
            tags: ["Goal Setting", "Channel Selection"],
        },
        {
            step: "3",
            title: "Campaign Execution",
            description:
                "Our expert team implements the strategy with precision, managing every aspect of your campaigns for optimal results.",
            tags: ["Content Creation", "Campaign Launch"],
        },
        {
            step: "4",
            title: "Optimization & Reporting",
            description:
                "Continuous monitoring and optimization ensure your campaigns perform at their best, with transparent reporting on all metrics.",
            tags: ["A/B Testing", "Performance Tracking"],
        },
    ];

    const resultsStats = [
        { icon: LineChart, color: "text-blue-500", value: "350%", label: "Average ROI Increase" },
        { icon: Users, color: "text-emerald-500", value: "205+", label: "Leads Generated" },
        { icon: Rocket, color: "text-sky-500", value: "500+", label: "Successful Campaigns" },
        { icon: Star, color: "text-amber-500", value: "98%", label: "Client Satisfaction" },
    ];

    const channels = [
        { icon: Search, color: "text-red-500", name: "Google Ads", desc: "Search & Display" },
        { icon: Facebook, color: "text-blue-600", name: "Facebook", desc: "Ads & Organic" },
        { icon: Instagram, color: "text-pink-600", name: "Instagram", desc: "Stories & Reels" },
        { icon: Linkedin, color: "text-blue-700", name: "LinkedIn", desc: "B2B Marketing" },
        { icon: Youtube, color: "text-red-600", name: "YouTube", desc: "Video Advertising" },
        { icon: Twitter, color: "text-sky-500", name: "Twitter", desc: "Engagement Ads" },
        { icon: MessageCircle, color: "text-green-500", name: "WhatsApp", desc: "Instant Communication" },
        { icon: Hash, color: "text-red-600", name: "Pinterest", desc: "Visual Discovery" },
    ];

    const testimonials = [
        {
            quote:
                "Very good experience. Professional team, fast support, and quality software services. Totally satisfied with their work.",
            name: "Shubham Verma",
            title: "Owner",
            initials: "SV",
            color: "bg-blue-600",
        },
        {
            quote:
                "The B2C platform is extremely user-friendly, and our customer satisfaction scores have reached new highs!",
            name: "Ashish Kumar",
            title: "Owner",
            initials: "AK",
            color: "bg-purple-600",
        },
        {
            quote:
                "An intuitive and reliable platform that greatly enhanced our customer experience.",
            name: "Vinite Shukla",
            title: "Owner",
            initials: "VS",
            color: "bg-pink-500",
        },
    ];

    const whyChooseUs = [
        { icon: Target, title: "Data-Driven Strategy", desc: "Every decision backed by analytics" },
        { icon: Users, title: "Expert Team", desc: "10+ years of expertise" },
        { icon: Clock, title: "Proven Results", desc: "300%+ ROI growth" },
        { icon: Headphones, title: "24/7 Support", desc: "Always available" },
        { icon: Shield, title: "Transparent Reporting", desc: "Clear performance reports" },
        { icon: RefreshCw, title: "Continuous Optimization", desc: "Constant performance tuning" },
    ];

    const industries = [
        { icon: ShoppingCart, title: "E-Commerce", desc: "Drive online sales with conversion-optimized campaigns" },
        { icon: Code2, title: "SaaS & Tech", desc: "Generate qualified leads and grow your user base" },
        { icon: HeartPulse, title: "Healthcare", desc: "Connect with patients through compliant marketing" },
        { icon: Landmark, title: "Finance", desc: "Build trust and acquire high-value clients" },
        { icon: Home, title: "Real Estate", desc: "Generate quality leads and close more deals" },
        { icon: GraduationCap, title: "Education", desc: "Increase enrollments and engagement" },
        { icon: Utensils, title: "Restaurants", desc: "Fill tables and boost online orders" },
        { icon: Dumbbell, title: "Fitness & Wellness", desc: "Grow membership and brand awareness" },
    ];

    const faqs = [
        {
            q: "How much does digital marketing cost, and is it a monthly retainer?",
            a: "Digital marketing costs depend on the services you need, your business goals, target audience, competition, and campaign scope. Most of our digital marketing services are offered on a monthly retainer basis, allowing us to continuously optimize campaigns and deliver long-term results. We also offer customized packages tailored to your budget and business objectives.",
        },
        {
            q: "How long does it take to see results from SEO or paid ads?",
            a: "Paid ads (PPC/Social Ads) can generate traffic and leads almost immediately after launch. SEO is a long-term strategy; while you may see initial movement in weeks, significant ranking improvements and organic traffic growth typically take 3 to 6 months depending on industry competitiveness.",
        },
        {
            q: "Which platforms do you run paid ads on?",
            a: "We manage comprehensive ad campaigns across Google Ads (Search, Display, Performance Max, YouTube), Meta (Facebook & Instagram), LinkedIn, Twitter (X), and emerging platforms based on where your target audience spends their time.",
        },
        {
            q: "Will I get regular performance and ROI reports?",
            a: "Yes. Transparency is a core value. We provide detailed monthly (and sometimes weekly) performance reports outlining key metrics, ROI, campaign insights, and strategic recommendations for the upcoming period.",
        },
        {
            q: "Do you provide Local SEO (Google Business Profile and local rankings)?",
            a: "Absolutely. We optimize your Google Business Profile, manage local citations, and implement local keyword strategies to ensure your business ranks highly when nearby customers search for your services.",
        },
        {
            q: "Who owns the ad accounts and social media pages?",
            a: "You retain 100% ownership of all your ad accounts, social media profiles, and data. We operate as an agency partner managing them on your behalf, ensuring you have full control and access at all times.",
        },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .feature-card { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15); }
        
        .step-card { transition: all 0.35s ease; }
        .step-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12); border-color: #3b82f6; }
        
        .stat-card { transition: all 0.3s ease; }
        .stat-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.15); }
        
        .industry-card { transition: all 0.3s ease; }
        .industry-card:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.15); }
        
        .social-float-1 { animation: float 6s ease-in-out infinite; }
        .social-float-2 { animation: float 5s ease-in-out infinite reverse; }
        .social-float-3 { animation: float 7s ease-in-out infinite 1s; }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

            <Navbar />

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
                />
                <div className="absolute top-32 left-[30%] w-4 h-4 rounded-full bg-purple-500/50 blur-sm" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 opacity-0 fade-in-element">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                <Megaphone size={14} />
                                Digital Marketing Excellence
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-2 opacity-0 fade-in-element">
                                Digital Growth
                            </h1>
                            <h1 className="text-5xl sm:text-6xl font-bold text-cyan-300 leading-tight mb-4 opacity-0 fade-in-element relative w-fit">
                                Experts
                                <span className="absolute -right-4 top-1 w-1 h-[85%] bg-cyan-300 rounded-full" />
                            </h1>

                            <div className="flex items-center gap-2 mb-6 opacity-0 fade-in-element">
                                <Target className="text-orange-400" size={24} />
                                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                    Haryvion Technology
                                </h2>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mb-6 opacity-0 fade-in-element">
                                {[
                                    { label: "SEO & SEM", icon: LineChart },
                                    { label: "Social Media", icon: Share2 },
                                    { label: "Email Marketing", icon: Mail },
                                ].map((t) => (
                                    <span
                                        key={t.label}
                                        className="inline-flex items-center gap-1.5 bg-blue-600/50 text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-blue-400/30"
                                    >
                                        <t.icon size={12} />
                                        {t.label}
                                    </span>
                                ))}
                            </div>

                            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8 max-w-lg opacity-0 fade-in-element">
                                <span className="font-bold text-white">Haryvion Technology</span> is a leading
                                software development company specialising in comprehensive digital media
                                marketing — leveraging modern tools and cutting-edge techniques to help
                                businesses of every size achieve their marketing goals efficiently.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-4 mb-10 opacity-0 fade-in-element">
                                {heroStats.map((s) => (
                                    <div
                                        key={s.label}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center min-w-[110px]"
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
                                    className="bg-white text-blue-800 font-bold px-7 py-3.5 rounded-full shadow-lg hover:-translate-y-1 transition-transform inline-flex items-center gap-2 text-sm"
                                >
                                    <Rocket size={16} /> Get Free Consultation
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="bg-blue-600/40 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full hover:bg-blue-600/60 transition-colors inline-flex items-center gap-2 text-sm backdrop-blur-sm"
                                >
                                    <Eye size={16} /> View Portfolio
                                </Link>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="relative hidden lg:flex items-center justify-center min-h-[500px] opacity-0 fade-in-element">
                            <div className="relative w-[340px] h-[380px] bg-gradient-to-b from-blue-500/20 to-blue-800/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] shadow-2xl flex items-end justify-center overflow-hidden">
                                <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=600&fit=crop&q=80"
                                    alt="Digital Marketing"
                                    className="w-full h-full object-cover rounded-[2.5rem] mix-blend-overlay"
                                />

                                {/* Floating Social Icons */}
                                <div className="absolute top-1/4 left-4 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shadow-xl social-float-1 z-20">
                                    <span className="font-bold text-xl">d</span>
                                </div>
                                <div className="absolute top-10 right-10 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl social-float-2 z-20">
                                    <Facebook size={24} />
                                </div>
                                <div className="absolute top-1/3 right-4 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shadow-xl social-float-3 z-20">
                                    <span className="font-bold text-xl">X</span>
                                </div>
                                <div className="absolute bottom-1/3 left-6 w-12 h-12 bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-xl social-float-2 z-20">
                                    <Linkedin size={24} />
                                </div>
                                <div className="absolute bottom-1/4 right-8 w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-xl social-float-1 z-20">
                                    <Hash size={24} />
                                </div>
                                <div className="absolute bottom-12 left-10 w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white rounded-2xl flex items-center justify-center shadow-xl social-float-3 z-20">
                                    <Instagram size={24} />
                                </div>
                                <div className="absolute top-1/2 -left-6 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl social-float-2 z-20">
                                    <MessageCircle size={20} />
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute -top-6 -left-12 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3 z-30">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Megaphone size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900">SEO & PPC</div>
                                        <div className="text-[9px] text-gray-500">Data Driven Campaigns</div>
                                    </div>
                                </div>

                                <div className="absolute bottom-16 -right-16 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3 z-30">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <LineChart size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900">Growth & Analytics</div>
                                        <div className="text-[9px] text-gray-500">Measurable Results</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SERVICES ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
                            <Target size={12} /> Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                            Complete Digital Marketing Solutions
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
                            From strategy to execution, we deliver comprehensive marketing services tailored to your goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <div key={i} className="feature-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element">
                                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-200 text-white">
                                    <s.icon size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-16">{s.description}</p>
                                <ul className="space-y-2">
                                    {s.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PROVEN APPROACH ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
                            <Briefcase size={12} /> Our Approach
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                            Proven Marketing Strategy
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                            Our strategic approach ensures every campaign is optimized for maximum impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {approach.map((a, i) => (
                            <div key={i} className="step-card bg-white rounded-2xl p-8 border-l-4 border-l-blue-600 shadow-sm border-y border-r border-gray-100 opacity-0 fade-in-element">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-5 shadow-md">
                                    {a.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5 h-10">{a.description}</p>
                                <div className="flex gap-2">
                                    {a.tags.map((tag) => (
                                        <span key={tag} className="bg-cyan-400 text-white text-[10px] font-bold px-3 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ RESULTS / STATS ═══════════════ */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="opacity-0 fade-in-element mb-12">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                            <Trophy size={12} /> Proven Results
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
                            Numbers That Speak For Themselves
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Real results from real campaigns - see the impact of effective digital marketing
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {resultsStats.map((s, i) => (
                            <div key={i} className="stat-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default text-center">
                                <s.icon size={32} className={`${s.color} mx-auto mb-3`} />
                                <div className="text-4xl font-black text-blue-600 mb-1">{s.value}</div>
                                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ CHANNELS & BANNER ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    {/* Banner */}
                    <div className="w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] bg-gradient-to-r from-purple-700 to-orange-400 rounded-3xl mb-16 relative overflow-hidden shadow-2xl opacity-0 fade-in-element flex items-center p-8 sm:p-12">
                        <div className="relative z-10 w-2/3">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-700 font-bold">H</span>
                                <span className="text-white font-bold text-sm tracking-widest">HARYVION TECH</span>
                            </div>
                            <div className="bg-yellow-400 text-black font-black text-2xl sm:text-3xl px-4 py-1 rounded w-fit mb-2 transform -skew-x-6">
                                HARYVION TECHNOLOGY
                            </div>
                            <h2 className="text-white font-black text-3xl sm:text-5xl leading-none italic tracking-wide mb-6 uppercase">
                                YOUR <br />TECHNOLOGY <br />GROWTH PARTNER
                            </h2>
                            <div className="flex gap-3 text-white">
                                <Instagram size={24} />
                                <Linkedin size={24} />
                                <MessageCircle size={24} />
                                <Facebook size={24} />
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-10 w-64 h-[90%] bg-pink-500 rounded-t-full border-4 border-white/20 shadow-xl overflow-hidden hidden sm:block">
                            <div className="w-20 h-20 bg-pink-300 rounded-full mx-auto mt-10" />
                        </div>
                    </div>

                    <div className="text-center mb-12 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                            <Share2 size={12} /> Marketing Channels
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
                            Multi-Channel Marketing Expertise
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Reach your audience wherever they are with our comprehensive channel expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {channels.map((c, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow opacity-0 fade-in-element cursor-default">
                                <c.icon size={36} className={`${c.color} mx-auto mb-3`} strokeWidth={1.5} />
                                <h4 className="font-bold text-gray-900 text-sm mb-1">{c.name}</h4>
                                <p className="text-[10px] text-gray-500">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           

            {/* ═══════════════ INDUSTRIES ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                            <Building2 size={12} /> Industries We Serve
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-3">Expertise Across Multiple Sectors</h2>
                        <p className="text-gray-500 text-sm">
                            Specialized marketing strategies tailored to your industry's unique challenges
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((ind, i) => (
                            <div key={i} className="industry-card bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm opacity-0 fade-in-element cursor-default">
                                <ind.icon size={32} className="text-blue-500 mx-auto mb-4" strokeWidth={1.5} />
                                <h4 className="font-bold text-gray-900 text-base mb-2">{ind.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
                            </div>
                        ))}
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-3 opacity-0 fade-in-element">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                                        {i + 1}. {faq.q}
                                    </span>
                                    <ChevronDown
                                        size={18}
                                        className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

                <div className="max-w-3xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
                    <Rocket size={48} className="text-white mx-auto mb-6" />

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready To Transform Your Business?</h2>
                    <p className="text-purple-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of companies experiencing unprecedented growth. Start your journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link
                            to="/contact"
                            className="bg-white text-purple-700 font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition-transform inline-flex items-center justify-center gap-2"
                        >
                            <PlaySquare size={18} /> Start Free Trial
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Clock size={18} /> Schedule Demo
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-purple-200 text-xs">
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={14} /> No credit card required</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={14} /> Cancel anytime</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 size={14} /> 24/7 support</span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DigitalMarketing;