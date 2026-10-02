import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  // Company Links
  const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Vision & Mission", to: "/mission" },
    { label: "Our Team", to: "/team" },
    { label: "Certificates", to: "/certificates" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Careers", to: "/careers" },
  ];

  // Service Links
  const serviceLinks = [
    {
      label: "B2B, B2C & Reseller",
      to: "/fintech-development",
    },
    {
      label: "Web Development",
      to: "/services/web-development",
    },
    {
      label: "Mobile App Development",
      to: "/services/mobile-app-development",
    },
    {
      label: "Digital Marketing",
      to: "/services/digital-marketing",
    },
    {
      label: "Banking & Finance",
      to: "/fintech",
    },
  ];

  // Social Links
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/917465877467",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="w-full bg-[#0b0f1a] text-gray-300 relative overflow-hidden">
      {/* Soft Ambient Background Light Circles */}
      <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-violet-500/80 blur-[1px]" />

      <div className="absolute bottom-28 right-28 w-5 h-5 rounded-full bg-purple-600/50 blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-14">

          {/* =====================================================
              COLUMN 1 - BRAND & COMPANY INFORMATION
          ====================================================== */}
          <div className="space-y-6">

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <img
                src="/HARYVIONTECHNO.png"
                alt="Haryvion Technology India"
                className="h-11 w-auto object-contain brightness-110"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  HARYVION
                </span>

                <span className="text-[11px] font-medium text-gray-400 tracking-widest uppercase">
                  Technology · India
                </span>
              </div>
            </Link>

            {/* Company Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Haryvion Technology is a leading provider of B2B, B2C, and
              reseller fintech solutions in India. We are a team of
              experienced professionals dedicated to delivering modern
              architectures.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent" />

            {/* =====================================================
                COMPANY DETAILS
            ====================================================== */}
            <div className="space-y-4 text-sm">

              {/* Registered Office */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />

                <div>
                  <p className="text-gray-300 font-medium mb-1">
                    Registered Office
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    Second Floor, 1295, PAN Mandi,
                    <br />
                    Sadar Nala Road, Sadar Bazar,
                    <br />
                    New Delhi, North Delhi,
                    <br />
                    Delhi — 110006
                  </p>
                </div>
              </div>

              {/* CIN */}
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-medium min-w-[55px]">
                  CIN:
                </span>

                <span className="text-gray-400">
                  U62020DC2026PTC474177
                </span>
              </div>

              {/* GST */}
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-medium min-w-[55px]">
                  GST:
                </span>

                <span className="text-gray-400">
                  07AAICH8911J1ZA
                </span>
              </div>
            </div>

            {/* =====================================================
                PAYMENT METHODS
            ====================================================== */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3">
                Payment Methods
              </h5>

              <div className="flex flex-wrap gap-2">

                {/* VISA */}
                <div className="h-8 px-3 rounded-md bg-[#1A1F71] flex items-center justify-center">
                  <span className="text-white font-bold text-xs tracking-wider italic">
                    VISA
                  </span>
                </div>

                {/* Mastercard */}
                <div className="h-8 px-2.5 rounded-md bg-white flex items-center justify-center gap-0.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] opacity-90" />

                  <span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90 -ml-1.5" />
                </div>

                {/* Payoneer */}
                <div className="h-8 px-2.5 rounded-md bg-white flex items-center justify-center">
                  <span className="text-[#FF4800] font-bold text-[10px] tracking-tight">
                    Payoneer
                  </span>
                </div>

                {/* Affirm */}
                <div className="h-8 px-2.5 rounded-md bg-white flex items-center justify-center">
                  <span className="text-[#0B5FFF] font-bold text-[11px] italic">
                    affirm
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* =====================================================
              COLUMN 2 - COMPANY
          ====================================================== */}
          <div>
            <h4 className="text-white font-semibold text-base mb-1">
              Company
            </h4>

            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-5" />

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-blue-500 text-xs group-hover:translate-x-0.5 transition-transform">
                      ≫
                    </span>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              COLUMN 3 - SERVICES
          ====================================================== */}
          <div>
            <h4 className="text-white font-semibold text-base mb-1">
              Services
            </h4>

            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-5" />

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-blue-500 text-xs group-hover:translate-x-0.5 transition-transform">
                      ≫
                    </span>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              COLUMN 4 - CONTACT & SUPPORT
          ====================================================== */}
          <div>
            <h4 className="text-white font-semibold text-base mb-1">
              Contact & Support
            </h4>

            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-5" />

            {/* Contact Information */}
            <div className="space-y-4 mb-7">

              {/* Contact & Support */}
              <div className="flex items-start gap-3">

                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">
                    Contact & Support
                  </p>

                  <a
                    href="tel:+917465877467"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +91 7465877467
                  </a>
                </div>
              </div>

              {/* Grievance Officer */}
              <div className="flex items-start gap-3">

                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">
                    Grievance Officer
                  </p>

                  <a
                    href="mailto:haryviontechnologyindia@gmail.com"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors break-words"
                  >
                    haryviontechnologyindia@gmail.com
                  </a>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex items-start gap-3">

                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-0.5">
                    Registered Office
                  </p>

                  <a
                    href="https://maps.google.com/?q=PAN+Mandi+Sadar+Bazar+Delhi+110006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    New Delhi, Delhi — 110006
                  </a>
                </div>
              </div>

            </div>

            {/* =====================================================
                NEWSLETTER
            ====================================================== */}
            <h4 className="text-white font-semibold text-base mb-1">
              Newsletter
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Sign up for our weekly newsletter to get the latest tech
              updates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center
                               text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500
                               hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30
                               transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Form */}
            <form
              className="mt-6 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
                           placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg
                           transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* =====================================================
            BOTTOM LEGAL SECTION
        ====================================================== */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Copyright + Company IDs */}
          <div className="text-center sm:text-left">

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} by{" "}
              <span className="text-blue-400 font-medium">
                Haryvion Technology
              </span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-1 mt-2 text-xs text-gray-600">

              <span>
                CIN:{" "}
                <span className="text-gray-500">
                  U62020DC2026PTC474177
                </span>
              </span>

              <span>
                GST:{" "}
                <span className="text-gray-500">
                  07AAICH8911J1ZA
                </span>
              </span>

            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">

            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;