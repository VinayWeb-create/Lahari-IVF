import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  Percent,
  Calendar,
  HeartHandshake
} from 'lucide-react';
import { PACKAGES_DATA } from '../data/packagesData';
import { CostPackage } from '../types';

interface PackagesEMIViewProps {
  onOpenBooking: (doctor?: string, notes?: string) => void;
  selectedCity: string;
}

export const PackagesEMIView: React.FC<PackagesEMIViewProps> = ({ onOpenBooking, selectedCity }) => {
  const [selectedPkg, setSelectedPkg] = useState<CostPackage>(PACKAGES_DATA[1]); // IVF default
  const [loanAmount, setLoanAmount] = useState<number>(145000);
  const [downPayment, setDownPayment] = useState<number>(25000);
  const [tenure, setTenure] = useState<number>(12);

  // 0% Interest EMI formula
  const principal = Math.max(0, loanAmount - downPayment);
  const monthlyEmi = Math.round(principal / tenure);

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 relative overflow-hidden border-b border-rose-100/80">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-3">
            <Percent className="w-4 h-4 text-amber-500" />
            <span>Zero Hidden Cost Promise • 0% Interest EMI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Transparent Pricing & Custom{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              0% Interest EMI Plans
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            We believe financial anxiety should never stand between you and your dream of parenthood. Every package includes doctor consultations, stimulation monitoring, and cleanroom embryology with zero hidden fees.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-rose-200/80 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Instant Approval from Top Banks</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>No Processing Fees or Hidden Penalties</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% ICMR ART Act 2021 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Packages Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              All-Inclusive Fertility Care Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select your required protocol to preview transparent inclusions, blastocyst guarantees, and financing terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES_DATA.map((pkg) => {
              const isSelected = selectedPkg.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => {
                    setSelectedPkg(pkg);
                    setLoanAmount(pkg.basePrice);
                  }}
                  className={`rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-rose-500 ring-2 ring-rose-500/20 shadow-2xl bg-rose-50/40'
                      : 'border-slate-200/80 bg-[#FFFDFD] hover:border-rose-200 hover:shadow-lg'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-100/80 text-rose-800">
                        {pkg.category}
                      </span>
                      {pkg.isPopular && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xs">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      {pkg.name}
                    </h3>

                    <div>
                      <div className="text-2xl font-extrabold text-slate-900">
                        ₹{pkg.basePrice.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        or 0% EMI from <span className="font-bold text-rose-600">₹{pkg.emiPerMonth.toLocaleString('en-IN')}/mo</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-rose-100">
                      <div className="text-[11px] font-bold text-slate-600">Key Inclusions:</div>
                      {pkg.inclusions.slice(0, 4).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(undefined, `Inquiry for ${pkg.name} Package (₹${pkg.basePrice})`);
                    }}
                    className={`mt-6 w-full py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'aura-btn-primary text-white shadow-md'
                        : 'bg-white border border-slate-200 text-slate-800 hover:bg-rose-50/50'
                    }`}
                  >
                    Select & Book Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 0% Interest EMI Loan Customizer */}
      <section className="py-16 bg-gradient-to-b from-rose-50/50 via-pink-50/30 to-amber-50/40 text-slate-900 border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Interactive Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-amber-500" />
                <span>Instant 0% Interest Loan Calculator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                Customize Your Monthly Fertility Investment
              </h2>

              <p className="text-xs text-slate-600">
                Partnered with HDFC, ICICI, Axis, and Bajaj Finserv to provide immediate paperless loan sanctions with zero interest markup.
              </p>

              {/* Loan Amount Slider */}
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">Total Treatment Cost:</span>
                  <span className="font-bold text-slate-900 text-base">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="350000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>₹25,000 (IUI)</span>
                  <span>₹3,50,000 (Multi-Cycle IVF + PGT-A)</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">Initial Down Payment:</span>
                  <span className="font-bold text-slate-900 text-base">₹{downPayment.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={loanAmount - 10000}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Tenure Selection */}
              <div className="space-y-2">
                <div className="text-xs text-slate-700 font-medium">Select EMI Tenure (0% Interest):</div>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 9, 12, 18].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenure(t)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        tenure === t
                          ? 'aura-btn-primary text-white shadow-md'
                          : 'bg-white border border-rose-100 text-slate-700 hover:bg-rose-50/50'
                      }`}
                    >
                      {t} Months
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Result Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white border border-rose-200/90 space-y-6 shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-rose-600 tracking-widest">Calculated Output</span>
                  <div className="text-xs text-slate-500 mt-1">Your Monthly Payment at 0% APR:</div>
                  <div className="text-4xl font-black text-rose-600 mt-1">
                    ₹{monthlyEmi.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-500"> / month</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-rose-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Financed Principal:</span>
                    <span className="font-bold text-slate-900">₹{principal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Interest Rate:</span>
                    <span className="font-bold text-emerald-600">0.0% Subsidized</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Repayment Duration:</span>
                    <span className="font-bold text-slate-900">{tenure} Months</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(undefined, `Applied for 0% EMI of ₹${monthlyEmi}/mo for ${tenure} months`)}
                  className="aura-btn-primary w-full py-3.5 rounded-2xl text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
                >
                  Apply for Pre-Approved 0% EMI
                </button>

                <div className="text-[11px] text-slate-500 text-center">
                  Instant eligibility check • No impact on CIBIL score
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
