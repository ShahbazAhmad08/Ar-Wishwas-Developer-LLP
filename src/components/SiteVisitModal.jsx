import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SITES_DATA, COMPANY_INFO } from '../data/sitesData';
import { X, Calendar, Phone, User, MapPin, CheckCircle, Sparkles, MessageSquare, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SiteVisitModal = ({ isOpen, onClose, defaultSiteId }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    site: defaultSiteId || SITES_DATA[0].name,
    date: new Date().toISOString().split('T')[0],
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    visitors: '2 Persons'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setIsSubmitted(true);

    const message = `*SITE VISIT & INSPECTION REQUEST - AR WISHWAS DEVELOPER*%0A%0A` +
      `👤 *Full Name:* ${formData.name}%0A` +
      `📞 *Phone Number:* ${formData.phone}%0A` +
      `📍 *Project Site:* ${formData.site}%0A` +
      `📅 *Date:* ${formData.date}%0A` +
      `⏰ *Preferred Slot:* ${formData.preferredTime}%0A` +
      `👥 *Visitors:* ${formData.visitors}%0A%0A` +
      `_Please confirm site visit and assign a senior land consultant._`;

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm"
    >
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.25)] p-6 sm:p-8"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full w-fit mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Personalized Plot Inspection & Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
              Schedule Your Site Visit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">
              Experience the ground development, interlocking roads, and verify official 143 & registry documentation in person.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
              
              {/* Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name:</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alok Mishra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number:</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Project Site */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Select Project:</label>
                <select
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white cursor-pointer transition"
                >
                  {SITES_DATA.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.locationCategory} - {s.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Slot & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Time:</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Date:</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.35)] transition-all text-sm flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Site Visit Schedule</span>
              </motion.button>

              <p className="text-[11px] text-center text-slate-500 font-sans">
                🔒 Direct developer consultation. Our site director will contact you directly to confirm.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center shadow-md">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-display font-black text-slate-900">
              Thank You, {formData.name}!
            </h3>

            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-sans">
              Your site visit request has been recorded. Redirecting to WhatsApp to send you location coordinates and consultant details...
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-xs mx-auto text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Project:</span>
                <span className="font-bold text-slate-900">{formData.site}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="font-bold text-amber-700">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Slot:</span>
                <span className="font-bold text-slate-900">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};
