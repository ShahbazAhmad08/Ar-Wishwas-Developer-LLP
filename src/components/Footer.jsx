import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/sitesData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = ({ onOpenSiteVisit }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 text-xs font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* 4-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Logo Only */}
          <div className="flex flex-col justify-start">
            <Link to="/" className="inline-block group">
              <div className="w-48 sm:w-56 rounded-2xl overflow-hidden border border-amber-500/30 bg-black p-2 shadow-[0_4px_20px_rgba(217,119,6,0.15)] group-hover:border-amber-400/70 group-hover:shadow-[0_4px_25px_rgba(217,119,6,0.3)] transition-all duration-300">
                <img
                  src="/logo.jpeg"
                  alt="Ar Wishwas Developer LLP"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
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
