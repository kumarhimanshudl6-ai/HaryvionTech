import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

/* =========================================================
   NAVIGATION DATA (Fully Aligned with App.tsx Routes)
========================================================= */

const navigationTabs = [
  {
    label: "COMPANY",
    href: "/about",
    dropdown: [
      {
        label: "ABOUT US",
        href: "/about",
      },
      {
        label: "CERTIFICATE",
        href: "/certificates",
      },
      {
        label: "MISSION & VISION",
        href: "/mission",
      },
      {
        label: "OUR TEAM",
        href: "/team",
      },
    ],
  },
  {
    label: "SERVICES",
    href: "/services",
    dropdown: [
      {
        label: "BANKING & FINANCE",
        href: "/fintech",
      },
      {
        label: "B2B, B2C & RESELLER",
        href: "/fintech-development",
      },
      {
        label: "SOFTWARE DEVELOPMENT",
        href: "/software-development",
      },
      {
        label: "APP DEVELOPMENT",
        href: "/services/mobile-app-development",
      },
      {
        label: "DIGITAL MARKETING",
        href: "/services/digital-marketing",
      },
      {
        label: "CUSTOM SOFTWARE DEVELOPMENT",
        href: "/custom-software",
      },
    ],
  },
  {
    label: "PORTFOLIO",
    href: "/portfolio",
  },
  {
    label: "CAREERS",
    href: "/careers",
  },
  {
    label: "CONTACT US",
    href: "/contact",
  },
  {
    label: "LIFE @ HARYVION",
    href: "/culture",
  },
  {
    label: "BLOG",
    href: "/blog",
  },
];

/* =========================================================
   NAVBAR COMPONENT
========================================================= */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK - MOBILE MENU
  ========================================================= */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================================
     ACTIVE ROUTE UTILITY
  ========================================================= */
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          bg-white
          border-t
          border-gray-200
          border-b
          border-gray-100
          transition-all
          duration-300
          ${isScrolled ? "shadow-sm" : ""}
        `}
      >
        <div className="w-full px-6 lg:px-10 xl:px-12">
          <div className="h-[86px] flex items-center">

            {/* Logo + Brand Header */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="Haryvion Technology India"
            >
              <img
                src="/HARYVIONTECHNO.png"
                alt="Haryvion Technology India"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[17px] sm:text-[18px] font-bold text-[#111179] whitespace-nowrap">
                  Haryvion Technology
                </span>
                <span className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.20em] text-[#7C20E8]">
                  INDIA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-[34px] ml-auto h-full">
              {navigationTabs.map((tab) => {
                const hasDropdown = Boolean(tab.dropdown);
                const active = isActive(tab.href) || openDropdown === tab.label;

                return (
                  <div
                    key={tab.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => hasDropdown && setOpenDropdown(tab.label)}
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    {active && hasDropdown && (
                      <span className="absolute w-[40px] h-[40px] rounded-full bg-[#E9D5FF] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                    )}

                    <Link
                      to={tab.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`relative z-10 whitespace-nowrap text-[15px] 2xl:text-[16px] font-medium tracking-[-0.01em] transition-colors duration-200 ${active
                        ? "text-[#7C20E8]"
                        : "text-[#10102D] hover:text-[#7C20E8]"
                        }`}
                    >
                      {tab.label}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasDropdown && openDropdown === tab.label && (
                      <div
                        className={`absolute top-[72px] ${tab.label === "SERVICES"
                          ? "left-1/2 -translate-x-1/2 w-[380px]"
                          : "left-1/2 -translate-x-1/2 w-[300px]"
                          } bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_35px_rgba(0,0,0,0.10)] py-5 z-[100]`}
                        onMouseEnter={() => setOpenDropdown(tab.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {tab.dropdown?.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="group block px-8 py-[13px] text-[17px] leading-6 font-medium text-[#202033] hover:text-[#7C20E8] hover:bg-[#FAF7FF] transition-all duration-200"
                          >
                            <span className="relative inline-block group-hover:translate-x-[2px] transition-transform duration-200">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((current) => !current);
                setOpenDropdown(null);
              }}
              className="xl:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-[#17172E] hover:bg-gray-50 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU PANEL
      ===================================================== */}
      <div
        className={`fixed inset-0 z-40 xl:hidden bg-white pt-[105px] px-6 overflow-y-auto transition-all duration-300 ${isMenuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <div className="max-w-xl mx-auto pb-10">
          <nav className="flex flex-col">
            {navigationTabs.map((tab) => (
              <div key={tab.label}>
                {tab.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(tab.label)}
                      className="w-full flex items-center justify-between py-5 border-b border-gray-100 text-lg font-medium text-[#17172E]"
                    >
                      <span>{tab.label}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${openDropdown === tab.label
                          ? "rotate-180 text-[#7C20E8]"
                          : ""
                          }`}
                      />
                    </button>

                    {/* Mobile Dropdown Sub-Links */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openDropdown === tab.label
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="my-2 bg-[#FAF7FF] rounded-xl py-2">
                        {tab.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={closeMenu}
                            className="block px-5 py-3 text-[15px] font-medium text-[#333344] hover:text-[#7C20E8] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={tab.href}
                    onClick={closeMenu}
                    className={`block py-5 border-b border-gray-100 text-lg font-medium transition-colors ${isActive(tab.href)
                      ? "text-[#7C20E8]"
                      : "text-[#17172E]"
                      }`}
                  >
                    {tab.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Spacing Offset for Fixed Header */}
      <div className="h-[86px]" />
    </>
  );
};

export default Navbar;