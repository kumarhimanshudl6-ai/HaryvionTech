// src/pages/CloudCompute.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Cloud,
    Check,
    Star,
    Database,
    Network,
    Layers,
    RefreshCw,
    Globe,
    Shield,
} from "lucide-react";

const CloudCompute = () => {
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
            name: "Micro",
            price: "₹299",
            period: "/month",
            description: "Lightweight cloud instance for testing & dev.",
            specs: ["1 vCPU", "1 GB RAM", "25 GB SSD", "500 GB Transfer", "Shared Network"],
            popular: false,
        },
        {
            name: "Standard",
            price: "₹799",
            period: "/month",
            description: "Production-ready cloud compute instance.",
            specs: ["2 vCPU", "4 GB RAM", "50 GB SSD", "2 TB Transfer", "Auto-Scaling Ready"],
            popular: true,
        },
        {
            name: "Advanced",
            price: "₹1,799",
            period: "/month",
            description: "High-memory instance for databases & APIs.",
            specs: ["4 vCPU", "8 GB RAM", "100 GB SSD", "4 TB Transfer", "Private Networking"],
            popular: false,
        },
        {
            name: "Scale",
            price: "₹3,499",
            period: "/month",
            description: "Auto-scaling cluster for enterprise traffic.",
            specs: ["8 vCPU", "16 GB RAM", "200 GB SSD", "8 TB Transfer", "Load Balancer Included"],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Cloud,
            title: "Cloud Compute",
            description: "On-demand virtual compute instances with instant scaling, pay-as-you-go pricing, and global reach.",
            features: ["Instant provisioning", "Pay-as-you-go", "Multiple instance types", "Snapshot backups"],
        },
        {
            icon: Globe,
            title: "Cloud Hosting",
            description: "Distributed cloud hosting with auto-failover, load balancing, and content delivery worldwide.",
            features: ["Multi-region deployment", "Auto failover", "Built-in CDN", "SSL included"],
        },
        {
            icon: Database,
            title: "Cloud Databases",
            description: "Managed database services with MySQL, PostgreSQL, MongoDB, and Redis — fully managed and backed up.",
            features: ["MySQL / PostgreSQL / MongoDB", "Automatic backups", "High availability", "Read replicas"],
        },
        {
            icon: Network,
            title: "Cloud Networking",
            description: "Software-defined networking with VPCs, subnets, VPN gateways, and secure private peering.",
            features: ["Virtual Private Cloud (VPC)", "Custom subnets", "VPN gateways", "Private peering"],
        },
        {
            icon: RefreshCw,
            title: "Auto-Scaling Infrastructure",
            description: "Automatically scale compute resources up or down based on real-time traffic and load.",
            features: ["Horizontal scaling", "Load-based triggers", "Zero downtime", "Cost optimization"],
        },
        {
            icon: Shield,
            title: "Private Cloud",
            description: "Dedicated single-tenant cloud environments for maximum security, compliance, and control.",
            features: ["Single-tenant hardware", "Full compliance ready", "Custom SLAs", "Isolated networks"],
        },
        {
            icon: Layers,
            title: "Hybrid Cloud Solutions",
            description: "Seamlessly connect on-premise infrastructure with public cloud for maximum flexibility.",
            features: ["On-prem + cloud integration", "Unified management", "Data replication", "Workload portability"],
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
                            <span>Cloud Compute</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Scalable{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Cloud Compute Services</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Deploy, scale, and manage your workloads with{" "}
                        <span className="font-playfair font-medium text-pulse-600">public, private, and hybrid cloud</span> —
                        starting at just <span className="font-bold text-pulse-600">₹299/month</span>.
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
                            Cloud <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pay-as-you-go cloud instances in{" "}
                            <span className="font-playfair font-medium text-pulse-600">Indian Rupees</span>.
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
                        All prices in INR. GST extra as applicable. Custom plans available on request.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            Cloud <span className="text-pulse-500 font-playfair font-thin">Services</span>
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

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
                <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                        <Star size={16} />
                        <span>Starting at ₹299/month</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Move to the <span className="font-playfair font-thin">Cloud</span> Today
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        Talk to our cloud architects about{" "}
                        <span className="font-playfair font-medium">migration & deployment</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                            Get Started
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CloudCompute;