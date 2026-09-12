import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Shield,
  Server,
  Cloud,
  HardDrive,
  Headphones,
  Award,
  CheckCircle,
  Star,
  Activity,
  Heart,
} from "lucide-react";

const About = () => {
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

  const values = [
    {
      icon: Shield,
      title: "Security by Design",
      description:
        "We build security into every layer—from server hardening, advanced firewalls, and isolated networks to regular vulnerability updates.",
    },
    {
      icon: Zap,
      title: "Uncompromised Reliability",
      description:
        "High availability and low latency aren't optional. Our infrastructure targets 99.9% uptime to keep your mission-critical apps online.",
    },
    {
      icon: Headphones,
      title: "Proactive 24/7 Support",
      description:
        "We monitor your workloads around the clock, catching and resolving performance anomalies before they impact your business.",
    },
    {
      icon: Target,
      title: "Client-Centric Tailoring",
      description:
        "We avoid the one-size-fits-all model. Every VPS, dedicated host, and private cloud cluster is optimized for your workloads.",
    },
    {
      icon: Cloud,
      title: "Future-Proof Scale",
      description:
        "Our architectures scale up and out on-demand. Grow your database arrays, compute instances, and block stores dynamically.",
    },
    {
      icon: Heart,
      title: "Transparent Partnerships",
      description:
        "No fine print, complex license caps, or unexpected bandwidth fees. We deliver honest IT guidance as your technology partners.",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "The Foundation",
      description:
        "Launched our enterprise bare-metal provisioning platforms, delivering high-performance NVMe Linux & Windows VPS arrays to core businesses.",
      milestone: "Provisioned first 500+ secure virtual machines",
    },
    {
      year: "2023",
      title: "Cloud & Security Expansion",
      description:
        "Expanded into private/hybrid cloud deployments, backup replication pipelines, and integrated DDoS-protected virtual networking.",
      milestone: "99.9% uptime SLA achieved across all active regions",
    },
    {
      year: "2024",
      title: "Full-Stack IT Integration",
      description:
        "Merged deep systems engineering with custom software, mobile, and ERP solutions to provide unified IT management and architecture services.",
      milestone: "1,000+ databases, web environments, and networks managed",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA Track Record", icon: Activity },
    { value: "1,000+", label: "Instances & Networks Managed", icon: Server },
    { value: "24/7/365", label: "Proactive Monitoring", icon: Headphones },
    { value: "100%", label: "Fully Managed Solutions", icon: Award },
  ];

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
                <img src="/star.svg" alt="star" className="w-3 h-3" />
              </span>
              <span>Our Story</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            We Architect{" "}
            <span className="text-pulse-500 font-playfair font-thin">
              Stable Foundations
            </span>{" "}
            For
            <span className="text-pulse-500 font-playfair font-thin block">
              Business Growth
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            We are built on a single objective: to deliver high-performance,{" "}
            <span className="font-playfair font-medium text-pulse-600">
              enterprise-grade IT infrastructure
            </span>{" "}
            and software solutions. We enable businesses to scale without the burdens of server downtime, data risks, or configuration delays.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-0 fade-in-element">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-pulse-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-pulse-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 fade-in-element">
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                Our{" "}
                <span className="text-pulse-500 font-playfair font-thin">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that reliable and secure digital operations are the core backbone of modern commerce. Maintaining unstable, slow servers shouldn't drain internal engineering productivity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                That is why we provide a{" "}
                <span className="font-playfair font-medium text-pulse-600">
                  complete digital architecture ecosystem
                </span>{" "}
                — combining VPS, dedicated servers, managed hosting, disaster recovery, networking, and expert software engineering. We manage the technical details so you can drive your core business goals.
              </p>
              <Link
                to="/contact"
                className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Partner With Us
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="relative opacity-0 fade-in-element">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                alt="Datacenter servers and infrastructure setup"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-900">
                    "Uptime, speed, and defense-in-depth aren't options we compromise on—they are the baselines of our service."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Our Core{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Principles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamentals guide every machine we provision, every code deploy, and every customer support solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-pulse-100 hover:shadow-xl transition-all duration-300 opacity-0 fade-in-element"
                >
                  <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="text-pulse-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Our Technical{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we built a comprehensive, high-availability, fully managed
              <span className="font-playfair font-medium text-pulse-600">
                {" "}
                IT infrastructure & development ecosystem
              </span>
              .
            </p>
          </div>

          <div className="space-y-12">
            {journey.map((item, index) => (
              <div key={index} className="relative opacity-0 fade-in-element">
                {/* Timeline line */}
                {index < journey.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-20 bg-pulse-200"></div>
                )}

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-pulse-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-pulse-100 px-3 py-1 rounded-full text-pulse-700 text-xs font-medium">
                      <CheckCircle size={14} />
                      <span>{item.milestone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-500 to-pulse-600">
        <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
            <Star size={16} />
            <span>Ready to Scale?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Let's Build Your Technology{" "}
            <span className="font-playfair font-thin">Blueprint</span> Together
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Join the{" "}
            <span className="font-playfair font-medium">
              businesses of all sizes
            </span>{" "}
            relying on our high-performance infrastructure, software development pipelines, and 24/7 technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;