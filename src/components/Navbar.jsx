import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/sitesData';
import { Phone, MessageSquare, Calendar, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onOpenSiteVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Masterplan Map", href: "/plot-map" },
    { name: "About & Legal", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top Continuous Running Announcement Bar */}
      <div className="bg-gradient-to-r from-[#060D1F] via-[#0F1E3D] to-[#060D1F] text-white text-xs font-sans py-2 border-b border-amber-500/20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          
          {/* Running Marquee Strip */}
          <div className="overflow-hidden flex-1 relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="animate-marquee flex items-center gap-8 text-[11px] font-medium tracking-wide">
              {/* Set 1 */}
              <span className="inline-flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5" /> Mahakumbh 2025 Corridor
                </span>
                <span className="text-slate-200">100% Khatauni Verified Gated Plots in Prayagraj & Kaushambi</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Bank Approved
                </span>
                <span className="text-slate-200">Up to 80% Plot Loan Support with SBI, PNB, HDFC & Baroda</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Legal Title
                </span>
                <span className="text-slate-200">Section 143 Non-Agri Cleared • Immediate Registry & Revenue Mutation</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Infrastructure
                </span>
                <span className="text-slate-200">30ft & 40ft Wide Interlocking Roads, Electric Poles, Water & 7ft Boundary</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Direct Deal
                </span>
                <span className="text-slate-200">0% Brokerage – Direct Developer Handover with Day-One Possession</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              {/* Set 2 Duplicate for Seamless Infinite Loop */}
              <span className="inline-flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5" /> Mahakumbh 2025 Corridor
                </span>
                <span className="text-slate-200">100% Khatauni Verified Gated Plots in Prayagraj & Kaushambi</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Bank Approved
                </span>
                <span className="text-slate-200">Up to 80% Plot Loan Support with SBI, PNB, HDFC & Baroda</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Legal Title
                </span>
                <span className="text-slate-200">Section 143 Non-Agri Cleared • Immediate Registry & Revenue Mutation</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Infrastructure
                </span>
                <span className="text-slate-200">30ft & 40ft Wide Interlocking Roads, Electric Poles, Water & 7ft Boundary</span>
              </span>

              <span className="text-amber-400 font-bold">•</span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Direct Deal
                </span>
                <span className="text-slate-200">0% Brokerage – Direct Developer Handover with Day-One Possession</span>
              </span>
            </div>
          </div>

          {/* Contact Actions Right Fixed */}
          <div className="flex-shrink-0 hidden md:flex items-center gap-4 text-xs font-medium pl-4 border-l border-slate-700/60 z-10 bg-[#0F1E3D]/80 backdrop-blur-sm py-0.5 rounded-lg">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 font-bold transition font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {COMPANY_INFO.phone}
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenSiteVisit}
              className="text-amber-300 hover:text-white font-bold cursor-pointer transition flex items-center gap-1 text-[11px]"
            >
              <Calendar className="w-3 h-3 text-amber-400" /> Schedule Visit
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Glass Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(15,23,42,0.08)] border-b border-slate-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <BrandLogo size="md" />
          </Link>

          {/* Minimal 5-item Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-slate-700">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors relative py-1.5 ${
                    isActive ? 'text-amber-800 font-extrabold' : 'hover:text-amber-700'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenSiteVisit}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition shadow-[0_4px_14px_rgba(217,119,6,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" /> Schedule Site Visit
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to schedule a property consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition shadow-md flex items-center gap-1.5"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.54 1.776.814 2.791.814 3.179 0 5.767-2.587 5.768-5.766.001-3.181-2.586-5.768-5.768-5.768zm3.364 8.163c-.144.405-.837.774-1.17.824-.312.045-.718.067-1.164-.076-.299-.096-.684-.23-1.182-.445-2.091-.904-3.453-3.029-3.558-3.167-.104-.139-.854-1.134-.854-2.163 0-1.03.54-1.536.732-1.745.193-.209.42-.262.56-.262.14 0 .28.002.403.008.13.007.305-.049.476.363.177.427.604 1.474.656 1.58.053.105.088.228.018.368-.07.14-.105.228-.21.35-.105.123-.221.274-.316.368-.105.105-.214.22-.092.43.123.21.545.9 1.168 1.455.803.715 1.48.937 1.69.1042.21.105.333.088.456-.053.123-.14.526-.613.666-.823.14-.21.28-.175.473-.105.193.07 1.226.578 1.436.683.21.105.35.158.403.245.053.088.053.508-.091.913z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.054 22l4.978-1.305A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.154c-1.637 0-3.155-.472-4.44-1.288l-.318-.2-2.955.775.789-2.88-.208-.33A8.125 8.125 0 013.846 12C3.846 7.503 7.503 3.846 12 3.846 16.497 3.846 20.154 7.503 20.154 12 20.154 16.497 16.497 20.154 12 20.154z"/>
              </svg>
              <span>WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded-xl bg-slate-100 border border-slate-200"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Animated Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-slate-200 px-5 py-5 space-y-4 shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-xl transition flex items-center justify-between ${
                        isActive ? 'bg-amber-50 text-amber-800 font-bold' : 'hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSiteVisit();
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 rounded-xl text-center text-sm shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Schedule Site Visit
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to explore your plots in Prayagraj & Kaushambi.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-center text-sm shadow flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Instant
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
