import React from "react";

export default function PrivacyView() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2 leading-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
            Privacy Policy
          </h1>
          <div className="text-xs text-slate-300 mb-8 pb-4 border-b border-white/15">
            Last updated May 19, 2026
          </div>

          <p className="text-base text-slate-200 mb-6 font-light">
            This Privacy Notice for ELvRT ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
          </p>
          
          <ul className="list-disc list-inside space-y-2 mb-6 text-slate-200 pl-4 font-light">
            <li>Visit our website at <a href="https://elvrt.flashhub.net" className="text-[#7dd3fc] border-b border-[#7dd3fc]/50 hover:text-white hover:border-white transition-all">https://elvrt.flashhub.net</a> or any website of ours that links to this Privacy Notice</li>
            <li>Use ELvRT. ELvRT provides AI-powered agentic automation systems for real estate agents and agencies, including lead qualification, automated follow-up, and CRM integration services.</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>

          <p className="text-base text-slate-200 mb-6 font-light">
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:elvrtrealestatetech@gmail.com" className="text-[#7dd3fc] border-b border-[#7dd3fc]/50 hover:text-white transition-all">elvrtrealestatetech@gmail.com</a>.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            Summary of Key Points
          </h2>
          
          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl mb-8 space-y-3 font-light text-slate-200">
            <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us. <a href="#section1" className="text-[#7dd3fc] underline">Learn more</a></p>
            <p><strong>Do we process any sensitive personal information?</strong> <strong>We do not process sensitive personal information.</strong></p>
            <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
            <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. <a href="#section2" className="text-[#7dd3fc] underline">Learn more</a></p>
            <p><strong>When and with whom do we share personal information?</strong> We may share information in specific situations. <a href="#section4" className="text-[#7dd3fc] underline">Learn more</a></p>
            <p><strong>How do we keep your information safe?</strong> We have organizational and technical security measures in place. <a href="#section7" className="text-[#7dd3fc] underline">Learn more</a></p>
            <p><strong>What are your rights?</strong> Depending on your location, you may have certain rights regarding your personal information. <a href="#section9" className="text-[#7dd3fc] underline">Learn more</a></p>
          </div>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-8 pl-4 font-light text-[#7dd3fc]">
            <li><a href="#section1" className="hover:text-white transition-all underline">What information do we collect?</a></li>
            <li><a href="#section2" className="hover:text-white transition-all underline">How do we process your information?</a></li>
            <li><a href="#section3" className="hover:text-white transition-all underline">What legal bases do we rely on?</a></li>
            <li><a href="#section4" className="hover:text-white transition-all underline">When and with whom do we share your personal information?</a></li>
            <li><a href="#section5" className="hover:text-white transition-all underline">Do we offer AI-based products?</a></li>
            <li><a href="#section6" className="hover:text-white transition-all underline">How long do we keep your information?</a></li>
            <li><a href="#section7" className="hover:text-white transition-all underline">How do we keep your information safe?</a></li>
            <li><a href="#section8" className="hover:text-white transition-all underline">Do we collect information from minors?</a></li>
            <li><a href="#section9" className="hover:text-white transition-all underline">What are your privacy rights?</a></li>
            <li><a href="#section10" className="hover:text-white transition-all underline">Controls for Do-Not-Track features</a></li>
            <li><a href="#section11" className="hover:text-white transition-all underline">Do US residents have specific privacy rights?</a></li>
            <li><a href="#section12" className="hover:text-white transition-all underline">Do other regions have specific privacy rights?</a></li>
            <li><a href="#section13" className="hover:text-white transition-all underline">Do we make updates to this notice?</a></li>
            <li><a href="#section14" className="hover:text-white transition-all underline">How can you contact us about this notice?</a></li>
            <li><a href="#section15" className="hover:text-white transition-all underline">How can you review, update, or delete your data?</a></li>
          </ol>

          <h2 id="section1" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            1. What information do we collect?
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            <strong>Personal information you disclose to us</strong><br /><em>In Short: We collect personal information that you provide to us.</em>
          </p>
          <p className="text-base text-slate-300 mb-6 font-light">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. The personal information we collect may include: names, email addresses, job titles. We do not process sensitive personal information.
          </p>

          <h2 id="section2" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            2. How do we process your information?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We process your personal information to deliver services, respond to inquiries, send administrative information, request feedback, protect our Services, identify usage trends, and protect vital interests.
          </p>

          <h2 id="section3" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            3. What legal bases do we rely on?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            <strong>For EU/UK residents:</strong> We rely on Consent, Performance of a Contract, Legitimate Interests, Legal Obligations, or Vital Interests. <strong>For Canadian residents:</strong> processing is based on express/implied consent or exceptional cases permitted by law.
          </p>

          <h2 id="section4" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            4. When and with whom do we share your personal information?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition.
          </p>

          <h2 id="section5" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            5. Do we offer AI-based products?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            Yes. We provide AI Products through third-party providers including Anthropic. Your input, output, and personal information may be shared with AI Service Providers for natural language processing features. To opt out, contact us.
          </p>

          <h2 id="section6" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            6. How long do we keep your information?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We keep your personal information for as long as necessary — no longer than <strong>2 years</strong> — unless a longer retention period is required by law.
          </p>

          <h2 id="section7" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            7. How do we keep your information safe?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We implement appropriate technical and organizational security measures. However, no transmission over the internet is 100% secure.
          </p>

          <h2 id="section8" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            8. Do we collect information from minors?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We do not knowingly collect data from or market to children under 18 years of age.
          </p>

          <h2 id="section9" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            9. What are your privacy rights?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            In some regions (EEA, UK, Switzerland, Canada, etc.) you have rights including access, rectification, erasure, restriction, and data portability.
          </p>

          <h2 id="section10" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            10. Controls for Do-Not-Track features
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We do not currently respond to DNT signals because no uniform standard has been finalized.
          </p>

          <h2 id="section11" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            11. Do US residents have specific privacy rights?
          </h2>
          
          <div className="overflow-x-auto my-7 border border-white/10 rounded-2xl bg-black/20">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-black/40 text-[#b9e2ff] font-semibold border-b border-white/80">
                  <th className="p-4">Category</th>
                  <th className="p-4">Collected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white font-light">
                <tr><td className="p-4">A. Identifiers (name, email, IP)</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">B. CA Customer Records</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">C. Protected classifications</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">D. Commercial information</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">E. Biometric information</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">F. Internet activity</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">G. Geolocation data</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">H. Sensory data</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">I. Professional/employment</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">J. Education information</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">K. Inferences</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
                <tr><td className="p-4">L. Sensitive personal information</td><td className="p-4"><span className="bg-black/50 text-white py-1 px-3 rounded-full text-xs font-semibold">NO</span></td></tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-base text-slate-200 mb-6 font-light">
            We have not disclosed, sold, or shared any personal information in the preceding 12 months. To exercise rights, email <a href="mailto:elvrtrealestatetech@gmail.com" className="text-[#7dd3fc] underline">elvrtrealestatetech@gmail.com</a>.
          </p>

          <h2 id="section12" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            12. Do other regions have specific privacy rights?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            <strong>Australia and New Zealand:</strong> Our processing complies with Australia's Privacy Act 1988 and NZ's Privacy Act 2020.
          </p>

          <h2 id="section13" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            13. Do we make updates to this notice?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            Yes, we will update this notice as necessary. The "Last updated" date indicates the latest revision.
          </p>

          <h2 id="section14" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            14. How can you contact us about this notice?
          </h2>
          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl mb-6 space-y-2 font-light text-slate-200">
            <p>Email: <a href="mailto:elvrtrealestatetech@gmail.com" className="text-[#7dd3fc] underline">elvrtrealestatetech@gmail.com</a></p>
            <p>Postal address:<br />ELvRT<br />1 Raffles Place<br />Singapore 048616<br />Singapore</p>
          </div>

          <h2 id="section15" className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4">
            15. How can you review, update, or delete your data?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            To request access, correction, or deletion of your personal information, email <a href="mailto:elvrtrealestatetech@gmail.com" className="text-[#7dd3fc] underline">elvrtrealestatetech@gmail.com</a>.
          </p>

          <p className="text-base text-slate-200 mb-6 font-light">
            For information about how we use cookies and similar technologies, please see our <a href="/cookie.html" className="text-[#7dd3fc] underline">Cookie Policy</a>.
          </p>

          <div className="text-center text-xs text-slate-400 border-t border-white/10 pt-6 mt-10">
            © ELvRT — AI-powered real estate automation. Built for transparency and trust.
          </div>
        </div>
      </div>
    </>
  );
}
