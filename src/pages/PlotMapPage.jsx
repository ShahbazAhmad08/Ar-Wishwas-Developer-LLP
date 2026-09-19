import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SITES_DATA, COMPANY_INFO } from '../data/sitesData';
import { Compass, CheckCircle2, AlertCircle, XCircle, MapPin, Sparkles, MessageSquare, Phone, Calendar, Trees, Shield, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export const PlotMapPage = ({ onOpenSiteVisit }) => {
  const [searchParams] = useSearchParams();
  const siteParam = searchParams.get('site');

  const [selectedSiteId, setSelectedSiteId] = useState(siteParam || SITES_DATA[0].id);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [activeSector, setActiveSector] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    if (siteParam && SITES_DATA.some(s => s.id === siteParam)) {
      setSelectedSiteId(siteParam);
    }
  }, [siteParam]);

  const currentSite = SITES_DATA.find(s => s.id === selectedSiteId) || SITES_DATA[0];

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
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Available (Ready to Register)
          </span>
        );
      case 'booked':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300 px-3 py-1 rounded-full">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Token Hold / Reserved
          </span>
        );
      case 'sold':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            <XCircle className="w-3.5 h-3.5 text-rose-600" /> Sold & Registered
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
              Digital Layout Kiosk
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-2">
              Interactive Masterplan & Live Status
            </h1>
            <p className="text-sm text-slate-600 mt-1.5 max-w-2xl font-sans">
              Click on any individual plot to inspect dimensions, road touch, facing direction, and instant WhatsApp booking status.
            </p>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap items-center gap-4 bg-white border border-slate-200 px-4 py-3 rounded-2xl text-xs font-semibold shadow-sm">
            <span className="text-slate-400 uppercase text-[10px] tracking-wider font-bold">Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-500 border border-emerald-300" />
              <span className="text-slate-700">Available ({currentSite.plotsSummary.available})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-400 border border-amber-300" />
              <span className="text-slate-700">Reserved ({currentSite.plotsSummary.booked})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-rose-600 border border-rose-400" />
              <span className="text-slate-700">Sold ({currentSite.plotsSummary.sold})</span>
            </div>
          </div>
        </div>

        {/* Colony Switcher Tabs */}
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
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-amber-800'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                <span>{site.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-amber-800 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {site.locationCategory}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masterplan Blueprint & Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint Canvas Container (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm relative">
            
            {/* Sector Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-bold uppercase text-[11px]">Sectors:</span>
                <button
                  onClick={() => setActiveSector("all")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'all' ? 'bg-slate-900 text-amber-400 shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Sectors
                </button>
                <button
                  onClick={() => setActiveSector("block-a")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'block-a' ? 'bg-slate-900 text-amber-400 shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Block A (Boulevard)
                </button>
                <button
                  onClick={() => setActiveSector("block-b")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'block-b' ? 'bg-slate-900 text-amber-400 shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Block B (Park View)
                </button>
                <button
                  onClick={() => setActiveSector("block-c")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                    activeSector === 'block-c' ? 'bg-slate-900 text-amber-400 shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Block C (VIP Enclave)
                </button>
              </div>

              {/* Status Toggle */}
              <button
                onClick={() => setStatusFilter(statusFilter === 'available' ? 'all' : 'available')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                  statusFilter === 'available'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                🟢 Available Only ({currentSite.plotsSummary.available})
              </button>
            </div>

            {/* Entrance Gate Representation */}
            <div className="mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-3 flex flex-wrap items-center justify-between text-xs text-white gap-2 shadow-sm">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="font-display tracking-wider uppercase">VIP Entrance Gate • 40 FT Wide Boulevard</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Guard Cabin & CCTV Surveillance
              </span>
            </div>

            {/* Sector A */}
            {blockAPlots.length > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-2 px-1">
                  <span className="text-amber-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    BLOCK A — 40FT MAIN BOULEVARD TOUCH
                  </span>
                  <span>{blockAPlots.length} Plots</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {blockAPlots.map(p => renderPlot(p))}
                </div>
              </div>
            )}

            {/* Simulated 40ft Main Road */}
            <div className="relative my-4 h-8 bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-around opacity-40">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="w-8 h-1 bg-amber-300 rounded" />
                ))}
              </div>
              <span className="relative z-10 text-[9px] font-mono font-black uppercase text-amber-300 tracking-widest px-3 py-0.5 rounded bg-slate-900/90">
                40 FT MAIN BOULEVARD ROAD
              </span>
            </div>

            {/* Green Park */}
            <div className="my-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 flex flex-wrap items-center justify-between text-xs gap-3">
              <div className="flex items-center gap-2.5 text-emerald-900">
                <div className="p-1.5 bg-emerald-100 rounded-lg">
                  <Trees className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-bold block text-sm">1.5 Acre Landscaped Green Park</span>
                  <span className="text-[10px] text-emerald-700">Jogging Track, Gazebo & Sacred Temple Space</span>
                </div>
              </div>
              <span className="text-[11px] text-emerald-800 font-semibold px-2.5 py-1 bg-emerald-100 rounded-lg">
                100% Dedicated Green Belt
              </span>
            </div>

            {/* Sector B */}
            {blockBPlots.length > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-2 px-1">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    BLOCK B — CENTRAL PARK FACING
                  </span>
                  <span>{blockBPlots.length} Plots</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {blockBPlots.map(p => renderPlot(p))}
                </div>
              </div>
            )}

            {/* 30ft Road */}
            <div className="relative my-3 h-6 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
              <span className="text-[8px] font-mono text-slate-500 tracking-widest uppercase">
                30 FT INTERNAL INTERLOCKING ROAD
              </span>
            </div>

            {/* Sector C */}
            {blockCPlots.length > 0 && (
              <div>
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-2 px-1">
                  <span className="text-amber-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    BLOCK C — VIP RESIDENTIAL ENCLAVE
                  </span>
                  <span>{blockCPlots.length} Plots</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {blockCPlots.map(p => renderPlot(p))}
                </div>
              </div>
            )}

          </div>

          {/* Right Inspector Drawer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {selectedPlot ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-6 border border-amber-300 shadow-lg relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700">
                      {selectedPlot.sector}
                    </span>
                    <h3 className="text-2xl font-display font-black text-slate-900">
                      Plot {selectedPlot.plotNo}
                    </h3>
                  </div>
                  {getStatusBadge(selectedPlot.status)}
                </div>

                {/* Specs */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Colony Name:</span>
                    <span className="font-bold text-slate-900 text-right">{currentSite.name}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Area (Gaz / Sq.Yd):</span>
                    <span className="font-bold text-amber-800 text-sm">
                      {selectedPlot.sizeSqYd} sq.yd ({selectedPlot.sizeSqFt} sq.ft)
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Dimensions:</span>
                    <span className="font-mono font-bold text-slate-800">{selectedPlot.dimensions}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Facing Direction:</span>
                    <span className="font-bold text-emerald-600">{selectedPlot.facing}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Rate / Sq.Yard:</span>
                    <span className="font-bold text-slate-800">₹{selectedPlot.pricePerSqYd.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-center my-3">
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">
                      Total Valuation
                    </span>
                    <span className="text-3xl font-black text-amber-900 font-display">
                      ₹ {selectedPlot.totalPrice.toLocaleString('en-IN')}
                    </span>
                    <div className="text-[11px] text-emerald-700 mt-1 font-bold">
                      Bank Loan Ready: ₹{(selectedPlot.totalPrice * 0.8).toLocaleString('en-IN')} (80%)
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5 pt-2">
                  {selectedPlot.status === 'available' ? (
                    <>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                          `Namaste Ar Wishwas Developer! Mujhe ${currentSite.name} ka Plot No: ${selectedPlot.plotNo} (${selectedPlot.sizeSqYd} sq.yd, ${selectedPlot.facing}, Rate: ₹${selectedPlot.totalPrice.toLocaleString('en-IN')}) reserve karna hai. Kripya process aur token details batayein.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sheen w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-md transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Reserve This Plot on WhatsApp</span>
                      </a>

                      <button
                        onClick={onOpenSiteVisit}
                        className="btn-sheen w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Schedule Site Inspection</span>
                      </button>
                    </>
                  ) : selectedPlot.status === 'booked' ? (
                    <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-center text-xs text-amber-800">
                      <p className="font-bold">This plot is reserved under token hold.</p>
                      <p className="text-[11px] text-slate-600 mt-1">Enquire if waiting list is open for this parcel.</p>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Namaste, kya Plot ${selectedPlot.plotNo} available ho sakta hai?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-amber-800 font-bold underline"
                      >
                        Enquire Waiting List
                      </a>
                    </div>
                  ) : (
                    <div className="bg-rose-50 p-3.5 rounded-2xl border border-rose-200 text-center text-xs text-rose-700">
                      <p className="font-bold">This plot is sold and registered.</p>
                      <p className="text-[11px] text-slate-500 mt-1">Please select green plots from the layout map.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Idle Drawer */
              <div className="bg-white rounded-3xl p-7 border border-slate-200 text-center space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 mx-auto flex items-center justify-center border border-amber-200 shadow-sm">
                  <Compass className="w-7 h-7 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-slate-900">Plot Details Inspector</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Click any plot box in the layout map on the left to inspect its dimensions, facing direction, and pricing.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-2xl text-left text-xs space-y-2 text-slate-700 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
                    <span>Green = Available for Immediate Registry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-amber-400" />
                    <span>Yellow = Reserved / Token Hold</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-rose-600" />
                    <span>Red = Sold Out</span>
                  </div>
                </div>

                <button
                  onClick={onOpenSiteVisit}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Schedule Site Visit</span>
                </button>
              </div>
            )}

            {/* Helpline */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 text-xs text-slate-700 flex items-center gap-3 shadow-sm">
              <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">Direct Land Consultant</p>
                <p className="text-[11px] text-slate-500">Need help selecting corner or east facing plots?</p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs transition"
              >
                Call
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );

  function renderPlot(plot) {
    const isSelected = selectedPlot?.plotNo === plot.plotNo;
    const isAvailable = plot.status === 'available';
    const isBooked = plot.status === 'booked';
    const isSold = plot.status === 'sold';

    let colorStyle = "bg-rose-50 border-rose-200 text-rose-700 opacity-60";
    if (isAvailable) {
      colorStyle = "bg-emerald-50/90 border-emerald-300 text-emerald-900 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300";
    } else if (isBooked) {
      colorStyle = "bg-amber-50/90 border-amber-300 text-amber-900 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300";
    }

    if (isSelected) {
      colorStyle += " ring-2 ring-amber-600 ring-offset-2 scale-105 z-10 shadow-md";
    }

    return (
      <motion.button
        key={plot.plotNo}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setSelectedPlot(plot)}
        className={`relative p-2 rounded-xl border text-center cursor-pointer flex flex-col justify-between min-h-[72px] ${colorStyle}`}
      >
        {isAvailable && (
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        )}

        <div className="flex items-center justify-between text-[10px] font-mono font-bold">
          <span>#{plot.number}</span>
          <span className="text-[9px] opacity-75">{plot.sizeSqYd}y</span>
        </div>

        <div className="my-1">
          <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${
            isAvailable 
              ? 'bg-emerald-100 text-emerald-800' 
              : isBooked 
              ? 'bg-amber-100 text-amber-800' 
              : 'bg-rose-100 text-rose-800 line-through'
          }`}>
            {isAvailable ? 'AVAILABLE' : isBooked ? 'HOLD' : 'SOLD'}
          </span>
        </div>

        <div className="text-[9px] font-bold opacity-90 truncate font-mono">
          ₹{(plot.totalPrice / 100000).toFixed(1)}L
        </div>
      </motion.button>
    );
  }
};
