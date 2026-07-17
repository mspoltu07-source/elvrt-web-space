import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  Instagram as InstagramIcon, 
  ArrowRight, 
  Filter, 
  RefreshCw, 
  Database, 
  MessageCircle, 
  Home, 
  Zap, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Video, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Mic, 
  Info, 
  Plus,
  Shield,
  Settings,
  User,
  Check,
  Rocket,
  Mail,
  Calendar,
  Sparkles,
  ArrowDown,
  Clock,
  UserCheck,
  TrendingUp,
  Layers,
  Cpu,
  Building2,
  Search,
  ThumbsUp,
  Heart,
  Image as ImageIcon,
  ShieldCheck,
  MessageSquare,
  CheckCheck,
  BarChart3,
  PlusCircle,
  Activity,
  Send,
  Camera
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Types
interface Spec {
  label: string;
  value: string;
}

interface Module {
  id: string;
  icon: React.ReactNode;
  iconName: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  specs: Spec[];
}

interface ChatMessage {
  role: "received" | "sent";
  text: string;
  time?: string;
  delay?: number;
}

function BentoStopwatch() {
  const [statType, setStatType] = useState<"speed" | "uptime">("speed");

  useEffect(() => {
    const timer = setInterval(() => {
      setStatType((prev) => (prev === "speed" ? "uptime" : "speed"));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-4 md:pt-8 pb-2 md:pb-4 bg-transparent overflow-hidden">
      {/* High-end background ambient glow behind the massive typography */}
      <div 
        className="absolute bottom-[-50px] w-[260px] h-[180px] rounded-full pointer-events-none opacity-25 transition-all duration-1000"
        style={{
          background: statType === "speed"
            ? "radial-gradient(circle, rgba(255, 90, 31, 0.22) 0%, transparent 80%)"
            : "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 80%)",
          filter: "blur(40px)"
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        {/* Massive definitive stat with smooth crossfade and tracking-tighter layout */}
        <div className="h-[60px] md:h-[120px] flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait">
            {statType === "speed" ? (
              <motion.div
                key="speed"
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-3xl sm:text-5xl md:text-8xl lg:text-[7.5rem] tracking-tighter leading-none select-none text-[#FF5A1F]"
              >
                0.00s
              </motion.div>
            ) : (
              <motion.div
                key="uptime"
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-3xl sm:text-5xl md:text-8xl lg:text-[7.5rem] tracking-tighter leading-none select-none text-white"
              >
                100%
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function BentoCRMCarousel() {
  const crms = [
    { 
      name: "HubSpot", 
      logo: "https://i.ibb.co.com/NdzjNpgW/id-PJc-OROpd-1783799920563.png", 
      color: "#FF7A59", 
      bgColor: "rgba(255, 122, 89, 0.05)", 
      borderColor: "rgba(255, 122, 89, 0.25)" 
    },
    { 
      name: "Salesforce", 
      logo: "https://i.ibb.co.com/spC54Y4w/id-N3-Odc-TG-1783799948032.png", 
      color: "#00A1E0", 
      bgColor: "rgba(0, 161, 224, 0.05)", 
      borderColor: "rgba(0, 161, 224, 0.25)" 
    },
    { 
      name: "Follow Up Boss", 
      logo: "https://i.ibb.co.com/cXY9y5tT/FUB-Vertical-Main-RGB.png", 
      color: "#10B981", 
      bgColor: "rgba(16, 185, 129, 0.05)", 
      borderColor: "rgba(16, 185, 129, 0.25)" 
    },
    { 
      name: "kvCORE", 
      logo: "https://i.ibb.co.com/359LGQtt/id57qu8lh2-logos.png", 
      color: "#4A90E2", 
      bgColor: "rgba(74, 144, 226, 0.05)", 
      borderColor: "rgba(74, 144, 226, 0.25)" 
    },
    { 
      name: "Zoho CRM", 
      logo: "https://i.ibb.co.com/JjB1BGMt/idso-XKv58-A-logos.png", 
      color: "#E2231A", 
      bgColor: "rgba(226, 35, 26, 0.05)", 
      borderColor: "rgba(226, 35, 26, 0.25)" 
    },
    { 
      name: "Airtable", 
      logo: "https://i.ibb.co.com/b5P1d2c1/images-1.png", 
      color: "#18BFFF", 
      bgColor: "rgba(24, 191, 255, 0.05)", 
      borderColor: "rgba(24, 191, 255, 0.25)" 
    },
    { 
      name: "LionDesk", 
      logo: "https://i.ibb.co.com/4kYyMwD/images.png", 
      color: "#F59E0B", 
      bgColor: "rgba(245, 158, 11, 0.05)", 
      borderColor: "rgba(245, 158, 11, 0.25)" 
    },
    { 
      name: "Alto CRM", 
      logo: "https://i.ibb.co.com/RkYFppjp/f-Bws-Umlc-400x400.jpg", 
      color: "#F8FAFC", 
      bgColor: "rgba(248, 250, 252, 0.05)", 
      borderColor: "rgba(248, 250, 252, 0.2)" 
    },
    { 
      name: "ST CRM", 
      logo: "https://i.ibb.co.com/GDPFmPC/image-removebg-preview.png", 
      color: "#6366F1", 
      bgColor: "rgba(99, 102, 241, 0.05)", 
      borderColor: "rgba(99, 102, 241, 0.25)" 
    },
    { 
      name: "Apex CRM", 
      logo: "https://i.ibb.co.com/TxpkRtQd/logo-social.png", 
      color: "#3B82F6", 
      bgColor: "rgba(59, 130, 246, 0.05)", 
      borderColor: "rgba(59, 130, 246, 0.25)" 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % crms.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isHovered, crms.length]);

  const currentCrm = crms[activeIndex];

  return (
    <div 
      className="relative w-full overflow-hidden flex flex-col justify-center items-center p-2 select-none mt-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Brand Showcase area with AnimatePresence */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-4 overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 70, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, x: -70, scale: 0.9, rotateY: -20 }}
            transition={{ 
              type: "spring",
              stiffness: 130,
              damping: 16,
              mass: 0.8
            }}
            className="flex flex-col items-center gap-4"
          >
            <img 
              src={currentCrm.logo} 
              alt={`${currentCrm.name} logo`} 
              className="h-10 sm:h-12 md:h-20 max-w-[120px] md:max-w-[200px] object-contain"
              referrerPolicy="no-referrer"
            />
            
            <span className="text-white text-xs sm:text-sm md:text-2xl font-sans font-semibold tracking-normal text-center">
              {currentCrm.name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

interface PipelineVisualizerProps {
  onOpenModal: (idx: number) => void;
}

function PipelineVisualizer({ onOpenModal }: PipelineVisualizerProps) {
  return (
    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center bg-transparent rounded-[2rem] overflow-hidden">
      <div className="w-full h-full min-h-[380px] md:min-h-[480px] relative overflow-hidden bg-transparent rounded-[2rem]">
        <iframe 
          src="https://my.spline.design/autolayoutlistcopycopy-2LAcqkfeGgalP69JSpflMFYG-0Sm/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="absolute -top-[10px] -left-[10px] w-[calc(100%+80px)] h-[calc(100%+45px)] max-w-none max-h-none bg-transparent"
          style={{ border: "none" }}
          allow="autoplay; fullscreen"
        />
        {/* Extra mask covering the bottom-right Spline logo watermark */}
        <div className="absolute bottom-0 right-0 w-[140px] h-[38px] bg-[#09090b] pointer-events-none z-20" />
      </div>
    </div>
  );
}


export default function HomeView() {
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 9);
    }, 2800);
    return () => clearInterval(interval);
  }, []);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
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
    
    if (name === "name" && value.trim()) {
      setFormErrors((prev) => ({ ...prev, name: false }));
    }
    if (name === "email" && value.trim()) {
      setFormErrors((prev) => ({ ...prev, email: false }));
      if (isValidEmail(value)) {
        setFormErrors((prev) => ({ ...prev, emailInvalid: false }));
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    setFormErrors(newErrors);

    if (hasError) {
      e.preventDefault();
    }
  };
  
  // Hero Chat sequence state
  const [heroMessages, setHeroMessages] = useState<ChatMessage[]>([]);
  const [heroTyping, setHeroTyping] = useState(false);
  const heroChatIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroChatContainerRef = useRef<HTMLDivElement | null>(null);

  // Carousel slider state
  const [carouselIdx, setCarouselIdx] = useState(3);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Swipe/drag tracking refs for carousel
  const carouselTouchStartX = useRef<number | null>(null);
  const carouselMouseStartX = useRef<number | null>(null);

  // Auto-swipe effect for the carousel (ultra-smooth loop)
  useEffect(() => {
    if (isCarouselHovered) return;
    
    const interval = setInterval(() => {
      handleCarouselNext();
    }, 4500); // Swipe every 4.5 seconds

    return () => clearInterval(interval);
  }, [carouselIdx, isCarouselHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    carouselTouchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (carouselTouchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - carouselTouchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleCarouselPrev();
      } else {
        handleCarouselNext();
      }
    }
    carouselTouchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    carouselMouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (carouselMouseStartX.current === null) return;
    const diff = e.clientX - carouselMouseStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleCarouselPrev();
      } else {
        handleCarouselNext();
      }
    }
    carouselMouseStartX.current = null;
  };

  const handleMouseLeave = () => {
    carouselMouseStartX.current = null;
  };

  const modules: Module[] = [
    { 
      id: 'lead-qualification', 
      icon: <Filter className="w-7 h-7 text-white" />, 
      iconName: 'filter',
      title: 'Lead Qualification', 
      shortDesc: 'AI instantly identifies serious buyers from noise — so you only speak to people ready to move.', 
      specs: [
        { label: 'Qualification Speed', value: 'Real-time' }, 
        { label: 'Accuracy', value: 'Intent-based' }, 
        { label: 'Manual Effort', value: 'Zero' }
      ], 
      longDesc: 'Every inquiry is analyzed against real-time market data and buyer psychology. ELVRT scores each lead before it ever reaches your phone — filtering out window shoppers and surfacing verified, high-intent buyers automatically.' 
    },
    { 
      id: 'automated-followup', 
      icon: <RefreshCw className="w-7 h-7 text-white" />, 
      iconName: 'refresh-cw',
      title: 'Automated Follow-up', 
      shortDesc: "Cold leads don't die here. ELVRT keeps the conversation alive over days and weeks — automatically.", 
      specs: [
        { label: 'Follow-up Duration', value: 'Long-term' }, 
        { label: 'Personalization', value: 'AI-driven' }, 
        { label: 'Manual Entry', value: 'Zero' }
      ], 
      longDesc: "Most deals are lost in the silence between contacts. ELVRT automatically checks in with your leads over days and weeks — sending personalized messages that build trust and keep your name top of mind until they're ready to move." 
    },
    { 
      id: 'crm-automation', 
      icon: <Database className="w-7 h-7 text-white" />, 
      iconName: 'database',
      title: 'CRM Automation', 
      shortDesc: 'Every lead, every conversation, every status update — synced to your CRM instantly. No manual entry.', 
      specs: [
        { label: 'Manual Entry', value: 'Zero' }, 
        { label: 'Scoring', value: 'Auto-Lead' }, 
        { label: 'Sync', value: 'Real-time' }
      ], 
      longDesc: 'ELVRT bridges your lead sources directly to your existing CRM — Follow Up Boss, LionDesk, HubSpot, and more. Every conversation is logged, every lead is tagged and scored, so your pipeline stays clean and actionable at all times.' 
    },
    { 
      id: 'customer-support', 
      icon: <MessageCircle className="w-7 h-7 text-white" />, 
      iconName: 'message-circle',
      title: '24/7 Customer Support', 
      shortDesc: 'Every question answered, every inquiry handled — instantly, around the clock, without you lifting a finger.', 
      specs: [
        { label: 'Response Time', value: '<10 seconds' }, 
        { label: 'Availability', value: '24/7' }, 
        { label: 'Human Handoff', value: 'Seamless' }
      ], 
      longDesc: 'ELVRT acts as your always-on digital concierge. Whether a buyer messages at 2 PM or 2 AM — they get an instant, intelligent response. Common questions, property details, scheduling requests — all handled before you even see the notification.' 
    },
    { 
      id: 'property-showcasing', 
      icon: <Home className="w-7 h-7 text-white" />, 
      iconName: 'home',
      title: 'Property Showcasing', 
      shortDesc: 'High-res assets, property details, and availability — delivered to buyers instantly on demand.', 
      specs: [
        { label: 'Asset Delivery', value: 'Instant' }, 
        { label: 'Availability', value: 'Real-time' }, 
        { label: 'Manual Effort', value: 'Zero' }
      ], 
      longDesc: 'ELVRT delivers your property portfolio directly inside the conversation. Buyers get high-resolution photos, floor plans, pricing, and availability — without waiting for you to manually send anything. Your listings work for you 24/7.' 
    },
    { 
      id: 'instant-engagement', 
      icon: <Zap className="w-7 h-7 text-white" />, 
      iconName: 'zap',
      title: 'Instant Engagement', 
      shortDesc: 'The first response wins the deal. ELVRT engages every new inquiry within seconds — day or night.', 
      specs: [
        { label: 'Response Time', value: '<10 seconds' }, 
        { label: 'Uptime', value: '24/7' }, 
        { label: 'Coverage', value: 'All Channels' }
      ], 
      longDesc: 'Speed-to-lead is everything in real estate. Studies show the first agent to respond wins 78% of the time. ELVRT intercepts every new inquiry across all your channels and responds within seconds — so you never lose a deal to slow response again.' 
    }
  ];

  const whyElvrtItems = [
    { number: '01', title: 'Stop Losing Leads to Silence', desc: 'Every unanswered inquiry is a lost deal. ELVRT responds within seconds — 24/7 — so no lead ever goes cold again.' },
    { number: '02', title: 'Reclaim 20+ Hours Every Week', desc: 'No more manual data entry, lead tagging, or CRM logging. ELVRT handles the admin so you handle the closings.' },
    { number: '03', title: 'Only Speak to Serious Buyers', desc: 'Our AI vetting filters out window shoppers before they reach you. Your time goes to people ready to move — not people just browsing.' },
    { number: '04', title: 'Scale Without Adding Headcount', desc: 'Grow your pipeline without growing your payroll. ELVRT handles the volume of a full team — at a fraction of the cost.' },
    { number: '05', title: 'Your Entire Operation. One System.', desc: 'CRM sync, follow-ups, property showcasing, calendar booking — all running from a single automated infrastructure built for your agency.' },
    { number: '06', title: 'Built Exclusively for Real Estate', desc: 'Not a generic chatbot. ELVRT is engineered around real estate vocabulary, buyer psychology, and high-intent conversion logic.' }
  ];



  const heroSequence: ChatMessage[] = [
    { role: 'received', text: "Hi! I saw you're interested in 422 Oak Lane. Are you looking for a primary residence or investment property?" },
    { role: 'sent', text: "Looking for my family. We need to be near the Willow District schools." },
    { role: 'received', text: "Great choice! That location is highly sought after. Would you like me to book a private viewing for tomorrow at 2 PM?" },
    { role: 'sent', text: "That works for us. What's the next step?" },
    { role: 'received', text: "Perfect! I've scheduled your viewing and sent confirmation with gate code to your email. See you there!" }
  ];



  // Hero Chat Loop
  useEffect(() => {
    let active = true;
    
    const playHeroSequence = async () => {
      if (heroChatIntervalRef.current) clearTimeout(heroChatIntervalRef.current);
      if (!active) return;
      
      setHeroMessages([]);
      
      for (let i = 0; i < heroSequence.length; i++) {
        if (!active) return;
        const msg = heroSequence[i];
        
        // delay before message starts typing/appearing
        await new Promise((resolve) => {
          heroChatIntervalRef.current = setTimeout(resolve, i === 0 ? 1000 : 2000);
        });
        
        if (!active) return;
        
        if (msg.role === 'received') {
          setHeroTyping(true);
          await new Promise((resolve) => {
            heroChatIntervalRef.current = setTimeout(resolve, 1500);
          });
          if (!active) return;
          setHeroTyping(false);
        }
        
        setHeroMessages((prev) => [...prev, msg]);
      }
      
      // Delay before restarting the loop
      await new Promise((resolve) => {
        heroChatIntervalRef.current = setTimeout(resolve, 6000);
      });
      if (active) {
        playHeroSequence();
      }
    };

    playHeroSequence();

    return () => {
      active = false;
      if (heroChatIntervalRef.current) clearTimeout(heroChatIntervalRef.current);
    };
  }, []);

  // Auto-scroll to bottom of hero chat mockup (without page scrolling hijacking)
  useEffect(() => {
    if (heroChatContainerRef.current) {
      heroChatContainerRef.current.scrollTo({
        top: heroChatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [heroMessages, heroTyping]);

  // Handle Carousel Next / Prev
  const handleCarouselNext = () => {
    setCarouselIdx((prev) => (prev + 1) % whyElvrtItems.length);
  };

  const handleCarouselPrev = () => {
    setCarouselIdx((prev) => (prev - 1 + whyElvrtItems.length) % whyElvrtItems.length);
  };

  return (
    <>
      {/* Dynamic Scoped CSS Injection to match exactly */}
      <style>{`
        body {
          background-color: #000000 !important;
          color: white;
          zoom: 0.85;
        }
        
        .navbar { 
          position: fixed; top: 0; left: 0; right: 0; z-index: 50; 
          padding: 0.75rem 2rem; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); 
          background: transparent !important; backdrop-filter: none !important; 
          border-bottom: none !important; 
        }
        .navbar.scrolled { 
          padding: 0.5rem 2rem; background: rgba(0,0,0,0.88) !important; 
          backdrop-filter: blur(24px); border-bottom: 1px solid rgba(255,255,255,0.06); 
        }
        .logo-container { 
          width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; 
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); transition: all 0.4s ease; 
        }
        .logo-container:hover { transform: scale(1.08); }
        .logo-container img { width: 60px; height: 60px; object-fit: contain; filter: brightness(1.4) contrast(1.3); }

        /* ===== HERO BACKGROUND ===== */
        .hero-background {
          position: absolute; inset: 0;
          background-color: #050608;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.25), rgba(0,0,0,0.15), rgba(0,0,0,0.30)); pointer-events: none; }
        .hero-cyan-tint { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 40%, rgba(34,211,238,0.025), transparent 60%); mix-blend-mode: screen; pointer-events: none; animation: tintPulse 12s ease-in-out infinite alternate; }
        @keyframes tintPulse { 0% { opacity: 0.5; } 100% { opacity: 0.9; } }

        .btn-primary { 
          display: inline-flex; align-items: center; gap: 0.75rem; padding: 1.1rem 2.2rem; 
          background: white; color: black; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 800; 
          font-size: 0.875rem; letter-spacing: 0.1em; text-transform: uppercase; border: none; 
          border-radius: 14px; cursor: pointer; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); 
          box-shadow: 0 8px 32px rgba(255,255,255,0.25); text-decoration: none; line-height: 1; 
        }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(255,255,255,0.35); color: black; }
        .btn-primary:active { transform: translateY(1px); }

        .btn-secondary { 
          display: inline-flex; align-items: center; gap: 0.75rem; padding: 1.1rem 2.2rem; 
          background: transparent; color: white; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 700; 
          font-size: 0.875rem; letter-spacing: 0.1em; text-transform: uppercase; border: 2px solid rgba(255,255,255,0.35); 
          border-radius: 14px; cursor: pointer; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); text-decoration: none; 
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.55); transform: translateY(-3px); color: white; }

        /* ===== FEATURES SECTION ===== */
        .features-section { position: relative; background-image: url('https://i.ibb.co.com/RTvB6jmv/black-texture-background-2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; }
        .features-section::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.45); z-index: 1; pointer-events: none; }
        .feature-card { 
          position: relative; background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #080808 100%); 
          border-radius: 2.5rem; padding: 3rem 2.5rem; cursor: pointer; overflow: hidden; 
          transition: all 0.5s cubic-bezier(0.16,1,0.3,1); border: 1px solid rgba(255,255,255,0.08); 
          min-height: 380px; display: flex; flex-direction: column; 
        }
        .feature-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 55%; background: linear-gradient(to top, rgba(251,146,60,0.25) 0%, rgba(249,115,22,0.15) 30%, rgba(234,88,12,0.08) 60%, transparent 100%); pointer-events: none; transition: all 0.5s cubic-bezier(0.16,1,0.3,1); opacity: 0.7; }
        .feature-card::after { content: ''; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%); pointer-events: none; transition: opacity 0.5s ease; }
        .feature-card:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(251,146,60,0.3); box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(249,115,22,0.15), 0 0 0 1px rgba(255,255,255,0.08) inset; }
        .feature-card:hover::before { opacity: 1; height: 65%; background: linear-gradient(to top, rgba(251,146,60,0.35) 0%, rgba(249,115,22,0.22) 35%, rgba(234,88,12,0.12) 65%, transparent 100%); }
        .feature-card:hover::after { opacity: 1; }
        .card-content { position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%; flex: 1; }
        .card-icon-box { width: 72px; height: 72px; border-radius: 20px; background: linear-gradient(145deg, #1e1e1e, #141414); border: 1px solid rgba(255,255,255,0.10); display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; transition: all 0.5s cubic-bezier(0.16,1,0.3,1); position: relative; box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset, 0 8px 24px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.3); transform: perspective(600px) rotateX(2deg) rotateY(-2deg); }
        .card-icon-box::before { content: ''; position: absolute; top: 6px; left: 8px; right: 8px; height: 30%; border-radius: 12px; background: linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 70%, transparent 100%); pointer-events: none; transition: all 0.5s ease; }
        .card-icon-box::after { content: ''; position: absolute; bottom: 4px; left: 10px; right: 10px; height: 20%; border-radius: 0 0 10px 10px; background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%); pointer-events: none; }
        .feature-card:hover .card-icon-box { transform: perspective(600px) rotateX(0deg) rotateY(0deg) translateY(-2px); background: linear-gradient(145deg, #242424, #181818); border-color: rgba(251,146,60,0.35); box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset, 0 14px 36px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3), 0 0 30px rgba(249,115,22,0.2); }
        .feature-card:hover .card-icon-box::before { background: linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 70%, transparent 100%); }
        .feature-card:hover .card-icon-box svg { filter: drop-shadow(0 3px 5px rgba(0,0,0,0.6)); transform: scale(1.08); }

        /* ===== CAROUSEL SECTION ===== */
        .why-section { position: relative; background-image: url('https://i.ibb.co.com/RTvB6jmv/black-texture-background-2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; }
        .why-section::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.55); z-index: 1; pointer-events: none; }
        .why-content { position: relative; z-index: 10; }
        .carousel-wrapper { display: flex; flex-direction: column; align-items: center; max-width: 1000px; margin: 0 auto; padding: 0 1rem; }
        .carousel-container { display: flex; align-items: center; justify-content: center; position: relative; width: 100%; min-height: 560px; }
        .card-stage { position: relative; flex: 1; display: flex; align-items: center; justify-content: center; min-height: 520px; perspective: 1200px; max-width: 560px; }
        .timeline-card { position: absolute; width: 100%; max-width: 540px; padding: 3.2rem 3rem; background: linear-gradient(145deg, #121212 0%, #0a0a0a 60%, #050505 100%); border: 1.5px solid rgba(255,255,255,0.08); border-radius: 2.5rem; transition: transform 0.58s cubic-bezier(0.22,0.92,0.36,1), opacity 0.5s cubic-bezier(0.22,0.92,0.36,1), filter 0.45s ease-out; will-change: transform, opacity; transform-style: preserve-3d; min-height: 420px; display: flex; flex-direction: column; justify-content: center; backdrop-filter: blur(2px); box-shadow: 0 20px 45px rgba(0,0,0,0.6); backface-visibility: hidden; -webkit-backface-visibility: hidden; transform: translateZ(0); }
        .timeline-card.active { transform: translateX(0) scale(1) rotateY(0deg); opacity: 1; filter: brightness(1) blur(0px); z-index: 15; border-color: rgba(251,146,60,0.5); box-shadow: 0 32px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(251,146,60,0.2) inset, 0 0 32px rgba(249,115,22,0.2); }
        .timeline-card.prev { transform: translateX(-58%) scale(0.86) rotateY(5deg); opacity: 0.2; filter: brightness(0.4) blur(6px); z-index: 8; pointer-events: none; }
        .timeline-card.next { transform: translateX(58%) scale(0.86) rotateY(-5deg); opacity: 0.2; filter: brightness(0.4) blur(6px); z-index: 8; pointer-events: none; }
        .timeline-card.far-prev { transform: translateX(-95%) scale(0.72) rotateY(12deg); opacity: 0; filter: brightness(0.2) blur(12px); z-index: 3; pointer-events: none; }
        .timeline-card.far-next { transform: translateX(95%) scale(0.72) rotateY(-12deg); opacity: 0; filter: brightness(0.2) blur(12px); z-index: 3; pointer-events: none; }
        .timeline-card.exit-left { transform: translateX(-130%) scale(0.65) rotateY(18deg); opacity: 0; filter: brightness(0.08) blur(14px); transition: transform 0.6s cubic-bezier(0.2,0.95,0.3,1.05), opacity 0.5s ease, filter 0.45s ease; z-index: 2; pointer-events: none; }
        .timeline-card.exit-right { transform: translateX(130%) scale(0.65) rotateY(-18deg); opacity: 0; filter: brightness(0.08) blur(14px); transition: transform 0.6s cubic-bezier(0.2,0.95,0.3,1.05), opacity 0.5s ease, filter 0.45s ease; z-index: 2; pointer-events: none; }
        .card-content-inner { position: relative; z-index: 2; }
        .timeline-number { font-family: var(--font-display); font-size: 5.8rem; font-weight: 800; line-height: 0.9; background: linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; margin-bottom: 0.75rem; user-select: none; letter-spacing: -0.02em; }
        .timeline-title { font-family: var(--font-display); font-size: 1.85rem; font-weight: 600; line-height: 1.2; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 1rem; }
        .timeline-desc { font-size: 1rem; line-height: 1.7; color: rgba(203,213,225,0.85); font-weight: 300; max-width: 96%; }
        .pagination-dots { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 2.5rem; position: relative; z-index: 20; }
        .pagination-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); border: none; cursor: pointer; transition: all 0.3s cubic-bezier(0.2,0.9,0.4,1.1); padding: 0; outline: none; }
        .pagination-dot:hover { background: rgba(255,255,255,0.45); transform: scale(1.2); }
        .pagination-dot.active { width: 28px; border-radius: 100px; background: #fb923c; box-shadow: 0 0 16px rgba(251,146,60,0.6); }
        .side-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 68px; height: 68px; border-radius: 50%; background: rgba(15,15,15,0.75); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s cubic-bezier(0.2,0.9,0.4,1); color: rgba(255,255,255,0.65); z-index: 25; opacity: 0; pointer-events: none; }
        .side-arrow.visible { opacity: 1; pointer-events: auto; }
        .side-arrow:hover { background: #1f1f1f; border-color: rgba(251,146,60,0.6); color: #fb923c; transform: translateY(-50%) scale(1.06); box-shadow: 0 14px 28px rgba(0,0,0,0.5); }
        .side-arrow:active { transform: translateY(-50%) scale(0.96); }
        .side-arrow svg { width: 28px; height: 28px; stroke-width: 2.4; }
        .arrow-left { left: -10px; } .arrow-right { right: -10px; }
        @media (max-width: 768px) { .carousel-container { min-height: 480px; } .card-stage { min-height: 460px; max-width: 100%; } .timeline-card { padding: 2.5rem 1.75rem; border-radius: 2rem; max-width: 100%; min-height: 380px; } .timeline-number { font-size: 4.2rem; } .timeline-title { font-size: 1.45rem; } .timeline-desc { font-size: 0.92rem; } .side-arrow { display: none !important; } .pagination-dots { margin-top: 2rem; gap: 8px; } .pagination-dot.active { width: 24px; } }
        @media (max-width: 480px) { .timeline-card { padding: 1.8rem 1.2rem; min-height: 340px; } .timeline-number { font-size: 3.5rem; } }

        /* ===== HOW IT WORKS SECTION ===== */
        .how-section { position: relative; background-image: url('https://i.ibb.co.com/cSGykPyZ/black-texture-background-3.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; overflow: hidden; }
        .how-section::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.65); z-index: 1; pointer-events: none; }
        
        .steps-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 3rem;
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .step-wrapper {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .step-wrapper-1 {
          animation: card-float-1 6s linear infinite;
        }

        .step-wrapper-2 {
          animation: card-float-2 6s linear infinite;
        }

        .step-wrapper-3 {
          animation: card-float-3 6s linear infinite;
        }

        .step-item {
          background: radial-gradient(800px circle at 50% 0px, rgba(255, 255, 255, 0.06), transparent 45%), transparent;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.06);
          border-radius: 32px;
          padding: 4rem 2.5rem;
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: auto;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .step-item > * {
          position: relative;
          z-index: 2;
        }

        .step-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1.5px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.35), transparent);
          pointer-events: none;
          z-index: 3;
          transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-item::after {
          content: '';
          position: absolute;
          inset: -1.5px;
          border-radius: 32px;
          background: radial-gradient(800px circle at 50% 0px, rgba(255, 255, 255, 0.15), transparent 55%), transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 32px 70px rgba(0, 0, 0, 0.75), 0 0 45px rgba(255, 255, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.35);
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          pointer-events: none;
          will-change: opacity;
        }

        .step-item-1::after {
          animation: card-glow-1 6s linear infinite;
        }

        .step-item-2::after {
          animation: card-glow-2 6s linear infinite;
        }

        .step-item-3::after {
          animation: card-glow-3 6s linear infinite;
        }

        .step-item:hover {
          transform: translate3d(0, -12px, 0);
          border-color: rgba(255, 255, 255, 0.4);
          background: radial-gradient(800px circle at 50% 0px, rgba(255, 255, 255, 0.2), transparent 55%), transparent;
          box-shadow: 0 32px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .step-item:hover::after {
          opacity: 1 !important;
          border-color: rgba(255, 255, 255, 0.45) !important;
          background: radial-gradient(800px circle at 50% 0px, rgba(255, 255, 255, 0.2), transparent 55%), transparent !important;
          box-shadow: 0 32px 70px rgba(0, 0, 0, 0.85), 0 0 60px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
        }

        .step-item:hover::before {
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
        }

        .glow-line-track {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 4rem;
          right: 4rem;
          height: 3px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15) 10%, rgba(255, 255, 255, 0.15) 90%, transparent);
          z-index: 1;
          pointer-events: none;
        }

        .glow-line-runner {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 30%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 90%, transparent);
          animation: run-glow 6s linear infinite;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
          will-change: transform;
          transform: translate3d(-120%, 0, 0);
        }

        @keyframes run-glow {
          0% {
            transform: translate3d(-120%, 0, 0);
          }
          100% {
            transform: translate3d(350%, 0, 0);
          }
        }

        @keyframes card-float-1 {
          0%, 10%, 42%, 100% {
            transform: translate3d(0, 0, 0);
          }
          26% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes card-glow-1 {
          0%, 10%, 42%, 100% {
            opacity: 0;
          }
          26% {
            opacity: 1;
          }
        }

        @keyframes card-float-2 {
          0%, 34%, 66%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes card-glow-2 {
          0%, 34%, 66%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes card-float-3 {
          0%, 58%, 90%, 100% {
            transform: translate3d(0, 0, 0);
          }
          74% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes card-glow-3 {
          0%, 58%, 90%, 100% {
            opacity: 0;
          }
          74% {
            opacity: 1;
          }
        }

        .step-number {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 800;
          color: #fb923c;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 2rem;
          padding: 0.5rem 1.1rem;
          background: rgba(251, 146, 60, 0.08);
          border: 1px solid rgba(251, 146, 60, 0.22);
          border-radius: 100px;
          line-height: 1;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.95rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .step-desc {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(203, 213, 225, 0.8);
          font-weight: 300;
        }

        /* Animated Graphics CSS keyframes & utilities */
        .card-visual {
          position: relative;
          width: 100%;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0% { transform: scale(0.95); opacity: 0.65; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes build-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); box-shadow: 0 0 25px rgba(251,146,60,0.2); }
          50% { transform: scale(1.05) rotate(2deg); box-shadow: 0 0 35px rgba(251,146,60,0.45); }
        }
        .animate-build-pulse {
          animation: build-pulse 3.5s ease-in-out infinite;
        }

        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5px, -7px); }
        }
        .animate-float-particle-1 {
          animation: float-particle-1 5s ease-in-out infinite;
        }

        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, -5px); }
        }
        .animate-float-particle-2 {
          animation: float-particle-2 6s ease-in-out infinite;
        }

        @keyframes loading-line {
          0% { left: -10%; width: 25%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 90%; width: 25%; opacity: 0; }
        }
        .animate-loading-line {
          animation: loading-line 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes loading-line-reverse {
          0% { right: -10%; left: auto; width: 25%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { right: 90%; left: auto; width: 25%; opacity: 0; }
        }
        .animate-loading-line-reverse {
          animation: loading-line-reverse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 1.25s;
        }

        @keyframes bar-grow-1 {
          0%, 100% { height: 28%; }
          50% { height: 42%; }
        }
        .animate-bar-grow-1 {
          animation: bar-grow-1 4.2s ease-in-out infinite;
        }

        @keyframes bar-grow-2 {
          0%, 100% { height: 48%; }
          50% { height: 64%; }
        }
        .animate-bar-grow-2 {
          animation: bar-grow-2 3.6s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @keyframes bar-grow-3 {
          0%, 100% { height: 64%; }
          50% { height: 82%; }
        }
        .animate-bar-grow-3 {
          animation: bar-grow-3 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes bar-grow-4 {
          0%, 100% { height: 88%; }
          50% { height: 98%; }
        }
        .animate-bar-grow-4 {
          animation: bar-grow-4 3.8s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @media (min-width: 1024px) {
          /* No horizontal connector line needed to keep layout clean and naked */
        }

        @media (max-width: 1150px) {
          .steps-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 0 3rem;
            max-width: 620px;
          }
          .step-item {
            padding: 4rem 2.8rem;
            border-radius: 2.2rem;
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .steps-row {
            padding: 0 1.25rem;
          }
          .step-item {
            padding: 3rem 1.8rem;
          }
          .step-title {
            font-size: 1.65rem;
          }
          .step-desc {
            font-size: 0.98rem;
          }
        }

        /* ===== SHOWCASE CHAT SYSTEM ===== */
        .showcase-section { position: relative; padding: 6rem 1rem; background: url('https://i.ibb.co.com/cSGykPyZ/black-texture-background-3.jpg') center/cover fixed; overflow: hidden; }
        .showcase-section::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 1; pointer-events: none; }
        .showcase-content { 
          position: relative; 
          z-index: 10; 
          max-width: 1200px; 
          margin: 0 auto; 
          transform: scale(1.05); 
          transform-origin: center top; 
          background: rgba(10, 10, 12, 0.45); 
          backdrop-filter: blur(16px); 
          -webkit-backdrop-filter: blur(16px); 
          border: 1px solid rgba(255, 255, 255, 0.05); 
          border-radius: 24px; 
          padding: 4rem 3.5rem; 
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8), 0 0 80px -10px rgba(255, 255, 255, 0.015);
        }
        .showcase-content::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02), transparent 70%);
          pointer-events: none;
          z-index: -1;
        }
        
        .tab-btn { 
          padding: .6rem 1.3rem; 
          border-radius: 9999px; 
          font-size: 11px; 
          font-weight: 700; 
          letter-spacing: .08em; 
          text-transform: uppercase; 
          transition: all .3s cubic-bezier(0.16, 1, 0.3, 1); 
          display: flex; 
          align-items: center; 
          gap: .6rem; 
          cursor: pointer; 
          border: 1px solid rgba(255, 255, 255, 0.08); 
          background: transparent; 
          color: rgba(255, 255, 255, 0.5); 
        }
        .tab-btn:hover { 
          color: rgba(255, 255, 255, 0.9); 
          background: rgba(255, 255, 255, 0.03); 
          border-color: rgba(255, 255, 255, 0.15); 
          transform: translateY(-1px); 
        }
        .tab-btn.active-whatsapp { 
          background: rgba(37, 211, 102, 0.15); 
          border-color: #25D366; 
          color: #25D366; 
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.2);
          transform: translateY(-1px);
        }
        .tab-btn.active-facebook { 
          background: rgba(24, 119, 242, 0.15); 
          border-color: #1877F2; 
          color: #1877F2; 
          box-shadow: 0 0 15px rgba(24, 119, 242, 0.2);
          transform: translateY(-1px);
        }
        .tab-btn.active-instagram { 
          background: linear-gradient(45deg, rgba(240, 148, 51, 0.15), rgba(230, 92, 118, 0.15)); 
          border-color: #E1306C; 
          color: #fff; 
          box-shadow: 0 0 15px rgba(230, 92, 118, 0.2);
          transform: translateY(-1px);
        }
        .tab-btn img { width: 18px; height: 18px; object-fit: contain; transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .tab-btn:hover img { transform: scale(1.1); }
        .tab-panel.hidden { display: none; }
        
        .feature-row { 
          display: flex; 
          gap: 1.5rem; 
          padding: 1.25rem; 
          border-radius: 16px; 
          background: rgba(255, 255, 255, 0.01); 
          border: 1px solid rgba(255, 255, 255, 0.02); 
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .feature-row:hover { 
          background: rgba(255, 255, 255, 0.03); 
          border-color: rgba(255, 255, 255, 0.08); 
          transform: translateY(-2px); 
        }
        .feature-icon { 
          width: 3.25rem; 
          height: 3.25rem; 
          border-radius: 50%; 
          background: rgba(255, 255, 255, 0.02); 
          border: 1px solid rgba(255, 255, 255, 0.08); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          flex-shrink: 0; 
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        
        /* Subtle glow matching active platform theme color */
        .platform-whatsapp .feature-icon {
          border-color: rgba(37, 211, 102, 0.3);
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.05);
        }
        .platform-whatsapp .feature-row:hover .feature-icon {
          border-color: #25D366;
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.2);
          background: rgba(37, 211, 102, 0.05);
        }
        .platform-facebook .feature-icon {
          border-color: rgba(24, 119, 242, 0.3);
          box-shadow: 0 0 10px rgba(24, 119, 242, 0.05);
        }
        .platform-facebook .feature-row:hover .feature-icon {
          border-color: #1877F2;
          box-shadow: 0 0 15px rgba(24, 119, 242, 0.2);
          background: rgba(24, 119, 242, 0.05);
        }
        .platform-instagram .feature-icon {
          border-color: rgba(225, 48, 108, 0.3);
          box-shadow: 0 0 10px rgba(225, 48, 108, 0.05);
        }
        .platform-instagram .feature-row:hover .feature-icon {
          border-color: #E1306C;
          box-shadow: 0 0 15px rgba(225, 48, 108, 0.2);
          background: rgba(225, 48, 108, 0.05);
        }
        
        .feature-title { font-size: 1.15rem; font-weight: 600; color: #fff; margin-bottom: .35rem; letter-spacing: -.01em; font-family: 'Space Grotesk', sans-serif; transition: transform .3s ease; }
        .feature-row:hover .feature-title { transform: translateX(4px); }
        .feature-desc { font-size: 0.925rem; line-height: 1.6; color: rgba(148, 163, 184, 0.85); font-weight: 300; max-width: 28rem; }
        .chat-clone-wrapper { display: flex; justify-content: center; width: 100%; }
        
        .wa-clone, .fb-clone, .ig-clone { 
          display: flex; 
          flex-direction: column; 
          width: 100%; 
          max-width: 480px; 
          height: 600px; 
          background: rgba(20, 20, 25, 0.5); 
          backdrop-filter: blur(12px); 
          -webkit-backdrop-filter: blur(12px); 
          border: 1px solid rgba(255, 255, 255, 0.06); 
          border-radius: 20px; 
          position: relative; 
          margin: 0 auto; 
          overflow: hidden; 
          font-family: 'Inter', system-ui, sans-serif; 
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        
        .chat-header { background: rgba(15, 15, 20, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; z-index: 10; border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
        .header-left { display: flex; align-items: center; gap: 14px; }
        .avatar-wrap { position: relative; width: 44px; height: 44px; flex-shrink: 0; }
        .avatar { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255, 255, 255, 0.1); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease; }
        .avatar:hover { transform: scale(1.08); border-color: rgba(255, 255, 255, 0.3); }
        .avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
        
        @keyframes pulsing-dot {
          0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 230, 118, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
        }
        .online-dot { position: absolute; bottom: 0; right: 0; width: 11px; height: 11px; background: #00e676; border-radius: 50%; border: 2px solid rgba(20, 20, 25, 1); animation: pulsing-dot 2s infinite; }
        .contact-info h3 { color: #ffffff; font-size: 15px; font-weight: 600; margin-bottom: 2px; letter-spacing: -0.01em; }
        .contact-info p { color: #8696a1; font-size: 12px; font-weight: 400; }
        .header-right { display: flex; gap: 16px; align-items: center; }
        
        .icon-btn, .footer-icon-btn { background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 0; opacity: 0.8; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .icon-btn:hover { opacity: 1; transform: scale(1.08); }
        .footer-icon-btn:hover { opacity: 1; transform: scale(1.08); }
        
        .chat-messages { flex: 1; overflow-y: auto; padding: 24px 20px; display: flex; flex-direction: column; gap: 12px; background: transparent; scroll-behavior: smooth; }
        .chat-messages::-webkit-scrollbar { display: none; }
        .chat-messages { -ms-overflow-style: none; scrollbar-width: none; }
        
        .message-row { display: flex; width: 100%; }
        .message-row.sent { justify-content: flex-end; } .message-row.received { justify-content: flex-start; }
        
        .bubble { max-width: 80%; padding: 12px 16px; position: relative; word-wrap: break-word; font-size: 14px; line-height: 1.5; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.2s ease; }
        .bubble:hover { transform: translateY(-1px); }
        
        .bubble.wa-rec, .bubble.fb-rec, .bubble.ig-rec {
          background: rgba(255, 255, 255, 0.07); 
          color: #F3F4F6; 
          border-radius: 12px 12px 12px 4px;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .bubble.wa-sent { 
          background: linear-gradient(135deg, #128C7E 0%, #075E54 100%); 
          color: #ffffff; 
          border-radius: 12px 12px 4px 12px; 
          box-shadow: 0 4px 12px rgba(18, 140, 126, 0.2); 
          border: none;
        }
        .bubble.fb-sent { 
          background: linear-gradient(135deg, #0084ff 0%, #00c6ff 100%); 
          color: #ffffff; 
          border-radius: 12px 12px 4px 12px; 
          box-shadow: 0 4px 12px rgba(0, 132, 255, 0.2); 
          border: none;
        }
        .bubble.ig-sent { 
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
          color: #ffffff; 
          border-radius: 12px 12px 4px 12px; 
          box-shadow: 0 4px 14px rgba(220, 39, 67, 0.25); 
          border: none;
        }
        
        .message-meta { display: flex; align-items: center; justify-content: flex-end; gap: 3px; margin-top: 4px; font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 300; }
        .bubble-text { line-height: 1.5; }
        
        .typing-bubble { background: rgba(255, 255, 255, 0.07); padding: 12px 18px; border-radius: 12px 12px 12px 4px; display: inline-flex; align-items: center; gap: 6px; border: 1px solid rgba(255, 255, 255, 0.03); }
        .dot { width: 6px; height: 6px; background: #8696a1; border-radius: 50%; display: inline-block; animation: wave 1.4s infinite ease-in-out; }
        .dot:nth-child(1) { animation-delay: -.32s; } .dot:nth-child(2) { animation-delay: -.16s; } .dot:nth-child(3) { animation-delay: 0s; }
        @keyframes wave { 0%, 80%, 100% { transform: scale(.8); opacity: .5; } 40% { transform: scale(1.2); opacity: 1; background: #e9edef; } }
        
        .chat-footer { 
          background: rgba(15, 15, 20, 0.7); 
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 16px 20px; 
          display: flex; 
          align-items: center; 
          gap: 12px; 
          flex-shrink: 0; 
          border-top: 1px solid rgba(255, 255, 255, 0.06); 
        }
        
        .input-wrap { 
          flex: 1; 
          display: flex; 
          align-items: center; 
          background: rgba(255, 255, 255, 0.04); 
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px; 
          padding: 8px 16px;
          transition: all 0.25s ease; 
        }
        .input-wrap:focus-within {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.03);
        }
        .input-wrap input { background: transparent; border: none; outline: none; color: #ffffff; font-size: 14px; width: 100%; font-family: inherit; padding: 2px 0; }
        .input-wrap input::placeholder { color: rgba(255, 255, 255, 0.4); }
        
        @media (max-width: 1024px) { 
          .showcase-content {
            transform: none !important;
            padding: 2.5rem 1.5rem;
            margin: 0 1rem;
          }
          .showcase-grid { flex-direction: column; gap: 3rem; } 
        }
        @media (max-width: 768px) { .wa-clone,.fb-clone,.ig-clone { max-width: 100%; height: 560px; } }

        /* ===== HERO CHAT BUBBLE UI ===== */
        .hero-chat-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          max-width: 520px;
          height: 480px;
          overflow-y: auto;
          padding: 10px;
          scrollbar-width: none;
        }
        .hero-chat-container::-webkit-scrollbar {
          display: none;
        }
        
        .hero-chat-row {
          display: flex;
          align-items: flex-end;
          width: 100%;
        }
        
        .hero-chat-row.received {
          justify-content: flex-start;
        }
        
        .hero-chat-row.sent {
          justify-content: flex-end;
        }
        
        .hero-msg-bubble {
          max-width: 80%;
          padding: 14px 20px;
          font-size: 14.5px;
          line-height: 1.55;
          word-wrap: break-word;
          position: relative;
          box-shadow: 0 12px 30px -4px rgba(0, 0, 0, 0.3);
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        
        .hero-msg-received {
          background: #242730; /* Solid bold non-transparent dark charcoal */
          color: #ffffff;
          border-radius: 20px 20px 20px 6px;
          border: 1px solid #323744;
        }
        
        .hero-msg-sent {
          background: #ffffff;
          color: #0f172a; /* High contrast dark text on white background */
          border-radius: 20px 20px 6px 20px;
          border: none;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        
        .hero-typing-bubble {
          background: #242730; /* Solid bold non-transparent dark charcoal to match */
          border: 1px solid #323744;
          padding: 14px 22px;
          border-radius: 20px 20px 20px 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          box-shadow: 0 12px 30px -4px rgba(0, 0, 0, 0.3);
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          background-color: #ffffff;
          border-radius: 50%;
          animation: bounce-dot-hero 1.4s infinite ease-in-out both;
        }

        .typing-dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .typing-dot:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes bounce-dot-hero {
          0%, 80%, 100% { 
            transform: scale(0.4);
            opacity: 0.4;
          } 40% { 
            transform: scale(1.1);
            opacity: 1;
          }
        }

        /* ===== PIPELINE FLOW STYLING ===== */
        @keyframes pipeline-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(600%); }
        }
        .animate-pipeline-flow {
          animation: pipeline-flow 3.5s linear infinite;
        }

        .bento-big-card {
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 2rem;
          padding: 4.5rem 4rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.7);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (max-width: 768px) {
          .bento-big-card {
            padding: 1.75rem 1.25rem;
            border-radius: 1.5rem;
          }
        }
        
        .bento-big-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 90% 10%, rgba(251,146,60,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .bento-small-card {
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 2rem;
          padding: 3.5rem 3rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.7);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .bento-small-card {
            padding: 1.5rem 1rem;
            border-radius: 1.5rem;
          }
        }

        .bento-small-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 45px 90px rgba(0,0,0,0.9), 0 0 50px rgba(255,255,255,0.02);
        }

        /* Instagram-style Snapping Carousel Styles removed: using framer-motion React state slider */

        @keyframes chain-flow {
          to {
            stroke-dashoffset: -32;
          }
        }
        .animated-chain-path {
          stroke-dasharray: 8, 8;
          animation: chain-flow 3s linear infinite;
        }

        .step-progress-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
        }

        .pulsing-dot-green {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        /* ===== CTA SECTION ===== */
        .cta-section { 
          position: relative; padding: 8rem 1.5rem; 
          background-image: url('https://i.ibb.co/4wg8DgCB/Waveform-1-1366x628.jpg'); 
          background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; 
          isolation: isolate; overflow: hidden; 
        }
        .cta-section::before { content: ''; position: absolute; inset: 0; background: rgba(9, 10, 15, 0.85); z-index: 1; pointer-events: none; }
        
        .cta-contact-form {
          background: rgba(18, 19, 22, 0.45);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3rem;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .cta-form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .cta-form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.85rem;
          color: #ffffff;
          letter-spacing: 0.3px;
        }

        .cta-form-group input,
        .cta-form-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          background: rgba(30, 30, 30, 0.3);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 0.9rem;
          color: #ffffff;
          font-weight: 400;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          transition: all 0.3s ease;
          outline: none;
        }

        .cta-form-group input:hover,
        .cta-form-group textarea:hover {
          border-color: rgba(197, 168, 128, 0.35);
          background: rgba(30, 30, 30, 0.5);
        }

        .cta-form-group input:focus,
        .cta-form-group textarea:focus {
          border-color: #C5A880;
          background: rgba(40, 40, 40, 0.6);
          box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.15);
        }

        .cta-submit-btn {
          width: 100%;
          padding: 1rem;
          background: #ff6b2b;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          letter-spacing: 0.5px;
          margin-top: 0.5rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          box-shadow: 0 8px 24px rgba(255, 107, 43, 0.25);
        }
        
        .cta-submit-btn:hover {
          background: #e55a1f;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 107, 43, 0.4);
        }
        
        .cta-submit-btn:active {
          transform: translateY(0);
        }

        .cta-social-link {
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
        .cta-social-link:hover {
          transform: translateX(6px);
          color: #C5A880;
        }
        .cta-social-icon-box {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cta-social-link:hover .cta-social-icon-box {
          border-color: rgba(197, 168, 128, 0.35);
          background: rgba(197, 168, 128, 0.08);
        }

        @media (max-width: 768px) {
          .navbar { padding: 0.5rem 1rem; }
          .logo-container { width: 60px; height: 60px; }
          .logo-container img { width: 45px; height: 45px; }
          .btn-primary { padding: 0.8rem 1.5rem; font-size: 0.75rem; border-radius: 10px; }
        }
      `}</style>

      {/* Hero Overlay and background */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-cyan-tint"></div>

      {/* Floating Pill Header component (premiercs.com style) */}
      <Header />

      {/* ============================== */}
      {/* HERO SECTION                   */}
      {/* ============================== */}
      <section id="solutions" className="relative pt-32 pb-32 md:pt-48 md:pb-48 min-h-screen flex items-center overflow-hidden">
        {/* Spline Particles Background Iframe */}
        <div 
          className="absolute left-[56%] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] h-[160vw] md:w-[1690px] md:h-[1690px] max-w-[1950px] max-h-[1950px] z-0 overflow-hidden pointer-events-none select-none flex items-center justify-center"
          style={{ 
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)'
          }}
        >
          <iframe 
            src="https://my.spline.design/particlesforwebsite-hZ2i3HrGQQSdI7g0hW55mxl4/" 
            frameBorder="0"
            className="w-full h-full border-none pointer-events-none select-none opacity-100"
            title="Spline Particles Background"
          />
        </div>

        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-start relative z-10">
          
          {/* Hero text */}
          <div className="relative z-20">
            <h1 className="hero-title mb-6 md:mb-10 text-left">
              <span className="text-[clamp(3rem,6vw,5.5rem)] font-display font-semibold text-white block mb-1 leading-[1.05] tracking-[-0.03em] [text-shadow:0_2px_30px_rgba(0,0,0,0.7),0_0_60px_rgba(0,0,0,0.4)]">
                Automate Your Agency
              </span>
              <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-semibold text-white block leading-[1.1] pb-2 [text-shadow:0_2px_30px_rgba(0,0,0,0.7),0_0_60px_rgba(0,0,0,0.4)]">
                WITH AI SALES AGENT
              </span>
            </h1>
            <p className="hero-description max-w-2xl text-left text-lg text-white/90 leading-relaxed mb-12 [text-shadow:0_1px_20px_rgba(0,0,0,0.6)]">
              Your leads, qualified. Your calendar, filled. Your deals, closed — on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 justify-start">
              <a 
                href="https://calendly.com/mspoltu07/strategy-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Book a Strategy Call 
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5]" />
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById("infinite-performance");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                View Services
              </button>
            </div>
            

          </div>

          {/* Interactive Chat Bubble Sequence */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="hero-chat-container" ref={heroChatContainerRef}>
              <AnimatePresence initial={false}>
                {heroMessages.map((msg, idx) => (
                  <div key={idx} className={`hero-chat-row ${msg.role === 'received' ? 'received' : 'sent'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 22,
                        mass: 0.8
                      }}
                      className={`hero-msg-bubble ${
                        msg.role === 'received' ? 'hero-msg-received' : 'hero-msg-sent'
                      }`}
                    >
                      <div className="text-left">{msg.text}</div>
                      <div className={`text-[9px] mt-1.5 text-right ${
                        msg.role === 'received' ? 'text-white/40' : 'text-slate-500'
                      }`}>
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>

              {heroTyping && (
                <div className="hero-chat-row received">
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 22,
                      mass: 0.8
                    }}
                    className="hero-typing-bubble"
                  >
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ============================== */}
      {/* FEATURES SECTION               */}
      {/* ============================== */}
      <section id="infinite-performance" className="features-section relative py-32 md:py-40 px-6 overflow-hidden">
        <div className="features-content max-w-7xl mx-auto relative z-10">
          
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-orange-400/50"></div>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">Infrastructure</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-6 leading-[1.05] tracking-[-0.03em]">
              Infinite Performance
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light tracking-tight opacity-85 mx-auto">
              ELVRT is not just a chatbot. It's an entire backend workforce, fine-tuned on multi-million dollar transaction data and high-intent buyer psychology.
            </p>
          </div>

          {/* Bento Grid layout replacing the simple 6-card feature list */}
          <div className="flex flex-col gap-8 text-left mt-12 w-full">
            
            {/* 1. TOP WIDE ROW (Single Bento Big Card containing both Left and Right columns) */}
            <div className="bento-big-card w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
                
                {/* Left Column: Features */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full text-left">
                  <div>
                    <span className="text-[#C5A880] text-sm font-mono font-semibold uppercase tracking-[0.25em] mb-4 block">
                      Feature Suite
                    </span>
                    <h3 className="text-white text-3xl md:text-5xl font-display font-semibold mb-8 leading-tight tracking-tight">
                      Automated Lead Conversion
                    </h3>
                  </div>

                  <div className="space-y-8 mb-4">
                    {/* Feature 1: Lead Qualification */}
                    <div 
                      className="flex flex-col gap-1 cursor-pointer group text-left"
                      onClick={() => setActiveModalIdx(0)}
                    >
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-[#C5A880] group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-white text-xl md:text-2xl font-semibold font-display tracking-tight group-hover:text-[#C5A880] transition-colors">
                          Lead Qualification
                        </span>
                      </div>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-2 pl-9 font-light">
                        AI instantly identifies serious buyers from noise — so you only speak to people ready to move.
                      </p>
                    </div>

                    {/* Feature 2: Automated Follow-up */}
                    <div 
                      className="flex flex-col gap-1 cursor-pointer group text-left"
                      onClick={() => setActiveModalIdx(1)}
                    >
                      <div className="flex items-center gap-3">
                        <RefreshCw className="w-6 h-6 text-[#C5A880] group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-white text-xl md:text-2xl font-semibold font-display tracking-tight group-hover:text-[#C5A880] transition-colors">
                          Automated Follow-up
                        </span>
                      </div>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-2 pl-9 font-light">
                        Cold leads don't die here. ELVRT keeps the conversation alive over days and weeks — automatically.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Inside the same Bento Big Card container, fully transparent */}
                <div className="lg:col-span-5 flex justify-center items-center relative overflow-visible w-full bg-transparent">
                  <div className="relative w-full aspect-square flex flex-col items-center justify-center bg-transparent">
                    <PipelineVisualizer onOpenModal={setActiveModalIdx} />
                  </div>
                </div>

              </div>
            </div>

            {/* Row 2: Bottom Two Asymmetrical Cards (50%/50% Split) */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-8 w-full">
              
              {/* 2. BOTTOM LEFT CARD (Seamless Ecosystem Integration) */}
              <div 
                className="bento-small-card flex flex-col justify-between min-h-[280px] sm:min-h-[380px] md:min-h-[500px]"
                onClick={() => setActiveModalIdx(2)}
              >
                <div className="mb-2 md:mb-8">
                  <span className="text-[#C5A880] text-[9px] sm:text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-1 md:mb-4 block">
                    Integrations
                  </span>
                  <h4 className="text-white text-xs sm:text-xl md:text-3xl font-display font-semibold mb-3 md:mb-6 tracking-tight">
                    Seamless Ecosystem Integration
                  </h4>
                  
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    {/* Feature: CRM Automation */}
                    <div 
                      className="flex flex-col gap-0.5 cursor-pointer group text-left" 
                      onClick={(e) => { e.stopPropagation(); setActiveModalIdx(2); }}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        <Settings className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-white text-[10px] sm:text-base md:text-2xl font-semibold font-display tracking-tight group-hover:text-[#C5A880] transition-colors">CRM Automation</span>
                      </div>
                      <p className="text-slate-400 text-[8.5px] sm:text-xs md:text-lg leading-normal md:leading-relaxed mt-0.5 pl-5 sm:pl-8 md:pl-9 font-light">
                        Every lead, every conversation, every status update — synced to your CRM instantly. No manual entry.
                      </p>
                    </div>

                    {/* Feature: Property Showcasing */}
                    <div 
                      className="flex flex-col gap-0.5 cursor-pointer group text-left" 
                      onClick={(e) => { e.stopPropagation(); setActiveModalIdx(4); }}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        <Home className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-white text-[10px] sm:text-base md:text-2xl font-semibold font-display tracking-tight group-hover:text-[#C5A880] transition-colors">Property Showcasing</span>
                      </div>
                      <p className="text-slate-400 text-[8.5px] sm:text-xs md:text-lg leading-normal md:leading-relaxed mt-0.5 pl-5 sm:pl-8 md:pl-9 font-light">
                        High-res assets, property details, and availability — delivered to buyers instantly on demand.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CRM Curved Flow Visual Container */}
                <BentoCRMCarousel />
              </div>

              {/* 3. BOTTOM RIGHT CARD (24/7 Instant Engagement) */}
              <div 
                className="bento-small-card flex flex-col justify-between min-h-[280px] sm:min-h-[380px] md:min-h-[500px]"
                onClick={() => setActiveModalIdx(3)}
              >
                {/* Volumetric ambient backlighting glow */}
                <div 
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 md:w-72 md:h-72 rounded-full pointer-events-none opacity-20"
                  style={{
                    background: "radial-gradient(circle, rgba(197, 168, 128, 0.22) 0%, rgba(22, 23, 25, 0.05) 70%, transparent 100%)",
                    filter: "blur(60px)",
                    zIndex: 0
                  }}
                />
                <div className="mb-2 md:mb-8">
                  <span className="text-[#C5A880] text-[9px] sm:text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-1 md:mb-4 block">
                    Uptime
                  </span>
                  <h4 className="text-white text-xs sm:text-xl md:text-3xl font-display font-semibold mb-3 md:mb-6 tracking-tight">
                    24/7 Instant Engagement
                  </h4>
                  
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    {/* Feature: Instant Engagement */}
                    <div 
                      className="flex flex-col gap-0.5 cursor-pointer group text-left" 
                      onClick={(e) => { e.stopPropagation(); setActiveModalIdx(5); }}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        <Zap className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-white text-[10px] sm:text-base md:text-2xl font-semibold font-display tracking-tight group-hover:text-[#C5A880] transition-colors">Instant Engagement</span>
                      </div>
                      <p className="text-slate-400 text-[8.5px] sm:text-xs md:text-lg leading-normal md:leading-relaxed mt-0.5 pl-5 sm:pl-8 md:pl-9 font-light">
                        The first response wins the deal. ELVRT engages every new inquiry within seconds — day or night.
                      </p>
                    </div>

                    {/* Feature: 24/7 Customer Support */}
                    <div 
                      className="flex flex-col gap-0.5 cursor-pointer group text-left" 
                      onClick={(e) => { e.stopPropagation(); setActiveModalIdx(3); }}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-white text-[10px] sm:text-base md:text-2xl font-semibold font-display tracking-tight group-hover:text-[#C5A880] transition-colors">24/7 Support</span>
                      </div>
                      <p className="text-slate-400 text-[8.5px] sm:text-xs md:text-lg leading-normal md:leading-relaxed mt-0.5 pl-5 sm:pl-8 md:pl-9 font-light">
                        Every question answered, every inquiry handled — instantly, around the clock, without you lifting a finger.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Stopwatch showing ultra-fast lead response time */}
                <BentoStopwatch />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Feature Details Modal (Portal-like via state rendering) */}
      <AnimatePresence>
        {activeModalIdx !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalIdx(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-[#0b0c0f]/95 border border-white/10 hover:border-[#C5A880]/30 rounded-[2rem] p-8 md:p-12 w-full max-w-3xl max-h-[85vh] overflow-y-auto relative z-10 flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(197,168,128,0.06),inset_0_1px_0_rgba(255,255,255,0.05)] text-left backdrop-blur-2xl"
            >
              {/* Decorative premium ambient glow inside modal */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A880]/5 rounded-full filter blur-[60px] pointer-events-none -translate-x-12 -translate-y-12" />

              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white/60 hover:text-white transition-all duration-300 hover:rotate-90 shadow-lg cursor-pointer z-20"
                onClick={() => setActiveModalIdx(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="modal-content text-left relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                    {modules[activeModalIdx].icon}
                  </div>
                  <div>
                    <span className="text-[#C5A880] text-[10px] font-mono font-bold tracking-[0.3em] uppercase block mb-1">
                      Infrastructure Module
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                      {modules[activeModalIdx].title}
                    </h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-base text-slate-300 leading-relaxed font-light mb-8 pr-4">
                        {modules[activeModalIdx].longDesc}
                      </p>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => alert(`Module "${modules[activeModalIdx].title}" initialized successfully in sandbox mode.`)}
                      className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold font-sans tracking-wider uppercase text-[11px] flex items-center justify-center gap-3 hover:bg-[#C5A880] transition-colors duration-300 shadow-[0_12px_24px_-4px_rgba(255,255,255,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(197,168,128,0.25)] cursor-pointer"
                    >
                      Initialize This Module
                      <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
                    </motion.button>
                  </div>
                  
                  <div className="md:col-span-5 bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6 space-y-1 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <h5 className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500 pb-3 border-b border-white/[0.06] mb-1">
                      Technical Specifications
                    </h5>
                    {modules[activeModalIdx].specs.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3.5 border-b border-white/[0.04] last:border-none group/spec">
                        <span className="text-white/40 font-mono uppercase tracking-wider text-[10px] group-hover/spec:text-slate-300 transition-colors">
                          {s.label}
                        </span>
                        <span className="text-white font-display text-sm tracking-tight font-medium group-hover/spec:text-[#C5A880] transition-colors">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================== */}
      {/* WHY ELVRT SECTION              */}
      {/* ============================== */}
      <section id="why-elvrt" className="why-section relative py-28 md:py-36 overflow-hidden">
        <div className="why-content relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-orange-400/50"></div>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">The Advantage</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-6 leading-[1.05] tracking-[-0.03em]">
              Why ELVRT Tech?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light tracking-tight opacity-85 mx-auto">
              Engineered for agencies that demand peak performance, instant lead capture, and uncompromising efficiency.
            </p>
          </div>

          {/* Symmetrical Carousel Slider */}
          <div 
            className="carousel-wrapper"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => {
              setIsCarouselHovered(false);
              handleMouseLeave();
            }}
          >
            <div 
              className="carousel-container relative w-full flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              
              {/* Carousel card stage */}
              <div className="card-stage">
                {whyElvrtItems.map((item, idx) => {
                  let cardClass = "far-next";
                  
                  // Calculate relative index and wrap circularly
                  let diff = idx - carouselIdx;
                  if (diff < -3) diff += 6;
                  if (diff > 2) diff -= 6;
                  
                  if (diff === 0) cardClass = "active";
                  else if (diff === -1) cardClass = "prev";
                  else if (diff === 1) cardClass = "next";
                  else if (diff === -2) cardClass = "far-prev";
                  else if (diff === 2) cardClass = "far-next";
                  else if (diff === -3) cardClass = "exit-left";
                  
                  return (
                    <div 
                      key={idx} 
                      className={`timeline-card ${cardClass}`}
                    >
                      <div className="card-content-inner">
                        <div className="timeline-number">{item.number}</div>
                        <div>
                          <h3 className="timeline-title">{item.title}</h3>
                          <p className="timeline-desc">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slider Controls */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCarouselPrev();
                }}
                className="side-arrow arrow-left visible" 
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-7 h-7" style={{ strokeWidth: '2.4px' }} />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCarouselNext();
                }}
                className="side-arrow arrow-right visible" 
                aria-label="Next Slide"
              >
                <ChevronRight className="w-7 h-7" style={{ strokeWidth: '2.4px' }} />
              </button>

            </div>

            {/* Pagination Dots */}
            <div className="pagination-dots">
              {whyElvrtItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIdx(idx)}
                  className={`pagination-dot ${idx === carouselIdx ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================== */}
      {/* HOW IT WORKS SECTION           */}
      {/* ============================== */}
      <section id="how-it-works" className="how-section relative py-32 md:py-44 overflow-hidden">
        <div className="how-content relative z-10 text-center">
          
          <div className="mb-20 px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-6 leading-[1.05] tracking-[-0.03em]">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light tracking-tight opacity-85 mx-auto">
              Three steps. Seven days. Fully automated.
            </p>
          </div>

          <div className="steps-row">
            {/* Glowing Line behind the blocks */}
            <div className="glow-line-track hidden md:block">
              <div className="glow-line-runner"></div>
            </div>

            <div className="step-wrapper step-wrapper-1">
              <div className="step-item step-item-1 group text-center flex flex-col items-center">
                <BookConsultationAnimation />

                <h3 className="step-title">Book Consultation</h3>
                <p className="step-desc">
                  Tell us how your agency currently operates. We listen, audit your lead flow, and identify exactly where time and deals are being lost.
                </p>
              </div>
            </div>
            
            <div className="step-wrapper step-wrapper-2">
              <div className="step-item step-item-2 group text-center flex flex-col items-center">
                <BuildSystemAnimation />

                <h3 className="step-title">We Build Your AI Systems</h3>
                <p className="step-desc">
                  We build and configure your entire automation infrastructure — AI responses, CRM sync, follow-up sequences, and calendar booking — tailored to your agency.
                </p>
              </div>
            </div>
 
            <div className="step-wrapper step-wrapper-3">
              <div className="step-item step-item-3 group text-center flex flex-col items-center">
                <ScaleFasterAnimation />

                <h3 className="step-title">You Scale Faster</h3>
                <p className="step-desc">
                  Go live in 7 days. Watch response times drop to seconds, leads get qualified automatically, and your calendar fill with serious buyers — on autopilot.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ============================== */}
      {/* PRICING SECTION                */}
      {/* ============================== */}
      <section className="pricing-section py-24 md:py-32 px-6 relative overflow-hidden bg-[#0d0e11] border-y border-white/[0.04]" id="pricing">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Star sparkles */}
        <div className="absolute inset-0 pointer-events-none opacity-80">
          {/* Row 1 - Top region */}
          <div className="absolute top-[3%] left-[5%] w-[2px] h-[2px] bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-[8%] left-[8%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.9)]"></div>
          <div className="absolute top-[14%] left-[18%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-[5%] left-[24%] w-[2.5px] h-[2.5px] bg-white rounded-full animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.6)]" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-[14%] left-[28%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-[7%] left-[38%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-[12%] left-[44%] w-[3px] h-[3px] bg-[#E0E7FF] rounded-full animate-pulse shadow-[0_0_8px_rgba(165,180,252,0.8)]" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-[6%] left-[54%] w-[4px] h-[4px] bg-[#E0E7FF] rounded-full animate-pulse shadow-[0_0_10px_rgba(165,180,252,0.9)]" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[13%] left-[63%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-[5%] left-[71%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[11%] left-[78%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-[4%] left-[84%] w-[2.5px] h-[2.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.6s' }}></div>
          <div className="absolute top-[15%] left-[92%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute top-[9%] left-[97%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>

          {/* Row 2 - Upper Middle region */}
          <div className="absolute top-[26%] left-[4%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[21%] left-[13%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-[28%] left-[21%] w-[3px] h-[3px] bg-[#FDE28A] rounded-full animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-[23%] left-[32%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.3s' }}></div>
          <div className="absolute top-[22%] left-[42%] w-[4px] h-[4px] bg-[#FDE28A] rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.9)]" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-[27%] left-[51%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-[20%] left-[59%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute top-[29%] left-[68%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '1.9s' }}></div>
          <div className="absolute top-[24%] left-[76%] w-[2.5px] h-[2.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.7s' }}></div>
          <div className="absolute top-[28%] left-[81%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-[24%] left-[86%] w-[2px] h-[2px] bg-[#E0E7FF] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-[27%] left-[95%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.7)]" style={{ animationDelay: '1.5s' }}></div>

          {/* Row 3 - Mid region */}
          <div className="absolute top-[37%] left-[2%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-[42%] left-[12%] w-[4px] h-[4px] bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,1)]" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-[35%] left-[19%] w-[2px] h-[2px] bg-white rounded-full animate-pulse animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-[38%] left-[25%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-[44%] left-[34%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-[39%] left-[41%] w-[3px] h-[3px] bg-[#E0E7FF] rounded-full animate-pulse shadow-[0_0_8px_rgba(199,210,254,0.8)]" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[41%] left-[49%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.0s' }}></div>
          <div className="absolute top-[45%] left-[58%] w-[3px] h-[3px] bg-[#E0E7FF] rounded-full animate-pulse shadow-[0_0_8px_rgba(199,210,254,0.9)]" style={{ animationDelay: '1.6s' }}></div>
          <div className="absolute top-[36%] left-[66%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-[48%] left-[74%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-[42%] left-[83%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse animate-pulse" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-[39%] left-[94%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '2.3s' }}></div>

          {/* Row 4 - Lower Mid region */}
          <div className="absolute top-[56%] left-[6%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-[52%] left-[15%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-[62%] left-[21%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[55%] left-[29%] w-[2.5px] h-[2.5px] bg-[#FDE28A] rounded-full animate-pulse animate-pulse" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute top-[51%] left-[36%] w-[4px] h-[4px] bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.95)]" style={{ animationDelay: '2.7s' }}></div>
          <div className="absolute top-[59%] left-[49%] w-[2px] h-[2px] bg-[#FDE28A] rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-[53%] left-[55%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-[60%] left-[62%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.7)]" style={{ animationDelay: '1.6s' }}></div>
          <div className="absolute top-[54%] left-[70%] w-[1.5px] h-[1.5px] bg-[#E0E7FF] rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-[64%] left-[82%] w-[4px] h-[4px] bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.9)]" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-[58%] left-[89%] w-[2px] h-[2px] bg-white rounded-full animate-pulse animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-[61%] left-[96%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '2.4s' }}></div>

          {/* Row 5 - Bottom region */}
          <div className="absolute top-[76%] left-[5%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-[70%] left-[11%] w-[2px] h-[2px] bg-white rounded-full animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.5)]" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-[76%] left-[15%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute top-[71%] left-[31%] w-[4px] h-[4px] bg-[#E0E7FF] rounded-full animate-pulse shadow-[0_0_10px_rgba(165,180,252,0.9)]" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-[78%] left-[40%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.9s' }}></div>
          <div className="absolute top-[73%] left-[48%] w-[2.5px] h-[2.5px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.7)]" style={{ animationDelay: '2.8s' }}></div>
          <div className="absolute top-[77%] left-[55%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[79%] left-[64%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-[72%] left-[73%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute top-[78%] left-[81%] w-[3.5px] h-[3.5px] bg-[#FDE28A] rounded-full animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[73%] left-[89%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '2.9s' }}></div>
          <div className="absolute top-[75%] left-[94%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>

          {/* Row 6 - Deep Bottom region */}
          <div className="absolute top-[88%] left-[8%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-[83%] left-[19%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse animate-pulse" style={{ animationDelay: '2.6s' }}></div>
          <div className="absolute top-[91%] left-[27%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-[85%] left-[37%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[84%] left-[46%] w-[3px] h-[3px] bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '2.4s' }}></div>
          <div className="absolute top-[89%] left-[58%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-[92%] left-[71%] w-[4px] h-[4px] bg-[#FDE28A] rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.9)]" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-[84%] left-[79%] w-[2.5px] h-[2.5px] bg-white rounded-full animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.6)]" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute top-[86%] left-[93%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-[93%] left-[97%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="text-center max-w-3xl mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-sans font-semibold text-white mb-6 leading-[1.1] tracking-[-0.02em]">
              Pricing Built to Scale Your Brokerage
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#8696a1] leading-relaxed font-light max-w-2xl mx-auto">
              Transparent pricing to automate your lead flow. Ask about our pilot program to secure instant setup savings.
            </p>
          </div>

          {/* Promotional Alert Banner */}
          <div 
            style={{ 
              border: '1.5px solid rgba(255, 255, 255, 0.1)', 
              background: 'rgba(15, 15, 17, 0.7)', 
              backdropFilter: 'blur(20px)' 
            }}
            className="w-full max-w-6xl mx-auto mb-12 md:mb-16 rounded-[32px] p-8 md:p-12 lg:p-14 relative overflow-hidden group shadow-[0_32px_80px_rgba(0,0,0,0.65)] transition-all duration-500 hover:border-white/20 hover:translate-y-[-2px]"
          >
            {/* Elegant SVG grid background overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none opacity-75"></div>

            {/* Top sharp line glow on the banner */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
            
            {/* Elegant ambient corner glows */}
            <div className="absolute -right-24 -top-24 w-[350px] h-[350px] bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-[90px] pointer-events-none group-hover:scale-110 transition-transform duration-1000 ease-out"></div>
            <div className="absolute -left-12 -bottom-12 w-[200px] h-[200px] bg-white/[0.01] rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Simple Talk & CTA */}
              <div className="col-span-1 md:col-span-8 flex flex-col gap-6 text-left">
                <div className="flex flex-col items-start gap-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] text-white/70 font-semibold uppercase tracking-[0.15em] mb-2">
                    EXCLUSIVE LAUNCH PROGRAM
                  </span>
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                    Founding Partner Program
                  </h4>
                </div>
                
                <p className="text-base md:text-lg text-neutral-300 font-medium leading-relaxed max-w-2xl">
                  We are selecting exactly <span className="text-white font-extrabold underline decoration-white/30">3 forward-thinking real estate agencies</span> to build our flagship launch case studies. If selected, we will heavily discount your setup fee <span className="text-white font-extrabold underline decoration-white/40">(save $1,001 instantly)</span> and lock in a <span className="text-white font-extrabold underline decoration-white/40">50% discount on your monthly retainer for life ($248/mo instead of $497/mo).</span> All we ask in return is a brief video testimonial once the system successfully starts booking and classifying your leads.
                </p>

                {/* Inline CTA Button and secondary text */}
                <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/[0.06]">
                  <a
                    href="https://calendly.com/mspoltu07/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white hover:bg-neutral-100 text-black font-extrabold text-sm md:text-base px-8 py-4 rounded-2xl transition-all duration-300 ease-out whitespace-nowrap shadow-[0_4px_24px_rgba(255,255,255,0.08)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Apply Now
                  </a>
                  
                  <span className="text-[#9CA3AF] font-bold text-xs md:text-sm">
                    Apply today to secure your spot.
                  </span>
                </div>
              </div>

              {/* Right Column: High-contrast Minimal Stat Bento Grid */}
              <div className="col-span-1 md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 justify-center items-stretch w-full">
                {/* Metric 1: Setup Fee Waived */}
                <div className="flex-1 border border-white/[0.06] bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white select-none leading-none">
                    -$1,001
                  </div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mt-4">
                    SETUP INSTANT SAVINGS
                  </div>
                </div>

                {/* Metric 2: Slots Filled */}
                <div className="flex-1 border border-white/[0.06] bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white select-none leading-none">
                      0/3
                    </div>
                    <span className="text-[9px] text-neutral-400 font-semibold bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mt-4">
                    Slots Filled (3 Remaining)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Speed-to-Lead */}
            <div className="flex flex-col bg-gradient-to-b from-white/[0.02] to-white/[0.005] backdrop-blur-xl border border-white/[0.05] rounded-[24px] p-8 md:p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.12] hover:translate-y-[-6px] hover:shadow-[0_32px_64px_rgba(0,0,0,0.8)] relative group">
              <div className="mb-6 text-left">
                <h3 className="text-xl font-sans font-semibold text-white mb-3">Speed-to-Lead</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-[44px] font-sans font-bold text-white tracking-tight">$99</span>
                  <span className="text-[#8696a1] ml-2 text-sm font-light">/ month</span>
                </div>
                <div className="text-[13px] text-white/90 font-bold mb-6">
                  + $149 setup fee (Beta Price - Was $500)
                </div>
                <p className="text-[14px] text-neutral-200 font-light min-h-[44px]">
                  For solo agents stopping internet lead leakage.
                </p>
              </div>

              {/* Button */}
              <div className="mt-2 mb-8">
                <a 
                  href="https://calendly.com/mspoltu07/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.07] text-white border border-white/[0.08] hover:border-white/[0.18] rounded-xl py-3.5 px-4 text-[13px] font-semibold transition-all duration-300 shadow-none"
                >
                  Start Lite
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1px] bg-white/[0.04] flex-1"></div>
                <span className="text-[10px] tracking-[0.2em] text-[#8696a1]/50 font-bold px-4">FEATURES</span>
                <div className="h-[1px] bg-white/[0.04] flex-1"></div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 flex-1 flex flex-col justify-start">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">Instant Social Media Response</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">AI Lead Classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">Direct CRM Auto-Sync</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Autopilot Nurture (Most Popular) */}
            <div className="flex flex-col bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl border border-white/[0.11] rounded-[24px] p-8 md:p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.22] hover:translate-y-[-6px] hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)] relative md:scale-[1.03] z-10 shadow-[0_24px_50px_rgba(0,0,0,0.7)] group">
              {/* Sharp Specular Highlight Sweep line across top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[180px] h-[40px] pointer-events-none z-20" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%)' }}></div>
              
              {/* Badge */}
              <div className="absolute top-5 right-5">
                <span className="bg-white/[0.06] text-[#8696a1] border border-white/[0.1] text-[9px] font-semibold tracking-wider px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <div className="mb-6 text-left">
                <h3 className="text-xl font-sans font-semibold text-white mb-3">Autopilot Nurture</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-[44px] font-sans font-bold text-white tracking-tight">$248</span>
                  <span className="text-[#8696a1] ml-2 text-sm font-light">/ month</span>
                </div>
                <div className="text-[13px] text-white/90 font-bold mb-6">
                  + $499 setup fee (Beta Price - Was $1,500)
                </div>
                <p className="text-[14px] text-neutral-200 font-light min-h-[44px]">
                  Replace a full-time ISA. Fully automated follow-ups.
                </p>
              </div>

              {/* Button */}
              <div className="mt-2 mb-8">
                <a 
                  href="https://calendly.com/mspoltu07/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#f25c38] to-[#ff734d] hover:brightness-110 text-white font-semibold rounded-xl py-3.5 px-4 text-[13px] transition-all duration-300 shadow-none border-0"
                >
                  Automate My Follow-Ups
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1px] bg-white/[0.06] flex-1"></div>
                <span className="text-[10px] tracking-[0.2em] text-[#8696a1]/50 font-bold px-4">FEATURES</span>
                <div className="h-[1px] bg-white/[0.06] flex-1"></div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 flex-1 flex flex-col justify-start">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-200 font-medium text-left">Everything in Speed-to-Lead</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">Multi-Channel Follow-Up Sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">24/7 AI Website Support Bot</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Complete Brokerage */}
            <div className="flex flex-col bg-gradient-to-b from-white/[0.02] to-white/[0.005] backdrop-blur-xl border border-white/[0.05] rounded-[24px] p-8 md:p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.12] hover:translate-y-[-6px] hover:shadow-[0_32px_64px_rgba(0,0,0,0.8)] relative group">
              <div className="mb-6 text-left">
                <h3 className="text-xl font-sans font-semibold text-white mb-3">Complete Brokerage</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-[44px] font-sans font-bold text-white tracking-tight">Custom</span>
                </div>
                <div className="text-[13px] text-white/90 font-bold mb-6">
                  Custom Setup
                </div>
                <p className="text-[14px] text-neutral-200 font-light min-h-[44px]">
                  Total operational leverage for top-producing teams.
                </p>
              </div>

              {/* Button */}
              <div className="mt-2 mb-8">
                <a 
                  href="https://calendly.com/mspoltu07/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.07] text-white border border-white/[0.08] hover:border-white/[0.18] rounded-xl py-3.5 px-4 text-[13px] font-semibold transition-all duration-300 shadow-none"
                >
                  Build Custom Solution
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1px] bg-white/[0.04] flex-1"></div>
                <span className="text-[10px] tracking-[0.2em] text-[#8696a1]/50 font-bold px-4">FEATURES</span>
                <div className="h-[1px] bg-white/[0.04] flex-1"></div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 flex-1 flex flex-col justify-start">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-200 font-medium text-left">Everything in Autopilot Nurture</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">Interactive Property Showcasing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#8696a1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300 font-light text-left">Fully Custom Webhooks & Routing</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CTA SECTION                    */}
      {/* ============================== */}
      <section className="cta-section flex flex-col items-center justify-center text-center py-32 md:py-40 px-6">
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-semibold text-white mb-6 leading-[1.1] tracking-[-0.02em] text-center max-w-3xl">
            Close Fast, Scale Fast.
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#94A3B8] leading-relaxed mb-10 font-light max-w-2xl text-center">
            The agents who respond first, qualify smartest, and follow up longest — win. ELVRT makes you that agent, automatically.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://calendly.com/mspoltu07/strategy-call" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-white text-black hover:bg-slate-100 transition-all font-sans font-bold tracking-wider rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)] relative z-20"
              style={{
                padding: '1.1rem 2.5rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.12em'
              }}
            >
              BOOK A STRATEGY CALL <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function BookConsultationAnimation() {
  return (
    <div className="mb-6 flex items-center justify-center h-20 w-full relative bg-transparent select-none">
      {/* Soft ambient aura behind the step label */}
      <div className="absolute w-32 h-12 bg-white/[0.01] rounded-full blur-xl group-hover:bg-white/[0.03] transition-all duration-700 pointer-events-none"></div>
      
      <div className="flex items-baseline gap-3 transition-all duration-500 ease-out group-hover:scale-[1.04]">
        <span className="text-3xl font-sans font-black text-neutral-500 uppercase tracking-tight transition-colors duration-500 group-hover:text-neutral-400">
          STEP
        </span>
        <span className="font-sans font-black text-4xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
          1
        </span>
      </div>
    </div>
  );
}

function BuildSystemAnimation() {
  return (
    <div className="mb-6 flex items-center justify-center h-20 w-full relative bg-transparent select-none">
      {/* Soft ambient aura behind the step label */}
      <div className="absolute w-32 h-12 bg-white/[0.01] rounded-full blur-xl group-hover:bg-white/[0.03] transition-all duration-700 pointer-events-none"></div>
      
      <div className="flex items-baseline gap-3 transition-all duration-500 ease-out group-hover:scale-[1.04]">
        <span className="text-3xl font-sans font-black text-neutral-500 uppercase tracking-tight transition-colors duration-500 group-hover:text-neutral-400">
          STEP
        </span>
        <span className="font-sans font-black text-4xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
          2
        </span>
      </div>
    </div>
  );
}

function ScaleFasterAnimation() {
  return (
    <div className="mb-6 flex items-center justify-center h-20 w-full relative bg-transparent select-none">
      {/* Soft ambient aura behind the step label */}
      <div className="absolute w-32 h-12 bg-white/[0.01] rounded-full blur-xl group-hover:bg-white/[0.03] transition-all duration-700 pointer-events-none"></div>
      
      <div className="flex items-baseline gap-3 transition-all duration-500 ease-out group-hover:scale-[1.04]">
        <span className="text-3xl font-sans font-black text-neutral-500 uppercase tracking-tight transition-colors duration-500 group-hover:text-neutral-400">
          STEP
        </span>
        <span className="font-sans font-black text-4xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
          3
        </span>
      </div>
    </div>
  );
}
