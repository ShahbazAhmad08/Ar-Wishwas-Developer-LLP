import React, { useState } from 'react';
import { SITES_DATA, COMPANY_INFO } from '../data/sitesData';
import { Compass, CheckCircle2, AlertCircle, XCircle, MapPin, Sparkles, MessageSquare, Phone, Calendar, ArrowUpRight, Trees, Shield, Navigation } from 'lucide-react';

export const InteractivePlotMap = ({ initialSiteId, onOpenSiteVisit }) => {
  const [selectedSiteId, setSelectedSiteId] = useState(initialSiteId || SITES_DATA[0].id);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [activeSector, setActiveSector] = useState("all"); // all, block-a, block-b, block-c
  const [statusFilter, setStatusFilter] = useState("all"); // all, available, booked, sold

  const currentSite = SITES_DATA.find(s => s.id === selectedSiteId) || SITES_DATA[0];

  // Divide plots into realistic blocks
  const plotsWithSectors = currentSite.plots.map((p, idx) => {
    let sector = "Block A (Boulevard)";
    let sectorKey = "block-a";
    if (idx >= Math.floor(currentSite.plots.length * 0.6)) {
      sector = "Block C (VIP Enclave)";
      sectorKey = "block-c";
    } else if (idx >= Math.floor(currentSite.plots.length * 0.3)) {
      sector = "Block B (Park View)";
      sectorKey = "block-b";
    }
    return { ...p, sector, sectorKey };
  });

  const filteredPlots = plotsWithSectors.filter(plot => {
    const matchesSector = activeSector === "all" || plot.sectorKey === activeSector;
    const matchesStatus = statusFilter === "all" || plot.status === statusFilter;
    return matchesSector && matchesStatus;
  });

  const blockAPlots = filteredPlots.filter(p => p.sectorKey === 'block-a');
  const blockBPlots = filteredPlots.filter(p => p.sectorKey === 'block-b');
  const blockCPlots = filteredPlots.filter(p => p.sectorKey === 'block-c');

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.3)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Available (Ready to Register)
          </span>
        );
      case 'booked':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-500/50 px-3 py-1 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.3)]">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" /> Token Hold / Booked
          </span>
        );
      case 'sold':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-500/50 px-3 py-1 rounded-full">
            <XCircle className="w-3.5 h-3.5 text-rose-400" /> Sold & Registered
          </span>
        );
    }
  };

  return (
    <section id="live-map" className="py-24 bg-[#02050E] border-b border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Background Decorative Ambient Gold Bloom */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#FCE8B2] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Architectural Masterplan Visualizer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
              Interactive Master Layout Plan
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl font-sans">
              Choose your ideal plot with exact dimensions, road width, facing direction, and immediate registry availability.
            </p>
          </div>

          {/* Color Status Legend */}
          <div className="flex flex-wrap items-center gap-4 luxury-glass border border-[#D4AF37]/30 px-4 py-3 rounded-2xl text-xs font-semibold">
            <span className="text-slate-400 uppercase text-[10px] tracking-wider font-bold">Status:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-500 border border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              <span className="text-slate-200">Available ({currentSite.plotsSummary.available})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-500 border border-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
              <span className="text-slate-200">Reserved ({currentSite.plotsSummary.booked})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-rose-600 border border-rose-400" />
              <span className="text-slate-200">Sold ({currentSite.plotsSummary.sold})</span>
            </div>
          </div>
        </div>

        {/* Project Selector Pills */}
        <div className="flex overflow-x-auto pb-3 gap-2.5 mb-8 scrollbar-none">
          {SITES_DATA.map((site) => {
            const isActive = site.id === selectedSiteId;
            return (
              <button
                key={site.id}
                onClick={() => {
                  setSelectedSiteId(site.id);
                  setSelectedPlot(null);
                }}
                className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-102'
                    : 'luxury-glass text-slate-300 border-white/5 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-[#D4AF37]'}`} />
                <span>{site.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {site.locationCategory}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masterplan Visual Canvas Container + Inspector Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Masterplan Blueprint Canvas (8 cols) */}
          <div className="lg:col-span-8 luxury-card rounded-3xl p-5 sm:p-7 border border-[#D4AF37]/30 shadow-2xl relative">
            
            {/* Top Blueprint Bar with Sector Filters */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold uppercase text-[11px]">Sectors:</span>
                <button
                  onClick={() => setActiveSector("all")}
                  className={`px-3 py-1 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'all' ? 'bg-[#D4AF37] text-slate-950 shadow-sm' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  All Sectors
                </button>
                <button
                  onClick={() => setActiveSector("block-a")}
                  className={`px-3 py-1 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'block-a' ? 'bg-[#D4AF37] text-slate-950 shadow-sm' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Block A (Boulevard)
                </button>
                <button
                  onClick={() => setActiveSector("block-b")}
                  className={`px-3 py-1 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'block-b' ? 'bg-[#D4AF37] text-slate-950 shadow-sm' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Block B (Park View)
                </button>
                <button
                  onClick={() => setActiveSector("block-c")}
                  className={`px-3 py-1 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'block-c' ? 'bg-[#D4AF37] text-slate-950 shadow-sm' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Block C (VIP Enclave)
                </button>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setStatusFilter(statusFilter === 'available' ? 'all' : 'available')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border cursor-pointer ${
                    statusFilter === 'available'
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-slate-900/80 text-emerald-400 border-emerald-500/40 hover:bg-emerald-950'
                  }`}
                >
                  🟢 Available Only
                </button>
              </div>
            </div>

            {/* Grand VIP Security Gate Entry Representation */}
            <div className="mb-4 bg-gradient-to-r from-[#0C1B3A] via-[#142C5E] to-[#0C1B3A] border border-[#D4AF37]/35 rounded-2xl p-3 flex flex-wrap items-center justify-between text-xs gap-2 shadow-inner">
              <div className="flex items-center gap-2.5 text-[#FCE8B2] font-bold">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-display tracking-wider uppercase">VIP Entrance Arch • 40 FT Wide Main Boulevard</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Guard Cabin & CCTV Surveillance
              </span>
            </div>

            {/* Sector A Plots (Boulevard Facing) */}
            {blockAPlots.length > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-2 px-1">
                  <span className="text-[#D4AF37] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    BLOCK A — 40FT MAIN BOULEVARD TOUCH
                  </span>
                  <span className="text-slate-500">{blockAPlots.length} Plots</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {blockAPlots.map((plot) => renderPlotBox(plot))}
                </div>
              </div>
            )}

            {/* Simulated 40ft Main Asphalt Boulevard with Center Stripe */}
            <div className="relative my-4 h-8 bg-slate-900/90 rounded-xl border border-slate-700/80 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-around opacity-40">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="w-8 h-1 bg-amber-400/80 rounded" />
                ))}
              </div>
              <span className="relative z-10 text-[9px] font-mono font-black uppercase text-amber-300/80 tracking-widest px-3 py-0.5 rounded bg-slate-950/80">
                40 FT MAIN BOULEVARD ROAD
              </span>
            </div>

            {/* Landscaped Central Green Park Zone */}
            <div className="my-4 bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 border border-emerald-500/30 rounded-2xl p-3.5 flex flex-wrap items-center justify-between text-xs gap-3">
              <div className="flex items-center gap-2.5 text-emerald-300">
                <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                  <Trees className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="font-bold block text-sm">1.5 Acre Landscaped Green Park</span>
                  <span className="text-[10px] text-emerald-400/80">Jogging Track, Gazebo & Sacred Temple Space</span>
                </div>
              </div>
              <span className="text-[11px] text-emerald-300/90 font-medium px-2.5 py-1 bg-emerald-950/80 rounded-lg border border-emerald-500/30">
                100% Dedicated Green Belt
              </span>
            </div>

            {/* Sector B Plots (Park View) */}
            {blockBPlots.length > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-2 px-1">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    BLOCK B — CENTRAL PARK FACING
                  </span>
                  <span className="text-slate-500">{blockBPlots.length} Plots</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {blockBPlots.map((plot) => renderPlotBox(plot))}
                </div>
              </div>
            )}

            {/* Simulated 30ft Internal Avenue */}
            <div className="relative my-3 h-6 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-center">
              <span className="text-[8px] font-mono text-slate-400 tracking-widest uppercase">
                30 FT INTERNAL INTERLOCKING ROAD
              </span>
            </div>

            {/* Sector C Plots (VIP Enclave) */}
            {blockCPlots.length > 0 && (
              <div>
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-2 px-1">
                  <span className="text-amber-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    BLOCK C — VIP RESIDENTIAL ENCLAVE
                  </span>
                  <span className="text-slate-500">{blockCPlots.length} Plots</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {blockCPlots.map((plot) => renderPlotBox(plot))}
                </div>
              </div>
            )}

          </div>

          {/* Right Inspector Drawer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {selectedPlot ? (
              <div className="luxury-card rounded-3xl p-6 border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative animate-in fade-in zoom-in-95 duration-200">
                
                {/* Active Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                      {selectedPlot.sector}
                    </span>
                    <h3 className="text-2xl font-display font-black text-white">
                      Plot {selectedPlot.plotNo}
                    </h3>
                  </div>
                  {getStatusBadge(selectedPlot.status)}
                </div>

                {/* Plot Blueprint Spec Sheet */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Site Location:</span>
                    <span className="font-bold text-white text-right">{currentSite.name}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Area (Gaz / Sq.Yd):</span>
                    <span className="font-bold text-[#FCE8B2] text-sm">
                      {selectedPlot.sizeSqYd} sq.yd ({selectedPlot.sizeSqFt} sq.ft)
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Dimensions:</span>
                    <span className="font-mono font-bold text-white">{selectedPlot.dimensions}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Facing:</span>
                    <span className="font-bold text-emerald-400">{selectedPlot.facing}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Rate / Sq.Yard:</span>
                    <span className="font-bold text-white">₹{selectedPlot.pricePerSqYd.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-gradient-to-br from-[#0B1A38] to-[#040A18] rounded-2xl p-4 border border-[#D4AF37]/30 text-center my-3 shadow-inner">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Total Valuation
                    </span>
                    <span className="text-3xl font-black gold-metallic-text font-display">
                      ₹ {selectedPlot.totalPrice.toLocaleString('en-IN')}
                    </span>
                    <div className="text-[11px] text-emerald-400 mt-1 font-semibold">
                      Bank Loan Ready: ₹{(selectedPlot.totalPrice * 0.8).toLocaleString('en-IN')} (80%)
                    </div>
                  </div>
                </div>

                {/* Plot CTAs */}
                <div className="space-y-3 pt-2">
                  {selectedPlot.status === 'available' ? (
                    <>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                          `Hello Ar Wishwas Developer LLP! I would like to reserve Plot No: ${selectedPlot.plotNo} at ${currentSite.name} (${selectedPlot.sizeSqYd} sq.yd, ${selectedPlot.facing}, Total Valuation: ₹${selectedPlot.totalPrice.toLocaleString('en-IN')}). Please share the token booking process and documentation.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Reserve This Plot on WhatsApp</span>
                      </a>

                      <button
                        onClick={onOpenSiteVisit}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow transition cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Schedule Site Inspection</span>
                      </button>
                    </>
                  ) : selectedPlot.status === 'booked' ? (
                    <div className="bg-amber-950/60 p-3.5 rounded-2xl border border-amber-500/40 text-center text-xs text-amber-300">
                      <p className="font-bold">This plot is reserved under token hold.</p>
                      <p className="text-[11px] text-slate-400 mt-1">Check if the waiting list is open for this parcel.</p>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hello Ar Wishwas Developer LLP, could you please check if Plot ${selectedPlot.plotNo} is available on the waiting list?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-amber-400 font-bold underline"
                      >
                        Enquire Waiting List
                      </a>
                    </div>
                  ) : (
                    <div className="bg-rose-950/60 p-3.5 rounded-2xl border border-rose-800/40 text-center text-xs text-rose-300">
                      <p className="font-bold">Ye plot sold & registered ho chuka hai.</p>
                      <p className="text-[11px] text-slate-400 mt-1">Please select green plots from the layout map.</p>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              /* Idle State Inspector */
              <div className="luxury-glass rounded-3xl p-7 border border-white/5 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0B1A38] text-[#D4AF37] mx-auto flex items-center justify-center border border-[#D4AF37]/30 shadow-lg">
                  <Compass className="w-7 h-7 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-white">Plot Inspector</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Click any plot box in the layout map on the left to review its architectural dimensions and pricing.
                  </p>
                </div>
                
                <div className="bg-slate-900/90 p-4 rounded-2xl text-left text-xs space-y-2.5 text-slate-300 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span>Green = Available (Immediate Registry)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                    <span>Yellow = Reserved (Under Token)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-rose-600" />
                    <span>Red = Sold Out & Registry Complete</span>
                  </div>
                </div>

                <button
                  onClick={onOpenSiteVisit}
                  className="w-full bg-[#10244D] hover:bg-[#162D5A] text-[#FCE8B2] border border-[#D4AF37]/40 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Schedule Site Visit</span>
                </button>
              </div>
            )}

            {/* Senior Consultant Quick Helpline */}
            <div className="luxury-glass rounded-2xl p-4 border border-white/5 text-xs text-slate-300 flex items-center gap-3">
              <div className="p-2.5 bg-[#D4AF37]/20 text-[#D4AF37] rounded-xl flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-white">Plot Finalization Helpline</p>
                <p className="text-[11px] text-slate-400">Directly talk to Site Director.</p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition"
              >
                Call
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );

  function renderPlotBox(plot) {
    const isSelected = selectedPlot?.plotNo === plot.plotNo;
    const isAvailable = plot.status === 'available';
    const isBooked = plot.status === 'booked';
    const isSold = plot.status === 'sold';

    let colorStyle = "bg-rose-950/60 border-rose-800/60 text-rose-300 opacity-60";
    if (isAvailable) {
      colorStyle = "bg-emerald-950/80 border-emerald-500/70 text-emerald-200 hover:bg-emerald-700/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]";
    } else if (isBooked) {
      colorStyle = "bg-amber-950/80 border-amber-500/70 text-amber-200 hover:bg-amber-700/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]";
    }

    if (isSelected) {
      colorStyle += " ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#02050E] scale-105";
    }

    return (
      <button
        key={plot.plotNo}
        onClick={() => setSelectedPlot(plot)}
        className={`relative p-2 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[70px] ${colorStyle}`}
      >
        <div className="flex items-center justify-between text-[10px] font-mono font-bold">
          <span>#{plot.number}</span>
          <span className="text-[9px] opacity-75">{plot.sizeSqYd}y</span>
        </div>

        <div className="my-1">
          <span className={`text-[8px] font-black uppercase px-1 py-0.2 rounded ${
            isAvailable 
              ? 'bg-emerald-400/20 text-emerald-300' 
              : isBooked 
              ? 'bg-amber-400/20 text-amber-300' 
              : 'bg-rose-900/40 text-rose-400 line-through'
          }`}>
            {isAvailable ? 'OPEN' : isBooked ? 'HOLD' : 'SOLD'}
          </span>
        </div>

        <div className="text-[9px] font-bold opacity-90 truncate">
          ₹{(plot.totalPrice / 100000).toFixed(1)}L
        </div>
      </button>
    );
  }
};
