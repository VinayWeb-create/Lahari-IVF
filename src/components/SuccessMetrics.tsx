import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Award, 
  Microscope, 
  TrendingUp, 
  Zap,
  ChevronRight,
  Sparkles,
  Building2,
  Calendar,
  Heart,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface SuccessMetricsProps {
  onOpenBooking: () => void;
}

// Micro Animated Count-Up Hook Component
const AnimatedCounter: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number }> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 1.5
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
};

export const SuccessMetrics: React.FC<SuccessMetricsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'blastocyst' | 'duostim' | 'pgta'>('blastocyst');

  const comparisonData = {
    blastocyst: {
      rate: '84.6%',
      rateNum: 84.6,
      nationalAvg: '42.1%',
      nationalNum: 42.1,
      label: 'Day-5 Blastocyst Transfer',
      desc: 'Extended Geri® AI time-lapse culture allows only genetically robust 100+ cell blastocysts to be transferred, doubling implantation success per transfer.'
    },
    duostim: {
      rate: '79.2%',
      rateNum: 79.2,
      nationalAvg: '31.5%',
      nationalNum: 31.5,
      label: 'Dual-Stimulation Protocol (DuoStim)',
      desc: 'Specialized luteal-phase double stimulation specifically designed for Low AMH and poor ovarian responders to bank maximum viable oocytes in one menstrual cycle.'
    },
    pgta: {
      rate: '88.2%',
      rateNum: 88.2,
      nationalAvg: '48.0%',
      nationalNum: 48.0,
      label: 'PGT-A Next-Gen Sequencing (NGS)',
      desc: 'Chromosomal euploidy screening rules out aneuploidies before frozen transfer, cutting miscarriage rates by 74%.'
    }
  };

  const currentComp = comparisonData[activeTab];

  const primaryStats = [
    {
      value: 25,
      suffix: '+',
      label: 'Years of Clinical Mastery',
      sublabel: 'Founded in 2001 by senior pioneers',
      icon: Award,
      accent: 'amber'
    },
    {
      value: 100000,
      suffix: '+',
      label: 'Miracle Babies Delivered',
      sublabel: 'Across 42 countries worldwide',
      icon: Heart,
      accent: 'rose'
    },
    {
      value: 95,
      suffix: '%',
      label: 'Cumulative IVF Success',
      sublabel: 'Over 3 cycles with Blastocyst culture',
      icon: TrendingUp,
      accent: 'amber'
    },
    {
      value: 60,
      suffix: '+',
      label: 'Flagship & Satellite Centres',
      sublabel: 'ISO Class 5 Cleanrooms in 18 cities',
      icon: Building2,
      accent: 'purple'
    }
  ];

  return (
    <section id="metrics-section" className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/30 to-amber-50/40 border-y border-rose-100/60 relative overflow-hidden" aria-label="Clinical Success Metrics & Telemetry">
      {/* Background Soft Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Animated Count-Up Stat Strip with Amber Accents */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {primaryStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`p-5 sm:p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 relative overflow-hidden ${
                    stat.accent === 'amber'
                      ? 'bg-gradient-to-br from-amber-500/10 via-amber-50/40 to-white/90 border-amber-300/60 shadow-lg shadow-amber-950/5'
                      : stat.accent === 'rose'
                      ? 'bg-gradient-to-br from-rose-500/10 via-rose-50/40 to-white/90 border-rose-300/60 shadow-lg shadow-rose-950/5'
                      : 'bg-gradient-to-br from-purple-500/10 via-purple-50/40 to-white/90 border-purple-300/60 shadow-lg shadow-purple-950/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      stat.accent === 'amber' 
                        ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                        : stat.accent === 'rose'
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                        : 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {stat.accent === 'amber' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 border border-amber-300/60 uppercase tracking-wider">
                        Audited
                      </span>
                    )}
                  </div>
                  
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight ${
                    stat.accent === 'amber' ? 'text-amber-700' : stat.accent === 'rose' ? 'text-rose-600' : 'text-purple-700'
                  }`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    {stat.sublabel}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-amber-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Audited Clinical Excellence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight leading-tight"
          >
            Proven Science, <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Higher Take-Home Baby Rates</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-3"
          >
            Every clinical outcome is independently audited under ICMR 2021 Assisted Reproductive Technology statutory guidelines and ESHRE international quality parameters.
          </motion.p>
        </div>

        {/* 3. Luxury Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Card 1: Interactive Live Success Rate Comparator (Spans 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gradient-to-br from-rose-50/90 via-pink-50/70 to-amber-50/80 rounded-3xl p-7 sm:p-9 text-slate-900 shadow-xl relative overflow-hidden flex flex-col justify-between border border-rose-200"
          >
            {/* Ambient Coral & Rose Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl aura-btn-primary flex items-center justify-center text-white shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Audited Live Birth Yield</span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">Lahari vs. National Benchmark</h3>
                  </div>
                </div>

                {/* Protocol Tabs */}
                <div className="flex items-center bg-white p-1.5 rounded-2xl border border-rose-200 text-xs shadow-2xs">
                  <button
                    onClick={() => setActiveTab('blastocyst')}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                      activeTab === 'blastocyst' ? 'aura-btn-primary text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Blastocyst Day 5
                  </button>
                  <button
                    onClick={() => setActiveTab('duostim')}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                      activeTab === 'duostim' ? 'aura-btn-primary text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Low AMH DuoStim
                  </button>
                  <button
                    onClick={() => setActiveTab('pgta')}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                      activeTab === 'pgta' ? 'aura-btn-primary text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    PGT-A NGS
                  </button>
                </div>
              </div>

              {/* Numbers & Visual Comparison Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 p-6 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                <div>
                  <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Lahari Verified Rate
                  </div>
                  <div className="text-5xl font-black text-rose-600 font-heading my-1 tracking-tight">
                    {currentComp.rate}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Verified live birth success per single embryo transfer
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">National Average Benchmark</div>
                  <div className="text-4xl font-black text-slate-400 font-heading my-1 tracking-tight">
                    {currentComp.nationalAvg}
                  </div>
                  <div className="text-xs text-slate-500">
                    Standard conventional Day-3 transfer clinics
                  </div>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-rose-700 font-bold">
                    Lahari Advantage (+{(currentComp.rateNum - currentComp.nationalNum).toFixed(1)}% Higher Live Births)
                  </span>
                  <span className="text-slate-400">100% Scale</span>
                </div>
                <div className="h-3.5 w-full bg-rose-100 rounded-full overflow-hidden p-0.5 border border-rose-200">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${currentComp.rateNum}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-full shadow-xs"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-4">
                {currentComp.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-rose-200 flex flex-wrap items-center justify-between gap-2 mt-6 relative z-10">
              <span className="text-[11px] text-slate-500">
                Source: ICMR Registry & Independent Clinical Audit
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Discuss Your Specific Prognosis</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Bento Sub-cards (Spans 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Bento Card 2: Live Cleanroom Biosafety Telemetry */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aura-glass-emerald rounded-3xl p-6 sm:p-7 border border-emerald-200/80 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Biosafety Standard</span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">Cleanroom Telemetry</h4>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-[11px] font-extrabold border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    ISO Class 5 Active
                  </span>
                </div>

                <div className="text-2xl font-black text-slate-900 font-heading mt-2">
                  99.999% HEPA Air Purity
                </div>
                <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                  Volatile Organic Compounds (VOC) at 0.00 ppm with laminar airflow chambers preventing embryonic cellular shock.
                </p>

                {/* Telemetry Micro Readouts */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-emerald-200/70 text-center">
                  <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200 shadow-xs">
                    <div className="text-[10px] text-slate-500 font-semibold">Incubator Temp</div>
                    <div className="text-xs font-bold text-emerald-800">37.0°C ±0.05</div>
                  </div>
                  <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200 shadow-xs">
                    <div className="text-[10px] text-slate-500 font-semibold">CO₂ Buffer</div>
                    <div className="text-xs font-bold text-emerald-800">5.8% Stable</div>
                  </div>
                  <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200 shadow-xs">
                    <div className="text-[10px] text-slate-500 font-semibold">VOC Level</div>
                    <div className="text-xs font-bold text-emerald-700">0.00 ppm</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3: Vitrification Survival & Flash-Freeze with Amber Glow */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="aura-glass-amber rounded-3xl p-6 sm:p-7 border border-amber-300/80 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Cryopreservation</span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">Flash Vitrification</h4>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-amber-200 text-amber-900 border border-amber-300">
                    Cryotop® Safety
                  </span>
                </div>

                <div className="text-2xl font-black text-slate-900 font-heading mt-2">
                  98.2% Vitrification Thaw Survival
                </div>
                <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                  Ultra-rapid liquid nitrogen flash freezing (-196°C) guarantees zero intracellular ice crystal formation for eggs and blastocysts.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/70 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Surplus blastocysts preserved safely for years</span>
                <span className="text-amber-800 font-bold">10-Year Safe Guarantee</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

