import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Heart,
  Lightbulb,
  Rocket,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
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
      icon: Zap,
      title: "Speed with Purpose",
      description:
        "We move fast, but every decision is strategic. Rapid development doesn't mean cutting corners.",
    },
    {
      icon: Users,
      title: "Founder-First",
      description:
        "Built by founders, for founders. We understand the urgency, passion, and vision that drives you.",
    },
    {
      icon: Target,
      title: "Outcome Focused",
      description:
        "Success isn't just launching - it's validating your idea and setting the foundation for growth.",
    },
    {
      icon: Heart,
      title: "Transparent Partnership",
      description:
        "No hidden costs, no surprises. We're your technical co-founder, not just a vendor.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We use cutting-edge tech and proven frameworks to give your MVP a competitive advantage.",
    },
    {
      icon: Rocket,
      title: "Scale Ready",
      description:
        "Every MVP we build is architected to scale. Launch fast, grow faster.",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Founded by serial entrepreneurs who experienced the pain of slow, expensive development cycles.",
      milestone: "First MVP launched in 3 weeks",
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description:
        "Refined our process and built a world-class team of designers and developers.",
      milestone: "50+ MVPs launched, $10M+ raised by clients",
    },
    {
      year: "2024",
      title: "Scale & Impact",
      description:
        "Expanded globally and launched our AI-accelerated development framework.",
      milestone: "100+ MVPs, 95% success rate",
    },
  ];

  const stats = [
    { value: "100+", label: "MVPs Launched", icon: Rocket },
    { value: "2-8", label: "Weeks to Launch", icon: Zap },
    { value: "95%", label: "Client Success Rate", icon: TrendingUp },
    { value: "$50M+", label: "Funding Raised", icon: Award },
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
                <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
              </span>
              <span>Our Story</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element">
            We Turn{" "}
            <span className="text-pulse-500 font-playfair font-thin">
              Ideas
            </span>{" "}
            Into
            <span className="text-pulse-500 font-playfair font-thin block">
              Reality
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
            mvpier was born from a simple belief: every{" "}
            <span className="font-playfair font-medium text-pulse-600">
              great product
            </span>{" "}
            starts with a great MVP. We're here to help founders like you
            validate ideas and launch products at
            <span className="font-playfair font-medium text-pulse-600">
              {" "}
              lightning speed
            </span>
            .
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
                  <div className="text-gray-600">{stat.label}</div>
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
                We believe every founder deserves a technical partner who
                understands the{" "}
                <span className="font-playfair font-medium text-pulse-600">
                  urgency of opportunity
                </span>
                . Traditional development is too slow, too expensive, and too
                risky for early-stage startups.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                That's why we created a{" "}
                <span className="font-playfair font-medium text-pulse-600">
                  revolutionary approach
                </span>{" "}
                to MVP development - one that combines speed, quality, and
                strategic thinking to help you validate your ideas and capture
                market opportunities before they disappear.
              </p>
              <a
                href="#contact"
                className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Partner With Us
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="relative opacity-0 fade-in-element">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-900">
                    "Speed and quality don't have to be mutually exclusive when
                    you have the right process."
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
              Our{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every line of
              code we write.
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
                  <p className="text-gray-600 leading-relaxed">
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
              Our{" "}
              <span className="text-pulse-500 font-playfair font-thin">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to the leading MVP development agency - here's how we
              built our
              <span className="font-playfair font-medium text-pulse-600">
                {" "}
                reputation for excellence
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
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-pulse-100 px-3 py-1 rounded-full text-pulse-700 text-sm font-medium">
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
            <span>Ready to Start?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Let's Build Your{" "}
            <span className="font-playfair font-thin">Dream</span> Together
          </h2>
          <p className="text-xl text-pulse-100 mb-10 leading-relaxed">
            Join the{" "}
            <span className="font-playfair font-medium">
              hundreds of founders
            </span>{" "}
            who've turned their ideas into successful products with mvpier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-pulse-50 transition-all duration-300 inline-flex items-center gap-2 group">
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pulse-600 transition-all duration-300">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
