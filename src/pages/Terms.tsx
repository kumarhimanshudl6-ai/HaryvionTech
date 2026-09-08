import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Shield, CreditCard, AlertTriangle, Users, Scale, ArrowRight, Clock, CheckCircle2, Star } from "lucide-react";

const Terms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

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

  const sections = [
    {
      icon: FileText,
      title: "Services Description",
      category: "What We Do",
      content: `Haryvion Technology India provides professional IT services and custom digital solutions for businesses, organizations, and individuals.`,
      details: [
        "Web and website development",
        "Custom software and business application development",
        "Mobile application development",
        "Technical consulting, architecture, and technology planning",
        "Maintenance, support, testing, and deployment"
      ],
      color: "blue",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "User Responsibilities",
      category: "Your Commitments",
      content: `By partnering with us, you agree to collaborate professionally and provide what we need to succeed together.`,
      details: [
        "Provide accurate and complete information",
        "Maintain the confidentiality of your account credentials",
        "Use our services in compliance with applicable laws",
        "Respect intellectual property rights",
        "Communicate professionally and respectfully",
        "Provide timely feedback and approvals during development",
        "Make payments according to agreed terms"
      ],
      color: "green",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      category: "Billing & Payments",
      content: `Transparent pricing and clear payment terms ensure no surprises in our business relationship.`,
      details: [
        "Project costs are outlined in individual service agreements",
        "Payment schedules vary by project scope and duration",
        "Invoices are typically due within 30 days of issuance",
        "Late payments may incur additional fees",
        "Refunds are subject to our refund policy",
        "All prices are in INR unless otherwise specified",
        "You are responsible for any applicable taxes"
      ],
      color: "purple",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      category: "Ownership Rights",
      content: `Clear ownership terms that protect both your ideas and our expertise.`,
      details: [
        "You retain ownership of your original ideas and concepts",
        "Upon full payment, you receive ownership of the developed code",
        "Haryvion Technology India retains rights to its development methodologies, reusable tools, libraries, and pre-existing intellectual property",
        "Third-party components remain subject to their respective licenses",
        "We may use anonymized project data for case studies (with permission)",
        "You grant us license to use your feedback for service improvement"
      ],
      color: "orange",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Warranties and Disclaimers",
      category: "Service Guarantees",
      content: `We stand behind our work while setting realistic expectations about business outcomes.`,
      details: [
        "We provide services with professional skill and care",
        "No guarantee of specific business outcomes or success",
        "Services are provided 'as is' without warranty beyond what's legally required",
        "We are not liable for third-party service interruptions",
        "Your use of developed applications is at your own risk",
        "We disclaim liability for business losses or consequential damages",
        "Our liability is limited to the amount paid for services"
      ],
      color: "teal",
      gradient: "from-cyan-500 to-blue-700"
    },
    {
      icon: AlertTriangle,
      title: "Termination and Cancellation",
      category: "End of Service",
      content: `Fair termination policies that protect both parties while ensuring work is properly concluded.`,
      details: [
        "Either party may terminate with written notice",
        "Termination doesn't affect completed work or payment obligations",
        "You retain rights to completed work upon payment",
        "We may suspend services for non-payment",
        "Material breach may result in immediate termination",
        "Post-termination, confidentiality obligations continue",
        "Unused prepaid amounts may be refunded at our discretion"
      ],
      color: "red",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden" ref={sectionRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                  <img src="/star.svg" alt="Haryvion Technology India" className="w-3 h-3" />
                </span>
                <span>Terms of Service</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element animate-fade-in">
              Clear <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-playfair font-thin">Terms</span>,<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-playfair font-thin">Fair</span> Partnership
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 opacity-0 fade-in-element">
              Straightforward terms that protect both parties and support clear, professional IT service engagements.
            </p>

            <div className="mx-auto mb-12 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 opacity-0 fade-in-element">
              Haryvion Technology India • Serving clients since 2025
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto opacity-0 fade-in-element">
              <div className="flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <CheckCircle2 className="text-green-500" size={24} />
                <span className="font-medium text-gray-700">Fair & Transparent</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <Shield className="text-blue-500" size={24} />
                <span className="font-medium text-gray-700">Legally Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <Star className="text-purple-500" size={24} />
                <span className="font-medium text-gray-700">Client-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terms Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-playfair font-thin">Agreement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any section to explore the details. We believe in <span className="font-playfair font-medium text-pulse-600">complete transparency</span>.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-300 to-pink-200"></div>

            <div className="space-y-16">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                const isExpanded = expandedSection === index;
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className={`relative opacity-0 fade-in-element`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center border-4 border-white shadow-lg z-10`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                      <div className={`${!isLeft ? 'lg:order-2 lg:ml-8' : 'lg:mr-8'}`}>
                        <div
                          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isExpanded ? 'ring-2 ring-blue-400' : ''}`}
                          onClick={() => toggleSection(index)}
                        >
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${section.gradient} text-white text-sm font-medium`}>
                              <Clock size={14} />
                              <span>{section.category}</span>
                            </div>
                          </div>

                          <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            {section.title}
                          </h3>

                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {section.content}
                          </p>

                          <div className="flex items-center gap-2 text-blue-600 font-medium">
                            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                            <ArrowRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </div>

                          {/* Expandable Details */}
                          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 mt-6' : 'max-h-0'}`}>
                            <div className="space-y-3 pt-6 border-t border-gray-200">
                              {section.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start gap-3 group">
                                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <CheckCircle2 className="text-white" size={14} />
                                  </div>
                                  <span className="text-gray-700">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className={`${!isLeft ? 'lg:order-1' : ''} hidden lg:block`}>
                        <div className={`relative h-64 bg-gradient-to-br ${section.gradient} rounded-3xl overflow-hidden`}>
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                              backgroundSize: '24px 24px'
                            }}></div>
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 rounded-full"></div>
                          <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/30 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/25 rounded-full"></div>

                          {/* Section Number */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl font-bold text-white/40">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 opacity-0 fade-in-element">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 font-medium mb-8">
              <Scale size={16} />
              <span>Legal Framework</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-white">
              <span className="font-playfair font-thin">Important</span> Legal Information
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              These terms create a <span className="font-playfair font-medium text-white">binding legal agreement</span> between you and Haryvion Technology India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Governing Law & Jurisdiction</h3>
              <p className="text-white/80 leading-relaxed">
                These terms are governed by the applicable laws of India and the jurisdiction in which Haryvion Technology India is registered.
                Any disputes will be resolved through binding arbitration or in the appropriate courts,
                ensuring fair and efficient resolution of any issues.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Contact for Legal Matters</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                For questions about these terms or legal matters, our team is available to help.
              </p>
              <a href="mailto:haryviontechnologyindia@gmail.com" className="text-white hover:text-blue-300 transition-colors inline-flex items-center gap-2 group">
                haryviontechnologyindia@gmail.com
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-white/90 text-center leading-relaxed">
              <strong className="text-white">Important:</strong> By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these terms. If you do not agree with any part of these terms,
              please do not use our services. Individual project agreements may include additional specific terms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-playfair font-thin">Partner</span> With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Now that you understand our terms, let's discuss your project and start building something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 group shadow-lg">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/privacy" className="border-2 border-purple-500 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms; 