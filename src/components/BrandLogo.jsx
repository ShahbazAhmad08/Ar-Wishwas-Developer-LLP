import React from 'react';
import { Link } from 'react-router-dom';

export const BrandLogo = ({ size = "md", showTagline = true }) => {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Royal Navy & Gold Vector Shield Crest */}
      <div className={`relative flex items-center justify-center rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-105 ${
        isSmall ? 'w-10 h-10' : isLarge ? 'w-16 h-16' : 'w-12 h-12'
      } bg-gradient-to-br from-[#0B1A38] via-[#102A56] to-[#071124] border border-[#D97706]/40 shadow-[0_4px_16px_rgba(217,119,6,0.15)]`}>
        
        <svg 
          viewBox="0 0 120 120" 
          className={`${isSmall ? 'w-7 h-7' : isLarge ? 'w-11 h-11' : 'w-9 h-9'} relative z-10 transition-transform duration-300 group-hover:scale-110`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield Geometric Outline */}
          <path 
            d="M60 10 L102 26 V62 C102 88 60 108 60 108 C60 108 18 88 18 62 V26 L60 10 Z" 
            stroke="url(#brightGoldGradient)" 
            strokeWidth="5" 
            strokeLinejoin="round"
          />

          {/* Plotted Land Grid Lines */}
          <path d="M35 72 L60 84 L85 72" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.9" />
          <path d="M60 84 V102" stroke="#F59E0B" strokeWidth="2.5" opacity="0.8" />
          <path d="M42 66 L60 76 L78 66" stroke="#F59E0B" strokeWidth="2" opacity="0.75" />

          {/* Architectural Elevation Line */}
          <path d="M36 48 L60 28 L84 48" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Central AW Monogram fusion */}
          <path d="M44 65 L60 38 L76 65" stroke="url(#brightGoldGradient)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M49 55 H71" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          
          {/* Star Crest */}
          <polygon points="60,18 62,23 67,23 63,26 65,31 60,28 55,31 57,26 53,23 58,23" fill="#FDE68A" />

          <defs>
            <linearGradient id="brightGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold tracking-wider uppercase ${
            isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-lg md:text-xl'
          } text-[#0B1A38] group-hover:text-[#B45309] transition-colors`}>
            Ar Wishwas
          </span>
          <span className="text-[10px] font-mono uppercase font-bold tracking-widest bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.5 rounded">
            LLP
          </span>
        </div>
        {showTagline && (
          <p className="text-[10px] font-sans font-medium text-slate-500 tracking-wider flex items-center gap-1">
            <span className="text-amber-700 font-bold">DEVELOPER</span>
            <span className="text-slate-300">•</span>
            <span>Prayagraj & Kaushambi</span>
          </p>
        )}
      </div>
    </div>
  );
};
