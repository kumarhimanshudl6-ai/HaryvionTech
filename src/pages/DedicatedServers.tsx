// src/pages/DedicatedServers.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Server,
    Check,
    Star,
    Cpu,
    Database,
    Zap,
    Shield,
    Award,
} from "lucide-react";

const DedicatedServers = () => {
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
            name: "Essential",
            price: "₹8,999",
            period: "/month",
            description: "Entry-level bare-metal for production apps.",
            specs: ["Intel Xeon 4-Core", "16 GB RAM", "500 GB SSD", "10 TB Bandwidth", "1 Gbps Port"],
            popular: false,
        },
        {
            name: "Performance",
            price: "₹14,999",
            period: "/month",
            description: "Balanced power for high-traffic platforms.",
            specs: ["Intel Xeon 8-Core", "32 GB RAM", "1 TB NVMe SSD", "20 TB Bandwidth", "1 Gbps Port"],
            popular: true,
        },
        {
            name: "Power",
            price: "₹24,999",
            period: "/month",
            description: "High-CPU server for compute-heavy workloads.",
            specs: ["AMD EPYC 16-Core", "64 GB RAM", "2 TB NVMe SSD", "30 TB Bandwidth", "10 Gbps Port"],
            popular: false,
        },
        {
            name: "Enterprise",
            price: "₹49,999",
            period: "/month",
            description: "Maximum hardware for mission-critical systems.",
            specs: ["AMD EPYC 32-Core", "128 GB RAM", "4 TB NVMe RAID", "Unmetered Bandwidth", "10 Gbps Port"],
            popular: false,
        },
    ];

    const serverTypes = [
        {
            icon: Server,
            title: "Bare-Metal Servers",
            description: "Raw hardware with no virtualization layer — full physical server access for maximum performance.",
            features: ["100% dedicated hardware", "No virtualization overhead", "Full hardware customization", "Direct kernel access"],
        },
        {
            icon: Cpu,
            title: "High-CPU Servers",
            description: "Multi-core processors optimized for compute-intensive workloads, batch processing, and rendering.",
            features: ["AMD EPYC / Intel Xeon", "Up to 128 cores", "High clock speeds", "Ideal for compute workloads"],
        },
        {
            icon: Database,
            title: "High-RAM Servers",
            description: "Servers with massive memory allocations for in-memory databases, caching, and big data.",
            features: ["Up to 1TB DDR4 RAM", "In-memory databases", "Redis / Memcached", "Big data analytics"],
        },
        {
            icon: Zap,
            title: "GPU Servers",
            description: "NVIDIA GPU-powered servers for AI/ML training, deep learning, and rendering workloads.",
            features: ["NVIDIA A100 / H100", "CUDA optimized", "AI/ML training", "Video rendering & encoding"],
        },
        {
            icon: Award,
            title: "Enterprise Dedicated Servers",
            description: "Premium enterprise-grade servers with redundant hardware, high availability, and 24/7 monitoring.",
            features: ["Redundant power & network", "24/7 monitoring", "SLA-backed uptime", "Priority hardware replacement"],
        },
        {
            icon: Shield,
            title: "Managed Dedicated Servers",
            description: "Fully managed dedicated servers with OS updates, security patches, and expert administration.",
            features: ["OS installation & updates", "Security hardening", "Server administration", "Performance tuning"],
        },
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
                            <span>Dedicated Servers</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Bare-Metal{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Dedicated Servers</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Uncompromising performance with{" "}
                        <span className="font-playfair font-medium text-pulse-600">100% dedicated hardware</span> — starting at{" "}
                        <span className="font-bold text-pulse-600">₹8,999/month</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-element">
                        <a href="#pricing" className="button-primary group inline-flex items-center justify-center px-8 py-4">
                            View Pricing
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link to="/contact" className="border-2 border-pulse-300 text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center justify-center">
                            Custom Configuration
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            Dedicated Server <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade hardware at{" "}
                            <span className="font-playfair font-medium text-pulse-600">transparent INR pricing</span>.
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
                        All prices in INR. GST extra as applicable. Custom hardware configurations available on request.
                    </p>
                </div>
            </section>

            {/* Server Types */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            Server <span className="text-pulse-500 font-playfair font-thin">Options</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every workload deserves the{" "}
                            <span className="font-playfair font-medium text-pulse-600">right hardware</span>.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serverTypes.map((server, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 fade-in-element">
                                <div className="w-14 h-14 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6">
                                    <server.icon className="text-pulse-600" size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{server.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{server.description}</p>
                                <div className="space-y-2.5">
                                    {server.features.map((feature, fIndex) => (
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

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
                <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                        <Star size={16} />
                        <span>Starting at ₹8,999/month</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Provision Your <span className="font-playfair font-thin">Dedicated Server</span>
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        Talk to our engineers about{" "}
                        <span className="font-playfair font-medium">custom hardware configurations</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                            Configure Server
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
                            Get Quote
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DedicatedServers;