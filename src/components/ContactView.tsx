import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  ShieldCheck, 
  Globe, 
  Sparkles, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface ContactViewProps {
  onOpenBooking: () => void;
  selectedCity: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking, selectedCity }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: selectedCity,
    queryType: 'First Time Consultation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white text-slate-900 relative overflow-hidden border-b border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200">
            <Phone className="w-4 h-4 text-rose-600" />
            <span>24/7 Patient Care Concierge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            We Are Here to Listen, Guide, and{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Support Your Family
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            Whether you need a confidential second opinion on prior failed cycles, want to understand our 0% EMI financing, or need immediate assistance, our senior medical coordinators are standing by.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border border-rose-100 bg-[#FFFDFD] shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900">Inquiry Received with Priority</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      A senior fertility coordinator has been assigned to your request. You will receive a direct WhatsApp message and phone call within 15 minutes.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="aura-btn-primary px-6 py-2.5 rounded-xl text-white text-xs font-bold shadow-md cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-slate-900">Send a Confidential Inquiry</h2>
                      <p className="text-xs text-slate-500 mt-1">
                        All inquiries are protected by physician-patient privilege and strict HIPAA/ICMR confidentiality.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Priya Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200/80 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200/80 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="priya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200/80 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Nature</label>
                        <select
                          value={formData.queryType}
                          onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200/80 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        >
                          <option>First Time Consultation</option>
                          <option>Second Opinion on Failed IVF</option>
                          <option>Male Infertility & Micro-TESE</option>
                          <option>Egg Freezing Inquiry</option>
                          <option>0% EMI Financing Assistance</option>
                          <option>International Patient Desk</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Describe Your Medical History / Question (Optional)</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about how long you have been trying, any previous test results (AMH, semen analysis), or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200/80 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="aura-btn-primary w-full py-3.5 rounded-2xl text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Priority Medical Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Helpline Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-500 via-pink-600 to-amber-500 text-white space-y-4 shadow-xl border border-rose-300/40">
                <span className="text-[10px] uppercase font-bold text-rose-100 tracking-widest">Emergency & Dedicated Helplines</span>
                <h3 className="text-xl font-bold font-heading text-white">Direct Medical Care Desk</h3>
                
                <div className="space-y-4 pt-2 border-t border-white/20 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-rose-100">24/7 Toll-Free Toll Line:</div>
                      <a href="tel:18004502872" className="text-base font-bold text-white hover:text-rose-100">1800-450-Lahari (2872)</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-rose-100">Instant WhatsApp Concierge:</div>
                      <a href="https://wa.me/918004502872" target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline">+91 80045 02872</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-rose-100">Clinical Triage & Records:</div>
                      <span className="text-xs font-semibold text-white">care@aurahospital.org</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full mt-4 py-3 rounded-xl bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Person / Video Consultation</span>
                </button>
              </div>

              {/* International Patients Box */}
              <div className="p-6 rounded-3xl bg-[#FFFDFD] border border-rose-100 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-600">
                  <Globe className="w-4 h-4" />
                  <span>International Patient Desk (Global Care)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Welcoming patients from the UK, USA, UAE, Australia, and Africa with complimentary medical visa assistance, airport transfers, and private multi-lingual coordinators.
                </p>
                <div className="text-[11px] font-semibold text-rose-700">
                  Email: international@aurahospital.org
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
