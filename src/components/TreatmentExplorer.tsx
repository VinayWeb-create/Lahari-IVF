import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Microscope, 
  CheckCircle2, 
  Filter,
  Eye,
  Table,
  Check,
  Zap,
  Award,
  Dna,
  Heart,
  Activity
} from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { Treatment } from '../types';
import { TreatmentDetailModal } from './TreatmentDetailModal';

interface TreatmentExplorerProps {
  onOpenBooking: (doctor?: string) => void;
}

export const TreatmentExplorer: React.FC<TreatmentExplorerProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);

  const filterTabs = ['All', 'IVF & Blastocyst', 'ICSI & PICSI', 'Egg Freezing', 'Genetics (PGT-A)', 'Male Infertility', 'IUI'];

  const filteredTreatments = TREATMENTS_DATA.filter((t) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'IVF & Blastocyst') return t.slug.includes('ivf');
    if (activeFilter === 'ICSI & PICSI') return t.slug.includes('icsi');
    if (activeFilter === 'Egg Freezing') return t.slug.includes('egg-freezing');
    if (activeFilter === 'Genetics (PGT-A)') return t.slug.includes('pgt');
    if (activeFilter === 'Male Infertility') return t.slug.includes('micro-tese');
    if (activeFilter === 'IUI') return t.slug.includes('iui');
    return true;
  });

  const comparisonRows = [
    {
      treatment: 'Standard IVF',
      successRate: '65 – 70%',
      timeline: '15 – 18 Days',
      bestFor: 'Blocked fallopian tubes, mild ovulatory factor, unexplained infertility',
      fertilization: 'Natural dish co-incubation',
      embryoStage: 'Day 3 Cleavage or Day 5'
    },
    {
      treatment: 'Laser ICSI / PICSI',
      successRate: '80 – 85%',
      timeline: '15 – 18 Days',
      bestFor: 'Low sperm count, low motility, abnormal morphology, previous fertilization failure',
      fertilization: 'Single sperm micro-injection',
      embryoStage: 'Day 5 Expanded Blastocyst'
    },
    {
      treatment: 'Extended Blastocyst Culture',
      successRate: '84.6%',
      timeline: '5 Days in Geri® AI Incubator',
      bestFor: 'All couples aiming for single embryo transfer with highest pregnancy odds',
      fertilization: 'AI time-lapse monitoring',
      embryoStage: 'Day 5/6 (100+ Cells)'
    },
    {
      treatment: 'PGT-A Genetic Screening',
      successRate: '86 – 90%',
      timeline: 'Next Frozen Cycle',
      bestFor: 'Maternal age 35+, recurrent miscarriages, genetic disease carriers',
      fertilization: 'Next-Gen Sequencing (NGS)',
      embryoStage: 'Biopsied Euploid Blastocyst'
    },
    {
      treatment: 'Social Egg Vitrification',
      successRate: '98.2% Thaw Survival',
      timeline: '12 – 14 Days',
      bestFor: 'Career women preserving fertility, pre-cancer chemotherapy fertility preservation',
      fertilization: 'Cryotop® flash vitrification',
      embryoStage: 'Mature Metaphase-II Oocytes'
    },
    {
      treatment: 'Micro-TESE Male Retrieval',
      successRate: '65 – 72% Sperm Recovery',
      timeline: '1 Day Daycare',
      bestFor: 'Non-obstructive azoospermia (zero sperm in ejaculate)',
      fertilization: 'Operative microscope isolation',
      embryoStage: 'Used directly for ICSI'
    }
  ];

  return (
    <section id="treatments-section" className="py-20 sm:py-28 bg-white border-t border-slate-100" aria-label="Evidence-Based Fertility Treatments Portfolio">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200 shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              Comprehensive Clinical Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight"
            >
              Tailored Fertility Treatments & <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Care Programs</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-slate-600 mt-2"
            >
              Individualized reproductive medicine tailored to AMH, ovarian reserve, genetic markers, and male factor diagnostics.
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowMatrix(!showMatrix)}
              className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                showMatrix
                  ? 'aura-btn-primary text-white border-rose-600 shadow-md'
                  : 'bg-white text-slate-700 border-rose-200 hover:bg-rose-50'
              }`}
            >
              <Table className={`w-4 h-4 ${showMatrix ? 'text-white' : 'text-rose-600'}`} />
              <span>{showMatrix ? 'Hide Comparison Matrix' : 'Compare All Protocols'}</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="aura-btn-primary px-5 py-3 rounded-2xl text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request Protocol Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix (Conditional Drawer) */}
        {showMatrix && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-12 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border border-rose-200"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Clinical Protocol Matrix</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">Side-by-Side Reproductive Technology Comparison</h3>
              </div>
              <button
                onClick={() => setShowMatrix(false)}
                className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-white cursor-pointer border border-rose-200 hover:bg-rose-50 shadow-2xs"
              >
                Close Table
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-rose-200 text-rose-800 font-bold uppercase tracking-wider text-[11px] bg-rose-100/40">
                    <th className="py-3 px-4 rounded-l-xl">Procedure</th>
                    <th className="py-3 px-4">Audited Success</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">Primary Clinical Indication</th>
                    <th className="py-3 px-4 rounded-r-xl">Embryology Stage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-rose-50/60 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                        <span>{row.treatment}</span>
                      </td>
                      <td className="py-4 px-4 font-extrabold text-rose-600">{row.successRate}</td>
                      <td className="py-4 px-4 text-slate-700 font-medium">{row.timeline}</td>
                      <td className="py-4 px-4 text-slate-600 max-w-xs">{row.bestFor}</td>
                      <td className="py-4 px-4 text-slate-600">{row.embryoStage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 text-white shadow-md shadow-rose-500/25 scale-102'
                  : 'bg-rose-50/70 text-slate-700 hover:bg-rose-100/70 border border-rose-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment, idx) => {
            const isFlagship = treatment.id === 'ivf-advanced';
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group rounded-3xl border border-rose-100 overflow-hidden flex flex-col justify-between hover:border-rose-400 hover:shadow-2xl transition-all duration-300 ${
                  isFlagship 
                    ? 'lg:col-span-2 bg-gradient-to-br from-white via-rose-50/30 to-amber-50/40 shadow-xl' 
                    : 'bg-white shadow-sm'
                }`}
              >
                <div>
                  {/* Banner & Success Tag */}
                  <div className={`relative ${isFlagship ? 'h-64 sm:h-72' : 'h-48'} overflow-hidden bg-slate-900`}>
                    <img
                      src={treatment.bannerImage}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-rose-600 text-xs font-black shadow-md border border-rose-100">
                        {treatment.successRate}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold">
                        {treatment.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                      <span className="font-semibold text-rose-100">{treatment.idealFor ? treatment.idealFor[0] : 'Specialized Care'}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Clinical Protocol</span>
                    </div>

                    <h3 className={`font-black text-slate-900 font-heading group-hover:text-rose-600 transition-colors ${
                      isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}>
                      {treatment.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {treatment.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div className="pt-3">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Protocol Features</div>
                      <div className={`space-y-2 ${isFlagship ? 'grid grid-cols-1 sm:grid-cols-2 gap-2 space-y-0' : ''}`}>
                        {treatment.keyHighlights.slice(0, isFlagship ? 4 : 3).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 bg-rose-50/50 p-2 rounded-xl border border-rose-100/70 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-rose-100 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="flex-1 py-3 px-4 rounded-2xl border border-rose-200 text-xs font-bold text-slate-700 hover:bg-rose-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-rose-600" />
                    <span>Clinical Details</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(treatment.title)}
                    className="aura-btn-primary py-3 px-5 rounded-2xl text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Modal for In-depth Treatment Protocol */}
        {selectedTreatment && (
          <TreatmentDetailModal
            treatment={selectedTreatment}
            onClose={() => setSelectedTreatment(null)}
            onOpenBooking={() => {
              const tTitle = selectedTreatment.title;
              setSelectedTreatment(null);
              onOpenBooking(tTitle);
            }}
          />
        )}

      </div>
    </section>
  );
};
