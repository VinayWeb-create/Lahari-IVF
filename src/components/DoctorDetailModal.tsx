import React from 'react';
import { 
  X, 
  Award, 
  GraduationCap, 
  Languages, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Star, 
  Video, 
  CheckCircle2,
  MapPin,
  Stethoscope
} from 'lucide-react';
import { Doctor } from '../types';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onOpenBooking: (doctorName: string, type?: 'in_person' | 'video_consult') => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onOpenBooking
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-rose-100 flex items-center justify-between z-20">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
              Senior Medical Faculty
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 font-heading">
              {doctor.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-rose-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Top Profile Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#FFFDFD] p-6 rounded-3xl border border-rose-100">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-md shrink-0 ring-2 ring-rose-200"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">
                  {doctor.experienceYears} Years Clinical Exp.
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  {doctor.successRate}% Success Rate
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {doctor.name}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                {doctor.title}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{doctor.centre}</span>
              </div>
              <div className="text-[11px] text-slate-400">
                ICMR Reg: {doctor.icmrRegistrationNumber}
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
              Clinical Biography & Research
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Academic Qualifications & Fellowships */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-rose-600" />
              Degrees & International Fellowships
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.qualifications.map((q, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-rose-50/50 border border-rose-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-rose-600" />
              Core Areas of Specialization
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.specialities.map((spec, i) => (
                <span key={i} className="px-3 py-1 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 text-xs font-semibold">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100 space-y-2">
              <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-rose-500" />
                Consultation Languages:
              </div>
              <p className="text-xs text-slate-600">{doctor.languages.join(', ')}</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/30 border border-amber-100 space-y-2">
              <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                Accolades:
              </div>
              <p className="text-xs text-slate-600">{doctor.awards.join(' • ')}</p>
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-rose-100 flex flex-wrap items-center justify-between gap-4 z-20">
          <div className="text-xs">
            <span className="text-slate-500">First Consult: </span>
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">FREE (Promo Code Lahari2026)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(doctor.name, 'video_consult');
              }}
              className="px-4 py-2.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5" />
              <span>HD Video Consult</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(doctor.name, 'in_person');
              }}
              className="aura-btn-primary px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book In-Clinic Slot</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
