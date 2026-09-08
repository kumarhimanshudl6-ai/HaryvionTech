import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Users, TrendingUp, Star, Award, Zap, Code, Rocket} from "lucide-react";

const Portfolio = () => {
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

  const caseStudies = [
    {
      title: "FoodieConnect",
      category: "Social Marketplace",
      description: "A peer-to-peer food sharing platform that connects home cooks with food lovers in their neighborhood.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      metrics: {
        timeToLaunch: "6 weeks",
        userGrowth: "10,000+ users",
        funding: "$500K raised"
      },
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      challenge: "Building a trusted marketplace with secure payments and user verification in a short timeframe.",
      solution: "Rapid MVP development focusing on core features: user profiles, listing creation, messaging, and integrated payments.",
      results: [
        "Launched beta in 6 weeks",
        "Achieved 10,000+ users in first 3 months", 
        "Secured seed funding within 6 months",
        "85% user retention rate"
      ],
      testimonial: {
        quote: "mvpier helped us validate our idea and get to market incredibly fast. Their expertise in rapid development was exactly what we needed.",
        author: "Sarah Chen",
        role: "Co-founder, FoodieConnect"
      }
    },
    {
      title: "TaskFlow",
      category: "B2B SaaS",
      description: "Project management tool designed specifically for remote teams, focusing on async collaboration and productivity tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      metrics: {
        timeToLaunch: "4 weeks",
        userGrowth: "50+ companies",
        funding: "$15K MRR"
      },
      technologies: ["Next.js", "TypeScript", "Prisma", "Vercel"],
      challenge: "Creating an intuitive project management interface that works well for distributed teams across time zones.",
      solution: "Built a clean, responsive dashboard with real-time updates, async communication tools, and detailed analytics.",
      results: [
        "Beta launch in 4 weeks",
        "50+ companies using the platform",
        "Reached $15K monthly recurring revenue",
        "Featured on Product Hunt"
      ],
      testimonial: {
        quote: "The speed and quality of development was outstanding. mvpier understood our vision and delivered beyond expectations.",
        author: "Mike Rodriguez",
        role: "Founder, TaskFlow"
      }
    },
    {
      title: "GreenTrack",
      category: "Mobile App",
      description: "Sustainability tracking app that helps users monitor their carbon footprint and discover eco-friendly alternatives.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      metrics: {
        timeToLaunch: "8 weeks",
        userGrowth: "25,000+ downloads",
        rating: "4.8/5 stars"
      },
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      challenge: "Building a cross-platform mobile app with complex data tracking and gamification features.",
      solution: "Developed a React Native app with offline functionality, push notifications, and engaging user experience.",
      results: [
        "iOS and Android launch in 8 weeks",
        "25,000+ downloads in first quarter",
        "4.8/5 app store rating",
        "Featured by Apple as 'App of the Day'"
      ],
      testimonial: {
        quote: "mvpier's mobile expertise helped us create an app that users love. The attention to UX detail was incredible.",
        author: "Emma Thompson",
        role: "CEO, GreenTrack"
      }
    }
  ];

  const stats = [
    { value: "100+", label: "MVPs Launched", icon: Rocket },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "$50M+", label: "Funding Raised", icon: Award },
    { value: "2-8", label: "Weeks to Launch", icon: Zap }
  ];

  const technologies = [
    { name: "React", logo: "⚛️", category: "Frontend" },
    { name: "Next.js", logo: "▲", category: "Frontend" },
    { name: "Node.js", logo: "🟢", category: "Backend" },
    { name: "TypeScript", logo: "🔷", category: "Language" },
    { name: "PostgreSQL", logo: "🐘", category: "Database" },
    { name: "MongoDB", logo: "🍃", category: "Database" },
    { name: "React Native", logo: "📱", category: "Mobile" },
    { name: "AWS", logo: "☁️", category: "Infrastructure" }
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
              <span>Our Portfolio</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            <span className="text-pulse-500 font-playfair font-thin">Success Stories</span> &
            <span className="text-pulse-500 font-playfair font-thin block">Case Studies</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Discover how we've helped <span className="font-playfair font-medium text-pulse-600">100+ founders</span> transform their ideas into successful products. 
            From rapid prototypes to fully-featured applications, see the impact of our <span className="font-playfair font-medium text-pulse-600">MVP development approach</span>.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-0 fade-in-element">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-pulse-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-pulse-500 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Featured <span className="text-pulse-500 font-playfair font-thin">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into how we've helped startups <span className="font-playfair font-medium text-pulse-600">validate ideas</span>, launch products, and scale successfully.
            </p>
          </div>
          
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pulse-100 opacity-0 fade-in-element">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-2 bg-pulse-100 px-3 py-1 rounded-full text-pulse-700 text-sm font-medium mb-4">
                      <Calendar size={14} />
                      <span>{study.category}</span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {study.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-pulse-50 rounded-xl">
                        <div className="text-sm text-pulse-700 font-medium">Launch Time</div>
                        <div className="text-lg font-bold text-pulse-600">{study.metrics.timeToLaunch}</div>
                      </div>
                      <div className="text-center p-4 bg-pulse-50 rounded-xl">
                        <div className="text-sm text-pulse-700 font-medium">Growth</div>
                        <div className="text-lg font-bold text-pulse-600">{study.metrics.userGrowth || study.metrics.funding}</div>
                      </div>
                      <div className="text-center p-4 bg-pulse-50 rounded-xl">
                        <div className="text-sm text-pulse-700 font-medium">Success</div>
                        <div className="text-lg font-bold text-pulse-600">{study.metrics.funding || study.metrics.rating}</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-6 text-white mb-6">
                      <blockquote className="text-lg leading-relaxed mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Users size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">{study.testimonial.author}</div>
                          <div className="text-pulse-100 text-sm">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Key Results:</h4>
                          <ul className="space-y-1">
                            {study.results.slice(0, 2).map((result, resultIndex) => (
                              <li key={resultIndex} className="text-sm text-gray-700 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Technologies We <span className="text-pulse-500 font-playfair font-thin">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use <span className="font-playfair font-medium text-pulse-600">cutting-edge technologies</span> to build scalable, maintainable, and future-proof MVPs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-pulse-100 text-center hover:shadow-xl transition-all duration-300 group opacity-0 fade-in-element">
                <div className="text-3xl mb-3">{tech.logo}</div>
                <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-pulse-600 font-medium">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-3xl p-12 text-white text-center opacity-0 fade-in-element">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
              <Star size={16} />
              <span>Client Success</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Our Clients' <span className="font-playfair font-thin">Success</span> is Our Success
            </h2>
            <p className="text-xl text-pulse-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              These numbers represent <span className="font-playfair font-medium">real businesses</span>, real founders, and real dreams turned into reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-pulse-100">Total Funding Raised</div>
                <div className="text-sm text-pulse-200 mt-2">by our MVP clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-pulse-100">Users Acquired</div>
                <div className="text-sm text-pulse-200 mt-2">across all launched MVPs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-pulse-100">Go to Full Product</div>
                <div className="text-sm text-pulse-200 mt-2">after MVP validation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
            Ready to Create Your <span className="text-pulse-500 font-playfair font-thin">Success Story</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join the founders who've successfully launched and scaled their products with mvpier. 
            Let's discuss how we can help you achieve <span className="font-playfair font-medium text-pulse-600">similar results</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pulse-700 transition-all duration-300 inline-flex items-center gap-2 group">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;