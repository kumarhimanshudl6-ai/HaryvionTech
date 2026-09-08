import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Mail, Eye, Lock, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";

const Privacy = () => {
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

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      subtitle: "What data we gather and why",
      content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services.`,
      details: [
        "Personal information (name, email address, phone number)",
        "Project details and requirements you share with us",
        "Communication history and correspondence",
        "Payment and billing information",
        "Technical information about your use of our website"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      subtitle: "Making your experience better",
      content: `We use the information we collect to provide, maintain, and improve our MVP development services.`,
      details: [
        "Provide, maintain, and improve our MVP development services",
        "Process transactions and send related information",
        "Send you technical notices, updates, and support messages",
        "Respond to your comments, questions, and requests",
        "Communicate about services, promotions, and events",
        "Monitor and analyze trends and usage"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Information Sharing",
      subtitle: "Your data stays protected",
      content: `We do not sell, trade, or otherwise transfer your personal information to outside parties.`,
      details: [
        "With your explicit consent",
        "To trusted service providers who assist in operating our website and services",
        "To comply with legal obligations or protect our rights",
        "In connection with a business transfer or merger",
        "To prevent fraud or other illegal activities"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Lock,
      title: "Data Security",
      subtitle: "Enterprise-level protection",
      content: `We implement appropriate security measures to protect your personal information.`,
      details: [
        "SSL encryption for data transmission",
        "Secure servers and databases",
        "Regular security audits and monitoring",
        "Limited access to personal information",
        "Employee confidentiality agreements",
        "Industry-standard security protocols"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: FileText,
      title: "Data Retention",
      subtitle: "Clear retention policies",
      content: `We retain your information for as long as necessary to provide our services.`,
      details: [
        "Provide our services to you",
        "Comply with legal obligations",
        "Resolve disputes and enforce agreements",
        "Improve our services and develop new features"
      ],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Your Rights",
      subtitle: "You're in control",
      content: `You have comprehensive rights over your personal information.`,
      details: [
        "Access your personal information",
        "Update or correct your information",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Withdraw consent (where applicable)",
        "File a complaint with supervisory authorities"
      ],
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pulse-50/30 relative overflow-hidden" ref={sectionRef}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                  <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
                </span>
                <span>Privacy Policy</span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element animate-fade-in">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulse-500 to-purple-600 font-playfair font-thin">Privacy</span> <br className="hidden sm:block" />
              Is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pulse-500 font-playfair font-thin">Priority</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
              We believe in <span className="font-playfair font-medium text-pulse-600">complete transparency</span> about how we collect, use, and protect your information.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 opacity-0 fade-in-element">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pulse-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Data Protection</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">SSL</div>
              <div className="text-gray-600">Encrypted</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">GDPR</div>
              <div className="text-gray-600">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0 fade-in-element ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} space-y-8`}>
                    <div className="space-y-4">
                      <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${section.gradient} text-white text-sm font-medium`}>
                        <IconComponent size={18} />
                        <span>Section {index + 1}</span>
                      </div>
                      
                      <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900">
                        {section.title}
                      </h2>
                      
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {section.subtitle}
                      </p>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {section.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3 group">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                            <CheckCircle className="text-white" size={14} />
                          </div>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className={`${!isEven ? 'lg:order-1' : ''} relative`}>
                    <div className={`relative bg-gradient-to-br ${section.gradient} rounded-3xl p-12 h-96 flex items-center justify-center overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
                      <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/30 rounded-full blur-sm"></div>
                      <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/25 rounded-full blur-sm"></div>
                      
                      {/* Main Icon */}
                      <div className="relative z-10 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                        <IconComponent className="text-white" size={64} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 via-purple-600 to-blue-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 opacity-0 fade-in-element">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium mb-8">
            <Mail size={16} />
            <span>Privacy Support</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-white">
            Still Have <span className="font-playfair font-thin">Questions</span>?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Our privacy team is here to help. Get answers about our data practices and your rights.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Our Privacy Team</h3>
              <a href="mailto:privacy@mvpier.com" className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2 group">
                privacy@mvpier.com
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Protection Officer</h3>
              <a href="mailto:dpo@mvpier.com" className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2 group">
                dpo@mvpier.com
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy; 