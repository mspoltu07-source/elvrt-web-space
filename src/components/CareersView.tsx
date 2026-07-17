import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, ArrowRight, ChevronLeft } from "lucide-react";
import Header from "./Header";

export default function CareersView() {

  return (
    <>
      <style>{`
        body {
          background-color: #0d0d0d !important;
          color: #e0e0e0;
          zoom: 0.85;
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar { 
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000; 
          padding: 0.75rem 1rem; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); 
          background: transparent !important; backdrop-filter: none !important; 
          border-bottom: none !important; 
        }
        .navbar.scrolled { 
          padding: 0.5rem 1rem; background: rgba(0,0,0,0.92) !important; 
          backdrop-filter: blur(24px); border-bottom: 1px solid rgba(255,255,255,0.06); 
        }

        .logo-container { 
          width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; 
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); transition: all 0.4s ease; 
        }
        .logo-container:hover { transform: scale(1.08); }
        .logo-container img { width: 48px; height: 48px; object-fit: contain; filter: brightness(1.4) contrast(1.3); }

        .btn-primary { 
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.5rem; 
          background: white; color: black; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 700; 
          font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; border: none; 
          border-radius: 12px; cursor: pointer; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); 
          box-shadow: 0 8px 24px rgba(255,255,255,0.2); text-decoration: none; line-height: 1; 
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,255,255,0.3); color: black; }

        .careers-container {
          text-align: center;
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 20px 80px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ff6b2b;
          color: #ffffff;
          text-decoration: none;
          padding: 0.9rem 2.2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .cta-btn:hover {
          background: #e55a1f;
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .careers-container { padding: 100px 15px 60px; }
          .cta-btn { padding: 0.75rem 1.5rem; font-size: 0.9rem; width: 100%; justify-content: center; }
        }
      `}</style>

      {/* Floating Pill Header component (premiercs.com style) */}
      <Header />

      {/* CAREERS PAGE CONTENT */}
      <div className="careers-container">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-5 leading-tight tracking-tight font-display">
          We're Just Getting Started
        </h1>
        
        <p className="text-slate-400 font-light text-base md:text-lg max-w-[500px] leading-relaxed mx-auto mb-10">
          No open roles right now — but we're always on the lookout for sharp, ambitious people who want to build the future of real estate tech.
        </p>
        
        <div className="flex justify-center">
          <a href="/contact" className="cta-btn">
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-1 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </>
  );
}
