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
    <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center overflow-hidden bg-slate-950 pt-8 pb-14 border-b border-amber-500/20">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="/project1.png"
          alt="Luxury Gated Enclave"
          className="w-full h-full object-cover object-center opacity-70 scale-105 transition-transform duration-1000"
        />
        {/* Lighter scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.08),transparent_70%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
        
        {/* Main Display Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-tight drop-shadow-md">
            Building Your Dream Legacy<br />
            <span className="gold-metallic-text italic font-serif">
              Luxury Gated Society Plots
            </span>
          </h1>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={onOpenSiteVisit}
              className="btn-sheen bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-sans font-black px-6 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wide cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Schedule Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/plot-map"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-6 py-3.5 rounded-xl border border-white/30 shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Live Plot Masterplan</span>
            </a>
          </div>
        </div>

        {/* Interactive Quick Plot Finder Studio Strip */}
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-amber-400/40 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center">
              
              {/* City Selector */}
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

              {/* Budget Range Selector */}
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

              {/* Submit Filter Button */}
              <button
                onClick={handleQuickSearch}
                className="btn-sheen w-full bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer transition"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Explore Plots</span>
              </button>

            </div>
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
