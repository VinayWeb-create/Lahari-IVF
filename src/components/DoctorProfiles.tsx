import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  GraduationCap, 
  Languages, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Star, 
  Video, 
  CheckCircle2, 
  ChevronRight,
  UserCheck,
  Stethoscope,
  Play,
  ArrowRight
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { Doctor } from '../types';
import { DoctorDetailModal } from './DoctorDetailModal';

interface DoctorProfilesProps {
  onOpenBooking: (doctorName?: string, type?: 'in_person' | 'video_consult') => void;
  selectedCity: string;
}

export const DoctorProfiles: React.FC<DoctorProfilesProps> = ({ onOpenBooking, selectedCity }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  const specialties = [
    'All',
    'Reproductive Medicine',
    'Clinical Embryology',
    'Male Infertility & Andrology',
    'Genetics & PGT-A'
  ];

  const filteredDoctors = DOCTORS_DATA.filter((doctor) => {
    if (selectedSpecialty === 'All') return true;
    return (
      doctor.title.toLowerCase().includes(selectedSpecialty.toLowerCase()) ||
      doctor.specialities.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()))
    );
  });

  return (
    <section id="doctors-section" className="py-20 sm:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200 dark:border-rose-800 shadow-xs"
          >
            <Stethoscope className="w-3.5 h-3.5 text-rose-500" />
            Distinguished Medical Board
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading tracking-tight"
          >
            Meet India’s Foremost <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Reproductive Medicine Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3"
          >
            Pioneering reproductive endocrinologists and clinical embryologists with international fellowships from the UK, Germany, France, and USA.
          </motion.p>
        </div>

        {/* Specialty Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedSpecialty === spec
                  ? 'aura-btn-primary text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-rose-100 dark:border-slate-800 hover:bg-rose-50/50'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Large Doctor Portrait Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDoctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-rose-100 shadow-md hover:shadow-2xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Photo, Video Reel, Availability, Rating */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-rose-100/70">
                  
                  {/* Photo & Video Play Badge */}
                  <div className="relative shrink-0">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-lg group-hover:scale-103 transition-transform ring-4 ring-rose-50"
                    />
                    <button
                      onClick={() => setVideoModalUrl(doctor.videoIntroUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ')}
                      className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/30 hover:scale-110 transition-transform cursor-pointer"
                      title="Watch Doctor Introduction Reel"
                    >
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </button>
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      {doctor.availableToday ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                          Available Today
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          Next: Tomorrow
                        </span>
                      )}

                      <div className="flex items-center gap-1 text-xs font-bold text-slate-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{doctor.rating}</span>
                        <span className="text-slate-400 font-normal">({doctor.reviewCount})</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => setSelectedDoctor(doctor)}
                      className="text-2xl font-black text-slate-900 font-heading hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      {doctor.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1">
                      {doctor.title}
                    </p>

                    <div className="text-xs text-slate-500 pt-0.5">
                      <span className="font-bold text-rose-600">{doctor.experienceYears}+ Yrs Experience</span> • <span className="font-bold text-emerald-600">{doctor.successRate}% Success</span>
                    </div>

                  </div>

                </div>

                {/* Key Qualifications */}
                <div className="py-5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.qualifications.slice(0, 2).map((q, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 rounded-xl bg-rose-50 text-rose-700 border border-rose-200/80">
                        {q}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">{doctor.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Live Slot & CTAs */}
              <div className="pt-5 border-t border-rose-100/70 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Next Live Slot:</div>
                  <div className="font-bold text-slate-900 text-xs mt-0.5">{doctor.nextSlot}</div>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl border border-rose-200 hover:bg-rose-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                  >
                    View Bio
                  </button>

                  <button
                    onClick={() => onOpenBooking(doctor.name, 'video_consult')}
                    className="aura-btn-primary flex-1 sm:flex-none px-5 py-2.5 rounded-2xl text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Book Slot</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Selected Doctor Bio Modal */}
        <DoctorDetailModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onOpenBooking={onOpenBooking}
        />

        {/* Video Introduction Player Modal */}
        {videoModalUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl p-4 text-slate-900 border border-rose-100">
              <div className="flex justify-between items-center pb-3 border-b border-rose-100">
                <div className="text-sm font-bold text-slate-900">Doctor Video Introduction</div>
                <button 
                  onClick={() => setVideoModalUrl(null)} 
                  className="p-1.5 rounded-full hover:bg-rose-50 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-rose-50/50 rounded-2xl overflow-hidden mt-3 flex items-center justify-center border border-rose-100">
                <div className="text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full aura-btn-primary text-white flex items-center justify-center mx-auto shadow-md">
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Welcome to Lahari IVF & IVF Hospital</h4>
                  <p className="text-xs text-slate-600 max-w-md">
                    "Our commitment is delivering evidence-based reproductive medicine with zero emotional compromise. We look forward to meeting you."
                  </p>
                  <button
                    onClick={() => {
                      setVideoModalUrl(null);
                      onOpenBooking();
                    }}
                    className="aura-btn-primary px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-lg cursor-pointer"
                  >
                    Book Consultation Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
