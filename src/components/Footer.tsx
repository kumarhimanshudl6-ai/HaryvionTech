import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="section-container py-12 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
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

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Delivering reliable cloud infrastructure, VPS hosting,
              dedicated servers, software development, and managed IT
              solutions for startups, businesses, and enterprises.
            </p>

            <a
              href="mailto:haryviontechnologyindia@gmail.com"
              className="inline-block text-pulse-500 hover:text-pulse-600 transition-colors text-sm break-all font-medium"
            >
              haryviontechnologyindia@gmail.com
            </a>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">
              Cloud & Infrastructure
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link
                  to="/services/vps-servers"
                  className="hover:text-pulse-500 transition-colors"
                >
                  VPS Servers
                </Link>
              </li>

              <li>
                <Link
                  to="/services/dedicated-servers"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Dedicated Servers
                </Link>
              </li>

              <li>
                <Link
                  to="/services/cloud-compute"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Cloud Compute
                </Link>
              </li>

              <li>
                <Link
                  to="/services/cloud-storage"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Cloud Storage
                </Link>
              </li>

              <li>
                <Link
                  to="/services/web-hosting"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Web Hosting
                </Link>
              </li>

              <li>
                <Link
                  to="/services/backup-recovery"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Backup & Recovery
                </Link>
              </li>

              <li>
                <Link
                  to="/services/server-management"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Server Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Development Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Development</h4>

            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/mobile-app-development"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/react-nextjs"
                  className="hover:text-pulse-500 transition-colors"
                >
                  React / Next.js
                </Link>
              </li>

              <li>
                <Link
                  to="/services/mern-stack"
                  className="hover:text-pulse-500 transition-colors"
                >
                  MERN Stack Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/ecommerce-development"
                  className="hover:text-pulse-500 transition-colors"
                >
                  E-commerce Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/erp-crm-solutions"
                  className="hover:text-pulse-500 transition-colors"
                >
                  ERP & CRM Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/services/ui-ux-design"
                  className="hover:text-pulse-500 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Company</h4>

            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link
                  to="/about"
                  className="hover:text-pulse-500 transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Our Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-pulse-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Infrastructure Tags */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-800 mb-2">
                Infrastructure
              </p>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "VPS",
                  "Cloud",
                  "Storage",
                  "Hosting",
                  "Servers",
                  "Backup",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Haryvion Technology India. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
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

            <Link
              to="/contact"
              className="hover:text-pulse-500 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;