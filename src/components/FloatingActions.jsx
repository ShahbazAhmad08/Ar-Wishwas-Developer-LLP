import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/sitesData';
import { Phone, Calendar, Bot, Sparkles, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { AiVoiceAssistant } from './AiVoiceAssistant';

// Official Real WhatsApp SVG Icon
const WhatsAppRealIcon = ({ className = "w-7 h-7" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.54 1.776.814 2.791.814 3.179 0 5.767-2.587 5.768-5.766.001-3.181-2.586-5.768-5.768-5.768zm3.364 8.163c-.144.405-.837.774-1.17.824-.312.045-.718.067-1.164-.076-.299-.096-.684-.23-1.182-.445-2.091-.904-3.453-3.029-3.558-3.167-.104-.139-.854-1.134-.854-2.163 0-1.03.54-1.536.732-1.745.193-.209.42-.262.56-.262.14 0 .28.002.403.008.13.007.305-.049.476.363.177.427.604 1.474.656 1.58.053.105.088.228.018.368-.07.14-.105.228-.21.35-.105.123-.221.274-.316.368-.105.105-.214.22-.092.43.123.21.545.9 1.168 1.455.803.715 1.48.937 1.69.1042.21.105.333.088.456-.053.123-.14.526-.613.666-.823.14-.21.28-.175.473-.105.193.07 1.226.578 1.436.683.21.105.35.158.403.245.053.088.053.508-.091.913z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.054 22l4.978-1.305A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.154c-1.637 0-3.155-.472-4.44-1.288l-.318-.2-2.955.775.789-2.88-.208-.33A8.125 8.125 0 013.846 12C3.846 7.503 7.503 3.846 12 3.846 16.497 3.846 20.154 7.503 20.154 12 20.154 16.497 16.497 20.154 12 20.154z"/>
  </svg>
);

export const FloatingActions = ({ onOpenSiteVisit }) => {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  return (
    <>
      {/* Floating Desktop Bottom-Right Bubble Stack */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3.5">
        
        {/* Schedule Visit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenSiteVisit}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center gap-2 text-xs border border-amber-400 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Schedule Visit</span>
        </motion.button>

        {/* 1. AI Voice Assistant Chatbot (Placed ABOVE WhatsApp) */}
        <div className="relative group">
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-amber-300 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-amber-400/40 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Voice & Chat Advisor</span>
          </span>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAiChatOpen(true)}
            aria-label="Open AI Voice Assistant"
            className="relative w-14 h-14 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(217,119,6,0.5)] border-2 border-white/80 cursor-pointer group"
          >
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-slate-950 animate-pulse">
              AI
            </span>
            <Bot className="w-7 h-7 text-slate-950 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </div>

        {/* 2. Official Real WhatsApp Round Floating Button (Bottom) */}
        <div className="relative group">
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-emerald-300 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-emerald-400/40 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Direct WhatsApp Chat
          </span>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to inquire about your prime plots in Prayagraj & Kaushambi.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] border-2 border-white/80 transition-transform duration-300 cursor-pointer"
          >
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              1
            </span>
            <WhatsAppRealIcon className="w-7 h-7" />
          </motion.a>
        </div>

      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold py-2 rounded-xl text-center text-xs flex items-center justify-center gap-1 border border-slate-700"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call</span>
        </a>

        {/* Mobile AI Voice Assistant */}
        <button
          onClick={() => setIsAiChatOpen(true)}
          className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black py-2 rounded-xl text-center text-xs flex items-center justify-center gap-1 shadow cursor-pointer"
        >
          <Bot className="w-3.5 h-3.5 text-slate-950" />
          <span>AI Voice</span>
        </button>

        <button
          onClick={onOpenSiteVisit}
          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-xl text-center text-xs flex items-center justify-center gap-1 shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Visit</span>
        </button>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, please share details for gated plots in Prayagraj & Kaushambi.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2 rounded-xl text-center text-xs flex items-center justify-center gap-1 shadow"
        >
          <WhatsAppRealIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* AI Voice Assistant Modal */}
      <AiVoiceAssistant 
        isOpen={isAiChatOpen} 
        onClose={() => setIsAiChatOpen(false)} 
        onOpenSiteVisit={onOpenSiteVisit}
      />
    </>
  );
};

