import React, { useState } from 'react';
import { BANK_PARTNERS, COMPANY_INFO } from '../data/sitesData';
import { Calculator, Landmark, Sparkles, Check, MessageSquare, ArrowRight, IndianRupee, PieChart } from 'lucide-react';

export const EmiCalculator = ({ onOpenSiteVisit }) => {
  const [plotAmount, setPlotAmount] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(8.5);

  // Calculations
  const downPaymentAmount = Math.round((plotAmount * downPaymentPercent) / 100);
  const principal = plotAmount - downPaymentAmount;
  const monthlyRate = (interestRate / 12) / 100;
  const totalMonths = tenureYears * 12;

  const emi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;
  const principalPercent = Math.round((principal / totalPayment) * 100) || 0;
  const interestPercent = 100 - principalPercent;

  // Preset buttons
  const presets = [
    { label: "₹ 6 Lakh", val: 600000 },
    { label: "₹ 8.5 Lakh", val: 850000 },
    { label: "₹ 12 Lakh", val: 1200000 },
    { label: "₹ 18 Lakh", val: 1800000 },
    { label: "₹ 25 Lakh", val: 2500000 },
  ];

  return (
    <section id="calculator" className="py-24 bg-[#030712] border-b border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#FCE8B2] border border-[#D4AF37]/35 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Finance & EMI Studio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4">
            Interactive Plot Loan Studio
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
            Customize your plot down payment and tenure with pre-sanctioned nationalized bank finance up to 80%.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-400 font-semibold mr-1">Quick Presets:</span>
            {presets.map((p) => (
              <button
                key={p.val}
                onClick={() => setPlotAmount(p.val)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  plotAmount === p.val
                    ? 'bg-[#D4AF37] text-slate-950 border-amber-300 shadow-md scale-105'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Card */}
        <div className="max-w-5xl mx-auto luxury-card rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Plot Price Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Plot Valuation
                  </label>
                  <span className="text-lg font-black font-display text-[#FCE8B2]">
                    ₹ {plotAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="400000"
                  max="4000000"
                  step="25000"
                  value={plotAmount}
                  onChange={(e) => setPlotAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>₹4 Lakh</span>
                  <span>₹20 Lakh</span>
                  <span>₹40 Lakh</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Down Payment ({downPaymentPercent}%)
                  </label>
                  <span className="text-lg font-black font-display text-emerald-400">
                    ₹ {downPaymentAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>10% (Min)</span>
                  <span>20% (Suggested)</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Tenure & Rate Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Tenure Slider */}
                <div className="bg-[#050C1F]/90 p-4 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-400">Tenure (Years):</label>
                    <span className="text-sm font-black text-[#D4AF37] font-mono">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>1 Yr</span>
                    <span>15 Yrs</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="bg-[#050C1F]/90 p-4 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-400">Bank Rate (% p.a):</label>
                    <span className="text-sm font-black text-[#D4AF37] font-mono">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="12.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>7.5% (SBI)</span>
                    <span>12.0%</span>
                  </div>
                </div>

              </div>

              {/* Partner Banks Strip */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">
                  Tie-up Banks & Rates:
                </span>
                <div className="flex flex-wrap gap-2">
                  {BANK_PARTNERS.map((bank, bIdx) => (
                    <div 
                      key={bIdx}
                      className="luxury-glass px-3 py-1.5 rounded-xl text-xs text-slate-300 flex items-center gap-2 border border-slate-700/80"
                    >
                      <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="font-semibold">{bank.badge}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">({bank.rate})</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Results & Visual Gauge Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0E2045] to-[#060D1F] p-7 rounded-3xl border border-[#D4AF37]/45 text-center space-y-6 shadow-2xl">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                  Estimated Monthly Installment
                </span>
                <div className="text-3xl sm:text-4xl font-black font-display gold-metallic-text">
                  ₹ {emi.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-300 font-normal font-sans"> / month</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  *Calculated at {interestRate}% rate for {tenureYears} years
                </p>
              </div>

              {/* Visual Breakdown Progress Bar */}
              <div className="bg-[#030712]/70 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-slate-300 font-mono">
                  <span>Loan: <b>₹{principal.toLocaleString('en-IN')}</b></span>
                  <span>Interest: <b>₹{totalInterest.toLocaleString('en-IN')}</b></span>
                </div>

                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
                    style={{ width: `${principalPercent}%` }}
                    title={`Principal ${principalPercent}%`}
                  />
                  <div 
                    className="bg-gradient-to-r from-[#D4AF37] to-amber-500 h-full transition-all duration-300"
                    style={{ width: `${interestPercent}%` }}
                    title={`Interest ${interestPercent}%`}
                  />
                </div>

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Principal ({principalPercent}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Total Interest ({interestPercent}%)
                  </span>
                </div>
              </div>

              {/* Total Summary */}
              <div className="text-xs text-slate-300 flex justify-between border-t border-slate-800 pt-3">
                <span>Total Payable Amount:</span>
                <span className="font-bold text-white font-mono text-sm">₹{totalPayment.toLocaleString('en-IN')}</span>
              </div>

              {/* WhatsApp Bank Assistance Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  `Namaste, mujhe plot bank loan ke baare me assistance chahiye. Plot Budget: ₹${plotAmount.toLocaleString('en-IN')}, Down Payment: ₹${downPaymentAmount.toLocaleString('en-IN')}, Expected EMI: ₹${emi.toLocaleString('en-IN')}/month.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#B48316] hover:from-[#FCE8B2] hover:to-[#D4AF37] text-slate-950 font-extrabold py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Apply Bank Finance on WhatsApp</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
