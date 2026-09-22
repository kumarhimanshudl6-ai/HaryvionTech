import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Shield,
    Lock,
    Trophy,
    Home,
    CheckSquare,
    CheckCircle,
    Award,
    BadgeCheck,
} from "lucide-react";

const Certificate = () => {
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

    const trustBadges = [
        { label: "ISO Certified", color: "bg-blue-500" },
        { label: "MSME Registered", color: "bg-emerald-500" },
        { label: "RBI Compliant", color: "bg-amber-500" },
        { label: "AWS Partner", color: "bg-violet-500" },
        { label: "PCI-DSS", color: "bg-rose-500" },
        { label: "Startup India", color: "bg-cyan-500" },
    ];

    const certificates = [
        {
            icon: Shield,
            iconColor: "text-blue-500",
            iconBg: "bg-blue-50",
            badge: "Certified",
            badgeBg: "bg-blue-50 text-blue-600",
            border: "border-t-blue-500",
            title: "ISO 9001:2015",
            description:
                "Quality Management System certification ensuring consistent delivery of high-quality software products and services.",
            meta: "Issued 2022 · Renewed annually",
        },
        {
            icon: Lock,
            iconColor: "text-orange-500",
            iconBg: "bg-orange-50",
            badge: "Certified",
            badgeBg: "bg-blue-50 text-blue-600",
            border: "border-t-orange-400",
            title: "PCI-DSS Compliant",
            description:
                "Payment Card Industry Data Security Standard compliance for secure handling of payment and financial data.",
            meta: "Maintained · Level 1 compliance",
        },
        {
            icon: null,
            aws: true,
            iconColor: "text-orange-500",
            iconBg: "bg-orange-50",
            badge: "Partner",
            badgeBg: "bg-blue-50 text-blue-600",
            border: "border-t-emerald-500",
            title: "AWS Certified Partner",
            description:
                "Recognised AWS technology partner delivering cloud-native solutions with best practices in architecture and security.",
            meta: "Active partner since 2023",
        },
        {
            icon: Trophy,
            iconColor: "text-amber-500",
            iconBg: "bg-amber-50",
            badge: "Awarded",
            badgeBg: "bg-amber-50 text-amber-700",
            border: "border-t-orange-400",
            title: "Best Fintech Startup 2023",
            description:
                "Recognised as one of the best emerging fintech software companies in India for innovation and client satisfaction.",
            meta: "India Startup Awards 2023",
        },
        {
            icon: Home,
            iconColor: "text-emerald-500",
            iconBg: "bg-emerald-50",
            badge: "Registered",
            badgeBg: "bg-emerald-50 text-emerald-700",
            border: "border-t-blue-500",
            title: "MSME Registered",
            description:
                "Officially registered under the Ministry of Micro, Small & Medium Enterprises, Government of India.",
            meta: "Udyam Registration · Active",
        },
        {
            icon: CheckSquare,
            iconColor: "text-violet-500",
            iconBg: "bg-violet-50",
            badge: "Compliant",
            badgeBg: "bg-violet-50 text-violet-700",
            border: "border-t-violet-500",
            title: "RBI Compliant Solutions",
            description:
                "All fintech and banking software solutions are fully compliant with Reserve Bank of India guidelines and regulations.",
            meta: "Full regulatory compliance · 2024",
        },
    ];

    const whyTrust = [
        "Startup India Recognised",
        "Secure Fintech Solutions",
        "High Performance Infrastructure",
        "Quality-Driven Development",
    ];

    const stats = [
        { value: "5+", label: "Years of excellence" },
        { value: "52+", label: "Projects delivered" },
        { value: "30+", label: "Countries Served" },
    ];

    return (
        <div className="min-h-screen bg-white" ref={sectionRef}>
            <style>{`
        .cert-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cert-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
        }
        .cert-card:hover .cert-icon {
          transform: scale(1.12);
        }
        .cert-icon {
          transition: transform 0.35s ease;
        }
        .trust-item {
          transition: all 0.25s ease;
        }
        .trust-item:hover {
          transform: translateX(4px);
        }
        .stat-pill {
          transition: all 0.3s ease;
        }
        .stat-pill:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-4px) scale(1.03);
        }
        .cert-img-wrap {
          transition: all 0.4s ease;
        }
        .cert-img-wrap:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
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
      `}</style>

            <Navbar />

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="relative pt-28 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                {/* dots pattern */}
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                {/* glow dots */}
                <div className="absolute bottom-32 right-[40%] w-3 h-3 rounded-full bg-violet-400/80 blur-[1px]" />
                <div className="absolute bottom-20 right-[30%] w-5 h-5 rounded-full bg-purple-500/60 blur-[2px]" />

                <div className="max-w-6xl mx-auto relative z-10 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 opacity-0 fade-in-element">
                                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                Verified by Startup India
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 opacity-0 fade-in-element">
                                Certified. Trusted.
                                <br />
                                <span className="text-yellow-400">Recognised.</span>
                            </h1>

                            <p className="text-blue-100 text-lg leading-relaxed max-w-lg mb-8 opacity-0 fade-in-element">
                                Haryvion Technology is proudly recognised under the Startup India
                                initiative by DPIIT, reflecting our commitment to innovation, trusted
                                technology solutions, and digital excellence for modern businesses.
                            </p>

                            {/* Solid yellow accent line */}
                            <div className="flex items-center gap-1.5 opacity-0 fade-in-element">
                                <div className="w-12 h-1 bg-yellow-400 rounded-full" />
                                <div className="w-4 h-1 bg-yellow-400 rounded-full" />
                                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                            </div>
                        </div>

                        {/* Right — certificate preview */}
                        <div className="flex justify-center lg:justify-end opacity-0 fade-in-element">
                            <div className="cert-img-wrap relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl max-w-[420px] w-full">
                                {/* Certificate inner card */}
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg aspect-[4/3] flex flex-col items-center justify-center p-8 text-center relative">
                                    {/* Authentic Indian Flag gradient border */}
                                    <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

                                    <div className="text-[#FF9933] text-[13px] font-bold tracking-widest uppercase mb-1">
                                        Government of India
                                    </div>
                                    <div className="text-[10px] text-gray-400 mb-4 tracking-wider">DPIIT · Startup India</div>

                                    <div className="w-12 h-12 rounded-full border-[2px] border-[#FF9933] flex items-center justify-center mb-4">
                                        <Award size={24} className="text-[#FF9933]" />
                                    </div>

                                    <div className="text-[#000080] font-black text-sm sm:text-base tracking-wide mb-2">
                                        CERTIFICATE OF RECOGNITION
                                    </div>
                                    <div className="text-[11px] text-gray-500 mb-5 max-w-[260px] leading-relaxed">
                                        This is to certify that Haryvion Technology is recognised as a startup
                                        by the Department for Promotion of Industry and Internal Trade.
                                    </div>

                                    {/* QR placeholder */}
                                    <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-md mb-2 flex items-center justify-center p-1">
                                        <div className="w-full h-full bg-gray-700 rounded-sm opacity-90" />
                                    </div>
                                    <div className="text-[9px] text-gray-400 font-medium">Scan to verify</div>
                                </div>

                                {/* Verified badge */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2 shadow-xl flex items-center gap-2.5 whitespace-nowrap z-20">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#138808]" />
                                    <span className="text-xs sm:text-sm font-bold text-gray-800">Verified &amp; Trusted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust badges strip */}
                <div className="relative z-10 bg-white border-t border-gray-100 shadow-sm">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-12 gap-y-4">
                            {trustBadges.map((b) => (
                                <div key={b.label} className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                                    <span className={`w-2 h-2 rounded-full ${b.color}`} />
                                    {b.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CERTIFICATES & AWARDS ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14 opacity-0 fade-in-element">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <BadgeCheck size={13} />
                            Our certifications
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Certificates &amp; Awards
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            These certifications validate our expertise and dedication to delivering
                            world-class digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {certificates.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div
                                    key={i}
                                    className={`cert-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-t-4 ${c.border} opacity-0 fade-in-element cursor-default`}
                                >
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`cert-icon w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center`}>
                                            {c.aws ? (
                                                <span className="text-orange-500 font-black text-sm tracking-tight">aws</span>
                                            ) : Icon ? (
                                                <Icon size={22} className={c.iconColor} />
                                            ) : null}
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badgeBg}`}>
                                            {c.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.description}</p>

                                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {c.meta}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Verified banner */}
                    <div className="opacity-0 fade-in-element bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-5 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            <CheckCircle size={14} className="text-white" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-sm mb-0.5">
                                Verified &amp; Independently Audited
                            </div>
                            <p className="text-gray-500 text-sm">
                                All certifications are maintained through regular audits and are verifiable
                                through their respective issuing bodies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY TRUST US ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
                {/* glow dots */}
                <div className="absolute top-1/2 right-[35%] w-3 h-3 rounded-full bg-violet-400/60 blur-[1px]" />
                <div className="absolute bottom-24 right-[20%] w-5 h-5 rounded-full bg-purple-500/40 blur-[2px]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-16 opacity-0 fade-in-element">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="stat-pill bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl py-6 text-center cursor-default"
                            >
                                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">{s.value}</div>
                                <div className="text-blue-200 text-xs sm:text-sm font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left text */}
                        <div className="opacity-0 fade-in-element">
                            <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                                <Shield size={13} />
                                Why trust us
                            </span>

                            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                                Trusted Technology.
                                <br />
                                Certified Excellence.
                            </h2>

                            <p className="text-blue-100 leading-relaxed mb-8 max-w-md">
                                Our certifications and recognitions demonstrate our commitment to
                                delivering innovative, secure, and future-ready software solutions
                                with industry-standard compliance and reliability.
                            </p>

                            <ul className="space-y-3">
                                {whyTrust.map((item) => (
                                    <li key={item} className="trust-item flex items-center gap-3 text-white text-sm font-medium cursor-default">
                                        <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={12} className="text-white" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right — certificate again */}
                        <div className="flex justify-center lg:justify-end opacity-0 fade-in-element">
                            <div className="cert-img-wrap relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl max-w-[420px] w-full">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg aspect-[4/3] flex flex-col items-center justify-center p-8 text-center relative">
                                    <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

                                    <div className="text-[#FF9933] text-[13px] font-bold tracking-widest uppercase mb-1">
                                        Government of India
                                    </div>
                                    <div className="text-[10px] text-gray-400 mb-4 tracking-wider">DPIIT · Startup India</div>

                                    <div className="w-12 h-12 rounded-full border-[2px] border-[#FF9933] flex items-center justify-center mb-4">
                                        <Award size={24} className="text-[#FF9933]" />
                                    </div>

                                    <div className="text-[#000080] font-black text-sm sm:text-base tracking-wide mb-2">
                                        CERTIFICATE OF RECOGNITION
                                    </div>
                                    <div className="text-[11px] text-gray-500 mb-5 max-w-[260px] leading-relaxed">
                                        Haryvion Technology — Recognised Startup under the Startup India initiative.
                                    </div>

                                    <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-md mb-2 flex items-center justify-center p-1">
                                        <div className="w-full h-full bg-gray-700 rounded-sm opacity-90" />
                                    </div>
                                    <div className="text-[9px] text-gray-400 font-medium">Scan to verify</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center opacity-0 fade-in-element">
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                        Work with us
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Partner With A Trusted Technology Team
                    </h2>
                    <p className="text-gray-500 mb-10 max-w-xl mx-auto">
                        Collaborate with Haryvion Technology and experience secure, scalable, and
                        innovation-driven software solutions built for modern businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-blue-200 group"
                        >
                            Get in touch
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/about"
                            className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-full"
                        >
                            About us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Certificate;