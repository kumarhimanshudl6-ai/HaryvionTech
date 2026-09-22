import { Building2, Layers, Globe, Smartphone, Megaphone, Headphones } from "lucide-react";

const services = [
  {
    title: "Banking & Finance Solutions",
    icon: Building2,
    desc: "Comprehensive fintech platforms for banking, payments, AEPS, DMT, micro-ATM, and digital wallets to power your financial business transformation.",
    tags: ["AEPS", "DMT", "Digital Wallet"],
  },
  {
    title: "B2B, B2C & Reseller Platforms",
    icon: Layers,
    desc: "Robust portals for distributors, retailers, and end users, enabling secure transactions, commission management, and scalable multi-vertical operations.",
    tags: ["Multi-Level", "Secure", "Scalable"],
  },
  {
    title: "Website Development",
    icon: Globe,
    desc: "Creative, responsive, and high-performance web design and development services tailored to enhance your digital presence and drive business growth.",
    tags: ["Responsive", "SEO-Ready", "Fast"],
  },
  {
    title: "App Development",
    icon: Smartphone,
    desc: "Custom mobile app development for Android & iOS with modern UI/UX, seamless integrations, and scalable functionality for diverse industries.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "End-to-end digital marketing solutions including SEO, social media, PPC, branding, and content strategies to boost your online visibility and leads.",
    tags: ["SEO", "Social Media", "PPC"],
    iconBg: "bg-pink-500" // Example of the pink icon in screenshot
  },
  {
    title: "Technical Support & Maintenance",
    icon: Headphones,
    desc: "Reliable technical support with proactive monitoring, troubleshooting, and timely updates to keep your business systems running 24x7.",
    tags: ["24/7 Support", "Monitoring", "Updates"],
    iconBg: "bg-cyan-500" // Example of cyan icon in screenshot
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
            ⚙️ OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Comprehensive Solutions For Your Business
          </h2>
          <p className="text-blue-100 text-lg">
            From fintech platforms to digital marketing, we provide innovative solutions that drive growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const iconBg = service.iconBg || "bg-blue-600";

            return (
              <div
                key={index}
                className="bg-white rounded-[24px] p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden animate-on-scroll group"
              >
                {/* Subtle top-right decorative square as seen in screenshots */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-50 rotate-45 rounded-3xl -z-0" />

                <div className="relative z-10">
                  <div className="flex gap-5 mb-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 ${iconBg} shadow-lg shadow-${iconBg}/20`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-[22px] font-bold text-[#1E293B] leading-tight pt-1">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;