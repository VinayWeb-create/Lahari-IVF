import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Microscope, 
  FileCheck, 
  Lock,
  Globe2,
  Sparkles,
  Building2
} from 'lucide-react';

export const TrustAndAccreditation: React.FC = () => {
  const accreditations = [
    {
      title: 'ICMR ART Act 2021',
      badge: 'National Mandate',
      desc: '100% compliant with National Assisted Reproductive Technology & Surrogacy Act guidelines.',
      org: 'Ministry of Health & ICMR',
      bg: 'bg-rose-50/70 border-rose-200/80',
      badgeColor: 'bg-rose-100 text-rose-800 border border-rose-200'
    },
    {
      title: 'ISAR Certified Clinic',
      badge: 'Embryology Standard',
      desc: 'Indian Society for Assisted Reproduction accredited clinical and laboratory protocol.',
      org: 'Indian Society for Assisted Reproduction',
      bg: 'bg-pink-50/70 border-pink-200/80',
      badgeColor: 'bg-pink-100 text-pink-800 border border-pink-200'
    },
    {
      title: 'ESHRE & ASRM Guidelines',
      badge: 'Global Science',
      desc: 'Protocols aligned with European & American reproductive medicine benchmarks.',
      org: 'ESHRE / ASRM Member Faculty',
      bg: 'bg-purple-50/70 border-purple-200/80',
      badgeColor: 'bg-purple-100 text-purple-800 border border-purple-200'
    },
    {
      title: 'NABH Digital Healthcare',
      badge: 'Hospital Safety',
      desc: 'Highest tier of patient safety, zero-infection operation theatres, and rights charter.',
      org: 'National Accreditation Board',
      bg: 'bg-amber-50/70 border-amber-200/80',
      badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200'
    },
    {
      title: 'ISO Class 5 Cleanroom Lab',
      badge: 'Bio-Safety Tier 1',
      desc: 'Positive air pressure with HEPA 0.3μm VOC filtration for total embryo protection.',
      org: 'ISO 14644-1 Cleanroom Certified',
      bg: 'bg-emerald-50/70 border-emerald-200/80',
      badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-200'
    },
    {
      title: 'CAP Laboratory Benchmarking',
      badge: 'Quality Control',
      desc: 'College of American Pathologists proficiency testing for high-precision genetics.',
      org: 'College of American Pathologists',
      bg: 'bg-blue-50/70 border-blue-200/80',
      badgeColor: 'bg-blue-100 text-blue-900 border border-blue-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-rose-50/30 to-white border-t border-rose-100">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2 border border-rose-200 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
            National & International Accreditations
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            Strict Global Benchmarks for <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Every Embryo</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every cleanroom laboratory maintains positive air pressure, HEPA VOC air filtering, and continuous AI temperature telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accreditations.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl ${item.bg} border space-y-3 flex flex-col justify-between hover:shadow-xl hover:scale-102 transition-all`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">2026 Verified</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="truncate text-[11px]">{item.org}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

