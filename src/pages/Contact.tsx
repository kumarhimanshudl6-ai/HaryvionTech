import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Phone, MessageCircle, Send, Star, Check, ChevronDown, Zap, Shield, Users, Target, Rocket, Code } from "lucide-react";

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
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: ""
      });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 2 hours",
      value: "haryviontechnologyindia@gmail.com",
      action: "mailto:haryviontechnologyindia@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Schedule a Call",
      description: "30-minute discovery session",
      value: "Book a meeting",
      action: "#calendar"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Sat, 9AM-7PM IST",
      value: "+91 98765 43210",
      action: "tel:+919876543210"
    }
  ];

  const faqs = [
    {
      icon: Rocket,
      question: "How quickly can you build an MVP?",
      answer: "Project timelines depend on the service and complexity. Websites and smaller applications can often be delivered within a few weeks, while larger software platforms may take several months. We use agile development with clear milestones to ensure steady progress.",
      category: "Timeline"
    },
    {
      icon: Target,
      question: "What's included in your IT project cost?",
      answer: "Our pricing can include UI/UX design, development, testing, deployment, integrations, hosting setup, and post-launch support depending on your project requirements. We provide a clear scope and transparent quotation.",
      category: "Pricing"
    },
    {
      icon: Users,
      question: "Do you provide consultation before starting a project?",
      answer: "Absolutely. We discuss your business requirements, recommend the right technology and approach, define the project scope, and help you choose a practical development roadmap before starting.",
      category: "Strategy"
    },
    {
      icon: Shield,
      question: "What happens after the project is launched?",
      answer: "We can provide post-launch support, maintenance, performance monitoring, bug fixes, feature enhancements, scaling, and ongoing technical assistance as your business grows.",
      category: "Support"
    },
    {
      icon: Code,
      question: "Do we get the source code and IP rights?",
      answer: "Yes, absolutely. You own 100% of the intellectual property and receive the complete source code. We also provide documentation, deployment guides, and knowledge transfer to ensure your team can maintain and expand the product.",
      category: "Ownership"
    },
    {
      icon: Zap,
      question: "How do you ensure quality in such a short timeframe?",
      answer: "We use proven frameworks, reusable components, secure development practices, code reviews, testing, and quality assurance throughout the development lifecycle.",
      category: "Quality"
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pulse-50/30 to-white" ref={sectionRef}>
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
                <img src="/star.svg" alt="Haryvion Technology India" className="w-3 h-3" />
              </span>
              <span>Get In Touch</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            Ready to Build
            <span className="text-pulse-500 font-playfair font-thin block">Your Digital Solution?</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Let's discuss your project and see how we can help you launch your idea <span className="font-playfair font-medium text-pulse-600">quickly and effectively</span>.
            Get a <span className="font-playfair font-medium text-pulse-600">free consultation</span> and custom quote for your IT project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 fade-in-element">
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">&lt; 2 hours</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">Free</div>
              <div className="text-gray-600">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
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
                Get Your Free <span className="text-pulse-500 font-playfair font-thin">Quote</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your project and we'll provide a <span className="font-playfair font-medium text-pulse-600">custom quote</span> within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select service type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile App Development</option>
                        <option value="software-development">Custom Software Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="ecommerce">E-commerce Development</option>
                        <option value="cloud">Cloud &amp; DevOps</option>
                        <option value="ai-ml">AI &amp; Machine Learning</option>
                        <option value="api-integration">API &amp; System Integration</option>
                        <option value="maintenance">Website &amp; Software Maintenance</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-15k">$5K - $15K</option>
                        <option value="15k-30k">$15K - $30K</option>
                        <option value="30k-50k">$30K - $50K</option>
                        <option value="50k+">$50K+</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">When do you need this?</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">Within 1–2 months</option>
                      <option value="2-3-months">Within 2–3 months</option>
                      <option value="3-6-months">Within 3–6 months</option>
                      <option value="6-months-plus">6+ months</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    placeholder="Tell us about your business, required service, goals, features, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get Free Consultation"}
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="opacity-0 fade-in-element">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Let's <span className="text-pulse-500 font-playfair font-thin">Connect</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Prefer to reach out directly? We're here to help in the way that works <span className="font-playfair font-medium text-pulse-600">best for you</span>.
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
                        <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <p className="text-pulse-600 font-medium">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose <span className="font-playfair font-thin">Haryvion Technology India</span>?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Clear project timelines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Experienced IT development team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Transparent project communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Transparent pricing & communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-pulse-200" size={16} />
                    <span>Post-launch support available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pulse-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pulse-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <div className="inline-flex items-center gap-2 bg-pulse-100/60 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-700 font-medium mb-6">
              <MessageCircle size={16} />
              <span>Expert Answers</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900">
              Everything You Need to
              <span className="text-pulse-500 font-playfair font-thin block">Know About IT Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get <span className="font-playfair font-medium text-pulse-600">expert guidance</span> for your technology project.
              These are the questions that matter most when choosing the right <span className="font-playfair font-medium text-pulse-600">IT solution</span>.
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
                    ? 'border-pulse-300 shadow-pulse-500/10'
                    : 'border-pulse-100 hover:border-pulse-200'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-8 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-pulse-500 text-white'
                        : 'bg-pulse-100 text-pulse-600 group-hover:bg-pulse-200'
                        }`}>
                        <IconComponent size={20} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${isOpen
                            ? 'bg-pulse-100 text-pulse-700'
                            : 'bg-gray-100 text-gray-600'
                            }`}>
                            {faq.category}
                          </span>
                        </div>
                        <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-pulse-700' : 'text-gray-900 group-hover:text-pulse-600'
                          }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <ChevronDown
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-pulse-500' : 'group-hover:text-pulse-500'
                        }`}
                      size={24}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}>
                    <div className={`px-8 pb-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                      }`}>
                      <div className="pl-16">
                        <div className="h-px bg-gradient-to-r from-pulse-200 to-transparent mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
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
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
                <Star size={16} />
                <span>Expert Consultation</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Still Have <span className="font-playfair font-thin">Questions</span>?
              </h3>
              <p className="text-xl text-pulse-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Schedule a <span className="font-playfair font-medium">free 30-minute consultation</span> with our IT experts. Get personalized guidance
                and a practical roadmap for your specific project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  Book Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:haryviontechnologyindia@gmail.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300"
                >
                  Email Our Experts
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
            Ready to Get <span className="font-playfair font-thin">Started</span>?
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Partner with <span className="font-playfair font-medium">Haryvion Technology India</span> for reliable, scalable IT solutions.
            Let's turn your idea into <span className="font-playfair font-medium">reality</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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