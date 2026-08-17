import React, { useState } from 'react';
import { 
  Heart, 
  Quote, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Play, 
  Activity, 
  ArrowRight
} from 'lucide-react';
import { STORIES_DATA } from '../data/storiesData';
import { SuccessStory } from '../types';

interface SuccessStoriesViewProps {
  onOpenBooking: () => void;
}

export const SuccessStoriesView: React.FC<SuccessStoriesViewProps> = ({ onOpenBooking }) => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 relative overflow-hidden border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-3">
            <Heart className="w-4 h-4 fill-current text-rose-500" />
            <span>42,000+ Verified Patient Milestones</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Real Stories of Resilience, Science, and{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Miraculous Parenthood
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            From overcoming 5 failed IVF attempts elsewhere to severe azoospermia and stage-4 endometriosis, read how our individualized protocols turned impossible diagnoses into healthy baby deliveries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-rose-200/80 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Medically & Biometrically Verified Records</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.96/5 Star Patient Experience Score</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Success Stories Cards Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORIES_DATA.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="rounded-3xl border border-rose-100 bg-[#FFFDFD] overflow-hidden hover:shadow-2xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.coupleName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-rose-600 text-[10px] font-bold shadow-xs">
                      {story.verifiedTag}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="font-bold text-base">{story.coupleName}</div>
                      <div className="text-xs text-rose-100">{story.location} • {story.age}</div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="p-3 rounded-2xl bg-rose-50/40 border border-rose-100 text-xs">
                      <div className="text-slate-400 font-medium">Initial Diagnosis:</div>
                      <div className="font-bold text-rose-600 mt-0.5">{story.clinicalChallenge}</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-amber-50/40 border border-amber-100 text-xs">
                      <div className="text-slate-400 font-medium">Lahari Protocol:</div>
                      <div className="font-bold text-amber-800 mt-0.5">{story.treatmentReceived}</div>
                    </div>

                    <p className="text-xs text-slate-600 italic leading-relaxed pt-2">
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-rose-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Supervised by {story.doctorName}</span>
                    <span className="text-rose-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Full Story
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Details Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-rose-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-700 uppercase px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
                {selectedStory.verifiedTag}
              </span>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1.5 rounded-full hover:bg-rose-50 text-slate-500 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-4 items-center">
              <img
                src={selectedStory.image}
                alt={selectedStory.coupleName}
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-rose-200"
              />
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">{selectedStory.coupleName}</h3>
                <div className="text-xs text-slate-500">{selectedStory.location} • {selectedStory.age}</div>
                <div className="text-xs font-semibold text-rose-600 mt-1">Supervising Specialist: {selectedStory.doctorName}</div>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed border-t border-rose-100 pt-4">
              <div className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100">
                <div className="font-bold text-slate-900 mb-1">Clinical Journey Overview:</div>
                <p>{selectedStory.fullStory}</p>
              </div>

              <blockquote className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200 text-slate-800 italic">
                "{selectedStory.quote}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-rose-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedStory(null);
                  onOpenBooking();
                }}
                className="aura-btn-primary px-6 py-3 rounded-xl text-white text-xs font-bold shadow-md cursor-pointer"
              >
                Consult {selectedStory.doctorName}
              </button>
              <button
                onClick={() => setSelectedStory(null)}
                className="px-4 py-3 rounded-xl border border-rose-200 text-xs font-bold text-slate-700 hover:bg-rose-50 cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
