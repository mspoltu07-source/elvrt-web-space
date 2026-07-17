import React from "react";

export default function CookieView() {
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
            Cookie Policy
          </h1>
          <div className="text-xs text-slate-300 mb-8 pb-4 border-b border-white/15">
            Last updated May 19, 2026
          </div>

          <p className="text-base text-slate-200 mb-6 font-light">
            This Cookie Policy explains how ELVRT Real Estate Tech ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at <a href="https://elvrt.flashhub.net" className="text-[#7dd3fc] border-b border-[#7dd3fc]/50 hover:text-white hover:border-white transition-all">https://elvrt.flashhub.net</a> ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <p className="text-base text-slate-200 mb-6 font-light">
            In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            What are cookies?
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="text-base text-slate-200 mb-6 font-light">
            Cookies set by the website owner (in this case, ELVRT Real Estate Tech) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            Why do we use cookies?
          </h2>
          <p className="text-base text-slate-200 mb-6 font-light">
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
          </p>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            How can I control cookies?
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Preference Center. The Cookie Preference Center allows you to select which categories of cookies you accept or reject. <strong>Essential cookies cannot be rejected</strong> as they are strictly necessary to provide you with services.
          </p>
          <p className="text-base text-slate-200 mb-6 font-light">
            The Cookie Preference Center can be found in the notification banner and on our Website. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
          </p>

          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl mb-8 font-light text-slate-200">
            <p><strong>📋 Types of cookies we use:</strong> The specific types of first- and third-party cookies served through our Website and the purposes they perform are described in our system details (please note that the specific cookies served may vary depending on the specific Online Properties you visit).</p>
          </div>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            How can I control cookies on my browser?
          </h2>
          <p className="text-base text-slate-200 mb-4 font-light">
            As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:
          </p>

          <div className="flex flex-wrap gap-3 my-6 font-light">
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="bg-black/30 px-4 py-1.5 rounded-full hover:bg-sky-500/20 text-[#7dd3fc]">Chrome</a>
            <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noreferrer" className="bg-black/30 px-4 py-1.5 rounded-full hover:bg-sky-500/20 text-[#7dd3fc]">Internet Explorer</a>
            <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer" className="bg-black/30 px-4 py-1.5 rounded-full hover:bg-sky-500/20 text-[#7dd3fc]">Firefox</a>
            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noreferrer" className="bg-black/30 px-4 py-1.5 rounded-full hover:bg-sky-500/20 text-[#7dd3fc]">Safari</a>
            <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noreferrer" className="bg-black/30 px-4 py-1.5 rounded-full hover:bg-sky-500/20 text-[#7dd3fc]">Edge</a>
            <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noreferrer" className="bg-black/30 px-4 py-1.5 rounded-full hover:bg-sky-500/20 text-[#7dd3fc]">Opera</a>
          </div>

          <h2 className="text-xl font-semibold text-white mt-9 mb-4 border-l-4 border-[#38bdf8] pl-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            Where can I get further information?
          </h2>
          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl mb-6 space-y-2 font-light text-slate-200">
            <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:elvrtrealestatetech@gmail.com" className="text-[#7dd3fc] underline">elvrtrealestatetech@gmail.com</a> or by post to:</p>
            <p>ELVRT Real Estate Tech<br />Singapore, Singapore</p>
          </div>

          <p className="text-base text-slate-200 mb-6 font-light">
            For information about our privacy practices, please see our <a href="/privacy.html" className="text-[#7dd3fc] underline">Privacy Policy</a>.
          </p>

          <div className="text-center text-xs text-slate-400 border-t border-white/10 pt-6 mt-10">
            © ELvRT — AI-powered real estate automation. Built for transparency and trust.
          </div>
        </div>
      </div>
    </>
  );
}
