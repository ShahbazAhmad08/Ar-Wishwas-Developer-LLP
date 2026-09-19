import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/sitesData';
import { X, MapPin, CheckCircle, Train, Plane, Hospital, Building, Calendar, MessageSquare, Phone, Compass } from 'lucide-react';

export const SiteDetailModal = ({ site, onClose, onSelectSiteForMap, onOpenSiteVisit }) => {
  if (!site) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const allImages = [site.bannerImage, ...(site.gallery || [])];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#09152E] via-[#050C1F] to-[#02050E] border border-[#D4AF37]/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#030712]/80 hover:bg-[#030712] text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Gallery Slider */}
        <div className="relative h-72 sm:h-88 bg-slate-950">
          <img
            src={allImages[activeImageIndex]}
            alt={site.name}
            className="w-full h-full object-cover transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050C1F] via-transparent to-black/60" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-3">
            <div>
              <span className="bg-[#D4AF37] text-slate-950 text-xs font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {site.locationCategory} Gated Township
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1.5">
                {site.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                {site.subLocation}
              </p>
            </div>

            <div className="luxury-glass p-3.5 rounded-2xl border border-[#D4AF37]/35 text-right">
              <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Rate Per Sq.Yard</span>
              <span className="text-2xl font-black font-display text-[#FCE8B2]">{site.priceDisplay}</span>
              <span className="text-xs text-slate-300 block font-mono">{site.sqFtPriceDisplay}</span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex gap-2.5 p-3.5 bg-[#030712] overflow-x-auto border-b border-slate-800">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`h-14 w-22 rounded-xl overflow-hidden flex-shrink-0 border-2 transition cursor-pointer ${
                  activeImageIndex === idx ? 'border-[#D4AF37] scale-105 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto font-sans">
          
          {/* Layout Description */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-wider mb-1.5">
              Township Architecture
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {site.layoutDescription}
            </p>
          </div>

          {/* Infrastructure Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-wider mb-2.5">
              Infrastructure Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {site.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#050C1F] p-3 rounded-2xl border border-slate-800 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distance Matrix */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-wider mb-2.5">
              Strategic Connectivity
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {site.distances.map((dist, idx) => (
                <div key={idx} className="bg-[#050C1F] p-3 rounded-2xl border border-slate-800 text-xs flex justify-between items-center">
                  <span className="text-slate-300">{dist.place}</span>
                  <div className="text-right font-mono">
                    <span className="font-bold text-[#FCE8B2] block">{dist.dist}</span>
                    <span className="text-[10px] text-slate-400">{dist.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Snapshot */}
          <div className="bg-[#050C1F] rounded-2xl p-4 border border-slate-800 flex flex-wrap justify-between items-center gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-bold">Current Plot Availability</span>
              <span className="text-sm font-bold text-white">
                Total Plots: {site.plotsSummary.total} | Sold: <span className="text-rose-400 font-bold">{site.plotsSummary.sold}</span> | Available: <span className="text-emerald-400 font-bold">{site.plotsSummary.available}</span>
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectSiteForMap(site.id);
                const el = document.getElementById('live-map');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition shadow cursor-pointer"
            >
              <Compass className="w-4 h-4" /> Open Masterplan Layout
            </button>
          </div>

        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-5 bg-[#030712] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 font-sans">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Senior Director Hotline: <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong></span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenSiteVisit();
              }}
              className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow transition cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Free Cab Visit
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
