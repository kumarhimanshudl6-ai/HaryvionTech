import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Code,
  Rocket,
  TrendingUp,
  Star,
  Heart,
  Zap,
  Target,
} from "lucide-react";

const Team = () => {
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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-founder & CTO",
      expertise: "Full-Stack Architecture",
      experience: "8+ years",
      projectsDelivered: "45+",
      avatar:
        "https://ui-avatars.com/api/?name=Alex+Chen&background=6f79fe&color=fff&size=400",
      bio: "Former tech lead at Google. Passionate about building scalable systems that help founders move fast.",
      specialties: [
        "System Architecture",
        "Performance Optimization",
        "Team Leadership",
      ],
    },
    {
      name: "Sarah Rodriguez",
      role: "Co-founder & Head of Design",
      expertise: "Product Design & UX",
      experience: "7+ years",
      projectsDelivered: "38+",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Rodriguez&background=8b5cf6&color=fff&size=400",
      bio: "Ex-Airbnb designer who believes great UX is the difference between an MVP that fails and one that succeeds.",
      specialties: ["User Research", "Interface Design", "Design Systems"],
    },
    {
      name: "Marcus Johnson",
      role: "Senior Developer",
      expertise: "Frontend & Mobile",
      experience: "6+ years",
      projectsDelivered: "32+",
      avatar:
        "https://ui-avatars.com/api/?name=Marcus+Johnson&background=06b6d4&color=fff&size=400",
      bio: "React Native specialist who's shipped apps with millions of downloads. Makes complex features feel simple.",
      specialties: [
        "React Native",
        "Progressive Web Apps",
        "Mobile Optimization",
      ],
    },
    {
      name: "Emma Kim",
      role: "Backend Specialist",
      expertise: "APIs & Infrastructure",
      experience: "5+ years",
      projectsDelivered: "29+",
      avatar:
        "https://ui-avatars.com/api/?name=Emma+Kim&background=10b981&color=fff&size=400",
      bio: "Database optimization guru who ensures your MVP can scale from 100 to 100,000 users without breaking.",
      specialties: [
        "Database Design",
        "API Development",
        "Cloud Infrastructure",
      ],
    },
    {
      name: "David Park",
      role: "DevOps Engineer",
      expertise: "Deployment & Scaling",
      experience: "6+ years",
      projectsDelivered: "35+",
      avatar:
        "https://ui-avatars.com/api/?name=David+Park&background=f59e0b&color=fff&size=400",
      bio: "Automation expert who makes deployment as simple as pushing a button. Your MVP launches smoothly, every time.",
      specialties: ["CI/CD", "Cloud Architecture", "Performance Monitoring"],
    },
    {
      name: "Lisa Wang",
      role: "QA Lead",
      expertise: "Testing & Quality",
      experience: "5+ years",
      projectsDelivered: "40+",
      avatar:
        "https://ui-avatars.com/api/?name=Lisa+Wang&background=ef4444&color=fff&size=400",
      bio: "Quality perfectionist who ensures your MVP works flawlessly across all devices and browsers.",
      specialties: [
        "Automated Testing",
        "Cross-Platform QA",
        "User Acceptance Testing",
      ],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client Understanding",
      description:
        "We take time to understand your business, users, goals, and technology requirements before we build.",
    },
    {
      icon: Zap,
      title: "Speed & Quality",
      description:
        "Fast delivery doesn't mean cutting corners. We've perfected the art of rapid, high-quality development.",
    },
    {
      icon: Target,
      title: "Business Focused",
      description:
        "We focus on practical technology solutions that improve operations, customer experiences, and business growth.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white"
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
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white mr-2">
                <img src="/star.svg" alt="Haryvion Technology India" className="w-3 h-3" />
              </span>
              <span>Our Team</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            Meet the{" "}
            <span className="text-blue-600 font-playfair font-thin">
              Experts
            </span>{" "}
            Behind
            <span className="text-blue-600 font-playfair font-thin block">
              Your Digital Growth
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            A world-class team of{" "}
            <span className="font-playfair font-medium text-blue-700">
              experienced professionals
            </span>
            , senior engineers, and product experts who've built{" "}
            <span className="font-playfair font-medium text-blue-700">
              modern digital solutions
            </span>
            .
          </p>

          <div className="mx-auto mb-10 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 opacity-0 fade-in-element">
            Serving businesses since 2025
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 fade-in-element">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-700" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-gray-600">Founded & Started</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-blue-700" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-700" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">India</div>
              <div className="text-gray-600">Quality & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              The{" "}
              <span className="text-blue-600 font-playfair font-thin">
                Dream Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each member brings{" "}
              <span className="font-playfair font-medium text-blue-700">
                unique expertise
              </span>
              and a shared passion for helping businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 opacity-0 fade-in-element"
              >
                <div className="text-center mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-700 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-lg font-bold text-blue-700">
                      {member.experience}
                    </div>
                    <div className="text-xs text-blue-700">Experience</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-lg font-bold text-blue-700">
                      {member.projectsDelivered}
                    </div>
                    <div className="text-xs text-blue-700">Projects Delivered</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Specialties:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pulse-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 fade-in-element">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
              What Drives{" "}
              <span className="text-blue-600 font-playfair font-thin">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shared values that make us more than just a team - we're your{" "}
              <span className="font-playfair font-medium text-blue-700">
                founding partners
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center opacity-0 fade-in-element"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-blue-700" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Fun Facts */}
          <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-3xl p-8 md:p-12 text-white text-center opacity-0 fade-in-element">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 font-medium mb-6">
              <Star size={16} />
              <span>Fun Facts</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Behind the <span className="font-playfair font-thin">Code</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">47</div>
                <div className="text-blue-100 text-sm">
                  Coffee cups per week
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">12</div>
                <div className="text-blue-100 text-sm">
                  Countries represented
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">∞</div>
                <div className="text-blue-100 text-sm">
                  Passion for technology
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Client support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center opacity-0 fade-in-element">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
            Want to Join Our{" "}
            <span className="text-blue-600 font-playfair font-thin">
              Mission
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We're always looking for{" "}
            <span className="font-playfair font-medium text-blue-700">
              exceptional talent
            </span>
            who share our passion for helping businesses succeed. Love building
            MVPs? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:haryviontechnologyindia@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 group"
            >
              View Open Positions
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
