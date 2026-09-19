import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITES_DATA, COMPANY_INFO } from '../data/sitesData';
import { MapPin, Compass, Eye, MessageSquare, ArrowRight, Train, Plane, Hospital, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectsPage = ({ onOpenSiteDetail, onOpenSiteVisit }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSites = SITES_DATA.filter(site => {
    if (activeFilter === "All") return true;
    return site.locationCategory === activeFilter;
  });

  const prayagrajCount = SITES_DATA.filter(s => s.locationCategory === "Prayagraj").length;
  const kaushambiCount = SITES_DATA.filter(s => s.locationCategory === "Kaushambi").length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Township Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-3">
            Our Landmark Gated Colonies
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-sans">
            Explore 5 premium plotted townships in Prayagraj & Kaushambi with clear title, bank finance, and immediate possession.
          </p>

          {/* City Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === 'All'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-amber-800'
              }`}
            >
              All Colonies ({SITES_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter("Prayagraj")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === 'Prayagraj'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-amber-800'
              }`}
            >
              Prayagraj Sites ({prayagrajCount})
            </button>
            <button
              onClick={() => setActiveFilter("Kaushambi")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === 'Kaushambi'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-amber-800'
              }`}
            >
              Kaushambi Sites ({kaushambiCount})
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site, idx) => {
            const percentSold = Math.round((site.plotsSummary.sold / site.plotsSummary.total) * 100);

            return (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="luxury-card-bright rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={site.bannerImage}
                      alt={site.name}
                      className="w-full h-full object-cover hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/30" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-slate-200">
                      {site.locationCategory}
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {site.badge}
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-200 block">Starting Rate</span>
                        <div className="text-2xl font-display font-black text-amber-300">
                          {site.priceDisplay}
                        </div>
                      </div>
                      <span className="text-xs bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-700 text-white font-mono">
                        {site.sqFtPriceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-xl font-display font-bold text-slate-900">{site.name}</h2>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{site.subLocation}</span>
                      </p>
                    </div>

                    {/* Inventory Status Bar */}
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="text-emerald-600 flex items-center gap-1.5 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          {site.plotsSummary.available} Plots Open
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          {percentSold}% Sold ({site.plotsSummary.sold}/{site.plotsSummary.total})
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-amber-600 rounded-full transition-all duration-500" 
                          style={{ width: `${percentSold}%` }}
                        />
                      </div>
                    </div>

                    {/* Distance Connectivity Preview */}
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-xs space-y-1.5 text-slate-700">
                      {site.distances.slice(0, 3).map((dist, dIdx) => (
                        <div key={dIdx} className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-500">{dist.place}:</span>
                          <span className="font-bold text-amber-900 font-mono">{dist.dist} ({dist.time})</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-700">
                      <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">80% Bank Loan</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">30ft Road</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Gated Boundary</span>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <Link
                      to={`/plot-map?site=${site.id}`}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <Compass className="w-3.5 h-3.5" /> Live Map
                    </Link>

                    <button
                      onClick={() => onOpenSiteDetail(site)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-600" /> Details
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Namaste, mujhe ${site.name} (${site.locationCategory}) ke plots ki pricing aur available plot numbers bhejein.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Inquiry
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
