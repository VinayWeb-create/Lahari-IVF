import React, { useState } from 'react';
import { 
  Microscope, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Eye, 
  Play, 
  Lock,
  Layers,
  ThermometerSnowflake,
  Wind
} from 'lucide-react';

interface FacilitiesGalleryViewProps {
  onOpenBooking: () => void;
}

export const FacilitiesGalleryView: React.FC<FacilitiesGalleryViewProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cleanroom' | 'incubators' | 'cryo' | 'surgical'>('all');

  const facilityItems = [
    {
      id: 'cleanroom-iso5',
      category: 'cleanroom',
      title: 'Class 10,000 ISO-Certified Modular Cleanrooms',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      tag: 'Air Quality Benchmark',
      description: 'Triple-stage HEPA filtration with continuous positive pressure and zero-VOC architectural finishes to eliminate toxic airborne hydrocarbons.'
    },
    {
      id: 'geri-incubator',
      category: 'incubators',
      title: 'Geri® AI Time-Lapse Continuous Incubators',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      tag: 'Embryo Safety',
      description: 'Dedicated independent micro-chambers with individual high-resolution optical sensors. Embryos are tracked 24/7 without removing them from their physiological haven.'
    },
    {
      id: 'cryo-vault',
      category: 'cryo',
      title: 'Liquid Nitrogen Cryo-Preservation Vaults (-196°C)',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
      tag: 'Vitrification Excellence',
      description: 'Ultra-rapid flash vitrification system with 24/7 telemetry and automated backup generators, guaranteeing 98.2% post-thaw oocyte and blastocyst survival.'
    },
    {
      id: 'ngs-genetics',
      category: 'cleanroom',
      title: 'Next-Generation Sequencing (NGS) PGT-A Lab',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
      tag: 'Genomic Precision',
      description: 'High-resolution Illumina sequencing platform capable of screening all 24 chromosomes for aneuploidy and single-gene mutations prior to transfer.'
    },
    {
      id: 'micro-tese-ot',
      category: 'surgical',
      title: 'Zeiss 25x Surgical Micro-TESE Operating Theatre',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
      tag: 'Andrology Surgery',
      description: 'Carl Zeiss Opmi Vario surgical microscopes enabling high-magnification dissection of dilated testicular tubules in severe non-obstructive azoospermia.'
    },
    {
      id: 'doppler-usg',
      category: 'surgical',
      title: 'Voluson™ E10 4D High-Definition Doppler Ultrasound',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      tag: 'Diagnostic Imaging',
      description: 'Precision endometrial vascularity assessment and automated Antral Follicle Count (SonoAVC™) for millimeter-accurate stimulation mapping.'
    }
  ];

  const filteredItems = facilityItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 relative overflow-hidden border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ISO Class 5 Embryology Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Inside India’s Most Advanced{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Cleanroom Embryology Laboratories
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            The secret behind our 88.6% blastocyst success rate lies in our laboratory physics. From zero-VOC building materials to AI time-lapse continuous incubators, we recreate the exact human maternal microenvironment.
          </p>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-rose-200/80">
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'cleanroom', label: 'Cleanroom & Airflow' },
              { id: 'incubators', label: 'AI Time-Lapse Incubators' },
              { id: 'cryo', label: 'Liquid Nitrogen Cryo Vault' },
              { id: 'surgical', label: 'Surgical Theatres & USG' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'aura-btn-primary text-white shadow-md'
                    : 'bg-white border border-rose-100 text-slate-700 hover:bg-rose-50/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="rounded-3xl border border-rose-100 bg-[#FFFDFD] overflow-hidden hover:shadow-2xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-rose-600 text-[10px] font-bold shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-rose-100 flex items-center justify-between text-[11px] font-semibold text-emerald-600">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Audited Weekly
                    </span>
                    <span className="text-slate-400">NABH & ESHRE Standards</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Laboratory Airflow & VOC Elimination Benchmark */}
      <section className="py-16 bg-gradient-to-b from-rose-50/50 via-pink-50/30 to-amber-50/40 text-slate-900 border-t border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Atmospheric Integrity</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-1">
              Why Embryos Thrive in Our Cleanrooms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Developing human embryos do not possess immune systems and are extraordinarily sensitive to airborne volatile organic compounds (VOCs).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Triple HEPA & Carbon Filters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                99.997% filtration down to 0.3 microns, scrubbing particulate matter and microbial contaminants continuously.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Positive Pressure Airflow</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cleanroom air pressure is maintained at +25 Pascals, ensuring that when doors open, air only flows outward.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Redundant Backup Generators</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-lag dual UPS and automatic diesel power backups guarantee unbroken environmental parameters 365 days a year.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="aura-btn-primary px-8 py-3.5 rounded-2xl text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              Schedule a Centre & Lab Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
