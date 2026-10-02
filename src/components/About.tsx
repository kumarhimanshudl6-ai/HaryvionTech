import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Smartphone,
  Globe2,
  ShieldCheck,
  Target,
  Eye,
  Users,
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const services = [
    {
      icon: Globe2,
      title: "Web Development",
      description:
        "Modern, responsive and scalable websites and web applications designed around business requirements.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "User-friendly mobile applications focused on performance, usability and seamless digital experiences.",
    },
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Custom software solutions built to support business operations, automation and digital transformation.",
    },
    {
      icon: ShieldCheck,
      title: "Fintech Solutions",
      description:
        "Technology solutions for B2B, B2C and reseller business models with a focus on secure digital workflows.",
    },
  ];

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <Navbar />

      <main>
        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-28">
          {/* Background Decorations */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                About Haryvion Technology
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E40AF] leading-tight mb-6">
                Building Digital Solutions
                <br />
                <span className="text-purple-600">
                  For a Smarter Future
                </span>
              </h1>

              <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
                Haryvion Technology is a technology company focused on
                delivering modern digital solutions for businesses through
                software development, web development, mobile applications,
                fintech solutions and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT COMPANY
        ========================================================== */}
        <section
          className="py-20 lg:py-28 bg-white"
          id="about"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">

                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    About Our Company
                  </span>

                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-600 text-purple-700 text-sm font-semibold">
                    Who We Are
                  </span>

                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E40AF] leading-tight mb-6">
                  Your Reliable Technology
                  <br />
                  Development Partner
                </h2>

                <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed">

                  <p>
                    Haryvion Technology is a technology-focused company
                    dedicated to creating reliable, scalable and modern
                    digital solutions for businesses.
                  </p>

                  <p>
                    We work with businesses looking to establish their
                    digital presence, improve their existing technology
                    infrastructure, automate business processes and build
                    customized software solutions.
                  </p>

                  <p>
                    Our approach combines modern technologies, practical
                    development strategies and business-focused solutions to
                    create digital products that are easy to use, maintain
                    and scale.
                  </p>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">

                    <div className="text-blue-600">
                      <Clock className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        5+
                      </div>

                      <div className="text-sm text-gray-500">
                        Years Experience
                      </div>
                    </div>

                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">

                    <div className="text-blue-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        52+
                      </div>

                      <div className="text-sm text-gray-500">
                        Projects Delivered
                      </div>
                    </div>

                  </div>

                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 bg-[#A855F7] hover:bg-[#9333EA] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30"
                >
                  Let's Work Together
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Image */}
              <div className="relative">

                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                    alt="Haryvion Technology team"
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[250px]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Haryvion Technology
                      </p>

                      <p className="text-xs text-gray-500">
                        Technology · India
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MISSION & VISION
        ========================================================== */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                <Target className="w-4 h-4" />
                Our Purpose
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Our Mission & Vision
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We focus on building technology solutions that help
                businesses operate efficiently and create better digital
                experiences for their customers.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Our mission is to provide businesses with practical,
                  secure and scalable technology solutions that simplify
                  operations, support growth and enable digital
                  transformation.
                </p>

              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">

                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-purple-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Our vision is to become a trusted technology partner for
                  businesses by delivering innovative digital products and
                  dependable technology services.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT WE DO
        ========================================================== */}
        <section className="py-20 lg:py-28 bg-white">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-4">
                <Code2 className="w-4 h-4" />
                Our Expertise
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                What We Do
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We provide technology services designed to support businesses
                at different stages of their digital journey.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group p-7 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-6 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =========================================================
            WHY HARYVION
        ========================================================== */}
        <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#172554] text-white">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-sm font-semibold mb-5">
                  <Users className="w-4 h-4" />
                  Why Haryvion Technology
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                  Technology Designed Around
                  <br />
                  Your Business
                </h2>

                <p className="text-gray-300 leading-relaxed mb-8">
                  We focus on understanding business requirements before
                  developing technology solutions. Our goal is to build
                  solutions that are practical, scalable and aligned with
                  long-term business objectives.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-full font-semibold transition-all"
                >
                  Contact Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                {[
                  "Modern Technology",
                  "Scalable Solutions",
                  "Business-Focused Approach",
                  "Responsive Support",
                  "Secure Development",
                  "Long-Term Partnership",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />

                    <span className="text-sm text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            COMPANY DETAILS
        ========================================================== */}
        <section className="py-20 lg:py-24 bg-slate-50">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="max-w-4xl mx-auto">

              <div className="text-center mb-12">

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
                  <Building2 className="w-4 h-4" />
                  Company Information
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Registered Company Details
                </h2>

              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

                {/* CIN */}
                <div className="grid sm:grid-cols-3 gap-3 p-6 border-b border-slate-100">
                  <div className="font-semibold text-gray-900">
                    CIN
                  </div>

                  <div className="sm:col-span-2 text-gray-600">
                    U62020DC2026PTC474177
                  </div>
                </div>

                {/* GST */}
                <div className="grid sm:grid-cols-3 gap-3 p-6 border-b border-slate-100">
                  <div className="font-semibold text-gray-900">
                    GST Number
                  </div>

                  <div className="sm:col-span-2 text-gray-600">
                    07AAICH8911J1ZA
                  </div>
                </div>

                {/* Address */}
                <div className="grid sm:grid-cols-3 gap-3 p-6 border-b border-slate-100">

                  <div className="font-semibold text-gray-900 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                    Registered Office
                  </div>

                  <div className="sm:col-span-2 text-gray-600 leading-relaxed">
                    Second Floor, 1295, PAN Mandi,
                    <br />
                    Sadar Nala Road, Sadar Bazar,
                    <br />
                    New Delhi, North Delhi,
                    <br />
                    Delhi — 110006
                  </div>

                </div>

                {/* Contact */}
                <div className="grid sm:grid-cols-3 gap-3 p-6 border-b border-slate-100">

                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Contact & Support
                  </div>

                  <a
                    href="tel:+917465877467"
                    className="sm:col-span-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +91 7465877467
                  </a>

                </div>

                {/* Grievance */}
                <div className="grid sm:grid-cols-3 gap-3 p-6">

                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Grievance Officer
                  </div>

                  <a
                    href="mailto:haryviontechnologyindia@gmail.com"
                    className="sm:col-span-2 text-gray-600 hover:text-blue-600 transition-colors break-all"
                  >
                    haryviontechnologyindia@gmail.com
                  </a>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}
        <section className="py-20 bg-white">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-14 sm:px-12 text-center">

              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

              <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-900/20 rounded-full blur-3xl" />

              <div className="relative">

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Ready to Build Something Great?
                </h2>

                <p className="max-w-2xl mx-auto text-blue-100 leading-relaxed mb-8">
                  Let's discuss your business requirements and explore how
                  Haryvion Technology can help you build your next digital
                  solution.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-all shadow-xl"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <Footer />
    </>
  );
};

export default About;