import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight, Check, Star, Globe, Layers, Code, Zap, Shield, Users,
} from "lucide-react";

const EcommerceDevelopment = () => {
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
        { name: "Basic Store", price: "₹29,999", period: "starting", description: "Standard WooCommerce or Shopify setup.", specs: ["Up to 50 Products", "Theme Customization", "Payment Gateway", "Basic SEO", "1 Month Support"], popular: false },
        { name: "Pro Store", price: "₹59,999", period: "starting", description: "Advanced store with custom features.", specs: ["Up to 500 Products", "Custom UI Design", "Inventory Sync", "Abandoned Cart", "3 Months Support"], popular: true },
        { name: "Custom Platform", price: "₹1,19,999", period: "starting", description: "Headless commerce (Next.js + Backend).", specs: ["Unlimited Products", "Headless Architecture", "Custom Admin", "API Integrations", "6 Months Support"], popular: false },
        { name: "Multi-Vendor", price: "₹1,99,999", period: "starting", description: "Amazon/Flipkart-style marketplace.", specs: ["Vendor Dashboards", "Commission System", "Wallet & Payouts", "Advanced Analytics", "1 Year Support"], popular: false },
    ];

    const services = [
        { icon: Globe, title: "WooCommerce Stores", description: "WordPress-powered online stores with custom themes, plugins, and payment gateways.", features: ["Custom themes", "Plugin development", "Razorpay / Stripe", "Product import tools"] },
        { icon: Layers, title: "Shopify Development", description: "Shopify and Shopify Plus stores with custom Liquid themes and app integrations.", features: ["Custom Liquid themes", "Shopify Apps", "Checkout customization", "Shopify Plus"] },
        { icon: Code, title: "Headless Commerce", description: "Decoupled storefronts with Next.js/React frontend and custom backend.", features: ["Next.js storefront", "Shopify Hydrogen", "Medusa.js", "Custom cart flow"] },
        { icon: Zap, title: "Payment Integration", description: "Secure payment gateways popular in India — UPI, cards, wallets, and EMI.", features: ["Razorpay / PayU", "UPI & wallets", "International cards", "Subscription billing"] },
        { icon: Shield, title: "Inventory & Orders", description: "Real-time stock management, order tracking, shipping integrations, and returns.", features: ["Real-time inventory", "Order management", "Shiprocket / Delhivery", "Returns & refunds"] },
        { icon: Users, title: "Multi-Vendor Marketplace", description: "Complete marketplace platforms with vendor onboarding, commissions, and payouts.", features: ["Vendor registration", "Commission engine", "Payout automation", "Vendor analytics"] },
    ];

    const process = [
        { step: "01", title: "Store Planning", description: "Product catalog structure, payment methods, shipping rules, and priorities." },
        { step: "02", title: "Design & UX", description: "Conversion-focused store design with optimized product pages and checkout flow." },
        { step: "03", title: "Build & Integrate", description: "Platform setup, payment/shipping integrations, and custom features." },
        { step: "04", title: "Launch & Grow", description: "Go-live, analytics setup, marketing tools, and ongoing optimization." },
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
                            <span>E-commerce</span>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
                        Sell Online <span className="text-pulse-500 font-playfair font-thin block">Successfully</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
                        Scalable WooCommerce, Shopify & custom headless commerce platforms — starting at <span className="font-bold text-pulse-600">₹29,999</span>.
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
                        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">E-Commerce <span className="text-pulse-500 font-playfair font-thin">Pricing</span></h2>
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
export default EcommerceDevelopment;