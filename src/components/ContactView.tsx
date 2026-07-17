import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, ArrowRight, Mail, Calendar, Sparkles, ChevronLeft } from "lucide-react";
import Header from "./Header";

export default function ContactView() {
  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    emailInvalid: false
  });

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors in real-time
    if (name === "name" && value.trim()) {
      setErrors((prev) => ({ ...prev, name: false }));
    }
    if (name === "email" && value.trim()) {
      setErrors((prev) => ({ ...prev, email: false }));
      if (isValidEmail(value)) {
        setErrors((prev) => ({ ...prev, emailInvalid: false }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let hasError = false;
    const newErrors = { name: false, email: false, emailInvalid: false };

    if (!formData.name.trim()) {
      newErrors.name = true;
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = true;
      hasError = true;
    } else if (!isValidEmail(formData.email)) {
      newErrors.emailInvalid = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      e.preventDefault();
    }
    // If no error, the standard HTML form submit action triggers (posting to Formspree)
  };

  return (
    <>
      <style>{`
        body {
          background-color: #1a1a1a !important;
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
          background-image: url('https://i.ibb.co.com/h1sx8QJz/Untitled-design-1.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          opacity: 0.8;
          z-index: 0;
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
          text-decoration: none; line-height: 1; 
        }
        .btn-primary:hover { transform: translateY(-2px); background: white; color: black; }

        .page-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1400px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 2rem 4rem;
          gap: 6rem;
          margin: 80px auto 0;
        }

        .content-section {
          flex: 0 0 auto;
          color: #e0e0e0;
          padding-top: 2rem;
          padding-left: 2rem;
        }

        .back-home {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 3rem;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .back-home:hover {
          background: rgba(255, 255, 255, 0.2);
          gap: 0.8rem;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .form-section {
          flex: 0 0 auto;
          width: 500px;
          padding-right: 2rem;
        }

        .contact-form {
          background: rgba(37, 37, 37, 0.5);
          backdrop-filter: blur(25px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.85rem;
          color: #ffffff;
          letter-spacing: 0.3px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          background: rgba(30, 30, 30, 0.5);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          font-size: 0.9rem;
          color: #ffffff;
          font-weight: 400;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group input:hover,
        .form-group textarea:hover {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(30, 30, 30, 0.7);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(40, 40, 40, 0.8);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .social-icon-box {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .contact-social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }
        .contact-social-link:hover {
          transform: translateX(8px);
        }

        .submit-btn {
          width: 100%;
          padding: 0.9rem;
          background: #ff6b2b;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          margin-top: 0.5rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        .submit-btn:hover {
          background: #e55a1f;
          transform: translateY(-2px);
        }

        @media (max-width: 1100px) {
          .page-container { padding: 2rem; gap: 3rem; }
          .content-section { padding-left: 0; }
          .form-section { padding-right: 0; width: 450px; }
        }

        @media (max-width: 768px) {
          .page-container { flex-direction: column; gap: 2.5rem; padding: 1.5rem; margin-top: 70px; align-items: center; }
          .content-section { text-align: center; width: 100%; padding-left: 0; }
          .back-home { margin-bottom: 2rem; }
          .form-section { width: 100%; max-width: 500px; padding-right: 0; }
          .contact-form { padding: 1.8rem; }
        }
      `}</style>

      {/* Floating Pill Header component (premiercs.com style) */}
      <Header />

      {/* CONTACT PAGE CONTENT */}
      <div className="page-container">
        
        {/* Left Content column */}
        <div className="content-section text-left">
          <a href="/" className="back-home">
            <ChevronLeft className="w-[18px] h-[18px]" />
            Back to Home
          </a>
          
          <h1 className="text-[4.5rem] font-bold text-white tracking-tight leading-[1.1] mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] font-display">
            Let's Talk
          </h1>
          
          <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-[400px] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] font-light">
            Ready to automate your real estate business? Let's connect.
          </p>
          
          {/* Calendly Booking link */}
          <div className="mb-10 flex items-center gap-4">
            <a 
              href="https://calendly.com/mspoltu07/strategy-call?month=2026-05" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 bg-[#ff6b2b] text-white hover:bg-[#e55a1f] active:scale-95 transition-all py-4 px-8 rounded-xl font-semibold text-lg border border-white/20"
            >
              <Calendar className="w-[22px] h-[22px]" />
              Book a Strategy Call
            </a>
          </div>
          
          {/* Social details list */}
          <div className="flex flex-col gap-6">
            <a href="mailto:elvrtrealestatetech@gmail.com" className="contact-social-link">
              <div className="social-icon-box">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-base text-slate-300">elvrtrealestatetech@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/elvrtrealestatetech" target="_blank" rel="noreferrer" className="contact-social-link">
              <div className="social-icon-box">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <span className="text-base text-slate-300">Let's connect in LinkedIn</span>
            </a>
            
            <a href="https://www.instagram.com/elvrt_realestatetech/?hl=en" target="_blank" rel="noreferrer" className="contact-social-link">
              <div className="social-icon-box">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-base text-slate-300">Follow us on Instagram</span>
            </a>
          </div>
        </div>
        
        {/* Right Form column */}
        <div className="form-section">
          <form 
            name="contact" 
            method="POST" 
            action="https://formspree.io/f/xgonlypb" 
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={`form-group ${errors.name ? "error" : ""}`}>
              <label className="text-left">Name <span className="text-slate-400 font-normal text-xs">(required)</span></label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Your full name" 
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="text-[#ff6b6b] text-xs mt-1 block text-left">This field is required</span>}
            </div>

            <div className={`form-group ${errors.email || errors.emailInvalid ? "error" : ""}`}>
              <label className="text-left">Email <span className="text-slate-400 font-normal text-xs">(required)</span></label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="text-[#ff6b6b] text-xs mt-1 block text-left">This field is required</span>}
              {errors.emailInvalid && <span className="text-[#ff6b6b] text-xs mt-1 block text-left">Please enter a valid email address</span>}
            </div>

            <div className="form-group">
              <label className="text-left">Company / Agency Name</label>
              <input 
                type="text" 
                name="company" 
                placeholder="Your company or agency name" 
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="text-left">Company / Agency Website</label>
              <input 
                type="url" 
                name="website" 
                placeholder="https://yourcompany.com" 
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="text-left">Message</label>
              <textarea 
                name="message" 
                rows={5} 
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                className="resize-y min-h-[110px]"
              />
            </div>

            <button type="submit" className="submit-btn flex items-center justify-center gap-2">
              Submit Message
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
