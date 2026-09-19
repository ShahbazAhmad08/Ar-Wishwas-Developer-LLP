import React, { useState } from 'react';
import { SITES_DATA, COMPANY_INFO } from '../data/sitesData';
import { MapPin, ArrowRight, CheckCircle, MessageSquare, Compass, Eye, Train, Plane, Hospital, ChevronRight, Sparkles } from 'lucide-react';

export const SitesCatalog = ({ onSelectSiteForMap, onOpenSiteDetail, onOpenSiteVisit }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSites = SITES_DATA.filter(site => {
    if (activeFilter === "All") return true;
    return site.locationCategory === activeFilter;
  });

  const prayagrajCount = SITES_DATA.filter(s => s.locationCategory === "Prayagraj").length;
  const kaushambiCount = SITES_DATA.filter(s => s.locationCategory === "Kaushambi").length;

  return (
    <section id="sites" className="py-24 bg-[#02050D] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Curated Gated Communities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            Our Landmark Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Prayagraj aur Kaushambi ke sabse prime corridors me fully developed townships with immediate registration.
          </p>

          {/* Luxury Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === 'All'
                  ? 'bg-[#D4AF37] text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                  : 'luxury-glass text-slate-300 border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              All Projects ({SITES_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter("Prayagraj")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === 'Prayagraj'
                  ? 'bg-[#D4AF37] text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                  : 'luxury-glass text-slate-300 border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              Prayagraj Sites ({prayagrajCount})
            </button>
            <button
              onClick={() => setActiveFilter("Kaushambi")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === 'Kaushambi'
                  ? 'bg-[#D4AF37] text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                  : 'luxury-glass text-slate-300 border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              Kaushambi Sites ({kaushambiCount})
            </button>
          </div>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => {
            const percentSold = Math.round((site.plotsSummary.sold / site.plotsSummary.total) * 100);

            return (
              <div
                key={site.id}
                className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Banner Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={site.bannerImage}
                      alt={site.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D20] via-transparent to-black/50" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#081530]/90 backdrop-blur-md text-[#FCE8B2] border border-[#D4AF37]/40 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{site.locationCategory}</span>
                    </div>

                    {/* Premium Status Badge */}
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {site.badge}
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-300 tracking-wider block">
                          Starting At
                        </span>
                        <div className="text-2xl font-display font-black text-[#FCE8B2] drop-shadow-sm">
                          {site.priceDisplay}
                        </div>
                      </div>
                      <span className="text-xs text-slate-200 font-mono font-bold bg-[#030712]/80 px-2.5 py-1 rounded-lg border border-slate-700">
                        {site.sqFtPriceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FCE8B2] transition">
                        {site.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                        <span>{site.subLocation}</span>
                      </p>
                    </div>

                    {/* Inventory Status Bar */}
                    <div className="bg-[#050C1F]/90 p-3.5 rounded-2xl border border-slate-800/80">
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="text-emerald-400 flex items-center gap-1.5 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          {site.plotsSummary.available} Plots Left
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">
                          {percentSold}% Sold ({site.plotsSummary.sold}/{site.plotsSummary.total})
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 via-[#D4AF37] to-amber-500 rounded-full transition-all duration-500" 
                          style={{ width: `${percentSold}%` }}
                        />
                      </div>
                    </div>

                    {/* Distance Connectivity Preview */}
                    <div className="bg-[#050C1F]/50 rounded-2xl p-3 border border-slate-800 text-xs space-y-1.5 text-slate-300">
                      {site.distances.slice(0, 3).map((dist, dIdx) => (
                        <div key={dIdx} className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-400">{dist.place}:</span>
                          <span className="font-bold text-[#FCE8B2] font-mono">{dist.dist} ({dist.time})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => {
                        onSelectSiteForMap(site.id);
                        const el = document.getElementById('live-map');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5" /> Masterplan
                    </button>

                    <button
                      onClick={() => onOpenSiteDetail(site)}
                      className="luxury-glass hover:bg-[#10244D] text-white font-bold py-2.5 rounded-xl text-xs border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> Details
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hello Ar Wishwas Developer LLP, I would like to receive plot pricing and site visit details for ${site.name} (${site.locationCategory}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#050C1F] hover:bg-slate-900 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Inquiry
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
