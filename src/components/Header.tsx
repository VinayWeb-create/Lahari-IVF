import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  ChevronDown, 
  Sparkles, 
  MapPin, 
  UserCheck, 
  Activity, 
  Menu, 
  X,
  Globe,
  Sun,
  Moon,
  Heart,
  ArrowRight,
  Stethoscope,
  Microscope,
  Award,
  CreditCard,
  Building2,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: (doctor?: string, type?: 'in_person' | 'video_consult') => void;
  onOpenAI: () => void;
  onOpenPortal: () => void;
  onOpenAdmin: () => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenBooking,
  onOpenAI,
  onOpenPortal,
  onOpenAdmin,
  selectedCity,
  setSelectedCity,
  isDarkMode,
  setIsDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'treatments' | 'about' | 'tools' | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: 'treatments' | 'about' | 'tools') => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const cities = ['New Delhi & NCR', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Chennai', 'Pune', 'Kolkata'];
  const languages = ['English', 'हिन्दी (Hindi)', 'தமிழ் (Tamil)', 'తెలుగు (Telugu)', 'ಕನ್ನಡ (Kannada)', 'বাংলা (Bengali)'];

  const handleNavClick = (view: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full transition-all duration-300"
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Top Clinical & Trust Utility Bar with Live Offer */}
      <div className="bg-gradient-to-r from-rose-50/95 via-pink-50/80 to-amber-50/90 text-slate-700 text-xs py-2 px-4 border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Left: Live Status & 0% EMI Offer Banner */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="tracking-tight text-[11px] sm:text-xs">14 Specialists Live</span>
            </div>

            {/* Sticky Live Financing Offer Pill */}
            <button
              onClick={() => handleNavClick('packages')}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-100 to-amber-100 border border-amber-300/80 text-amber-900 hover:text-amber-950 text-[11px] font-semibold transition-colors cursor-pointer group shadow-2xs"
            >
              <span className="font-bold text-rose-700">0% EMI Available</span>
              <span className="hidden md:inline text-slate-600">• Starting ₹5,999/mo</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-amber-700" />
            </button>
          </div>

          {/* Right: City, Language, 24/7 Helpline & Staff */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            {/* City Selector */}
            <div className="relative">
              <button 
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="flex items-center gap-1 text-slate-700 hover:text-rose-700 font-medium transition-colors cursor-pointer py-0.5 text-xs"
                id="header-city-selector"
                aria-expanded={cityDropdownOpen}
                aria-label={`Select flagship city, currently ${selectedCity}`}
              >
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                <span className="font-semibold text-slate-800 hidden xs:inline">{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>
              {cityDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white text-slate-800 rounded-2xl shadow-xl border border-rose-100 py-2 z-50">
                  <div className="px-3.5 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Select Flagship Centre</div>
                  {cities.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedCity(c);
                        setCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs hover:bg-rose-50 transition-colors flex items-center justify-between ${selectedCity === c ? 'text-rose-600 font-bold bg-rose-50/60' : ''}`}
                    >
                      {c}
                      {selectedCity === c && <span className="h-1.5 w-1.5 rounded-full bg-rose-600"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-slate-700 hover:text-rose-700 font-medium transition-colors cursor-pointer py-0.5 text-xs"
                id="header-lang-selector"
                aria-expanded={langDropdownOpen}
                aria-label={`Select language, currently ${currentLang}`}
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{currentLang.split(' ')[0]}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-white text-slate-800 rounded-2xl shadow-xl border border-rose-100 py-2 z-50">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setCurrentLang(l);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-rose-50 transition-colors"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 24/7 Helpline */}
            <a 
              href="tel:+918004502872" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-rose-700 font-medium transition-colors"
              id="header-helpline"
              aria-label="Call 24/7 Clinical Care Helpline at 1800-450-Lahari"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden lg:inline text-slate-600">24/7 Helpline:</span>
              <span className="font-bold text-slate-900 tracking-tight">1800-450-Lahari</span>
            </a>

            {/* Staff Portal Link */}
            <button
              onClick={onOpenAdmin}
              className="hidden xl:inline text-[11px] text-slate-600 hover:text-slate-900 transition-colors px-2 py-0.5 rounded-lg border border-rose-200 hover:bg-rose-50"
              title="Hospital Staff & Clinical Admin Portal"
            >
              Staff
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Shrink-on-Scroll */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-rose-950/5 py-3 border-b border-rose-100/60' 
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-rose-100'
      }`}>
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer"
              id="header-brand-logo"
              aria-label="Lahari IVF Hospital Home"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-lg shadow-rose-500/25 group-hover:scale-105 transition-transform">
                <img src="/logo.jpg" alt="Lahari IVF Hospital Logo" className="w-full h-full object-cover scale-[1.35]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-heading">Lahari</span>
                  <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-widest px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-700 border border-rose-200/80 mt-1">HOSPITAL</span>
                </div>
                <p className="text-[9px] text-slate-500 font-medium tracking-tight mt-0.5">Reproductive Medicine & IVF</p>
              </div>
            </button>
          </div>

          {/* Grouped Desktop Navigation Mega-Menu */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-bold text-slate-800" aria-label="Main Navigation">
            
            {/* Mega Item 1: Treatments & Tech */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('treatments')}
            >
              <button 
                onClick={() => handleNavClick('treatments')}
                className={`px-3 py-2.5 rounded-xl flex items-center gap-1.5 hover:text-rose-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:shadow-sm transition-all cursor-pointer ${
                  currentView === 'treatments' || currentView === 'treatment-detail' ? 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 font-black' : ''
                }`}
              >
                <span>Treatments & Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'treatments' ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Mega Item 2: Why Lahari & Doctors */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
            >
              <button 
                onClick={() => handleNavClick('doctors')}
                className={`px-3 py-2.5 rounded-xl flex items-center gap-1.5 hover:text-rose-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:shadow-sm transition-all cursor-pointer ${
                  currentView === 'doctors' || currentView === 'about' ? 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 font-black' : ''
                }`}
              >
                <span>Specialists & Care</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'about' ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Mega Item 3: Pricing & Patient Tools */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('tools')}
            >
              <button 
                onClick={() => handleNavClick('packages')}
                className={`px-3 py-2.5 rounded-xl flex items-center gap-1.5 hover:text-rose-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:shadow-sm transition-all cursor-pointer ${
                  currentView === 'packages' || currentView === 'calculator' ? 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 font-black' : ''
                }`}
              >
                <span>Pricing & Tools</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'tools' ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Direct Link: Centres */}
            <button 
              onClick={() => handleNavClick('branches')} 
              className={`px-3 py-2.5 rounded-xl hover:text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:shadow-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                currentView === 'branches' ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-black' : ''
              }`}
            >
              <MapPin className={`w-4 h-4 ${currentView === 'branches' ? 'text-emerald-600' : 'text-emerald-500'}`} />
              <span>Centres</span>
            </button>

            {/* Direct Link: Success Stories */}
            <button 
              onClick={() => handleNavClick('stories')} 
              className={`px-3 py-2.5 rounded-xl hover:text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:shadow-sm transition-all cursor-pointer ${
                currentView === 'stories' ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-black' : ''
              }`}
            >
              Stories
            </button>

            {/* Direct Link: Fertility Score Tool */}
            <button 
              onClick={() => handleNavClick('calculator')} 
              className={`px-4 py-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 border border-rose-200/60 text-purple-700 hover:from-rose-100 hover:to-purple-100 transition-all cursor-pointer flex items-center gap-1.5 font-bold shadow-sm hover:shadow-md ml-2`}
            >
              <Activity className="w-4 h-4 text-rose-600" />
              <span>Fertility Score</span>
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dr. Lahari AI Assistant */}
            <button
              onClick={onOpenAI}
              className="aura-btn-glass px-3.5 py-2 rounded-xl text-xs font-bold text-purple-700 flex items-center gap-1.5 cursor-pointer shadow-2xs hover:shadow-xs"
              id="header-ai-copilot-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Dr. Lahari AI</span>
            </button>

            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/918004502872?text=Hello%20Lahari%20Fertility,%20I%20would%20like%20to%20consult%20a%20senior%20fertility%20specialist"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all"
              title="Chat on WhatsApp"
              aria-label="Chat with Care Team on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Primary Book Consultation CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="aura-btn-primary px-4.5 py-2 rounded-xl text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md shadow-rose-500/20"
              id="header-book-consult-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Priority Consult</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="aura-btn-primary text-xs font-bold px-3 py-2 rounded-xl text-white shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-rose-50 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mega-Menu Dropdown Panel */}
      {activeMegaMenu && (
        <div 
          className="hidden lg:block absolute left-0 right-0 w-full bg-white/95 backdrop-blur-xl border-b border-rose-100 shadow-2xl z-40 animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => {
            if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-6 py-8">
            {activeMegaMenu === 'treatments' && (
              <div className="grid grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                    <Microscope className="w-4 h-4" />
                    <span>Core Reproductive Tech</span>
                  </div>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-rose-600 text-left w-full py-1">
                        Self-Cycle IVF with Blastocyst Culture
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-rose-600 text-left w-full py-1">
                        ICSI & IMSI High-Magnification
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-rose-600 text-left w-full py-1">
                        Low AMH & DuoStim Dual Stimulation
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-rose-600 text-left w-full py-1">
                        Laser-Assisted Hatching (LAH)
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-purple-600 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Genomics & Preservation</span>
                  </div>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-purple-600 text-left w-full py-1">
                        PGT-A & PGT-M Embryo Genetic Screening
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-purple-600 text-left w-full py-1">
                        Oocyte Cryopreservation (Egg Freezing)
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('treatments')} className="hover:text-purple-600 text-left w-full py-1">
                        Micro-TESE & Male Andrology
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('facilities')} className="hover:text-purple-600 text-left w-full py-1">
                        Geri® AI Continuous Time-Lapse Incubators
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cleanroom Labs & Safety</span>
                  </div>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    <li>
                      <button onClick={() => handleNavClick('facilities')} className="hover:text-emerald-600 text-left w-full py-1">
                        ISO Class 5 Embryology Cleanrooms
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('facilities')} className="hover:text-emerald-600 text-left w-full py-1">
                        RI Witness™ Electronic Sample Security
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('legal')} className="hover:text-emerald-600 text-left w-full py-1">
                        ICMR Level 2 ART Compliance
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                    Need Guidance?
                  </span>
                  <div className="text-sm font-bold text-slate-900 font-heading">
                    Explore all 12+ evidence-based fertility protocols
                  </div>
                  <button
                    onClick={() => handleNavClick('treatments')}
                    className="aura-btn-primary w-full py-2 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1"
                  >
                    <span>View Treatment Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeMegaMenu === 'about' && (
              <div className="grid grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4" />
                    <span>Specialist Faculty</span>
                  </div>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    <li>
                      <button onClick={() => handleNavClick('doctors')} className="hover:text-rose-600 text-left w-full py-1">
                        Meet Senior Reproductive Endocrinologists
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('doctors')} className="hover:text-rose-600 text-left w-full py-1">
                        Senior Clinical Embryology Directors
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('doctors')} className="hover:text-rose-600 text-left w-full py-1">
                        Male Fertility & Andrology Surgeons
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>The Lahari Legacy</span>
                  </div>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    <li>
                      <button onClick={() => handleNavClick('about')} className="hover:text-amber-600 text-left w-full py-1">
                        25+ Years of Clinical Leadership
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('about')} className="hover:text-amber-600 text-left w-full py-1">
                        Zero-Emotional Compromise Philosophy
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('stories')} className="hover:text-amber-600 text-left w-full py-1">
                        1,00,000+ Miracle Birth Milestones
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-purple-600 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Research & Resources</span>
                  </div>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    <li>
                      <button onClick={() => handleNavClick('home')} className="hover:text-purple-600 text-left w-full py-1">
                        Clinical Research Papers & Benchmarks
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('careers')} className="hover:text-purple-600 text-left w-full py-1">
                        Fellowships & Clinical Careers
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavClick('contact')} className="hover:text-purple-600 text-left w-full py-1">
                        Patient Care Concierge
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-rose-50 border border-purple-200 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                    Direct Doctor Access
                  </span>
                  <div className="text-sm font-bold text-slate-900 font-heading">
                    Consult with senior faculty in your city
                  </div>
                  <button
                    onClick={() => handleNavClick('doctors')}
                    className="aura-btn-primary w-full py-2 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1"
                  >
                    <span>View Doctor Profiles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeMegaMenu === 'tools' && (
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
                  <div className="text-xs font-black uppercase text-rose-700 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-rose-600" />
                    <span>Fertility Odds Calculator</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Input your age, AMH, and cycle history to calculate evidence-based pregnancy probability.
                  </p>
                  <button 
                    onClick={() => handleNavClick('calculator')}
                    className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1 pt-1"
                  >
                    Calculate Odds Now →
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="text-xs font-black uppercase text-amber-700 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    <span>0% Interest EMI Customizer</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Transparent package breakdowns with instant monthly installment calculations and zero hidden charges.
                  </p>
                  <button 
                    onClick={() => handleNavClick('packages')}
                    className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1 pt-1"
                  >
                    View EMI Breakdown →
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
                  <div className="text-xs font-black uppercase text-purple-700 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span>Dr. Lahari AI Consultation</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Ask questions 24/7 about IVF medications, protocol timelines, scan preparation, or reports.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onOpenAI();
                    }}
                    className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1 pt-1"
                  >
                    Chat with Dr. Lahari →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-rose-100 px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5 text-sm font-bold text-slate-800">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'home' ? 'text-rose-600' : ''}`}
            >
              <span>Home</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('treatments')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'treatments' ? 'text-rose-600' : ''}`}
            >
              <span>Treatments & Protocols</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('doctors')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'doctors' ? 'text-rose-600' : ''}`}
            >
              <span>Specialists Faculty</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('calculator')}
              className="text-left py-2.5 border-b border-slate-100 text-rose-600 flex items-center justify-between"
            >
              <span>Fertility Odds Calculator</span>
              <Activity className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleNavClick('packages')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'packages' ? 'text-rose-600' : ''}`}
            >
              <span>Pricing & 0% EMI</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('stories')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'stories' ? 'text-rose-600' : ''}`}
            >
              <span>Success Stories</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('branches')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'branches' ? 'text-rose-600' : ''}`}
            >
              <span>Hospital Centres</span>
              <MapPin className="w-4 h-4 text-emerald-600" />
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'about' ? 'text-rose-600' : ''}`}
            >
              <span>About Hospital</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2.5 border-b border-slate-100 flex items-center justify-between ${currentView === 'contact' ? 'text-rose-600' : ''}`}
            >
              <span>Contact & Concierge</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAI();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl aura-btn-glass text-purple-700 font-bold"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                Ask Dr. Lahari AI Assistant
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-rose-50 text-slate-800 font-bold border border-rose-100"
              >
                <UserCheck className="w-4 h-4" />
                Patient Portal Login
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl aura-btn-primary text-white font-bold shadow-md shadow-rose-500/20"
              >
                <Calendar className="w-4 h-4" />
                Book Priority Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

