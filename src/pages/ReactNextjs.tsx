import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight, Check, Star, Code, Zap, Layers, Globe, Shield, Rocket,
} from "lucide-react";

const ReactNextjs = () => {
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
        { name: "React SPA", price: "₹24,999", period: "starting", description: "Single Page Application using React.js.", specs: ["Component-based UI", "State Management (Redux)", "REST API Integration", "Responsive Design", "1 Month Support"], popular: false },
        { name: "Next.js Static", price: "₹49,999", period: "starting", description: "Blazing-fast SSG sites with Next.js.", specs: ["Static Site Generation", "SEO Optimized", "Tailwind CSS", "CMS Integration", "2 Months Support"], popular: true },
        { name: "Next.js Fullstack", price: "₹89,999", period: "starting", description: "SSR web applications with API routes.", specs: ["Server-Side Rendering", "API Routes & Database", "Authentication (NextAuth)", "Dynamic Routing", "3 Months Support"], popular: false },
        { name: "Enterprise React", price: "Custom", period: "Quote", description: "Large-scale React ecosystem deployment.", specs: ["Micro-frontends", "Advanced State Architecture", "CI/CD & Testing Suite", "Performance Monitoring", "Ongoing Maintenance"], popular: false },
    ];

    const services = [
        { icon: Code, title: "React.js Applications", description: "Interactive SPAs with component architecture, hooks, and modern state management.", features: ["Functional components", "Redux / Zustand", "React Query", "Tailwind CSS"] },
        { icon: Zap, title: "Next.js Framework", description: "Production-grade React framework with SSR, SSG, ISR, and App Router.", features: ["App Router", "SSR / SSG / ISR", "API Routes", "Image optimization"] },
        { icon: Layers, title: "TypeScript Integration", description: "Type-safe React and Next.js codebases for fewer bugs and better DX.", features: ["Full TypeScript setup", "Strict type checking", "Shared type libraries", "API type generation"] },
        { icon: Globe, title: "SEO & Performance", description: "Server-rendered pages, meta management, and Core Web Vitals optimization.", features: ["Server-side rendering", "Dynamic meta tags", "Core Web Vitals 90+", "Sitemap generation"] },
        { icon: Shield, title: "Auth & Security", description: "Secure authentication with NextAuth, JWT, OAuth providers, and middleware protection.", features: ["NextAuth.js", "OAuth integrations", "Protected routes", "CSRF protection"] },
        { icon: Rocket, title: "Deployment & CI/CD", description: "Automated deployments to Vercel, AWS, or custom infrastructure.", features: ["Vercel / AWS", "Preview deployments", "Git-based CI/CD", "Environment management"] },
    ];

    const process = [
        { step: "01", title: "Architecture", description: "Define component structure, data flow, routing strategy, and tech decisions." },
        { step: "02", title: "UI Components", description: "Build a reusable component library with Storybook and design tokens." },
        { step: "03", title: "Pages & APIs", description: "Develop pages, server actions, API routes, and database connections." },
        { step: "04", title: "Optimize", description: "Performance audit, SEO setup, testing, and production deployment." },
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
                            <span>React / Next.js</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Blazing Fast <span className="text-pulse-500 font-playfair font-thin block">Frontends</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Build interactive, SEO-friendly applications with <span className="font-playfair font-medium text-pulse-600">React.js & Next.js</span> — starting at <span className="font-bold text-pulse-600">₹24,999</span>.
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
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">React <span className="text-pulse-500 font-playfair font-thin">Pricing</span></h2>
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
export default ReactNextjs;