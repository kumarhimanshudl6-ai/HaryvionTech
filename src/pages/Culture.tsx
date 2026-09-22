import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Lightbulb,
  Handshake,
  TrendingUp,
  Scale,
  Trophy,
  Heart,
  Banknote,
  HeartPulse,
  GraduationCap,
  Laptop,
  Sun,
  Utensils,
  Cake,
  Dumbbell,
  UserPlus,
  Rocket,
  Crown,
  Image as ImageIcon,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  PartyPopper,
  ShieldCheck,
  Building2,
  Smile,
} from "lucide-react";

const Culture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      setTimeout(() => observer.observe(el), index * 50);
    });

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const galleryItems = [
    {
      title: "1st Work Anniversary Celebration",
      subtitle: "Milestones & Cake Cutting",
      category: "Anniversary",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      badge: "🎉 Anniversary",
      badgeBg: "bg-amber-100 text-amber-800",
    },
    {
      title: "Team Outing & Retreat",
      subtitle: "Nature Trip & Bonding",
      category: "Outing",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      badge: "🌲 Team Outing",
      badgeBg: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "Diwali Celebration",
      subtitle: "Festive Joy & Rangoli",
      category: "Festival",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      badge: "🪔 Diwali",
      badgeBg: "bg-orange-100 text-orange-800",
    },
    {
      title: "Birthday Bash",
      subtitle: "Office Celebrations & Fun",
      category: "Celebration",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      badge: "🎂 Birthday",
      badgeBg: "bg-pink-100 text-pink-800",
    },
    {
      title: "Children's Day Celebration",
      subtitle: "Bringing Our Inner Child Out",
      category: "Special Day",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      badge: "🎈 Children's Day",
      badgeBg: "bg-purple-100 text-purple-800",
    },
  ];

  const differentiators = [
    {
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-600",
      title: "Innovation First",
      description:
        "We encourage experimentation and celebrate creative problem-solving. Your bold ideas drive our success.",
    },
    {
      icon: Handshake,
      color: "from-pink-500 to-rose-500",
      title: "Collaborative Spirit",
      description:
        "Teamwork is at our core. We believe the best solutions emerge when diverse minds work together.",
    },
    {
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-500",
      title: "Continuous Growth",
      description:
        "We invest in your professional development with training, mentorship, and learning opportunities.",
    },
    {
      icon: Scale,
      color: "from-amber-400 to-orange-500",
      title: "Work-Life Balance",
      description:
        "Flexible schedules and remote work options help you maintain balance and stay productive.",
    },
    {
      icon: Trophy,
      color: "from-blue-600 to-indigo-700",
      title: "Recognition & Rewards",
      description:
        "Outstanding work deserves recognition. We celebrate achievements big and small.",
    },
    {
      icon: Heart,
      color: "from-teal-300 to-emerald-400",
      title: "Inclusive Environment",
      description:
        "Diversity fuels innovation. We create a welcoming space where everyone belongs.",
    },
  ];

  const benefits = [
    {
      icon: Banknote,
      color: "from-purple-500 to-indigo-600",
      title: "Competitive Salary",
      description: "Market-leading compensation packages",
    },
    {
      icon: HeartPulse,
      color: "from-pink-400 to-rose-500",
      title: "Health Insurance",
      description: "Comprehensive medical coverage",
    },
    {
      icon: GraduationCap,
      color: "from-cyan-400 to-blue-500",
      title: "Learning Budget",
      description: "Annual training & certification funds",
    },
    {
      icon: Laptop,
      color: "from-amber-300 to-orange-400",
      title: "Remote Work",
      description: "Flexible work-from-home options",
    },
    {
      icon: Sun,
      color: "from-teal-400 to-emerald-500",
      title: "Paid Time Off",
      description: "Generous vacation & leave policy",
    },
    {
      icon: Utensils,
      color: "from-sky-300 to-blue-400",
      title: "Free Meals",
      description: "Complimentary lunch & snacks",
    },
    {
      icon: Cake,
      color: "from-rose-400 to-pink-500",
      title: "Celebrations",
      description: "Team events & birthday parties",
    },
    {
      icon: Dumbbell,
      color: "from-orange-300 to-amber-400",
      title: "Fitness Programs",
      description: "Gym membership & wellness activities",
    },
  ];

  const journeySteps = [
    {
      icon: UserPlus,
      title: "Onboarding",
      description:
        "Comprehensive orientation program to help you settle in, meet the team, and understand our processes.",
    },
    {
      icon: Rocket,
      title: "First 90 Days",
      description:
        "Get hands-on with real projects, receive mentorship, and start making meaningful contributions.",
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      description:
        "Regular performance reviews, skill development programs, and clear advancement opportunities.",
    },
    {
      icon: Crown,
      title: "Leadership",
      description:
        "Take on leadership roles, mentor others, and shape the future of our company.",
    },
  ];

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      <style>{`
        .gallery-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.18);
        }
        .gallery-card:hover img {
          transform: scale(1.08);
        }
        .culture-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .culture-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12);
        }
        .culture-card:hover .culture-icon {
          transform: scale(1.1);
        }
        .culture-icon {
          transition: transform 0.3s ease;
        }
        .benefit-tile {
          transition: all 0.35s ease;
        }
        .benefit-tile:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.15);
        }
        .benefit-tile:hover .benefit-icon-box {
          transform: scale(1.1);
        }
        .benefit-icon-box {
          transition: transform 0.3s ease;
        }
        .journey-card {
          transition: all 0.35s ease;
        }
        .journey-card:hover {
          transform: translateX(6px);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .btn-primary {
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -4px rgba(37, 99, 235, 0.45);
        }
      `}</style>

      <Navbar />

      {/* ═══════════════ GALLERY SECTION ═══════════════ */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        {/* Decorative background blur dots */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-purple-400/50" />
        <div className="absolute bottom-10 right-16 w-6 h-6 rounded-full bg-blue-400/30" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 opacity-0 fade-in-element">
            <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <ImageIcon size={13} />
              Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
              Our Images Gallery
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              A glimpse into life at Haryvion Technology — celebrations, team outings, festivals,
              and memories we cherish together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(item.image)}
                className="gallery-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-pointer group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white text-xs font-medium underline decoration-cyan-400 underline-offset-4">
                      Click to view photo
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
            <img src={selectedImage} alt="Expanded view" className="w-full h-full object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg backdrop-blur-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════ WHAT MAKES US DIFFERENT (CULTURE) ═══════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <Users size={13} />
              Our Culture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              We foster an environment where creativity thrives, collaboration flourishes, and every voice matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="culture-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 opacity-0 fade-in-element cursor-default text-center"
                >
                  <div
                    className={`culture-icon w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg text-white`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFITS & PERKS ("More Than Just A Job") ═══════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <GiftIcon /> Benefits &amp; Perks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              More Than Just A Job
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
              We offer comprehensive benefits designed to support your well-being and success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="benefit-tile bg-white text-gray-900 rounded-2xl p-6 opacity-0 fade-in-element cursor-default text-center shadow-md"
                >
                  <div
                    className={`benefit-icon-box w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mx-auto mb-4 text-white shadow-md`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-1.5">{b.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ YOUR CAREER PATH ═══════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <CompassIcon /> Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Your Career Path At Haryvion
            </h2>
          </div>

          <div className="relative space-y-4">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-white/20 hidden sm:block" />

            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="journey-card bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 sm:p-7 flex items-start gap-5 opacity-0 fade-in-element"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg relative z-10">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM PHOTO BANNER ═══════════════ */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Full Team Photo Placeholder / Banner */}
        <div className="relative w-full h-[360px] sm:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop"
            alt="One Team One Vision - Haryvion Technology"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 py-10 px-4 text-center -mt-16 sm:-mt-20">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            One Team. One Vision. <span className="text-cyan-300">Haryvion Technology</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Empowering passionate minds to build ground-breaking digital solutions.
          </p>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center opacity-0 fade-in-element">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready To Write Your Success Story With Us?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Explore our open positions and find out where you fit into our growing team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg"
            >
              View Open Positions
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Small helper icon components
function GiftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export default Culture;