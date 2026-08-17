import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  TrendingUp, 
  Sparkles, 
  Microscope, 
  Heart, 
  Award, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Info,
  Calendar,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const IVFJourneyTimeline: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: 1,
      title: 'Consultation & Hormone Mapping',
      timeframe: 'Day 2 – 3 of Cycle',
      shortDesc: 'Comprehensive 3D ultrasound scanning for Antral Follicle Count (AFC) paired with baseline AMH, LH, and thyroid mapping.',
      clinicalGoal: 'Baseline clearance & customized stimulation dosage calculation',
      details: [
        'Advanced 3D transvaginal Doppler to check ovarian blood flow',
        'Serum AMH & Estradiol baseline hormone panel',
        'Partner Semen DNA Fragmentation (DFI) evaluation',
        'One-on-one protocol consultation with Senior Reproductive Endocrinologist'
      ],
      embryologistTip: 'Mild personalized stimulation plans produce higher cellular quality without stressing the ovaries.',
      badge: 'Stage 1: Diagnostics',
      icon: Activity
    },
    {
      stepNumber: 2,
      title: 'Targeted Ovarian Stimulation',
      timeframe: 'Days 3 – 12 (approx. 9–10 days)',
      shortDesc: 'Gentle subcutaneous recombinant FSH micro-injections to mature multiple healthy oocytes simultaneously.',
      clinicalGoal: 'Follicles achieve optimal maturity (18–20 mm size)',
      details: [
        'Painless self-injection pens with minimal side effects',
        'Serial ultrasound tracking every 48 hours to monitor follicular growth',
        'Estradiol & Progesterone checks to prevent Ovarian Hyperstimulation (OHSS)',
        'hCG or GnRH agonist trigger injection precisely 35–36 hours before retrieval'
      ],
      embryologistTip: 'Frequent scan monitoring allows fine-tuning medication within hours to optimize egg maturity.',
      badge: 'Stage 2: Stimulation',
      icon: TrendingUp
    },
    {
      stepNumber: 3,
      title: 'Gentle Retrieval (OPU) & Sperm Prep',
      timeframe: 'Day 13 – 14 (15 mins daycare)',
      shortDesc: 'Painless ultrasound-guided follicular aspiration under mild sedation with zero cuts or stitches.',
      clinicalGoal: 'Safe retrieval of mature metaphase-II oocytes',
      details: [
        '100% painless procedure performed while you are comfortably asleep',
        'Dedicated embryology hatch receiving eggs in constant 37°C thermal warmth',
        'ZyMōt™ microfluidic sorting isolates motile partner sperm with pristine DNA',
        'Private executive recovery room with discharge within 2 hours'
      ],
      embryologistTip: 'Immediate transfer of oocytes into Class-10,000 cleanroom chambers prevents ambient thermal shock.',
      badge: 'Stage 3: Retrieval',
      icon: Sparkles
    },
    {
      stepNumber: 4,
      title: 'AI Time-Lapse Embryology & Blastocyst',
      timeframe: 'Days 14 – 19 (5 Days in Lab)',
      shortDesc: 'High-magnification ICSI fertilization followed by extended incubation in Geri® AI multi-chamber incubators.',
      clinicalGoal: 'Development to Day-5/6 Expanded Blastocyst (100+ cells)',
      details: [
        'ICSI / PICSI physiological sperm micro-injection into each mature egg',
        'Continuous AI time-lapse recording every 5 minutes without opening incubator doors',
        'Morphokinetic algorithms rank embryos with the highest implantation potential',
        'Eliminates weak embryos that arrest between Day 3 and Day 5 naturally'
      ],
      embryologistTip: 'Blastocysts have an 84.6% implantation success rate compared to 35-40% for Day-3 embryos.',
      badge: 'Stage 4: Embryology',
      icon: Microscope
    },
    {
      stepNumber: 5,
      title: 'Laser Hatching & PGT-A Genetic Screening',
      timeframe: 'Day 19 or Frozen Cycle',
      shortDesc: 'Precision laser thinning of the outer zona shell and non-invasive genetic verification for 100% chromosomal normalcy.',
      clinicalGoal: 'Guarantees euploid embryo & reduces miscarriage odds by 74%',
      details: [
        'Octax laser pulses create a microscopic thinning in the outer membrane for easy hatching',
        'Optional PGT-A biopsy of 5–6 trophectoderm cells (non-inner cell mass)',
        'Next-Gen Sequencing (NGS) rules out Down Syndrome and chromosomal aneuploidies',
        'Cryotop® ultra-rapid flash vitrification preserves surplus blastocysts for future siblings'
      ],
      embryologistTip: 'Laser-assisted hatching dramatically assists older women and patients with previous failed implantations.',
      badge: 'Stage 5: Genetics',
      icon: ShieldCheck
    },
    {
      stepNumber: 6,
      title: 'Guided Single Embryo Transfer & Pregnancy',
      timeframe: '12 – 14 Days to Beta-hCG test',
      shortDesc: 'Gentle placement of the top-grade embryo into the optimal uterine receptive zone using EmbryoGlue®.',
      clinicalGoal: 'Positive Serum Beta-hCG & Gestational Sac Heartbeat',
      details: [
        'Completely painless 5-minute procedure under real-time abdominal ultrasound',
        'Catheter bathed in Hyaluronan-rich EmbryoGlue® for maximal tissue adherence',
        'Rest in private suite for 30 minutes before returning home',
        'Day-14 blood Beta-hCG quantitative test and first obstetric scan at Week 6'
      ],
      embryologistTip: 'Single embryo transfer gives you maximal pregnancy success with zero high-risk multiple pregnancy complications.',
      badge: 'Stage 6: New Life',
      icon: Heart
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="journey-section" className="py-20 sm:py-28 bg-gradient-to-b from-rose-50/20 via-white to-amber-50/20 border-y border-rose-100" aria-label="Interactive IVF Journey Timeline">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200 shadow-xs"
          >
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            Transparent Clinical Roadmap
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight"
          >
            Your 6-Stage IVF Journey, <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Clear & Supported</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 mt-2"
          >
            Step-by-step transparency with zero guesswork. Experience the world's most advanced embryology protocols designed for comfort and highest live birth odds.
          </motion.p>
        </div>

        {/* Horizontal Process Track with Progress Line */}
        <div className="relative mb-10">
          
          {/* Background Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-1 bg-rose-100 -z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              return (
                <button
                  key={s.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-3xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                    isActive
                      ? 'bg-gradient-to-br from-rose-500 via-pink-600 to-amber-500 text-white shadow-xl shadow-rose-500/25 scale-104 ring-2 ring-rose-400'
                      : isPast
                        ? 'bg-white text-slate-800 border border-rose-200 hover:border-rose-400 shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-rose-50/50 border border-rose-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : isPast ? 'bg-rose-50 text-rose-600 font-black' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{s.stepNumber}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : isPast ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-400 group-hover:text-rose-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="font-extrabold text-xs line-clamp-2 leading-tight">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="aura-glass-rose rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-2xl relative overflow-hidden"
          >
            
            {/* Watermark Number */}
            <div className="absolute right-6 bottom-2 text-9xl font-black text-rose-200/40 select-none pointer-events-none font-heading -z-0">
              0{current.stepNumber}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Info & Details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider border border-rose-200">
                    {current.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-rose-200 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 text-rose-600" />
                    {current.timeframe}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
                    {current.title}
                  </h3>
                  <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
                    {current.shortDesc}
                  </p>
                </div>

                {/* Goal Highlight */}
                <div className="p-4.5 rounded-2xl bg-emerald-50/90 border border-emerald-200 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Clinical Objective</div>
                    <div className="text-sm font-bold text-slate-800 mt-0.5">{current.clinicalGoal}</div>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Procedure Breakdown</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-2xl border border-rose-100/80 shadow-2xs">
                        <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5"></div>
                        <span className="font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Embryologist Insight Card */}
              <div className="lg:col-span-5 space-y-4">
                
                <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-950 via-rose-950/80 to-slate-900 text-white shadow-2xl border border-rose-500/30">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                    <Info className="w-4 h-4" />
                    Senior Embryologist Insight
                  </div>
                  <p className="text-sm text-rose-100/90 leading-relaxed italic mb-5">
                    "{current.embryologistTip}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-rose-500/20 text-xs text-slate-400">
                    <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white font-black shadow-md">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-white">Lahari Clinical Embryology Board</div>
                      <div className="text-rose-200/80">ISO Class 5 Protocol Standard</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-amber-950">Want to discuss your timeline?</div>
                    <div className="text-[11px] text-amber-800">Free personalized consultation slot available</div>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="aura-btn-primary px-4 py-2.5 rounded-xl text-white text-xs font-bold whitespace-nowrap cursor-pointer"
                  >
                    Schedule Consult
                  </button>
                </div>

              </div>

            </div>

            {/* Stage Progress Controls */}
            <div className="mt-10 pt-6 border-t border-rose-200/70 flex items-center justify-between">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`text-xs font-bold px-4 py-2.5 rounded-2xl border border-rose-200 transition-colors flex items-center gap-1.5 ${
                  activeStep === 0 ? 'opacity-40 cursor-not-allowed text-slate-400' : 'hover:bg-rose-50 text-slate-700 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4 text-rose-600" />
                <span>Previous Stage</span>
              </button>

              <span className="text-xs font-extrabold text-slate-500">
                Stage {activeStep + 1} of {steps.length}
              </span>

              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`text-xs font-bold px-5 py-2.5 rounded-2xl aura-btn-primary text-white transition-all flex items-center gap-1.5 ${
                  activeStep === steps.length - 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
