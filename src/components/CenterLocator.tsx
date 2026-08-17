import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Star, 
  CheckCircle2, 
  Building, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locationsData';
import { CenterLocation } from '../types';

interface CenterLocatorProps {
  onOpenBooking: (doctor?: string, notes?: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export const CenterLocator: React.FC<CenterLocatorProps> = ({
  onOpenBooking,
  selectedCity,
  setSelectedCity
}) => {
  const [activeCenterId, setActiveCenterId] = useState<string>(LOCATIONS_DATA[0].id);

  const activeCenter = LOCATIONS_DATA.find((c) => c.id === activeCenterId) || LOCATIONS_DATA[0];

  return (
    <section id="centres-section" className="py-16 sm:py-24 bg-[#FFFDFD]">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            Pan-India Flagship Hospitals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            28+ World-Class Centers Across India
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Every Lahari facility houses dedicated Class-10,000 cleanroom embryology labs, laser hatching stations, and private recovery suites.
          </p>
        </div>

        {/* City Selector Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {LOCATIONS_DATA.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setActiveCenterId(loc.id);
                setSelectedCity(loc.city);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCenterId === loc.id
                  ? 'aura-btn-primary text-white shadow-md'
                  : 'bg-white text-slate-700 border border-rose-100 hover:bg-rose-50/50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{loc.city}</span>
            </button>
          ))}
        </div>

        {/* Active Center Detailed Bento */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  {activeCenter.state} Hospital
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {activeCenter.googleRating} ({activeCenter.reviewsCount} Google Reviews)
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                {activeCenter.name}
              </h3>
            </div>

            {/* Address & Timings */}
            <div className="space-y-3 p-4 rounded-2xl bg-rose-50/30 border border-rose-100 text-xs">
              <div className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{activeCenter.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{activeCenter.timing}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href={`tel:${activeCenter.phone}`} className="flex items-center gap-1.5 font-bold text-rose-600 hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{activeCenter.phone}</span>
                </a>
                <a href={`mailto:${activeCenter.email}`} className="flex items-center gap-1.5 font-medium text-slate-600 hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{activeCenter.email}</span>
                </a>
              </div>
            </div>

            {/* In-House Infrastructure */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Laboratory & Diagnostic Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCenter.facilities.map((fac, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-rose-50/40 p-2.5 rounded-xl border border-rose-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chief Doctor */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 border border-rose-200/80 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-rose-600 font-bold uppercase">Clinical Director On-Site</div>
                <div className="text-sm font-bold text-slate-900">{activeCenter.chiefDoctor}</div>
              </div>
              <button
                onClick={() => onOpenBooking(activeCenter.chiefDoctor)}
                className="aura-btn-primary px-4 py-2 rounded-xl text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>

          </div>

          {/* Right Map Card & Virtual Tour */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-rose-100 aspect-4/3 flex items-center justify-center p-6 text-center text-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Hospital Facility"
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white flex items-center justify-center mx-auto shadow-lg ring-2 ring-white/30">
                  <Navigation className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold font-heading">
                  Visit {activeCenter.name}
                </h4>
                <p className="text-xs text-rose-100/90 max-w-xs mx-auto">
                  Valet parking available. Dedicated executive reception on 2nd Floor.
                </p>
                <div className="flex justify-center gap-2 pt-1">
                  <a
                    href={activeCenter.mapEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-rose-700 text-xs font-bold hover:bg-rose-50 transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-rose-600" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Need airport concierge pickup?</span>
              <span className="text-rose-600 font-bold">24/7 International Desk</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
