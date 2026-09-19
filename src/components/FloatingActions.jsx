import React from 'react';
import { COMPANY_INFO } from '../data/sitesData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingActions = ({ onOpenSiteVisit }) => {
  return (
    <>
      {/* Floating Desktop Bottom-Right Bubble */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {/* Schedule Visit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenSiteVisit}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center gap-2 text-xs border border-amber-400 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule Visit</span>
        </motion.button>

        {/* WhatsApp Round Floating Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to inquire about your prime plots in Prayagraj & Kaushambi.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
            1
          </span>
          <MessageSquare className="w-7 h-7 fill-white" />
        </motion.a>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 border border-slate-200"
        >
          <Phone className="w-3.5 h-3.5 text-amber-600" />
          <span>Call Us</span>
        </a>

        <button
          onClick={onOpenSiteVisit}
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Site Visit</span>
        </button>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, please share details for gated plots in Prayagraj & Kaushambi.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
