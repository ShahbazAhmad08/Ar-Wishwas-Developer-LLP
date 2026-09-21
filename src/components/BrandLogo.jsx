import React from 'react';

export const BrandLogo = ({ size = "md", showTagline = true }) => {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Official Ar Wishwas Developer Brand Logo */}
      <div className={`relative flex items-center justify-center rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-105 ${
        isSmall ? 'w-10 h-10' : isLarge ? 'w-16 h-16' : 'w-12 h-12'
      } bg-[#071124] border-2 border-amber-400/60 shadow-[0_4px_16px_rgba(217,119,6,0.25)] flex-shrink-0`}>
        <img
          src="/logo.jpeg"
          alt="Ar Wishwas Developer Logo"
          className="w-full h-full object-cover object-center"
        />
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
