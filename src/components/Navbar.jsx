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
    { name: "Calculators", href: "/calculators" },
    { name: "About & Legal", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0B1A38] via-[#162D5A] to-[#0B1A38] text-white text-xs font-sans py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-slate-950" /> Mahakumbh 2025 Corridor
            </span>
            <span className="text-slate-200 text-xs hidden sm:inline">
              100% Khatauni Verified Gated Plots in Prayagraj & Kaushambi with Immediate Possession
            </span>
            <span className="sm:hidden text-slate-200 text-[11px]">
              100% Verified Plots • 80% Bank Loan Approved
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {COMPANY_INFO.phone}
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenSiteVisit}
              className="text-amber-300 hover:text-white font-bold cursor-pointer transition flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" /> Schedule Visit
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
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Namaste Ar Wishwas Developer Team, mujhe plots ke bare me consultation chahiye.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition shadow-md flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
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
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Namaste, mujhe Prayagraj & Kaushambi plots dekhne hain.")}`}
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
