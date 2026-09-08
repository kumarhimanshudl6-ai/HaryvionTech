import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Code, Rocket, Users, Zap, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navigationTabs = [
  { label: "Home", href: "/", isHome: true },
  { label: "About", href: "/about", hasMegaMenu: true },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" }
];

const megaMenuData = {
  About: {
    sections: [
      {
        title: "Company",
        items: [
          { label: "Our Story", href: "/about", icon: Users, description: "Learn about Haryvion Technology India's mission" },
          { label: "Team", href: "/team", icon: Users, description: "Meet our expert developers" },
          { label: "Process", href: "/services#process", icon: Zap, description: "How we deliver IT solutions" }
        ]
      },
      {
        title: "Success Stories",
        items: [
          { label: "Case Studies", href: "/portfolio", icon: Rocket, description: "Explore our successful projects" },
          { label: "Testimonials", href: "/#testimonials", icon: MessageCircle, description: "What our clients say" },
          { label: "Portfolio", href: "/portfolio", icon: Code, description: "Our best work" }
        ]
      }
    ],
    featured: {
      title: "Ready to Build Your Digital Solution?",
      description: "Build reliable digital solutions with Haryvion Technology India",
      cta: "Start Your Project",
      href: "/contact"
    }
  },
  Services: {
    sections: [
      {
        title: "Development",
        items: [
          { label: "Web Development", href: "/services#prototyping", icon: Zap, description: "Modern, responsive websites" },
          { label: "Custom Software", href: "/services#fullstack", icon: Code, description: "Scalable business applications" },
          { label: "Mobile App Development", href: "/services#mobile", icon: Rocket, description: "iOS & Android solutions" }
        ]
      },
      {
        title: "Strategy",
        items: [
          { label: "AI & Automation", href: "/services#validation", icon: Users, description: "Smart solutions for your business" },
          { label: "Technical Consulting", href: "/services#consulting", icon: MessageCircle, description: "Expert guidance" },
          { label: "Cloud & DevOps", href: "/services#scaling", icon: ArrowRight, description: "Deploy, scale, and maintain" }
        ]
      }
    ],
    featured: {
      title: "From Idea to Digital Solution",
      description: "Reliable, scalable, and affordable IT solutions for businesses",
      cta: "Get Free Consultation",
      href: "/contact"
    }
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const homeElement = tabRefs.current[0];
      if (homeElement) {
        const { offsetLeft, offsetWidth } = homeElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeTabIndex = navigationTabs.findIndex(tab => {
      if (tab.isHome && currentPath === '/') return true;
      if (!tab.isHome && currentPath.startsWith(tab.href) && tab.href !== '/') return true;
      return false;
    });

    if (activeTabIndex !== -1) {
      setActiveIndex(activeTabIndex);
    } else if (currentPath === '/') {
      setActiveIndex(0); // Default to Home if no match
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleNavClick = (index: number, tab: typeof navigationTabs[0], e: React.MouseEvent) => {
    setActiveIndex(index);

    if (tab.isHome) {
      e.preventDefault();
      navigate('/');
      scrollToTop();
    } else if (tab.href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(tab.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMegaMenuOpen(null);
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleTabHover = (index: number, tab: typeof navigationTabs[0]) => {
    setHoveredIndex(index);

    if (tab.hasMegaMenu) {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
      setMegaMenuOpen(tab.label);
    } else {
      setMegaMenuOpen(null);
    }
  };

  const handleTabLeave = () => {
    setHoveredIndex(null);

    if (!megaMenuHover) {
      megaMenuTimeoutRef.current = setTimeout(() => {
        setMegaMenuOpen(null);
      }, 150);
    }
  };

  const handleMegaMenuEnter = () => {
    setMegaMenuHover(true);
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
  };

  const handleMegaMenuLeave = () => {
    setMegaMenuHover(false);
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(null);
    }, 150);
  };

  const handleMegaMenuItemClick = (href: string) => {
    setMegaMenuOpen(null);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.includes('#')) {
      // Handle routes with hash fragments
      const [route, hash] = href.split('#');
      navigate(route);
      // Wait a bit for navigation then scroll to element
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div className="w-full md:max-w-6xl mx-auto">
          {/* Glassmorphism Navbar Container */}
          <div className={cn(
            "relative flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
            "bg-white/85 backdrop-blur-xl border border-blue-100/80 shadow-lg shadow-blue-900/5",
            "hover:bg-white/95 hover:border-blue-200",
            isScrolled && "bg-white/95 border-blue-200 shadow-xl shadow-blue-900/10"
          )}>
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 z-10"
              onClick={() => {
                setActiveIndex(0);
                scrollToTop();
              }}
              aria-label="Haryvion Technology India"
            >
              <img
                src="/HARYVIONTECHNO.png"
                alt="Haryvion Technology India Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Haryvion Technology
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-blue-600">
                  INDIA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Modern Tab Style */}
            <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Hover Highlight */}
                <div
                  className="absolute h-[40px] transition-all duration-300 ease-out bg-blue-50/80 backdrop-blur-lg rounded-xl flex items-center"
                  style={{
                    ...hoverStyle,
                    opacity: hoveredIndex !== null ? 1 : 0,
                  }}
                />

                {/* Active Indicator */}
                <div
                  className="absolute bottom-[-2px] h-[2px] bg-blue-600 transition-all duration-300 ease-out rounded-full"
                  style={activeStyle}
                />

                {/* Navigation Tabs */}
                <div className="relative flex space-x-2 items-center">
                  {navigationTabs.map((tab, index) => (
                    <div
                      key={index}
                      ref={(el) => (tabRefs.current[index] = el)}
                      className={cn(
                        "px-4 py-2 cursor-pointer transition-colors duration-300 h-[40px] rounded-xl",
                        index === activeIndex
                          ? "text-blue-600 font-semibold"
                          : "text-slate-700 hover:text-blue-600 font-medium"
                      )}
                      onMouseEnter={() => handleTabHover(index, tab)}
                      onMouseLeave={handleTabLeave}
                    >
                      {tab.href.startsWith('#') || tab.isHome ? (
                        <div
                          className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full"
                          onClick={(e) => handleNavClick(index, tab, e)}
                        >
                          {tab.label}
                        </div>
                      ) : (
                        <Link
                          to={tab.href}
                          className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full"
                          onClick={() => {
                            setActiveIndex(index);
                            setMegaMenuOpen(null);
                          }}
                        >
                          {tab.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-700 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 z-10"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {megaMenuOpen && megaMenuData[megaMenuOpen as keyof typeof megaMenuData] && (
        <div
          className="fixed top-[88px] left-0 right-0 z-40 px-4 sm:px-6 lg:px-8"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="w-full md:max-w-6xl mx-auto">
            <div className="bg-white/98 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-2xl shadow-blue-900/10 p-8 animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Menu Sections */}
                {megaMenuData[megaMenuOpen as keyof typeof megaMenuData].sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-blue-100 pb-2">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={itemIndex}
                            onClick={() => handleMegaMenuItemClick(item.href)}
                            className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                              <IconComponent size={18} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Featured Section */}
                <div className="md:col-span-1 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">
                      {megaMenuData[megaMenuOpen as keyof typeof megaMenuData].featured.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {megaMenuData[megaMenuOpen as keyof typeof megaMenuData].featured.description}
                    </p>
                    <div
                      onClick={() => handleMegaMenuItemClick(megaMenuData[megaMenuOpen as keyof typeof megaMenuData].featured.href)}
                      className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-50 transition-colors group cursor-pointer"
                    >
                      <span>{megaMenuData[megaMenuOpen as keyof typeof megaMenuData].featured.cta}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
        "bg-white/80 backdrop-blur-xl",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="container mx-auto max-w-lg">
          <nav className="flex flex-col space-y-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-blue-100 shadow-xl shadow-blue-900/10">
            {navigationTabs.map((tab, index) => (
              <div key={index}>
                {tab.href.startsWith('#') || tab.isHome ? (
                  <div
                    className="text-lg font-medium py-3 px-4 text-center rounded-xl bg-white border border-blue-100 hover:bg-blue-50 hover:border-blue-200 text-slate-700 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                    onClick={(e) => handleNavClick(index, tab, e)}
                  >
                    {tab.label}
                  </div>
                ) : (
                  <Link
                    to={tab.href}
                    className="text-lg font-medium py-3 px-4 text-center rounded-xl bg-white border border-blue-100 hover:bg-blue-50 hover:border-blue-200 text-slate-700 hover:text-blue-600 transition-all duration-200 block"
                    onClick={() => {
                      setActiveIndex(index);
                      setMegaMenuOpen(null);
                      setIsMenuOpen(false);
                      document.body.style.overflow = '';
                    }}
                  >
                    {tab.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
