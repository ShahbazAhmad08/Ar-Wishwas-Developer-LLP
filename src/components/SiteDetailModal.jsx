import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/sitesData';
import { X, MapPin, CheckCircle, Calendar, MessageSquare, Phone, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SiteDetailModal = ({ site, onClose, onSelectSiteForMap, onOpenSiteVisit }) => {
  if (!site) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const allImages = [site.bannerImage, ...(site.gallery || [])];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[88vh] flex flex-col bg-[#050C1F] border border-amber-400/40 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        
        {/* Prominent High-Contrast Close Button - Always Visible */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-2.5 rounded-full bg-white text-slate-950 hover:bg-amber-400 hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-2 border-white/80 transition-all cursor-pointer flex items-center justify-center group"
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 text-slate-950 group-hover:rotate-90 transition-transform stroke-[2.5]" />
        </button>

        {/* Hero Gallery Slider - Compact Height */}
        <div className="relative h-44 sm:h-56 bg-slate-950 flex-shrink-0 overflow-hidden">
          <img
            src={allImages[activeImageIndex]}
            alt={site.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050C1F] via-black/30 to-black/60 pointer-events-none" />
          
          <div className="absolute bottom-3 left-4 right-16 sm:left-6 sm:bottom-4 flex flex-wrap justify-between items-end gap-3 pointer-events-none">
            <div>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {site.locationCategory} Gated Township
              </span>
              <h2 className="text-xl sm:text-3xl font-display font-bold text-white mt-1 leading-tight">
                {site.name}
              </h2>
              <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5 font-sans">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{site.subLocation}</span>
              </p>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-400/40 text-right hidden sm:block">
              <span className="text-[9px] text-amber-300 uppercase font-mono font-bold block">Starting Rate</span>
              <span className="text-lg font-black font-display text-amber-300">{site.priceDisplay}</span>
              <span className="text-[10px] text-slate-300 block font-mono">{site.sqFtPriceDisplay}</span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex gap-2 px-4 py-2 bg-[#02050E] overflow-x-auto border-b border-slate-800 flex-shrink-0 scrollbar-none">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`h-10 sm:h-12 w-16 sm:w-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition cursor-pointer ${
                  activeImageIndex === idx ? 'border-amber-400 scale-105 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body - Scrollable Area */}
        <div className="flex-grow overflow-y-auto p-5 sm:p-7 space-y-5 font-sans min-h-0">
          
          {/* Mobile Pricing Strip */}
          <div className="sm:hidden bg-slate-900/80 p-3 rounded-xl border border-amber-400/30 flex justify-between items-center">
            <span className="text-xs text-slate-300">Starting Price:</span>
            <span className="text-base font-black text-amber-300 font-display">{site.priceDisplay}</span>
          </div>

          {/* Layout Description */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Township Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {site.layoutDescription}
            </p>
          </div>

          {/* Infrastructure Specifications */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Infrastructure Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {site.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-2xl border border-slate-800 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distance Matrix */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Strategic Connectivity
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {site.distances.map((dist, idx) => (
                <div key={idx} className="bg-slate-900/70 p-3 rounded-2xl border border-slate-800 text-xs flex justify-between items-center">
                  <span className="text-slate-300">{dist.place}</span>
                  <div className="text-right font-mono">
                    <span className="font-bold text-amber-300 block">{dist.dist}</span>
                    <span className="text-[10px] text-slate-400">{dist.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Snapshot */}
          <div className="bg-slate-900/90 rounded-2xl p-4 border border-amber-400/20 flex flex-wrap justify-between items-center gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-bold">Current Plot Availability</span>
              <span className="text-xs sm:text-sm font-bold text-white">
                Total Plots: {site.plotsSummary.total} | Sold: <span className="text-rose-400 font-bold">{site.plotsSummary.sold}</span> | Available: <span className="text-emerald-400 font-bold">{site.plotsSummary.available}</span>
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onSelectSiteForMap) onSelectSiteForMap(site.id);
                window.location.href = `/plot-map?site=${site.id}`;
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition shadow cursor-pointer"
            >
              <Compass className="w-4 h-4" /> Open Masterplan Layout
            </button>
          </div>

        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-4 sm:p-5 bg-[#02050E] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 font-sans flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Senior Director: <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong></span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                if (onOpenSiteVisit) onOpenSiteVisit();
              }}
              className="btn-sheen bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Schedule Site Visit
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Namaste, mujhe ${site.name} ka brochure, price sheet aur plot map bhejein.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow transition"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Brochure
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
