import React from 'react';
import { CORE_AMENITIES } from '../data/sitesData';
import { ShieldCheck, Road, Lightbulb, Droplets, Landmark, Trees, FileCheck, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 bg-[#030712] border-b border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            A-Grade Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            World-Class Gated Society Amenities
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Sirf plot nahi, hum deliver karte hain fully functional VIP gated townships jahan aap aaj hi apna aashiyana bana sakte hain.
          </p>
        </div>

        {/* 3 Cards per row grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_AMENITIES.map((amenity, idx) => (
            <div
              key={amenity.id || idx}
              className="luxury-card rounded-3xl overflow-hidden border border-[#D4AF37]/30 flex flex-col justify-between group hover:border-[#D4AF37]/70 transition duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/30" />
                  
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {amenity.badge || "Verified"}
                  </span>

                  <span className="absolute bottom-3 left-3 bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 100% Implemented
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#FCE8B2] transition">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {amenity.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span className="text-[#D4AF37] font-mono text-[11px]">Quality Tested</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Ready On-Site</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
