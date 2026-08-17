import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Activity, 
  Shield, 
  Microscope,
  Award,
  ChevronRight,
  Filter
} from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { Treatment } from '../types';

interface TreatmentsViewProps {
  onOpenBooking: (doctor?: string) => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({ 
  onOpenBooking, 
  onSelectTreatment 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Advanced IVF', 'Male Infertility', 'Fertility Preservation', 'Genetic Screening'];

  const filteredTreatments = TREATMENTS_DATA.filter(t => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Advanced IVF') return t.id.includes('ivf') || t.id.includes('iui');
    if (selectedCategory === 'Male Infertility') return t.id.includes('icsi') || t.id.includes('male');
    if (selectedCategory === 'Fertility Preservation') return t.id.includes('egg');
    if (selectedCategory === 'Genetic Screening') return t.id.includes('pgt');
    return true;
  });

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Hero Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 relative overflow-hidden border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-3">
            <Microscope className="w-4 h-4" />
            <span>Clinical Treatments & Embryology Protocols</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Evidence-Based Treatments Tailored to Your{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Exact Biological Profile
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            From Day-5 Blastocyst culture and Laser Assisted Hatching to Micro-TESE surgical sperm retrieval and PGT-A genomic screening, our treatments are designed around clinical precision rather than trial and error.
          </p>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-rose-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'aura-btn-primary text-white shadow-md'
                    : 'bg-white border border-rose-100 text-slate-700 hover:bg-rose-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Treatments List Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="rounded-3xl border border-rose-100 bg-[#FFFDFD] hover:border-rose-300 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectTreatment(treatment)}
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={treatment.bannerImage}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {treatment.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-rose-600 text-[10px] font-bold shadow-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{treatment.successRate}</span>
                      </div>
                      <div className="text-[11px] text-rose-100 font-medium">
                        {treatment.duration}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-rose-600 transition-colors">
                      {treatment.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {treatment.shortDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-rose-100">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Clinical Highlights</div>
                      {treatment.keyHighlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Full Clinical Protocol</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                    className="aura-btn-primary px-3.5 py-1.5 rounded-xl text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Consult Doctor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clinical Comparison Matrix */}
      <section className="py-16 bg-rose-50/30 border-t border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Comparing Fertility Treatment Pathways
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our clinical team selects the least invasive, highest-probability pathway based on your AMH, semen analysis, and pelvic ultrasound.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-rose-100 bg-white shadow-sm">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-rose-50/90 text-rose-900 uppercase text-[11px] font-bold tracking-wider border-b border-rose-100">
                <tr>
                  <th className="p-4">Treatment Pathway</th>
                  <th className="p-4">Invasiveness</th>
                  <th className="p-4">Average Timeline</th>
                  <th className="p-4">Ideal Indication</th>
                  <th className="p-4">Success Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-50">
                <tr className="hover:bg-rose-50/40">
                  <td className="p-4 font-bold text-slate-900">Intrauterine Insemination (IUI)</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Non-Invasive</span></td>
                  <td className="p-4">12–14 Days</td>
                  <td className="p-4">Mild male factor, unexplained infertility &lt;2 years, cervical hostility</td>
                  <td className="p-4 font-bold text-rose-600">22–28% per cycle</td>
                </tr>
                <tr className="hover:bg-rose-50/40">
                  <td className="p-4 font-bold text-slate-900">Advanced Day-5 Blastocyst IVF</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">Minimally Invasive</span></td>
                  <td className="p-4">18–21 Days</td>
                  <td className="p-4">Tubal block, low AMH, endometriosis, failed IUI cycles</td>
                  <td className="p-4 font-bold text-emerald-600">84.6% per transfer</td>
                </tr>
                <tr className="hover:bg-rose-50/40">
                  <td className="p-4 font-bold text-slate-900">PICSI & ZyMōt Microfluidics</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Embryology Focus</span></td>
                  <td className="p-4">Same as IVF</td>
                  <td className="p-4">High Sperm DNA fragmentation (DFI &gt;25%), poor sperm motility</td>
                  <td className="p-4 font-bold text-emerald-600">86.2% fertilization</td>
                </tr>
                <tr className="hover:bg-rose-50/40">
                  <td className="p-4 font-bold text-slate-900">Micro-TESE Andrology Surgery</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">Micro-Surgical</span></td>
                  <td className="p-4">Daycare (2 Hours)</td>
                  <td className="p-4">Non-obstructive Azoospermia (Zero sperm count)</td>
                  <td className="p-4 font-bold text-rose-600">62.8% sperm retrieval</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
