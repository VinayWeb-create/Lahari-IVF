import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Quote, 
  Award, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Calendar, 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { STORIES_DATA } from '../data/storiesData';

interface SuccessStoriesProps {
  onOpenBooking: () => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenBooking }) => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const activeStory = STORIES_DATA[activeStoryIdx];

  return (
    <section id="stories-section" className="py-20 sm:py-28 bg-gradient-to-b from-white via-rose-50/30 to-amber-50/20 border-t border-rose-100">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 mb-3"
          >
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-200 dark:border-rose-800 shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              Verified Patient Journeys
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.96 / 5.0 (14,800+ Audited Reviews)</span>
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight"
          >
            Stories of Hope, Science & <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Little Miracles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-3"
          >
            Over 45,000 families began their journeys here. Read how complex clinical hurdles like severe low AMH, azoospermia, and recurrent failures were overcome.
          </motion.p>
        </div>

        {/* Magazine-Style Editorial Spread */}
        <motion.div 
          key={activeStory.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="aura-glass-rose rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-2xl mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Big Cinematic Family Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 sm:aspect-square bg-slate-900 border-4 border-white">
                <img
                  src={activeStory.image}
                  alt={activeStory.coupleName}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black text-slate-900 shadow-md flex items-center gap-1.5 border border-rose-100">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{activeStory.babyNames}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-emerald-600/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{activeStory.verifiedTag}</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Story & Clinical Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-100 pb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    {activeStory.coupleName}
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                    {activeStory.location} • Age {activeStory.age}
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-2xl border border-amber-200">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Clinical Challenge vs Protocol Received */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-2xs space-y-1">
                  <div className="text-[10px] uppercase font-black text-rose-700 tracking-wider">
                    Clinical Diagnosis
                  </div>
                  <div className="text-xs font-bold text-slate-800 line-clamp-2">
                    {activeStory.clinicalChallenge}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-2xs space-y-1">
                  <div className="text-[10px] uppercase font-black text-emerald-700 tracking-wider">
                    Protocol at Lahari
                  </div>
                  <div className="text-xs font-bold text-slate-800 line-clamp-2">
                    {activeStory.treatmentReceived}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative pl-6 border-l-4 border-rose-500 italic text-base sm:text-lg text-slate-700 leading-relaxed">
                <Quote className="w-6 h-6 text-rose-300 absolute -top-3 left-0 -translate-x-1/2 fill-current" />
                "{activeStory.quote}"
              </div>

              {/* Lead Doctor & Timeline */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-xs sm:text-sm text-slate-500 border-t border-rose-100">
                <div>
                  <span className="font-semibold text-slate-700">Treating Specialist: </span>
                  <span className="font-extrabold text-rose-600">{activeStory.doctorName}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-slate-800 bg-white px-3 py-1.5 rounded-xl border border-rose-200 shadow-2xs">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Conceived in {activeStory.timelineMonths} Months</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Thumbnail Selector Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {STORIES_DATA.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIdx(idx)}
              className={`p-3.5 rounded-3xl text-left transition-all cursor-pointer flex items-center gap-3 border ${
                activeStoryIdx === idx
                  ? 'bg-rose-50/90 border-rose-400 shadow-lg ring-2 ring-rose-300 scale-102'
                  : 'bg-white border-rose-100 hover:bg-rose-50/50 shadow-2xs'
              }`}
            >
              <img
                src={story.image}
                alt={story.coupleName}
                className="w-13 h-13 rounded-2xl object-cover shrink-0 ring-2 ring-white shadow-xs"
              />
              <div className="overflow-hidden">
                <div className="font-black text-xs text-slate-900 truncate">
                  {story.coupleName.split('&')[0]} & {story.coupleName.split('&')[1]?.trim().split(' ')[0]}
                </div>
                <div className="text-[11px] text-slate-500 truncate">{story.location}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl font-black font-heading">
              Have you had previous failed IVF attempts elsewhere?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100">
              Get your prior embryology and stimulation reports evaluated free by our Senior Medical Board.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-7 py-4 rounded-2xl bg-white text-rose-600 font-black text-xs hover:bg-rose-50 transition-all shadow-xl cursor-pointer whitespace-nowrap transform hover:scale-105"
          >
            Get Free Second Opinion
          </button>
        </div>

      </div>
    </section>
  );
};
