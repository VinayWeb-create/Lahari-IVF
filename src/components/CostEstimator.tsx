import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Percent,
  Download,
  Building,
  Check,
  AlertCircle,
  FileCheck2
} from 'lucide-react';
import { PACKAGES_DATA } from '../data/packagesData';
import { CostPackage } from '../types';

interface CostEstimatorProps {
  onOpenBooking: (doctor?: string, notes?: string) => void;
  selectedCity: string;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenBooking, selectedCity }) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(PACKAGES_DATA[2].id); // Advanced ICSI
  const [tenure, setTenure] = useState<number>(18);
  const [downPayment, setDownPayment] = useState<number>(15000);
  const [quoteDownloaded, setQuoteDownloaded] = useState<boolean>(false);

  const currentPkg = PACKAGES_DATA.find((p) => p.id === selectedPkgId) || PACKAGES_DATA[2];

  // Calculate monthly EMI
  const loanAmount = Math.max(0, currentPkg.basePrice - downPayment);
  const calculatedMonthlyEmi = Math.round(loanAmount / tenure);

  const handleDownloadQuote = () => {
    setQuoteDownloaded(true);
    setTimeout(() => setQuoteDownloaded(false), 4000);
  };

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80 dark:border-amber-800">
            <Percent className="w-3.5 h-3.5 text-amber-600" />
            100% Transparent Financial Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Transparent Pricing & <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">0% No-Cost EMI</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            No surprise add-ons. Every package includes all cleanroom consumables, embryology media, and doctor procedures in {selectedCity}.
          </p>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
          {PACKAGES_DATA.map((pkg) => {
            const isSelected = selectedPkgId === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => setSelectedPkgId(pkg.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? 'aura-btn-primary text-white shadow-lg scale-102 ring-2 ring-rose-500'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-rose-50/50 dark:hover:bg-slate-800 border border-rose-100 dark:border-slate-800 shadow-2xs'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-2.5 right-3 text-[9px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-xs">
                    Most Popular
                  </span>
                )}
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    isSelected ? 'text-rose-100' : 'text-slate-400'
                  }`}>
                    {pkg.category}
                  </div>
                  <div className="font-bold text-xs line-clamp-2 mb-2">
                    {pkg.name}
                  </div>
                </div>

                <div>
                  <div className="text-lg font-black font-heading">
                    ₹{pkg.basePrice.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-[11px] font-semibold ${isSelected ? 'text-amber-200' : 'text-amber-600 dark:text-amber-400'}`}>
                    from ₹{pkg.emiPerMonth.toLocaleString('en-IN')}/mo
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Package & EMI Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Package Inclusions & Breakdown */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-rose-100 dark:border-slate-800 shadow-xs space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Comprehensive Package Inclusions
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  {currentPkg.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Success Rate: {currentPkg.successRate}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                What's 100% Included with Zero Hidden Fees:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentPkg.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-rose-50/40 dark:bg-slate-800/60 p-3 rounded-xl border border-rose-100 dark:border-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Value Perks with Amber accents */}
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Complimentary Clinical Perks Included
              </div>
              <div className="flex flex-wrap gap-2">
                {currentPkg.freePerks.map((perk, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800 shadow-2xs">
                    ✓ {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Illustrative Disclaimer Note */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Illustrative Financial Disclaimer</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                *Exact clinical costs are finalized post baseline evaluation. Ovarian stimulation medication doses vary with patient AMH/BMI and are billed at direct manufacturer MRP. No-cost EMI loan approvals are subject to partner bank verification (HDFC, Bajaj Finserv, LiquiLoans).
              </p>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span>Includes 1 Year Cryopreservation storage with 24/7 automated temperature monitoring.</span>
            </div>

          </div>

          {/* Right: Interactive 0% Interest EMI Customizer with Amber Accents */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-rose-100 dark:border-slate-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-rose-100 dark:border-slate-800 pb-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Healthcare Finance Desk
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  0% Interest EMI Calculator
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center border border-amber-200 dark:border-amber-800">
                <CreditCard className="w-5 h-5" />
              </div>
            </div>

            {/* Total Package Amount */}
            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800 border border-amber-100 dark:border-slate-700 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Total Package Cost:</span>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                ₹{currentPkg.basePrice.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                <span>Optional Initial Payment</span>
                <span className="text-amber-600 dark:text-amber-400">₹{downPayment.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.floor(currentPkg.basePrice * 0.5)}
                step="5000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-amber-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹0 (Zero Down Payment)</span>
                <span>₹{Math.floor(currentPkg.basePrice * 0.5).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Tenure Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                Select EMI Tenure (Interest-Free)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[6, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTenure(m)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      tenure === m
                        ? 'aura-btn-primary text-white shadow-xs'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-rose-50/50'
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>

            {/* Resulting Monthly EMI Highlight with Amber Warmth */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-600 via-rose-600 to-purple-700 text-white space-y-1 shadow-md">
              <div className="text-[11px] font-semibold text-amber-100 uppercase tracking-wider">
                Your Monthly Outflow
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading">
                ₹{calculatedMonthlyEmi.toLocaleString('en-IN')}
                <span className="text-sm font-normal text-amber-100"> / month</span>
              </div>
              <div className="text-[10px] text-amber-100 pt-1">
                Zero processing fees • Instant paperless approval via Bajaj Finserv / HDFC / Care Health
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <button
                onClick={() => onOpenBooking(undefined, `Interested in ${currentPkg.name} (₹${currentPkg.basePrice}) with ${tenure} months EMI`)}
                className="w-full py-3.5 rounded-2xl aura-btn-primary text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Apply for 0% EMI Consultation</span>
              </button>

              <button
                onClick={handleDownloadQuote}
                className="w-full py-2.5 rounded-xl border border-amber-200 dark:border-slate-700 bg-amber-50/50 dark:bg-slate-800 hover:bg-amber-100/50 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                {quoteDownloaded ? (
                  <>
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">Price Quote Downloaded for {selectedCity}!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-amber-600" />
                    <span>Download Official Quote (PDF)</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

