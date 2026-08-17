import React from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  Heart,
  Globe2,
  Lock
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string) => void;
  onOpenBooking: () => void;
  onOpenPortal: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenPortal,
  onOpenAdmin
}) => {
  const handleNav = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-rose-50/70 via-white to-pink-50/40 text-slate-800 border-t border-rose-100">
      
      {/* Top Value Banner */}
      <div className="border-b border-rose-100 py-12 bg-gradient-to-r from-rose-100/60 via-pink-100/40 to-amber-100/50">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Ready to take your first <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">confident step?</span>
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                Book a 100% confidential consultation with our Senior Medical Faculty today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="aura-btn-primary px-6 py-3 rounded-2xl text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Free 1st Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPortal}
                className="px-5 py-3 rounded-2xl bg-white border border-rose-200 hover:bg-rose-50 text-slate-800 font-bold text-xs transition-colors cursor-pointer shadow-xs"
              >
                Patient Portal Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md shadow-rose-500/20">
                <img src="/logo.jpg" alt="Lahari IVF Hospital Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 font-heading">
                  Lahari<span className="text-rose-600">.</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-rose-600 font-bold -mt-1">
                  Fertility & IVF Hospitals
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              A premier super-speciality network of reproductive medicine and clinical embryology centres in India. Dedicated to ethical, evidence-based reproductive science with 45,000+ conceived babies.
            </p>

            <div className="space-y-1.5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>24/7 Helpline: <strong className="text-slate-900">1800-450-Lahari</strong> (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>care@aurahospital.org</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-rose-100/90 text-rose-800 border border-rose-200">
                ICMR ART Reg #DL-ART-2024-884
              </span>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 font-heading">
              Clinical Procedures
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><button onClick={() => handleNav('treatments')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">Advanced Day-5 Blastocyst IVF</button></li>
              <li><button onClick={() => handleNav('treatments')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">ICSI & ZyMōt PICSI</button></li>
              <li><button onClick={() => handleNav('treatments')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">Egg Freezing & Cryo-Vitrification</button></li>
              <li><button onClick={() => handleNav('treatments')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">PGT-A Genetic Screening</button></li>
              <li><button onClick={() => handleNav('treatments')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">Micro-TESE Male Infertility</button></li>
              <li><button onClick={() => handleNav('facilities')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">ISO Class 5 Cleanrooms</button></li>
            </ul>
          </div>

          {/* Col 3: About & Centres */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-heading">
              Hospital & Locations
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><button onClick={() => handleNav('about')} className="hover:text-amber-700 transition-colors text-left cursor-pointer">About Lahari Heritage</button></li>
              <li><button onClick={() => handleNav('doctors')} className="hover:text-amber-700 transition-colors text-left cursor-pointer">Senior Faculty & Specialists</button></li>
              <li><button onClick={() => handleNav('branches')} className="hover:text-amber-700 transition-colors text-left cursor-pointer">Hospital Centres (14 Cities)</button></li>
              <li><button onClick={() => handleNav('stories')} className="hover:text-amber-700 transition-colors text-left cursor-pointer">Verified Success Stories</button></li>
              <li><button onClick={() => handleNav('careers')} className="hover:text-rose-600 transition-colors text-left cursor-pointer text-rose-600 font-semibold">Careers & Fellowships</button></li>
            </ul>
          </div>

          {/* Col 4: Tools & Staff Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Patient & Financial Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><button onClick={() => handleNav('calculator')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">Fertility Probability Calculator</button></li>
              <li><button onClick={() => handleNav('packages')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">Packages & 0% EMI Plans</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-rose-600 transition-colors text-left cursor-pointer">24/7 Care Desk & International</button></li>
              <li><button onClick={onOpenPortal} className="hover:text-rose-600 transition-colors text-left cursor-pointer">Patient Follicle Tracker</button></li>
              <li><button onClick={onOpenAdmin} className="hover:text-rose-600 transition-colors text-left cursor-pointer text-slate-500">Staff CMS & Analytics</button></li>
            </ul>
          </div>

        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="mt-12 pt-8 border-t border-rose-100 space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-700">Medical & Regulatory Disclaimer:</strong> Success rates quoted on this portal reflect cumulative clinical and ongoing pregnancy data over 3 cycles incorporating Day-5 blastocyst transfer and PGT-A screening as per audited clinical registers. Individual clinical results vary according to biological age, ovarian reserve (AMH), sperm chromatin integrity, and endometrial receptivity. In strict adherence to the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994, Lahari strictly prohibits sex selection or sex determination in any form.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-rose-100 text-xs text-slate-500">
            <div>
              © 2026 Lahari IVF & IVF Hospitals India Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => handleNav('legal')} className="hover:text-slate-800 cursor-pointer">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => handleNav('legal')} className="hover:text-slate-800 cursor-pointer">Terms of Clinical Service</button>
              <span>•</span>
              <button onClick={() => handleNav('legal')} className="hover:text-slate-800 cursor-pointer">ICMR ART Act 2021</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
