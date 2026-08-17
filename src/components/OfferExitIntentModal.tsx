import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Gift, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Zap,
  Percent
} from 'lucide-react';

interface OfferExitIntentModalProps {
  onOpenBooking: (doctor?: string, notes?: string) => void;
}

export const OfferExitIntentModal: React.FC<OfferExitIntentModalProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem('aura_offer_dismissed')) {
      setHasDismissed(true);
      return;
    }

    // Scroll depth trigger (>55% of page)
    const handleScroll = () => {
      if (hasDismissed) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrolledRatio = window.scrollY / scrollTotal;
        if (scrolledRatio > 0.55) {
          setIsOpen(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Exit intent trigger (mouse leaving top of window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasDismissed) return;
      if (e.clientY <= 10) {
        setIsOpen(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasDismissed]);

  const handleDismiss = () => {
    setIsOpen(false);
    setHasDismissed(true);
    sessionStorage.setItem('aura_offer_dismissed', 'true');
  };

  const handleClaimOffer = () => {
    handleDismiss();
    onOpenBooking(
      undefined, 
      'Claimed Promo Code: Lahari-CARE2026 (Complimentary 3D Ultrasound + Second Opinion + ₹15k Diagnostics Credit)'
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="aura-glass-rose rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-rose-200/90 relative p-6 sm:p-8 text-slate-900 bg-white/95 dark:bg-slate-900/95 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full bg-rose-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Close offer modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-[11px] font-black uppercase tracking-wider mb-4 border border-amber-300/80">
          <Gift className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Exclusive First-Visit Care Package</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-slate-900 dark:text-white">
          Begin Your Journey with <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">Zero Clinical Compromise</span>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Book your first consultation today and unlock our comprehensive diagnostic starter kit with no obligation.
        </p>

        {/* Benefit Perks Box */}
        <div className="mt-5 space-y-2.5 p-4 rounded-2xl bg-gradient-to-br from-rose-50/90 to-amber-50/90 dark:from-slate-800 dark:to-slate-800/80 border border-rose-200 dark:border-slate-700">
          <div className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">100% Free Initial Specialist Consult</span> (In-Clinic or HD Video)
            </div>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">₹15,000 Diagnostics Voucher</span> towards AMH & Sperm DFI tests
            </div>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Complimentary Previous IVF Report Second Opinion</span> by Senior Embryology Board
            </div>
          </div>
        </div>

        {/* Promo code badge */}
        <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-dashed border-rose-300 dark:border-slate-600">
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            Auto-Applied Promo Code:
          </div>
          <div className="font-mono font-black text-xs text-rose-600 dark:text-rose-400 tracking-wider bg-rose-50 dark:bg-rose-950 px-2.5 py-1 rounded-md border border-rose-200 dark:border-rose-900">
            Lahari-CARE2026
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2.5">
          <button
            onClick={handleClaimOffer}
            className="w-full py-3.5 rounded-2xl aura-btn-primary text-white font-bold text-xs shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-102"
          >
            <Calendar className="w-4 h-4" />
            <span>Claim Free Care Package & Book Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleDismiss}
            className="w-full py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            I’ll browse first without saving the package
          </button>
        </div>

        {/* Trust micro-footer */}
        <div className="mt-4 pt-3 border-t border-rose-100 dark:border-slate-800 flex items-center justify-center gap-2 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>ICMR Certified • Strict Patient Privacy • Zero Sales Calls</span>
        </div>

      </div>
    </div>
  );
};
