import React, { useState } from 'react';
import { COMPANY_INFO, BANK_PARTNERS } from '../data/sitesData';
import { ShieldCheck, FileCheck2, Landmark, Check, Award, Lock, FileText, CheckCircle2, ArrowRight, Sparkles, MapPin, Eye, Download, MessageSquare, ShieldAlert, Stamp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutPage = ({ onOpenSiteVisit }) => {
  const [activeDoc, setActiveDoc] = useState(0);

  const legalDocuments = [
    {
      id: "sec143",
      title: "Section 143 Non-Agricultural Conversion Order",
      authority: "UP Revenue Department & Sub-Divisional Magistrate (SDM)",
      badge: "Govt. Approved Residential Land",
      certNumber: "UP-REV/2024/SEC143-CLR/PRG",
      sealText: "OFFICIALLY CONVERTED • 100% RESIDENTIAL",
      desc: "Formal conversion from agricultural to non-agricultural residential category under UP Revenue Code Section 143 / 80. Enables immediate map sanction and residential villa construction without penalty.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "100% Safe from Government acquisition",
        "Clear freehold residential status",
        "Eligible for immediate house electricity & water connection"
      ]
    },
    {
      id: "registry",
      title: "Direct Registered Sale Deed on Stamp Paper",
      authority: "Sub-Registrar Office, Govt. of Uttar Pradesh",
      badge: "100% Stamp Duty Cleared",
      certNumber: "REG-DEED/PRG-KSH/LLP-2025",
      sealText: "SUB-REGISTRAR VERIFIED • DIRECT TITLE",
      desc: "Registry executed directly in the client's name on official UP Government stamp papers with biometric fingerprinting, official seal, and computerized record entry.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Direct developer-to-buyer conveyance deed",
        "Zero middleman or third-party encumbrance",
        "Original registered deed handed over upon registration"
      ]
    },
    {
      id: "khatauni",
      title: "Online Khatauni & Khasra Revenue Mutation",
      authority: "UP Bhulekh Official Digital Portal",
      badge: "Online Record Updated",
      certNumber: "BHULEKH-UP/MUTATION/VERIFIED-100",
      sealText: "100% NAME MUTATION GUARANTEE",
      desc: "Immediate online revenue mutation (Dakhil-Kharij) into the buyer's name. You can verify your plot ownership 24/7 on the official UP Bhulekh portal using the Khasra number.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "100% undisputed ancestral & corporate clear title",
        "Online verification on upbhulekh.gov.in portal",
        "Official Parivar/Khatauni copy generated directly"
      ]
    },
    {
      id: "bank-noc",
      title: "Nationalized Bank Project Approval & Pre-Sanction",
      authority: "State Bank of India (SBI) & Punjab National Bank (PNB)",
      badge: "Up to 80% Loan Approved",
      certNumber: "SBI-RE/PRG/PROJECT-APPR-2024",
      sealText: "PRE-SANCTIONED BANK LOANS",
      desc: "All layout maps, title deeds, and 30ft/40ft road networks have been pre-screened and approved by legal panels of nationalized banks for instant plot loan disbursement.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Up to 80% bank financing at attractive rates",
        "Pre-vetted legal documentation by bank advocates",
        "Flexible 10 to 15 years repayment options"
      ]
    }
  ];

  const guarantees = [
    {
      title: "100% Revenue Mutation & Legal Title Guarantee",
      desc: "Our land parcels are rigorously verified through UP Revenue Department official records. Registry is executed directly on state stamp papers with immediate revenue mutation into the buyer's name.",
      badge: "Online Verifiable",
      image: "/facilities/legal.jfif",
      tag: "Stamp Paper Deed"
    },
    {
      title: "Section 143 / 80 Residential Cleared",
      desc: "All projects are officially approved for non-agricultural residential purposes under UP Revenue Code. Complete peace of mind for house construction and municipal approvals.",
      badge: "Non-Agri Approved",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      tag: "Govt Order 143"
    },
    {
      title: "Nationalized Bank Loan Approval",
      desc: "State Bank of India, Punjab National Bank, HDFC Bank, and Bank of Baroda have pre-inspected and approved our gated society layouts with up to 80% financing options.",
      badge: "Pre-Inspected",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      tag: "SBI / PNB Sanction"
    },
    {
      title: "Day-One Possession & Pillar Demarcation",
      desc: "Concrete demarcation pillars with plot number tagging are installed on spot upon token booking. Full access via 30ft and 40ft wide interlocking roads.",
      badge: "Physical Possession",
      image: "/facilities/road1.jfif",
      tag: "Boundary Pillars & 40ft Road"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Plot Selection & On-Spot Demarcation",
      desc: "Visit the site, select your preferred plot, and get concrete boundary pillars installed in your presence."
    },
    {
      step: "02",
      title: "Legal Title & Khasra Document Verification",
      desc: "Review original 143 order, Khatauni revenue records, and bank NOC papers with your personal legal advisor."
    },
    {
      step: "03",
      title: "Bank Loan Sanction & Agreement",
      desc: "Avail up to 80% plot financing assistance with SBI/PNB with fast pre-approved disbursement."
    },
    {
      step: "04",
      title: "Registry on Stamp Paper & Online Mutation",
      desc: "Execution of official sale deed at Sub-Registrar office with instant digital revenue mutation in your name."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Legal Transparency & Buyer Protection
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-2">
            100% Verified Legal Land Records
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-sans">
            Every plot at Ar Wishwas Developer LLP is 100% freehold, Section 143 non-agricultural converted, with immediate registry and bank loan pre-approvals.
          </p>
        </div>

        {/* 1. INTERACTIVE GOVERNMENT DOCUMENT VERIFICATION STUDIO */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-400/30 text-white shadow-2xl mb-16 relative overflow-hidden">
          
          <div className="relative z-10">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-700/80 gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Official Record Verification Center
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Government Certification & Paperwork Dossier
                </h2>
              </div>

              {/* WhatsApp Request Action */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to review your complete legal dossier (Section 143 clearance, sample registry, and bank loan approvals).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black px-5 py-3 rounded-xl text-xs flex items-center gap-2 shadow-lg transition flex-shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Sample Registry PDF</span>
              </a>
            </div>

            {/* Document Switcher Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {legalDocuments.map((doc, idx) => (
                <button
                  key={doc.id}
                  onClick={() => setActiveDoc(idx)}
                  className={`p-3.5 rounded-2xl text-left transition cursor-pointer border flex flex-col justify-between ${
                    activeDoc === idx
                      ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-lg scale-102'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-amber-400/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <FileText className={`w-5 h-5 ${activeDoc === idx ? 'text-slate-950' : 'text-amber-400'}`} />
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${activeDoc === idx ? 'bg-slate-950 text-amber-300' : 'bg-slate-900 text-slate-300'}`}>
                      Doc 0{idx + 1}
                    </span>
                  </div>
                  <div className="font-bold text-xs line-clamp-1">{doc.title}</div>
                  <div className={`text-[10px] mt-1 ${activeDoc === idx ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>{doc.badge}</div>
                </button>
              ))}
            </div>

            {/* Active Document Mockup Viewer */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDoc}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800"
              >
                
                {/* Visual Stamp Certificate Card (Left 6 cols) */}
                <div className="lg:col-span-6 relative">
                  <div className="relative bg-[#FFFDF5] text-slate-900 p-6 sm:p-8 rounded-2xl border-4 border-amber-700/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)] font-serif overflow-hidden">
                    
                    {/* Watermark Emblem */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                      <ShieldCheck className="w-80 h-80 text-slate-950" />
                    </div>

                    {/* Official Stamp Ribbon */}
                    <div className="border-b-2 border-amber-800/40 pb-4 mb-4 text-center">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-amber-900 font-bold">
                        GOVERNMENT OF UTTAR PRADESH • REVENUE DIVISION
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mt-1 uppercase tracking-wide">
                        {legalDocuments[activeDoc].title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-600 mt-0.5">
                        Issuing Authority: {legalDocuments[activeDoc].authority}
                      </div>
                    </div>

                    {/* Document Meta */}
                    <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-xs space-y-1.5 font-sans mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">Record Ref No:</span>
                        <span className="font-mono font-bold text-amber-950">{legalDocuments[activeDoc].certNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">Clearance Status:</span>
                        <span className="font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 100% Legally Certified
                        </span>
                      </div>
                    </div>

                    {/* Red Official Seal Badge */}
                    <div className="flex items-center justify-between pt-2 border-t border-amber-800/30">
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-rose-600 flex flex-col items-center justify-center text-center text-rose-700 p-1 rotate-[-6deg] shadow-sm bg-rose-50/40">
                        <span className="text-[7px] font-mono uppercase font-black">OFFICIAL SEAL</span>
                        <Check className="w-4 h-4 text-rose-700 my-0.5" />
                        <span className="text-[6px] font-bold">VERIFIED & SIGNED</span>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] font-sans font-bold text-slate-800 uppercase">Ar Wishwas Developer LLP</div>
                        <div className="text-[9px] text-slate-500 font-sans">Authorized Managing Partner</div>
                        <div className="text-[8px] font-mono text-emerald-700 mt-0.5">● Digitally Encrypted & Sealed</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Details & Highlights (Right 6 cols) */}
                <div className="lg:col-span-6 space-y-4 font-sans">
                  <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{legalDocuments[activeDoc].sealText}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {legalDocuments[activeDoc].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {legalDocuments[activeDoc].desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                      Guaranteed Highlights:
                    </span>
                    {legalDocuments[activeDoc].highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenSiteVisit}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow cursor-pointer transition"
                    >
                      <span>Verify Papers on Site Visit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* 2. 4 PILLARS OF BUYER PROTECTION */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Our 4 Pillars of Buyer Protection
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every plot sold at Ar Wishwas Developer meets rigorous Uttar Pradesh state government compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="luxury-card-bright p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  {/* Real Document / Verification Image replacing icon/logo */}
                  <div className="relative w-full sm:w-28 h-36 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-md flex-shrink-0 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent sm:hidden" />
                    <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-amber-300 bg-slate-900/80 px-1.5 py-0.5 rounded sm:hidden">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-display font-bold text-slate-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                    {item.tag && (
                      <span className="hidden sm:inline-block mt-2.5 text-[10px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-600">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> 100% Certified on Paper</span>
                  <span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[10px]">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. STEP-BY-STEP LEGAL PURCHASE WORKFLOW */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Clear & Transparent Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2">
              4-Step Flawless Possession Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Zero ambiguity. Every stage is backed by stamped receipts and official government verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, wIdx) => (
              <div key={wIdx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
                <span className="text-3xl font-display font-black text-amber-600/30 block mb-2">{ws.step}</span>
                <h4 className="text-sm font-display font-bold text-slate-900 mb-1.5">{ws.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. COMPANY CREDENTIALS */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Developer Legacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                12+ Years of Unmatched Real Estate Excellence in UP
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <strong>Ar Wishwas Developer LLP</strong> was founded with a singular mission: to eliminate ambiguities in property purchasing and offer transparent, legally certified, and fully developed gated colony plots in Uttar Pradesh's highest growth corridors.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3.5 text-slate-800">
              <h3 className="text-base font-display font-bold text-slate-900 border-b border-slate-200 pb-2">
                Corporate Credentials
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Legal Entity:</span>
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
                <div className="flex justify-between">
                  <span className="text-slate-500">Direct Hotline:</span>
                  <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.phone}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5. NATIONALIZED BANK PARTNERS */}
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
