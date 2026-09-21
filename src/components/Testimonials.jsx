import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/sitesData';
import { Star, Quote, Play, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIdx];

  return (
    <section 
      className="py-24 bg-[#030712] border-b border-[#D4AF37]/20 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Sliding Testimonial Carousel */}
        <div className="relative mb-14">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex text-[#D4AF37] gap-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#D4AF37]/40" />
                  </div>

                  <p className="text-base sm:text-xl text-slate-200 italic leading-relaxed mb-8 font-serif">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-md"
                    />
                    <div>
                      <h4 className="text-base font-display font-bold text-white flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </h4>
                      <p className="text-xs text-[#D4AF37] font-medium">{item.role}</p>
                      <p className="text-[11px] text-slate-400">{item.site}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2.5 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-white transition cursor-pointer"
                      aria-label="Previous Review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2.5 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-white transition cursor-pointer"
                      aria-label="Next Review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
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
