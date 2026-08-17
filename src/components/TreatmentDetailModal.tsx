import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Award, 
  ShieldCheck, 
  Microscope, 
  Calendar, 
  ArrowRight,
  FileCheck,
  Zap
} from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onOpenBooking: (doctor?: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onOpenBooking
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#0057D9]">
              Clinical Treatment Protocol
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
              {treatment.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner & Badges */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white min-h-[220px] flex items-end p-6 sm:p-8">
            <img 
              src={treatment.bannerImage} 
              alt={treatment.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="relative z-10 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0057D9] text-white text-xs font-bold">
                  Success Rate: {treatment.successRate}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Cycle Duration: {treatment.duration}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-medium max-w-2xl">
                {treatment.shortDesc}
              </p>
            </div>
          </div>

          {/* Overview Text */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 font-heading">Clinical Overview</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {treatment.detailedOverview}
            </p>
          </div>

          {/* Ideal Candidates & Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Ideal Candidates */}
            <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057D9]">
                <FileCheck className="w-4 h-4" />
                Recommended For
              </div>
              <ul className="space-y-2.5">
                {treatment.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0057D9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embryology & Lab Technologies */}
            <div className="p-6 rounded-3xl bg-teal-50/60 border border-teal-100 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                <Microscope className="w-4 h-4" />
                Embryology Technology Used
              </div>
              <ul className="space-y-2.5">
                {treatment.embryologyTech.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Zap className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Step by Step Clinical Procedure */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
              <span>Step-by-Step Procedure Workflow</span>
            </h3>
            <div className="space-y-3">
              {treatment.steps.map((st) => (
                <div key={st.step} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0057D9] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {st.step}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{st.title}</div>
                      <div className="text-xs text-slate-500">{st.description}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-100/60 text-[#0057D9] shrink-0">
                    {st.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sticky Footer Action Bar */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 z-20">
          <div className="text-xs text-slate-500">
            <span className="font-bold text-slate-900">100% Transparent:</span> No hidden procedural or media charges.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0057D9] hover:bg-[#0047b3] text-white text-xs font-bold shadow-lg shadow-[#0057D9]/25 flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation for this Protocol</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
