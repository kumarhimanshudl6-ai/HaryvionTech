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
  Server,
  Shield,
  Cloud,
  Database,
  Terminal,
  Activity,
  Network,
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
      setTimeout(() => {
        observer.observe(el);
      }, index * 50);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Our systems engineers will get back to you within 2 hours.");
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
      title: "Email Our Engineers",
      description: "Direct line to our technical accounts desk",
      value: "haryviontechnologyindia@gmail.com",
      action: "mailto:haryviontechnologyindia@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "Consultation Request",
      description: "Book an architecture blueprint sync",
      value: "Request architectural call",
      action: "#contact",
    },
    {
      icon: Phone,
      title: "Call Direct Desk",
      description: "Support Desk (Mon-Sat, 9AM-7PM IST)",
      value: "+91 7465877467",
      action: "tel:+91 7465877467",
    },
  ];

  const faqs = [
    {
      icon: Server,
      question: "Can you migrate our existing servers with zero downtime?",
      answer:
        "Yes. Our deployment teams configure dynamic staging replicas and execute block-level transfers alongside localized DNS cutovers. This guarantees a seamless migration of your VPS arrays, databases, or hosting setups with zero downtime to active operational loops.",
      category: "Migration",
    },
    {
      icon: Network,
      question: "What SLA guarantees do Haryvion systems provide?",
      answer:
        "We offer a 99.99% network uptime SLA on all custom hybrid clouds, bare-metal setups, and NVMe virtual private servers. Our monitoring arrays scan packet loss and node temperatures, performing immediate traffic rerouting during network issues.",
      category: "Infrastructure",
    },
    {
      icon: Shield,
      question: "How do you handle host-level security and firewalls?",
      answer:
        "We apply advanced defense strategies: isolated private networks, secure VPN tunneling, custom Web Application Firewalls (WAF), hourly threat mitigation sweeps, and operating system-level hardening (on both Linux and Windows arrays). We also configure and manage dedicated SSL encryption layers.",
      category: "Security",
    },
    {
      icon: Database,
      question: "What is your automated backup retention schedule?",
      answer:
        "Our standard backups capture server states and databases continuously with snapshots stored in offsite cloud storage. We support hourly, daily, and weekly schedules, custom backup policies, and full compliance configurations to secure critical assets.",
      category: "Recovery",
    },
    {
      icon: Terminal,
      question: "Are custom custom software and ERP applications proprietary?",
      answer:
        "No. You hold 100% intellectual property ownership and source code access for all custom software, web applications, and integrated ERP tools. We provide fully documented databases, deployment blueprints, and system maps.",
      category: "Ownership",
    },
    {
      icon: Activity,
      question: "What is included in Haryvion's Managed IT Support?",
      answer:
        "Our support packages cover round-the-clock proactive monitoring, regular software patch cycles, speed and performance optimizations, secure API adjustments, network port health management, and remote infrastructure troubleshooting.",
      category: "Support",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-pulse-50/30 to-white"
      ref={sectionRef}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
            <div
              className="pulse-chip opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.1s",
              }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                <img
                  src="/star.svg"
                  alt="Haryvion Technology India"
                  className="w-3 h-3"
                />
              </span>
              <span>Get In Touch</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            Architect Your
            <span className="text-pulse-500 font-playfair font-thin block">
              Enterprise IT Infrastructure
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Let's build a stable network strategy, secure server array, or custom enterprise software application. Request a{" "}
            <span className="font-playfair font-medium text-pulse-600">
              free technical consultation
            </span>{" "}
            and project estimate today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 fade-in-element">
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">
                &lt; 2 Hours
              </div>
              <div className="text-gray-600 text-sm">Response Time SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">Free</div>
              <div className="text-gray-600 text-sm">Technical Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">
                24/7/365
              </div>
              <div className="text-gray-600 text-sm">Systems Watch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="opacity-0 fade-in-element">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Request an{" "}
                <span className="text-pulse-500 font-playfair font-thin">
                  IT Proposal
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Share your workload and server requirements. Our systems architects will deliver a{" "}
                <span className="font-playfair font-medium text-pulse-600">
                  comprehensive outline
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
                      Corporate Email *
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
                      Primary Service *
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white text-sm"
                      >
                        <option value="">Select IT Service Area</option>
                        <option value="vps-hosting">
                          VPS / Dedicated Server Hosting
                        </option>
                        <option value="cloud-storage">
                          Cloud Compute & Object Storage
                        </option>
                        <option value="networking-security">
                          Firewalls, VPN & Network Security
                        </option>
                        <option value="server-management">
                          Server Administration & Migration
                        </option>
                        <option value="software-development">
                          Web & Custom Software Dev
                        </option>
                        <option value="mobile-apps">
                          Mobile App Development
                        </option>
                        <option value="enterprise-software">
                          Business Software (ERP / CRM)
                        </option>
                        <option value="domains-ssl-email">
                          Domains, SSL & Business Email
                        </option>
                        <option value="managed-support">
                          Managed IT Support & SLA Desk
                        </option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Project Scale *
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white text-sm"
                      >
                        <option value="">Select workload level</option>
                        <option value="startup-tier">
                          Startup / Single Instance
                        </option>
                        <option value="midsize-business">
                          Midsize / Cloud cluster
                        </option>
                        <option value="enterprise-tier">
                          Enterprise / High-redundancy array
                        </option>
                        <option value="custom-spec">
                          Custom hardware specification
                        </option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Deployment *
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white text-sm"
                    >
                      <option value="">When do you need deployment?</option>
                      <option value="immediate-action">Immediate / Critical Outage</option>
                      <option value="1-2-weeks">Within 1-2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="quarterly-planning">Quarterly Roadmap / Plan</option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Workload Specifications & Objectives *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm"
                    placeholder="Provide details about your current hosting platforms, storage requirements, target operating systems, custom program features, or direct server issues..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Provisioning Proposal..." : "Request Proposal & Consultation"}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="opacity-0 fade-in-element">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Technical <span className="text-pulse-500 font-playfair font-thin">Channels</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect directly with our engineering resources to resolve host incidents or configure scale designs immediately.
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
                      <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center group-hover:bg-pulse-200 transition-colors">
                        <IconComponent className="text-pulse-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                          {method.description}
                        </p>
                        <p className="text-pulse-600 font-medium text-sm">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Why Partners Rely On{" "}
                  <span className="font-playfair font-thin">Haryvion</span>
                </h3>
                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Strict 99.99% Network Uptime SLAs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Proactive 24/7/365 system logs watch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Complete host migrations managed by experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Transparent resource allocations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Unified database, hosting, security, and developer ecosystem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pulse-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pulse-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <div className="inline-flex items-center gap-2 bg-pulse-100/60 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-700 font-medium mb-6">
              <MessageCircle size={16} />
              <span>Technical Support Desk</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900">
              Infrastructure & Software
              <span className="text-pulse-500 font-playfair font-thin block">
                Deployment FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore critical considerations regarding host migrations, backup retention policies, network layers, and custom software setups.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${isOpen
                    ? "border-pulse-300 shadow-pulse-500/10"
                    : "border-pulse-100 hover:border-pulse-200"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-8 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen
                          ? "bg-pulse-500 text-white"
                          : "bg-pulse-100 text-pulse-600 group-hover:bg-pulse-200"
                          }`}
                      >
                        <IconComponent size={20} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${isOpen
                              ? "bg-pulse-100 text-pulse-700"
                              : "bg-gray-100 text-gray-600"
                              }`}
                          >
                            {faq.category}
                          </span>
                        </div>
                        <h3
                          className={`text-lg font-bold transition-colors ${isOpen
                            ? "text-pulse-700"
                            : "text-gray-900 group-hover:text-pulse-600"
                            }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <ChevronDown
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen
                        ? "rotate-180 text-pulse-500"
                        : "group-hover:text-pulse-500"
                        }`}
                      size={24}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <div
                      className={`px-8 pb-8 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <div className="pl-16">
                        <div className="h-px bg-gradient-to-r from-pulse-200 to-transparent mb-6"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expert CTA */}
          <div className="mt-16 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden opacity-0 fade-in-element">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                <Star size={16} />
                <span>Architecture Session</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Need Complex <span className="font-playfair font-thin">Specs</span>?
              </h3>
              <p className="text-xl text-pulse-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Schedule a <span className="font-playfair font-medium">free 30-minute infrastructure blueprint session</span>. Design redundant databases, cloud clusters, and secure networks directly with our senior engineers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  Start Proposal Form
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="mailto:haryviontechnologyindia@gmail.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300"
                >
                  Email Account Managers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
        <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Secure Your <span className="font-playfair font-thin">Operations</span> today
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Partner with <span className="font-playfair font-medium">Haryvion Technology India</span> for enterprise host resilience, custom web platforms, and managed infrastructure pipelines.
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
