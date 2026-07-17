import React from "react";
import { ArrowUpRight, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full bg-[#09090b] text-[#94A3B8] pt-24 pb-12 px-6 border-t border-white/[0.04] relative z-10 font-sans overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-white/[0.01] rounded-full blur-[80px] pointer-events-none"></div>

      {/* Grid Pattern Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Column 1: Logo and About */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 text-white stroke-[1.5] transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <div className="text-left">
                <h3 className="font-sans font-black text-xl text-white tracking-widest leading-none">ELVRT</h3>
                <p className="text-[9px] text-neutral-400 font-mono tracking-[0.2em] uppercase mt-1.5">AI FOR REAL ESTATE</p>
              </div>
            </a>
            
            <p className="text-[14px] text-neutral-400 max-w-sm font-medium mb-8 text-left leading-relaxed">
              Built for real estate professionals who refuse to leave deals on the table. Scale your operations, automate your leads, and rule your market.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/elvrtrealestatetech" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.01] flex items-center justify-center hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/elvrt_realestatetech/?hl=en" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.01] flex items-center justify-center hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Spacer for layout */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Column 2: Legal Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/privacy" className="text-[14px] text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-[14px] text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie" className="text-[14px] text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/about" className="text-[14px] text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[14px] text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-[14px] text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Divider line */}
        <div className="border-t border-white/[0.04] w-full pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-neutral-500 font-medium">
              © 2026 ELVRT. All rights reserved.
            </p>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <p className="text-xs text-neutral-500 font-medium">
              Built for real estate. Backed by AI.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="text-xs text-neutral-400 hover:text-white font-semibold transition-all duration-300 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12]"
          >
            Back to top ↑
          </button>
        </div>
        
      </div>
    </footer>
  );
}
