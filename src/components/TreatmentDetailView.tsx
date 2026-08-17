import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Activity, 
  ShieldCheck, 
  Microscope, 
  Award, 
  Calendar, 
  HelpCircle,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailViewProps {
  treatment: Treatment;
  onBack: () => void;
  onOpenBooking: (doctor?: string) => void;
  onOpenAI: () => void;
}

export const TreatmentDetailView: React.FC<TreatmentDetailViewProps> = ({
  treatment,
  onBack,
  onOpenBooking,
  onOpenAI
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 relative overflow-hidden border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 hover:text-rose-900 mb-6 px-3 py-1.5 rounded-lg bg-rose-100/70 hover:bg-rose-200/70 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Treatments</span>
          </button>

          <div className="flex flex-wrap gap-2 mb-3">
            {treatment.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight max-w-4xl">
            {treatment.title}
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-base sm:text-lg font-normal leading-relaxed">
            {treatment.detailedOverview}
          </p>

          {/* Quick Telemetry */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white shadow-sm border border-rose-100 max-w-3xl">
            <div>
              <div className="text-xs text-slate-500 font-medium">Success Benchmark</div>
              <div className="text-lg sm:text-xl font-bold text-emerald-600 mt-0.5">{treatment.successRate}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Protocol Timeline</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{treatment.duration}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Lab Standard</div>
              <div className="text-lg sm:text-xl font-bold text-rose-600 mt-0.5">ISO Class 5</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">ICMR Compliant</div>
              <div className="text-lg sm:text-xl font-bold text-amber-600 mt-0.5">100% Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Clinical Indications / Who Is This For */}
              <div className="p-8 rounded-3xl bg-[#FFFDFD] border border-rose-100">
                <h2 className="text-xl font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-rose-600" />
                  <span>Clinical Indications & Ideal Candidates</span>
                </h2>
                <p className="text-xs text-slate-600 mb-4">
                  This procedure is recommended by our senior reproductive endocrinologists for couples presenting with:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.idealFor.map((item, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white border border-rose-100 flex items-start gap-2.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Clinical Protocol Roadmap */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                  Step-by-Step Clinical Protocol
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-8">
                  From baseline stimulation through AI embryology incubation and laser-assisted transfer:
                </p>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-rose-100">
                  {treatment.steps.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-5 pl-2">
                      <div className="w-10 h-10 rounded-2xl aura-btn-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-rose-500/20 z-10">
                        {step.step}
                      </div>

                      <div className="flex-1 p-6 rounded-3xl bg-rose-50/30 border border-rose-100 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                          <span className="text-xs font-bold text-rose-700 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Clinical Milestone: {step.clinicalMilestone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embryology Lab Tech Utilized */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-50/60 to-amber-50/60 border border-rose-100">
                <h2 className="text-xl font-bold font-heading text-slate-900 mb-3 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-rose-600" />
                  <span>Embryology Technology & Cleanroom Equipment</span>
                </h2>
                <p className="text-xs text-slate-600 mb-6">
                  Every cycle leverages state-of-the-art medical hardware certified under ISO cleanroom Class 10,000 standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.embryologyTech.map((tech, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-rose-100 flex items-center gap-3 shadow-xs">
                      <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Concierge Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-rose-50/40 to-pink-50/30 text-slate-900 space-y-6 shadow-xl border border-rose-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-rose-600 tracking-wider">Clinical Guidance</span>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mt-1">Book a Specialist Review</h3>
                  <p className="text-xs text-slate-600 mt-2">
                    Review your medical reports, AMH, and prior cycle history with our Senior Reproductive Endocrinologists.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-rose-100">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free 1st Ultrasound Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Transparent Cost Estimate with 0% EMI</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Second Opinion on Previous Failed Cycles</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-3.5 rounded-xl aura-btn-primary text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book In-Clinic / Video Consult</span>
                  </button>

                  <button
                    onClick={onOpenAI}
                    className="w-full py-3 rounded-xl bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs border border-rose-200 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>Ask AI About This Protocol</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center">
                  Instant confirmation on WhatsApp • Strict patient privacy
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
