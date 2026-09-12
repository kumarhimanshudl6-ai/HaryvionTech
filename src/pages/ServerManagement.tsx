// src/pages/ServerManagement.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Check,
    Star,
    Terminal,
    Layers,
    Rocket,
    Activity,
    Zap,
    Shield,
    RefreshCw,
    Package,
    Eye,
} from "lucide-react";

const ServerManagement = () => {
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
            name: "Basic Care",
            price: "₹999",
            period: "/month",
            description: "Essential monitoring and security for 1 server.",
            specs: ["1 Server", "24/7 Monitoring", "Security Patches", "Monthly Reports", "Email Support"],
            popular: false,
        },
        {
            name: "Pro Manage",
            price: "₹2,499",
            period: "/month",
            description: "Full management for production environments.",
            specs: ["Up to 5 Servers", "24/7 Monitoring", "Performance Tuning", "Weekly Reports", "Priority Support"],
            popular: true,
        },
        {
            name: "Business Ops",
            price: "₹4,999",
            period: "/month",
            description: "Complete admin with migrations and hardening.",
            specs: ["Up to 15 Servers", "Proactive Response", "Server Hardening", "Migration Support", "Phone + Chat Support"],
            popular: false,
        },
        {
            name: "Enterprise NOC",
            price: "₹9,999",
            period: "/month",
            description: "Dedicated NOC team for your infrastructure.",
            specs: ["Unlimited Servers", "Dedicated Engineer", "Custom SLA", "On-Call Support", "Quarterly Audits"],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Terminal,
            title: "Linux Server Administration",
            description: "Expert Linux admin covering Ubuntu, CentOS, Debian, RHEL — kernel tuning, service management, and more.",
            features: ["All major Linux distros", "Kernel tuning", "Service configuration", "Shell scripting & automation"],
        },
        {
            icon: Layers,
            title: "Windows Server Administration",
            description: "Full Windows Server admin including AD, IIS, MSSQL, RDP, group policies, and PowerShell automation.",
            features: ["Active Directory", "IIS & MSSQL", "Group Policy management", "PowerShell automation"],
        },
        {
            icon: Rocket,
            title: "Server Deployment",
            description: "Rapid provisioning of servers with your preferred OS, stack, applications, and configurations.",
            features: ["OS installation", "Stack deployment", "Application setup", "Configuration management"],
        },
        {
            icon: Eye,
            title: "Server Monitoring",
            description: "24/7 real-time monitoring of CPU, RAM, disk, network, and application health with instant alerts.",
            features: ["Real-time metrics", "Custom alerts", "Health dashboards", "Log aggregation"],
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Deep performance tuning of servers, databases, and applications for maximum speed and efficiency.",
            features: ["DB query optimization", "Caching strategies", "Kernel tuning", "Resource optimization"],
        },
        {
            icon: Shield,
            title: "Security Configuration",
            description: "Server hardening, firewall configuration, SSH lockdown, fail2ban, and vulnerability patching.",
            features: ["Server hardening", "Firewall rules", "SSH lockdown", "Vulnerability patching"],
        },
        {
            icon: RefreshCw,
            title: "Server Migration",
            description: "Zero-downtime server migrations between providers, data centers, or from on-premise to cloud.",
            features: ["Zero-downtime migration", "Cross-provider moves", "Data integrity checks", "DNS cutover"],
        },
        {
            icon: Package,
            title: "Software Installation & Configuration",
            description: "Installation and configuration of any software stack — LAMP, LEMP, MEAN, MERN, Docker, and more.",
            features: ["Full stack installation", "Custom configurations", "Dependency management", "Environment setup"],
        },
        {
            icon: Activity,
            title: "24/7 Infrastructure Monitoring",
            description: "Round-the-clock proactive monitoring with instant incident response and issue resolution.",
            features: ["24/7 NOC coverage", "Instant response", "Proactive resolution", "SLA-backed support"],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-pulse-50/30 to-white" ref={sectionRef}>
            <Navbar />

            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-2 pt-8">
                        <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                                <img src="/star.svg" alt="star" className="w-3 h-3" />
                            </span>
                            <span>Server Management</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Expert{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Server Management</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Focus on your business while we handle{" "}
                        <span className="font-playfair font-medium text-pulse-600">deployment, monitoring & optimization</span> —
                        from <span className="font-bold text-pulse-600">₹999/month</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-element">
                        <a href="#pricing" className="button-primary group inline-flex items-center justify-center px-8 py-4">
                            View Pricing
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            Management <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Fully managed server administration at{" "}
                            <span className="font-playfair font-medium text-pulse-600">flat INR pricing</span>.
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
                        All prices in INR. GST extra as applicable. Custom SLA plans available.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            Server <span className="text-pulse-500 font-playfair font-thin">Services</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 fade-in-element">
                                <div className="w-14 h-14 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6">
                                    <service.icon className="text-pulse-600" size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{service.description}</p>
                                <div className="space-y-2.5">
                                    {service.features.map((feature, fIndex) => (
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
                <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                        <Star size={16} />
                        <span>Starting at ₹999/month</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Let Us Manage Your <span className="font-playfair font-thin">Servers</span>
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        24/7 <span className="font-playfair font-medium">expert administration</span> so you can focus on your business.
                    </p>
                    <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                        Start Managing
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServerManagement;