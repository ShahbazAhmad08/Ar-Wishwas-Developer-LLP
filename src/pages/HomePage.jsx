import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { COMPANY_INFO, SITES_DATA, CORE_AMENITIES, TESTIMONIALS } from '../data/sitesData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { TiltCard } from '../components/TiltCard';
import { ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight, Calendar, Landmark, Award, Compass, Search, Star, Quote, Trees, Road, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Hero background carousel images
const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
];

const HIGHLIGHT_LOCATIONS = [
  { name: "Bamrauli Airport Corridor", city: "Prayagraj", desc: "Fastest Appreciating Zone • 12 Mins to Airport" },
  { name: "Jhalwa IIIT Tech Hub", city: "Prayagraj", desc: "Near High Court Judicial & Tech Hub" },
  { name: "NH-19 Highway Express", city: "Kaushambi", desc: "Direct 6-Lane Connectivity • Commercial Touch" },
  { name: "Manjhanpur District HQ", city: "Kaushambi", desc: "Collectorate & Judicial Officers Colony Belt" }
];

export const HomePage = ({ onOpenSiteVisit }) => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [locIndex, setLocIndex] = useState(0);

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle prime location highlights every 3.5 seconds
  useEffect(() => {
    const locTimer = setInterval(() => {
      setLocIndex((prev) => (prev + 1) % HIGHLIGHT_LOCATIONS.length);
    }, 3500);
    return () => clearInterval(locTimer);
  }, []);

  const totalAvailable = SITES_DATA.reduce((acc, s) => acc + s.plotsSummary.available, 0);

  const handleQuickSearch = () => {
    navigate('/projects');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#F8FAFC]"
    >
      
      {/* 1. CINEMATIC LUXURY HERO BANNER */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-900 pt-10 pb-20 border-b border-slate-200">
        
        {/* Ken Burns Auto-Rotating Image Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={HERO_SLIDES[currentSlide]}
              alt="Luxury Township"
              initial={{ scale: 1.14, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          {/* Multi-layered bright/contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A38] via-[#0B1A38]/70 to-[#050C1F]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.18),transparent_70%)]" />

          {/* Drifting Luxury Luminous Orbs for Cinematic Atmosphere */}
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-orb-1 pointer-events-none" />
          <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl animate-orb-2 pointer-events-none" />
        </div>

        {/* Floating Luxury Glass Accents (Desktop only - Apple / Awwwards aesthetic) */}
        <div className="hidden xl:block absolute left-8 top-1/3 z-20 animate-float-slow pointer-events-none">
          <div className="bg-white/10 backdrop-blur-xl border border-white/25 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] max-w-xs text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 font-bold shadow-inner">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black text-amber-400 uppercase tracking-wider">Bank Finance Ready</div>
                <div className="text-xs font-bold text-white">SBI, PNB & Baroda</div>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-slate-200">Up to 80% Loan Support with flexible 15-yr tenure</div>
          </div>
        </div>

        <div className="hidden xl:block absolute right-8 top-1/3 z-20 animate-float-reverse pointer-events-none">
          <div className="bg-white/10 backdrop-blur-xl border border-white/25 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] max-w-xs text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 font-bold shadow-inner">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">100% Legal Guarantee</div>
                <div className="text-xs font-bold text-white">Registry & Dakhil-Kharij</div>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-slate-200">Section 143 Converted • Clear Title Mutation</div>
          </div>
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 w-full">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Animated Luxury Pill with Pulsing Ring */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold shadow-[0_0_20px_rgba(251,191,36,0.25)]">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="font-display font-extrabold uppercase tracking-widest text-amber-300">Prayagraj & Kaushambi</span>
                <span className="text-amber-400/40">•</span>
                <span className="text-slate-200 font-medium">100% Verified Gated Society Plots</span>
              </div>
            </motion.div>

            {/* Dynamic Prime Location Highlight Ticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="h-8 flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={locIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 text-xs font-semibold text-amber-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-bold text-amber-300">{HIGHLIGHT_LOCATIONS[locIndex].city}:</span>
                  <span>{HIGHLIGHT_LOCATIONS[locIndex].name}</span>
                  <span className="text-amber-400/40 hidden sm:inline">•</span>
                  <span className="text-slate-300 hidden sm:inline">{HIGHLIGHT_LOCATIONS[locIndex].desc}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Editorial Masked Headline Reveal */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white leading-[1.12]"
              >
                Aapka Sapna, Humara Wishwas!<br />
                <span className="gold-metallic-text italic font-serif">
                  VIP Gated Colony Plots
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-sans leading-relaxed pt-1"
            >
              Bamrauli Airport Corridor, Jhalwa IIIT, Manjhanpur & NH-19 Highway par 
              <strong className="text-amber-300 font-bold"> 30-40ft Interlocking Sadak</strong>, 
              Bijli, Paani, Boundary aur 
              <strong className="text-amber-300 font-bold"> Instant Bank Finance (SBI, PNB) </strong> 
              ke saath turant Registry aur Dakhil-Kharij plots.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)" }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenSiteVisit}
                className="btn-sheen w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-sans font-black px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2.5 text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/plot-map"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-2xl border border-white/25 shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Interactive Plot Masterplan</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Plot Finder Strip with 3D Tilt */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 max-w-3xl mx-auto"
            >
              <TiltCard tiltDegree={4} glare={true} className="rounded-3xl">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-5 border border-amber-400/40 shadow-[0_25px_50px_rgba(0,0,0,0.3)]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                    
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                        Preferred Location
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                      >
                        <option value="All">All Locations (Prayagraj & Kaushambi)</option>
                        <option value="Prayagraj">Prayagraj (Airport & Jhalwa)</option>
                        <option value="Kaushambi">Kaushambi (Highway & District HQ)</option>
                      </select>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                        Target Budget
                      </label>
                      <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                      >
                        <option value="All">All Budgets (₹5L - ₹25L)</option>
                        <option value="under8">₹5 Lakh - ₹8 Lakh</option>
                        <option value="8to15">₹8 Lakh - ₹15 Lakh</option>
                        <option value="above15">₹15 Lakh+</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleQuickSearch}
                      className="btn-sheen w-full bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer transition"
                    >
                      <Search className="w-4 h-4" />
                      <span>Explore Matching Plots</span>
                    </motion.button>

                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Slide Navigation Dots */}
            <div className="flex justify-center gap-2 pt-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* 2. STATS BAR WITH SMOOTH ANIMATED COUNTERS */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-slate-200/90"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="text-center pt-3 md:pt-0">
              <span className="font-display font-black text-3xl sm:text-4xl text-amber-800 block">
                <AnimatedCounter to={850} suffix="+" duration={2.2} />
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                Happy Plot Owners
              </span>
            </div>

            <div className="text-center pt-3 md:pt-0">
              <span className="font-display font-black text-3xl sm:text-4xl text-slate-900 block">
                <AnimatedCounter to={1200} suffix="+" duration={2.2} />
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                Plots Demarcated
              </span>
            </div>

            <div className="text-center pt-3 md:pt-0">
              <span className="font-display font-black text-3xl sm:text-4xl text-amber-800 block">
                <AnimatedCounter to={90} suffix="+ Acres" duration={2} />
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                Across 5 Townships
              </span>
            </div>

            <div className="text-center pt-3 md:pt-0">
              <span className="font-display font-black text-3xl sm:text-4xl text-emerald-600 block">
                <AnimatedCounter to={100} suffix="%" duration={1.8} />
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                Clear Title Registry
              </span>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
              Township Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-2">
              Featured Gated Colonies
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Prime residential plotted colonies with immediate registry and bank finance.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition group"
          >
            <span>Explore All 5 Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITES_DATA.slice(0, 3).map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard tiltDegree={6} glare={true} className="h-full rounded-3xl">
                <div className="luxury-card-bright rounded-3xl overflow-hidden flex flex-col justify-between h-full group">
                  <div>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={site.bannerImage}
                        alt={site.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-slate-200">
                        {site.locationCategory}
                      </div>
                      <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                        {site.badge}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white drop-shadow-md">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-200 block">Starting Rate</span>
                          <span className="text-xl font-display font-black text-amber-300">{site.priceDisplay}</span>
                        </div>
                        <span className="text-xs bg-slate-900/80 px-2 py-1 rounded border border-slate-700 text-white font-mono">
                          {site.sqFtPriceDisplay}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{site.name}</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{site.subLocation}</span>
                      </p>

                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs text-slate-700 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Available Plots:</span>
                          <span className="font-bold text-emerald-600">{site.plotsSummary.available} Open</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Bank Loan:</span>
                          <span className="font-bold text-slate-800">SBI, PNB Approved</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-2.5">
                    <Link
                      to={`/plot-map?site=${site.id}`}
                      className="btn-sheen flex-1 bg-amber-500 hover:bg-amber-600 text-white text-center font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <Compass className="w-3.5 h-3.5" /> View Map
                    </Link>

                    <Link
                      to="/projects"
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. MASTERPLAN CALLOUT WITH RADAR PULSE */}
      <section className="py-20 bg-gradient-to-r from-[#0B1A38] via-[#10244D] to-[#0B1A38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                Live Architectural Visualizer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
                Inspect Every Plot On Live Masterplan Map
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
                Townships divided into <strong>Block A (Boulevard), Block B (Park Facing), and Block C (VIP Enclave)</strong>. Check real-time Green (Available), Yellow (Booked), and Red (Sold) status.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-3">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/plot-map"
                    className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-xl transition cursor-pointer"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Launch Masterplan Kiosk</span>
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenSiteVisit}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-sm border border-white/20 transition cursor-pointer"
                >
                  Schedule Site Inspection
                </motion.button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <TiltCard tiltDegree={8} glare={true} className="rounded-3xl">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center space-y-3 shadow-2xl">
                  <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">Live Inventory Status</span>
                  <div className="text-5xl font-display font-black text-emerald-400">
                    <AnimatedCounter to={totalAvailable} duration={2} />
                  </div>
                  <p className="text-xs text-slate-200">Plots Open For Immediate Registry & Demarcation</p>
                  <div className="pt-2 text-[11px] text-slate-300 flex justify-center gap-3 font-semibold">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Available</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> Reserved</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" /> Sold</span>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AMENITIES BENTO GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Society Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-2">
            World-Class Infrastructure
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Constructed with high-grade materials for lifetime durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_AMENITIES.map((amenity, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              className="luxury-card-bright p-6 rounded-3xl border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-slate-900 mb-1.5">{amenity.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{amenity.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Implemented
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CALCULATORS TEASER BANNER */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="luxury-card-bright rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Loan & Growth Studio
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                Calculate Monthly EMI & 5-Year Capital Appreciation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Check your exact monthly installment with up to 80% bank financing from SBI, PNB, HDFC, and project your plot appreciation value over 1 to 5 years.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/calculators"
                className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-8 py-4 rounded-2xl text-xs sm:text-sm flex items-center gap-2 shadow-lg transition flex-shrink-0"
              >
                <span>Open Financial Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED REVIEWS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Client Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-2">
            Trusted by 850+ Homeowners
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Real reviews from verified plot owners across Prayagraj and Kaushambi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard tiltDegree={5} glare={true} className="h-full rounded-3xl">
                <div className="luxury-card-bright p-7 rounded-3xl border border-slate-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex text-amber-500 gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6 font-sans">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-amber-300"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <p className="text-[11px] text-amber-700 font-medium">{item.role}</p>
                      <p className="text-[10px] text-slate-400">{item.site}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. SCHEDULE VISIT CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B1A38] to-[#10244D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Apna Plot Choose Karne Ke Liye Aaj Hi Site Visit Book Karein
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Senior property consultant aapko complete colony inspection karwayenge aur official Registry & Dakhil Kharij papers verify karwayenge.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenSiteVisit}
              className="btn-sheen bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm shadow-xl transition cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Site Visit</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Namaste Ar Wishwas Developer, mujhe plot visit schedule karni hai.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-md transition flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </motion.a>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
