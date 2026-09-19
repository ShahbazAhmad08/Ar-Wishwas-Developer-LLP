import React from 'react';
import { ShieldCheck, FileCheck2, Landmark, Check, Award, Lock, Sparkles } from 'lucide-react';

export const TrustBadges = () => {
  const guarantees = [
    {
      icon: FileCheck2,
      title: "100% Legal Title & Revenue Mutation",
      desc: "Completely clear and undisputed land title. Registry is executed directly in the client's name with immediate government revenue mutation guarantee.",
      badge: "Govt. Record Verified"
    },
    {
      icon: ShieldCheck,
      title: "Section 143 / 80 Approved",
      desc: "Officially converted from agricultural to residential non-agricultural status. Complete legal freedom to construct your luxury villa or bungalow.",
      badge: "Non-Agri Residential"
    },
    {
      icon: Landmark,
      title: "Nationalized Bank Finance",
      desc: "Pre-approved plot financing with SBI, Punjab National Bank, HDFC and Bank of Baroda with up to 80% funding assistance at government loan rates.",
      badge: "SBI & PNB Ready"
    },
    {
      icon: Lock,
      title: "Immediate Physical Possession",
      desc: "Demarcated concrete boundary pillars installed upon booking. Receive physical possession with 30-40ft road touch on day one.",
      badge: "Day-One Possession"
    }
  ];

  return (
    <section className="py-20 bg-[#02050D] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Legal Safety Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            Uncompromising Legal Transparency
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Real estate me sabse zaroori hai <strong>Suraksha aur Clear Title</strong>. Hum dete hain certified documents aur on-stamp guarantees.
          </p>
        </div>

        {/* 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="luxury-card rounded-3xl p-6 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#050C1F] text-[#FCE8B2] px-2.5 py-1 rounded-full border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#FCE8B2] transition">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-sans">
                  <Check className="w-4 h-4" /> Legal Guarantee on Stamp
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Developer Banner */}
        <div className="mt-10 luxury-glass rounded-3xl p-5 sm:p-7 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#D4AF37]/20 rounded-2xl text-[#D4AF37] flex-shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-display font-bold text-white">
                Direct Developer Dealing – Zero Brokerage (0% Middlemen Fees)
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Directly interact with LLP partners. Complete registry receipts and legal guidance without any extra agent commission.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20review%20sample%20registry%20and%20Section%20143%20legal%20clearance%20papers."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-[#FCE8B2] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold px-5 py-3 rounded-xl transition flex-shrink-0 cursor-pointer"
          >
            Check Sample Registry Copy
          </a>
        </div>

      </div>
    </section>
  );
};
