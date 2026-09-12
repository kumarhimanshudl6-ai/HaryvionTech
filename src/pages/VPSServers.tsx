// src/pages/VPSServers.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Check,
    Star,
    Zap,
    Shield,
    Cpu,
    HardDrive,
    Terminal,
    Layers,
    Activity,
    Globe,
} from "lucide-react";

const VPSServers = () => {
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

    const plans = [
        {
            name: "Starter",
            price: "₹499",
            period: "/month",
            description: "Perfect for small websites and light applications.",
            specs: ["1 vCPU Core", "2 GB RAM", "40 GB NVMe SSD", "1 TB Bandwidth", "1 Dedicated IP"],
            popular: false,
        },
        {
            name: "Business",
            price: "₹999",
            period: "/month",
            description: "Ideal for growing businesses and multi-site hosting.",
            specs: ["2 vCPU Cores", "4 GB RAM", "80 GB NVMe SSD", "2 TB Bandwidth", "1 Dedicated IP"],
            popular: true,
        },
        {
            name: "Professional",
            price: "₹1,999",
            period: "/month",
            description: "High performance for databases and heavy apps.",
            specs: ["4 vCPU Cores", "8 GB RAM", "160 GB NVMe SSD", "4 TB Bandwidth", "2 Dedicated IPs"],
            popular: false,
        },
        {
            name: "Enterprise",
            price: "₹3,999",
            period: "/month",
            description: "Maximum power for enterprise workloads.",
            specs: ["8 vCPU Cores", "16 GB RAM", "320 GB NVMe SSD", "8 TB Bandwidth", "4 Dedicated IPs"],
            popular: false,
        },
    ];

    const vpsTypes = [
        {
            icon: Terminal,
            title: "Linux VPS",
            description: "High-performance Linux VPS running Ubuntu, CentOS, Debian with full root access.",
            features: ["Ubuntu / CentOS / Debian", "Full root access", "SSH key authentication", "Custom kernel support"],
        },
        {
            icon: Layers,
            title: "Windows VPS",
            description: "Windows Server 2019/2022 VPS with RDP access for .NET and enterprise apps.",
            features: ["Windows Server 2019/2022", "RDP access", "MSSQL support", "Active Directory ready"],
        },
        {
            icon: Shield,
            title: "Managed VPS",
            description: "Fully managed VPS with 24/7 monitoring, security patches, and expert admin.",
            features: ["24/7 monitoring", "Automatic updates", "Server hardening", "Priority support"],
        },
        {
            icon: Zap,
            title: "High-Performance VPS",
            description: "Dedicated CPU cores, high RAM, and NVMe storage for demanding workloads.",
            features: ["Dedicated CPU cores", "High RAM allocation", "NVMe SSD storage", "Low-latency network"],
        },
        {
            icon: HardDrive,
            title: "NVMe VPS",
            description: "Ultra-fast NVMe storage-backed VPS for databases and heavy applications.",
            features: ["NVMe SSD storage", "Extreme IOPS", "Ideal for databases", "Fast boot times"],
        },
        {
            icon: Cpu,
            title: "Custom VPS Configurations",
            description: "Tailored VPS built to your exact CPU, RAM, storage, and network needs.",
            features: ["Custom CPU/RAM specs", "Flexible storage options", "Custom OS images", "Dedicated IP addresses"],
        },
    ];

    const benefits = [
        { icon: Zap, title: "Instant Deployment", description: "Provision your VPS in minutes with automated setup." },
        { icon: Shield, title: "Enterprise Security", description: "DDoS protection, firewalls, and hardened OS by default." },
        { icon: Activity, title: "99.99% Uptime SLA", description: "Redundant infrastructure ensures your VPS stays online." },
        { icon: Globe, title: "Global Locations", description: "Deploy in multiple data centers close to your users." },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-pulse-50/30 to-white" ref={sectionRef}>
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-2 pt-8">
                        <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                                <img src="/star.svg" alt="star" className="w-3 h-3" />
                            </span>
                            <span>VPS Servers</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        High-Performance{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Virtual Private Servers</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Deploy fast, secure, and scalable{" "}
                        <span className="font-playfair font-medium text-pulse-600">Linux & Windows VPS</span> starting at just{" "}
                        <span className="font-bold text-pulse-600">₹499/month</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-element">
                        <a href="#pricing" className="button-primary group inline-flex items-center justify-center px-8 py-4">
                            View Pricing
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link to="/contact" className="border-2 border-pulse-300 text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center justify-center">
                            Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            VPS <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent pricing in{" "}
                            <span className="font-playfair font-medium text-pulse-600">Indian Rupees</span>. No hidden fees.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 fade-in-element flex flex-col ${plan.popular ? "border-pulse-500 ring-2 ring-pulse-500/20" : "border-pulse-100"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pulse-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                                <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-pulse-600">{plan.price}</span>
                                    <span className="text-gray-500 text-sm">{plan.period}</span>
                                </div>
                                <div className="space-y-2.5 mb-8 flex-grow">
                                    {plan.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex items-center gap-2">
                                            <Check className="text-pulse-500 flex-shrink-0" size={14} />
                                            <span className="text-gray-700 text-sm">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/contact"
                                    className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.popular
                                            ? "bg-pulse-500 text-white hover:bg-pulse-600"
                                            : "bg-pulse-50 text-pulse-600 hover:bg-pulse-100"
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8 opacity-0 fade-in-element">
                        All plans include free SSL, DDoS protection, and 24/7 support. Custom configurations available on request.
                    </p>
                </div>
            </section>

            {/* VPS Types */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            VPS <span className="text-pulse-500 font-playfair font-thin">Solutions</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vpsTypes.map((vps, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 fade-in-element">
                                <div className="w-14 h-14 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6">
                                    <vps.icon className="text-pulse-600" size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{vps.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{vps.description}</p>
                                <div className="space-y-2.5">
                                    {vps.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-2.5">
                                            <Check className="text-pulse-500 flex-shrink-0" size={14} />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-pulse-100 text-center hover:shadow-xl transition-all duration-300 opacity-0 fade-in-element">
                                <div className="w-14 h-14 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="text-pulse-600" size={26} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
                <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                        <Star size={16} />
                        <span>Starting at ₹499/month</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Launch Your <span className="font-playfair font-thin">VPS</span> in Minutes
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        Get instant access to enterprise-grade virtual servers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                            Get Started
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="#pricing" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
                            View Pricing
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VPSServers;