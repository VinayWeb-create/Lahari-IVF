import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Navigation, 
  ShieldCheck, 
  Star,
  Building2,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locationsData';
import { CenterLocation } from '../types';

interface BranchesViewProps {
  onOpenBooking: (doctor?: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export const BranchesView: React.FC<BranchesViewProps> = ({
  onOpenBooking,
  selectedCity,
  setSelectedCity
}) => {
  const [activeCenter, setActiveCenter] = useState<CenterLocation>(LOCATIONS_DATA[0]);

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white text-slate-900 relative overflow-hidden border-b border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200">
            <Building2 className="w-4 h-4" />
            <span>Pan-India Flagship Cleanroom Hospitals</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            14 World-Class Centres Across{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Major Metro Hubs
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            Every Lahari hospital features an identical, centrally monitored Class 10,000 ISO cleanroom embryology laboratory, ensuring the same 88.6% blastocyst success rate regardless of which branch you visit.
          </p>
        </div>
      </section>

      {/* 2. City Selector & Center Details */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Branches List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Lahari Hospital Campus:</div>
              {LOCATIONS_DATA.map((center) => {
                const isSelected = activeCenter.id === center.id;
                return (
                  <div
                    key={center.id}
                    onClick={() => {
                      setActiveCenter(center);
                      setSelectedCity(center.city);
                    }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-rose-300 bg-rose-50/70 ring-2 ring-rose-400/50 shadow-md'
                        : 'border-rose-100 bg-white hover:bg-rose-50/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-700">{center.city}</span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{center.googleRating}</span>
                        <span className="text-slate-400 font-normal">({center.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mt-1">{center.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{center.address}</p>

                    <div className="mt-3 pt-3 border-t border-rose-100 flex items-center justify-between text-[11px] text-slate-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {center.timing}
                      </span>
                      <span className="font-semibold text-rose-600">Chief: {center.chiefDoctor.split(',')[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Active Center Deep Dive & Map */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl border border-rose-200 bg-white space-y-6 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-rose-700 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200">
                      Flagship Super-Specialty Campus
                    </span>
                    <h2 className="text-2xl font-bold font-heading text-slate-900 mt-2">{activeCenter.name}</h2>
                  </div>

                  <button
                    onClick={() => onOpenBooking(activeCenter.chiefDoctor)}
                    className="px-4 py-2.5 rounded-xl aura-btn-primary text-white text-xs font-bold shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book at this Centre</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-rose-50/40 border border-rose-100 text-xs">
                  <div>
                    <div className="text-slate-400">Campus Address:</div>
                    <div className="font-medium text-slate-800 mt-0.5">{activeCenter.address}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Chief Fertility Specialist:</div>
                    <div className="font-bold text-rose-700 mt-0.5">{activeCenter.chiefDoctor}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Direct Front Desk:</div>
                    <div className="font-bold text-slate-900 mt-0.5">{activeCenter.phone}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Consultation Timings:</div>
                    <div className="font-medium text-slate-800 mt-0.5">{activeCenter.timing}</div>
                  </div>
                </div>

                {/* Facilities at this location */}
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-2">On-Premises Clinical Facilities:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCenter.facilities.map((fac, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-rose-100 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Embed Map Frame */}
                <div className="rounded-2xl overflow-hidden border border-rose-200 h-64 relative bg-slate-100">
                  <iframe
                    title={`Google Map for ${activeCenter.name}`}
                    src={activeCenter.mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
