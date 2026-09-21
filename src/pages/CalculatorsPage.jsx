import React, { useState } from 'react';
import { BANK_PARTNERS, ROI_DATA, COMPANY_INFO } from '../data/sitesData';
import { Calculator, Landmark, TrendingUp, MessageSquare, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CalculatorsPage = ({ onOpenSiteVisit }) => {
  const [activeTab, setActiveTab] = useState("emi"); // "emi" or "roi"

  // EMI State
  const [plotAmount, setPlotAmount] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(8.5);

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

  const presets = [
    { label: "₹ 6 Lakh", val: 600000 },
    { label: "₹ 8.5 Lakh", val: 850000 },
    { label: "₹ 12 Lakh", val: 1200000 },
    { label: "₹ 18 Lakh", val: 1800000 },
    { label: "₹ 25 Lakh", val: 2500000 },
  ];

  // ROI State
  const [investAmount, setInvestAmount] = useState(850000);
  const [holdingYears, setHoldingYears] = useState(3);
  const [growthScenario, setGrowthScenario] = useState("optimistic");

  const growthRate = growthScenario === "conservative" ? 0.14 : 0.24;
  const futureValue = Math.round(investAmount * Math.pow(1 + growthRate, holdingYears));
  const estimatedProfit = futureValue - investAmount;
  const growthMultiplier = (futureValue / investAmount).toFixed(2);

  const trajectoryPoints = [1, 2, 3, 4, 5].map(yr => {
    const val = Math.round(investAmount * Math.pow(1 + growthRate, yr));
    return { year: yr, val };
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Financial Studio
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-2">
            Investment & Loan Studio
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-sans">
            Calculate your exact monthly bank installment or project your plot appreciation over 1 to 5 years.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("emi")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border flex items-center gap-2 ${
                activeTab === 'emi'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Plot Loan & EMI Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab("roi")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border flex items-center gap-2 ${
                activeTab === 'roi'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>5-Year Appreciation Predictor</span>
            </button>
          </div>
        </div>

        {/* TAB 1: EMI CALCULATOR */}
        {activeTab === "emi" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
          >
            {/* Quick Presets */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-6 border-b border-slate-100">
              <span className="text-xs text-slate-500 font-semibold mr-1">Quick Budget Presets:</span>
              {presets.map((p) => (
                <button
                  key={p.val}
                  onClick={() => setPlotAmount(p.val)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    plotAmount === p.val
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm scale-105'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-400'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Loan Amount */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Loan Amount (₹):
                    </label>
                    <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-xl px-3 py-1 shadow-sm">
                      <span className="text-xs text-slate-500 font-bold">₹</span>
                      <input
                        type="number"
                        min="100000"
                        max="5000000"
                        step="25000"
                        value={plotAmount}
                        onChange={(e) => setPlotAmount(Math.max(0, Number(e.target.value)))}
                        className="text-sm font-black font-mono text-amber-900 w-32 text-right focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="300000"
                    max="4000000"
                    step="25000"
                    value={plotAmount}
                    onChange={(e) => setPlotAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>₹3 Lakh</span>
                    <span>₹20 Lakh</span>
                    <span>₹40 Lakh</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Down Payment ({downPaymentPercent}%):
                    </label>
                    <span className="text-sm font-black font-display text-emerald-600 font-mono">
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

                {/* Tenure & Interest Rate Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-600">Loan Tenure (Years):</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        step="1"
                        value={tenureYears}
                        onChange={(e) => setTenureYears(Math.max(1, Number(e.target.value)))}
                        className="text-xs font-black text-amber-900 font-mono bg-white border border-slate-300 rounded-lg px-2 py-1 w-16 text-right focus:outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="1"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-600">Interest Rate (% p.a):</label>
                      <input
                        type="number"
                        min="5"
                        max="18"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Math.max(1, Number(e.target.value)))}
                        className="text-xs font-black text-amber-900 font-mono bg-white border border-slate-300 rounded-lg px-2 py-1 w-16 text-right focus:outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min="7.0"
                      max="13.0"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                  </div>
                </div>

                {/* Partner Banks */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Pre-Approved Banking Partners:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {BANK_PARTNERS.map((bank, bIdx) => (
                      <div 
                        key={bIdx}
                        className="bg-slate-50 px-3 py-1.5 rounded-xl text-xs text-slate-700 flex items-center gap-1.5 border border-slate-200"
                      >
                        <Landmark className="w-3.5 h-3.5 text-amber-700" />
                        <span className="font-semibold">{bank.badge}</span>
                        <span className="text-[10px] text-emerald-600 font-mono">({bank.rate})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Result Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-7 rounded-3xl text-center space-y-6 shadow-xl">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    Monthly Loan Installment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-display text-amber-300">
                    ₹ {emi.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-300 font-normal"> / month</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 font-sans">
                    *Estimated at {interestRate}% for {tenureYears} years
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-700 space-y-3">
                  <div className="flex justify-between text-xs font-semibold text-slate-300 font-mono">
                    <span>Principal: ₹{principal.toLocaleString('en-IN')}</span>
                    <span>Interest: ₹{totalInterest.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-300"
                      style={{ width: `${principalPercent}%` }}
                    />
                    <div 
                      className="bg-amber-400 h-full transition-all duration-300"
                      style={{ width: `${interestPercent}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Principal ({principalPercent}%)</span>
                    <span>Interest ({interestPercent}%)</span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 flex justify-between border-t border-slate-700 pt-3">
                  <span>Total Payable:</span>
                  <span className="font-bold text-white font-mono text-sm">₹{totalPayment.toLocaleString('en-IN')}</span>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello Ar Wishwas Developer LLP, I would like guidance on plot bank finance. Plot Budget: ₹${plotAmount.toLocaleString('en-IN')}, Estimated Down Payment: ₹${downPaymentAmount.toLocaleString('en-IN')}, Expected EMI: ₹${emi.toLocaleString('en-IN')}/month.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Apply Bank Loan Assistance on WhatsApp</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}

        {/* TAB 2: ROI PREDICTOR */}
        {activeTab === "roi" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              <div className="lg:col-span-7 space-y-6">
                
                {/* Scenario Toggle */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Appreciation Pace:
                  </span>
                  <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
                    <button
                      onClick={() => setGrowthScenario("conservative")}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        growthScenario === 'conservative' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      Moderate (14%/yr)
                    </button>
                    <button
                      onClick={() => setGrowthScenario("optimistic")}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        growthScenario === 'optimistic' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      Booming (24%/yr)
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Initial Investment:
                    </label>
                    <span className="text-lg font-black font-display text-amber-900">
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

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Holding Years:
                    </label>
                    <span className="text-lg font-black font-display text-emerald-600">
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

                {/* Trajectory Bar Visualizer */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Yearly Valuation Growth Curve:
                  </span>
                  <div className="grid grid-cols-5 gap-2 items-end h-28 pt-2">
                    {trajectoryPoints.map((pt) => {
                      const isCurrent = pt.year === holdingYears;
                      const maxVal = trajectoryPoints[4].val;
                      const heightPercent = Math.round((pt.val / maxVal) * 100);

                      return (
                        <div key={pt.year} className="flex flex-col items-center justify-end h-full">
                          <span className={`text-[9px] font-mono font-bold mb-1 ${isCurrent ? 'text-amber-800' : 'text-slate-400'}`}>
                            {(pt.val / 100000).toFixed(1)}L
                          </span>
                          <div
                            className={`w-full rounded-t-lg transition-all duration-500 ${
                              isCurrent ? 'bg-amber-500 shadow-md' : 'bg-slate-300'
                            }`}
                            style={{ height: `${heightPercent}%` }}
                          />
                          <span className={`text-[10px] mt-1 font-bold ${isCurrent ? 'text-slate-900' : 'text-slate-400'}`}>
                            Y{pt.year}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Output Result Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-7 rounded-3xl text-center space-y-6 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    Projected Portfolio Value
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-display text-amber-300">
                    ₹ {futureValue.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700 text-xs">
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

                <div className="space-y-2 pt-2">
                  <button
                    onClick={onOpenSiteVisit}
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
                  >
                    <span>Schedule Plot Inspection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
