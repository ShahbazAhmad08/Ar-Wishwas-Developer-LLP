import React from 'react';
import { CORE_AMENITIES } from '../data/sitesData';
import { ShieldCheck, Road, Lightbulb, Droplets, Landmark, Trees, FileCheck, Building2, Sparkles, CheckCircle } from 'lucide-react';

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

        {/* Bento Grid Layout (8 items, asymmetric style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: VIP Grand Gate (Span 2 on lg) */}
          <div className="lg:col-span-2 luxury-card rounded-3xl p-7 border border-[#D4AF37]/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#D4AF37] tracking-wider block mb-1">
                Security & Access
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Grand Security Arch & Boom Barrier Gate
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                24x7 armed guard security, boom barrier access control, and HD night-vision CCTV surveillance for complete family peace of mind.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> 100% Operational</span>
              <span className="text-slate-400 font-mono text-[10px]">Guard Cabin On-Site</span>
            </div>
          </div>

          {/* Card 2: 30ft & 40ft Roads */}
          <div className="luxury-card rounded-3xl p-6 border border-[#D4AF37]/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                <Road className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#D4AF37] tracking-wider block mb-1">
                Connectivity
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Heavy-Duty Interlocking Paver Roads
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                40ft wide main dividing boulevard and 30ft internal cross lanes for effortless two-way four-wheeler movement.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> High Load Capacity
            </div>
          </div>

          {/* Card 3: Street Lighting */}
          <div className="luxury-card rounded-3xl p-6 border border-[#D4AF37]/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                <Lightbulb className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#D4AF37] tracking-wider block mb-1">
                Electricity
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Transformers & LED Street Lights
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated society transformers, high-illumination solar & electric LED poles, and underground cable conduit setup.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> 24/7 Power Backup
            </div>
          </div>

          {/* Card 4: Water & Drainage */}
          <div className="luxury-card rounded-3xl p-6 border border-[#D4AF37]/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#D4AF37] tracking-wider block mb-1">
                Utilities
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Submersible Borewell & Covered Nali
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Central sweet drinking water line along with pucca underground stormwater & sewage drainage system.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Zero Waterlogging
            </div>
          </div>

          {/* Card 5: Gated Boundary Wall */}
          <div className="luxury-card rounded-3xl p-6 border border-[#D4AF37]/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#D4AF37] tracking-wider block mb-1">
                Enclosure
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                7ft Outer Boundary Wall
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete perimeter boundary wall with barbed wire crest ensuring no external encroachment ever.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> 100% Boundary Enclosed
            </div>
          </div>

          {/* Card 6: Landscaped Green Park (Span 2 on lg) */}
          <div className="lg:col-span-2 luxury-card rounded-3xl p-7 border border-[#D4AF37]/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                <Trees className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                Eco Living & Lifestyle
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Landscaped Green Park & Sacred Temple Zone
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                1.5 acres of designated green belt with walking tracks, flowering trees, children's play swings, and community sitting gazebo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Healthy Air Quality</span>
              <span className="text-slate-400 font-mono text-[10px]">Open Green Space</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
