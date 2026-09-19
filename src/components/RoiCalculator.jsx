import React, { useState } from 'react';
import { ROI_DATA, COMPANY_INFO } from '../data/sitesData';
import { TrendingUp, Sparkles, Building2, Plane, Compass, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';

export const RoiCalculator = ({ onOpenSiteVisit }) => {
  const [investAmount, setInvestAmount] = useState(850000);
  const [holdingYears, setHoldingYears] = useState(3);
  const [growthScenario, setGrowthScenario] = useState("optimistic"); // conservative (14%) vs optimistic (24%)

  const growthRate = growthScenario === "conservative" ? 0.14 : 0.24;

  // Compound Interest: A = P * (1 + r)^t
  const futureValue = Math.round(investAmount * Math.pow(1 + growthRate, holdingYears));
  const estimatedProfit = futureValue - investAmount;
  const growthMultiplier = (futureValue / investAmount).toFixed(2);

  // Growth trajectory points for 1 to 5 years
  const trajectoryPoints = [1, 2, 3, 4, 5].map(yr => {
    const val = Math.round(investAmount * Math.pow(1 + growthRate, yr));
    return { year: yr, val };
  });

  return (
    <section id="roi" className="py-24 bg-[#020611] border-b border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Wealth Creation & ROI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            Real Estate Appreciation Horizon
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Mahakumbh infrastructure, Bamrauli Airport expansion aur Outer Ring Road bypass se plot ki keemat ka projected return dekhein.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ROI Simulator (6 cols) */}
          <div className="lg:col-span-6 luxury-card rounded-3xl p-6 sm:p-9 border border-[#D4AF37]/35 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Scenario Toggle */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Growth Rate Scenario:
                </span>
                <div className="flex bg-[#050C1F] p-1 rounded-xl border border-slate-800 text-xs font-bold">
                  <button
                    onClick={() => setGrowthScenario("conservative")}
                    className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                      growthScenario === 'conservative' ? 'bg-[#10244D] text-[#FCE8B2] border border-[#D4AF37]/30 shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Moderate (14%/yr)
                  </button>
                  <button
                    onClick={() => setGrowthScenario("optimistic")}
                    className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                      growthScenario === 'optimistic' ? 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Booming (24%/yr)
                  </button>
                </div>
              </div>

              {/* Initial Investment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Initial Plot Investment:
                  </label>
                  <span className="text-lg font-black font-display text-[#FCE8B2]">
                    ₹ {investAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="400000"
                  max="3500000"
                  step="50000"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>₹4 Lakh</span>
                  <span>₹15 Lakh</span>
                  <span>₹35 Lakh</span>
                </div>
              </div>

              {/* Holding Years Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Holding Horizon (Timeline):
                  </label>
                  <span className="text-lg font-black font-display text-emerald-400">
                    {holdingYears} {holdingYears === 1 ? 'Year' : 'Years'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={holdingYears}
                  onChange={(e) => setHoldingYears(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>1 Year</span>
                  <span>3 Years</span>
                  <span>5 Years</span>
                </div>
              </div>

              {/* Visual Trajectory Bar Chart */}
              <div className="bg-[#050C1F]/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Projected Yearly Valuation Trajectory:
                </span>
                <div className="grid grid-cols-5 gap-2 items-end h-24 pt-2">
                  {trajectoryPoints.map((pt) => {
                    const isCurrent = pt.year === holdingYears;
                    const maxVal = trajectoryPoints[4].val;
                    const heightPercent = Math.round((pt.val / maxVal) * 100);

                    return (
                      <div key={pt.year} className="flex flex-col items-center justify-end h-full">
                        <span className={`text-[9px] font-mono font-bold mb-1 ${isCurrent ? 'text-amber-300' : 'text-slate-500'}`}>
                          {(pt.val / 100000).toFixed(1)}L
                        </span>
                        <div
                          className={`w-full rounded-t-lg transition-all duration-500 ${
                            isCurrent 
                              ? 'bg-gradient-to-t from-[#D4AF37] to-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.6)]' 
                              : 'bg-slate-800'
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        />
                        <span className={`text-[10px] mt-1 font-bold ${isCurrent ? 'text-white' : 'text-slate-500'}`}>
                          Y{pt.year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Results Display */}
              <div className="bg-gradient-to-br from-[#0C1B3A] to-[#050B18] rounded-2xl p-5 border border-[#D4AF37]/35 space-y-3 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Projected Portfolio Value:</span>
                  <span className="text-2xl sm:text-3xl font-black font-display gold-metallic-text">
                    ₹ {futureValue.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Net Expected Gain</span>
                    <span className="text-base font-black text-emerald-400 block font-mono">
                      + ₹ {estimatedProfit.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Capital Multiple</span>
                    <span className="text-base font-black text-amber-300 block font-mono">
                      {growthMultiplier}x Return
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-6">
              <button
                onClick={onOpenSiteVisit}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
              >
                <span>Reserve High-Appreciation Plot Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Infrastructure Growth Drivers (6 cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="p-4 bg-[#0B1A38]/60 rounded-2xl border border-[#D4AF37]/25">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  What Drives Prayagraj & Kaushambi Real Estate?
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  UP Government aur Central Infrastructure investment se dono districts me property rates rapid speed se badh rahe hain:
                </p>
              </div>

              {ROI_DATA.growthDrivers.map((driver, idx) => (
                <div 
                  key={idx}
                  className="luxury-glass p-4 rounded-2xl border border-white/5 hover:border-[#D4AF37]/40 transition group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#FCE8B2] transition">
                        {driver.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {driver.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Advice Pill */}
            <div className="p-4 luxury-glass rounded-2xl border border-amber-500/20 text-xs text-slate-300 flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-xl text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <p>
                <strong>Pro-Tip:</strong> Bamrauli Airport corridor (Wishwas Green City) aur Highway direct-touch projects me maximum annual rental and capital growth recorded hai.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
