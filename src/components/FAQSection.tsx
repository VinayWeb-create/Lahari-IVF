import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  MessageCircle,
  Calendar
} from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

interface FAQSectionProps {
  onOpenBooking: () => void;
  onOpenAI: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking, onOpenAI }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'IVF & ICSI', 'Costs & EMI', 'Egg Freezing', 'Male Factor'];

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFD] to-rose-50/20 border-t border-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            Clear Answers for Your Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Frequently Asked Clinical Questions
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Audited facts on blastocyst rates, procedure timelines, zero-pain anesthesia, and transparent financing.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-rose-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g., Blastocyst rate, 0% EMI, Pain, AMH, PGT-A)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-rose-200/80 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-xs"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'aura-btn-primary text-white shadow-md'
                  : 'bg-white text-slate-600 border border-rose-100 hover:bg-rose-50/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-10">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-xs hover:border-rose-300 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-rose-50/30 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 font-heading">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-rose-50 text-rose-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-rose-500 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-100 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Can't Find Answer Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50/80 via-pink-50/50 to-amber-50/80 border border-rose-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-rose-600 flex items-center justify-center shrink-0 shadow-xs border border-rose-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific medical query?</div>
              <div className="text-xs text-slate-600">Ask Dr. Lahari AI Assistant or speak to our clinical care coordinator</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAI}
              className="px-4 py-2.5 rounded-xl bg-white border border-rose-200 text-rose-700 text-xs font-bold hover:bg-rose-50 transition-colors cursor-pointer"
            >
              Ask AI Assistant
            </button>
            <button
              onClick={onOpenBooking}
              className="aura-btn-primary px-4 py-2.5 rounded-xl text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              Book Specialist
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
