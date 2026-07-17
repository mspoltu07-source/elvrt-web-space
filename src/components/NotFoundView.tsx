import React from "react";
import { ArrowLeft } from "lucide-react";

export default function NotFoundView() {
  return (
    <>
      <style>{`
        body {
          background-color: #000000 !important;
          color: white;
          zoom: 0.85;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .error-container {
          text-align: center;
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 20px 80px;
        }

        .error-code {
          font-size: clamp(8rem, 15vw, 12rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -4px;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .back-home-btn {
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

        .back-home-btn:hover {
          background: #e55a1f;
          transform: translateY(-2px);
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(3px, -2px); }
          60% { transform: translate(-2px, -1px); }
          80% { transform: translate(2px, 1px); }
        }

        .error-code:hover {
          animation: glitch 0.3s ease-in-out;
        }

        @media (max-width: 480px) {
          .error-container { padding: 100px 15px 60px; }
          .error-code { letter-spacing: -2px; }
          .back-home-btn { padding: 0.75rem 1.5rem; font-size: 0.9rem; width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="error-container">
        <div className="error-code cursor-pointer">404</div>
        <h1 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-4 tracking-tight">
          Oops, Wrong Turn
        </h1>
        <p className="text-slate-400 font-light text-base md:text-lg max-w-[450px] mx-auto mb-10 leading-relaxed">
          Looks like even our AI got confused here. The page you're looking for doesn't exist or may have moved.
        </p>
        
        <div className="flex justify-center">
          <a href="/" className="back-home-btn">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
