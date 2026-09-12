import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight, Check, Star, Smartphone, Layers, Shield, Bell, MapPin, Wifi,
} from "lucide-react";

const MobileAppDevelopment = () => {
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
        elements.forEach((el, index) => setTimeout(() => observer.observe(el), index * 50));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const plans = [
        {
            name: "MVP App",
            price: "₹49,999",
            period: "starting",
            description: "Basic app to validate your business idea.",
            specs: ["Single Platform (Android/iOS)", "Core Features Only", "Basic UI/UX", "Firebase Backend", "1 Month Support"],
            popular: false,
        },
        {
            name: "Hybrid App",
            price: "₹99,999",
            period: "starting",
            description: "React Native or Flutter for both platforms.",
            specs: ["iOS & Android (Cross-platform)", "Custom UI/UX", "API Integration", "Push Notifications", "3 Months Support"],
            popular: true,
        },
        {
            name: "Native App",
            price: "₹1,49,999",
            period: "starting",
            description: "High-performance native development.",
            specs: ["Swift (iOS) or Kotlin (Android)", "Complex Animations", "Hardware Access", "Custom Backend", "6 Months Support"],
            popular: false,
        },
        {
            name: "Enterprise App",
            price: "Custom",
            period: "Quote",
            description: "Large-scale app for established businesses.",
            specs: ["Multi-platform", "Enterprise Security", "ERP/CRM Integration", "Advanced Analytics", "24/7 SLA Support"],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Smartphone,
            title: "Native iOS & Android",
            description: "Platform-specific apps built with Swift/SwiftUI and Kotlin/Jetpack Compose for maximum performance.",
            features: ["Swift & SwiftUI", "Kotlin & Jetpack Compose", "App Store guidelines", "Native performance"],
        },
        {
            icon: Layers,
            title: "Cross-Platform Apps",
            description: "Single codebase for iOS and Android using React Native or Flutter — faster delivery, lower cost.",
            features: ["React Native", "Flutter / Dart", "Shared business logic", "Near-native performance"],
        },
        {
            icon: Bell,
            title: "Push Notifications",
            description: "Engage users with targeted push notifications, in-app messaging, and real-time alerts.",
            features: ["FCM & APNs", "Segmented campaigns", "Rich media notifications", "Analytics tracking"],
        },
        {
            icon: MapPin,
            title: "Location & Maps",
            description: "GPS tracking, geofencing, route optimization, and map integrations for location-based services.",
            features: ["Google Maps / Mapbox", "Real-time tracking", "Geofencing", "Offline maps"],
        },
        {
            icon: Shield,
            title: "Secure Authentication",
            description: "Biometric login, OTP verification, social auth, and encrypted session management.",
            features: ["Fingerprint / Face ID", "OTP & social login", "JWT tokens", "Encrypted storage"],
        },
        {
            icon: Wifi,
            title: "Offline-First Design",
            description: "Apps that work without internet — local storage, background sync, and conflict resolution.",
            features: ["Local database (SQLite)", "Background sync", "Conflict resolution", "Cached content"],
        },
    ];

    const process = [
        { step: "01", title: "Strategy", description: "Define app goals, target users, feature priorities, and platform choice." },
        { step: "02", title: "UI/UX Design", description: "Wireframes, interactive prototypes, and pixel-perfect screen designs." },
        { step: "03", title: "Development", description: "Agile sprints with weekly builds you can test on real devices." },
        { step: "04", title: "Launch", description: "App Store & Play Store submission, ASO, and post-launch updates." },
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
                            <span>Mobile App Development</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Native & Cross-Platform{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Mobile Apps</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Engage your users on the go with high-performance{" "}
                        <span className="font-playfair font-medium text-pulse-600">iOS and Android</span> applications —
                        starting at <span className="font-bold text-pulse-600">₹49,999</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-element">
                        <a href="#pricing" className="button-primary group inline-flex items-center justify-center px-8 py-4">
                            View Pricing
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link to="/contact" className="border-2 border-pulse-300 text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center justify-center">
                            Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            App Development <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent pricing in <span className="font-playfair font-medium text-pulse-600">Indian Rupees (INR)</span>.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div key={index} className={`relative bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 fade-in-element flex flex-col ${plan.popular ? "border-pulse-500 ring-2 ring-pulse-500/20" : "border-pulse-100"}`}>
                                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pulse-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                                <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-pulse-600">{plan.price}</span>
                                    <span className="text-gray-500 text-sm"> {plan.period}</span>
                                </div>
                                <div className="space-y-2.5 mb-8 flex-grow">
                                    {plan.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex items-center gap-2">
                                            <Check className="text-pulse-500 flex-shrink-0" size={14} />
                                            <span className="text-gray-700 text-sm">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.popular ? "bg-pulse-500 text-white hover:bg-pulse-600" : "bg-pulse-50 text-pulse-600 hover:bg-pulse-100"}`}>
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8 opacity-0 fade-in-element">
                        All prices in INR. GST extra as applicable. Includes App Store / Play Store submission assistance.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            App Development <span className="text-pulse-500 font-playfair font-thin">Services</span>
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

            {/* Process */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            How We <span className="text-pulse-500 font-playfair font-thin">Build Apps</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative opacity-0 fade-in-element text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">{step.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                                {index < process.length - 1 && <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-pulse-200"></div>}
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
                        <span>Starting at ₹49,999</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Ready to Launch Your <span className="font-playfair font-thin">App</span>?
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        From idea to App Store — we handle design, development, and deployment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                            Start Your App
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
                            See App Projects
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MobileAppDevelopment;