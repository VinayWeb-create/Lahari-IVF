import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  Activity,
  Heart,
  Dna,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Baby,
  Smile,
  Check,
  Award,
  Users
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';

interface HeroProps {
  onOpenBooking: (doctor?: string, type?: 'in_person' | 'video_consult', notes?: string) => void;
  onOpenAI: () => void;
  selectedCity: string;
}

// 5 Real Heartwarming Floating Hero Slides
const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=80',
    title: 'Ananya & Rahul Sen with Baby Diya',
    subtitle: 'Conceived via Day-5 Blastocyst & ZyMōt ICSI',
    badge: '1st Cycle Miracle',
    badgeColor: 'bg-rose-500 text-white',
    location: 'Lahari Hyderabad & Delhi NCR'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    title: 'Pooja & Vikram Sharma with Twin Boys',
    subtitle: 'Overcame 7 Years of Unexplained Infertility',
    badge: 'Healthy Twins Born',
    badgeColor: 'bg-amber-500 text-white',
    location: 'Lahari Bengaluru Flagship'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80',
    title: 'Baby Aarav (Born 4.2 kg)',
    subtitle: 'DuoStim Protocol for Diminished Ovarian Reserve (AMH 0.4)',
    badge: 'Low AMH Success',
    badgeColor: 'bg-purple-600 text-white',
    location: 'Lahari Mumbai & Pune'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&w=1000&q=80',
    title: 'Sneha & Rajesh Gupta with Baby Meera',
    subtitle: 'Genetic PGT-A Normal Embryo Transfer',
    badge: 'Zero Miscarriage Risk',
    badgeColor: 'bg-emerald-600 text-white',
    location: 'Lahari Chennai Flagship'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    title: 'Dr. Malini Sharma with Expectant Mother',
    subtitle: 'Individualized Mild Stimulation & Gentle ART Care',
    badge: 'Compassionate Care',
    badgeColor: 'bg-rose-600 text-white',
    location: 'Lahari Pan-India Network'
  }
];

// Floating baby cards for continuous marquee
const FLOATING_BABIES = [
  { name: 'Baby Vihaan', city: 'Hyderabad', weight: '3.4 kg', method: 'Day-5 Blastocyst', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=300&q=80', color: 'border-rose-200 bg-white/90 text-rose-950' },
  { name: 'Twins Kiara & Kabir', city: 'Delhi NCR', weight: '2.9 kg each', method: 'ZyMōt ICSI', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80', color: 'border-amber-200 bg-white/90 text-amber-950' },
  { name: 'Baby Anvi', city: 'Bengaluru', weight: '3.2 kg', method: 'Low AMH DuoStim', img: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=300&q=80', color: 'border-purple-200 bg-white/90 text-purple-950' },
  { name: 'Baby Reyansh', city: 'Mumbai', weight: '3.6 kg', method: 'Laser Assisted Hatching', img: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&w=300&q=80', color: 'border-emerald-200 bg-white/90 text-emerald-950' },
  { name: 'Baby Samaira', city: 'Chennai', weight: '3.1 kg', method: 'PGT-A Normal', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=300&q=80', color: 'border-pink-200 bg-white/90 text-pink-950' },
  { name: 'Baby Advik', city: 'Kolkata', weight: '3.5 kg', method: 'Micro-TESE IVF', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=300&q=80', color: 'border-teal-200 bg-white/90 text-teal-950' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAI, selectedCity }) => {
  const [selectedIndication, setSelectedIndication] = useState<string>('');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const heroRef = useRef<HTMLElement>(null);

  // Auto rotate slides every 5s
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const indicationTags = [
    { label: 'Low AMH / Age 35+', color: 'hover:border-rose-300 hover:bg-rose-50 text-rose-800 bg-white/80 border-rose-200' },
    { label: 'PCOS & Ovulatory', color: 'hover:border-purple-300 hover:bg-purple-50 text-purple-800 bg-white/80 border-purple-200' },
    { label: 'Severe Male Factor', color: 'hover:border-teal-300 hover:bg-teal-50 text-teal-800 bg-white/80 border-teal-200' },
    { label: 'Prior IVF Failure', color: 'hover:border-amber-300 hover:bg-amber-50 text-amber-800 bg-white/80 border-amber-200' },
    { label: 'Social Egg Freezing', color: 'hover:border-pink-300 hover:bg-pink-50 text-pink-800 bg-white/80 border-pink-200' }
  ];

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const scrollToExplore = () => {
    const el = document.getElementById('metrics-section') || document.getElementById('treatments-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col justify-between aura-hero-mesh overflow-hidden pt-6 pb-8 lg:pt-8 lg:pb-12"
      aria-label="Lahari IVF Hero"
    >
      {/* 1. Multi-Color Soft Ambient Glowing Orbs */}
      <div className="absolute top-[-8%] left-[8%] w-[550px] h-[550px] aurora-glow-rose pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-[20%] right-[-5%] w-[580px] h-[580px] aurora-glow-amber pointer-events-none -z-10 opacity-60" />
      <div className="absolute bottom-[10%] left-[25%] w-[480px] h-[480px] aurora-glow-purple pointer-events-none -z-10 opacity-50" />
      <div className="absolute bottom-[2%] right-[20%] w-[400px] h-[400px] aurora-glow-teal pointer-events-none -z-10 opacity-50" />

      {/* Subtle Polka Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E11D48_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none -z-10" />

      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Top Header Row with Smooth Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-sm text-xs font-bold text-rose-700"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
            </span>
            <span className="tracking-tight">ICMR Level-2 ART Bank & Fertility Hospital • ISO Class 5 Cleanrooms</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 text-xs text-slate-700 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/60 shadow-sm shadow-slate-200/50"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-extrabold text-slate-900">4.96 / 5.0</span>
              <span className="text-slate-500 hidden sm:inline">(14,200+ Miracle Families)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Grid: Left Editorial Story / Right Floating Image Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Main Editorial Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-100/90 via-amber-100/80 to-purple-100/80 text-rose-800 text-xs font-black uppercase tracking-wider border border-rose-200/60 shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                <span>Your Dream of Parenthood Starts Here</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 font-heading leading-[1.1]">
                Bringing Smiles & <br />
                The Joy of <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 drop-shadow-xs">Parenthood Home.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Advanced IVF, ICSI & Embryology with a proven <strong className="text-rose-700 font-bold">84.6% blastocyst success rate</strong>. Tailored fertility treatments, zero-cost EMI plans, and caring specialists dedicated to your family.
              </p>
            </motion.div>

            {/* Diagnostic Concern Pills */}
            <motion.div variants={itemVariants} className="space-y-2.5 pt-1">
              <div className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Choose Your Specific Clinical Concern:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {indicationTags.map((tag) => {
                  const isSelected = selectedIndication === tag.label;
                  return (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() => setSelectedIndication(isSelected ? '' : tag.label)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 border hover:scale-[1.03] active:scale-95 ${
                        isSelected
                          ? 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/20 scale-[1.03]'
                          : `${tag.color} shadow-2xs hover:border-rose-300 hover:shadow-sm`
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      <span>{tag.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking(undefined, 'video_consult', selectedIndication ? `Primary concern: ${selectedIndication}` : undefined)}
                className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 px-7 py-4 rounded-2xl text-white font-bold text-sm flex items-center gap-3 cursor-pointer group shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                id="hero-primary-book-btn"
              >
                <Calendar className="w-4 h-4 text-rose-100 group-hover:scale-110 transition-transform" />
                <span>Book Free 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAI}
                className="bg-white/90 backdrop-blur-md border border-slate-200 hover:border-purple-300 px-5 py-4 rounded-2xl text-slate-800 font-bold text-sm flex items-center gap-2 cursor-pointer group shadow-sm hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                id="hero-secondary-ai-btn"
              >
                <Sparkles className="w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
                <span>Dr. Lahari AI Assistant</span>
              </button>

              <a
                href={`https://wa.me/918004502872?text=Hi%20Lahari%20Fertility,%20I%20would%20like%20to%20consult%20a%20specialist%20in%20${encodeURIComponent(selectedCity)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-102"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">WhatsApp Doctor</span>
              </a>
            </motion.div>

            {/* Doctor Ticker & Live Available Slot */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 text-xs text-slate-700 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/60 max-w-lg shadow-md shadow-slate-200/40"
            >
              <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                {DOCTORS_DATA.slice(0, 4).map((doc) => (
                  <img
                    key={doc.id}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-rose-200 object-cover shadow-2xs"
                    src={doc.image}
                    alt={doc.name}
                  />
                ))}
              </div>
              <div className="truncate">
                <span className="font-bold text-slate-900">Next Slot in {selectedCity}:</span>{' '}
                <span className="text-emerald-700 font-bold">Today from 3:30 PM (Dr. Malini & Faculty)</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Imagery with Scroll-Driven Parallax Micro-Shifts */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px] sm:min-h-[560px]">
            
            <div className="relative w-full max-w-[500px]">
              
              {/* Layer 1: Clean Slider Frame with Glassmorphism */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-950/10 border-4 border-white/80 aura-glass-luxury p-2.5 bg-gradient-to-br from-rose-50/80 via-white/90 to-amber-50/80"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-4/5 sm:aspect-square bg-rose-50 group">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={HERO_SLIDES[activeSlide].image}
                        alt={HERO_SLIDES[activeSlide].title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                      />
                      
                      {/* Vignette Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"></div>

                      {/* Top Floating Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${HERO_SLIDES[activeSlide].badgeColor}`}>
                          ✨ {HERO_SLIDES[activeSlide].badge}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm border border-white/40">
                          {HERO_SLIDES[activeSlide].location}
                        </span>
                      </div>

                      {/* Bottom Story Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-base font-bold text-white drop-shadow-sm font-heading">
                          {HERO_SLIDES[activeSlide].title}
                        </div>
                        <div className="text-amber-200 text-xs font-medium mt-0.5">
                          {HERO_SLIDES[activeSlide].subtitle}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slide Navigation Buttons */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
                    <button
                      onClick={prevSlide}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all hover:scale-105 cursor-pointer border border-white/60"
                      aria-label="Previous miracle photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-all hover:scale-105 cursor-pointer border border-white/60"
                      aria-label="Next miracle photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slide Indicators / Dots */}
                  <div className="absolute bottom-16 right-4 flex gap-1.5 z-10">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setActiveSlide(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeSlide === idx ? 'w-6 bg-rose-500' : 'w-2 bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                </div>
              </motion.div>

              {/* Modern Bento Box Highlights (Directly Below Image Frame) */}
              <div className="grid grid-cols-2 gap-3 mt-4 w-full">
                
                {/* Bento Card 1: Full Width - 4.96★ Rating & 1,00,000+ Miracle Families */}
                <div className="col-span-2 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl p-4 shadow-lg shadow-rose-500/10 hover:shadow-xl hover:shadow-rose-500/20 transition-all hover:border-amber-300 group flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-slate-900 font-heading leading-snug mb-1">
                      1,00,000+ Miracle Families
                    </div>
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>Google & Practo Verified</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex text-amber-500 justify-end mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-extrabold px-2 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-200">
                      4.96★ Rating
                    </span>
                  </div>
                </div>

                {/* Bento Card 2: 95% Cumulative Rate */}
                <div className="col-span-1 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[24px] p-4 shadow-lg shadow-rose-500/5 hover:shadow-xl hover:shadow-rose-500/15 transition-all hover:border-rose-300 group flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-1 mb-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">
                      Audited Yield
                    </span>
                    <Activity className="w-4 h-4 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-rose-600 font-heading leading-tight mb-1">
                      95%
                    </div>
                    <div className="text-xs font-bold text-slate-800">Success Rate</div>
                  </div>
                </div>

                {/* Bento Card 3: Geri AI & Cleanroom */}
                <div className="col-span-1 bg-gradient-to-br from-purple-50/90 to-white/80 backdrop-blur-2xl border border-white/60 rounded-[24px] p-4 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/15 transition-all hover:border-purple-300 group flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md">
                      <Dna className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-black text-purple-950 leading-tight mb-1">
                      Geri® AI
                    </div>
                    <div className="text-[10px] text-purple-700 font-bold">
                      ISO Class 5 Cleanroom
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Dynamic Continuous Floating Miracles Marquee */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-rose-100">
          <div className="flex items-center gap-2 mb-3">
            <Baby className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-bold uppercase text-slate-700 tracking-wider">
              Recent Miracle Babies Born at Lahari Centres:
            </span>
          </div>

          <div className="overflow-hidden relative w-full py-1">
            <div className="flex gap-4 animate-marquee">
              {[...FLOATING_BABIES, ...FLOATING_BABIES].map((baby, idx) => (
                <div
                  key={idx}
                  className={`shrink-0 flex items-center gap-3 px-4 py-2 rounded-2xl border ${baby.color} shadow-xs backdrop-blur-md transition-all hover:scale-102`}
                >
                  <img
                    src={baby.img}
                    alt={baby.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-2xs"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{baby.name}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700">
                        {baby.city}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">
                      {baby.method} • {baby.weight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust & Telemetry Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 pt-5 border-t border-rose-100 grid grid-cols-2 md:grid-cols-5 gap-3 text-center items-center"
        >
          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-rose-100 shadow-sm shadow-rose-950/5">
            <div className="text-2xl sm:text-3xl font-black text-rose-600 font-heading">
              1,00,000+
            </div>
            <div className="text-xs text-slate-700 font-bold">Babies Delivered</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-100 shadow-sm shadow-purple-950/5">
            <div className="text-2xl sm:text-3xl font-black text-purple-600 font-heading">
              25+ Years
            </div>
            <div className="text-xs text-slate-700 font-bold">Reproductive Leadership</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100 shadow-sm shadow-emerald-950/5">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-heading">
              60+ Specialists
            </div>
            <div className="text-xs text-slate-700 font-bold">Global Clinical Faculty</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-100 shadow-sm shadow-amber-950/5">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 font-heading">
              0% Interest
            </div>
            <div className="text-xs text-slate-700 font-bold">No-Cost EMI Schemes</div>
          </div>

          <div className="col-span-2 md:col-span-1 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-rose-100 flex flex-col items-center justify-center shadow-sm">
            <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
              Accreditations
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-700">
              <span className="px-2 py-0.5 rounded-lg bg-rose-50 border border-rose-200">ICMR</span>
              <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">NABH</span>
              <span className="px-2 py-0.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200">ESHRE</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-5">
          <button
            onClick={scrollToExplore}
            className="flex flex-col items-center gap-1 text-rose-600 hover:text-rose-700 transition-colors cursor-pointer text-xs font-bold group"
            aria-label="Scroll to exploration section"
          >
            <span>Explore Treatments & Lab Excellence</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-rose-600" />
          </button>
        </div>

      </div>
    </section>
  );
};

