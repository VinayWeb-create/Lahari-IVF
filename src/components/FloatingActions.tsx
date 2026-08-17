import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Sparkles, 
  Phone, 
  ArrowUp,
  X,
  Stethoscope,
  ChevronUp
} from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
  onOpenAI: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenBooking,
  onOpenAI
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatNudge, setShowChatNudge] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Trigger gentle chat nudge once after 4 seconds of reading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatNudge(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-auto"
      aria-label="Care Concierge & Clinical Assistance"
    >
      {/* 1. Scroll-To-Top floating circular button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/95 text-slate-700 shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer group mb-2"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5 text-slate-600 group-hover:text-rose-600 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. AI Assistant Contextual Nudge Bubble */}
      <AnimatePresence>
        {showChatNudge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-rose-950/10 border border-rose-100 max-w-[280px] relative mb-2 ring-1 ring-rose-50"
          >
            <button
              onClick={() => setShowChatNudge(false)}
              className="absolute top-2 right-2 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Dismiss message"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="pr-2">
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5 mb-1">
                  Dr. Lahari AI Copilot
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50"></span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  Have questions on IVF success odds, AMH tests, or 0% EMI plans?
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Enterprise Expandable FAB */}
      <div className="relative flex flex-col items-end">
        
        {/* Expandable Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 items-end mb-4"
            >
              <a
                href="tel:+911149002872"
                className="flex items-center gap-3 group"
                title="Call 24/7 Helpline"
              >
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  24/7 Helpline
                </span>
                <div className="w-12 h-12 rounded-full bg-white text-rose-600 shadow-xl border border-rose-100 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
              </a>

              <a
                href="https://wa.me/918004502872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                title="WhatsApp Chat"
              >
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  WhatsApp Support
                </span>
                <div className="w-12 h-12 rounded-full bg-white text-emerald-600 shadow-xl border border-emerald-100 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </a>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAI();
                }}
                className="flex items-center gap-3 group"
              >
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  Dr. Lahari AI
                </span>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-rose-500 text-white shadow-xl border border-purple-200/50 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Primary FAB */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer relative ${
            isOpen 
              ? 'bg-white text-slate-800 border border-slate-200 rotate-180' 
              : 'bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600 text-white hover:shadow-rose-500/30 hover:scale-105'
          }`}
          aria-label="Toggle Concierge Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              {/* Pulse effect */}
              <span className="absolute inset-0 rounded-full animate-ping bg-rose-400 opacity-20"></span>
              <Stethoscope className="w-6 h-6" />
            </>
          )}
        </button>
      </div>

    </aside>
  );
};



