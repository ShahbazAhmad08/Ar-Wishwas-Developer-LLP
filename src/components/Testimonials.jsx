import React from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/sitesData';
import { Star, Quote, Play, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#030712] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Client Voices & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            Words From Our Plot Owners
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Hear from genuine buyers who purchased plots across Prayagraj and Kaushambi and experienced flawless paperwork.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-3xl p-7 sm:p-8 border border-white/5 hover:border-[#D4AF37]/40 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Quote */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex text-[#D4AF37] gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/30 group-hover:text-[#D4AF37]/70 transition" />
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6 font-sans">
                  "{item.review}"
                </p>
              </div>

              {/* Author Strip */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/60 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] text-[#D4AF37] font-medium">{item.role}</p>
                  <p className="text-[10px] text-slate-400">{item.site}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drone Ground Video Banner */}
        <div className="luxury-glass rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] uppercase font-mono font-bold text-[#D4AF37] tracking-widest">
              Aerial Drone Footage
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Watch Real Drone & Colony Infrastructure Videos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans">
              Visit our YouTube channel to view 4K ground reality walkthroughs of entrance gates, interlocking roads, and boundary progression.
            </p>
          </div>

          <a
            href={COMPANY_INFO.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold px-6 py-3.5 rounded-2xl text-xs sm:text-sm flex items-center gap-2.5 shadow-xl transition"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Drone Videos on YouTube</span>
          </a>
        </div>

      </div>
    </section>
  );
};
