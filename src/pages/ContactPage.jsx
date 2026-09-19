import React, { useState } from 'react';
import { COMPANY_INFO, SITES_DATA } from '../data/sitesData';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, CheckCircle2, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    city: 'Prayagraj',
    project: SITES_DATA[0].name,
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    const whatsappMsg = `*NEW INQUIRY - AR WISHWAS DEVELOPER*%0A%0A` +
      `👤 *Name:* ${formState.name}%0A` +
      `📞 *Phone:* ${formState.phone}%0A` +
      `📍 *Location Interest:* ${formState.city}%0A` +
      `🏢 *Project:* ${formState.project}%0A` +
      `💬 *Message:* ${formState.message || 'I want plot details and registry price sheet.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMsg}`, '_blank');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-800 text-xs font-extrabold uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Consultation & Offices
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-2">
            Connect With Our Land Directors
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-sans">
            Visit our corporate office in Civil Lines Prayagraj or site headquarters in Kaushambi.
          </p>
        </div>

        {/* 2-Columns: Office Cards & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Prayagraj Office */}
            <div className="luxury-card-bright p-6 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Corporate HQ</span>
                  <h3 className="text-base font-display font-bold text-slate-900">Prayagraj Office</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-1">
                {COMPANY_INFO.officeAddress}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Monday - Sunday: 9:30 AM to 7:00 PM</span>
              </div>
            </div>

            {/* Kaushambi Office */}
            <div className="luxury-card-bright p-6 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Regional Branch</span>
                  <h3 className="text-base font-display font-bold text-slate-900">Kaushambi Office</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-1">
                {COMPANY_INFO.branchAddress}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Open All 7 Days for Site Registration</span>
              </div>
            </div>

            {/* Direct Calling & WhatsApp */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-3">
              <h4 className="text-sm font-display font-bold text-amber-300">Direct Land Directors Hotline</h4>
              <p className="text-xs text-slate-300">Speak directly with company partners without middlemen.</p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer LLP, I would like to speak directly with a property director regarding plot inquiries.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">
              Send Property Inquiry
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below to receive official plot brochure, layout map, and government registry pricing.
            </p>

            {sent ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-slate-600">Redirecting to WhatsApp for instant response...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Singh"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Mobile / WhatsApp Number:</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Preferred Location:</label>
                    <select
                      value={formState.city}
                      onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="Prayagraj">Prayagraj (Airport & Jhalwa)</option>
                      <option value="Kaushambi">Kaushambi (Highway & Manjhanpur)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Colony Project:</label>
                    <select
                      value={formState.project}
                      onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      {SITES_DATA.map((s) => (
                        <option key={s.id} value={s.name}>{s.name} ({s.locationCategory})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Question / Requirements:</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. I am looking for a 150 sq.yd east-facing corner plot near Bamrauli Airport with SBI bank loan."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Property Inquiry</span>
                </motion.button>
              </form>
            )}
          </div>

        </div>

        {/* Connectivity Matrix Grid */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
              Reach Us
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-2">
              Strategic Proximity Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Easy road, airport, and railway station access for our townships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-display font-bold text-slate-900 text-base block">Prayagraj Junction</span>
              <span className="text-xs text-amber-800 font-bold block mt-1">15-20 Mins</span>
              <span className="text-[10px] text-slate-400">Direct City Connectivity</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-display font-bold text-slate-900 text-base block">Bamrauli Airport</span>
              <span className="text-xs text-amber-800 font-bold block mt-1">6-10 Mins</span>
              <span className="text-[10px] text-slate-400">Prayagraj Civil Terminal</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-display font-bold text-slate-900 text-base block">NH-19 Highway</span>
              <span className="text-xs text-amber-800 font-bold block mt-1">Direct Touch</span>
              <span className="text-[10px] text-slate-400">Kanpur-Prayagraj Corridor</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-display font-bold text-slate-900 text-base block">Civil Lines Prayagraj</span>
              <span className="text-xs text-amber-800 font-bold block mt-1">12-18 Mins</span>
              <span className="text-[10px] text-slate-400">High Court & District Hub</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
