import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Users, Zap, Check, Target, MessageCircle, Smartphone, Monitor, Globe, Star } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      duration: "2-3 weeks",
      price: "Starting at $5,000",
      description: "Validate your idea quickly with a functional prototype. Perfect for testing core concepts and getting initial user feedback.",
      features: [
        "Interactive prototype with core features",
        "User testing framework setup",
        "Basic analytics integration",
        "Mobile-responsive design",
        "Source code included"
      ],
      ideal: "Early-stage startups, idea validation, investor demos"
    },
    {
      icon: Code,
      title: "Full-Stack MVP",
      duration: "4-6 weeks",
      price: "Starting at $15,000",
      description: "Complete web application with user authentication, database, and core business logic. Ready for real users and feedback.",
      features: [
        "Full user authentication system",
        "Database design and setup",
        "Admin dashboard",
        "Payment integration (if needed)",
        "Hosting and deployment",
        "2 weeks post-launch support"
      ],
      ideal: "Funded startups, B2B SaaS, marketplace platforms"
    },
    {
      icon: Smartphone,
      title: "Mobile MVP",
      duration: "6-8 weeks",
      price: "Starting at $20,000",
      description: "Native iOS and Android apps or cross-platform solution. Includes app store submission and launch strategy.",
      features: [
        "iOS and Android apps",
        "Push notifications",
        "Offline functionality",
        "App store optimization",
        "Analytics and crash reporting",
        "Beta testing setup"
      ],
      ideal: "Consumer apps, location-based services, social platforms"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Market Validation",
      description: "Test your assumptions before building. We help you design experiments, gather data, and make informed decisions."
    },
    {
      icon: MessageCircle,
      title: "Technical Consulting",
      description: "Get expert advice on technology choices, architecture decisions, and scaling strategies from our experienced team."
    },
    {
      icon: Target,
      title: "Growth & Scaling",
      description: "Ready to scale beyond your MVP? We provide ongoing development, optimization, and feature expansion services."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We start with a deep dive into your idea, target market, and business goals to create a clear development roadmap."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Define MVP scope, create user stories, design system architecture, and establish project timeline and milestones."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Rapid development cycles with weekly check-ins, regular demos, and continuous feedback integration."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your MVP, set up analytics, provide launch support, and offer post-launch optimization guidance."
    }
  ];

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
                <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
              </span>
              <span>Our Services</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            From <span className="text-pulse-500 font-playfair font-thin">Idea</span> to 
            <span className="text-pulse-500 font-playfair font-thin block">Market in Weeks</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Choose the perfect MVP development service for your startup stage. 
            <span className="font-playfair font-medium text-pulse-600"> Fast, affordable</span>, and designed to help you validate your ideas quickly.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              MVP Development <span className="text-pulse-500 font-playfair font-thin">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rapid prototypes to full-featured applications, we have the <span className="font-playfair font-medium text-pulse-600">right solution</span> for your startup journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const sectionIds = ["prototyping", "fullstack", "mobile"];
              return (
                <div key={index} id={sectionIds[index]} className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden opacity-0 fade-in-element">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pulse-100 to-pulse-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="text-pulse-600" size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-pulse-600 font-semibold">{service.duration}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-pulse-700 font-bold">{service.price}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="text-pulse-500 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-pulse-50 rounded-xl p-4 mb-6">
                      <div className="text-sm font-medium text-pulse-700 mb-1">Ideal for:</div>
                      <div className="text-sm text-pulse-600">{service.ideal}</div>
                    </div>
                    
                    <Link to="/contact" className="button-primary group flex items-center justify-center w-full">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Additional <span className="text-pulse-500 font-playfair font-thin">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for every stage of your <span className="font-playfair font-medium text-pulse-600">startup journey</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const sectionIds = ["validation", "consulting", "scaling"];
              return (
                <div key={index} id={sectionIds[index]} className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 text-center hover:shadow-xl transition-all duration-300 opacity-0 fade-in-element">
                  <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="text-pulse-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Our <span className="text-pulse-500 font-playfair font-thin">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A <span className="font-playfair font-medium text-pulse-600">proven methodology</span> that gets you from idea to launch faster than traditional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative opacity-0 fade-in-element">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-pulse-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Modern <span className="text-pulse-500 font-playfair font-thin">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use <span className="font-playfair font-medium text-pulse-600">cutting-edge technologies</span> to ensure your MVP is fast, scalable, and maintainable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/20 via-white/10 to-pulse-100/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:from-white/25 hover:via-white/15 hover:to-pulse-100/25 hover:border-white/40 transition-all duration-300 opacity-0 fade-in-element">
              <Monitor className="text-pulse-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2 text-gray-700">
                <div>React, Next.js, TypeScript</div>
                <div>Tailwind CSS, Framer Motion</div>
                <div>Progressive Web Apps</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/20 via-white/10 to-pulse-100/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:from-white/25 hover:via-white/15 hover:to-pulse-100/25 hover:border-white/40 transition-all duration-300 opacity-0 fade-in-element">
              <Globe className="text-pulse-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2 text-gray-700">
                <div>Node.js, Python, Go</div>
                <div>PostgreSQL, MongoDB</div>
                <div>Redis, Elasticsearch</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/20 via-white/10 to-pulse-100/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:from-white/25 hover:via-white/15 hover:to-pulse-100/25 hover:border-white/40 transition-all duration-300 opacity-0 fade-in-element">
              <Smartphone className="text-pulse-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile</h3>
              <div className="space-y-2 text-gray-700">
                <div>React Native, Flutter</div>
                <div>Native iOS & Android</div>
                <div>Cross-platform solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-400 via-pulse-500 to-pulse-600 relative overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circular elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-sm"></div>
          <div className="absolute top-12 -right-12 w-64 h-64 bg-white/15 rounded-full blur-sm"></div>
          <div className="absolute top-32 right-24 w-48 h-48 bg-white/10 rounded-full blur-sm"></div>
          
          {/* Medium circular elements */}
          <div className="absolute bottom-16 -right-8 w-32 h-32 bg-white/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/15 rounded-full blur-sm"></div>
          
          {/* Curved design lines */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-16 right-16 w-80 h-80 border border-white/20 rounded-full"></div>
            <div className="absolute top-32 right-32 w-64 h-64 border border-white/15 rounded-full"></div>
            <div className="absolute top-48 right-48 w-48 h-48 border border-white/10 rounded-full"></div>
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute bottom-24 right-16 w-16 h-16 bg-white/25 rounded-full blur-sm"></div>
          <div className="absolute top-24 right-64 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
            <Star size={16} />
            <span>Ready to Build?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Ready to Build Your <span className="font-playfair font-thin">MVP</span>?
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Let's discuss your project and find the <span className="font-playfair font-medium">perfect development approach</span> for your startup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 