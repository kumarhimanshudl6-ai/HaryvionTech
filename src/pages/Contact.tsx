import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Star,
  Check,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Thank you! Our team will get back to you within 2 hours."
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Direct line to our team",
      value: "haryviontechnologyindia@gmail.com",
      action: "mailto:haryviontechnologyindia@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "Consultation Request",
      description: "Book a free strategy call",
      value: "Request a call",
      action: "#contact",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon–Sat, 9AM–7PM IST",
      value: "+91 7465877467",
      action: "tel:+917465877467",
    },
  ];

  // ── FAQ matching screenshot style, Haryvion branded ──
  const faqs = [
    {
      question: "What services does Haryvion Technology offer?",
      answer:
        "Haryvion Technology provides end-to-end website and software development services, including custom web applications, mobile app development, fintech software solutions, API integration, UI/UX design, and scalable enterprise platforms. We help startups and enterprises turn ideas into secure, high-performance digital products.",
    },
    {
      question: "What fintech products and platforms do you specialize in?",
      answer:
        "We specialize in B2B, B2C, and Reseller fintech platforms including AEPS, BBPS, DMT, UPI payouts, digital wallets, payment gateways, lending systems, and white-label reseller portals. All solutions are built with bank-grade security, RBI compliance focus, and multi-level commission engines.",
    },
    {
      question: "How can I get a quote for a project or request a consultation?",
      answer:
        "Simply fill out the contact form on this page with your project details, or email us at haryviontechnologyindia@gmail.com. You can also call +91 7465877467. We offer a free consultation and typically respond with a customized quotation within 24 hours.",
    },
    {
      question: "Do you build custom applications for both Android and iOS?",
      answer:
        "Yes. We build native apps for Android (Kotlin/Java) and iOS (Swift/SwiftUI), as well as cross-platform apps using React Native and Flutter. Whether you need a single-platform MVP or a full dual-platform release, we handle design, development, testing, and App Store / Play Store publishing.",
    },
    {
      question: "Can Haryvion Technology help with B2B, B2C, and reseller platforms?",
      answer:
        "Absolutely. We are specialists in multi-level B2B, B2C, and Reseller portal development. Our platforms support role-based dashboards (Admin, Distributor, Retailer, Customer), configurable commission structures, AEPS/BBPS/DMT services, white-label branding, and real-time analytics — all under one unified system.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on scope. A basic website takes 2–4 weeks, a mobile app MVP 4–8 weeks, and a full fintech or enterprise platform 2–6 months. We work in agile sprints with regular demos so you always see progress.",
    },
    {
      question: "Will I own the source code and intellectual property?",
      answer:
        "Yes — 100%. Upon final delivery and payment, you receive full ownership of the source code, designs, documentation, and all project assets. There are no lock-ins or hidden licensing fees.",
    },
    {
      question: "Do you provide support and maintenance after launch?",
      answer:
        "Yes. We offer flexible AMC and managed support plans covering bug fixes, security patches, performance monitoring, feature enhancements, and 24/7 incident response so your product stays secure, fast, and up to date.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-pulse-50/30 to-white"
      ref={sectionRef}
    >
      <Navbar />

      {/* ───────────── HERO ───────────── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-2 pt-8 sm:pt-6 md:pt-4">
            <div
              className="pulse-chip opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                <img src="/star.svg" alt="star" className="w-3 h-3" />
              </span>
              <span>Get In Touch</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            Let's Build Something
            <span className="text-pulse-500 font-playfair font-thin block">
              Extraordinary
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Tell us about your project — fintech platforms, mobile apps, custom
            software, or digital marketing. Request a{" "}
            <span className="font-playfair font-medium text-pulse-600">
              free consultation
            </span>{" "}
            and get a tailored proposal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 fade-in-element">
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">&lt; 2 Hours</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">Free</div>
              <div className="text-gray-600 text-sm">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT FORM & INFO ───────────── */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="opacity-0 fade-in-element">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Request a{" "}
                <span className="text-pulse-500 font-playfair font-thin">Proposal</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Share your requirements. Our team will deliver a{" "}
                <span className="font-playfair font-medium text-pulse-600">
                  customized outline
                </span>{" "}
                within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm"
                    placeholder="Your organization"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="fintech">Fintech / B2B B2C Reseller</option>
                        <option value="mobile-apps">Mobile App Development</option>
                        <option value="web-development">Web Development</option>
                        <option value="custom-software">Custom Software</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="cloud-hosting">Cloud / Hosting</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white text-sm"
                      >
                        <option value="">Select budget</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                        <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>
                        <option value="3l-plus">₹3,00,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white text-sm"
                    >
                      <option value="">When do you need it?</option>
                      <option value="asap">ASAP / Urgent</option>
                      <option value="1-2-weeks">Within 1–2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1–3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm"
                    placeholder="Tell us about your project goals, features needed, target users, and any existing systems..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request Proposal & Consultation"}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>

            {/* Contact cards + why us */}
            <div className="opacity-0 fade-in-element">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Get in{" "}
                <span className="text-pulse-500 font-playfair font-thin">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out directly — we're happy to discuss your project, answer
                questions, or schedule a free consultation.
              </p>

              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-pulse-100 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center group-hover:bg-pulse-200 transition-colors flex-shrink-0">
                        <IconComponent className="text-pulse-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                          {method.description}
                        </p>
                        <p className="text-pulse-600 font-medium text-sm break-all">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Why Partners Choose{" "}
                  <span className="font-playfair font-thin">Haryvion</span>
                </h3>
                <div className="space-y-3.5 text-sm">
                  {[
                    "End-to-end fintech, web & mobile expertise",
                    "Transparent pricing with no hidden fees",
                    "100% source code & IP ownership",
                    "Agile delivery with regular demos",
                    "Post-launch support & maintenance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="text-pulse-200 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ — matches screenshot style ───────────── */}
      <section
        id="faq"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto relative">
          {/* Badge */}
          <div className="text-center mb-10 opacity-0 fade-in-element">
            <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-md shadow-blue-200">
              <HelpCircle size={13} />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-3 opacity-0 fade-in-element">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "border-blue-200 shadow-md shadow-blue-100/50"
                    : "border-gray-100 shadow-sm hover:border-blue-100 hover:shadow"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
        <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Ready to Start Your{" "}
            <span className="font-playfair font-thin">Project</span>?
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Partner with{" "}
            <span className="font-playfair font-medium">Haryvion Technology</span> for
            fintech platforms, mobile apps, custom software, and digital growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Get Free Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;