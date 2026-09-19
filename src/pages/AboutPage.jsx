import React from 'react';
import { COMPANY_INFO, BANK_PARTNERS } from '../data/sitesData';
import { ShieldCheck, FileCheck2, Landmark, Check, Award, Lock, Users, Building, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage = ({ onOpenSiteVisit }) => {
  const guarantees = [
    {
      icon: FileCheck2,
      title: "100% Revenue Mutation & Legal Title Guarantee",
      desc: "Our land parcels are rigorously verified through UP Revenue Department official records. Registry is executed directly on state stamp papers with immediate revenue mutation into the buyer's name."
    },
    {
      icon: ShieldCheck,
      title: "Section 143 / 80 Residential Cleared",
      desc: "All projects are officially approved for non-agricultural residential purposes under UP Revenue Code. Complete peace of mind for house construction and municipal approvals."
    },
    {
      icon: Landmark,
      title: "Nationalized Bank Loan Approval",
      desc: "State Bank of India, Punjab National Bank, HDFC Bank, and Bank of Baroda have pre-inspected and approved our gated society layouts with up to 80% financing options."
    },
    {
      icon: Lock,
      title: "Day-One Possession & Pillar Demarcation",
      desc: "Concrete demarcation pillars with plot number tagging are installed on spot upon token booking. Full access via 30ft and 40ft wide interlocking roads."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            About Ar Wishwas Developer LLP
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-2">
            Trust • Commitment • Growth
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-sans">
            Leading plotted colony developers in Prayagraj & Kaushambi delivering 100% verified, legal, and gated residential communities.
          </p>
        </div>

        {/* Company Overview Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                Developer Legacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                12+ Years of Unmatched Real Estate Excellence in UP
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                <strong>Ar Wishwas Developer LLP</strong> was founded with a singular mission: to eliminate ambiguities in property purchasing and offer transparent, legally certified, and fully developed gated colony plots in Uttar Pradesh's highest growth corridors.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                With 5 flagship gated projects across Bamrauli Airport, Jhalwa IIIT corridor, Manjhanpur Highway, and Bharwari transit hub, we have handed over immediate registry to 850+ satisfied families with 0% brokerage.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenSiteVisit}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Schedule Site Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 text-slate-800">
              <h3 className="text-base font-display font-bold text-slate-900 border-b border-slate-200 pb-2">
                Corporate Credentials
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Entity:</span>
                  <span className="font-bold text-slate-900">Limited Liability Partnership (LLP)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Operation Regions:</span>
                  <span className="font-bold text-amber-800">Prayagraj & Kaushambi (UP)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Land Bank:</span>
                  <span className="font-bold text-slate-900">90+ Acres Developed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Bank Approvals:</span>
                  <span className="font-bold text-emerald-600">SBI, PNB, HDFC Pre-Approved</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Middlemen Fees:</span>
                  <span className="font-bold text-emerald-600">0% Zero Brokerage</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Legal Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Our 4 Pillars of Buyer Protection
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every plot sold at Ar Wishwas Developer meets rigorous state government standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="luxury-card-bright p-7 rounded-3xl border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-50 text-amber-700 rounded-2xl border border-amber-200 flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-slate-900 mb-1.5">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bank Partners */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Nationalized Banking Tie-Ups
          </span>
          <h3 className="text-xl font-display font-bold text-slate-900">
            Hassle-Free Plot Loan Sanctioning with Top National Banks
          </h3>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {BANK_PARTNERS.map((bank, bIdx) => (
              <div key={bIdx} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-800">
                {bank.name} ({bank.rate})
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
