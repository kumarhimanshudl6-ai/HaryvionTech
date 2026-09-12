import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight, Check, Star, Monitor, Globe, Code, Zap, Layout, Search,
} from "lucide-react";

const WebDevelopment = () => {
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
            name: "Basic Website",
            price: "₹14,999",
            period: "starting",
            description: "Perfect for portfolios and small businesses.",
            specs: ["Up to 5 Pages", "Responsive Design", "Contact Form", "Basic SEO Setup", "1 Month Support"],
            popular: false,
        },
        {
            name: "Corporate Site",
            price: "₹34,999",
            period: "starting",
            description: "Professional web presence for growing companies.",
            specs: ["Up to 15 Pages", "Custom UI/UX", "CMS Integration", "Performance Optimized", "3 Months Support"],
            popular: true,
        },
        {
            name: "Web Application",
            price: "₹89,999",
            period: "starting",
            description: "Custom portals with user authentication & databases.",
            specs: ["Custom Web App", "User Dashboard", "API Integration", "Secure Database", "6 Months Support"],
            popular: false,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "Quote",
            description: "Complex platforms with massive scale requirements.",
            specs: ["Microservices", "High Availability", "Advanced Security", "Custom Integrations", "24/7 SLA Support"],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Layout,
            title: "Custom Web Design",
            description: "Unique, brand-aligned designs crafted from scratch — no generic templates. Every pixel reflects your business identity.",
            features: ["Brand-aligned design", "Custom illustrations", "Design system creation", "Figma prototypes"],
        },
        {
            icon: Monitor,
            title: "Responsive Development",
            description: "Flawless experiences across desktop, tablet, and mobile. Your site looks perfect on every screen size.",
            features: ["Mobile-first approach", "Cross-browser testing", "Touch-optimized UI", "Fluid layouts"],
        },
        {
            icon: Code,
            title: "CMS Development",
            description: "WordPress, Strapi, or headless CMS setups so your team can update content without touching code.",
            features: ["WordPress / Strapi / Sanity", "Custom post types", "Easy content editing", "Media management"],
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Lightning-fast load times with code splitting, image optimization, caching, and CDN delivery.",
            features: ["Core Web Vitals 90+", "Image optimization", "Lazy loading", "CDN integration"],
        },
        {
            icon: Search,
            title: "SEO-Ready Architecture",
            description: "Built with semantic HTML, structured data, meta tags, and sitemap generation for search visibility.",
            features: ["Semantic HTML5", "Schema markup", "XML sitemaps", "Open Graph tags"],
        },
        {
            icon: Globe,
            title: "Business Web Portals",
            description: "Secure client portals, employee dashboards, and B2B platforms with role-based access control.",
            features: ["User authentication", "Role-based access", "Dashboard analytics", "Secure data handling"],
        },
    ];

    const process = [
        { step: "01", title: "Discovery", description: "We learn your brand, audience, and goals to define the perfect website strategy." },
        { step: "02", title: "Design", description: "Wireframes and high-fidelity mockups for your approval before a single line of code." },
        { step: "03", title: "Develop", description: "Clean, modern code with responsive layouts, CMS setup, and performance tuning." },
        { step: "04", title: "Launch", description: "Testing, deployment, DNS setup, and post-launch support to keep you running." },
    ];

    const techStack = ["HTML5 / CSS3", "JavaScript / TypeScript", "React / Next.js", "WordPress", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel / AWS"];

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
                            <span>Web Development</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Modern & Scalable{" "}
                        <span className="text-pulse-500 font-playfair font-thin block">Web Solutions</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Custom corporate websites, landing pages, and web applications built for speed, security, and{" "}
                        <span className="font-playfair font-medium text-pulse-600">business growth</span> — starting at{" "}
                        <span className="font-bold text-pulse-600">₹14,999</span>.
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
                            Web Development <span className="text-pulse-500 font-playfair font-thin">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent pricing in <span className="font-playfair font-medium text-pulse-600">Indian Rupees (INR)</span>. No hidden costs.
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
                        All prices in INR. GST extra as applicable. Custom quotes available for complex projects.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 opacity-0 fade-in-element">
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                            What We <span className="text-pulse-500 font-playfair font-thin">Build</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From simple business sites to complex web applications —{" "}
                            <span className="font-playfair font-medium text-pulse-600">engineered for results</span>.
                        </p>
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
                            Our <span className="text-pulse-500 font-playfair font-thin">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative opacity-0 fade-in-element text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-pulse-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900 opacity-0 fade-in-element">
                        Technologies We <span className="text-pulse-500 font-playfair font-thin">Use</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 mt-10 opacity-0 fade-in-element">
                        {techStack.map((tech, index) => (
                            <span key={index} className="px-5 py-2.5 bg-white border border-pulse-100 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-pulse-300 hover:text-pulse-600 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
                <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                        <Star size={16} />
                        <span>Starting at ₹14,999</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                        Ready to Build Your <span className="font-playfair font-thin">Website</span>?
                    </h2>
                    <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
                        Let's create a fast, beautiful, and conversion-focused web presence for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
                            Start Your Project
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebDevelopment;