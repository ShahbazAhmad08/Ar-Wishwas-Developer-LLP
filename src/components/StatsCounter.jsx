import React from 'react';
import { COMPANY_INFO } from '../data/sitesData';
import { Users, CheckCircle, Map, Landmark, Award } from 'lucide-react';

export const StatsCounter = () => {
  const stats = [
    {
      label: "Happy Families",
      value: COMPANY_INFO.stats.happyFamilies,
      sub: "Homeowners & Investors",
      icon: Users,
      color: "gold-metallic-text"
    },
    {
      label: "Plots Delivered",
      value: COMPANY_INFO.stats.plotsDelivered,
      sub: "Immediate Possession",
      icon: CheckCircle,
      color: "text-emerald-400"
    },
    {
      label: "Land Developed",
      value: COMPANY_INFO.stats.acresDeveloped,
      sub: "Across 5 Gated Projects",
      icon: Map,
      color: "text-blue-400"
    },
    {
      label: "Bank Approvals",
      value: COMPANY_INFO.stats.bankApprovals,
      sub: "SBI, HDFC, PNB, BOB",
      icon: Landmark,
      color: "text-[#FCE8B2]"
    },
    {
      label: "Track Record",
      value: COMPANY_INFO.stats.yearsExperience,
      sub: "Unblemished Legacy",
      icon: Award,
      color: "gold-metallic-text"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="luxury-glass rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-[#D4AF37]/30">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''} text-center md:text-left`}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <div className="p-1.5 rounded-xl bg-[#0B1A38] border border-[#D4AF37]/30 text-[#D4AF37]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                </div>
                <div className={`text-2xl sm:text-3xl font-display font-black tracking-tight ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-medium font-sans">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
