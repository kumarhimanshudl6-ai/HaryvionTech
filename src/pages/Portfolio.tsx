import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Server,
  Network,
  Star,
  Cpu,
  Smartphone,
  HardDrive,
  Users,
  Globe,
  ExternalLink,
  Apple,
  Play,
  Eye,
  Layers,
} from "lucide-react";

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile">("all");

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
      title: "Apex Retail India",
      category: "IT Infrastructure & Cloud",
      description:
        "High-performance cloud migration and hybrid hosting architecture for a national e-commerce company handling over 1.2M daily transactions.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      metrics: {
        latency: "40% reduction",
        uptime: "99.99% Uptime",
        scale: "Auto-scalable VPS",
      },
      technologies: [
        "High-Performance NVMe VPS",
        "Load Balancers",
        "Hybrid Cloud",
        "Linux Server Administration",
      ],
      challenge:
        "Severe page latency and database bottlenecks during peak promotional seasons like Diwali, causing lost sales and user cart drop-offs.",
      solution:
        "Migrated legacy on-premise infrastructure to a custom-configured hybrid cloud. Provisioned enterprise dedicated GPU servers for image optimization, combined with ultra-fast NVMe-based Linux VPS arrays and automated load balancers.",
      results: [
        "Eliminated downtime during peak festival traffic loads",
        "Reduced dynamic page loading speed by 1.2 seconds",
        "Designed real-time block storage snapshot scheduling",
        "Secured connection lines with hardened server configurations",
      ],
      testimonial: {
        quote:
          "The migration was completely seamless, without a single minute of business disruption. Our infrastructure is now incredibly fast, stable, and ready for any traffic spike.",
        author: "Vikram Desai",
        role: "CTO, Apex Retail India",
      },
    },
    {
      title: "Vanguard Logistics",
      category: "Business Software & ERP Integration",
      description:
        "Custom enterprise web application and integrated ERP pipeline developed to automate cross-border supply chains and logistics monitoring.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      metrics: {
        efficiency: "+35% throughput",
        monitoring: "Real-time DNS/API",
        migration: "Zero-data loss",
      },
      technologies: [
        "React.js",
        "Node.js",
        "REST API Development",
        "Custom ERP Solutions",
        "PostgreSQL",
      ],
      challenge:
        "Fragmented software systems across billing, invoicing, inventory tracking, and client customer relations led to manual sync delays.",
      solution:
        "Built a robust custom ERP software suite running on isolated, private virtual servers. Built high-speed custom REST APIs for secure data exchange, incorporating full user-role systems and interactive web dashboards.",
      results: [
        "Unified stock control, employee invoicing, and CRMs",
        "Saves staff an estimated 40+ hours per week in manual entries",
        "Hosted on secure, redundant SSD Windows server configurations",
        "100% compliant with enterprise data protection audits",
      ],
      testimonial: {
        quote:
          "Our operational workflows have completely transformed. The custom business software solved years of inventory sync headaches and manual spreadsheet errors.",
        author: "Arun Sharma",
        role: "Director of Operations, Vanguard Logistics",
      },
    },
    {
      title: "AeroHealth Systems",
      category: "Networking, Security & Mobile App Integration",
      description:
        "Fully managed HIPAA-compliant cloud database design, server security hardening, and native mobile patient apps for a telemedicine platform.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      metrics: {
        security: "HIPAA Certified",
        backups: "Hourly Automated",
        downloads: "500k+ across stores",
      },
      technologies: [
        "Server Security Hardening",
        "VPN Tunneling",
        "React Native",
        "Cloud Storage",
        "SSL",
      ],
      challenge:
        "Deploying cross-platform medical apps required rock-solid security, instant backend query resolutions, and 100% private secure user communication.",
      solution:
        "Constructed isolated private cloud database storage protected by a proprietary VPN firewall setup. Built React Native cross-platform applications and implemented hourly snapshot database backups with full-disk cloud backup retention.",
      results: [
        "Successfully launched high-performance iOS and Android mobile apps",
        "Configured military-grade SSL certificates and advanced server firewalls",
        "Guaranteed immediate network failover with backup routing systems",
        "Zero security vulnerabilities identified over multiple external audits",
      ],
      testimonial: {
        quote:
          "Their absolute commitment to data security and rapid networking structures gave us total confidence when launching our medical ecosystem.",
        author: "Dr. Neha Patel",
        role: "CEO, AeroHealth Systems",
      },
    },
  ];

  // Website Projects
  const websiteProjects = [
    {
      title: "Northwind E-Commerce",
      category: "E-commerce Website",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop",
      description:
        "A high-performance multi-vendor marketplace with real-time inventory sync, payment gateway integration, and secure user dashboards.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      link: "#",
      metrics: [
        { label: "Page Speed", value: "0.9s" },
        { label: "Orders / Day", value: "12K+" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
    {
      title: "Meridian Corporate",
      category: "Corporate Website",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      description:
        "Modern corporate website with a headless CMS backend, multilingual support, and blazing-fast core web vitals.",
      tech: ["React", "TypeScript", "Strapi CMS", "Tailwind", "Vercel"],
      link: "#",
      metrics: [
        { label: "Lighthouse", value: "98/100" },
        { label: "Languages", value: "6" },
        { label: "SEO Score", value: "A+" },
      ],
    },
    {
      title: "Zenith SaaS Dashboard",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      description:
        "Real-time analytics dashboard with role-based access control, custom data visualization, and REST API integrations.",
      tech: ["React.js", "Node.js", "MongoDB", "Chart.js", "Socket.io"],
      link: "#",
      metrics: [
        { label: "Active Users", value: "8K+" },
        { label: "Data Points", value: "50M+" },
        { label: "API Latency", value: "<80ms" },
      ],
    },
    {
      title: "Coastal Realty Portal",
      category: "Real Estate Website",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      description:
        "Property listing platform featuring advanced geo-filters, virtual tour integration, and lead capture automation.",
      tech: ["Next.js", "PostgreSQL", "Mapbox API", "Prisma", "AWS S3"],
      link: "#",
      metrics: [
        { label: "Listings", value: "25K+" },
        { label: "Leads / Mo", value: "3.2K" },
        { label: "Conversion", value: "+42%" },
      ],
    },
    {
      title: "Bloom Restaurant Chain",
      category: "Business Website",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      description:
        "Multi-branch restaurant site with online ordering, table reservations, and integrated POS synchronization.",
      tech: ["React.js", "Node.js", "MySQL", "Razorpay", "Nginx"],
      link: "#",
      metrics: [
        { label: "Locations", value: "18" },
        { label: "Orders / Wk", value: "5.5K" },
        { label: "Avg Load", value: "1.1s" },
      ],
    },
    {
      title: "EduPrime Learning Portal",
      category: "EdTech Platform",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
      description:
        "Complete online learning management system with live classes, quiz engine, and student progress analytics.",
      tech: ["Next.js", "Node.js", "WebRTC", "PostgreSQL", "Redis"],
      link: "#",
      metrics: [
        { label: "Students", value: "40K+" },
        { label: "Courses", value: "1.2K" },
        { label: "Live Streams", value: "24/7" },
      ],
    },
  ];

  // Mobile App Projects
  const mobileProjects = [
    {
      title: "FitPulse Health Tracker",
      category: "Health & Fitness App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop",
      description:
        "Cross-platform fitness tracking app with wearable device sync, personalized workout plans, and AI-powered insights.",
      tech: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      platforms: ["ios", "android"],
      metrics: [
        { label: "Downloads", value: "150K+" },
        { label: "Rating", value: "4.8★" },
        { label: "DAU", value: "35K" },
      ],
    },
    {
      title: "SwiftPay Wallet",
      category: "Fintech App",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop",
      description:
        "Secure digital wallet with UPI payments, bill splitting, and encrypted transaction history plus biometric authentication.",
      tech: ["Flutter", "Node.js", "PostgreSQL", "Razorpay SDK"],
      platforms: ["ios", "android"],
      metrics: [
        { label: "Transactions", value: "5M+" },
        { label: "Users", value: "220K" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
    {
      title: "GreenCart Grocery",
      category: "E-commerce App",
      image:
        "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=600&h=800&fit=crop",
      description:
        "On-demand grocery delivery app with live order tracking, subscription plans, and integrated delivery partner routing.",
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps"],
      platforms: ["ios", "android"],
      metrics: [
        { label: "Orders / Day", value: "8.5K" },
        { label: "Avg Delivery", value: "22 min" },
        { label: "Cities", value: "14" },
      ],
    },
    {
      title: "TripLoop Travel",
      category: "Travel App",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=800&fit=crop",
      description:
        "All-in-one travel planning app with itinerary builder, offline maps, and local recommendation engine powered by AI.",
      tech: ["Flutter", "Firebase", "Mapbox", "OpenAI API"],
      platforms: ["ios", "android"],
      metrics: [
        { label: "Trips Planned", value: "80K" },
        { label: "Rating", value: "4.7★" },
        { label: "Countries", value: "45" },
      ],
    },
    {
      title: "ConnectHR Enterprise",
      category: "Business / HR App",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop",
      description:
        "Employee-facing HR mobile app for attendance, leave management, payroll access, and internal communication.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Push Notifications"],
      platforms: ["ios", "android"],
      metrics: [
        { label: "Companies", value: "120+" },
        { label: "Employees", value: "60K" },
        { label: "Adoption", value: "94%" },
      ],
    },
    {
      title: "MediCare Patient App",
      category: "Healthcare App",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=800&fit=crop",
      description:
        "Native iOS and Android patient app for teleconsultations, prescription management, and secure medical record access.",
      tech: ["Swift", "Kotlin", "WebRTC", "AWS HIPAA Cloud"],
      platforms: ["ios", "android"],
      metrics: [
        { label: "Consultations", value: "300K+" },
        { label: "Doctors", value: "2.5K" },
        { label: "Rating", value: "4.9★" },
      ],
    },
  ];

  const stats = [
    { value: "1,000+", label: "Servers Under Management", icon: Server },
    { value: "99.99%", label: "Uptime Performance SLA", icon: Network },
    { value: "50TB+", label: "Secure Data Backups", icon: HardDrive },
    { value: "150+", label: "Custom Software Deployments", icon: Cpu },
  ];

  const technologies = [
    { name: "Linux OS", logo: "🐧", category: "OS" },
    { name: "Windows Server", logo: "🪟", category: "OS" },
    { name: "NVMe Arrays", logo: "💾", category: "Storage" },
    { name: "Kubernetes", logo: "☸️", category: "DevOps" },
    { name: "Docker", logo: "🐳", category: "DevOps" },
    { name: "React / Next.js", logo: "⚛️", category: "Frontend" },
    { name: "Node.js", logo: "🟢", category: "Backend" },
    { name: "PostgreSQL", logo: "🐘", category: "Database" },
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
                <img src="/star.svg" alt="star icon" className="w-3 h-3" />
              </span>
              <span>Our Portfolio</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            <span className="text-pulse-500 font-playfair font-thin">
              Proven Deployments
            </span>{" "}
            &
            <span className="text-pulse-500 font-playfair font-thin block">
              Technical Success
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Discover how Haryvion Technology India architects{" "}
            <span className="font-playfair font-medium text-pulse-600">
              resilient IT infrastructure
            </span>{" "}
            and modern custom systems. From dedicated hardware to
            enterprise software solutions, see our systems engineering in
            action.
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

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Featured{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Deployments
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A deep look at how we secure business lines,{" "}
              <span className="font-playfair font-medium text-pulse-600">
                scale host compute
              </span>
              , optimize databases, and build custom programs.
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pulse-100 opacity-0 fade-in-element"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 bg-pulse-100 px-3 py-1 rounded-full text-pulse-700 text-sm font-medium mb-4">
                      <Server size={14} />
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
                        <div className="text-xs text-pulse-700 font-medium">
                          Metric I
                        </div>
                        <div className="text-base font-bold text-pulse-600">
                          {study.metrics.latency || study.metrics.efficiency}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-pulse-50 rounded-xl">
                        <div className="text-xs text-pulse-700 font-medium">
                          Metric II
                        </div>
                        <div className="text-base font-bold text-pulse-600">
                          {study.metrics.uptime || study.metrics.monitoring}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-pulse-50 rounded-xl">
                        <div className="text-xs text-pulse-700 font-medium">
                          Metric III
                        </div>
                        <div className="text-base font-bold text-pulse-600">
                          {study.metrics.scale ||
                            study.metrics.migration ||
                            study.metrics.backups}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-6 text-white mb-6">
                      <blockquote className="text-base leading-relaxed mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Users size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">
                            {study.testimonial.author}
                          </div>
                          <div className="text-pulse-100 text-xs">
                            {study.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm">
                            Key Outcomes:
                          </h4>
                          <ul className="space-y-1.5">
                            {study.results
                              .slice(0, 3)
                              .map((result, resultIndex) => (
                                <li
                                  key={resultIndex}
                                  className="text-xs text-gray-700 flex items-center gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full flex-shrink-0"></div>
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

      {/* Website & Mobile Projects */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/30 via-white to-pulse-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 fade-in-element">
            <div className="inline-flex items-center gap-2 bg-pulse-100/60 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-700 font-medium mb-6">
              <Layers size={16} />
              <span>Product Showcase</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Websites &{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Mobile Apps
              </span>{" "}
              We've Built
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of{" "}
              <span className="font-playfair font-medium text-pulse-600">
                shipped products
              </span>{" "}
              — from custom corporate websites to native mobile applications
              serving millions of users.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex justify-center mb-12 opacity-0 fade-in-element">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-md border border-pulse-100">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "all"
                  ? "bg-pulse-500 text-white shadow-md"
                  : "text-gray-600 hover:text-pulse-600"
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 ${activeTab === "web"
                  ? "bg-pulse-500 text-white shadow-md"
                  : "text-gray-600 hover:text-pulse-600"
                  }`}
              >
                <Globe size={15} />
                Websites
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 ${activeTab === "mobile"
                  ? "bg-pulse-500 text-white shadow-md"
                  : "text-gray-600 hover:text-pulse-600"
                  }`}
              >
                <Smartphone size={15} />
                Mobile Apps
              </button>
            </div>
          </div>

          {/* Website Projects */}
          {(activeTab === "all" || activeTab === "web") && (
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8 opacity-0 fade-in-element">
                <div className="w-10 h-10 bg-pulse-500 rounded-xl flex items-center justify-center text-white">
                  <Globe size={20} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  Website Projects
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-pulse-200 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {websiteProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-pulse-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 fade-in-element flex flex-col"
                  >
                    <div className="relative overflow-hidden h-56 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-pulse-700">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-bold text-lg">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-gray-100">
                        {project.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="text-center">
                            <div className="text-sm font-bold text-pulse-600">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[11px] font-medium text-pulse-700 bg-pulse-50 px-2 py-1 rounded-md border border-pulse-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="mt-auto w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors bg-pulse-50 hover:bg-pulse-100 py-2.5 rounded-xl"
                      >
                        <ExternalLink size={15} />
                        Discuss Similar Project
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile App Projects */}
          {(activeTab === "all" || activeTab === "mobile") && (
            <div>
              <div className="flex items-center gap-3 mb-8 opacity-0 fade-in-element">
                <div className="w-10 h-10 bg-pulse-500 rounded-xl flex items-center justify-center text-white">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  Mobile App Projects
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-pulse-200 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mobileProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-pulse-100 hover:shadow-2xl transition-all duration-500 opacity-0 fade-in-element flex flex-col"
                  >
                    <div className="relative bg-gradient-to-br from-pulse-100 via-pulse-50 to-white p-8 h-72 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {/* Decorative circles */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-pulse-200/40 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pulse-300/30 rounded-full blur-2xl"></div>

                      {/* Phone frame */}
                      <div className="relative w-40 h-64 bg-gray-900 rounded-[2rem] p-2 shadow-2xl group-hover:-translate-y-2 group-hover:rotate-2 transition-all duration-500">
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-white relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-xl"></div>
                        </div>
                      </div>

                      {/* Platform badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.platforms.includes("ios") && (
                          <div
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-gray-900"
                            title="iOS"
                          >
                            <Apple size={14} />
                          </div>
                        )}
                        {project.platforms.includes("android") && (
                          <div
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-green-600"
                            title="Android"
                          >
                            <Play size={14} fill="currentColor" />
                          </div>
                        )}
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-pulse-700">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-gray-100">
                        {project.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="text-center">
                            <div className="text-sm font-bold text-pulse-600">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[11px] font-medium text-pulse-700 bg-pulse-50 px-2 py-1 rounded-md border border-pulse-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="mt-auto w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors bg-pulse-50 hover:bg-pulse-100 py-2.5 rounded-xl"
                      >
                        <Eye size={15} />
                        Request App Blueprint
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technologies We Master */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Enterprise{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage reliable systems and{" "}
              <span className="font-playfair font-medium text-pulse-600">
                high-performance environments
              </span>{" "}
              to keep your services online and operating at maximum speed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-pulse-100 text-center hover:shadow-xl transition-all duration-300 group opacity-0 fade-in-element"
              >
                <div className="text-3xl mb-3">{tech.logo}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {tech.name}
                </div>
                <div className="text-xs text-pulse-600 font-medium">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Scale */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-3xl p-12 text-white text-center opacity-0 fade-in-element">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
              <Star size={16} />
              <span>Reliable IT Operations</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Empowering Enterprise{" "}
              <span className="font-playfair font-thin">SLA baselines</span>
            </h2>
            <p className="text-xl text-pulse-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              These scale statistics define real workloads running seamlessly,{" "}
              <span className="font-playfair font-medium">24/7/365</span>, under
              our proactive administration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="text-pulse-100">Guaranteed Network SLA</div>
                <div className="text-sm text-pulse-200 mt-2">
                  across core physical nodes
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">1,500+</div>
                <div className="text-pulse-100">Containers & VM Instances</div>
                <div className="text-sm text-pulse-200 mt-2">
                  provisioned and secured
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">24/7/365</div>
                <div className="text-pulse-100">Hardware & Port Watch</div>
                <div className="text-sm text-pulse-200 mt-2">
                  with immediate incident mitigation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
            Ready to Build Your Custom{" "}
            <span className="text-pulse-500 font-playfair font-thin">
              Infrastructure
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Collaborate with specialized hardware and network engineers. Ensure
            your databases, APIs, host layers, and applications achieve{" "}
            <span className="font-playfair font-medium text-pulse-600">
              maximum uptime and efficiency
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pulse-700 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/services"
              className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 border border-pulse-200"
            >
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