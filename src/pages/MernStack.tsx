import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight, Check, Star, Monitor, Code, Database, Shield, Zap, Rocket
} from "lucide-react";

const MernStack = () => {
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
        { name: "MERN MVP", price: "₹39,999", period: "starting", description: "Rapid full-stack app to validate your idea.", specs: ["React Frontend", "Node.js REST API", "MongoDB Database", "User Authentication", "Deployment Setup"], popular: false },
        { name: "MERN Business", price: "₹79,999", period: "starting", description: "Full-featured web application for businesses.", specs: ["Advanced UI/UX", "Complex API Routes", "Payment Gateway", "Admin Dashboard", "3 Months Support"], popular: true },
        { name: "MERN SaaS", price: "₹1,49,999", period: "starting", description: "Subscription-based software platforms.", specs: ["Multi-tenant Architecture", "Subscription Billing", "Real-time (Socket.io)", "Email Automation", "6 Months Support"], popular: false },
        { name: "Enterprise MERN", price: "Custom", period: "Quote", description: "Highly scalable custom infrastructure.", specs: ["Microservices", "Load Balancing", "Redis Caching", "Docker / Kubernetes", "24/7 SLA Support"], popular: false },
    ];

    const services = [
        { icon: Monitor, title: "React Frontend", description: "Modern, responsive user interfaces with React, hooks, and component libraries.", features: ["React 18+", "Responsive UI", "State management", "Component libraries"] },
        { icon: Code, title: "Node.js / Express Backend", description: "RESTful and GraphQL APIs with Express, middleware, validation, and error handling.", features: ["REST & GraphQL APIs", "Middleware pipeline", "Input validation", "Error handling"] },
        { icon: Database, title: "MongoDB Database", description: "Flexible NoSQL schemas, indexing strategies, aggregation pipelines, and data modeling.", features: ["Schema design", "Indexing & aggregation", "Mongoose ODM", "Data migration"] },
        { icon: Shield, title: "Auth & Security", description: "JWT auth, role-based access, rate limiting, helmet, and input sanitization.", features: ["JWT / Session auth", "RBAC permissions", "Rate limiting", "Helmet & CORS"] },
        { icon: Zap, title: "Real-time Features", description: "Live chat, notifications, collaborative editing, and dashboards with Socket.io.", features: ["Socket.io integration", "Live notifications", "Presence indicators", "Room messaging"] },
        { icon: Rocket, title: "DevOps & Deployment", description: "CI/CD pipelines, Docker containers, PM2 process management, and cloud hosting.", features: ["Docker containers", "CI/CD pipelines", "PM2 / Nginx", "AWS / DigitalOcean"] },
    ];

    const process = [
        { step: "01", title: "Plan & Design", description: "Database schema, API endpoints, UI wireframes, and project architecture." },
        { step: "02", title: "Backend First", description: "Build and test the Node.js API, auth system, and database models." },
        { step: "03", title: "Frontend Build", description: "Develop React UI connected to live APIs with real data." },
        { step: "04", title: "Test & Ship", description: "End-to-end testing, security audit, deployment, and documentation." },
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
                            <span>MERN Stack</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        End-to-End <span className="text-pulse-500 font-playfair font-thin block">Web Apps</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Robust full-stack applications on <span className="font-playfair font-medium text-pulse-600">MongoDB, Express, React & Node.js</span> — starting at <span className="font-bold text-pulse-600">₹39,999</span>.
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
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">MERN <span className="text-pulse-500 font-playfair font-thin">Pricing</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div key={index} className={`relative bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 fade-in-element flex flex-col ${plan.popular ? "border-pulse-500 ring-2 ring-pulse-500/20" : "border-pulse-100"}`}>
                                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pulse-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                                <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
                                <div className="mb-6"><span className="text-4xl font-bold text-pulse-600">{plan.price}</span><span className="text-gray-500 text-sm"> {plan.period}</span></div>
                                <div className="space-y-2.5 mb-8 flex-grow">
                                    {plan.specs.map((spec, sIndex) => (
                                        <div key={sIndex} className="flex items-center gap-2"><Check className="text-pulse-500 flex-shrink-0" size={14} /><span className="text-gray-700 text-sm">{spec}</span></div>
                                    ))}
                                </div>
                                <Link to="/contact" className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.popular ? "bg-pulse-500 text-white hover:bg-pulse-600" : "bg-pulse-50 text-pulse-600 hover:bg-pulse-100"}`}>Get Started</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">What We <span className="text-pulse-500 font-playfair font-thin">Build</span></h2>
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
                                        <div key={fIndex} className="flex items-center gap-2.5"><Check className="text-pulse-500 flex-shrink-0" size={14} /><span className="text-gray-700 text-sm">{feature}</span></div>
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
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">Our <span className="text-pulse-500 font-playfair font-thin">Process</span></h2>
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

            <Footer />
        </div>
    );
};
export default MernStack;