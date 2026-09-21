import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { COMPANY_INFO, SITES_DATA, CORE_AMENITIES, TESTIMONIALS, BANK_PARTNERS } from '../data/sitesData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { TiltCard } from '../components/TiltCard';
import { ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight, Calendar, Landmark, Award, Compass, Search, Star, Quote, Trees, Road, ChevronRight, ChevronLeft, Calculator, MessageSquare, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Hero background carousel images (using real project & site infrastructure photos)
const HERO_SLIDES = [
  "/project1.png",
  "/project2.png",
  "/project4.png",
  "/project5.jpeg",
  "/facilities/gate.jfif",
  "/facilities/road1.jfif"
];

const HIGHLIGHT_LOCATIONS = [
  { name: "Bamrauli Airport Corridor", city: "Prayagraj", desc: "Fastest Appreciating Zone • 12 Mins to Airport" },
  { name: "Jhalwa IIIT Tech Hub", city: "Prayagraj", desc: "Near High Court Judicial & Tech Hub" },
  { name: "NH-19 Highway Express", city: "Kaushambi", desc: "Direct 6-Lane Connectivity • Commercial Touch" },
  { name: "Manjhanpur District HQ", city: "Kaushambi", desc: "Collectorate & Judicial Belt" }
];

export const HomePage = ({ onOpenSiteVisit }) => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [locIndex, setLocIndex] = useState(0);

  // Testimonial Carousel State
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Direct EMI Calculator State
  const [emiAmount, setEmiAmount] = useState(850000);
  const [emiRate, setEmiRate] = useState(8.5);
  const [emiYears, setEmiYears] = useState(5);

  // EMI Math
  const monthlyRate = (emiRate / 12) / 100;
  const totalMonths = emiYears * 12;
  const calculatedEmi = Math.round(
    (emiAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;
  const totalPayment = calculatedEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - emiAmount);
  const principalPercent = totalPayment > 0 ? Math.round((emiAmount / totalPayment) * 100) : 0;
  const interestPercent = 100 - principalPercent;

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

  // Auto-slide testimonials every 4.5 seconds (if not hovering)
  useEffect(() => {
    if (isHovered) return;
    const testTimer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(testTimer);
  }, [isHovered]);

  const totalAvailable = SITES_DATA.reduce((acc, s) => acc + s.plotsSummary.available, 0);

  const handleQuickSearch = () => {
    navigate('/projects');
  };

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#F8FAFC]"
    >
      
      {/* 1. CINEMATIC LUXURY COMPACT HERO BANNER */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center overflow-hidden bg-slate-950 pt-8 pb-14 border-b border-amber-500/20">
        
        {/* Background Rotating Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={HERO_SLIDES[currentSlide]}
              alt="Luxury Township"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.72 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          
          {/* Lighter scrim overlay so luxury background property is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.08),transparent_70%)]" />

          {/* Luminous Glow Orbs */}
          <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
          
          <div className="space-y-4">
            
            {/* Clean & Impactful Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight drop-shadow-md"
            >
              Building Your Dream Legacy<br />
              <span className="gold-metallic-text italic font-serif">
                Luxury Gated Society Plots
              </span>
            </motion.h1>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenSiteVisit}
                className="btn-sheen bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-sans font-black px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/plot-map"
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-6 py-3.5 rounded-xl border border-white/30 shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Live Plot Masterplan</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Compact Quick Plot Finder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl mx-auto"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-amber-400/40 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center">
                  
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-left">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                      Location
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Locations</option>
                      <option value="Prayagraj">Prayagraj (Airport & Jhalwa)</option>
                      <option value="Kaushambi">Kaushambi (Highway & HQ)</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-left">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                      Budget
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleQuickSearch}
                    className="btn-sheen w-full bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer transition"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Explore Plots</span>
                  </motion.button>

                </div>
              </div>
            </motion.div>

            {/* Slide Navigation Dots */}
            <div className="flex justify-center gap-1.5 pt-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* 2. STATS BAR WITH SMOOTH ANIMATED COUNTERS */}
      <section className="relative z-20 -mt-6 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="text-center pt-2 md:pt-0">
              <span className="font-display font-black text-2xl sm:text-3xl text-amber-800 block">
                <AnimatedCounter to={850} suffix="+" duration={2} />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Happy Plot Owners
              </span>
            </div>

            <div className="text-center pt-2 md:pt-0">
              <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 block">
                <AnimatedCounter to={1200} suffix="+" duration={2} />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Plots Demarcated
              </span>
            </div>

            <div className="text-center pt-2 md:pt-0">
              <span className="font-display font-black text-2xl sm:text-3xl text-amber-800 block">
                <AnimatedCounter to={90} suffix="+ Acres" duration={1.8} />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Across 5 Townships
              </span>
            </div>

            <div className="text-center pt-2 md:pt-0">
              <span className="font-display font-black text-2xl sm:text-3xl text-emerald-600 block">
                <AnimatedCounter to={100} suffix="%" duration={1.6} />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Clear Title Registry
              </span>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Township Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">
              Featured Gated Colonies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Prime residential plotted colonies with immediate registry and bank finance.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-900 transition group"
          >
            <span>Explore All 5 Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITES_DATA.slice(0, 3).map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard tiltDegree={5} glare={true} className="h-full rounded-2xl">
                <div className="luxury-card-bright rounded-2xl overflow-hidden flex flex-col justify-between h-full group">
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={site.bannerImage}
                        alt={site.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-slate-200">
                        {site.locationCategory}
                      </div>
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                        {site.badge}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white drop-shadow-md">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-200 block">Starting Rate</span>
                          <span className="text-lg font-display font-black text-amber-300">{site.priceDisplay}</span>
                        </div>
                        <span className="text-[11px] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 text-white font-mono">
                          {site.sqFtPriceDisplay}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{site.name}</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{site.subLocation}</span>
                      </p>

                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
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

                  <div className="p-5 pt-0 flex gap-2">
                    <Link
                      to={`/plot-map?site=${site.id}`}
                      className="btn-sheen flex-1 bg-amber-500 hover:bg-amber-600 text-white text-center font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 shadow-sm transition"
                    >
                      <Compass className="w-3.5 h-3.5" /> View Map
                    </Link>

                    <Link
                      to="/projects"
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition"
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

      {/* 4. MASTERPLAN CALLOUT */}
      <section className="py-16 bg-gradient-to-r from-[#0B1A38] via-[#10244D] to-[#0B1A38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                Live Architectural Visualizer
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                Inspect Every Plot On Live Masterplan Map
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans">
                Townships divided into <strong>Block A (Boulevard), Block B (Park Facing), and Block C (VIP Enclave)</strong>. Check real-time Green (Available), Yellow (Booked), and Red (Sold) status.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/plot-map"
                    className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Launch Masterplan Kiosk</span>
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenSiteVisit}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition cursor-pointer"
                >
                  Schedule Site Inspection
                </motion.button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <TiltCard tiltDegree={6} glare={true} className="rounded-2xl">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center space-y-2 shadow-xl">
                  <span className="text-[11px] uppercase font-bold text-amber-300 tracking-wider">Live Inventory Status</span>
                  <div className="text-4xl sm:text-5xl font-display font-black text-emerald-400">
                    <AnimatedCounter to={totalAvailable} duration={1.8} />
                  </div>
                  <p className="text-xs text-slate-200">Plots Open For Immediate Registry & Demarcation</p>
                  <div className="pt-2 text-[10px] text-slate-300 flex justify-center gap-3 font-semibold">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Available</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Reserved</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> Sold</span>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AMENITIES SECTION (3 CARDS PER ROW WITH DEDICATED IMAGES - 2nd IMAGE REQUIREMENT) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Society Facilities & Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">
            World-Class Infrastructure & Amenities
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Constructed with high-grade materials for lifetime safety and effortless living.
          </p>
        </div>

        {/* 3 Columns per Row Grid with Dedicated Image Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_AMENITIES.map((amenity, idx) => (
            <motion.div 
              key={amenity.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="luxury-card-bright rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm group"
            >
              <div>
                {/* Dedicated Amenity Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                  
                  {/* Amenity Badge */}
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {amenity.badge || "Verified"}
                  </div>

                  {/* Amenity Status */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                    <span>100% Implemented</span>
                  </div>
                </div>

                {/* Amenity Details */}
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {amenity.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span className="text-amber-700">A-Grade Quality</span>
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> On-Site Ready
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CLEAN DIRECT EMI CALCULATOR (4th IMAGE REQUIREMENT) */}
      <section id="emi-calculator" className="py-16 bg-slate-900 text-white border-y border-amber-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-black uppercase tracking-wider bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-400/30">
              Instant Plot Loan Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mt-2">
              Monthly Bank EMI Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
              Enter your plot loan amount, bank interest rate, and years to instantly calculate your monthly EMI.
            </p>
          </div>

          <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Inputs Column */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Plot Loan Amount */}
                <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Loan Amount (₹):
                    </label>
                    <input
                      type="number"
                      min="100000"
                      max="5000000"
                      step="25000"
                      value={emiAmount}
                      onChange={(e) => setEmiAmount(Number(e.target.value))}
                      className="bg-slate-800 border border-amber-400/40 text-amber-300 font-bold font-mono px-3 py-1 rounded-lg text-sm text-right w-36 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="4000000"
                    step="25000"
                    value={emiAmount}
                    onChange={(e) => setEmiAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>₹2 Lakh</span>
                    <span>₹20 Lakh</span>
                    <span>₹40 Lakh</span>
                  </div>
                </div>

                {/* Interest Rate & Tenure Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Interest Rate */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-300">Interest Rate (%):</label>
                      <input
                        type="number"
                        min="6"
                        max="15"
                        step="0.1"
                        value={emiRate}
                        onChange={(e) => setEmiRate(Number(e.target.value))}
                        className="bg-slate-800 border border-amber-400/40 text-amber-300 font-bold font-mono px-2.5 py-1 rounded-lg text-xs text-right w-20 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <input
                      type="range"
                      min="7.0"
                      max="13.0"
                      step="0.1"
                      value={emiRate}
                      onChange={(e) => setEmiRate(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>7.0%</span>
                      <span>8.5% (SBI)</span>
                      <span>13.0%</span>
                    </div>
                  </div>

                  {/* Loan Tenure Years */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-300">Tenure (Years):</label>
                      <span className="text-xs font-bold text-amber-300 font-mono bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                        {emiYears} {emiYears === 1 ? 'Year' : 'Years'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="1"
                      value={emiYears}
                      onChange={(e) => setEmiYears(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>1 Year</span>
                      <span>5 Years</span>
                      <span>15 Years</span>
                    </div>
                  </div>

                </div>

                {/* Pre-Approved Banks */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Approved Banks:</span>
                  {BANK_PARTNERS.slice(0, 4).map((b, idx) => (
                    <span key={idx} className="bg-slate-900/80 px-2.5 py-1 rounded-lg text-[10px] font-semibold text-slate-300 border border-slate-700">
                      {b.name} ({b.rate})
                    </span>
                  ))}
                </div>

              </div>

              {/* Result Card Column */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#0B1A38] to-[#050C1F] p-6 sm:p-7 rounded-3xl border border-amber-400/40 text-center space-y-5 shadow-xl">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    Monthly Loan Installment (EMI)
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-display gold-metallic-text">
                    ₹ {calculatedEmi.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-300 font-normal font-sans"> / month</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    *Calculated at {emiRate}% for {emiYears} Years ({totalMonths} Months)
                  </p>
                </div>

                {/* Proportion Bar */}
                <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Principal: <b>₹{emiAmount.toLocaleString('en-IN')}</b></span>
                    <span>Interest: <b>₹{totalInterest.toLocaleString('en-IN')}</b></span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${principalPercent}%` }} />
                    <div className="bg-amber-400 h-full transition-all duration-300" style={{ width: `${interestPercent}%` }} />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Principal ({principalPercent}%)</span>
                    <span>Interest ({interestPercent}%)</span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 flex justify-between border-t border-slate-800 pt-3">
                  <span>Total Payable:</span>
                  <span className="font-bold text-white font-mono text-sm">₹{totalPayment.toLocaleString('en-IN')}</span>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello Ar Wishwas Developer LLP, I calculated my plot loan EMI on your website: Loan Amount: ₹${emiAmount.toLocaleString('en-IN')}, Tenure: ${emiYears} Years, Monthly EMI: ₹${calculatedEmi.toLocaleString('en-IN')}/month. Please assist with bank loan sanction.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Bank Loan Assistance on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED REVIEWS AUTO-SLIDING CAROUSEL (3rd IMAGE REQUIREMENT) */}
      <section 
        className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Client Proof & Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">
            Trusted by 850+ Happy Plot Owners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Real experiences from verified buyers across Prayagraj and Kaushambi.
          </p>
        </div>

        {/* Sliding Testimonial Card */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-card-bright p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-amber-500 gap-1.5">
                      {[...Array(TESTIMONIALS[testimonialIdx].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Registry Buyer
                    </span>
                  </div>

                  <p className="text-base sm:text-xl text-slate-800 italic leading-relaxed mb-8 font-serif">
                    "{TESTIMONIALS[testimonialIdx].review}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={TESTIMONIALS[testimonialIdx].avatar}
                      alt={TESTIMONIALS[testimonialIdx].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{TESTIMONIALS[testimonialIdx].name}</h4>
                      <p className="text-xs text-amber-800 font-semibold">{TESTIMONIALS[testimonialIdx].role}</p>
                      <p className="text-[11px] text-slate-400">{TESTIMONIALS[testimonialIdx].site}</p>
                    </div>
                  </div>

                  {/* Manual Slide Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 transition cursor-pointer"
                      aria-label="Previous Review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 transition cursor-pointer"
                      aria-label="Next Review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  testimonialIdx === idx ? 'w-8 bg-amber-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. SCHEDULE VISIT CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B1A38] via-[#10244D] to-[#0B1A38] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight">
            Schedule Your Private Site Inspection <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 italic font-serif">
              & Property Tour Today
            </span>
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our senior land consultants will accompany you on an exclusive on-site layout inspection and verify all official Section 143 mutation & clear title legal documentation.
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
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to schedule a private site visit and plot inspection.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-md transition flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </motion.a>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
