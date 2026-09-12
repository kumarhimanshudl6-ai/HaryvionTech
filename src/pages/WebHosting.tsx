// src/pages/WebHosting.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Globe,
    Check,
    Star,
    Zap,
    Building2,
    Users,
    Layers,
    Shield,
    Award,
} from "lucide-react";

const WebHosting = () => {
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
            price: "₹149",
            period: "/month",
            description: "Perfect for personal sites and blogs.",
            specs: ["1 Website", "10 GB SSD", "Free SSL", "cPanel Access", "Weekly Backups"],
            popular: false,
        },
        {
            name: "Business",
            price: "₹399",
            period: "/month",
            description: "Best for growing business websites.",
            specs: ["10 Websites", "50 GB SSD", "Free SSL + CDN", "cPanel Access", "Daily Backups"],
            popular: true,
        },
        {
            name: "WordPress Pro",
            price: "₹699",
            period: "/month",
            description: "Optimized WordPress with LiteSpeed caching.",
            specs: ["Unlimited Sites", "100 GB NVMe", "LiteSpeed Cache", "Auto WP Updates", "Staging Environment"],
            popular: false,
        },
        {
            name: "Reseller",
            price: "₹1,299",
            period: "/month",
            description: "White-label hosting for agencies.",
            specs: ["Unlimited Accounts", "200 GB NVMe", "WHM Panel", "White-Label Branding", "Priority Support"],
            popular: false,
        },
    ];

    const hostingTypes = [
        {
            icon: Globe,
            title: "Shared Hosting",
            description: "Affordable web hosting for personal sites, portfolios, and small business websites.",
            features: ["Free SSL", "cPanel included", "1-click WordPress install", "24/7 support"],
        },
        {
            icon: Building2,
            title: "Business Hosting",
            description: "High-resource hosting for growing business websites with dedicated resources and faster performance.",
            features: ["Dedicated resources", "Free CDN", "Daily backups", "Priority support"],
        },
        {
            icon: Layers,
            title: "WordPress Hosting",
            description: "Optimized hosting for WordPress with pre-installed plugins, caching, and automatic updates.",
            features: ["Pre-installed WordPress", "LiteSpeed caching", "Auto WP updates", "WP-CLI access"],
        },
        {
            icon: Users,
            title: "Reseller Hosting",
            description: "White-label hosting for agencies and web professionals to resell hosting under your brand.",
            features: ["White-label branding", "WHM control panel", "Client billing tools", "Unlimited domains"],
        },
        {
            icon: Zap,
            title: "Application Hosting",
            description: "Hosting for Node.js, Python, PHP, Ruby, and other modern applications with full stack support.",
            features: ["Node.js / Python / PHP", "Custom stack support", "Git deployment", "Environment variables"],
        },
        {
            icon: Shield,
            title: "Managed Hosting",
            description: "Fully managed hosting with server administration, security patches, and expert support.",
            features: ["Server management", "Security updates", "Malware scanning", "Performance tuning"],
        },
        {
            icon: Award,
            title: "High-Performance Web Hosting",
            description: "Premium hosting with NVMe storage, LiteSpeed, HTTP/3, and global CDN for maximum speed.",
            features: ["NVMe SSD storage", "LiteSpeed server", "HTTP/3 support", "Global CDN"],
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
                            <span>Web Hosting</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Reliable{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Web Hosting Services</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        From personal sites to enterprise applications —{" "}
                        <span className="font-playfair font-medium text-pulse-600">fast, secure, and managed hosting</span> from{" "}
                        <span className="font-bold text-pulse-600">₹149/month</span>.
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
                            Hosting <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Affordable hosting plans in{" "}
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
                        All prices in INR. GST extra as applicable. Free domain on annual plans.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            Hosting <span className="text-pulse-500 font-playfair font-thin">Plans</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hostingTypes.map((hosting, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 fade-in-element">
                                <div className="w-14 h-14 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6">
                                    <hosting.icon className="text-pulse-600" size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{hosting.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{hosting.description}</p>
                                <div className="space-y-2.5">
                                    {hosting.features.map((feature, fIndex) => (
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
                        <span>Starting at ₹149/month</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Host Your Website with <span className="font-playfair font-thin">Confidence</span>
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        <span className="font-playfair font-medium">99.9% uptime</span>, blazing-fast servers, and 24/7 expert support.
                    </p>
                    <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                        Choose Your Plan
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebHosting;