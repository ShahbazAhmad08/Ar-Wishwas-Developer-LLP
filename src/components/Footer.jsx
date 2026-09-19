import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/sitesData';
import { Phone, Mail, MapPin, Copy, Check, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = ({ onOpenSiteVisit }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const aiLogoPrompt = `Minimalist, modern luxury real estate logo for 'Ar Wishwas Developer LLP'. Geometric design combining a trust icon (shield or handshake element) with sleek plot layout lines and a modern house structure. Color palette: Deep Royal Blue, Warm Gold, and Clean White. Vector graphics, white background, high resolution, corporate and premium look.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(aiLogoPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 text-xs font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top AI Logo Prompt Showcase Box */}
        <div className="mb-14 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-xs tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span className="font-display">AI Brand Logo Prompt (Midjourney / DALL-E / Canva)</span>
              </div>
              <p className="text-xs text-slate-300 font-mono bg-slate-950 p-3.5 rounded-2xl border border-slate-700 select-all leading-relaxed">
                "{aiLogoPrompt}"
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs flex items-center gap-2 transition flex-shrink-0 cursor-pointer shadow-md"
            >
              {copiedPrompt ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>{copiedPrompt ? 'Prompt Copied!' : 'Copy AI Prompt'}</span>
            </motion.button>
          </div>
        </div>

        {/* 4-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-sm">
              <BrandLogo size="md" showTagline={false} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
              Prayagraj & Kaushambi's trusted plotted township developer. 100% Verified Land Title, Section 143 Approved, and Instant Possession with Up to 80% Bank Finance.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Registered LLP • 100% Legal Guarantee</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-amber-400 transition">Home Page</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition">Featured Projects</Link></li>
              <li><Link to="/plot-map" className="hover:text-amber-400 transition font-bold text-amber-300">Interactive Masterplan Map</Link></li>
              <li><Link to="/calculators" className="hover:text-amber-400 transition">EMI & ROI Calculators</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition">Legal Transparency & Documents</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition">Contact & Offices</Link></li>
            </ul>
          </div>

          {/* Featured Colonies */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2.5">
              Gated Colonies
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/projects" className="hover:text-amber-400 transition">Wishwas Green City (Airport)</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition">Wishwas Royal Enclave (Jhalwa)</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition">Wishwas Eco Park (Manjhanpur)</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition">Wishwas Smart Township (Bharwari)</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition">Wishwas Residency (NH-19 Highway)</Link></li>
              <li>
                <button 
                  onClick={onOpenSiteVisit}
                  className="text-amber-400 font-bold underline cursor-pointer hover:text-white transition mt-1"
                >
                  Schedule Site Inspection
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2.5">
              Office Locations
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.officeAddress}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.branchAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-mono font-bold">{COMPANY_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 text-center md:text-left">
          <p>
            © 2026 <strong className="text-slate-200">Ar Wishwas Developer LLP</strong>. All Rights Reserved. | Registered Plotted Colonizers.
          </p>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[10px]">
            <span>Section 143 Cleared</span>
            <span>•</span>
            <span>100% Revenue Mutation</span>
            <span>•</span>
            <span>Zero Brokerage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
