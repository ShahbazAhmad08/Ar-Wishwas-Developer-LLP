import React, { useState } from 'react';
import { COMPANY_INFO, SITES_DATA } from '../data/sitesData';
import { ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight, Calendar, Landmark, Award, Compass, Search, ChevronDown } from 'lucide-react';

export const Hero = ({ onOpenSiteVisit, onSelectSiteForMap }) => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");

  const totalPlots = SITES_DATA.reduce((acc, s) => acc + s.plotsSummary.total, 0);
  const totalAvailable = SITES_DATA.reduce((acc, s) => acc + s.plotsSummary.available, 0);
  const totalSold = SITES_DATA.reduce((acc, s) => acc + s.plotsSummary.sold, 0);

  const handleQuickSearch = () => {
    const el = document.getElementById('sites');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#030712] pt-8 pb-16 border-b border-[#D4AF37]/20">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Gated Enclave"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
        />
        {/* Multi-layered dark vignette scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#050D20]/90 to-[#030712]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.12),transparent_70%)]" />
        
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 w-full">
        
        {/* Top Trust Ribbon */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1C38]/90 border border-[#D4AF37]/40 text-[#FCE8B2] text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="font-display font-bold uppercase tracking-widest text-[#D4AF37]">Prayagraj & Kaushambi</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">100% Verified Gated Society Plots</span>
          </div>
        </div>

        {/* Main Display Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.15]">
            Your Vision, Our Integrity<br />
            <span className="gold-metallic-text italic font-serif">
              VIP Gated Community Plots
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-sans font-normal leading-relaxed pt-2">
            Prime locations across Bamrauli Airport Corridor, Jhalwa IIIT, Manjhanpur & NH-19 Highway with 
            <strong className="text-[#FCE8B2] font-semibold"> 30-40ft Interlocking Roads</strong>, 
            Electricity, Water lines, Boundary Walls, and 
            <strong className="text-[#FCE8B2] font-semibold"> Pre-Approved Bank Finance (SBI / PNB) </strong> 
            with immediate Registry and 100% Revenue Mutation guarantee.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={onOpenSiteVisit}
            className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#C59A08] hover:from-[#FCE8B2] hover:to-[#D4AF37] text-slate-950 font-sans font-black px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-sm tracking-wide cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Schedule Site Visit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#live-map"
            className="w-full sm:w-auto luxury-glass hover:bg-[#10244D]/80 text-white font-semibold px-8 py-4 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all flex items-center justify-center gap-2.5 text-sm shadow-xl cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Live Plot Map</span>
          </a>
        </div>

        {/* Interactive Quick Plot Finder Studio Strip */}
        <div className="mt-14 max-w-4xl mx-auto luxury-glass rounded-3xl p-4 sm:p-5 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            
            {/* City Selector */}
            <div className="bg-[#050C1F]/90 rounded-2xl p-3 border border-slate-800">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                Preferred Location
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#09152e]">All Prime Locations</option>
                <option value="Prayagraj" className="bg-[#09152e]">Prayagraj (Airport & Jhalwa)</option>
                <option value="Kaushambi" className="bg-[#09152e]">Kaushambi (Highway & Manjhanpur)</option>
              </select>
            </div>

            {/* Plot Size Selector */}
            <div className="bg-[#050C1F]/90 rounded-2xl p-3 border border-slate-800">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                Plot Size (Gaz / Sq.Yd)
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#09152e]">Any Size (100 - 300 yd)</option>
                <option value="100" className="bg-[#09152e]">100 sq.yd (900 sq.ft)</option>
                <option value="150" className="bg-[#09152e]">150 sq.yd (1,350 sq.ft)</option>
                <option value="200" className="bg-[#09152e]">200 sq.yd (1,800 sq.ft)</option>
              </select>
            </div>

            {/* Budget Range Selector */}
            <div className="bg-[#050C1F]/90 rounded-2xl p-3 border border-slate-800">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                Target Budget
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#09152e]">All Price Ranges</option>
                <option value="under8" className="bg-[#09152e]">₹5 Lakh - ₹8 Lakh</option>
                <option value="8to15" className="bg-[#09152e]">₹8 Lakh - ₹15 Lakh</option>
                <option value="above15" className="bg-[#09152e]">₹15 Lakh+</option>
              </select>
            </div>

            {/* Submit Filter Button */}
            <button
              onClick={handleQuickSearch}
              className="w-full h-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Explore Plots</span>
            </button>

          </div>
        </div>

        {/* Live Status Indicators Ticker */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-slate-300 font-semibold">{totalAvailable} Available Plots</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <span className="text-slate-300 font-semibold">29 Booked (Token Hold)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="text-slate-300 font-semibold">{totalSold} Sold & Registered</span>
          </div>
        </div>

      </div>

      {/* Bottom Trust Seal Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="luxury-glass p-3.5 rounded-2xl border border-white/5">
            <span className="font-display font-bold text-amber-300 text-lg block">100%</span>
            <span className="text-[11px] text-slate-400">Immediate Registry & Revenue Mutation</span>
          </div>
          <div className="luxury-glass p-3.5 rounded-2xl border border-white/5">
            <span className="font-display font-bold text-amber-300 text-lg block">Section 143</span>
            <span className="text-[11px] text-slate-400">Non-Agricultural Residential Cleared</span>
          </div>
          <div className="luxury-glass p-3.5 rounded-2xl border border-white/5">
            <span className="font-display font-bold text-amber-300 text-lg block">80% Bank Loan</span>
            <span className="text-[11px] text-slate-400">SBI, PNB, HDFC Pre-Approved</span>
          </div>
          <div className="luxury-glass p-3.5 rounded-2xl border border-white/5">
            <span className="font-display font-bold text-amber-300 text-lg block">0% Brokerage</span>
            <span className="text-[11px] text-slate-400">Direct Developer Dealing Guaranteed</span>
          </div>
        </div>
      </div>

    </section>
  );
};
