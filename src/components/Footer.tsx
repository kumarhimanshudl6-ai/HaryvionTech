import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  // Corrected and extended company links with zero dead paths
  const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Vision & Mission", to: "/mission" },
    { label: "Our Team", to: "/team" },
    { label: "Certificates", to: "/certificates" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Careers", to: "/careers" },
  ];

  // Corrected service links fully mapped to App.tsx
  const serviceLinks = [
    { label: "B2B, B2C & Reseller", to: "/fintech-development" },
    { label: "Web Development", to: "/services/web-development" },
    { label: "Mobile App Development", to: "/services/mobile-app-development" },
    { label: "Digital Marketing", to: "/services/digital-marketing" },
    { label: "Banking & Finance", to: "/fintech" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
  ];

  return (
    <footer className="w-full bg-[#0b0f1a] text-gray-300 relative overflow-hidden">
      {/* Soft Ambient Background Light Circles */}
      <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-violet-500/80 blur-[1px]" />
      <div className="absolute bottom-28 right-28 w-5 h-5 rounded-full bg-purple-600/50 blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-14">

          {/* Column 1: Brand & Payments */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/HARYVIONTECHNO.png"
                alt="Haryvion Technology India"
                className="h-11 w-auto object-contain brightness-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
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

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Haryvion Technology is a leading provider of B2B, B2C, and reseller
              fintech solutions in India. We are a team of experienced
              professionals dedicated to delivering modern architectures.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent" />

            {/* Payment Methods */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3">
                Payment Methods
              </h5>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 px-3 rounded-md bg-[#1A1F71] flex items-center justify-center">
                  <span className="text-white font-bold text-xs tracking-wider italic">
                    VISA
                  </span>
                </div>
                <div className="h-8 px-2.5 rounded-md bg-white flex items-center justify-center gap-0.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] opacity-90" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90 -ml-1.5" />
                </div>
                <div className="h-8 px-2.5 rounded-md bg-white flex items-center justify-center">
                  <span className="text-[#FF4800] font-bold text-[10px] tracking-tight">
                    Payoneer
                  </span>
                </div>
                <div className="h-8 px-2.5 rounded-md bg-white flex items-center justify-center">
                  <span className="text-[#0B5FFF] font-bold text-[11px] italic">
                    affirm
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h4 className="text-white font-semibold text-base mb-1">Company</h4>
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

          {/* Column 3: Services Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-1">Services</h4>
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

          {/* Column 4: Newsletter & Social Network Handles */}
          <div>
            <h4 className="text-white font-semibold text-base mb-1">Newsletter</h4>
            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-5" />

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sign up for our weekly newsletter to get the latest tech updates.
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

            {/* Form */}
            <form
              className="mt-6 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
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

        {/* Bottom Legal Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} by{" "}
            <span className="text-blue-400 font-medium">Haryvion Technology</span>
            . All rights reserved.
          </p>

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