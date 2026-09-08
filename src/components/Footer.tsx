import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">

            {/* Logo + Company Name */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <img
                src="/HARYVIONTECHNO.png"
                alt="Haryvion Technology India logo"
                className="h-12 w-auto object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-gray-900 group-hover:text-pulse-500 transition-colors">
                  Haryvion Technology
                </span>

                <span className="text-sm font-medium text-gray-500">
                  India
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Accelerating startups from idea to market with rapid MVP
              development. Turn your vision into reality in weeks, not months.
            </p>

            {/* Email */}
            <div className="flex gap-4">
              <a
                href="mailto:hello@haryvion.com"
                className="text-pulse-500 hover:text-pulse-600 transition-colors text-sm"
              >
                haryviontechnologyindia@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/services"
                  className="hover:text-pulse-500 transition-colors"
                >
                  MVP Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Rapid Prototyping
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Full-Stack Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-pulse-500 transition-colors"
                >
                  User Testing
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Market Validation
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">
              Get Started
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#showcase"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Our Process
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-pulse-500 transition-colors"
                >
                  What We Build
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Success Stories
                </a>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pulse-100 flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left">
            2025 Haryvion Technology India. All rights
            reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              to="/privacy"
              className="hover:text-pulse-500 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-pulse-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;