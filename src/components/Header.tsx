import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Instagram, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  const handleAnnouncementClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#pricing";
    }
  };

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < prevScrollY) {
        setVisible(true);
      }

      prevScrollY = currentScrollY;
    };

    const handleLocationChange = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;
      setActivePath(hash || pathname || "/");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    
    handleLocationChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const menuItems = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Process", href: "/#infinite-performance" },
    { label: "Impact", href: "/#impact" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { 
      icon: <Linkedin className="w-[28px] h-[28px] stroke-[2.75]" />, 
      href: "https://www.linkedin.com/in/ahnaf-jawad-elvrt/", 
      label: "LinkedIn" 
    },
    { 
      icon: <Instagram className="w-[28px] h-[28px] stroke-[2.75]" />, 
      href: "https://www.instagram.com/elvrt_realestatetech/", 
      label: "Instagram" 
    }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        /* Aligned precisely with premiercs.com styling rules */
        .header-bar-container {
          background: #222329 !important; /* Lighter charcoal-slate background to pop against dark background */
          border: none !important; /* No borders for a clean look */
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
          border-radius: 22px; /* A little bit rounder corners for the bar */
          padding: 0.8rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between; /* Push nav to the left, actions/socials to the right of the bar */
          flex: 1; /* Stretch to occupy the remaining space on the right of the logo */
          width: 100%;
          max-width: 740px; /* Slightly wider, more spacious bar to stay beautifully balanced */
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header-bar-container.scrolled-state {
          background: #2a2b33 !important; /* Distinctly lighter background when scrolled */
          border: none !important; /* No borders when scrolled */
          box-shadow: 0 15px 45px -12px rgba(0, 0, 0, 0.7);
        }

        /* Logo outside of the pill container */
        .header-logo-outside {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header-logo-outside:hover {
          transform: scale(1.08) rotate(2deg);
        }

        .header-logo-outside img {
          width: 200px;
          height: auto;
          max-height: 75px;
          object-fit: contain;
          filter: brightness(1.2) contrast(1.1);
        }

        .header-nav-link-item {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.88);
          position: relative;
          padding: 0.4rem 0.2rem;
          transition: color 0.3s ease;
          text-transform: uppercase;
        }

        .header-nav-link-item:hover {
          color: #ffffff;
        }

        .header-nav-link-item.active-nav-item {
          color: #ff6b2b;
        }

        .header-nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #ff6b2b;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .header-nav-link-item:hover::after {
          width: 60%;
        }

        .header-nav-link-item.active-nav-item::after {
          width: 80%;
          background: #ff6b2b;
        }

        .header-social-pill-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.3s ease;
          padding: 0.25rem;
        }

        .header-social-pill-btn:hover {
          background: transparent !important;
          border: none !important;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Aligned Get Started button styled perfectly like "Book a demo" outline */
        .btn-get-started-bar {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: #ffffff;
          color: #0d0d0f;
          border: none !important;
          border-radius: 20px; /* Rounded pill style matching the bar */
          padding: 0.65rem 1.4rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.25);
        }

        .btn-get-started-bar:hover {
          background: #ff6b2b;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -8px rgba(255, 107, 43, 0.4);
        }

        @media (max-width: 768px) {
          .header-logo-outside img {
            width: 105px;
            max-height: 40px;
          }
          .header-bar-container {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
          .header-bar-container.scrolled-state {
            background: transparent !important;
          }
          .header-hamburger-button {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            width: 40px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 !important;
            cursor: pointer;
            transition: all 0.2s ease !important;
          }
          .header-hamburger-button:hover {
            opacity: 0.8 !important;
            transform: scale(1.05) !important;
          }
        }
      `}</style>

      {/* Announcement Bar */}
      <div 
        onClick={handleAnnouncementClick}
        className={`fixed top-0 left-0 right-0 z-50 min-h-[40px] md:h-[44px] bg-[#030303] border-b border-[#ff6b2b]/30 flex items-center justify-center px-4 py-2 md:py-0 cursor-pointer transition-all duration-500 hover:bg-[#07070a] group ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="text-center text-[11px] sm:text-[12px] md:text-sm font-sans font-medium text-white tracking-wide leading-relaxed">
          🚀 Founding Partner Program: Get $1,001 off your setup fee and 50% off monthly. Only 3 slots available.{" "}
          <span className="text-[#ff6b2b] font-bold hover:underline transition-all duration-300 ml-1 inline-block">
            [Apply Now →]
          </span>
        </div>
      </div>

       {/* Outer wrapper placing the logo and bar with the requested spacing and custom alignment */}
      <div className={`fixed left-0 right-0 z-50 pl-6 md:pl-10 lg:pl-12 pr-6 md:pr-10 lg:pr-16 pointer-events-none transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100 top-[60px] md:top-[72px]" : "-translate-y-[150%] opacity-0 top-5 md:top-7"
      }`}>
        <div className="max-w-[1720px] mx-auto md:grid md:grid-cols-[1fr_auto_1fr] flex items-center justify-between w-full pointer-events-auto gap-4 md:gap-8 lg:gap-14">
          
          {/* LEFT AREA: Aligned beautifully to the left side */}
          <div className="hidden md:flex items-center justify-start flex-shrink-0 justify-self-start">
            <a href="/" className="flex items-center cursor-pointer group">
              <div className="header-logo-outside">
                <img 
                  src="https://i.ibb.co/4g5N2tf8/01c503f3-326b-4474-91d8-51d1cf59f76e-removebg-preview-1-removebg-preview.png" 
                  alt="ELVRT Logo" 
                />
              </div>
            </a>
          </div>

          {/* MIDDLE AREA: Centered header bar */}
          <div className="flex items-center md:justify-self-center w-full md:w-[740px] max-w-full">
            <div className={`header-bar-container ${scrolled ? "scrolled-state" : ""} w-full`}>
              
              {/* Mobile-only Logo inside the bar on the left */}
              <div className="flex md:hidden items-center flex-shrink-0 mr-auto">
                <a href="/" className="flex items-center cursor-pointer">
                  <div className="header-logo-outside">
                    <img 
                      src="https://i.ibb.co/4g5N2tf8/01c503f3-326b-4474-91d8-51d1cf59f76e-removebg-preview-1-removebg-preview.png" 
                      alt="ELVRT Logo" 
                      style={{ width: '90px', maxHeight: '32px' }}
                    />
                  </div>
                </a>
              </div>

              {/* Aligned Navigation Links inside the bar */}
              <nav className="hidden md:flex items-center justify-between w-full">
                {menuItems.map((item) => {
                  const isActive = 
                    activePath === item.href || 
                    (activePath.includes(item.href.replace("/", "")));
                  
                  return (
                    <a 
                      key={item.label}
                      href={item.href} 
                      className={`header-nav-link-item ${isActive ? "active-nav-item" : ""}`}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3 ml-auto">
                {/* Mobile Hamburger toggle */}
                <button 
                  className="md:hidden header-hamburger-button focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-white stroke-[2]" />
                  ) : (
                    <Menu className="w-6 h-6 text-white stroke-[2]" />
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT AREA: Get Started button and socials sitting outside on the right */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 md:justify-self-end flex-shrink-0 ml-auto md:ml-0">
            {/* Get Started button separate from the header bar, styled beautifully & boldly */}
            <a 
              href="https://calendly.com/mspoltu07/strategy-call" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-get-started-bar flex-shrink-0"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Extracted social links sitting completely OUTSIDE on the right of the bar */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="header-social-pill-btn"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE OVERLAY NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 w-full bg-black/98 backdrop-blur-2xl z-40 flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 my-auto">
              {menuItems.map((item, idx) => {
                const isActive = 
                  activePath === item.href || 
                  (activePath.includes(item.href.replace("/", "")));
                
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <a 
                      href={item.href} 
                      onClick={() => handleLinkClick(item.href)}
                      className={`font-sans text-2xl font-semibold tracking-wide block py-1 border-b border-white/5 ${
                        isActive ? "text-[#ff6b2b]" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto space-y-6">
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <a 
                href="https://calendly.com/mspoltu07/strategy-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-white text-black font-semibold rounded-full py-3.5 flex items-center justify-center gap-2 hover:bg-[#ff6b2b] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
