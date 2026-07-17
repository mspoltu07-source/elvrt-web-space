import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, ArrowRight, X } from "lucide-react";
import Header from "./Header";

export default function AboutView() {

  return (
    <>
      <style>{`
        body {
          background-color: #050505 !important;
          color: #e0e0e0;
          zoom: 0.85;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://i.ibb.co.com/zhyq7tXr/2151917176.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          opacity: 0.4;
          z-index: 0;
          filter: brightness(0.7);
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

        .page-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 100%;
          padding: 4rem 6rem;
          margin-top: 80px;
        }

        .content-card {
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 5rem 6rem;
          width: 100%;
        }

        .section-label {
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #ff6b2b;
          margin-bottom: 0.8rem;
        }

        @media (min-width: 900px) {
          .section-row {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 3rem;
            align-items: start;
          }
          
          .section-label {
            margin-bottom: 0;
            padding-top: 0.5rem;
          }
        }

        @media (max-width: 1024px) {
          .page-container { padding: 3rem 3rem; }
          .content-card { padding: 4rem 3rem; }
        }

        @media (max-width: 768px) {
          .page-container { padding: 2rem 1.5rem; margin-top: 70px; }
          .content-card { padding: 2.5rem 1.8rem; border-radius: 18px; }
        }

        @media (max-width: 480px) {
          .page-container { padding: 1.5rem 1rem; margin-top: 60px; }
          .content-card { padding: 2rem 1.2rem; border-radius: 14px; }
        }
      `}</style>

      {/* Floating Pill Header component (premiercs.com style) */}
      <Header />

      {/* ABOUT PAGE CONTENT */}
      <div className="page-container">
        <div className="content-card text-left">
          
          <section className="mb-14">
            <h1 className="text-[clamp(2.5rem,5vw,3.8rem)] font-bold text-white tracking-tight leading-tight mb-5 max-w-[800px]">
              We're Not Here to Play It Safe
            </h1>
            <p className="text-lg md:text-xl font-light text-slate-300 max-w-[600px] leading-relaxed">
              ELVRT was built with one obsession — make real estate agents unstoppable.
            </p>
          </section>
          
          <div className="w-full h-px bg-white/5 my-14"></div>
          
          <section className="mb-14">
            <div className="section-row">
              <p className="section-label">The Problem</p>
              <div>
                <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white tracking-tight leading-tight mb-5 max-w-[700px]">
                  The Industry Was Broken
                </h2>
                <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-[650px]">
                  Real estate agents were spending hours chasing leads that never converted. Missing follow-ups. Losing deals to faster competitors. Working harder every month — but not earning more. Something had to change.
                </p>
              </div>
            </div>
          </section>
          
          <div className="w-full h-px bg-white/5 my-14"></div>

          <section className="mb-14">
            <div className="section-row">
              <p className="section-label">Our Mission</p>
              <div>
                <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white tracking-tight leading-tight mb-5 max-w-[700px]">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-[650px]">
                  To give every real estate agent an unfair advantage — through AI that qualifies leads, nurtures relationships, and fills calendars automatically. So agents can do what they do best: close deals.
                </p>
              </div>
            </div>
          </section>
          
          <div className="w-full h-px bg-white/5 my-14"></div>

          <section className="mb-14">
            <div className="section-row">
              <p className="section-label">The Vision</p>
              <div>
                <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white tracking-tight leading-tight mb-5 max-w-[700px]">
                  Where We're Going
                </h2>
                <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-[650px]">
                  A future where no deal is lost to slow response times. No lead is forgotten. No opportunity is missed. ELVRT is building the infrastructure that makes that future possible — today.
                </p>
              </div>
            </div>
          </section>
          
          {/* CTA Box */}
          <section className="text-center p-14 bg-white/[0.02] border border-white/[0.04] rounded-2xl mt-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white tracking-tight mb-8">
              Ready to Work Smarter?
            </h2>
            <a 
              href="https://calendly.com/mspoltu07/strategy-call" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-[#ff6b2b] text-white hover:bg-[#e55a1f] active:scale-95 transition-all py-4 px-10 rounded-xl font-semibold text-lg"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </section>

        </div>
      </div>
    </>
  );
}
