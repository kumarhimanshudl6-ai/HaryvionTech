import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    MessageCircle,
    LayoutGrid,
    ArrowRight,
    Globe,
    Target,
    Eye,
    HeartHandshake,
    Rocket,
    Gem,
    CheckCircle2,
    Users,
    Lightbulb,
    ShieldCheck,
    TrendingUp,
    Clock,
    Infinity as InfinityIcon,
    Headphones,
    Award,
    Handshake,
    Building2,
    Cpu,
    Code,
    Cloud,
    Lock,
    BarChart,
    Compass,
    Map,
    BadgeCheck
} from "lucide-react";

const Mission = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

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

    const partners = [
        { icon: Building2, label: "Banking Partners" },
        { icon: Building2, label: "Financial Institutions" },
        { icon: Cpu, label: "Tech Vendors" },
        { icon: Code, label: "Software Providers" },
        { icon: Cloud, label: "Cloud Partners" },
        { icon: Lock, label: "Security Partners" },
        { icon: BarChart, label: "Analytics Partners" },
    ];

    const approachCards = [
        {
            icon: Users,
            color: "from-blue-400 to-blue-600",
            title: "Client-Centric Approach",
            desc: "We place our clients at the heart of everything we do, understanding their unique challenges and crafting tailored solutions.",
            points: ["Deep client collaboration", "Customized solutions", "Continuous support"]
        },
        {
            icon: Lightbulb,
            color: "from-purple-400 to-purple-600",
            title: "Innovation & Technology",
            desc: "We leverage cutting-edge technologies and innovative methodologies to deliver future-ready solutions.",
            points: ["Latest tech stack", "Agile development", "Continuous learning"]
        },
        {
            icon: ShieldCheck,
            color: "from-rose-400 to-rose-600",
            title: "Quality & Reliability",
            desc: "Our rigorous quality assurance processes ensure every solution we deliver is robust, secure, and reliable.",
            points: ["Comprehensive testing", "Security-first approach", "Performance optimization"]
        },
        {
            icon: HeartHandshake,
            color: "from-cyan-400 to-cyan-600",
            title: "Team Excellence",
            desc: "Our talented team of experts brings diverse skills, experience, and dedication to every project.",
            points: ["Skilled professionals", "Collaborative culture", "Growth mindset"]
        },
        {
            icon: TrendingUp,
            color: "from-amber-400 to-orange-500",
            title: "Scalable Solutions",
            desc: "We design solutions that grow with your business, ensuring long-term value and adaptability.",
            points: ["Future-proof architecture", "Flexible infrastructure", "Easy maintenance"]
        },
        {
            icon: Clock,
            color: "from-indigo-400 to-indigo-600",
            title: "Timely Delivery",
            desc: "We respect deadlines and deliver projects on time without compromising on quality or functionality.",
            points: ["Project management", "Clear milestones", "Transparent updates"]
        }
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
                .glass-card-hover {
                    transition: all 0.3s ease;
                }
                .glass-card-hover:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.3);
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
                }
                .feature-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
                }
                .feature-card:hover .icon-wrapper {
                    transform: scale(1.1);
                }
                .icon-wrapper {
                    transition: transform 0.3s ease;
                }
                .btn-primary { transition: all 0.3s ease; }
                .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px -4px rgba(37, 99, 235, 0.45); }
                .btn-outline { transition: all 0.3s ease; }
                .btn-outline:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); }
                
                /* Ring Animation */
                .float-slow { animation: float 6s ease-in-out infinite; }
                .float-slower { animation: float 8s ease-in-out infinite reverse; }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1e4ed8]">
                {/* Background accents */}
                <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-purple-500/50 blur-xl" />
                <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-blue-400/20 blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 opacity-0 fade-in-element">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                Our Direction &amp; Purpose
                            </div>

                            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4 opacity-0 fade-in-element">
                                Driving Digital <br />
                                <span className="text-cyan-300 relative inline-block">
                                    Growth
                                    <span className="absolute -right-4 top-0 w-[2px] h-full bg-cyan-300 animate-pulse" />
                                </span>
                            </h1>

                            <h2 className="text-xl sm:text-2xl font-medium text-white flex items-center gap-2 mb-6 opacity-0 fade-in-element">
                                <Globe className="text-emerald-400" size={24} />
                                Mission &amp; Partnerships <br className="hidden sm:block" /> Guiding Our Journey
                            </h2>

                            <div className="flex flex-wrap gap-3 mb-6 opacity-0 fade-in-element">
                                {['Target', 'Eye', 'Handshake'].map((icon, i) => {
                                    const labels = ['Clear Mission', 'Bold Vision', 'Strong Partnerships'];
                                    const Icons = [Target, Eye, Handshake];
                                    const IconComp = Icons[i];
                                    return (
                                        <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                            <IconComp size={14} className="text-blue-300" />
                                            {labels[i]}
                                        </span>
                                    );
                                })}
                            </div>

                            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8 max-w-lg opacity-0 fade-in-element">
                                The mission of <span className="font-bold text-white">Haryvion Technology</span> is to <span className="font-bold text-white">simplify financial transactions</span> and deliver a seamless, trustworthy user experience across every touchpoint. We collaborate with <span className="font-bold text-white">banks, financial institutions, software vendors</span>, and technology providers, enabling integrated solutions that cover the entire financial ecosystem.
                            </p>

                            {/* Small Glass Cards */}
                            <div className="grid grid-cols-3 gap-3 mb-10 opacity-0 fade-in-element">
                                {[
                                    { icon: Target, title: "Our Mission", desc: "Simplify fintech & deliver seamless digital experiences" },
                                    { icon: Eye, title: "Our Vision", desc: "Lead global fintech innovation across every market" },
                                    { icon: Handshake, title: "Our Partners", desc: "200+ global banks, institutions & tech providers" }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="glass-card-hover bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 cursor-default">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mb-2">
                                                <Icon size={14} className="text-cyan-300" />
                                            </div>
                                            <div className="font-bold text-white text-xs mb-1">{item.title}</div>
                                            <div className="text-[10px] text-blue-200 leading-tight">{item.desc}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-wrap gap-4 opacity-0 fade-in-element">
                                <Link to="#mission-details" className="btn-primary bg-white text-blue-700 font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2">
                                    <Compass size={16} /> Explore Our Mission
                                </Link>
                                <Link to="#partners" className="btn-outline border border-white/30 text-white font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                                    <Handshake size={16} /> Our Partners
                                </Link>
                            </div>
                        </div>

                        {/* Right Graphic - Interlocking Rings Concept */}
                        <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center opacity-0 fade-in-element hidden lg:flex">

                            {/* Top Left Ring - Orange (Mission) */}
                            <div className="absolute top-10 left-10 w-48 h-48 rounded-full border-[12px] border-orange-500 shadow-xl flex items-center justify-center z-10 float-slow bg-blue-700/20 backdrop-blur-sm">
                                <div className="text-center">
                                    <Rocket size={32} className="text-orange-400 mx-auto mb-1" />
                                    <span className="text-orange-500 font-black tracking-widest text-sm uppercase">Mission</span>
                                </div>
                            </div>

                            {/* Top Right Ring - Dark Blue (Vision) */}
                            <div className="absolute top-10 right-10 w-48 h-48 rounded-full border-[12px] border-slate-800 shadow-xl flex items-center justify-center z-20 float-slower bg-blue-700/20 backdrop-blur-sm">
                                <div className="text-center">
                                    <Eye size={32} className="text-slate-700 mx-auto mb-1" />
                                    <span className="text-slate-800 font-black tracking-widest text-sm uppercase">Vision</span>
                                </div>
                            </div>

                            {/* Bottom Center Ring - White (Values) */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border-[12px] border-white shadow-2xl flex items-center justify-center z-30 float-slow bg-blue-700/20 backdrop-blur-sm">
                                <div className="text-center">
                                    <HeartHandshake size={32} className="text-emerald-500 mx-auto mb-1" />
                                    <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">Values</span>
                                </div>
                            </div>

                            {/* Floating Stats Badges */}
                            <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-2.5 flex items-center gap-3 z-40 animate-bounce" style={{ animationDuration: '4s' }}>
                                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                                    <Globe size={16} className="text-purple-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-900">30+ Countries</div>
                                    <div className="text-[10px] text-gray-500">Global Reach</div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-lg p-2.5 flex items-center gap-3 z-40 animate-bounce" style={{ animationDuration: '5s' }}>
                                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                    <Handshake size={16} className="text-orange-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-900">200+ Partners</div>
                                    <div className="text-[10px] text-gray-500">Trusted Network</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHO WE ARE (3 Cards) ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
                {/* subtle dot */}
                <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-violet-600" />

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-block bg-white text-blue-600 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm border border-gray-100">
                            Who We Are
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Our <span className="text-blue-600">Mission, Vision &amp; Values</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Every decision we make is guided by a clear purpose — to build technology that matters, partnerships that last, and a future that benefits everyone we serve.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Mission */}
                        <div className="feature-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-blue-600 opacity-0 fade-in-element cursor-default relative overflow-hidden">
                            <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-blue-200/50" />
                            <div className="icon-wrapper w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <Target size={24} className="text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To simplify financial transactions and deliver a seamless, trustworthy user experience across every touchpoint. We partner with banks, financial institutions, software vendors, and technology providers to enable integrated solutions that cover the entire financial ecosystem — making money management effortless for businesses and individuals worldwide.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="feature-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-purple-500 opacity-0 fade-in-element cursor-default">
                            <div className="icon-wrapper w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                                <Eye size={24} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To be the world's most trusted fintech and digital solutions company — pioneering innovation that transforms how businesses operate across banking, finance, and technology sectors. We envision a future where every financial interaction is secure, instant, and intuitive, powered by the solutions we build today.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="feature-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-emerald-400 opacity-0 fade-in-element cursor-default">
                            <div className="icon-wrapper w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                                <Gem size={24} className="text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <span className="font-semibold text-gray-800">Innovation</span> that solves real problems. <br />
                                <span className="font-semibold text-gray-800">Integrity</span> that builds lasting trust. <br />
                                <span className="font-semibold text-gray-800">Collaboration</span> that creates shared success.<br />
                                We believe in sustainable growth — for our clients, our partners, and the communities we operate in. These values are the foundation of every product we design and every relationship we nurture.
                            </p>
                        </div>
                    </div>

                    {/* Partners Ribbon */}
                    <div id="partners" className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm opacity-0 fade-in-element text-center">
                        <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                            Trusted By Banks, Institutions &amp; Technology Leaders
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {partners.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-default">
                                        <Icon size={14} className="text-slate-400" />
                                        {p.label}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DETAILED MISSION (White Split) ═══════════════ */}
            <section id="mission-details" className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Left */}
                        <div className="opacity-0 fade-in-element order-2 lg:order-1">
                            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                                <Map size={12} /> Vision
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                                Vision &amp; Mission
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                To be India's most trusted and innovative fintech and software development company, empowering businesses through advanced technology that drives seamless financial accessibility, operational efficiency, and digital transformation.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                Haryvion Technology is committed to delivering secure, scalable, and user-centric fintech solutions. We create bespoke software platforms, including fintech services, web and game development, API integrations, and management portals, focused on innovation, collaboration, and continual investment in technology and talent. Our goal is to enable comprehensive financial ecosystems that support business growth and enhance customer satisfaction.
                            </p>

                            {/* Stacked lists */}
                            <div className="space-y-4">
                                {[
                                    { icon: Award, title: "Deliver Excellence", desc: "Every solution we craft reflects our commitment to innovation, security, and scalable technology, driving measurable business growth and operational efficiency." },
                                    { icon: HeartHandshake, title: "Build Lasting Partnerships", desc: "We go beyond delivering software—we foster long-term collaborations grounded in trust, transparency, and shared success in the digital financial ecosystem." },
                                    { icon: Code, title: "Innovate Continuously", desc: "By leveraging AI, blockchain, and emerging technologies, we create forward-looking solutions that keep our clients ahead in a rapidly evolving fintech landscape." }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Image/Graphic Right */}
                        <div className="relative opacity-0 fade-in-element order-1 lg:order-2 flex justify-center lg:justify-end">
                            {/* Floating decorative elements */}
                            <div className="absolute top-10 right-0 w-12 h-12 bg-purple-500 rounded-xl rotate-12 flex items-center justify-center shadow-lg float-slow">
                                <Rocket size={20} className="text-white" />
                            </div>
                            <div className="absolute bottom-20 left-0 lg:-left-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl -rotate-6 flex items-center justify-center shadow-xl float-slower">
                                <Lightbulb size={28} className="text-white" />
                            </div>
                            <div className="absolute top-1/2 left-10 w-4 h-4 bg-purple-300 rounded-full blur-[2px]" />

                            {/* Main Blue Square */}
                            <div className="w-72 h-72 sm:w-80 sm:h-80 bg-[#1d4ed8] rounded-[2rem] shadow-2xl flex flex-col items-center justify-center relative z-10">
                                <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-6">
                                    <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-6 h-6 bg-white rounded-full" />
                                    </div>
                                </div>
                                <h3 className="text-white text-2xl font-bold tracking-wide">Our Mission</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DETAILED VISION (Blue Split) ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1e40af] overflow-hidden relative">
                {/* Huge background concentric circles */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image/Graphic Left */}
                        <div className="relative opacity-0 fade-in-element flex justify-center lg:justify-start">
                            {/* Floating decorative elements */}
                            <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-rose-400 to-red-500 rounded-xl -rotate-12 flex items-center justify-center shadow-lg float-slow">
                                <Globe size={24} className="text-white" />
                            </div>
                            <div className="absolute bottom-10 right-0 lg:-right-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl float-slower z-20">
                                <div className="relative">
                                    <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-400 rounded-full" />
                                </div>
                            </div>

                            {/* Main Blue Square */}
                            <div className="w-72 h-72 sm:w-80 sm:h-80 bg-[#2563eb] rounded-[2rem] shadow-2xl flex flex-col items-center justify-center relative z-10 border border-white/10">
                                <Eye size={80} className="text-white mb-4" strokeWidth={1.5} />
                                <h3 className="text-white text-2xl font-bold tracking-wide">Our Vision</h3>
                                <div className="w-1 h-1 bg-purple-400 rounded-full mt-2" />
                            </div>
                        </div>

                        {/* Text Right */}
                        <div className="opacity-0 fade-in-element">
                            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                                <Compass size={12} /> Where We're Heading
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                                Leading The Digital <br /> Transformation
                            </h2>
                            <p className="text-blue-100 text-sm leading-relaxed mb-4">
                                Our vision is to become a <span className="font-bold text-white">At Haryvion Technology, we are driving the future of fintech and software development</span> by creating secure, scalable, and innovative solutions. Leveraging AI, blockchain, and automation, we empower businesses to achieve seamless financial operations, enhanced customer experiences, and sustainable growth in a rapidly evolving digital economy.
                            </p>
                            <p className="text-blue-100 text-sm leading-relaxed mb-8">
                                Our journey is centered on empowering businesses with next-generation fintech solutions that simplify financial processes and drive operational excellence. By continuously innovating and integrating cutting-edge technologies, we aim to create smarter, more connected financial ecosystems that deliver real value to our clients and their customers.
                            </p>

                            {/* Stacked Glass Cards */}
                            <div className="space-y-4">
                                {[
                                    { icon: Award, title: "Global Technology Leadership", desc: "Positioning Haryvion Technology as a trusted technology partner, recognized globally for delivering innovative, secure, and scalable fintech and software solutions." },
                                    { icon: TrendingUp, title: "Sustainable Business Growth", desc: "Developing robust solutions that drive long-term growth for our clients while expanding our capabilities and footprint in the digital financial ecosystem." },
                                    { icon: BadgeCheck, title: "Industry Benchmark For Quality", desc: "Setting high standards in reliability, security, and user-centric design, ensuring exceptional experiences and measurable business value for every client." }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-white">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-blue-100/80 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ HOW WE ACHIEVE OUR GOALS (Grid) ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                            <Users size={12} /> Our Approach
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            How We Achieve Our Goals
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Our mission and vision are brought to life through strategic pillars that guide our operations and define our commitment to excellence.
                        </p>
                        <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mt-6" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {approachCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div key={i} className="feature-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg mb-6 icon-wrapper`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 h-16">
                                        {card.desc}
                                    </p>
                                    <ul className="space-y-2.5">
                                        {card.points.map((point, j) => (
                                            <li key={j} className="flex items-center gap-2.5 text-xs font-medium text-gray-700">
                                                <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ COMMITMENT & CTA (Purple to Blue) ═══════════════ */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-600 overflow-hidden">
                {/* subtle background elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-2xl" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 opacity-0 fade-in-element">
                        <HeartHandshake size={12} /> Our Commitment
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 opacity-0 fade-in-element">
                        Dedicated To Your Success
                    </h2>

                    <p className="text-purple-100 text-base leading-relaxed mb-12 max-w-2xl mx-auto opacity-0 fade-in-element">
                        At Haryvion Technology, we're not just building software — we're building relationships, trust, and long-term partnerships. Your success is our success, and we're committed to going above and beyond to help you achieve your business objectives.
                    </p>

                    {/* Stats Glass Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 opacity-0 fade-in-element">
                        {[
                            { icon: InfinityIcon, val: "100%", label: "Client Satisfaction Focus" },
                            { icon: Handshake, val: "24/7", label: "Support & Assistance" },
                            { icon: Award, val: "Quality", label: "Excellence Guaranteed" }
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/15 transition-colors cursor-default">
                                    <Icon size={28} className="text-white mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                                    <div className="text-xs text-purple-200">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="btn-primary bg-white text-purple-700 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-xl opacity-0 fade-in-element">
                        <Rocket size={18} /> Start Your Journey With Us
                    </button>
                </div>
            </section>

            {/* ═══════════════ FINAL FLOATING CTA ═══════════════ */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-white relative -mt-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#1d4ed8] rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden opacity-0 fade-in-element">
                        {/* Decorative blobs inside card */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full blur-2xl" />
                        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full" />

                        <div className="relative z-10">
                            <Handshake size={48} className="text-white mx-auto mb-6" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready To Transform Your Business?
                            </h2>
                            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-sm sm:text-base">
                                Let's work together to turn your vision into reality. Our team is ready to discuss your project and help you achieve your business goals through innovative technology solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="btn-primary bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2">
                                    <MessageCircle size={18} /> Get in Touch
                                </Link>
                                <Link to="/services" className="btn-outline border border-white/30 text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 hover:bg-white/10">
                                    <LayoutGrid size={18} /> View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Mission;