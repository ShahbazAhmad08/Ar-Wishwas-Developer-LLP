import React, { useState } from 'react';
import { SITES_DATA } from '../data/sitesData';
import { MapPin, Navigation, Train, Plane, Hospital, GraduationCap, Car } from 'lucide-react';

export const ConnectivityMatrix = ({ onOpenSiteVisit }) => {
  const [selectedSiteId, setSelectedSiteId] = useState(SITES_DATA[0].id);
  const activeSite = SITES_DATA.find(s => s.id === selectedSiteId) || SITES_DATA[0];

  const getDistanceIcon = (iconName) => {
    switch (iconName) {
      case 'Plane': return Plane;
      case 'Train':
      case 'TrainTrack': return Train;
      case 'Hospital': return Hospital;
      case 'GraduationCap': return GraduationCap;
      case 'Car': return Car;
      default: return MapPin;
    }
  };

  return (
    <section id="connectivity" className="py-24 bg-[#02050D] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Connectivity Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            Strategic Location & Distance Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Har project ko choose karte waqt humne seamless connectivity aur travel time ko primary importance di hai.
          </p>
        </div>

        {/* Site Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          {SITES_DATA.map((site) => {
            const isSelected = site.id === selectedSiteId;
            return (
              <button
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#D4AF37] text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                    : 'luxury-glass text-slate-300 border-white/5 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                {site.name} ({site.locationCategory})
              </button>
            );
          })}
        </div>

        {/* Distance Matrix Table/Cards */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/35 shadow-2xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                Selected Colony
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-0.5">{activeSite.name}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {activeSite.subLocation}
              </p>
            </div>
            
            <button
              onClick={onOpenSiteVisit}
              className="bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" /> Schedule Route Inspection Visit
            </button>
          </div>

          {/* Grid of Distance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeSite.distances.map((dist, idx) => {
              const IconComp = getDistanceIcon(dist.icon);
              return (
                <div
                  key={idx}
                  className="bg-[#050C1F]/90 rounded-2xl p-4 border border-slate-800 hover:border-[#D4AF37]/40 transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1A38] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{dist.place}</h4>
                      <span className="text-[11px] text-emerald-400 font-semibold">{dist.time} drive</span>
                    </div>
                  </div>
                  <div className="text-right font-mono font-black text-[#FCE8B2] text-sm">
                    {dist.dist}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Connectivity Note */}
          <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>🚗 30ft/40ft wide concrete connecting roads right from highway to colony entrance.</span>
            <span className="text-emerald-400 font-semibold font-mono">✓ High frequency e-rickshaws, cabs & buses</span>
          </div>
        </div>

      </div>
    </section>
  );
};
