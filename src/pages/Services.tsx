import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Server,
  Cloud,
  Shield,
  Code,
  Smartphone,
  Database,
  Globe,
  HardDrive,
  Monitor,
  Settings,
  Check,
  Star,
  Zap,
  Lock,
  Network,
  Layers,
  Cpu,
  RefreshCw,
  Building2,
  ShoppingCart,
  Layout,
} from "lucide-react";

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

  const coreServices = [
    {
      icon: Server,
      title: "VPS Servers",
      link: "/services/vps-servers",
      description:
        "High-performance Linux & Windows virtual private servers with NVMe storage and full root access.",
      features: [
        "Linux & Windows OS",
        "NVMe Storage & SSD",
        "Full Root Access",
        "Instant Deployment",
      ],
    },
    {
      icon: Cpu,
      title: "Dedicated Servers",
      link: "/services/dedicated-servers",
      description:
        "Bare-metal servers with 100% dedicated hardware for enterprise, GPU, and high-CPU workloads.",
      features: [
        "Bare-Metal Hardware",
        "High-CPU & GPU Servers",
        "Custom Specifications",
        "Enterprise DDoS Protection",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Compute",
      link: "/services/cloud-compute",
      description:
        "Scalable cloud instances with instant provisioning, auto-scaling, and pay-as-you-go pricing.",
      features: [
        "Auto-Scaling Infrastructure",
        "Private & Hybrid Cloud",
        "Load Balancing",
        "Cloud Databases",
      ],
    },
    {
      icon: Database,
      title: "Cloud Storage",
      link: "/services/cloud-storage",
      description:
        "Secure object, block, and file storage solutions with unlimited scalability and high durability.",
      features: [
        "Object & Block Storage",
        "S3 Compatible API",
        "High Durability (99.999%)",
        "Global CDN Integration",
      ],
    },
    {
      icon: Globe,
      title: "Web Hosting",
      link: "/services/web-hosting",
      description:
        "Reliable shared, business, WordPress, and managed application hosting with free SSL.",
      features: [
        "Business & Reseller Plans",
        "WordPress Optimized",
        "Free SSL & CDN",
        "cPanel & WHM Access",
      ],
    },
    {
      icon: HardDrive,
      title: "Backup & Recovery",
      link: "/services/backup-recovery",
      description:
        "Automated backups, server snapshots, and full disaster recovery solutions for business continuity.",
      features: [
        "Automated Server Backups",
        "Instant Server Snapshots",
        "Disaster Recovery Planning",
        "Custom Retention Policies",
      ],
    },
    {
      icon: Settings,
      title: "Server Management",
      link: "/services/server-management",
      description:
        "Full Linux & Windows server administration, monitoring, security, and performance optimization.",
      features: [
        "24/7 Proactive Monitoring",
        "Server Security Hardening",
        "Performance Tuning",
        "Zero-Downtime Migration",
      ],
    },
    {
      icon: Shield,
      title: "Networking & Security",
      link: "/contact",
      description:
        "Enterprise-grade firewalls, virtual private networks (VPN), load balancers, and network isolation.",
      features: [
        "Virtual Networks (VPC)",
        "Hardware Firewalls",
        "DDoS Mitigation",
        "Network Monitoring",
      ],
    },
  ];

  const developmentServices = [
    {
      icon: Globe,
      title: "Web Development",
      link: "/services/web-development",
      description:
        "Custom corporate websites, landing pages, and web applications built for speed and security.",
      tags: ["Corporate Sites", "Web Apps", "CMS"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      link: "/services/mobile-app-development",
      description:
        "Native iOS & Android applications and cross-platform solutions with full API integration.",
      tags: ["iOS", "Android", "React Native"],
    },
    {
      icon: Zap,
      title: "React / Next.js",
      link: "/services/react-nextjs",
      description:
        "Blazing fast, SEO-friendly frontends and server-rendered web applications.",
      tags: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: Code,
      title: "MERN Stack",
      link: "/services/mern-stack",
      description:
        "Robust full-stack applications built on MongoDB, Express, React, and Node.js.",
      tags: ["MongoDB", "Express", "Node.js"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      link: "/services/ecommerce-development",
      description:
        "Scalable WooCommerce, Shopify, and custom headless commerce platforms.",
      tags: ["Shopify", "WooCommerce", "Headless"],
    },
    {
      icon: Building2,
      title: "ERP & CRM Solutions",
      link: "/services/erp-crm-solutions",
      description:
        "Custom-built Enterprise Resource Planning & Customer Relationship Management tools.",
      tags: ["ERP", "CRM", "Automation"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      link: "/services/ui-ux-design",
      description:
        "User-centric interface and experience design that converts visitors into customers.",
      tags: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      icon: Layers,
      title: "Custom Software",
      link: "/contact",
      description:
        "Tailor-made software solutions designed specifically to solve your unique business challenges.",
      tags: ["SaaS", "Microservices", "Cloud Native"],
    },
  ];

  const infrastructureGrid = [
    { icon: Cpu, label: "Compute", items: "VPS • Dedicated • Cloud • GPU" },
    { icon: Database, label: "Storage", items: "Object • File • Block • Backup" },
    { icon: Network, label: "Networking", items: "VPN • Firewall • DNS • CDN" },
    { icon: Lock, label: "Security", items: "SSL • Hardening • Monitoring" },
    { icon: RefreshCw, label: "Recovery", items: "Backup • Snapshots • DR" },
    { icon: Layers, label: "Software", items: "Web • Mobile • ERP • CRM" },
  ];

  const whyChooseUs = [
    "Reliable IT infrastructure with 99.9% uptime",
    "Scalable cloud solutions that grow with you",
    "Secure server environments with hardened configurations",
    "Flexible configurations for any workload",
    "Fully managed IT services & 24/7 support",
    "Business-focused solutions at competitive pricing",
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We assess your current infrastructure, business requirements, and growth goals to design the perfect solution.",
    },
    {
      step: "02",
      title: "Architecture & Planning",
      description:
        "Our engineers design a tailored architecture covering compute, storage, networking, and security layers.",
    },
    {
      step: "03",
      title: "Deployment & Migration",
      description:
        "Seamless deployment of servers, cloud resources, and applications with zero-downtime migration strategies.",
    },
    {
      step: "04",
      title: "Management & Support",
      description:
        "Ongoing monitoring, maintenance, optimization, and 24/7 technical support to keep everything running smoothly.",
    },
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
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                <img src="/star.svg" alt="star" className="w-3 h-3" />
              </span>
              <span>Our Services</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            End-to-End{" "}
            <span className="text-pulse-500 font-playfair font-thin">
              IT Solutions
            </span>
            <span className="text-pulse-500 font-playfair font-thin block">
              for Your Business
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            Infrastructure, cloud, hosting, development, and managed IT —
            <span className="font-playfair font-medium text-pulse-600">
              {" "}
              everything you need{" "}
            </span>
            under one roof, for businesses of all sizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-element">
            <a
              href="#infrastructure"
              className="button-primary group inline-flex items-center justify-center px-8 py-4"
            >
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/contact"
              className="border-2 border-pulse-300 text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Core IT Services */}
      <section id="infrastructure" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Cloud &{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Infrastructure Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bare-metal servers to fully managed cloud environments —
              <span className="font-playfair font-medium text-pulse-600">
                {" "}
                robust, secure, and scalable
              </span>{" "}
              solutions for every workload.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-pulse-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden opacity-0 fade-in-element flex flex-col group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pulse-100 to-pulse-200 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                <div className="relative flex-grow">
                  <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="text-pulse-600" size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <Check
                          className="text-pulse-500 flex-shrink-0"
                          size={14}
                        />
                        <span className="text-gray-700 text-xs font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-auto pt-4 border-t border-gray-100">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-sm font-semibold text-pulse-600 group-hover:text-pulse-700 transition-colors"
                  >
                    Explore Service
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Development &{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Software Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-built web apps, mobile applications, and enterprise
              software —
              <span className="font-playfair font-medium text-pulse-600">
                {" "}
                engineered for performance
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-pulse-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden opacity-0 fade-in-element flex flex-col group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pulse-100 to-pulse-200 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                <div className="relative flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="text-pulse-600" size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {service.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-pulse-50 text-pulse-700 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-pulse-100 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-sm font-semibold text-pulse-600 group-hover:text-pulse-700 transition-colors"
                  >
                    Explore Service
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure at a Glance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              Our Infrastructure{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                at a Glance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete technology ecosystem —
              <span className="font-playfair font-medium text-pulse-600">
                {" "}
                compute, storage, network, and security
              </span>{" "}
              working together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {infrastructureGrid.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-pulse-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 fade-in-element"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  <item.icon size={22} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 fade-in-element">
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
                Why{" "}
                <span className="text-pulse-500 font-playfair font-thin">
                  Choose Us
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We combine deep infrastructure expertise with modern development
                capabilities to deliver
                <span className="font-playfair font-medium text-pulse-600">
                  {" "}
                  reliable, cost-effective IT solutions
                </span>{" "}
                that power your business forward.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pulse-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-pulse-600" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="opacity-0 fade-in-element">
              <div className="bg-gradient-to-br from-pulse-500 to-pulse-700 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>

                <div className="relative z-10">
                  <Zap className="mb-4" size={36} />
                  <h3 className="text-2xl font-bold mb-4">
                    Full-Stack IT Partner
                  </h3>
                  <p className="text-pulse-100 leading-relaxed mb-6">
                    Stop juggling multiple vendors. We handle your servers,
                    cloud, hosting, security, development, and ongoing support —
                    all from a single team that understands your business.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-xs text-pulse-200">
                        Service Categories
                      </div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-xs text-pulse-200">
                        Monitoring & Support
                      </div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-xs text-pulse-200">Uptime SLA</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs text-pulse-200">
                        Managed Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              How We{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A{" "}
              <span className="font-playfair font-medium text-pulse-600">
                proven methodology
              </span>{" "}
              that takes you from consultation to fully managed infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative opacity-0 fade-in-element">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
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
              Technologies &{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with{" "}
              <span className="font-playfair font-medium text-pulse-600">
                industry-leading technologies
              </span>{" "}
              to deliver infrastructure and software that performs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/20 via-white/10 to-pulse-100/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:from-white/25 hover:via-white/15 hover:to-pulse-100/25 hover:border-white/40 transition-all duration-300 opacity-0 fade-in-element">
              <Monitor className="text-pulse-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructure
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div>Linux (Ubuntu, CentOS, Debian)</div>
                <div>Windows Server</div>
                <div>VMware, KVM, Proxmox</div>
                <div>NVMe & SSD Storage</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 via-white/10 to-pulse-100/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:from-white/25 hover:via-white/15 hover:to-pulse-100/25 hover:border-white/40 transition-all duration-300 opacity-0 fade-in-element">
              <Cloud className="text-pulse-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud & DevOps
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div>AWS, Azure, GCP</div>
                <div>Docker, Kubernetes</div>
                <div>CI/CD Pipelines</div>
                <div>Terraform, Ansible</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 via-white/10 to-pulse-100/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 hover:from-white/25 hover:via-white/15 hover:to-pulse-100/25 hover:border-white/40 transition-all duration-300 opacity-0 fade-in-element">
              <Code className="text-pulse-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Development
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div>React, Next.js, Node.js</div>
                <div>React Native, Flutter</div>
                <div>PostgreSQL, MongoDB</div>
                <div>REST APIs, GraphQL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pulse-400 via-pulse-500 to-pulse-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-sm"></div>
          <div className="absolute top-12 -right-12 w-64 h-64 bg-white/15 rounded-full blur-sm"></div>
          <div className="absolute top-32 right-24 w-48 h-48 bg-white/10 rounded-full blur-sm"></div>
          <div className="absolute bottom-16 -right-8 w-32 h-32 bg-white/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/15 rounded-full blur-sm"></div>
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-16 right-16 w-80 h-80 border border-white/20 rounded-full"></div>
            <div className="absolute top-32 right-32 w-64 h-64 border border-white/15 rounded-full"></div>
            <div className="absolute top-48 right-48 w-48 h-48 border border-white/10 rounded-full"></div>
          </div>
          <div className="absolute bottom-24 right-16 w-16 h-16 bg-white/25 rounded-full blur-sm"></div>
          <div className="absolute top-24 right-64 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white opacity-0 fade-in-element relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-pulse-100 font-medium mb-6">
            <Star size={16} />
            <span>Let's Build Your Infrastructure</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Ready to Power Your{" "}
            <span className="font-playfair font-thin">Business</span>?
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Whether you need a single VPS or a full enterprise infrastructure —
            <span className="font-playfair font-medium">
              {" "}
              we've got you covered
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
            >
              Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;