import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Award, 
  Calendar, 
  Video, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { Doctor } from '../types';

interface DoctorsViewProps {
  onOpenBooking: (doctorName?: string, type?: 'in_person' | 'video_consult') => void;
  onSelectDoctor: (doctor: Doctor) => void;
  selectedCity: string;
}

export const DoctorsView: React.FC<DoctorsViewProps> = ({ 
  onOpenBooking, 
  onSelectDoctor, 
  selectedCity 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [availableOnly, setAvailableOnly] = useState(false);

  const specialities = [
    'All',
    'Recurrent IVF Failure',
    'Low AMH & Advanced Age',
    'Male Infertility & Micro-TESE',
    'PGT-A Genetic Diagnostics',
    'Endometriosis Surgery'
  ];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialities.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpeciality = 
      selectedSpeciality === 'All' || 
      doc.specialities.some(s => s.toLowerCase().includes(selectedSpeciality.toLowerCase()));

    const matchesAvailability = availableOnly ? doc.availableToday : true;

    return matchesSearch && matchesSpeciality && matchesAvailability;
  });

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 relative overflow-hidden border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-3">
            <Stethoscope className="w-4 h-4" />
            <span>Senior Reproductive Faculty</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Consult India’s Leading{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Reproductive Specialists
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            Our medical faculty comprises internationally certified Reproductive Endocrinologists, ESHRE-fellow Embryologists, and Micro-TESE Andrologists with average experience exceeding 18+ years.
          </p>

          {/* Search & Filter Utility */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/90 shadow-sm border border-rose-100 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-rose-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by doctor name, specialty, low AMH, Micro-TESE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-rose-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Speciality Filter */}
            <div className="md:col-span-4">
              <select
                value={selectedSpeciality}
                onChange={(e) => setSelectedSpeciality(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-rose-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {specialities.map((spec) => (
                  <option key={spec} value={spec} className="bg-white text-slate-900">
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Toggle */}
            <div className="md:col-span-2 flex items-center justify-end">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-medium">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-0"
                />
                <span>Available Today</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Doctor Cards Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">{filteredDoctors.length}</span> verified faculty members
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="rounded-3xl border border-rose-100 bg-[#FFFDFD] hover:border-rose-300 hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Doctor Meta */}
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative shrink-0">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-2 ring-rose-200 shadow-md"
                      />
                      {doc.availableToday && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold uppercase whitespace-nowrap shadow-sm">
                          Live Today
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{doc.rating}</span>
                          <span className="text-slate-400 font-normal">({doc.reviewCount} reviews)</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 uppercase px-2 py-0.5 rounded bg-rose-50 border border-rose-100">
                          {doc.experienceYears}+ Yrs Exp
                        </span>
                      </div>

                      <h3 
                        onClick={() => onSelectDoctor(doc)}
                        className="text-lg sm:text-xl font-bold font-heading text-slate-900 hover:text-rose-600 cursor-pointer transition-colors"
                      >
                        {doc.name}
                      </h3>

                      <p className="text-xs text-rose-600 font-semibold">{doc.title}</p>
                      
                      <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{doc.centre}</span>
                      </div>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="mt-5 pt-4 border-t border-rose-100">
                    <div className="text-[11px] text-slate-500 font-medium mb-2">Qualifications & Accreditations:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.qualifications.map((q, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white border border-rose-100 text-slate-700 text-[11px] font-medium"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialities Chips */}
                  <div className="mt-4">
                    <div className="text-[11px] text-slate-500 font-medium mb-1.5">Core Clinical Specializations:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialities.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-100"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio snippet */}
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>

                  {/* ICMR Reg */}
                  <div className="mt-3 text-[10px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Registered under National ART Board: {doc.icmrRegistrationNumber}</span>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-5 border-t border-rose-100 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Earliest Appointment</div>
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{doc.nextSlot}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDoctor(doc)}
                      className="px-3.5 py-2 rounded-xl border border-rose-200 hover:bg-rose-50 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => onOpenBooking(doc.name, 'video_consult')}
                      className="aura-btn-primary px-4 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
