import React from "react";

export default function TermsView() {
  return (
    <>
      <style>{`
        body {
          background: url('https://i.ibb.co.com/h1sx8QJz/Untitled-design-1.png') no-repeat center center fixed !important;
          background-size: cover !important;
          color: #f1f5f9;
          zoom: 0.85;
          line-height: 1.7;
        }

        .policy-container {
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 32px;
          padding: 3rem 5rem;
          box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 768px) {
          .policy-container {
            padding: 1.5rem 1.2rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 24px;
          }
        }

        @media (min-width: 1600px) {
          .policy-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 3rem 6rem;
          }
        }
      `}</style>

      <div className="py-8 px-4 min-h-screen">
        <div className="text-center mb-6">
          <a href="/" className="inline-block text-xs text-white/80 bg-black/30 backdrop-blur-md px-5 py-1.5 rounded-full hover:bg-[#38bdf8]/30 transition-all font-light">
            ← Back to ELvRT
          </a>
        </div>

        <div className="policy-container text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2 leading-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.3)] font-display">
            Terms and Conditions
          </h1>
          <div className="text-xs text-slate-300 mb-8 pb-4 border-b border-white/15">
            Last updated May 20, 2026
          </div>

          <p className="text-base text-slate-200 mb-6 font-semibold">
            AGREEMENT TO OUR LEGAL TERMS
          </p>

          <p className="text-base text-slate-200 mb-4 font-light">
            We are ELVRT Real Estate Tech ("Company", "we", "us", "our"), a company registered in Bangladesh at 12/A, Gulshan Avenue, Gulshan-2, Dhaka 1212.
          </p>

          <p className="text-base text-slate-200 mb-4 font-light">
            We operate the website <a href="/" className="text-[#fdba74] border-b border-orange-400/50 hover:text-orange-200 transition-all">https://tech.elvrt.workers.dev/</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>

          <p className="text-base text-slate-200 mb-4 font-light">
            This Site provides AI-powered automation solutions. By accessing our Site, you agree to these Terms.
          </p>

          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl mb-8 space-y-3 font-light text-slate-200">
            <h3 className="font-bold text-white text-lg">💡 Quick Overview</h3>
            <p>
              Our automated systems are designed to assist real estate professionals. You must use our services in accordance with all applicable local, national, and international laws and regulations.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-orange-400 pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            1. Use of Services
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            By accessing or using our platform, you represent that you are at least 18 years of age and have the legal authority to agree to these Terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-orange-400 pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            2. Intellectual Property
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            All code, designs, algorithms, patents, trademarks, and copyrightable material displayed on this site are the sole property of ELVRT Real Estate Tech. You may not copy, reproduce, or redistribute any of our materials without express written consent.
          </p>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-orange-400 pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            3. Limitation of Liability
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            ELVRT provides AI-driven workflows and tools. We do not guarantee specific conversion rates, financial outcomes, or continuous, uninterrupted uptime of third-party platforms. In no event shall we be liable for any indirect, consequential, or punitive damages arising from your use of our tools.
          </p>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-orange-400 pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            4. AI Disclaimer
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            Our services employ advanced AI models. While we strive for accuracy, AI outputs are generative and should be validated for critical business uses. Compliance with local real estate advertising laws remains the sole responsibility of the user.
          </p>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-orange-400 pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            5. Contact Us
          </h2>
          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl mb-6 space-y-2 font-light text-slate-200">
            <p><strong>ELVRT Real Estate Tech</strong></p>
            <p>1 Raffles Place<br />Singapore 048624<br />Singapore</p>
            <p>Email: <a href="mailto:elvrtrealestatech@gmail.com" className="text-[#fdba74] underline">elvrtrealestatech@gmail.com</a></p>
          </div>

          <div className="text-center text-xs text-slate-400 border-t border-white/10 pt-6 mt-10">
            © ELvRT — AI-powered real estate automation. Built for transparency and trust.
          </div>
        </div>
      </div>
    </>
  );
}
